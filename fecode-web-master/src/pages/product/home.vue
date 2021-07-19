<template>
<div>
    <div class="_hometop">
            <p>CREATE THE INTERCONNECTION OF COATING INDUSTRY</p>
            <p>金色摇篮</p>
            <p>全面构架涂料产业智联互通</p>
    </div>
    <div class="_homesecond">
            <div class="_homelist">
                  <div><img src="~assets/image/Group 9@2x.png" :style="{'height':' 1.09rem','width':'0.99rem'}" class="h_big" />
                  <div><p>成品涂料销售代工平台</p><p>Finish coating </p></div>
                  </div>
                  <div><img src="~assets/image/Group 14@3x.png" :style="{'height':' 0.85rem','width':'0.67rem'}"/>
                  <div><p>成品涂料销售代工平台</p><p>Finish coating </p></div>
                  </div>
                  <div><img src="~assets/image/编组 2@3x.png" :style="{'height':' 0.78rem','width':'0.67rem'}"/>
                  <div><p>成品涂料销售代工平台</p><p>Finish coating </p></div>
                  </div>
                  <div><img src="~assets/image/Group 11@3x.png" :style="{'height':' 0.83rem','width':'0.73rem'}" class="h_middle" />
                  <div><p>成品涂料销售代工平台</p><p>Finish coating </p></div>
                  </div>
                  <div><img src="~assets/image/Group 9@2x.png" :style="{'height':' 1.09rem','width':'0.99rem' }" class="h_big" />
                  <div><p>成品涂料销售代工平台</p><p>Finish coating </p></div>
                  </div>
                  <div class="h_bot"><img src="~assets/image/形状 655.png" :style="{'height':' 0.27rem','width':'1.25rem'}" />
                  </div>
            </div>
    </div>
    <div class="_homethree"> 
                  <div class="_csicon">
                      <img src="~assets/image/navigation_icon_gold.png" />
                      <p>产业链导航</p>
                  </div>
                  <div v-for='(item,index) in imggg' :key='index' class="_homethreelist" >
                      <p @click="_open_homethree_detail($event)"><span>{{item.id}}</span><span>{{item._title}}</span><span></span></p><div>{{item.src}}</div>
                  </div>
                  <p class="_homethree_bt"></p>
    </div>
    <div class="_homefour" >
                  <div class="_homefourtop">
                      <p>供需专区</p>
                      <p>THE ZONE SUPPLY ADD DEMAND</p>
                      <div>
                            <div><img src="~assets/image/leaf.png" /><p>重磅金技</p></div>
                            <div><img src="~assets/image/good.png" /><p>供求金链</p></div>
                            <div><img src="~assets/image/box.png" /><p>金域金代</p></div>
                            <div><img src="~assets/image/domtree.png" /><p>天下金涂</p></div>
                      </div>
                  </div>
                  <div class="_homefourbottom" :style="{'background-image': `url(${require('~/assets/image/wheel.png')})`}">
                      <img src="~assets/image/Rectangle 5.png" />
                      <div class="_homefourbottom_div">
                            <h1 :style="{'background-image': `url(${require('~/assets/image/bg3.png')})`}">溶剂专区</h1>
                            <div class="_homefourbottom_div_text"><p>墙面漆 18L</p><p>了解详情<span></span></p></div>
                            <div @click="opengonqiu">进入专区</div>
                      </div>
                      
                  </div>
    </div>
    <div class="_homefive">
                  <p>行业新闻</p>
                  <p>INDUSTRY NEWS</p>
                  <div class="_homefive_news">
                      <span>查看更多</span>
                      <div v-for='(item,index) in news' :key='index' class="_homefive_news_detail">
                            <img :src="item.src" />
                            <p>金色摇篮携智慧系统亮相2019中国国际涂料展</p>
                            <p>2021-7-15 16:23:09</p>
                            <p>2017年7月12日，吉力公司提出了一种新的涂料</p>
                      </div>
                  </div>
    </div>
</div>
</template>

