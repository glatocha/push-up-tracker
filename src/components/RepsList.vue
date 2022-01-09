<template>
  <q-list class="q-mt-sm" separator>
    <reps-list-item
      v-for="rep in list"
      :key="rep.key"
      :data="rep"
    ></reps-list-item>
  </q-list>
</template>

<script>
import RepsListItem from "./RepsListItem.vue";

export default {
  name: "RepsList",
  props: ["dayData"],
  computed: {
    list() {
      var list = [];
      this.dayData.reps.forEach((rep, index) => {
        var repObj = {
          key: index,
          rep: rep,
          time: this.dayData.times[index],
        };
        list.push(repObj);
      });
      return list;
    },
  },
  components: {
    RepsListItem,
  },
};
</script>