<template>
  <mini-card :value="item.value" :description="item.description" :icon="item.icon" ></mini-card>
</template>

<script lang="ts">
import MiniCard from 'components/MiniCards.vue';
import { defineComponent, reactive, toRefs } from '@vue/composition-api';
import { get } from 'src/libs/api'

export default defineComponent({
  name: 'Projects',
  components: { MiniCard },
  setup() {
    const vars = reactive({
      item: { value: 0, description: 'Projects', icon: 'house' },
    })
    async function main () {
      vars.item.value = await get('projects/count')
    }
    void main ()
    return {
      ...toRefs(vars)
    };
  }
});
</script>

