<template>
    <div class="detailsPage">
        <div class="title">
            <h2>图书详情 </h2>
            <router-link :to="{name:'Home'}" tag="a"><i class="glyphicon glyphicon-chevron-left"></i></router-link>
        </div>
        <!-- 信息 -->
        <div class="author">
            <div class="img">
                <img :src="newdetail.img">
            </div>
            <div class="bookdetails">
                <p>
                    <span>作者</span>
                    <span>{{newdetail.author}}</span>
                </p>
                <p>
                    <span>页数</span>
                    <span>{{newdetail.page}}</span>
                </p>
                <p>
                    <span>书号</span>
                    <span>{{newdetail.ISBN}}</span>
                </p>
                <p>
                    <span>出版日期</span>
                    <span>{{newdetail.day}}</span>
                </p>
                <p>
                    <span>售价</span>
                    <span class="price">￥{{newdetail.price}}</span>
                </p>
            </div>
        </div>
        <!-- 购买 -->
        <div class="describe">
            <p>{{newdetail.name}}</p>
            <div class="btn">
                <span @click="addShopCar">加入购物车</span>
                <span>立即购买</span>
            </div>
        </div>
        <!-- 内容摘要 -->
        <div class="bottom">
            <fieldset>
                <legend>内容概要</legend>
                <span>{{newdetail.describe}}
                </span>
            </fieldset>
            <fieldset>
                <legend>内容概要</legend>
                <span>{{newdetail.describe_2}}
                </span>
            </fieldset>
            <fieldset>
                <legend>作者简介</legend>
                <span>{{newdetail.describe_2}}</span>
            </fieldset>
        </div>
    </div>
</template>

<script>
    export default {
        name:'DetailsPage',
        data(){
            return{
                newdetail:{},
                getObj:{}
            }
        },
        methods:{
            showDetail(){
            this.newdetail = this.$route.params.value;
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
                img: this.$route.params.value.img,
                name: this.$route.params.value.name,
                author: this.$route.params.value.author,
                price: this.$route.params.value.price
            };
            // 判断本地缓存是否已经有值;
            if (!localStorage.getItem("bookshow")) {
                this.add("bookshow", this.getObj);
            } else {
                var name = this.getObj.name;
                var getdescrube = JSON.parse(localStorage.getItem("bookshow")),
                getdescrubeLength = getdescrube.length;
                for (var i = 0; i < getdescrubeLength; i++) {
                if (name === getdescrube[i].name) {
                    alert("亲，已经在购物车，请勿重复添加哦");
                    return
                } else {
                    this.add("bookshow", this.getObj);
                }
                }
            }
            setTimeout(function() {
                this.showMask = !this.showMask;
            }, 2000);
            }
            }
        ,
        mounted(){
            this.showDetail()
        }
    }
</script>

<style lang="scss" scoped>
.detailsPage{
    padding: 0!important;
    width: 100%;
    height: auto;
    background-color: #eeeeee;
    z-index: 30px;
    .title{
        background-color: #000000;
        width: 100%;
        height: 50px;
        i{
            position: absolute;
            z-index: 20;
            top:15px;
            left: 15px;
            color: #ffffff;
        }
        h2{
            position: absolute;
            left: 144px;
            top: 9px;
            color: #fff;
        }
    }
    .author{
        width: 100%;
        height: auto;
        padding: 5% 5% 0;
        display: flex;
        align-items:top;
        background-color: #ffffff;
        div.img{
            width:35%;
            height: 134px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .bookdetails{
            text-align: left;
            width: 70%;
          p{
              padding: 0 0 4% 8%;
              font-size: 0.7em;
              color: #a19d9d;
              span:nth-child(1){
                  display:inline-block;
                  width: 70px;
                text-align: left;
              }
              span:last-child{
                white-space: nowrap;
                font-size: 0.5rem;
                margin-left: 30px;
                &.price{
                    color: #f80;
                }
              }
          }
        }
    }
    .describe{
        text-align: left;
        font-size: 16px;
        font-weight: 700;
        font-style: normal;
        text-decoration: none;
        font-family: 微软雅黑;
        color: rgb(0, 0, 0);
        width: 100%;
        height: auto;
        padding:15px 5% 3%;
        background-color: #ffffff;
        p{
            margin-bottom: 15px;
        }
        .btn{
            padding: 0;
            width: 100%;
            text-align: left;
            box-shadow: none;
            span{
                display: inline-block;
                width: 45%;
                height: 50px;
                font-size: 1.3em;
                outline: none;
                border: 1px solid rgba(0,0,0,0.6);
                background-color: #ffffff;
                border-radius: 8px;
                cursor: pointer;
                text-align: center;
                line-height: 50px;
                &:nth-child(1){
                    margin-right: 7%;
                    &:hover{
                        color: rgba(0,0,0,0.3);
                    }
                }
                &:last-child{
                    background-color: rgb(28, 180, 61);
                    color: #ffffff;
                    border: none;
                    &:hover{
                        background-color: rgb(36, 219, 76);
                    }
                }
            }
        }
    }
    .bottom{
            background: #fff;
            margin-top: 10px;
            fieldset{
                height: 344px;
                margin: 0 auto;
                text-align: none;
                width: 90%;
                overflow: hidden;
                border: 1px solid #797979;
                padding: 14px;
                text-align: left;
                margin-top: 20px;
                legend{
                    text-align: left;
                    margin-left: 25px;
                    width: auto;
                    border: none;
                }
                span{
                    word-break: break-all;
                    
                }
            }
            
        }
}

</style>

