<template>
  <q-dialog
      v-model="showRef"
      persistent
      :maximized="true"
      transition-show="slide-left"
      transition-hide="slide-right"
      full-width
      full-height
    >
    <q-card flat>
      <q-expansion-item
        class="shadow-1"
        group="form"
        icon="fa fa-pen"
        label="Main Form"
        default-opened
        header-class="bg-primary text-white"
        expand-icon-class="text-white"
      >
        <q-card-section class="row">
          <div class="q-pa-md col-6">
            <q-input clearable v-model="register.name" @input="changeNames" outlined label="Name" ref="name" :rules="[ $rules.required('Name is required') ]"/>
          </div>
          <div class="q-pa-md col-6">
            <q-input clearable v-model="register.small_title" outlined label="Small title" ref="small_title"/>
          </div>
          <div v-if="register.name" class="q-pa-md col-6">
            <q-input clearable v-model="register.model_name" outlined label="Model name" ref="model_name" :rules="[ $rules.required('Model Name is required') ]"/>
          </div>
          <div v-if="register.name" class="q-pa-md col-6">
            <q-input clearable v-model="register.route_name" outlined label="Route name" ref="route_name" :rules="[ $rules.required('Route name is required') ]"/>
          </div>
          <div class="q-pa-md col-6">
            <q-input hide-bottom-space outlined ref="start_date" v-model="register.start_date" label="Start date" mask="####-##-##" :rules="[ $rules.required('Start date is required') ]">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="register.start_date" @input="() => $refs.qDateProxy.hide()" today-btn mask="YYYY-MM-DD"/>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="q-pa-md col-6">
            <q-input hide-bottom-space outlined v-model="register.end_date" label="End date" mask="####-##-##">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="register.end_date" @input="() => $refs.qDateProxy.hide()" today-btn mask="YYYY-MM-DD"/>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="q-pa-md col-12">
            <q-btn @click="register.id ? update() : create()" color="primary" :label="register.id ? 'Edit' : 'Create'" class="full-width"/>
          </div>
        </q-card-section>
      </q-expansion-item>

      <q-expansion-item
        v-if="register.id"
        class="shadow-1"
        group="form"
        icon="fa fa-pen"
        label="Fields"
        header-class="bg-primary text-white"
        expand-icon-class="text-white"
      >
        <fields-create :moduleId="register.id"/>
      </q-expansion-item>

      <q-expansion-item
        v-if="register.id"
        class="shadow-1"
        group="form"
        icon="fa fa-pen"
        label="Manies"
        header-class="bg-primary text-white"
        expand-icon-class="text-white"
      >
        <manies-create 
          :moduleId="register.id"
          :projectName="projectName"
        />
      </q-expansion-item>
      <q-expansion-item
        v-if="register.id"
        class="shadow-1"
        group="form"
        icon="fa fa-pen"
        label="Services"
        header-class="bg-primary text-white"
        expand-icon-class="text-white"
      >
        <services-create :moduleId="register.id"/>
      </q-expansion-item>
      <div class="q-pa-md col-12">
        <q-btn @click="close" color="secondary" label="Close" class="full-width"/>
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from '@vue/composition-api'
import { toPascalCase, toKebabCasePlural } from 'src/libs/name'
import { get } from 'src/libs/api'
import { Module, fields } from 'src/pages/modules/index'
import { validate } from 'src/libs/validator'

import FieldsCreate from 'components/FieldsCreate.vue'
import ManiesCreate from 'components/ManiesCreate.vue'
import ServicesCreate from 'components/ServicesCreate.vue'

export default defineComponent({
  name: 'ModuleFormDialog',
  components: {FieldsCreate, ManiesCreate, ServicesCreate },
  props: {
    projectId: {
      type: Number,
      required: true
    },
    projectName: {
      type: String,
      required: true
    },
    moduleData: {
      type: Object,
    },
    show: {
      type: Boolean,
      required: true
    },
  },
  setup (props, { refs, root, emit }) {
    const vars = reactive({
      register: {
        name: '',
        small_title: '',
        model_name: '',
        route_name: '', 
        start_date: '',
        end_date: '',
        project_id: props.projectId
      } as Module,
    })
    let showRef = toRefs(props).show
    const functions = {
      close () {
        this.reloadRegistry()
        emit('changed', false)
        showRef.value = false
      },
      changeNames (val) {
        vars.register.model_name = toPascalCase(val)
        vars.register.route_name = toKebabCasePlural(val)
      },
      reloadRegistry () {
        vars.register = {
          name: '',
          small_title: '',
          model_name: '',
          route_name: '', 
          start_date: '',
          end_date: '',
          project_id: props.projectId
        }
      },
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('module/create', vars.register)
          emit('changed', true)
          this.reloadRegistry()
          showRef.value = false
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('module/update', vars.register)
          emit('changed', true)
          this.reloadRegistry()
          showRef.value = false
        }
      },
      async main () {
        console.log('mdoulesCreate',props)
      }
    }
    void functions.main()
    watch(() => props.show, () => {
      if (props.show && Object.keys(props.moduleData).length) {
        vars.register = props.moduleData
      }
    })
    return { 
      showRef,
      ...toRefs(vars),
      ...functions
    }
    
  }
})
</script>
