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
import { Service, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'ServiceForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        service: '',
        hour_needed: 1
      } as Service
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('service/create', vars.register)
          root.$router.push('/services')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('service/update', vars.register)
          root.$router.push('/services')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`services/${id}`)
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
