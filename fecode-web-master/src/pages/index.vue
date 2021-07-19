<template>

  <div class="ui-main">
    <div class="backg" :style="{'background-image': `url(${require('~/assets/image/2.png')})`,'width':'7.5rem','height':'4.91rem','background-size':'100%'}">
    <img src="~assets/image/Rectangle 5.png" /></div>
    <Header></Header>
    <nuxt-child></nuxt-child>
    <Footer></Footer>
    
  </div>

</template>

<script>
import header from '@/component/header.vue';
import footer from '@/component/footer.vue';

export default {
  data() {
    return {

    };
  },
  async asyncData({ $http }) {

  },
  mounted() {
         this.$router.push({path:'/home'})
  },
  methods: {
   
  },
 components:{
   Header:header,
   Footer:footer,
   
 }
}
</script>

<style scoped lang="less">
.backg{
  width: 7.5rem;
  height: 3rem;
  position: absolute;
  z-index: -1;
  
  background: blue;
}
.backg img{
  width: 7.5rem;
  height: 4.91rem;
  background-size: 100%;
}

</style>