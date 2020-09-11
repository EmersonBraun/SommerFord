<template>
  <q-card-section class="row">
    <div class="q-pa-md col-3">
      <q-input clearable v-model="register.foreign" @input="changeNames" outlined label="Foreign" ref="foreign" :rules="[ $rules.required('foreign is required') ]"/>
    </div>
    <div v-if="register.foreign" class="q-pa-md col-3">
      <q-input clearable v-model="register.model_name" outlined label="Model name" ref="model_name" :rules="[ $rules.required('Model Name is required') ]"/>
    </div>
    <div v-if="register.foreign" class="q-pa-md col-3">
      <q-input clearable v-model="register.table_name" outlined label="Table name" ref="route_name" :rules="[ $rules.required('Table name is required') ]"/>
    </div>
    <div v-if="register.foreign" class="q-pa-md col-3">
      <q-input clearable v-model="register.pivot_table_name" outlined label="Pivot table name" ref="pivot_table_name" :rules="[ $rules.required('Pivot table name is required') ]"/>
    </div>      
    <div class="q-pa-md col-12">
      <q-btn @click="register.id ? update() : create()" color="primary" :label="register.id ? 'Edit' : 'Create'" class="full-width"/>
    </div>
    <div class="q-pa-md col-12" v-if="manies.length">
      <q-list dense bordered padding >
        <q-item clickable v-ripple >
          <q-item-section>Name</q-item-section>
          <q-item-section>Model</q-item-section>
          <q-item-section>Table</q-item-section>
          <q-item-section>Pivot name</q-item-section>
          <q-item-section>Actions</q-item-section>
        </q-item>
        <q-item clickable v-ripple v-for="many in manies" :key="many.id">
          <q-item-section>{{many.foreign}}</q-item-section>
          <q-item-section>{{many.model_name}}</q-item-section>
          <q-item-section>{{many.table_name}}</q-item-section>
          <q-item-section>{{many.pivot_table_name}}</q-item-section>
          <q-item-section>
            <q-btn-group spread>
              <q-btn label="Editar" icon="fa fa-plus" @click="edit(many)"/>
              <q-btn label="Apagar" icon="fa fa-plus" @click="remove(many.id)"/>
            </q-btn-group>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { get } from 'src/libs/api'
import { Many, fields } from 'src/pages/manies'
import { validate } from 'src/libs/validator'
import { toPascalCase, toSnakeCasePlural } from 'src/libs/name'
import { confirmMsg } from 'src/libs/dialog'

export default defineComponent({
  name: 'GroupForm',
  props: {
    projectName: {
      type: String,
      required: true
    },
    moduleId: {
      type: Number,
      required: true
    },
  },
  setup (props, { refs, root }) {
    const vars = reactive({
      register: {
        model_name: '',
        table_name: '',
        pivot_table_name: '',
        origin: props.projectName,
        foreign: '',
        module_id: props.moduleId
      } as Many,
      manies: [] as Many[]
    })
    const functions = {  
      changeNames (val: string) {
        vars.register.model_name = toPascalCase(val)
        vars.register.table_name = toSnakeCasePlural(val)
        const names = [
          val,
          vars.register.origin
        ]
        vars.register.pivot_table_name = names.sort().join('_has_')
      },    
      cleanRegister () {
        vars.register = {
          model_name: '',
          table_name: '',
          pivot_table_name: '',
          origin: props.projectName,
          foreign: '',
          module_id: props.moduleId
        }
      },
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('many/create', vars.register)
          void this.main()
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('many/update', vars.register)
          void this.main()
        }
      },
      edit (register: Many) {
        vars.register = register
      },
      remove(id: number | undefined) {
        root.$q.dialog(confirmMsg('Alert!','are you sure?')).onOk(() => {
          void root.$store.dispatch('many/remove', id)
          void this.main()
        })
      },
      async main () {
        this.cleanRegister()
        vars.manies = await get(`manies/${props.moduleId}/modules`)
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