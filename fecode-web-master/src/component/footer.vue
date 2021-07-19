<template>
  <div class="_footer">
    <div class="_25">
      <p>战略合作伙伴</p>
      <p>STRATEGIC PARTNERS</p>
      
      <div class="imgcctl1" :style="{'background-image': `url(${require('~/assets/image/展辰.png')})`,'background-size':'100%'}">

      </div>
      <div class="imgcctl2" :style="{'background-image': `url(${require('~/assets/image/嘉宝莉.png')})`,'background-size':'100%'}">

      </div>
      <div class="imgcctl3" :style="{'background-image': `url(${require('~/assets/image/和氏璧.png')})`,'background-size':'100%'}">

      </div>
      <div class="imgcctl4" :style="{'background-image': `url(${require('~/assets/image/复旦.png')})`,'background-size':'100%'}">

      </div>
      <div class="imgcctl5" :style="{'background-image': `url(${require('~/assets/image/锌盾.png')})`,'background-size':'100%'}">

      </div>
      
      <div class="bottemicon"><div class="jt"></div><div class="jt"></div></div>
      
    </div>
    <div class="rectangle">
      <ul class="footer_ul">
        <li @click="openaboutus">关于我们</li>
        <li>商务合作</li>
        <li>联系我们</li>
        <li>法律说明</li>
        <li>营业执照</li>
        <li>经营执照</li>
      </ul>
      <div class="_footertext">
        <p>Copyright©2013-2016 MOLBASE ALL Rights Reserved 吉力金色摇篮</p>
<p>粤公网安备 31010402005161号丨粤ICP备14014220丨增值电信业务经营许可证：沪B2-20140080</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
        name: "footer",
        methods:{
          openaboutus(){
            this.$router.push({path:'/aboutus'})
          }
        }
    }
</script>

<style scoped lang="less">

._footer{
height: 7.35rem;
width: 7.5rem;
background-color: white;
overflow: hidden;
-webkit-text-size-adjust:none;
}
._25 {
  
  margin-top:0.89rem;
  margin-bottom:0.76rem;
	width: 7.4rem;
	height: 4.1rem;
  
  word-spacing: 0rem;
  color: white;
  
}
._25 p{
  text-align: center;
 width: 7.5rem;
	font-family: SourceHanSansCN-Regular;
	font-size: 0.39rem;
	font-weight: normal;
	font-stretch: normal;
	line-height: 0.50rem;
	color: #333333;
  
}
._25 p:nth-child(2){
  font-family: SourceHanSansCN-Regular;
	font-size: 0.21rem;
	font-weight: normal;
	font-stretch: normal;
	color: #777777;
}
.rectangle {
	width: 7.50rem;
	height: 1.60rem;
	background-color: #0b294d;
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer_ul{
  width: 7.5rem;
  height: o.1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction:row;
  
}
.footer_ul li{

font-family: SourceHanSansCN-Regular;
	font-size: 0.18rem;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0rem;
	color: #ffffff;
  width: 1.25rem;
  text-align: center;
  border-left: 1px white solid;
}
.footer_ul li:first-child{
  border-left: 0;
}

._footertext{
  height: 0.32rem;
 margin-top:0.31rem;
}
._footertext p{
  
  width: 7.5rem;
  height: 0.16rem;
	font-family: SourceHanSansCN-Regular;
	font-size: 0.14rem;
  -webkit-text-size-adjust:none;
	color: #9da9b7;
  text-align: center;
}
.imgcctl1{
  margin-left: 0.53rem;
  width: 1.94rem;
	height: 1.19rem;
  display: inline-block;
}
.imgcctl2{
  margin-left: 0.61rem;
  width: 0.68rem;
	height: 0.8rem;
  margin-top:0.2rem;
  display: inline-block;
  vertical-align: top;
}
.imgcctl3{
  margin-left: 1.05rem;
  width: 1.86rem;
  height: 0.46rem;
  vertical-align: top;
  display: inline-block;
  margin-top:0.365rem;
}
.imgcctl4{
  margin-left: 0.82rem;
  vertical-align: top;
  width: 0.86rem;
	height: 0.86rem;
  display: inline-block;
}
.imgcctl5{
  vertical-align: top;
  margin-top: 0.33rem;
  margin-left: 1.0rem;
  width: 1.57rem;
	height: 0.54rem;
  
  display: inline-block;
}

.bottemicon{
  width: 7.5rem;
  height: 0.22rem;
  background: white;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
}
.jt{
  width:0.44rem;
  height: 0.11rem;
  position: relative;
  background-color:white;
}
.jt::before{
  content: " ";
   position: absolute;
  top:0.10rem;
  left: 0.11rem;
  border-left:0.11rem solid transparent ;
  border-right:0.11rem solid transparent ;
  border-top:0.05rem solid white ;
  z-index: 22;
}
.jt::after{
  content: " ";
  position: absolute;
  top:0.11rem;
  left: 0.11rem;
  border-left:0.11rem solid transparent ;
  border-right:0.11rem solid transparent ;
  border-top:0.05rem solid #acb3b3 ;
}

</style>