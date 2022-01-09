<template>
  <q-page>
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title @click="settingsClick"> SETTINGS </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-card class="q-ma-sm q-pb-sm">
      <q-card-section>
        <div class="text-subtitle2">TARGET:</div>
      </q-card-section>

      <q-form @submit="dialogSave = true">
        <q-input
          input-class="text-right text-h6"
          v-model.number="targetValue"
          type="number"
          class="q-px-sm q-pb-none"
          min="0"
          max="1000000"
        >
          <template v-slot:before>
            <label class="text-h6">Target amount:</label>
          </template>
        </q-input>

        <q-input
          input-class="text-right"
          v-model="startDate"
          mask="date"
          :rules="['date']"
          class="q-px-sm q-pb-none text-h6"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="startDate">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
          <template v-slot:before>
            <label class="text-h6">Start date:</label>
          </template>
        </q-input>

        <q-input
          input-class="text-right"
          v-model="targetDate"
          mask="date"
          :rules="['date']"
          class="q-px-sm q-pb-none text-h6"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="targetDate">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
          <template v-slot:before>
            <label class="text-h6">Target date:</label>
          </template>
        </q-input>
        <q-card-section>
          <q-btn
            type="submit"
            color="warning"
            class="full-width"
            label="Save new settings"
          />
        </q-card-section>
      </q-form>
    </q-card>

    <q-card class="q-ma-sm">
      <q-card-section>
        <div class="text-subtitle2">Delete data:</div>
      </q-card-section>

      <q-card-section>
        <q-btn
          @click.prevent="dialogDelete = true"
          color="negative"
          class="full-width"
          label="Delete Progress Data"
        />
      </q-card-section>
    </q-card>

    <q-card v-if="showFilesOptions" class="q-ma-sm">
      <q-card-section>
        <div class="text-subtitle2">Save data file:</div>
      </q-card-section>

      <q-card-section>
        <q-btn
          @click.prevent="saveDataFile"
          color="secondary"
          class="full-width"
          label="Save progress to a file"
        />
      </q-card-section>
    </q-card>

    <q-card v-if="showFilesOptions" class="q-ma-sm">
      <q-card-section>
        <div class="text-subtitle2">Load data file:</div>
      </q-card-section>

      <q-card-section>
        <q-btn
          @click.prevent="loadDataFile"
          color="warning"
          class="full-width"
          label="Load data from a file"
        />
      </q-card-section>
    </q-card>
  </q-page>

  <q-dialog v-model="dialogSave">
    <q-card>
      <q-card-section>
        <div class="text-h6">Saving new settings</div>
      </q-card-section>
      <q-card-section class="row items-center">
        <span class="q-ml-sm"
          >This will overwrite current settings. Are you sure?</span
        >
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" @click="saveNewSettings" />
        <q-btn flat label="Cancel" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="dialogDelete">
    <q-card>
      <q-card-section>
        <div class="text-h6">Deleting data</div>
      </q-card-section>
      <q-card-section class="row items-center">
        <span class="q-ml-sm"
          >This will Delete all the progress data. Are you sure?</span
        >
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" @click="deleteProgressData" />
        <q-btn flat label="Cancel" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { Filesystem, Directory, Encoding } from "@capacitor/filesystem";

export default defineComponent({
  name: "Settings",
  data() {
    return {
      targetValue: 30000,
      startDate: "2021-11-13",
      targetDate: "2022-11-13",
      showFilesOptions: false,
      showFilesOptionsCounter: 0,
    };
  },
  setup() {
    return {
      dialogSave: ref(false),
      dialogDelete: ref(false),
    };
  },
  mounted() {
    this.targetValue = this.$store.getters.settings.targetValue;
    this.startDate = this.$store.getters.settings.startDate;
    this.targetDate = this.$store.getters.settings.targetDate;
    this.showFilesOptionsCounter = 0;
    this.showFilesOptions = false;
  },
  computed: {
    lockForStartEdit() {
      return this.$store.getters.lockForStartEdit;
    },
  },
  methods: {
    settingsClick() {
      this.showFilesOptionsCounter++;
      this.showFilesOptions = this.showFilesOptionsCounter === 5;
      if (this.showFilesOptionsCounter > 5) {
        this.showFilesOptionsCounter = 0;
      }
    },
    saveNewSettings() {
      console.log("Confirm Okay");
      var newSettings = {
        targetValue: this.targetValue,
        startDate: this.startDate,
        targetDate: this.targetDate,
      };
      console.log(" Settings page - newSettings :>> ", newSettings);
      this.$store.dispatch("saveSettings", newSettings);
      this.dialogSave = false;
    },
    deleteProgressData() {
      this.$store.dispatch("deleteAllData");
      this.dialogDelete = false;
    },
    async saveDataFile() {
      await Filesystem.writeFile({
        path: "push-up-tracker_Data.json",
        data: JSON.stringify(this.$store.getters.store),
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
    },
    async loadDataFile() {
      alert("Loading of data...");
      const permissions = await Filesystem.checkPermissions();
      alert(permissions.publicStorage);
      const fileContent = await Filesystem.readFile({
        path: "push-up-tracker_Data.json",
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      alert(fileContent);
      const data = JSON.parse(fileContent.data);
      alert(data);
      console.log(data);
      this.$store.dispatch("overwriteStore", data);
    },
  },
});
</script>
