<template>
  <q-page class="doc-container q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" to="/"/>
      <q-breadcrumbs-el label="List" to="/payment-statusses"/>
      <q-breadcrumbs-el label="Form" />
    </q-breadcrumbs>
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.payment_status" outlined label="payment_status" ref="payment_status" :rules="[ $rules.required('payment_status is required') ]"/>
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
import { PaymentStatus, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'PaymentStatusForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        payment_status: ''
      } as PaymentStatus
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('paymentStatus/create', vars.register)
          root.$router.push('/payment-statuses')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('paymentStatus/update', vars.register)
          root.$router.push('/payment-statuses')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`payment-statuses/${id}`)
          vars.register = response
        }
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
