<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.payment_status" outlined label="payment_status" ref="payment_status" :rules="[ $rules.required('payment_status is required') ]"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { PaymentStatus, create, update } from './index'

export default defineComponent({
  name: 'PaymentStatusForm',
  setup (/*_, { refs, root }*/) {
    const vars = reactive({
      register: {
        payment_status: ''
      } as PaymentStatus
    })
    const functions = {
      create,
      update
    }

    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
