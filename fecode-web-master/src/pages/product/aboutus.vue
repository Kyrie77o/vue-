<template>
    <div class="aboutusAll">
      <div class="aboutusTop">
        <p>金色摇篮</p>
        <p>涂料产业共创互联平台</p>
      </div>
      <div class="aboutusSecond">
        <p class="aboutusSecondFirst">全面架构涂料产业智联互通</p>
        <p class="aboutusSecondSecond">CREATE THE INTRECONNECTION OF COATING INDUSTRY</p>
        <p class="aboutusSecondThree">金色摇篮通过实现企业、平台、产品的全面互联，构建了一个全要素、全产业链、全价值链、新型生产制造的产业服务体系，有效助力涂料企业优化技术方案、提高生产效率、全面降低成本、开拓全新市场。</p>
        <div class="aboutusSecondFour">
          <div v-for='(item,index) in aboutusSecondList' :key='index' class="aboutusSecondFourDiv">
            <p class="aboutusSecondFourDivTitle">{{item.title}}</p>
            <p class="aboutusSecondFourDivText">{{item.text}}</p>
          </div>
        </div>
      </div>
      <div class="aboutusThree" :style="{'background-image': `url(${require('~/assets/image/bg888.png')})`}">

      </div>
      <p class="aboutusFour">
        覆盖涂料产业上下游的八大子平台
      </p>
      <p class="aboutusFive">
        EIGHT SUB PLATFORMS OF COATING INDUSTRY’S UPSTREAM AND 
        DOWNSTREAM
      </p>
      <div class="aboutusSix">
        <div v-for='(item,index) in aboutusSixDivList' :key='index' class="aboutusSixDiv">
          <img src="~assets/image/hand.png" />
          <p>{{item.text}}</p>
          <p>{{item.title}}</p>
          <div class="aboutusSixDivDiv">
            点击查看详情
          </div>
        </div>
        <p class="aboutusSixP">查看更多</p>
      </div>
      <p class="aboutusSevent">
        全面助力行业升级-平台三大计划
      </p>
      <p class="aboutuseight">
        THREE PLANS OF PLATFORM FOR INDUSTRY UPGRADING
      </p>
      <div class="proreqfivethree">
        <button class="activecl">百亿成长计划</button>
        <button>涂料千百十人才蓝海计划</button>
        <button>涂料贸易商服务商转型计划</button>
      </div>
      <div class="aboutusten" :style="{'background-image': `url(${require('~/assets/image/bg10.png')})`}">
        <p class="aboutustenP1">百万成长计划</p>
        <p class="aboutustenP2">TEN BILLION GROWTH PLAN</p>
        <p class="aboutustenP3">立即加入</p>
        <div class="aboutustenDiv">
          <div class="aboutustenDivDiv">
            <p>
              金色摇篮在地坪涂料、建筑涂料、钢结构防腐涂料三大领域分别打造百万级俱乐部，每个俱乐部由覆盖该产业上下游的企业组成。
            </p>
          </div>
          <div class="aboutustenDivDiv">
            <p>平台将为计划成员优化技术、采购、生产、销售等环节，为成员直增大于6.8%的利润价值，并利用平台智能系统，吸纳市场资源，扩大销售通路。</p>
          </div>
          <div class="aboutustenDivDiv">
            <p>平台将分发业务订单，与成员共同利用行业资源，击穿产品成本底线，形成市场竞争的绝对优势。</p>
          </div>
          <div class="aboutustenDivDiv">
            <p>同时通过利益绑定，形成一个具备更高价值的团体，或者战略收益，并极大抵抗各类经营风险。</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "aboutus",
    data() {
    return {
          aboutusSecondList:[{
            text:'重磅金技',
            title:'涂料技术研发平台',
          },{
            text:'重磅金技',
            title:'涂料技术研发平台',
          },{
            text:'重磅金技',
            title:'涂料技术研发平台',
          },{
            text:'重磅金技',
            title:'涂料技术研发平台',
          },{
            text:'重磅金技',
            title:'涂料技术研发平台',
          },{
            text:'重磅金技',
            title:'涂料技术研发平台',
          },{
            text:'重磅金技',
            title:'涂料技术研发平台',
          },{
            text:'重磅金技',
            title:'涂料技术研发平台',
          }],
          aboutusSixDivList:[{
            text:'涂料技术研发平台-重磅金技',
            title:'重磅金技，作为金色摇篮技术单元，通过平台中心实验室、高新材...',
          },{
            text:'涂料技术研发平台-重磅金技',
            title:'重磅金技，作为金色摇篮技术单元，通过平台中心实验室、高新材...',
          },{
            text:'涂料技术研发平台-重磅金技',
            title:'重磅金技，作为金色摇篮技术单元，通过平台中心实验室、高新材...',
          },{
            text:'涂料技术研发平台-重磅金技',
            title:'重磅金技，作为金色摇篮技术单元，通过平台中心实验室、高新材...',
          }]
    };
  },
    methods: {

     }

}
</script>

