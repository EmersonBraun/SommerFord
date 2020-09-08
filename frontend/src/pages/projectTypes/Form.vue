<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.project_type" outlined label="project_type" ref="project_type" :rules="[ $rules.required('project_type is required') ]"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { get } from 'src/libs/api'
import { ProjectType, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'ProjectTypeForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        project_type: ''
      } as ProjectType
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('projectType/create', vars.register)
          root.$router.push('/project-types')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('projectType/update', vars.register)
          root.$router.push('/project-types')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`project-types/${id}`)
          vars.register = response
        }
      }
    }

    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
