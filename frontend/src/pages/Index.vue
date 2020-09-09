<template>
  <q-page class="container">
    <div class="q-pa-sm row q-col-gutter-md">
      <div class="col-xs-12 col-sm-6 col-lg-3 col-md-3">
        <projects />
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 col-md-3">
        <modules />
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 col-md-3">
        <clients />
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 col-md-3">
        <services />
      </div>
      <div class="col-12">
        <list-transactions />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import Projects from 'components/Projects.vue';
import Clients from 'components/Clients.vue';
import Modules from 'components/Modules.vue';
import Services from 'components/Services.vue';
import ListTransactions from 'components/ListTransactions.vue';
import { defineComponent, reactive, toRefs } from '@vue/composition-api';

export default defineComponent({
  name: 'PageIndex',
  components: { Projects, Modules, Clients, Services, ListTransactions },
  setup() {
    const vars = reactive({
      dataMiniCard: [
        { value: '2.000', description: 'Projects', icon: 'fastfood' },
        { value: '1.500', description: 'Rent', icon: 'house' },
        { value: '20.000', description: 'Employees', icon: 'person' },
        { value: '900', description: 'Education', icon: 'book' }
      ]
    })
    return {
      ...toRefs(vars)
    };
  }
});
</script>
