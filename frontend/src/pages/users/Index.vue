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
        <q-btn color="primary" icon="fa fa-plus" class="full-width" label="create" :to="`/${module}/create`"/>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { title, columns, edit, remove, getData } from './index'

export default defineComponent({
  name: 'UsersIndex',
  setup (/*_, { refs, root }*/) {
    const vars = reactive({
      title,
      data: [],
      columns,
      filter: ''
    })
    const functions = {
      async loadData () {
        vars.data = await getData()
      },
      async editRow (id: number) {
        await edit(id)
        this.loadData()
      },
      async removeRow (id: number) {
        await remove(id)
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
