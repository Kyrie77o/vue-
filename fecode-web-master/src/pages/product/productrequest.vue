<template>
  <div>
      <div class="proreqtop">
          <p>CREATE THE INTERCONNECTION OF COATING INDUSTRY</p>
          <p>金色摇篮</p>
          <p>全面构架涂料产业智联互通</p>
      </div>
      <div class="proreqsecond">
          <div class="proreqsecondfirst">
              <p>爆款好货</p>
              <p>正规渠道 一网总览 严把品质</p>
          </div>
          <div>
              <p>爆款好货</p>
              <p>正规渠道 一网总览 严把品质</p>
          </div>
          <div>
              <p>爆款好货</p>
              <p>正规渠道 一网总览 严把品质</p>
          </div>
          <div>
              <p>爆款好货</p>
              <p>正规渠道 一网总览 严把品质</p>
          </div>
      </div>
      <div class="proreqthree" :style="{'background-image': `url(${require('~/assets/image/bg333.png')})`,'background-size':'100%'}">
          买新品，买爆款，就用供求金链
      </div>
      <div class="proreqfour">
          <img src="~assets/image/bg222.png" class="proreqfourfistimg" />
          <div class="proreqfourfistsecond">
              <img src="~assets/image/hbtl.png" class="proreqfourcommomimg" />
              <img src="~assets/image/jla.png" class="proreqfourcommomimg" />
              <img src="~assets/image/jwylj.png" class="proreqfourcommomimg" />
              <img src="~assets/image/jwylj.png" class="proreqfourcommomimg" />
          </div>
          <div class="proreqfourfistthree">
              <p class="proreqfourfistthreeTop">精选爆款</p>
              <div class="proreqfourfistthreeMiddle">
                  <div v-for='(item,index) in imggg' :key='index' class="proreqfourfistthreeMiddleDiv" >
                      <p>{{item.id}}</p>
                      <p><span>{{item.src}}</span><span>{{item.id}}</span></p> 
                  </div>
              </div>
              <p class="proreqfourfistthreeBottom">查看更多</p>
          </div>
      </div>
      <div  class="proreqfive" @click="openlimitcollection">
          <p class="proreqfivefirst">
              限时集采清单
          </p>
          <p class="proreqfivesecond">
              FLASH SALE
          </p>
          <div class="proreqfivethree">
              <button class="activecl">正在发布</button>
              <button>即将开始</button>
              <button>查看更多</button>
          </div>
          <div class="proreqfivefour">
              <div class="proreqfivefourcontent">
                  <img src="~assets/image/矩形 578.png"/>
                  <div class="proreqfivefourcontentDiv">
                      <p class="proreqfivefourcontentDivP">NR-950金红石型钛白粉  通用型二氧化钛  高遮盖钛白粉</p>
                      <div class="proreqfivefourcontentDivDiv1">
                          <span class="proreqfivefourcontentDivDiv1span">
                              <span class="proreqfivefourcontentDivDiv1span2">
                                  20%
                              </span>
                          </span>
                          <span class="proreqfivefourcontentDivDiv1span3">
                              共300吨
                          </span>
                      </div>
                      <div class="proreqfivefourcontentDivDiv2">
                          <span>
                              价格：
                          </span>
                          <span>
                              ￥15500.00
                          </span>
                          <div :style="{'background-image': `url(${require('~/assets/image/形状 630.png')})`}">
                              超值特惠
                          </div>
                      </div>
                  </div>
                  <div class="proreqfivefourcontentDivsecond">
                      <p>距离本次活动结束</p>
                      <div class="proreqfivefourcontentDivsecondDiv">
                          <span>
                              06
                          </span>
                          :
                          <span>
                              06
                          </span>
                          :
                          <span>
                              06
                          </span>
                      </div>
                      <div class="proreqfivefourcontentDivsecondDivBto">
                          马上抢
                      </div>
                  </div>
              </div>
              <div class="proreqfivefourcontent">
                  <img src="~assets/image/矩形 578.png"/>
                  <div class="proreqfivefourcontentDiv">
                      <p class="proreqfivefourcontentDivP">NR-950金红石型钛白粉  通用型二氧化钛  高遮盖钛白粉</p>
                      <div class="proreqfivefourcontentDivDiv1">
                          <span class="proreqfivefourcontentDivDiv1span">
                              <span class="proreqfivefourcontentDivDiv1span2">
                                  20%
                              </span>
                          </span>
                          <span class="proreqfivefourcontentDivDiv1span3">
                              共300吨
                          </span>
                      </div>
                      <div class="proreqfivefourcontentDivDiv2">
                          <span>
                              价格：
                          </span>
                          <span>
                              ￥15500.00
                          </span>
                          <div :style="{'background-image': `url(${require('~/assets/image/形状 630.png')})`}">
                              超值特惠
                          </div>
                      </div>
                  </div>
                  <div class="proreqfivefourcontentDivsecond">
                      <p>距离本次活动结束</p>
                      <div class="proreqfivefourcontentDivsecondDiv">
                          <span>
                              06
                          </span>
                          :
                          <span>
                              06
                          </span>
                          :
                          <span>
                              06
                          </span>
                      </div>
                      <div class="proreqfivefourcontentDivsecondDivBto">
                          马上抢
                      </div>
                  </div>
              </div>
              <div class="proreqfivefourcontent">
                  <img src="~assets/image/矩形 578.png"/>
                  <div class="proreqfivefourcontentDiv">
                      <p class="proreqfivefourcontentDivP">NR-950金红石型钛白粉  通用型二氧化钛  高遮盖钛白粉</p>
                      <div class="proreqfivefourcontentDivDiv1">
                          <span class="proreqfivefourcontentDivDiv1span">
                              <span class="proreqfivefourcontentDivDiv1span2">
                                  20%
                              </span>
                          </span>
                          <span class="proreqfivefourcontentDivDiv1span3">
                              共300吨
                          </span>
                      </div>
                      <div class="proreqfivefourcontentDivDiv2">
                          <span>
                              价格：
                          </span>
                          <span>
                              ￥15500.00
                          </span>
                          <div :style="{'background-image': `url(${require('~/assets/image/形状 630.png')})`}">
                              超值特惠
                          </div>
                      </div>
                  </div>
                  <div class="proreqfivefourcontentDivsecond">
                      <p>距离本次活动结束</p>
                      <div class="proreqfivefourcontentDivsecondDiv">
                          <span>
                              06
                          </span>
                          :
                          <span>
                              06
                          </span>
                          :
                          <span>
                              06
                          </span>
                      </div>
                      <div class="proreqfivefourcontentDivsecondDivBto">
                          马上抢
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="proreqsix" :style="{'background-image': `url(${require('~/assets/image/bigbg.png')})`,'background-size':'100%'}">

      </div>
      <div class="proreqseven">
          <p class="proreqsevenfirst">成为合作伙伴</p>
          <p class="proreqsevensecond">BECOME THE PARTNERS</p>
          <p class="proreqseventhree">基于金色摇篮-原材料供应链平台，建立企业专门服务体系，为供需两方打造战疫平台的同时，也为以后供应链优化打下坚实基础，成本直降，开拓市场！</p>
          <div class="proreqsevenfour">
              <div class="proreqsevenfour1">
                  <p>
                      涂料厂商
                  </p>
                  <p>
                      通过金色摇篮解决问题，实现最优供应链，成本直降
                  </p>
                  <p>
                      平台能力：匹配平台 |  优化平台 | 资源平台 服务监督平台
                  </p>
              </div>
              <div class="proreqsevenfour2">
                  <p>
                      立即加入
                  </p>
                  <p>
                      咨询客服
                  </p>
              </div>
          </div>
          <div class="proreqsevenfive">
              <div class="proreqsevenfive1">
                  <p>
                      原材料商
                  </p>
                  <p>
                      通过金色摇篮解决问题，增加销路，开辟市场
                  </p>
                  <p>
                      平台能力：推广平台 |  销售平台 | 分销平台 | 服务监督平台
                  </p>
              </div>
              <div class="proreqsevenfive2">
                  <p>
                      立即加入
                  </p>
                  <p>
                      咨询客服
                  </p>
              </div>
          </div>
          <div class="proreqsevensix">
              <img src="~assets/image/pic666.png" class="proreqsevensixImg" />
              <p class="proreqsevensixP1">
                  原料厂商销售、贸易商转型解决方案
              </p>
              <p class="proreqsevensixP2">
                  实行原材料贸易商、原材料品牌商双向征集，以平台为中枢，重构渠道合作模式，实现原材料品牌商稳定、快速销货，同时消化库存，实现跨域销售服务；贸易商转型专业服务商，平台分发具有优势的可售产品清单，最大程度增加市场获利的机会，
              </p>
              <p class="proreqsevensixP3">
                  解决方案特点
              </p>
              <p class="proreqsevensixP4">
                  快速销货,消化库存 &nbsp;| &nbsp;高效转型，盈利渠道&nbsp; | &nbsp;集成分发，背书担保       
              </p>
              <div class="proreqsevensixP5P6">
                  <p class="proreqsevensixP5">
                      立即加入
                  </p>
                  <p class="proreqsevensixP6">
                      咨询客服
                  </p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "header",
    data() {
        return {
            imggg:[{
                id:'爆款树脂',
                _title:'原材料货物',
                src:'爆款树脂发布',
              },
              {
                id:'爆款树脂',
                _title:'原材料货物',
                src:'爆款树脂发布',

              },
              {
                id:'爆款树脂',
                _title:'原材料货物',
                src:'爆款树脂发布',
              },
              {
                id:'爆款树脂',
                _title:'原材料货物',
                src:'爆款树脂发布',
              },
              {
                id:'爆款树脂',
                _title:'原材料货物',
                src:'爆款树脂发布',
              },
              {
                id:'爆款树脂',
                _title:'原材料货物',
                src:'爆款树脂发布',
              },
            ],

        }
    },
    methods:{
      openlimitcollection(){
        this.$router.push({path:'/limitcollection'})
      }
    }
}
</script>

