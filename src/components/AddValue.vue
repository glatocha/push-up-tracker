<template>
  <q-card class="q-ma-sm">
    <q-card-section>
      <div class="text-h6">ADD</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="row">
        <div class="col flex items-center justify-center">
          <q-btn
            class="self-center"
            round
            color="secondary"
            label="-"
            size="l"
            @click.prevent="decreaseAddingAmount"
          />
        </div>
        <div class="col">
          <h1 class="q-m-auto main-number">{{ addingAmount }}</h1>
        </div>
        <div class="col flex items-center justify-center">
          <q-btn
            round
            color="secondary"
            label="+"
            size="l"
            @click.prevent="increaseAddingAmount"
          />
        </div>
      </div>
      <div class="row">
        <div
          class="col q-pa-xs"
          v-for="val in [10, 20, 30, 40, 50]"
          :key="`btn_key${val}`"
        >
          <q-btn
            color="secondary"
            :label="val"
            @click.prevent="setAmount(val)"
          />
        </div>
      </div>

      <q-btn
        color="secondary"
        class="full-width q-mt-xs"
        label="ADD"
        @click="this.$emit('add-value', addingAmount)"
      />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "AddValue",
  components: {},
  data() {
    return {
      addingAmount: 0,
    };
  },
  methods: {
    setAmount(value) {
      this.addingAmount = value;
    },
    increaseAddingAmount() {
      if (this.addingAmount < 300) {
        this.addingAmount += 5;
      }
    },
    decreaseAddingAmount() {
      if (this.addingAmount > 5) {
        this.addingAmount -= 5;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-number {
  color: $positive;
  padding-top: 0px;
  padding-bottom: 0px;
  text-align: center;
  font-size: 400%;
  font-weight: bold;
  line-height: 1.3;
  margin: 0;
}
</style>