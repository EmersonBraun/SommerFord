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
import { ProjectType, create, update } from './index'

export default defineComponent({
  name: 'ProjectTypeForm',
  setup (/*_, { refs, root }*/) {
    const vars = reactive({
      register: {
        project_type: ''
      } as ProjectType
    })
    const functions = {
      create,
      update
    }

    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
