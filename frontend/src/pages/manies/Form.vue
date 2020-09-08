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
import { get } from 'src/libs/api'
import { Many, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'GroupForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        model_name: '',
        table_name: '',
        pivot_table_name: '',
        origin: '',
        foreign: '',
        module_id: 0
      } as Many
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('many/create', vars.register)
          root.$router.push('/manies')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('many/update', vars.register)
          root.$router.push('/manies')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`manies/${id}`)
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
