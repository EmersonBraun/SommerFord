<template>
  <q-page class="doc-container q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" to="/"/>
      <q-breadcrumbs-el label="List" to="/phones"/>
      <q-breadcrumbs-el label="Form" />
    </q-breadcrumbs>
    <q-card flat>
      <q-card-section class="row">
       <div class="q-pa-md col-12">
          <q-input clearable v-model="register.phone" mask="(##) ##### - ####" outlined label="phone" ref="phone" :rules="[ $rules.required('phone is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-toggle hide-bottom-space v-model="register.whatsapp" label="Whatsapp" ref="whatsapp"/>
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
import { Phone, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'PhoneForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        phone: '',
        whatsapp: true,
        client_id: 0
      } as Phone,
      clients: [] as unknown
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('phone/create', vars.register)
          root.$router.push('/phones')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('phone/update', vars.register)
          root.$router.push('/phones')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`phones/${id}`)
          response.whatsapp = Boolean(response.whatsapp)
          vars.register = response
        }
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
