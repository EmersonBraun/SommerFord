<template>
  <q-page class="doc-container q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" to="/"/>
      <q-breadcrumbs-el label="List" to="/groups"/>
      <q-breadcrumbs-el label="Form" />
    </q-breadcrumbs>
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
            v-model="servicesSelecteds"
            emit-value map-options
            :options="services"
            option-label="service"
            label="Services"
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
import { defineComponent, reactive, toRefs, watch } from '@vue/composition-api'
import { get, post } from 'src/libs/api'
import { Group, fields } from './index'
import { Service } from 'src/pages/services'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'GroupForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        group: ''
      } as Group,
      services: [] as unknown,
      servicesSelecteds: [] as Service[]
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
      async main () {
        const id = root.$route.params?.id
        if (id) {
          vars.register = await get(`groups/${id}`)
          const response = await get(`groups/${id}/services`)
          vars.servicesSelecteds = response[0].service
        }
        vars.services = await get('services')
      }
    }
    void functions.main()
    watch(() => vars.servicesSelecteds, async (newVal) => {
      const ids = newVal.map(s => s.id)
      console.log('ids',ids)
      await post(`groups/${vars.register.id}/services`, ids)
    })

    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
