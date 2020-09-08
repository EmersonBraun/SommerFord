<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.value" outlined label="value" ref="value" :rules="[ $rules.required('value is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-input hide-bottom-space :dense="denseVal" outlined v-model="register.fato_data" label="Data da fato" mask="##/##/####" :rules="[ $rules.required('Data do fato é obrigatória') ]">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="register.date" @input="() => $refs.qDateProxy.hide()" today-btn mask="DD/MM/YYYY"/>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="q-pa-md col-12">
          <q-select hide-bottom-space clearable outlined v-model="register.payment_status" emit-value map-options :options="payments" label="payment_status" ref="payment_status" :rules="[ $rules.required('payment_status é obrigatória') ]"/>
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
        date: '1970-01-01',
        payment_status: 0
      } as Payment,
      payments: []
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
      }
    }

    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
