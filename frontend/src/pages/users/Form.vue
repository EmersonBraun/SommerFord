<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.name" outlined label="Name" ref="name" :rules="[ $rules.required('Name is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-input clearable v-model="register.email" outlined label="email" ref="email" :rules="[ $rules.required('email is required') ]"/>
        </div>
        <div class="q-pa-md col-12">
          <q-input ref="password" outlined clearable  v-model="register.password" :type="isPwd ? 'password' : 'text'" placeholder="Password" :rules="[ $rules.required('Senha é obrigatória') ]">
            <template v-slot:prepend>
              <q-icon color="grey-9" name="vpn_key" />
            </template>
            <template v-slot:append>
              <q-icon
                color="grey-9"
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
        <div class="q-pa-md col-12">
          <q-toggle hide-bottom-space v-model="register.is_admin" label="is_admin" ref="is_admin"/>
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
import { User, fields } from './index'
import { validate } from '../../libs/validator'

export default defineComponent({
  name: 'Login',
  setup (_, { refs, root }) {
    const vars = reactive({
      isPwd: true,
      register: {
        name: '',
        email: '',
        password: '',
        is_admin: false
      } as User
    })
    const functions = {
      async create() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('user/create', vars.register)
          root.$router.push('/users')
        }
      },
      async update() {
        if (validate(refs, fields)) {
          await root.$store.dispatch('user/update', vars.register)
          root.$router.push('/users')
        }
      },
      async main () {
        const id = root.$route.params?.id
        if (id) {
          const response = await get(`users/${id}`)
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
