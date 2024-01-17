const app = Vue.createApp({
    // template:`
    // <ul>
    // <li v-for='gun in gunler'>{{gun}}</li>
    // </ul>
    // `
    // ,
    template:`
    <ul>
    <li v-for='person in persons'>Çalışan:{{person.isim}} -Maaş:{{person.maas}}</li>
    </ul>
    `
    ,
    data() {
        return {
        // gunler:[
        //     "Pazartesi",
        //     "Salı",
        //     "Çarşamba",
        //     "Perşembe",
        //     "Cuma",
        //     "Cumartesi",
        //     "Pazar"
        // ] 
         persons:[
            {isim:"Varol", maas:4250},
            {isim:"Ayse",maas:3789},
            {isim:"Fatma",maas:1654}
         ]
        }
    },
    methods: {
  
   
    },
});

app.mount('#app');