<template>
    <div>
      <div class="cotusTop">
        <p>联系我们</p>
        <p>专业的服务团队，致力于为您提供专业的售前购买咨询服务，及完善的购后服务</p>
      </div>
      <div class="contusSencond">
        <p class="contusSencondFirst">业务洽谈/加入咨询/会晤预约</p>
        <p class="contusSencondSecond">CREATE THE INTRECONNECTION OF COATING INDUSTRY</p>
        <p class="contusSencondThree">客服人员</p>
        <div class="contusSencondFour">
          <div class="contusSencondFourDiv SencondFourDiv1">
            <img src="~assets/image/peop1.png" />
            <p>
              涂料成品交易平台
            </p>
            <p>
              天下金涂专员：黄彩燕
            </p>
            <p>
              联系电话：13025788580
            </p>
          </div>
          <div class="contusSencondFourDiv SencondFourDiv2">
            <img src="~assets/image/peop2.png" />
            <p>
              涂料原料供应平台
            </p>
            <p>
              供求金链专员：刘华新
            </p>
            <p>
              联系电话：18675631077
            </p>
          </div>
          <div class="contusSencondFourDiv SencondFourDiv3">
            <img src="~assets/image/peop3.png" />
            <p>
              涂料专业代工平台
            </p>
            <p>
              全域金代专员：陈鑫
            </p>
            <p>
              联系电话：18189523020
            </p>
          </div>
          <div class="contusSencondFourDiv SencondFourDiv4">
            <img src="~assets/image/peop4.png" />
            <p>
              涂料技术研发平台
            </p>
            <p>
              重磅金技专员：吴培佳
            </p>
            <p>
              联系电话：13925355177
            </p>
          </div>
        </div>
        <p class="contusSencondThree">联系方式</p>
        <p class="contusSencondfive">公司总机：(86)756 76888 91/92/93(fax)</p>
        <div class="contusSencondsix">
              <div class="contusSencondsix1">
                  <p>
                    <span>？</span>
                    帮助文档？
                  </p>
                  <p>
                    为客户提供优质所有产品的简介、购买、入门、操作等内容。
                  </p>
              </div>
              <div class="contusSencondsix2">
                  <img src="~assets/image/wendan.png" />
                  <p>
                    下载文档
                  </p>
              </div>
          </div>
      </div>
      <div class="contusThree" :style="{'background-image': `url(${require('~/assets/image/bg555.png')})`}">
        <img src="~assets/image/Rectangle 5.png" class="contusThreebg"/>
        <div class="contusThreeFirst">
          <p class="contusThreeFirstP"> 
            <span>行业新闻</span>
            <span>查看更多</span>
          </p>
          <div v-for='(item,index) in contactuslist' :key='index' class="contusThreeFirstDiv">
            <p class="contusThreeFirstDivText">
              {{item.text}}
              <span class="contusThreeFirstDivTextImg" :style="{'background-image': `url(${require('~/assets/image/Path3.png')})`}">
              NEW
              </span>
            </p>
            <p class="contusThreeFirstDivTime">
              {{item.time}}
            </p>
          </div>
        </div>
        <div class="contusThreeSecond">
              <div class="contusThreeSecond1">
                  <p>
                    让我们与您联系
                  </p>
                  <p>
                    留下您的联系方式，我们的专业顾问会在一日内与您联系。
                  </p>
              </div>
              <div class="contusThreeSecond2" >
                  <p>
                    现在预约
                  </p>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "contactus",
    data() {
    return {
          contactuslist:[{
            text:'金色摇篮携智慧系统亮相2019中国国际涂料展',
            time:'2019-11-20 11:53:09',
          },{
            text:'金色摇篮携智慧系统亮相2019中国国际涂料展',
            time:'2019-11-20 11:53:09',
          },{
            text:'金色摇篮携智慧系统亮相2019中国国际涂料展',
            time:'2019-11-20 11:53:09',
          }]
    };
  },
    methods: {
       

     }

}
</script>

