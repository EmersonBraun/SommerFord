<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
       <div class="q-pa-md col-12">
          <q-input clearable v-model="register.phone" outlined label="phone" ref="phone" :rules="[ $rules.required('phone is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-toggle hide-bottom-space v-model="register.whatsapp" label="Whatsapp" ref="whatsapp"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { Phone, create, update } from './index'

export default defineComponent({
  name: 'PhoneForm',
  setup (/*_, { refs, root }*/) {
    const vars = reactive({
      register: {
        phone: '',
        whatsapp: true
      } as Phone
    })
    const functions = {
      create () {},
      update () {}
    }

    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
