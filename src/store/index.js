import { createStore } from 'vuex'

import { Storage } from "@capacitor/storage";
import { store } from 'quasar/wrappers';

const Store = createStore({
  state() {
    return {
      // id:30
      // reps:Array[1]
      // times:Array[1]
      // total:5      
      progressData: [],
      lockForStartEdit: false,
      settings: {
        startDate: "2021-11-13T00:00:00+08:00",
        targetDate: "2022-11-13T00:00:00+08:00",
        targetValue: 30000,
      },
      statistics: {
        dailyAverage: 0,
        requiredAverage: 0,
        totalCount: 0,
      }
    };
  },
  mutations: {
    async saveStorage(state) {
      await Storage.set({
        key: "progressData",
        value: JSON.stringify(state.progressData),
      });
      await Storage.set({
        key: "settings",
        value: JSON.stringify(state.settings),
      });
    },
    async readStorage(state) {
      const data1 = await Storage.get({ key: "progressData" });
      if (data1.value !== null) {
        state.progressData = JSON.parse(data1.value);
      }
      const data2 = await Storage.get({ key: "settings" });
      if (data2.value !== null) {
        state.settings = JSON.parse(data2.value);
      }
      state.statistics = calcStatistics(state.progressData, state.settings)
    },
    async clearStorage(state) {
      await Storage.remove({ key: "progressData" });
      state.progressData = [];
    },
    saveSettings(state, newSettings) {
      state.settings = newSettings;
      state.statistics = calcStatistics(state.progressData, state.settings)
      this.commit('saveStorage');
    },
    addValue(state, { dayNo, time, value }) {
      if (typeof state.progressData[dayNo - 1] === 'undefined' ||
        state.progressData[dayNo - 1] === null) {
        state.progressData[dayNo - 1] = {
          id: dayNo,
          reps: [],
          times: [],
          total: 0
        }
      }
      console.log('value :>> ', value);
      console.log('time :>> ', time);

      state.progressData[dayNo - 1].reps.push(value)
      state.progressData[dayNo - 1].times.push(time)
      //recalculate daily total
      state.progressData[dayNo - 1].total = calcDayTotal(state.progressData[dayNo - 1].reps)
      state.statistics = calcStatistics(state.progressData, state.settings)
      this.commit('saveStorage');
    },
    deleteDayData(state, dayNo) {
      state.progressData[dayNo - 1] = {
        id: dayNo,
        reps: [],
        times: []
      }
      state.progressData[dayNo - 1].total = calcDayTotal(state.progressData[dayNo - 1].reps)
      state.statistics = calcStatistics(state.progressData, state.settings)
      this.commit('saveStorage');
    },
    deleteAllData(state) {
      state.progressData = [];
      state.statistics = calcStatistics(state.progressData, state.settings)
      this.commit('saveStorage');
    },
    overwriteStore(state, data) {
      state.progressData = data.progressData;
      state.settings = data.settings;
      state.lockForStartEdit = data.lockForStartEdit;
      state.statistics = data.statistics;
      this.commit('saveStorage');
    }
  },
  actions: {
    saveStorage(context) {
      context.commit('saveStorage')
    },
    readStorage(context) {
      context.commit('readStorage')
    },
    clearStorage(context) {
      context.commit('clearStorage')
    },
    addValue(context, { dayNo, value, fromEdit = false }) {
      const date = new Date()
      var time = "-";
      if (!fromEdit) {
        time = date.toLocaleTimeString();
      }
      context.commit('addValue', { dayNo, time, value });
    },
    editDay(context, dayNo, totalValue) {
      context.commit('editDay', dayNo, totalValue);
    },
    saveSettings(context, newSettings) {
      console.log('newSettings :>> ', newSettings);
      context.commit('saveSettings', newSettings);
      context.commit('saveStorage');
    },
    deleteDayData(context, dayNo) {
      context.commit('deleteDayData', dayNo);
    },
    deleteAllData(context) {
      context.commit('deleteAllData');
    },
    overwriteStore(context, data) {
      context.commit('overwriteStore', data);
    }
  },
  getters: {
    lockForStartEdit(state) {
      return state.lockForStartEdit;
    },
    progressData(state) {
      return state.progressData;
    },
    dayTotal(state) {
      return (dayNo) => {
        if (typeof state.progressData[dayNo - 1] !== 'undefined' &&
          state.progressData[dayNo - 1] !== null) {
          return state.progressData[dayNo - 1].total
        } else {
          return 0
        }
      }
    },
    totalCount(state) {
      return state.statistics.totalCount;
    },
    dayData(state) {
      return (dayNo) => {
        if (typeof state.progressData[dayNo - 1] === 'undefined' ||
          state.progressData[dayNo - 1] === null) {
          return { id: dayNo, reps: [], times: [] }
        } else {
          return state.progressData[dayNo - 1]
        }
      }
    },
    settings(state) {
      return state.settings;
    },
    statistics(state) {
      return state.statistics;
    },
    store(state) {
      return state
    }    
  },

})

function calcDayTotal(repsArr) {
  var total = 0;
  if (repsArr !== 'undefined') {
    repsArr.forEach(rep => {
      total += rep;
    })
  }
  return total;
}

function calcStatistics(data, settings) {
  const statistics = {
    dailyAverage: 0,
    requiredAverage: 0,
    totalCount: 0
  }
  statistics.totalCount = calcTotalCount(data);

  const totalDays = data.length
  const remainingDays = Math.floor(
    (
      new Date(settings.targetDate).valueOf() - new Date().valueOf()
    ).valueOf() / (1000 * 60 * 60 * 24))
  const remainingCount = settings.targetValue - statistics.totalCount
  console.log('remainingCount :>> ', remainingCount);
  statistics.dailyAverage = ((statistics.totalCount === 0) ? 0 : statistics.totalCount / totalDays)
  statistics.requiredAverage = remainingCount / remainingDays
  return statistics
}

function calcTotalCount(data) {
  var totalCount = 0;
  data.forEach(day => {
    if ((day !== 'undefined') && (day !== null)) {
      totalCount += day.total;
    }
  })
  return totalCount
}

export default Store;