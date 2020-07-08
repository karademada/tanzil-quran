<template>
  <div class="home">
    <li v-for="(item,index) in sura" v-bind:key="index">{{item.text}}</li>
  </div>
</template>

<script lang="js">
// @ is an alias to /src
import axios from 'axios';

export default {
  name: "Home",
  data() {
    return {
      sura: []
    }
  },
  mounted() {
    axios.get('http://localhost:5000/quran/2')
    .then((result) => {
      console.log(result);
      this.sura = result.data;
    }).catch((err) => {
      console.log(err);
    });
  },
  components: {
  }
};
</script>
<style scoped lang="scss">
.li {
  direction: ltr;
}
</style>
