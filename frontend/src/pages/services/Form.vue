<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.service" outlined label="service" ref="service" :rules="[ $rules.required('service is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.hour_needed" type="number" outlined label="hour_needed" ref="hour_needed" :rules="[ $rules.required('hour_needed is required') ]"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { Service, create, update } from './index'

export default defineComponent({
  name: 'ServiceForm',
  setup (/*_, { refs, root }*/) {
    const vars = reactive({
      register: {
        service: '',
        hour_needed: 1
      } as Service
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
