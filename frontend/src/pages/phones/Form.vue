<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
       <div class="q-pa-md col-12">
          <q-input clearable v-model="register.phone" outlined label="phone" ref="phone" :rules="[ $rules.required('phone is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-toggle hide-bottom-space v-model="register.whatsapp" label="Whatsapp" ref="whatsapp"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { get } from 'src/libs/api'
import { Phone, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'PhoneForm',
  setup (_, { refs, root }) {
    const vars = reactive({
      register: {
        phone: '',
        whatsapp: true
      } as Phone
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('phone/create', vars.register)
          root.$router.push('/phones')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('phone/update', vars.register)
          root.$router.push('/phones')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`phones/${id}`)
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
