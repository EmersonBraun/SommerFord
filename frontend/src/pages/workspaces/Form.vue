<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.workspace" outlined label="workspace" ref="workspace" :rules="[ $rules.required('workspace is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.small_title" outlined label="small_title" ref="small_title" :rules="[ $rules.required('small_title is required') ]"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { Workspace, create, update } from './index'

export default defineComponent({
  name: 'Login',
  setup (/*_, { refs, root }*/) {
    const vars = reactive({
      register: {
        workspace: '',
        small_title: ''
      } as Workspace
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