<script>
export default {
        name: "home",
        data() {
    return {
        imggg:[{
            id:'01',
            _title:'原材料货物',
            src:'hi',
          },
          {
            id:'02',
            _title:'原材料货物',
            src:'ok',

        },
        {
            id:'03',
            _title:'原材料货物',
            src:'hi',
          },
          {
            id:'04',
            _title:'原材料货物',
            src:'hi',
          },
          {
            id:'05',
            _title:'原材料货物',
            src:'hi',
          },
          {
            id:'06',
            _title:'原材料货物',
            src:'hi',
          },
          {
            id:'07',
            _title:'原材料货物',
            src:'hi',
          },],
          news:[{
            id:'01',
            _title:'原材料货物',
            src:'/_nuxt/src/assets/image/Bitmap.png',
          },
          {
            id:'02',
            _title:'原材料货物',
            src:'/_nuxt/src/assets/image/Bitmap1.png',

        },
        {
            id:'03',
            _title:'原材料货物',
            src:'/_nuxt/src/assets/image/Bitmap.png',
          },
          {
            id:'04',
            _title:'原材料货物',
            src:'/_nuxt/src/assets/image/Bitmap1.png',
          },
          {
            id:'05',
            _title:'原材料货物',
            src:'/_nuxt/src/assets/image/Bitmap.png',
          },
          {
            id:'06',
            _title:'原材料货物',
            src:'/_nuxt/src/assets/image/Bitmap1.png',
          }
          ]

    };
  },
  methods: {
          _open_homethree_detail(e){
              var p1=e.target.parentNode;
              var p2=p1.getElementsByTagName('div');
              var p3=e.target.parentNode.parentNode;
              var p4=p3.getElementsByClassName('_homethreelist');
              if(p2[0].style.display!='block'){
                    for(var i=0;i<p4.length;i++){
                      p4[i].getElementsByTagName('div')[0].style.setProperty('display','none','important');
                    }
                    p2[0].style.setProperty('display','block','important');
                    
              }else{
                    for(var i=0;i<p4.length;i++){
                      p4[i].getElementsByTagName('div')[0].style.setProperty('display','none','important');
                    }
              }
              
          },
          opengonqiu(){
            this.$router.push({path:'/productrequest'})

          }
  },
    }
</script>

