<template>
  <q-header elevated>
    <q-toolbar>
      <q-toolbar-title> {{ text }} </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "Header",
  props: { text: String },
};
</script>
