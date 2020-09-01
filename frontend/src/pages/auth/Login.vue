<template>
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

export default defineComponent({
  name: 'Login',
  setup (_, { refs, root }) {
    const vars = reactive({})
    const functions = {}

    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
