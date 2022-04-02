<template>
  <q-page>
    <Header>SETTINGS</Header>

    <edit-settings @save-new-settings="saveNewSettings"></edit-settings>

    <delete-progress
      @delete-progress-data="deleteProgressData"
    ></delete-progress>

    <q-space />
    <q-card class="q-ma-sm fixed-bottom" style="margin-bottom: 56px">
      <q-card-section>
        <q-btn to="/about" color="primary" class="full-width" label="About" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import EditSettings from "src/components/settings/EditSettings.vue";
import DeleteProgress from "../components/settings/DeleteProgress.vue";
import Header from "../components/Header.vue";

export default defineComponent({
  name: "Settings",
  components: {
    DeleteProgress,
    EditSettings,
    Header,
  },
  data() {
    return {};
  },
  methods: {
    saveNewSettings(targetValue, startDate, targetDate) {
      console.log("Confirm Okay");
      var newSettings = {
        targetValue,
        startDate,
        targetDate,
      };
      console.log(" Settings page - newSettings :>> ", newSettings);
      this.$store.dispatch("saveSettings", newSettings);
      this.dialogSave = false;
    },
    deleteProgressData() {
      this.$store.dispatch("deleteAllData");
    },
  },
});
</script>