<style scoped lang="less">
.cotusTop{
  width: 6.98rem;
  height: 2.1rem;
 
}
.cotusTop p{
  width:3.9rem;
	margin-left: 0.55rem;
	font-family: SourceHanSansCN-Bold;
	font-size: 0.3rem;
	color: #ffffff;
}
.cotusTop p:nth-child(2){
  width: 5.6rem;
	font-size: 0.2rem;
	color: #ffffff;
  opacity: 0.9;
}
.contusSencond{
  width: 7.5rem;
  height: 13rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center
}
.contusSencondFirst{
  padding-top: 0.5rem;
  width: 7.5rem;
  font-family: SourceHanSansCN-Regular;
	font-size: 0.35rem;
  text-align: center;
	color: #333333;
  font-weight: bold;
}
.contusSencondSecond{
  width: 7.5rem;
  font-family: SourceHanSansCN-Regular;
	font-size: 0.2rem;
  text-align: center;
	color: #333333;
  opacity: 0.7;
}
.contusSencondThree{
  width: 7rem;
  border-left:0.1rem #d4aa58 solid;
  margin-top:0.7rem;
  padding-left: 0.1rem;
  font-size: 0.2rem;
}
.contusSencondFour{
  position: relative;
  width: 7rem;
  height: 5.7rem;
  background: #404e75;
  margin-top:0.7rem;
  display: flex;
}
.contusSencondFourDiv{
  display: flex;
  flex-direction: column;
  align-items: center;
  position:absolute;
  height: 2.8rem;
  width: 3rem;
}
.SencondFourDiv1,
.SencondFourDiv2{
  top:-0.5rem
}
.SencondFourDiv4 ,
.SencondFourDiv2{
  left: 3.6rem;
}
.SencondFourDiv1,
.SencondFourDiv3{
  left: 0.5rem;
}
.SencondFourDiv4,
.SencondFourDiv3{
  top:2.6rem;
}
.SencondFourDiv1::after,
.SencondFourDiv3::after{
  border: 1px white solid;
  content: " ";
  height: 1.2rem;
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0.1;
}
.contusSencondFourDiv img{
  border-radius: 50%;
  height: 1.15rem;
  width: 1.15rem;
}
.contusSencondFourDiv p{
  width: 2.5rem;
  font-size:0.2rem;
  color: white;
}
.contusSencondFourDiv p:nth-child(2){
  font-size: 0.3rem;
  margin-bottom: 0.1rem;
  padding-top:0.3rem;
}
.contusSencondfive{
  margin-top:0.1rem;
  margin-bottom:0.4rem;
  font-size: 0.2rem;
	color: #777777; 
  opacity: 0.7;
  width: 7rem;
}
.contusSencondsix{
  width: 7rem;
  height: 1.9rem;
  display:flex;
  flex-direction: row;
  background: #f8f9fa;
  padding-left: 0.2rem;
  margin-bottom: 0.2rem;
}
.contusSencondsix1{
  width: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contusSencondsix1 p:nth-child(1){
  padding-bottom: 0.2rem;
  width: 5rem;
  font-size: 0.27rem;
  line-height: 0.4rem
}
.contusSencondsix1 p:nth-child(2){
  width: 3.2rem;
  font-size: 0.17rem;
  color: #777777
}
.contusSencondsix1 p span{
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  font-size: 0.2rem;
  border:1px black solid;
  border-radius: 50%;
  text-align: center;
  line-height: 0.3rem;
  text-align: center;
}
.contusSencondsix2{
  width: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.contusSencondsix2 img{
  width: 0.8rem;
  height: 0.8rem;
}
.contusSencondsix2 p{
  width: 1.7rem;
  height: 0.6rem;
  font-size: 0.25rem;
  line-height: 0.6rem;
  text-align:center;
}
.contusThree{
  width: 7.5rem;
  height: 7.4rem;
  background-size: 7.5rem 7.4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contusThreebg{
  width: 7.5rem;
  height: 7.4rem;
  position: absolute;
}
.contusThreeFirst{
  position: absolute;
  top: 0.5rem;
  width: 7rem;
  height: 4rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contusThreeFirstP{
  width:6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.2rem;
}
.contusThreeFirstP span{
  padding-top: 0.3rem;
  font-size: 0.3rem;
  line-height: 0.5rem;
}
.contusThreeFirstP span:nth-child(2){
  font-size: 0.2rem;
  opacity: 0.7;
}
.contusThreeSecond{
  position: absolute;
  top:4.8rem;
  width: 7rem;
  height: 1.9rem;
  display:flex;
  flex-direction: row;
  background: #f8f9fa;
  padding-left: 0.2rem;
  margin-bottom: 0.2rem;
}
.contusThreeSecond1{
  width: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contusThreeSecond1 p:nth-child(1){
  padding-bottom: 0.2rem;
  width: 5rem;
  font-size: 0.27rem;
  line-height: 0.4rem
}
.contusThreeSecond1 p:nth-child(2){
  width: 3.2rem;
  font-size: 0.17rem;
  color: #777777
}
.contusThreeSecond1 p span{
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  font-size: 0.2rem;
  border:1px black solid;
  border-radius: 50%;
  text-align: center;
  line-height: 0.3rem;
  text-align: center;
}
.contusThreeSecond2{
  width: 2rem;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  
}
.contusThreeSecond2 p{
  width: 1.7rem;
  height: 0.6rem;
  font-size: 0.25rem;
  line-height: 0.6rem;
  text-align:center;
  background: #d4aa58;
  color: #ffffff;
  margin-bottom:0.3rem;
  margin-left: -0.4rem;
}
.contusThreeFirstDiv{
  width: 6rem;
  height: 0.7rem;
  padding-bottom: 0.2rem;
  position: relative;
  border-left: 1px #333333 solid;
}
.contusThreeFirstDiv::before{
  content: " ";
  width: 0.1rem;
  height: 0.1rem;
  top:0.3rem;
  left: -0.05rem;
  background: #d4aa58;
  border-radius: 50%;
  position: absolute;
}

.contusThreeFirstDivText{
  width: 6rem;
  font-size: 0.2rem;
  padding-left: 0.2rem;
}
.contusThreeFirstDivTime{
  width: 6rem;
  font-size: 0.2rem;
  padding-left: 0.2rem;
}
.contusThreeFirstDivTextImg{
  display: none;
  width: 0.4rem;
  height: 0.25rem;
  background-size: 0.4rem 0.25rem;
  font-size: 0.1rem;
  text-align: center;
  color: white;
}
.contusThreeFirst div:nth-child(2) p span{
  display: inline-block;
}
</style>