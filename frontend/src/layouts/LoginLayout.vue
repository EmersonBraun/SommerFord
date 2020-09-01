<template>
  <q-layout view="hHh Lpr lff">
    <q-img
        src="~assets/background-azul.gif"
        class="window-height window-width"
      >
      <q-page-container>
        <router-view />
      </q-page-container>
      </q-img>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'LoginLayout'
})
</script>
