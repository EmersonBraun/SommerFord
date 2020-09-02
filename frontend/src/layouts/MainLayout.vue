<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-1">
    <q-header elevated class="text-white" style="background: #24292e" height-hint="61.59">
      <q-toolbar class="q-py-sm q-px-md">
        <q-btn round dense flat :ripple="false" icon="img:icons/programming.svg" size="19px" color="white" class="q-mr-sm" no-caps />

        <div class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <q-btn dense flat to="/projects/create">
            <q-icon name="fa fa-plus" size="20px" />
            <div>New Project</div>
          </q-btn>
        </div>
        <q-space />
        <!-- <search /> -->
        <q-space />

        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn v-if="$q.screen.gt.xs" dense flat>
            <div class="row items-center no-wrap">
              <q-icon name="fa fa-users" size="20px" />
              <q-icon name="arrow_drop_down" size="20px" style="margin-left: -2px" />
            </div>
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item-label header>Users</q-item-label>
                <q-item clickable class="GL__menu-link" to="/projects">
                  <q-item-section>Projects</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link" to="/projectTypes">
                  <q-item-section>Projects Types</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link" to="/modules">
                  <q-item-section>Modules</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link" to="/users">
                  <q-item-section>Users</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link" to="/payments">
                  <q-item-section>Payments</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link" to="/paymentsStatus">
                  <q-item-section>Payments Status</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn v-if="$q.screen.gt.xs" dense flat>
            <div class="row items-center no-wrap">
              <q-icon name="fa fa-cogs" size="20px" />
              <q-icon name="arrow_drop_down" size="20px" style="margin-left: -2px" />
            </div>
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item-label header>Main functions</q-item-label>
                <q-item clickable class="GL__menu-link" to="/workspaces">
                  <q-item-section>Workspaces</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link" to="/groups">
                  <q-item-section>Group Services</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link" to="/services">
                  <q-item-section>Services</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn dense flat no-wrap>
            <q-icon name="fa fa-user" size="20px" />
            <q-icon name="arrow_drop_down" size="20px" style="margin-left: -2px" />

            <q-menu auto-close>
              <q-list dense>
                <q-item class="GL__menu-link-signed-in">
                  <q-item-section>
                    <div>Signed in as <strong>USER</strong></div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link-status">
                  <q-item-section>
                    <div>
                      <q-icon name="tag_faces" color="blue-9" size="18px" />
                      Set your status
                    </div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Help</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container style="background: #121212">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from '@vue/composition-api';
// import Search from 'components/_main/Search.vue'
import { fabGithub } from '@quasar/extras/fontawesome-v5'
const stringOptions = [
  'quasarframework/quasar',
  'quasarframework/quasar-awesome'
]

export default defineComponent({
  name: 'MainLayout',
  // components: { Search },
  setup(_, { root }) {
    const vars = reactive({
      leftDrawerOpen: false,
      fabGithub
    })

    const functions = {
      
    }

    return {
      ...toRefs(vars),
      ...functions
    }
  }
});
</script>
<style lang="sass">
.GL
  &__select-GL__menu-link
    .default-type
      visibility: hidden
    &:hover
      background: #0366d6
      color: white
      .q-item__section--side
        color: white
      .default-type
        visibility: visible
  &__toolbar-link
    a
      color: white
      text-decoration: none
      &:hover
        opacity: 0.7
  &__menu-link:hover
    background: #0366d6
    color: white
  &__menu-link-signed-in
  &__menu-link-status
    &:hover
      & > div
        background: white !important
  &__menu-link-status
    color: $blue-grey-6
    &:hover
      color: $light-blue-9
  &__toolbar-select.q-field--focused
    width: 450px !important
    .q-field__append
      display: none
</style>