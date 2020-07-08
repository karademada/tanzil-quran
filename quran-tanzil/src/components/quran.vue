<template lang="html">

  <section class="quran">
    <h1>quran Component</h1>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'quran',
    props: [
      'suraData'
    ],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
.quran {
  background-color: beige;
  background: #F7FCE3 url('../../public/border-musaf.png') no-repeat;
  height: 23px;
}
</style>
