<template>
  <q-card-section class="row">
    <div class="q-pa-md col-3">
      <q-input clearable v-model="register.name" outlined label="Name" ref="name" :rules="[ $rules.required('Name is required') ]"/>
    </div>
    <div class="q-pa-md col-3">
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
    <div class="q-pa-md col-3">
      <q-toggle hide-bottom-space v-model="register.required" label="Required"/>
    </div>
    <div class="q-pa-md col-3">
      <q-toggle hide-bottom-space v-model="register.relationed" label="Relationed"/>
    </div>
    <template v-if="register.relationed">
      <div class="q-pa-md col-3">
        <q-input clearable v-model="register.relationed_name" @input="changeNames" outlined label="name" ref="name" :rules="[ $rules.required('Module name is required') ]"/>
      </div>
      <div v-if="register.relationed_name" class="q-pa-md col-3">
        <q-input clearable v-model="register.relationed_model_name" outlined label="Model name" ref="model_name" :rules="[ $rules.required('Model Name is required') ]"/>
      </div>
      <div v-if="register.relationed_name" class="q-pa-md col-3">
        <q-input clearable v-model="register.relationed_table_name" outlined label="Table name" ref="route_name" :rules="[ $rules.required('Table name is required') ]"/>
      </div>
      <div class="q-pa-md col-3">
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
    </template>
    <div class="q-pa-md col-12">
      <q-btn @click="register.id ? update() : create()" color="primary" :label="register.id ? 'Edit' : 'Create'" class="full-width"/>
    </div>
    <div class="q-pa-md col-12" v-if="fields.length">
      <q-list dense bordered padding >
        <q-item clickable v-ripple >
          <q-item-section>Name</q-item-section>
          <q-item-section>Type</q-item-section>
          <q-item-section>Required</q-item-section>
          <q-item-section>Relationed</q-item-section>
          <q-item-section>Actions</q-item-section>
        </q-item>
        <q-item clickable v-ripple v-for="field in fields" :key="field.id">
          <q-item-section>{{field.name}}</q-item-section>
          <q-item-section>{{field.field_type}}</q-item-section>
          <q-item-section>{{field.required}}</q-item-section>
          <q-item-section v-if="!field.relationed">No</q-item-section>
          <q-item-section v-else>with model: {{ field.relationed_model_name }}</q-item-section>
          <q-item-section>
            <q-btn-group spread>
              <q-btn label="Editar" icon="fa fa-plus" @click="edit(field)"/>
              <q-btn label="Apagar" icon="fa fa-plus" @click="remove(field.id)"/>
            </q-btn-group>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { toPascalCase, toSnakeCasePlural } from 'src/libs/name'
import { get } from 'src/libs/api'
import { fieldTypes } from 'src/config/selects'
import { validate } from 'src/libs/validator'
import { Field, fields } from 'src/pages/fields'
import { confirmMsg } from 'src/libs/dialog'

export default defineComponent({
  name: 'ModuleFormDialog',
  props: {
    moduleId: {
      type: Number,
      required: true
    },
  },
  setup (props, { refs, root }) {
    const vars = reactive({
      register: {
        name: '',
        module_id: props.moduleId,
        field_type: '',
        required: false,
        relationed: false,
        relationed_name: '',
        relationed_model_name: '',
        relationed_table_name: '',
      } as Field,
      fields: [] as Field[],
      fieldTypes
    })
    const functions = {
      changeNames (val: string) {
        vars.register.relationed_model_name = toPascalCase(val)
        vars.register.relationed_table_name = toSnakeCasePlural(val)
      },
      cleanRegister () {
        vars.register = {
          name: '',
          module_id: props.moduleId,
          field_type: '',
          required: false,
          relationed: false,
          relationed_name: '',
          relationed_model_name: '',
          relationed_table_name: '',
        }
      },
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('field/create', vars.register)
          void this.main()
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('field/update', vars.register)
          void this.main()
        }
      },
      edit (register: Field) {
        vars.register = register
      },
      remove(id: number | undefined) {
        root.$q.dialog(confirmMsg('Alert!','are you sure?')).onOk(() => {
          void root.$store.dispatch('field/remove', id)
          void this.main()
        })
      },
      async main () {
        this.cleanRegister()
        vars.fields = await get(`fields/${props.moduleId}/modules`)
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
