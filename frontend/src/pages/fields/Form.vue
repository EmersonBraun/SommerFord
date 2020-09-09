<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.name" outlined label="Name" ref="name" :rules="[ $rules.required('Name is required') ]"/>
        </div>
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
            />
        </div>
        <div class="q-pa-md col-12">
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
          <q-toggle hide-bottom-space v-model="register.required" label="Required"/>
        </div>
        <div class="q-pa-md col-12">
          <q-toggle hide-bottom-space v-model="register.relationed" label="Relationed"/>
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
import { fieldTypes } from 'src/config/selects'
import { Field, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'FieldForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        name: '',
        module_id: 0,
        field_type: '',
        required: false,
        relationed: false,
      } as Field,
      modules: [] as unknown,
      fieldTypes
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('field/create', vars.register)
          root.$router.push('/fields')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('field/update', vars.register)
          root.$router.push('/fields')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`fields/${id}`)
          vars.register = response
        }
        vars.modules = await get('modules')
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
