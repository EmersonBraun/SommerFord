<template>
  <q-card-section class="row">
    <div class="q-pa-md col-4">
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
    <div class="q-pa-md col-4">
      <q-input hide-bottom-space outlined v-model="register.date" label="Payment date" ref="date" mask="####-##-##" :rules="[ $rules.required('Payment date is required') ]">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="register.date" @input="() => $refs.qDateProxy.hide()" today-btn mask="YYYY-MM-DD"/>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
    <div class="q-pa-md col-4">
      <q-select
        hide-bottom-space
        clearable outlined
        v-model="register.payment_status"
        emit-value map-options
        :options="paymentsStatuses"
        option-value="payment_status"
        option-label="payment_status"
        label="payment_status"
        ref="payment_status"
        :rules="[ $rules.required('payment_status is required') ]"
        />
    </div>
    <div class="q-pa-md col-12">
      <q-btn @click="register.id ? update() : create()" color="primary" :label="register.id ? 'Edit' : 'Create'" class="full-width"/>
    </div>
    <div class="q-pa-md col-12" v-if="payments.length">
      <q-list dense bordered padding >
        <q-item clickable v-ripple >
          <q-item-section>Value</q-item-section>
          <q-item-section>Status</q-item-section>
          <q-item-section>Date</q-item-section>
          <q-item-section>Actions</q-item-section>
        </q-item>
        <q-item clickable v-ripple v-for="payment in payments" :key="payment.id">
          <q-item-section>{{payment.value}}</q-item-section>
          <q-item-section>{{payment.payment_status}}</q-item-section>
          <q-item-section>{{payment.date}}</q-item-section>
          <q-item-section>
            <q-btn-group spread>
              <q-btn label="Editar" icon="fa fa-plus" @click="edit(payment)"/>
              <q-btn label="Apagar" icon="fa fa-plus" @click="remove(payment.id)"/>
            </q-btn-group>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from '@vue/composition-api'
import { get, post } from 'src/libs/api'
import { confirmMsg } from 'src/libs/dialog'
import { validate } from 'src/libs/validator'
import { Payment, fields } from 'src/pages/payments'


export default defineComponent({
  name: 'PaymentForm',
  props: {
    clientId: {
      type: Number,
      required: true
    },
  },
  setup (props, { refs, root }) {
    const vars = reactive({
      register: {
        value: 0,
        date: '',
        payment_status: '',
        client_id: props.clientId,
      } as Payment,
      payments: [] as Payment[],
      paymentsStatuses: [],
    })
    const functions = {
      cleanRegister () {
        vars.register = {
        value: 0,
        date: '',
        payment_status: '',
        client_id: props.clientId,
      }
      },
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('payment/create', vars.register)
          void this.main()
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('payment/update', vars.register)
          void this.main()
        }
      },
      edit (register: Payment) {
        vars.register = register
      },
      remove(id: number | undefined) {
        root.$q.dialog(confirmMsg('Alert!','are you sure?')).onOk(() => {
          void root.$store.dispatch('payment/remove', id)
          void this.main()
        })
      },
      async main () {
        this.cleanRegister()
        vars.paymentsStatuses = await get('payment-statuses')
        vars.payments = await get(`payments/${props.clientId}/clients`)
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
