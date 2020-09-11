<template>
  <q-card-section class="row">
    <!-- <div class="q-pa-md col-12">
      <q-input clearable v-model="register.group" outlined label="group" ref="group" :rules="[ $rules.required('group is required') ]"/>
    </div> -->
    <div class="q-pa-md col-12" v-if="totalTime">
      <div class="q-pa-md col-12"><span class="text-bold text-h2">Total hours: {{totalTime}}</span></div>
    </div>
    <div class="q-pa-md col-12" >
      <q-select
        use-chips
        multiple
        stack-label
        hide-bottom-space
        clearable outlined
        v-model="servicesSelecteds"
        emit-value map-options
        :options="services"
        option-label="service"
        label="Services"
        />
    </div>
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from '@vue/composition-api'
import { get, post } from 'src/libs/api'
import { Group } from 'src/pages/groups'
import { Service } from 'src/pages/services'


export default defineComponent({
  name: 'ServiceForm',
  props: {
    moduleId: {
      type: Number,
      required: true
    },
  },
  setup (props, { refs, root }) {
    const vars = reactive({
      register: {
        group: ''
      } as Group,
      totalTime: 0,
      services: [] as unknown,
      servicesSelecteds: [] as Service[]
    })
    const functions = {
      async main () {
        // const id = root.$route.params?.id
        // if (id) {
        //   vars.register = await get(`groups/${id}`)
        //   const response = await get(`groups/${id}/services`)
        //     console.log(response)
        //   if (response.service) {
        //     vars.servicesSelecteds = response.service.map(r => r.id)
        //   }
        // }
        const response = await get(`modules/${props.moduleId}/services`)
        vars.servicesSelecteds = response[0].service
        vars.services = await get('services')
      }
    }
    void functions.main()

    watch(() => vars.servicesSelecteds, async (newVal) => {
      const ids = newVal.map(s => s.id)
      vars.totalTime = Number(newVal.reduce((prevVal, s:  number | string) => prevVal + s.hour_needed, 0))
      await post(`modules/${props.moduleId}/services`, ids)
    })
    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
