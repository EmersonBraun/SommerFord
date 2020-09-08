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
        project_id: 0
      } as Module,
      groups: []
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