<style scoped lang="less">
.proreqtop{
  width: 6.98rem;
  height: 2.8rem;
 
}
.proreqtop p{
  width:3.9rem;
	margin-left: 0.55rem;
	font-family: SourceHanSansCN-Bold;
	font-size: 0.24rem;
	color: #d4aa58;
}
.proreqtop p:nth-child(2){
	font-size: 0.30rem;
	color: #ffffff;
}
.proreqtop p:nth-child(3){
	font-size: 0.30rem;
	color: #ffffff;
}
.proreqsecond{
  width: 7.5rem;
  height: 1.2rem;
  display: flex;
  flex-direction: row;

}
.proreqsecond div{
  flex:1;
  position: relative;
}
.proreqsecond div::after{
  content: " ";
  position: absolute;
  top:0.3rem;
  width: 1px;
  height: 0.6rem;
  border-right: 2px solid white;
}
.proreqsecond .proreqsecondfirst::after{
  width: 0;
  border-right: 0;
  
}
.proreqsecond div p:nth-child(1){
  text-align: center;
  color: #ffffff;
  font-size: 0.25rem;
  font-weight: bold;
}
.proreqsecond div p:nth-child(2){
  text-align: center;
  color: #8d959f;
  font-size: 0.2rem;
}
.proreqthree{
  width: 7.5rem;
  height: 0.8rem;
  font-size: 0.3rem;
  color: #d4aa58;
  line-height: 0.8rem;
  text-align: center;
}
.proreqfour{
  width: 7.5rem;
  height: 10.8rem;
}
.proreqfourfistimg{
  width: 7.5rem;
}
.proreqfourcommomimg{
  width: 1.8rem;
  height: 2.1rem;
}
.proreqfourfistsecond{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 2.3rem;
  align-items: center
}
.proreqfourfistthree{
  height: 5.9rem;
  width: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center

}
.proreqfourfistthreeTop{
  width: 7rem;
  height: 0.6rem;
  background-color: #d4aa58;
  line-height: 0.6rem;
  text-align: center;
  color:white;
  font-weight: bold;
  font-size: 0.28rem;
}
.proreqfourfistthreeMiddle{
  width: 7rem;
  height: 4rem;
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: space-around

}
.proreqfourfistthreeMiddleDiv{
  width: 3rem;
  height: 1.1rem;
  border-bottom: 1px solid black
}
.proreqfourfistthreeMiddleDiv p{
  width: 3rem;
  padding-left:0.1rem;
  padding-bottom:0.05rem ;
  padding-top:0.05rem ;
  font-size: 0.25rem;
}
.proreqfourfistthreeMiddleDiv p span{
  display: inline-block;
  width:50%;
  font-size: 0.2rem;
  text-align: center;
  color: #333333;
}
.proreqfourfistthreeMiddleDiv p span:nth-child(1){
  text-align: left
}
.proreqfourfistthreeBottom{
  height: 0.6rem;
  font-size: 0.2rem;
  color: #d4aa58
}
.proreqfive{
  width: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
}
.proreqfivefirst{
  font-size: 0.3rem;
  color: #000000;
  font-weight: bold;
  padding-top:0.2rem;
}
.proreqfivesecond{
  font-size: 0.2rem;
  color: #8d959f;
  padding-bottom: 0.4rem;
}
.proreqfivethree{
  width: 7rem;
  display: flex;
  flex-direction: row;
  height: 0.65rem;
  margin-bottom:0.3rem;
}
.proreqfivethree button{
  flex:1;
  background-color: #0b294d;
  font-size: 0.3rem;
  border:0;
  color: white
}
.proreqfivethree .activecl{
  background-color:#d4aa58;
}
.proreqfivefour{
  height: 4.65rem;
  width: 7rem;
}
.proreqfivefourcontent{
  width: 7rem;
  height:1.35rem ;
  background-color: #333333;
  margin-bottom: 0.2rem;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
}
.proreqfivefourcontent img{ 
  width: 1.35rem;
  height: 1.35rem;
}
.proreqfivefourcontentDiv{
  height: 1.35rem;
  width: 3.95rem;
  background-color: #f8f9fa;
}
.proreqfivefourcontentDivP{
  font-size: 0.2rem;
  width: 3rem;
  padding-bottom: 0.2rem;
}
.proreqfivefourcontentDivDiv1{
  width: 3rem;
  height: 0.15rem;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: row;
}
.proreqfivefourcontentDivDiv1span{
  width: 2.5rem;
  height: 0.15rem;
  display: block;
  background-color:#f2f3f5;
  border-radius: 0.1rem
}
.proreqfivefourcontentDivDiv1span2{
  width: 1.25rem;
  height: 0.15rem;
  display: block;
  background-color: #d4aa58;
  border-radius: 0.1rem;
  font-size: 0.1rem;
  text-align: center;
  color: white
}
.proreqfivefourcontentDivDiv1span3{
  width: 0.5rem;
  height: 0.15rem;
  display: block;
  background-color:#f8f9fa;
  font-size:0.1rem;
}
.proreqfivefourcontentDivDiv2{
  height: 0.35rem;
  padding-top:0.1rem;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap
}
.proreqfivefourcontentDivDiv2 span{
  line-height: 0.2rem;
  font-size: 0.15rem;
  font-weight: bold

}
.proreqfivefourcontentDivDiv2 span:nth-child(2){
  font-size: 0.2rem;
  color:red;
  font-weight: bold
}
.proreqfivefourcontentDivDiv2 div{
  height: 0.25rem;
  width: 1rem;
  background:no-repeat;
  background-size: 1rem 0.25rem;
  text-align: center;
  line-height: 0.25rem;
  color: white;
  font-size: 0.1rem;
}
.proreqfivefourcontentDivsecond{
  height: 1.35rem;
  width: 1.7rem;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
  justify-content:space-around;
}
.proreqfivefourcontentDivsecond p{
  height:0.3rem;
  width: 1.7rem;
  text-align: center;
  font-size: 0.2rem;
  color: #222222;
  font-weight: bold;
}
.proreqfivefourcontentDivsecondDiv{
  width: 1.7rem;
  height: 0.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.2rem;
}
.proreqfivefourcontentDivsecondDiv span{
  background: #7c7c7d;
  font-size: 0.2rem;
  width: 0.5rem;
  height: 0.4rem;
  text-align: center;
  line-height: 0.4rem;
  color: white;
}
.proreqfivefourcontentDivsecondDivBto{
  width: 1.7rem;
  height: 0.6rem;
  background: red;
  font-size: 0.25rem;
  font-weight: bold;
  color:white;
  line-height: 0.6rem;
  text-align: center
}
.proreqsix{
  width: 7.5rem;
  height: 6.3rem;

}
.proreqseven{
  width: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.proreqsevenfirst{
  width: 7.5rem;
  padding-top:1rem;
  font-size: 0.4rem;
  text-align: center
}
.proreqsevensecond{
  width: 7.5rem;
  font-size: 0.2rem;
  text-align: center;
  padding-bottom: 0.2rem;
  color: #c0c0c0;
}
.proreqseventhree{
  width: 7rem;
  font-size: 0.2rem;
  text-align: left;
  padding-bottom: 0.2rem;
  color: #333333;
  padding-bottom: 0.5rem;
}
.proreqsevenfour{
  width: 7rem;
  height: 1.9rem;
  display:flex;
  flex-direction: row;
  background: #f8f9fa;
  padding-left: 0.2rem;
  margin-bottom: 0.2rem;
}
.proreqsevenfour1{
  width: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.proreqsevenfour1 p:nth-child(1){
  padding-bottom: 0.1rem;
  width: 5rem;
  font-size: 0.27rem;
}
.proreqsevenfour1 p:nth-child(2){
  width: 5rem;
  font-size: 0.2rem;
}
.proreqsevenfour1 p:nth-child(3){
  width: 5rem;
  font-size: 0.17rem;
  color: #777777
}
.proreqsevenfour2{
  width: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center
  
}
.proreqsevenfour2 p:nth-child(1){
  width: 1.7rem;
  height: 0.6rem;
  background: #d4aa58;
  margin-bottom:0.2rem;
  font-size: 0.25rem;
  color:white;
  line-height: 0.6rem;
  text-align:center;
}
.proreqsevenfour2 p:nth-child(2){
  width: 1.7rem;
  height: 0.6rem;
  background: white;
  font-size: 0.25rem;
  line-height: 0.6rem;
  text-align:center;
}
.proreqsevenfive{
  width: 7rem;
  height: 1.9rem;
  display:flex;
  flex-direction: row;
  background: #f8f9fa;
  padding-left: 0.2rem;
  margin-bottom: 0.2rem;
}
.proreqsevenfive1{
  width: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.proreqsevenfive1 p:nth-child(1){
  padding-bottom: 0.1rem;
  width: 5rem;
  font-size: 0.27rem;
}
.proreqsevenfive1 p:nth-child(2){
  width: 5rem;
  font-size: 0.2rem;
}
.proreqsevenfive1 p:nth-child(3){
  width: 5rem;
  font-size: 0.17rem;
  color: #777777
}
.proreqsevenfive2{
  width: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center
  
}
.proreqsevenfive2 p:nth-child(1){
  width: 1.7rem;
  height: 0.6rem;
  background: #d4aa58;
  margin-bottom:0.2rem;
  font-size: 0.25rem;
  color:white;
  line-height: 0.6rem;
  text-align:center;
}
.proreqsevenfive2 p:nth-child(2){
  width: 1.7rem;
  height: 0.6rem;
  background: white;
  font-size: 0.25rem;
  line-height: 0.6rem;
  text-align:center;
}
.proreqsevensix{
  width: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.proreqsevensixImg{
  width: 6.5rem;
  height: 6.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem
}
.proreqsevensixP1{
  width: 6.5rem;
  font-family: SourceHanSansCN-Regular;
	font-size:0.27rem;
	color: #333333;
  padding-bottom: 0.2rem
}
.proreqsevensixP2{
  width: 6.5rem;
  font-family: SourceHanSansCN-Normal;
	font-size: 0.2rem;
	line-height: 0.3rem;
	color: #333333;
	opacity: 0.8;
  padding-bottom: 0.2rem
}
.proreqsevensixP3{
  width: 6.5rem;
  font-family: SourceHanSansCN-Regular;
	font-size: 0.3rem;
	color: #333333;
  padding-bottom: 0.2rem
}
.proreqsevensixP4{
  width: 6.5rem;
  font-family: SourceHanSansCN-Normal;
	font-size: 0.2rem;
	line-height: o.23rem;
	color: #777777;
  padding-bottom: 0.2rem;
}
.proreqsevensixP5{
  display: inline-block;
  width: 1.7rem;
  height: 0.6rem;
  background: #d4aa58;
  margin-bottom:0.2rem;
  font-size: 0.25rem;
  color:white;
  line-height: 0.6rem;
  text-align:center;
}
.proreqsevensixP6{
  display: inline-block;
  width: 1.7rem;
  height: 0.6rem;
  background: white;
  font-size: 0.25rem;
  line-height: 0.6rem;
  text-align:center;
}
.proreqsevensixP5P6{
  width: 6.5rem;
  display: flex;
  height: 0.6rem;
  flex-direction: row;
  flex-flow: row wrap
}
</style>