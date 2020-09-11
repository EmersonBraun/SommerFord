<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-1">
    <q-header elevated class="text-white" style="background: #24292e" height-hint="61.59">
      <q-toolbar class="q-py-sm q-px-md">
        <q-btn
        dense
        flat
        :ripple="false"
        icon="img:icons/002-hosting.svg"
        size="22px"
        color="white"
        class="q-mr-sm"
        no-caps
        to="/"
        label="SOMMERFORD"
        />
        <div class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <q-btn dense flat to="/projects/create">
            <q-icon name="fa fa-plus" size="20px" />
            <div>New Project</div>
          </q-btn>
        </div>
        <q-space />
        <!-- <search /> -->

        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn dense flat>
            <div class="row items-center no-wrap">
              <q-icon name="img:icons/008-development.svg" size="40px" />
              <q-icon name="arrow_drop_down" size="20px" style="margin-left: -2px" />
            </div>
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item-label header>Clients Data</q-item-label>
                <q-item clickable class="GL__menu-link" to="/clients"><q-item-section>Clients</q-item-section></q-item>
                <q-item clickable class="GL__menu-link" to="/payments"><q-item-section>Payments</q-item-section></q-item>
                <q-item clickable class="GL__menu-link" to="/phones"><q-item-section>Phones</q-item-section></q-item>
                <q-item-label header>Clients admin</q-item-label>
                <q-item clickable class="GL__menu-link" to="/payment-statuses"><q-item-section>Payments Status</q-item-section></q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn dense flat>
            <div class="row items-center no-wrap">
              <q-icon name="img:icons/003-coding.svg" size="40px" />
              <q-icon name="arrow_drop_down" size="20px" style="margin-left: -2px" />
            </div>
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item-label header>Projects</q-item-label>
                <q-item clickable class="GL__menu-link" to="/projects"><q-item-section>projects</q-item-section></q-item>
                <q-item clickable class="GL__menu-link" to="/modules"><q-item-section>modules</q-item-section></q-item>
                <q-item clickable class="GL__menu-link" to="/fields"><q-item-section>fields</q-item-section></q-item>
                <q-item clickable class="GL__menu-link" to="/manies"><q-item-section>manies</q-item-section></q-item>
                <q-item-label header>Projects Admin</q-item-label>
                <q-item clickable class="GL__menu-link" to="/dev-types"><q-item-section>dev-types</q-item-section></q-item>
                <q-item clickable class="GL__menu-link" to="/project-types"><q-item-section>project-types</q-item-section></q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn dense flat>
            <div class="row items-center no-wrap">
              <q-icon name="img:icons/005-tablet.svg" size="40px" />
              <q-icon name="arrow_drop_down" size="20px" style="margin-left: -2px" />
            </div>
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item-label header>Services</q-item-label>
                <q-item clickable class="GL__menu-link" to="/services"><q-item-section>services</q-item-section></q-item>
                <q-item clickable class="GL__menu-link" to="/groups"><q-item-section>groups</q-item-section></q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn dense flat no-wrap>
            <q-icon name="img:icons/001-gamer.svg" size="40px" />
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
                <q-item clickable class="GL__menu-link" to="/users"><q-item-section>users</q-item-section></q-item>
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
import { defineComponent, reactive, toRefs } from '@vue/composition-api';
// import Search from 'components/_main/Search.vue'
import { fabGithub } from '@quasar/extras/fontawesome-v5'

export default defineComponent({
  name: 'MainLayout',
  // components: { Search },
  setup() {
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