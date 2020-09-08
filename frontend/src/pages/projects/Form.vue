<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.name" outlined label="Name" ref="name" :rules="[ $rules.required('Name is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-toggle hide-bottom-space v-model="register.visual_identity" label="visual_identity" ref="visual_identity"/>
        </div>
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.competitor" outlined label="competitor" ref="competitor" />
        </div>
        <div class="q-pa-md col-12">
          <q-select hide-bottom-space clearable outlined v-model="register.client_id" emit-value map-options :options="clients" label="client_id" ref="client_id" :rules="[ $rules.required('client_id é obrigatória') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-select hide-bottom-space clearable outlined v-model="register.project_type" emit-value map-options :options="projectTypes" label="project_type" ref="project_type" :rules="[ $rules.required('project_type é obrigatória') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-select hide-bottom-space clearable outlined v-model="register.dev_type_id" emit-value map-options :options="devTypes" label="dev_type_id" ref="dev_type_id" :rules="[ $rules.required('dev_type_id é obrigatória') ]"/>
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
      clients: [],
      projectTypes: [],
      devTypes: []
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
