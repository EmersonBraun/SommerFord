<template>
  <q-card class="fit">
    <q-card-section>
      <div class="text-h6 q-pa-sm">Last Transactions</div>
      <q-separator />
    </q-card-section>
    <q-scroll-area style="height: 300px;">
      <q-list>
        <q-item v-for="x in 10" :key="x" clickable>
          <q-item-section>
            <q-item-label>TITLE</q-item-label>
            <q-item-label caption lines="2">Message</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
            <q-icon name="star" color="yellow" />
          </q-item-section>
        </q-item>

        <q-separator spaced inset />
      </q-list>
    </q-scroll-area>
  </q-card>
</template>
