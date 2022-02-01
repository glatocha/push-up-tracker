<template>
  <q-item>
    <q-item-section>
      <h6 class="text-left q-ma-none">Week {{ week.id }}</h6>
    </q-item-section>
    <q-item-section side>
      <h6 :class="compColor">{{ week.total }}</h6>
    </q-item-section>
  </q-item>
</template>

<script>
import Utilities from "../../utilities.js";

export default {
  name: "WeekListItem",
  props: ["week"],
  computed: {
    compColor() {
      if (this.week.total > 0) {
        return "text-right q-ma-none text-positive";
      } else {
        return "text-right q-ma-none text-negative";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
ion-item {
  --min-height: 0px;
}
.no-padding {
  padding: 0;
}
ion-col {
  padding: 0;
}
ion-col * {
  margin-top: 10px;
  margin-bottom: 10px;
}

.sunday {
  border-bottom: 1px solid $secondary;
}
</style>
