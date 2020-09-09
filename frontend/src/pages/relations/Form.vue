<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.project_type" outlined label="project_type" ref="project_type" :rules="[ $rules.required('project_type is required') ]"/>
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
import { Relation, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'ProjectTypeForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        model_name: '',
        table_name: '',
        field_id: 0,
        field_type: '',
      } as Relation
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('relation/create', vars.register)
          root.$router.push('/relations')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('relation/update', vars.register)
          root.$router.push('/relations')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`relations/${id}`)
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
