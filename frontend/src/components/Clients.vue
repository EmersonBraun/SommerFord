<template>
  <mini-card :value="item.value" :description="item.description" :icon="item.icon" :link="item.link"></mini-card>
</template>

<script lang="ts">
import MiniCard from 'components/MiniCards.vue';
import { defineComponent, reactive, toRefs } from '@vue/composition-api';
import { get } from 'src/libs/api'

export default defineComponent({
  name: 'Modules',
  components: { MiniCard },
  setup() {
    const vars = reactive({
      item: { value: 0, description: 'Clients', icon: 'person', link: '/clients' },
    })
    async function main () {
      vars.item.value = await get('clients/count')
    }
    void main ()
    return {
      ...toRefs(vars)
    };
  }
});
</script>

