<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-select
            hide-bottom-space
            clearable outlined
            v-model="register.module_id"
            emit-value map-options
            :options="modules"
            option-value="id"
            option-label="name"
            label="Module"
            ref="module_id"
            :rules="[ $rules.minValue(1, 'Module is required') ]"
            @input-value="selectedModule"
            />
        </div>
        <div class="q-pa-md col-6">
          <q-input clearable v-model="register.origin" outlined label="Origin" ref="origin" :rules="[ $rules.required('Origin is required') ]"/>
        </div>
        <div v-if="register.origin" class="q-pa-md col-6">
          <q-input clearable v-model="register.foreign" outlined label="Foreign" ref="foreign" :rules="[ $rules.required('foreign is required') ]"/>
        </div>
        <div v-if="register.foreign" class="q-pa-md col-6">
          <q-input clearable v-model="register.model_name" outlined label="Model name" ref="model_name" :rules="[ $rules.required('Model Name is required') ]"/>
        </div>
        <div v-if="register.foreign" class="q-pa-md col-6">
          <q-input clearable v-model="register.table_name" outlined label="Table name" ref="route_name" :rules="[ $rules.required('Table name is required') ]"/>
        </div>
        <div v-if="register.foreign" class="q-pa-md col-6">
          <q-input clearable v-model="register.pivot_table_name" outlined label="Pivot table name" ref="pivot_table_name" :rules="[ $rules.required('Pivot table name is required') ]"/>
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
import { get } from 'src/libs/api'
import { Many, fields } from './index'
import { validate } from '../../libs/validator'
import { toPascalCase, toSnakeCasePlural } from 'src/libs/name'

export default defineComponent({
  name: 'GroupForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        model_name: '',
        table_name: '',
        pivot_table_name: '',
        origin: '',
        foreign: '',
        module_id: 0
      } as Many,
      modules: [] as unknown,
    })
    const functions = {      
      selectedModule (val: string) {
        vars.register.origin = val
      },
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('many/create', vars.register)
          root.$router.push('/manies')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('many/update', vars.register)
          root.$router.push('/manies')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`manies/${id}`)
          vars.register = response
        }
        vars.modules = await get('modules')
      }
    }
    void functions.main()
    watch(() => vars.register.foreign, () => {
      vars.register.model_name = toPascalCase(vars.register.foreign)
      vars.register.table_name = toSnakeCasePlural(vars.register.foreign)
      const names = [
        vars.register.foreign,
        vars.register.origin
      ]
      vars.register.pivot_table_name = names.sort().join('_has_')
    })

    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
