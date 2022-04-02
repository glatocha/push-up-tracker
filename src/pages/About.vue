<template>
  <q-page>
    <Header>ABOUT</Header>
    <q-card class="q-ma-sm">
      <q-card-section class="text-center">
        <h6 class="q-ma-none">PUSH-UP TRACKER</h6>
        <div class="q-ma-none">version: {{ appVersion }}</div>
        <q-img
          src="../assets/icon.png"
          style="height: 100px; max-width: 100px"
        />

        <h6 class="q-ma-none">Author:</h6>
        <h6 class="q-ma-none">Grzegorz Latocha @2022</h6>
        <div class="q-ma-none">glatocha@gmail.com</div>
        <a
          href="http://www.glatocha.com"
          target="_blank"
          rel="noopener noreferrer"
          >www.glatocha.com</a
        ><br />
        <a target="blank" href="https://github.com/glatocha/push-up-tracker"
          >github.com/glatocha/push-up-tracker</a
        >
        <hr />
        <h6 class="q-ma-xs">Used technologies:</h6>
        <div>
          <a target="blank" href="https://quasar.dev/">
            <q-img
              src="../assets/QUASAR.svg"
              style="height: 80px; max-width: 80px"
            />
          </a>
          <a target="blank" href="https://vuejs.org/">
            <q-img
              src="../assets/VUE.svg"
              style="height: 80px; max-width: 80px"
            />
          </a>
          <a target="blank" href="https://capacitorjs.com/">
            <q-img
              src="../assets/CAPACITOR.png"
              style="height: 80px; max-width: 80px"
            />
          </a>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import { version } from "../../package";

export default defineComponent({
  name: "About",
  data() {
    return {
      appVersion: version,
    };
  },
  components: {
    Header,
  },
});
</script>