<style scoped lang="less">
._hometop{
  width: 6.98rem;
  height: 2.8rem;
 
}
._hometop p{
  width:3.9rem;
	margin-left: 0.55rem;
	font-family: SourceHanSansCN-Bold;
	font-size: 0.24rem;
	color: #d4aa58;
}
._hometop p:nth-child(2){
	font-size: 0.30rem;
	color: #ffffff;
}
._hometop p:nth-child(3){
	font-size: 0.30rem;
	color: #ffffff;
}
._homesecond{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
  height: 8.43rem;
  background-color: white;
}
._homelist{
  width: 7.3rem;
  height: 8.23rem;
  background-color: #406efa;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
._homelist div{
  height: 1.18rem;
  width: 100%;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  
}
._homelist div img{
 margin-left: 0.7rem;
 margin-right: 0.36rem;
}
._homelist div div{
  flex-direction: column;
  align-items: flex-start;
}
._homelist div div p{
  height: 0.58rem;
  font-family: SourceHanSansCN-Regular;
	font-size: 0.3rem;
	color: #ffffff;
  text-align: end;
  
}
._homelist .h_big{
  margin-left: 0.54rem;
  margin-right: 0.20rem;
}
._homelist .h_middle{
  margin-right: 0.30rem;
}
.h_bot{
  justify-content: center;
}
._homethree{
  width: 7.5rem;
  background-color: #000324;
  display: flex;
  flex-direction: column;
  align-items: center;
}
._homethreelist p{
  width: 7.3rem;
  height: 0.78rem;
  background-color: #283e76;
  margin-bottom: 0.1rem;
  font-size: 0.2rem;
  line-height: 0.78rem
}
._homethreelist p span{
  color: white;
  margin-left: 0.3rem;
  pointer-events: none;
}
._homethreelist p span:nth-child(2){
  color: #b69746;
}
._homethreelist p span:nth-child(3){
  width:0.44rem;
  height: 0.11rem;
  position: relative;
  margin-left:4.8rem;
}
._homethreelist p span:nth-child(3)::before{
  content: " ";
   position: absolute;
  top:0.10rem;
  left: 0.11rem;
  border-left:0.15rem solid transparent ;
  border-right:0.15rem solid transparent ;
  border-top:0.15rem solid #283e76 ;
  z-index: 22;
}
._homethreelist p span:nth-child(3)::after{
  content: " ";
  position: absolute;
  top:0.11rem;
  left: 0.11rem;
  border-left:0.15rem solid transparent ;
  border-right:0.15rem solid transparent ;
  border-top:0.15rem solid #acb3b3 ;
}
._csicon{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 0.72rem;
  margin-bottom: 0.5rem;
  margin-top:0.8rem;
}
._csicon p{
  font-size: 0.3rem;
  color: #ffffff;
}
._homethreelist div{
  display: none;
  height: 2.3rem;
  width: 7.3rem;
  background-color:#283e76;
  color: #ffffff;
  margin-bottom: 0.1rem;
}
._homethree_bt{
  height: 0.6rem;
  width: 7.5rem;

}
._homefour{
  height: 9.9rem;
  width: 7.5rem;
}
._homefourtop{
  height: 4rem;
  width: 7.5rem;
  overflow: hidden;
}
._homefourtop p:nth-child(1){
  margin-top:1rem;
  width: 7.5rem;
  text-align: center;
  font-size: 0.4rem;
  color: #313131
}
._homefourtop p:nth-child(2){
  width: 7.5rem;
  text-align: center;
  font-size: 0.2rem;
  color: #7c7c7c
}
._homefourtop div{
  width: 7.5rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
}
._homefourtop div div{
  width: 1.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
._homefourtop div div img{
  width: 0.7rem;
  height: 0.7rem;
}
._homefourtop div div p{
  font-size: 0.3rem;
  color: #313131;
  margin-top:0.1rem;
}
._homefourtop div div:nth-child(2) p{
  color: #426bd0;
}
._homefourbottom{
  position: relative;
  height: 5.9rem;
  width: 7.5rem;
  background: no-repeat;
  background-size:7.5rem 5.9rem;
}
._homefourbottom img{
  position: absolute;
  left: 0;
  top: 0;
  height: 5.9rem;
  width: 7.5rem;
  z-index: -1;
}
._homefourbottom::before{
  content: " ";
   position: absolute;
  left: 2.55rem;
  top:-0.17rem;
  border-left:0.25rem solid transparent ;
  border-right:0.25rem solid transparent ;
  border-bottom:0.17rem solid #0e112d ;
}
._homefourbottom_div{
  padding-top:0.4rem;
  margin-left: 0.4rem;
  width: 6.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

._homefourbottom_div h1{
  height: 0.7rem;
  width: 100%;
  font-size: 0.25rem;
  color:white;
  background-size:100%;
  line-height: 0.7rem;
  padding-left: 0.4rem;
}
._homefourbottom_div div:nth-child(2){
  border:1px solid white;
  border-top:0;
  width: 100%;
  height: 3.4rem;
}
._homefourbottom_div div:nth-child(3){
  font-size: 0.25rem;
  width: 2.6rem;
  height: 0.65rem;
  background: #d4ab57;
  line-height: 0.65rem;
  text-align: center;
  color: white;
  margin-top:0.3rem;
  z-index:30;
}
._homefourbottom_div_text p:nth-child(1){
  height: 0.3rem;
  color:white;
  font-size: 0.3rem;
  margin-left: 0.4rem;
  margin-top: 0.4rem;
}
._homefourbottom_div_text p:nth-child(2){
  width: 1.95rem;
  height: 0.65rem;
  border:1px solid #d4aa58;
  line-height: 0.65rem;
  text-align: center;
  color:#d4aa58;
  font-size: 0.3rem;
  margin-left: 0.4rem;
  background: #0e112d;
  margin-top: 1.6rem;
}
._homefourbottom_div_text p:nth-child(2) span{
  position: relative;
  background-color:white;
}
._homefourbottom_div_text p:nth-child(2) span::before{
  content: " ";
  position: absolute;
  top:0.10rem;
  left: 0.11rem;
  border-top:0.11rem solid transparent ;
  border-bottom:0.125rem solid transparent ;
  border-left:0.1rem solid #d4aa58 ;
}
._homefourbottom_div_text p:nth-child(2) span::after{
  content: " ";
  position: absolute;
  top:0.11rem;
  left: 0.11rem;
  border-top:0.11rem solid transparent ;
  border-bottom:0.10rem solid transparent ;
  border-left:0.07rem solid  #0f1221 ;
   z-index:2;
}
._homefive{
  width: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
._homefive p:nth-child(1){
  font-weight: bold;
  width: 7.5rem;
  text-align: center;
  font-size: 0.3rem;
  color:#000000;
  padding-top:1rem;
}
._homefive p:nth-child(2){
  width: 7.5rem;
  text-align: center;
  font-size: 0.2rem;
  color:#333333;
  padding-top:0.1rem;
}
._homefive_news{
  width: 7.1rem;
  display: flex;
  flex-flow:row wrap;
}
._homefive_news span{
  display: block;
  width: 100%;
  font-size: 0.2rem;
  color:#333333;
  text-align: right;
}
._homefive_news_detail{
  width: 50%;
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
._homefive_news_detail img{
  width: 3.2rem;
  height: 2.2rem;
}
._homefive ._homefive_news_detail p{
  width: 3.2rem;
  font-size: 0.1rem;
  text-align: left;
}
._homefive ._homefive_news_detail p:nth-child(2){
  font-weight: bold;
  font-size: 0.2rem;
}
._homefive ._homefive_news_detail p:nth-child(4){
  font-size: 0.2rem;
}
._homefive ._homefive_news_detail p:nth-child(3){
  margin:0.1rem 0;
}

</style>