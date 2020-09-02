<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
        <div class="q-pa-md col-12">
          <q-input hide-bottom-space clearable outlined label="Andamento" placeholder="andamento" disable/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

declare type Payment = {
  id: number
  value: number
  date: Date
  payment_status: number
}

export default defineComponent({
  name: 'Login',
  setup (_, { refs, root }) {
    const vars = reactive({})
    const functions = {
      create () {},
      update () {}
    }

    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
