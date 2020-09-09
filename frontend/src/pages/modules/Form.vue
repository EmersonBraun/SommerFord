<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-6">
          <q-input clearable v-model="register.name" outlined label="Name" ref="name" :rules="[ $rules.required('Name is required') ]"/>
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
        <div class="q-pa-md col-6">
          <q-select
            hide-bottom-space
            clearable outlined
            v-model="register.project_id"
            emit-value map-options
            :options="projects"
            option-value="id"
            option-label="name"
            label="Project"
            ref="project_id"
            :rules="[ $rules.minValue(1, 'Project is required') ]"
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
import { toPascalCase, toKebabCasePlural } from 'src/libs/name'
import { get } from 'src/libs/api'
import { Module, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'ModuleForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        name: '',
        small_title: '',
        model_name: '',
        route_name: '', 
        start_date: '',
        end_date: '',
        project_id: 0
      } as Module,
      projects: [] as unknown
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('module/create', vars.register)
          root.$router.push('/modules')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('module/update', vars.register)
          root.$router.push('/modules')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`modules/${id}`)
          vars.register = response
        }
        vars.projects = await get('projects')
      }
    }
    void functions.main()

    watch(() => vars.register.name, () => {
      vars.register.model_name = toPascalCase(vars.register.name)
      vars.register.route_name = toKebabCasePlural(vars.register.name)
    })
    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
