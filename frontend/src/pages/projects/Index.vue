<template>
  <q-page class="doc-container q-pa-md">
    <q-card flat>
      <q-card-section class="row">
          <q-table
          :grid="$q.screen.xs"
          :title="title"
          :data="data"
          :columns="columns"
          row-key="name"
          :filter="filter"
          hide-header
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
              <q-btn dense round flat color="grey" @click="editRow(props.row.id)" icon="edit"></q-btn>
              <q-btn dense round flat color="grey" @click="deleteRow(props.row.id)" icon="delete"></q-btn>
            </q-td>
          </template>
        </q-table>
        <q-btn color="primary" icon="fa fa-plus" class="full-width" label="create" :to="`/projects/create`"/>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from '@vue/composition-api'
import { title, columns, edit, remove, getData } from './index'

export default defineComponent({
  name: 'ProjectsIndex',
  setup (_, { root }) {
    const vars = reactive({
      title,
      data: computed(() => root.$store.state.client.data),
      columns,
      filter: ''
    })
    const functions = {
      async loadData () {
        await root.$store.dispatch('client/getData')
      },
      editRow (id: number) {
        root.$router.push(`clients/${id}`)
      },
      async removeRow (id: number) {
        await root.$store.dispatch('client/remove', id)
        this.loadData()
      },
    }
    functions.loadData()

    return { 
      ...toRefs(vars),
      ...functions
    }
  }
})
</script>
