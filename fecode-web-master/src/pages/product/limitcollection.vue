<template>
    <div>
      <div class="lmtcol">
        <p>限时集采清单</p>
        <p>
            特价产品拼单抢购，限时限量，可加入供求金链并链业务，
            为你优化供应链，节约成本
        </p>
        <div class="lmtcolDiv">
          <span class="lmtcolDivSpan">
              征集优势产品
              <span class="lmtcolDivSpanArrow"></span>
          </span>
          <span class="lmtcolDivSpan">
              填写采购需求
              <span class="lmtcolDivSpanArrow"></span>
          </span>
        </div>
      </div>
      <div class="lmtcolsecond">
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
    </div>
</template>

<script>
export default {
    name: "limitcollection",
    data() {
    return {
          
    };
  },
    methods: {
        opengonqiu(){
            this.$router.push({path:'/productrequest'})
          }

     }

}
</script>

<style scoped lang="less">
.lmtcol{
  width: 6.98rem;
  height: 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: center
}
.lmtcol p{
  width:7.5rem;
	margin-left: 0.55rem;
	font-size:0.3rem;
  font-family: SourceHanSansCN-Bold;
	line-height: 0.5rem;
	color: white;
  font-weight: bold;
  text-align: center;
}
.lmtcol p:nth-child(2){
	font-size: 0.2rem;
	line-height: 0.3rem;
	opacity: 0.71;
  width: 5rem;
}
.lmtcolDiv{
  margin-top:0.5rem;
	display: flex;
  flex-direction: row;
  justify-content: center;
  width: 7.5rem;
  height: 0.6rem;
}
.lmtcolDivSpan{
  width: 2.5rem;
  height: 0.6rem;
  color: #d4aa58;
  font-size: 0.25rem;
  text-align: center;
  line-height: 0.6rem;
  border:1px solid #d4aa58;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.lmtcolDivSpanArrow{
  display: inline-block;
  position: relative;
  height: 0.125rem;
  width: 0.125rem ;
  border-top: 1px solid #d4aa58;
  border-right: 1px solid #d4aa58;
  margin-left: 0.1rem;
  margin-top: 0.05rem;
  transform: rotate(45deg)
}
.lmtcolsecond{
  width: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.3rem;
  background-color: #f8f9fa;
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
</style>