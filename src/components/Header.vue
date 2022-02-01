<template>
  <q-header elevated>
    <q-toolbar>
      <q-toolbar-title><slot></slot></q-toolbar-title>
      <!-- <q-space /> -->
      <slot name="right"></slot>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "Header",
};
</script>
