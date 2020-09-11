<template>
  <q-card v-ripple:primary class="mini-card" @click="clicked">
    <q-card-section>
      <div class="col-6">
        <div class="text-h4">
          {{ value }}
        </div>
        <div class="text-body1 q-pl-sm">
          {{ description }}
        </div>
      </div>
      <div class="col-6">
        <q-icon :name="icon" size="xl" class="absolute-bottom-right q-pb-sm q-pr-sm" color="blue-5" :to="link"/>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'MiniCard',
  props: {
    value: {
      type: Number
    },
    description: {
      type: String
    },
    icon: {
      type: String
    },
    link: {
      type: String,
      default: '/',
    }
  }, 
  setup(props, { root }) {
    function clicked () {
      setTimeout(() => root.$router.push(props.link), 500) 
    }
    return {
      clicked
    }
  }
}
</script>

<style>
.mini-card {
  cursor: pointer;
}
</style>
