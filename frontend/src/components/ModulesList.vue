<template>
  <q-card flat>
    <q-card-section class="row">
        <q-table
        :grid="$q.screen.xs"
        :title="title"
        :data="data"
        :columns="columns"
        row-key="name"
        :filter="filter"
        class="col-12"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn dense round flat color="grey" @click="editRow(props.row)" icon="edit"></q-btn>
            <q-btn dense round flat color="grey" @click="removeRow(props.row.id)" icon="delete"></q-btn>
          </q-td>
        </template>
      </q-table>
      <q-btn v-if="!projectId" color="primary" icon="fa fa-plus" class="full-width" label="create" :to="`/modules/create`"/>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from '@vue/composition-api'
import { get } from 'src/libs/api'
import { confirmMsg } from 'src/libs/dialog'

export default defineComponent({
  name: 'modulesIndex',
  props: {
    projectId: {
      type: Number
    }
  },
  setup (props, { root, emit }) {
    const vars = reactive({
      data: [],
      title: 'Modules',
      columns: [
        { name: 'name', label: 'Name', field: 'name', sortable: true },
        { name: 'project_id', label: 'project_id', field: 'project_id', sortable: true },
        { name: 'model_name', label: 'model_name', field: 'model_name', sortable: true },
        { name: 'route_name', label: 'route_name', field: 'route_name', sortable: true },
        { name: 'start_date', label: 'start_date', field: 'start_date', sortable: true },
        { name: 'end_date', label: 'end_date', field: 'end_date', sortable: true },
        // { name: 'project_id', label: 'project_id', field: 'project_id' },
        { name: 'actions', label: 'Actions', field: 'actions' }
      ],
      filter: ''
    })
    const functions = {
      async loadData () {
        if (props.projectId) {
          vars.data = await get(`modules/project/${props.projectId}`)
        } else {
          vars.data = await get(`modules`)
        }
      },
      editRow (data: object) {
        emit('edit', data)
      },
      removeRow (id: number) {
        root.$q.dialog(confirmMsg('Alert!','are you sure?')).onOk(() => {
          void root.$store.dispatch('module/remove', id)
          emit('changed', true)
        })
      },
    }
    void functions.loadData()

    return {
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
