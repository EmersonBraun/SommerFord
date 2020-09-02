<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.name" outlined label="Name" ref="name" :rules="[ $rules.required('Name is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-select hide-bottom-space clearable outlined v-model="register.group_id" emit-value map-options :options="groups" label="group_id" ref="group_id" :rules="[ $rules.required('group_id é obrigatória') ]"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { Module, create, update } from './index'

export default defineComponent({
  name: 'ModuleForm',
  setup (/*_, { refs, root }*/) {
    const vars = reactive({
      register: {
        name: '',
        group_id: 0
      } as Module,
      groups: []
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
