<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.group" outlined label="group" ref="group" :rules="[ $rules.required('group is required') ]"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { Group, create, update } from './index'

export default defineComponent({
  name: 'GroupForm',
  setup (/*_, { refs, root }*/) {
    const vars = reactive({
      register: {
        group: ''
      } as Group
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
