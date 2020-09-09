<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-select
            hide-bottom-space
            clearable outlined
            v-model="register.field_id"
            emit-value map-options
            :options="fieldsOptions"
            option-value="id"
            option-label="name"
            label="Field"
            ref="field_id"
            :rules="[ $rules.minValue(1, 'Field is required') ]"
            />
        </div>
        <div class="q-pa-md col-6">
          <q-input clearable v-model="register.name" outlined label="name" ref="name" :rules="[ $rules.required('Module name is required') ]"/>
        </div>
        <div v-if="register.name" class="q-pa-md col-6">
          <q-input clearable v-model="register.model_name" outlined label="Model name" ref="model_name" :rules="[ $rules.required('Model Name is required') ]"/>
        </div>
        <div v-if="register.name" class="q-pa-md col-6">
          <q-input clearable v-model="register.table_name" outlined label="Table name" ref="route_name" :rules="[ $rules.required('Table name is required') ]"/>
        </div>
        <div class="q-pa-md col-6">
          <q-select
            hide-bottom-space
            clearable outlined
            v-model="register.field_type"
            emit-value map-options
            :options="fieldTypes"
            label="Field type"
            ref="field_type"
            :rules="[ $rules.required('Field Type is required') ]"
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
import { toPascalCase, toSnakeCasePlural } from 'src/libs/name'
import { fieldTypes } from 'src/config/selects'
import { get } from 'src/libs/api'
import { Relation, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'ProjectTypeForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        name: '',
        model_name: '',
        table_name: '',
        field_id: 0,
        field_type: 'integer',
      } as Relation,
      fieldTypes,
      fieldsOptions: [] as unknown
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('relation/create', vars.register)
          root.$router.push('/relations')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('relation/update', vars.register)
          root.$router.push('/relations')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`relations/${id}`)
          vars.register = response
        }
        vars.fieldsOptions = await get('fields')
      }
    }
    void functions.main()

    watch(() => vars.register.name, () => {
      vars.register.model_name = toPascalCase(vars.register.name)
      vars.register.table_name = toSnakeCasePlural(vars.register.name)
    })
    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
