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
              <q-btn dense round flat color="grey" @click="removeRow(props.row.id)" icon="delete"></q-btn>
            </q-td>
          </template>
        </q-table>
        <q-btn color="primary" icon="fa fa-plus" class="full-width" label="create" :to="`/modules/create`"/>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from '@vue/composition-api'
import { title, columns } from './index'
import { confirmMsg } from 'src/libs/dialog'

export default defineComponent({
  name: 'modulesIndex',
  setup (_, { root }) {
    const vars = reactive({
      data: computed(() => root.$store.state.module.data),
      title,
      columns,
      filter: ''
    })
    const functions = {
      async loadData () {
        await root.$store.dispatch('module/getAll')
      },
      editRow (id: number) {
        void root.$router.push(`modules/edit/${id}`)
      },
      removeRow (id: number) {
        root.$q.dialog(confirmMsg('Alert!','are you sure?')).onOk(() => {
          void root.$store.dispatch('module/remove', id)
          void this.loadData()
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
