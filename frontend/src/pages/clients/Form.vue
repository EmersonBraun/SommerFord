<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.name" outlined label="Name" ref="name" :rules="[ $rules.required('Name is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.email" outlined label="Nome" ref="email" :rules="[ $rules.required('Name is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.role" outlined label="Nome" ref="role" :rules="[ $rules.required('Name is required') ]"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

declare type Client = {
  id?: number
  name: string
  email: string
  role: string
}

export default defineComponent({
  name: 'Login',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        name: '',
        email: '',
        role: '',
      }
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
