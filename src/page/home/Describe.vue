<template>
    <div class="describebox">
        <p class="closebox">
            <span class="close" @click="$emit('close')">&times;</span>
        </p>
        <div class="row">
            <div class="col-xs-5 imgbox">
                <img :src="bookshow.img">
            </div>
            <div class="col-xs-7 msg">
                <div>
                    <span class="left">作者</span>
                    <span class="right">{{bookshow.author}}</span>
                </div>
                <div>
                    <span class="left">页数</span>
                    <span class="right">{{bookshow.page}}</span>
                </div>
                <div>
                    <span class="left">书号</span>
                    <span class="right">{{bookshow.ISBN}}</span>
                </div>
                <div>
                    <span class="left">出版日期</span>
                    <span class="right day">{{bookshow.day}}</span>
                </div>
                <div class="detail">
                    <router-link :to="{name: 'DetailsPage',params:{value:detail}}" tag="span">详情&nbsp;></router-link>
                </div>
            </div>
            <div class="col-xs-12 bookName">
                <span>{{bookshow.name}}</span>
            </div>
            <div class="col-xs-12 textone">
                <p class="text">
                    <span>
                        {{bookshow.describe}}
                    </span>
                </p>
            </div>
             <div class="col-xs-12 des2">
                <p class="text">
                    <span>
                       {{bookshow.describe_2}}
                    </span>
                </p>
            </div>
        </div>
       <div class="price">
            <span>￥{{bookshow.price}}</span>
            <span>1本</span>
            <span>&gt;</span>
        </div>
        <div class="button">
            <span @click="addShopCar">加入购物车</span>
            <span class="active">立即购买</span>
        </div>
        <div v-if="showMask" class="mask">
            <div>{{buy}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Describe",
        props:["bookshow"],
        data() {
            return {
                showMask:false,
                detail:{},
                getObj:{},
                buy:"已经成功添加到购物车"
            }
        },
        methods:{
            setDetail(){
            this.detail=this.$props.bookshow;
            },
            add(key, infos) {
            var Data = null;
            if (localStorage[key]) {
                Data = JSON.parse(localStorage[key]);
            } else {
                Data = [];
            }
            Data.push(infos);
            localStorage[key] = JSON.stringify(Data);
            },
            addShopCar() {
            
            this.showMask = !this.showMask;
            // 存放数据;
            this.getObj = {
                img: this.$props.bookshow.img,
                name: this.$props.bookshow.name,
                author: this.$props.bookshow.author,
                price: this.$props.bookshow.price
            };
            // 判断本地缓存是否已经有值;
            if (!localStorage.getItem("bookshow")) {
                this.add("bookshow", this.getObj);
            } else {
                var name = this.getObj.name;
                var getdescrube = JSON.parse(localStorage.getItem("bookshow"));
                
                for(var i = 0; i < getdescrube.length; i++) {
                if (name === getdescrube[i].name) {
                    setTimeout(function() {
                    this.buy = "亲，已经在购物车，请勿重复添加哦";
                    return;
                    });
                } else {
                    this.add("bookshow", this.getObj);
                }
                }
            }
            setTimeout(function() {
                this.showMask = !this.showMask;
            }, 2000);
            }
            },
        mounted(){
        setTimeout(()=>{
            this.setDetail();
        },500)
        
        }
    }
</script>

<style lang="scss" scoped>
.describebox {
    position: fixed;
    left: 10px;
    top: 9%;
    width: 95%;
    height: 90%;
    z-index: 30;
    border: 1px solid #000000;
    background-color: #ffffff;
    .closebox {
      width: 100%;
      height: 40px;
      margin-bottom: 10px;
      border-bottom: 1px solid #dddddd;
      .close {
        font-size: 23px;
        margin: 8px 10px 0 0;
      }
    }
    .row {
      width: 100%;
      margin: 0;
      .imgbox {
        padding: 0;
        img {
          width: 106px;
          height: 134px;
        }
      }
      .msg {
        text-align: left;
        padding: 0;
        div {
          height: 16px;
          margin: 0 0 8px 0;
          .left {
            white-space: nowrap;
            font-size: 12px;
            font-weight: 400;
            font-style: normal;
            text-decoration: none;
            font-family: 微软雅黑;
            color: rgb(134, 134, 134);
            margin-right: 10px;
          }
          .right {
            white-space: nowrap;
            font-size: 12px;
            font-weight: 400;
            font-style: normal;
            text-decoration: none;
            font-family: 微软雅黑;
            color: rgb(27, 27, 27);
            margin-left: 29px;
            &.day {
              margin-left: 5px;
            }
          }
        }
        .detail {
          white-space: nowrap;
          font-size: 14px;
          font-weight: 400;
          font-style: normal;
          text-decoration: none;
          font-family: 微软雅黑;
          color: rgb(134, 134, 134);
          margin: 20px 0 0 0;
          span {
            margin-left: 75%;
          }
        }
      }
      .bookName {
        margin-top: 20px;
        white-space: nowrap;
        text-align: left;
        font-size: 16px;
        font-weight: 700;
        font-style: normal;
        text-decoration: none;
        font-family: 微软雅黑;
        color: rgb(0, 0, 0);
      }
      .textone {
        margin-top: 15px;
      }
      .des2{
          margin-top: 20px;
      }
      .text {
        margin: 0;
        padding: 0px;
        width: 100%;
        transform: scale(1);
        transform-origin: left top 0px;
        text-overflow: clip;
        white-space: normal;
        text-align: left;
        text-decoration: none;
        user-select: text;
        font-size: 14px;
        font-weight: 400;
        font-style: normal;
        font-family: 微软雅黑;
        color: rgb(121, 121, 121);
      }
    }
     .price{
         margin-top: 70px;
          border:1px solid #a19d9d;
          width: 100%;
          height: 50px;
          border-top: 1px solid #a19d9d;
          border-bottom: 1px solid #a19d9d;
          line-height: 50px;
          position: relative;
          span{  
              &:nth-child(1){
                  display: inline-block;
                  width: 45%;
                  padding-left: 5%;
                  border-right: 1px solid #a19d9d;
              }
              &:nth-child(2){
                  display: inline-block;
                  width: 45%;
                  text-align: center;
              }
              &:nth-child(3){
                  width: 10%;
                  font: normal 1.3em Consolas,Monaco;
              }
          }
      }
      .button{
          width: 322px;
          height: 55px;
          background-color: rgba(255, 255, 255, 0);
          border-radius: 0px;
          border-width: 1px;
          border-color: rgb(102, 102, 102);
          border-style: solid;
          box-sizing: border-box;
          font-size: 16px;
          font-weight: 400;
          font-style: normal;
          text-decoration: none;
          font-family: 微软雅黑;
          color: rgb(0, 0, 0);
          letter-spacing: -0.133333px;
          margin: 5% auto;
          span{
              display: inline-block;
              height: 100%;
              width: 50%;
              text-align: center;
              line-height: 50px;
              margin-right: -3px;
              &.active{
                  background-color: rgb(51, 153, 51);
                  color: #ffffff;
              }
          }
      }
      .mask{
          position: absolute;
            top: 50%;
            left: 66px;
            background: #ffffff;
            color: red;
      }
  }
</style>