<style scoped lang="less">
.aboutusAll{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.aboutusTop{
  width: 6.98rem;
  height: 2rem;
}
.aboutusTop p{
  width:3.9rem;
	margin-left: 0.55rem;
	font-family: SourceHanSansCN-Bold;
	font-size: 0.3rem;
	color: #ffffff;
}
.aboutusTop p:nth-child(1){
  padding-top: 0.2rem;
}
.aboutusSecond{
  width: 7.5rem;
  height: 8.5rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.aboutusSecondFirst{
  padding-top:0.9rem;
  width: 7rem;
  font-size: 0.4rem;
  text-align: center;
}
.aboutusSecondSecond{
  width: 7rem;
  font-size: 0.2rem;
  text-align: center;
  opacity: 0.7;
  padding-bottom: 0.4rem;
}
.aboutusSecondThree{
  width: 7rem;
  font-size: 0.22rem;
  text-align: center;
  opacity: 0.7;
  padding-bottom: 0.3rem;
}
.aboutusSecondFour{
  width: 7.5rem;
  height: 5.5rem;
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.aboutusSecondFourDiv{
  height: 1rem;
  width: 3.5rem;
  background: #f8f9fb;
}
.aboutusSecondFourDivTitle{
  color: #333333;
  font-size: 0.22rem;
  width: 100%;
  margin-left: 0.25rem;
  padding-left: 0.1rem;
  position: relative;
}
.aboutusSecondFourDivTitle::before{
  content: " ";
  width: 0.1rem;
  position: absolute;
  height: 0.1rem;
  border-radius: 50%;
  background: #d4aa58;
  left: -0.05rem;
  top:0.14rem;
}
.aboutusSecondFourDivText{
  font-size: 0.22rem;
  width: 100%;
  margin-left: 0.25rem;
  padding-left: 0.1rem;
}
.aboutusThree{
  width: 7.5rem;
  height: 3.8rem;
  background-size: 7.5rem 3.8rem;
}
.aboutusFour{
  width: 7.5rem;
  text-align: center;
  font-size:0.4rem;
  padding-top: 0.7rem;
}
.aboutusFive{
  width: 7rem;
  text-align: center;
  font-size:0.2rem;
  opacity: 0.7;
}
.aboutusSix{
  width: 7rem;
  height: 13rem;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 0.5rem;
}
.aboutusSixDiv{
  width: 3.3rem;
  height: 5.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.aboutusSixDiv img{
  width: 3.2rem;
  height: 3.7rem;
}
.aboutusSixDiv p{
  padding-top:0.1rem;
  font-size: 0.2rem;
  width: 3.2rem;
}
.aboutusSixDiv p:nth-child(2){
  font-size: 0.24rem;
  font-weight: bold;
}
.aboutusSixDivDiv{
  color: #d4aa58;
  width: 3.2rem;
  height: 0.7rem;
  margin-top: 0.2rem;
  font-size: 0.22rem;
  text-align: center;
  line-height: 0.7rem;
  border:#d4aa58 1px solid;
}
.aboutusSixP{
  width: 7.5rem;
  font-size: 0.2rem;
  margin-top: 0.4rem;
  line-height: 0.3rem;
  text-align: center;
  text-decoration: underline;
}
.aboutusSevent{
  padding-top: 0.3rem;
  font-size: 0.4rem;
  width: 7.5rem;
  text-align: center;
}
.aboutuseight{
  padding-bottom: 0.3rem;
  font-size: 0.2rem;
  opacity: 0.7;
  width: 7.5rem;
  text-align: center;
}
.proreqfivethree{
  width: 7.5rem;
  display: flex;
  flex-direction: row;
  height: 1.1rem;
  margin-bottom:0.3rem;
}
.proreqfivethree button{
  flex:1;
  background-color: #0b294d;
  font-size: 0.25rem;
  border:0;
  color: white;
  padding:0.3rem;
  border: 1px solid white;
}
.proreqfivethree .activecl{
  background-color:#d4aa58;
}
.aboutusten{
  width: 7.5rem;
  height: 6.2rem;
  background-size: 7.5rem 6.2rem;
}
.aboutustenP1{
  font-size: 0.3rem;
  width: 7.5rem;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
  color: white;
  font-weight: bold;
}
.aboutustenP2{
  font-size: 0.25rem;
  width: 7.5rem;
  padding-left: 0.5rem;
  color: white;
  font-weight: bold;
}
.aboutustenP3{
  font-size: 0.25rem;
  width:1.7rem;
  height: 0.6rem;
  background:#d4aa58;
  margin-top: 0.3rem;
  margin-left: 0.5rem;
  text-align: center;
  line-height: 0.6rem;
  color: white;
  font-weight: bold;
}
.aboutustenDiv{
  width: 7.5rem;
  height: 3.8rem;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-around;
  padding-top: 0.2rem;
}
.aboutustenDivDiv{
  width: 3.5rem;
  height: 1.7rem;
  display: flex;
  justify-content: center;
  background: #113570;
}
.aboutustenDivDiv p{
  width: 3.2rem;
  font-size: 0.2rem;
  color: white;
  padding-top: 0.3rem;
}
</style>