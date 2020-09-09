<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input
          clearable
          v-model="register.value"
          outlined
          label="value"
          ref="value"
          mask="#.##"
          fill-mask="0"
          reverse-fill-mask
          :rules="[ 
            $rules.required('value is required'),
            $rules.minValue(1, 'Need be more than ZERO')
          ]"
          />
        </div>
        <div class="q-pa-md col-12">
          <q-input hide-bottom-space outlined v-model="register.date" label="Payment date" mask="####-##-##" :rules="[ $rules.required('Payment date is required') ]">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="register.date" @input="() => $refs.qDateProxy.hide()" today-btn mask="YYYY-MM-DD"/>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="q-pa-md col-12">
          <q-select
            hide-bottom-space
            clearable outlined
            v-model="register.payment_status"
            emit-value map-options
            :options="payments"
            option-value="payment_status"
            option-label="payment_status"
            label="payment_status"
            ref="payment_status"
            :rules="[ $rules.required('payment_status is required') ]"
            />
        </div>
        <div class="q-pa-md col-12">
          <q-select
            hide-bottom-space
            clearable outlined
            v-model="register.client_id"
            emit-value map-options
            :options="clients"
            option-value="id"
            option-label="name"
            label="Client"
            ref="client_id"
            :rules="[ $rules.minValue(1, 'Client is required') ]"
            />
        </div>
        <div class="q-pa-md col-12">
          <q-btn @click="register.id ? update() : create()" color="primary" :label="register.id ? 'Edit' : 'Create'" class="full-width"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { get } from 'src/libs/api'
import { Payment, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'PaymentForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        value: 0,
        date: '',
        payment_status: '',
        client_id: 0,
      } as Payment,
      payments: [] as unknown,
      clients: [] as unknown
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('payment/create', vars.register)
          root.$router.push('/payments')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('payment/update', vars.register)
          root.$router.push('/payments')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`payments/${id}`)
          vars.register = response
        }
        vars.register.date = new Date().toJSON().slice(0,10)
        vars.payments = await get('payment-statuses')
        vars.clients = await get('clients')
      }
    }
    void functions.main()

    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
