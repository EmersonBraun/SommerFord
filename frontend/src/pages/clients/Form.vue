<template>
  <q-page class="doc-container q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" to="/"/>
      <q-breadcrumbs-el label="List" to="/clients"/>
      <q-breadcrumbs-el label="Form" />
    </q-breadcrumbs>
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
          <q-btn @click="register.id ? update() : create()" color="primary" :label="register.id ? 'Edit' : 'Create'" class="full-width"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs} from '@vue/composition-api'
import { get } from 'src/libs/api'
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
          await root.$store.dispatch('client/create', vars.register)
          root.$router.push('/clients')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('client/update', vars.register)
          root.$router.push('/clients')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`clients/${id}`)
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
