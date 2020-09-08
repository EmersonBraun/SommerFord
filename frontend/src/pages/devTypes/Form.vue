<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.dev_type" outlined label="Name" ref="name" :rules="[ $rules.required('Name is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-btn @click="register.id ? update() : create()" color="primary" :label="register.id ? 'Edit' : 'Create'" class="full-width"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs} from '@vue/composition-api'
import { get } from 'src/libs/api'
import { DevType, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'DevTypeForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        dev_type: '',
      } as DevType
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('devType/create', vars.register)
          root.$router.push('/dev-types')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('devType/update', vars.register)
          root.$router.push('/dev-types')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`dev-types/${id}`)
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
