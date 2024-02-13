<template>
  <div class="home">
    <input type="text" v-model="search" />
    <div v-for="day in found" :key="day">
      {{ day }}
    </div>
    <button @click='stop'>Stop</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";

export default {
  name: "HomeView",
  setup() {
    const days = ref(["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"]);
    const search = ref("");

    const found = computed(() => {
      return days.value.filter((day) => day.includes(search.value));
    });

    
    const watchSearch = watch(search, () => {
      console.log("watch çalıştı");
    });

    const watchEffectDays = watchEffect(() => {
      console.log('watchEffect çalıştı', days.value);
      console.log('watchEffect çalıştı', search.value);
    });

    const stop = () => {
     
      watchSearch();
      watchEffectDays();
    };

    return { days, search, found, stop };
  },
};
</script>
