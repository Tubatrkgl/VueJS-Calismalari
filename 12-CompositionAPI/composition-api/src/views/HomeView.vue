<template>
  <div class="home">
  <p>{{name}}-{{job}}</p>
  <button @click="clicked">Click</button>

  </div>
</template>

<script>
import onMounted from "vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    let name = "Varol";
    let job = "Çaycı";

    const clicked =() =>{
      console.log("Buton tıklandı");
    };
    return{name,job, clicked}
  },
};
</script>
