<template>
  <q-page class="doc-container q-pa-md">
    <modules-list />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ModulesList from 'components/ModulesList.vue'

export default defineComponent({
  name: 'modulesIndex',
  components: { ModulesList }
})
</script>
