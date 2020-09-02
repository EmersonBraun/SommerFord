<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.name" outlined label="Name" ref="name" :rules="[ $rules.required('Name is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.email" outlined label="Email" ref="email" :rules="[ $rules.required('email is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.role" outlined label="Role" ref="role" :rules="[ $rules.required('Role is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-btn @click="register.id ? edit : create" color="primary" :label="register.id ? 'Edit' : 'Create'" class="full-width"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { Client, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'ClientForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        name: '',
        email: '',
        role: '',
      } as Client
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('clients/create', vars.register)
          root.$router.push('clients')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('clients/update', vars.register)
          root.$router.push('clients')
        }
      }
    }

    async function main () {
      const id = root.$route.params?.id
      if (id) {
        vars.register = await root.$store.dispatch('clients/getOne', id)
      }
    }
    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
