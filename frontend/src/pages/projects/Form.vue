<template>
  <q-page class="doc-container q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" to="/"/>
      <q-breadcrumbs-el label="List" to="/projects"/>
      <q-breadcrumbs-el label="Form" />
    </q-breadcrumbs>
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      icon="fa fa-pen"
      label="Main Form"
      default-opened
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
    >
      <q-card flat>
        <q-card-section class="row">
          <div class="q-pa-md col-4">
            <q-input clearable v-model="register.name" outlined label="Name" ref="name" :rules="[ $rules.required('Name is required') ]"/>
          </div>
          <div class="q-pa-md col-4">
            <q-toggle hide-bottom-space v-model="register.visual_identity" label="visual_identity" ref="visual_identity"/>
          </div>
          <div class="q-pa-md col-4">
            <q-input clearable v-model="register.competitor" outlined label="competitor" ref="competitor" />
          </div>
          <div class="q-pa-md col-4">
            <q-select
              hide-bottom-space
              clearable outlined
              v-model="register.client_id"
              emit-value map-options
              :options="clients"
              option-value="id"
              option-label="name"
              label="Client"
              ref="client_id"
              :rules="[ $rules.minValue(1, 'Client is required') ]"
              />
          </div>
          <div class="q-pa-md col-4">
            <q-select
              hide-bottom-space
              clearable outlined
              v-model="register.project_type"
              emit-value map-options
              :options="projectTypes"
              option-value="project_type"
              option-label="project_type"
              label="Project Type"
              ref="project_type"
              :rules="[ $rules.required('Project Type is required') ]"
              />
          </div>
          <div class="q-pa-md col-4">
            <q-select
              hide-bottom-space
              clearable outlined
              v-model="register.dev_type"
              emit-value map-options
              :options="devTypes"
              option-value="dev_type"
              option-label="dev_type"
              label="Dev Type"
              ref="dev_type"
              :rules="[ $rules.required('Dev Type is required') ]"
              />
          </div>
          <div class="q-pa-md col-4">
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
          <div class="q-pa-md col-4">
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
      </q-card>
    </q-expansion-item>
    <q-space />
    <div v-if="register.id">
      <q-btn color="primary" icon="fa fa-plus" class="full-width" label="add module" @click="moduleCreate = true"/>
      <modules-list 
        v-if="register.id"
        :projectId="register.id" 
        :key="key"
        @changed="onChanged" 
        @edit="getModuleID"/>
      <modules-create
        v-if="register.id"
        :projectId="register.id"
        :projectName="register.name"
        :show="moduleCreate" 
        :moduleData="moduleData" 
        @changed="onChanged"
      />
    </div>
    <q-btn v-if="register.id" color="secondary" class="full-width" label="Budget" @click="getRelatory('budget')"/>
    <q-btn v-if="register.id" color="primary" class="full-width" label="Backlog" @click="getRelatory('backlog')"/>
    <q-dialog 
    v-model="alert"
    >
      <q-card class="row">
        <q-card-section class="col-12">
          <q-list>

            <q-item>
              <q-item-section avatar top>
                <q-avatar icon="folder" color="primary" text-color="white" />
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">Name: {{relatory.name}}</q-item-label>
                <q-item-label caption>Type: {{relatory.project_type}}</q-item-label>
                <q-item-label caption>Dev Type: {{relatory.dev_type}}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="info" color="green" />
              </q-item-section>
            </q-item>

            <template v-if="relatory.modules && relatory.modules.length">
              <q-item v-for="m in relatory.modules" :key="m.id">
                <q-item-section avatar top>
                  <q-avatar icon="book" color="primary" text-color="white" />
                </q-item-section>

                <q-item-section>
                  <q-item-label lines="1">Name: {{m.name}}</q-item-label>
                </q-item-section>
                
                <q-item-section v-if="m.service && m.service.length">
                  <q-item-label lines="3" v-for="(service, index) in m.service" :key="index">
                    <p>{{index + 1}} {{service.service}} <b>{{service.scope}}</b> - {{service.hour_needed}}</p> 
                  </q-item-label>
                </q-item-section>
                <q-item-section side v-else>
                  Without registered services
                </q-item-section>
              </q-item>
            </template>

            <template v-else>
              <q-item>Without registered modules</q-item>
            </template>

            </q-item>
          </q-list>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import ModulesCreate from 'components/ModulesCreate.vue'
import ModulesList from 'components/ModulesList.vue'
import { get, post } from 'src/libs/api'
import { Project, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'ProjectForm',
  components: { ModulesCreate, ModulesList },
  setup (_, { refs, root }) {
    const vars = reactive({
      register: { 
        name: '',
        visual_identity: false,
        competitor: '',
        project_type: '',
        dev_type: '',
        client_id: 0,
        start_date: '',
        end_date: ''
      } as Project,
      key: 0,
      alert: false,
      moduleCreate: false,
      moduleData: {},
      clients: [] as unknown,
      projectTypes: [] as unknown,
      devTypes: [] as unknown,
      relatory: [] as unknown,
      type: ''
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          const response = await post('projects', vars.register)
          if (response?.id) {
            void root.$router.push(`/projects/edit/${String(response.id)}`)
            this.onChanged(true)
          }
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('project/update', vars.register)
          this.onChanged(true)
          // root.$router.push('/projects')
        }
      },
      onChanged (val: boolean) {
        vars.moduleCreate = false
        vars.moduleData = {}
        if (val) {
          vars.key = Math.random().toString(36).substr(2, 9)
        }
      },
      getModuleID (val: number) {
        vars.moduleData = val
        vars.moduleCreate = true
      },
      async getRelatory (type: string) {
          vars.type = type
          vars.alert = true
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`projects/${id}`)
          vars.register.visual_identity = Boolean(response.visual_identity)
          vars.register = response
          const res = await get(`projects/${id}/complete`)
          console.log('complete', res)
          vars.relatory = res
        }
        vars.clients = await get('clients')
        vars.projectTypes = await get('project-types')
        vars.devTypes = await get('dev-types')
        this.onChanged(true)
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
