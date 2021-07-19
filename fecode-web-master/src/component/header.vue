<template>
    <div class="group">
        <div class="nav-icon-search">
            <img src="~assets/image/logo_white.png"  :style="{'margin-left': '0.3rem','width':'1.95rem','height':'0.34rem'}" />
            <div class="_iconlist">
                <img src="~assets/image/x.png"  :style="{'width':'0.34rem','height':'0.34rem','display':'none'}" />
                <img src="~assets/image/Bitmap.png"  :style="{'width':'0.34rem','height':'0.34rem','display':'none'}" />
                <img src="~assets/image/Bitmap1.png"  :style="{'width':'0.34rem','height':'0.34rem','display':'none'}" />
                <img src="~assets/image/Oval.png"  :style="{'width':'0.34rem','height':'0.34rem'}" class="imgFirst"  />
                <img src="~assets/image/yonghu.png"  :style="{'width':'0.34rem','height':'0.34rem'}" />
                <img src="~assets/image/圆角矩形 670 拷贝 2.png"  :style="{'width':'0.28rem','height':'0.26rem'}" @click="showList($event)" />
            </div>
        </div>
        <div class="headershowlist">
            <p @click="openhome">专业平台</p>
            <p @click="opengonqiu">供求金链</p>
            <p @click="opencontactus">联系我们</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "header",
    data() {
    return {
          chanceimg:true,
    };
  },
    methods: {
        showList(e){
          console.log(e.target);
          if(this.chanceimg==true){
              this.chanceimg=!this.chanceimg;
              e.target.src="/_nuxt/src/assets/image/x.png";
              var t1=document.getElementsByClassName('headershowlist');
              console.log(t1)
              t1[0].style.setProperty('display','flex','important');

          }else{
              this.chanceimg=!this.chanceimg;
              var t2=document.getElementsByClassName('headershowlist');
              t2[0].style.setProperty('display','none','important');
              e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAYAAACkVDyJAAAA1klEQVRIie3WIU4DURCA4a+lCRgEBg8hGEgNV6jiDigEopepqAEOguEWraEhVFchEG0NjwzhCeoq5qn91ar9Mnm7s9srpfRwiyvEdUYFc7wopUxKuyYx4RpHSZPttulj0QiL3mLCIZ5wmY3hIcBk53/9ploHZjT4u+cJzpOtD3wGeIdnHCaDW9zHa7HCaTJWW8UZHjTCokGAY6wbYGGM66Y5xkXiU/uNd3x1q60D9y42zQ0eG6223w/wDNfJWG0e4KbBHq1t4wynjbBoWn+ERzhLxpZ4/QFl1arRpQVFggAAAABJRU5ErkJggg=="
          }
        },
        showsousuo(e){
          console.log("nihao");
          document.getElementsByClassName('_iconlist').style.setProperty('whidth','5.21rem','important');
          document.getElementsByClassName('inputimg').style.setProperty('display','none','important');
        },
        opengonqiu(){
          this.$router.push({path:'/productrequest'})
          },
        opencontactus(){
          this.$router.push({path:'/contactus'})
        },
        openhome(){
          this.$router.push({path:'/home'})
        }


     }

}
</script>

<style scoped lang="less">
.group {
	width: 7.5rem;
	height: 0.91rem;
  position: relative;
}
.nav-icon-search {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
	width: 7.5rem;
	height: 0.91rem;
  padding-top:0.31rem;
  bottom: 0;
  
}
._iconlist{
  width: 2.21rem;
  height: 0.34rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.headershowlist{
  display: none;
  position: absolute;
  top: 0.8rem;
  right: 0.1rem;
  width: 1.85rem;
  height: 2.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  opacity: 0.5;
}
.headershowlist p{
  padding-bottom: 0.2rem;
  font-size: 0.25rem;
  color: #d4aa58;
  text-align: center;
}
.inputimg{
  display: none;
  flex-direction: row;
  justify-content: center;
  width: 3.4rem;
}
.inputimgText{
  font-size: 0.2rem;
  color: white;
}
</style>