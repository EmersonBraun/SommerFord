<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-6">
          <q-input clearable v-model="register.name" outlined label="Name" ref="name" :rules="[ $rules.required('Name is required') ]"/>
        </div>
        <div class="q-pa-md col-6">
          <q-toggle hide-bottom-space v-model="register.visual_identity" label="visual_identity" ref="visual_identity"/>
        </div>
        <div class="q-pa-md col-6">
          <q-input clearable v-model="register.competitor" outlined label="competitor" ref="competitor" />
        </div>
        <div class="q-pa-md col-6">
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
        <div class="q-pa-md col-6">
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
        <div class="q-pa-md col-6">
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
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { get } from 'src/libs/api'
import { Project, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'ProjectForm',
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
      clients: [] as unknown,
      projectTypes: [] as unknown,
      devTypes: [] as unknown
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('project/create', vars.register)
          root.$router.push('/projects')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('project/update', vars.register)
          root.$router.push('/projects')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`projects/${id}`)
          vars.register = response
        }
        vars.clients = await get('clients')
        vars.projectTypes = await get('project-types')
        vars.devTypes = await get('dev-types')
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
