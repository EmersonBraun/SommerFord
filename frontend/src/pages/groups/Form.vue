<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.group" outlined label="group" ref="group" :rules="[ $rules.required('group is required') ]"/>
        </div>
        <div class="q-pa-md col-12" v-if="register.id">
          <q-select
            use-chips
            multiple
            stack-label
            hide-bottom-space
            clearable outlined
            v-model="servicesIds"
            emit-value map-options
            :options="services"
            option-value="id"
            option-label="service"
            label="Services"
            @add="updateServices"
            @remove="updateServices"
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
import { get, post } from 'src/libs/api'
import { Group, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'GroupForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        group: ''
      } as Group,
      services: [] as unknown,
      servicesIds: []
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('group/create', vars.register)
          root.$router.push('/groups')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('group/update', vars.register)
          root.$router.push('/groups')
        }
      },
      async updateServices () {
        await post(`groups/${vars.register.id}/services`, vars.servicesIds)
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          vars.register = await get(`groups/${id}`)
          const response = await get(`groups/${id}/services`)
            console.log(response)
          if (response.service) {
            vars.servicesIds = response.service.map(r => r.id)
          }
        }
        vars.services = await get('services')
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
