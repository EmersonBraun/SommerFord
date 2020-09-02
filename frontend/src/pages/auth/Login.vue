<template>
   <q-page class="window-height window-width row justify-center items-center">
     <!-- <q-icon name="img:logo-sem-fundo.png" size="100px"/> -->
    <div class="column">
      <div class="row">
        <div class="col-12">
          <div class="text-h4 text-white q-my-md">SommerFord</div>
        </div>
      </div>
      <q-card bordered class="q-pa-lg">
        <q-card-section >
          <div class="col-12">
            <q-input ref="email" outlined clearable  v-model="registry.email" type="email" placeholder="Digite seu e-mail" :rules="[ $rules.required('Email é obrigatório'), $rules.email('Formato de email inválido')  ]">
              <template v-slot:prepend>
                <q-icon color="grey-9" name="mail" />
              </template>
            </q-input>
          </div>
          <div class="col-12">
            <q-input ref="pass" outlined clearable  v-model="registry.pass" :type="isPwd ? 'password' : 'text'" placeholder="Digite sua senha" :rules="[ $rules.required('Senha é obrigatória') ]">
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
          <div class="col-12">
            <q-btn color="light-blue-7" class="full-width" label="Login" @click="login"/>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

import { validate, resetValidation } from 'src/libs/validator'
const fields = ['pass','email']

export default defineComponent({
  name: 'Login',
  setup (_, { refs, root }) {
    const vars = reactive({
      isPwd: true,
      registry: {
        email: '',
        pass: ''
      }
    })
    const functions = {
      login () {
        if (validate(refs, fields)) {
          root.$router.push('/')
        }
      },
    }

    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
