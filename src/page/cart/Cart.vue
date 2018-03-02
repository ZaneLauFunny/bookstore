<template>
    <div class="cart">
        <header>购物车</header>
        <div class="cont">
            <div v-if="empty"><p>亲,购物车什么都没有哦！请赶快购物吧</p></div>
            <div class="content">
           <span><a>编辑</a></span>
           <div class="cartContent">
               <ul>
                   <li v-for="(item,index) in cart" :key="item.id">
                       <img :src="item.img" :alt="item.name">
                    <div class="cate">
                        <p class="name">{{item.name}}</p>
                        <p class="author">{{item.author}}</p>
                        <p class="price">{{item.price}}</p>
                    </div>
                   </li>
               </ul>
               <button>前往支付</button>
           </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Cart',
        data() {
            return {
                empty:false,
                cart: JSON.parse(localStorage.getItem("bookshow"))
            }
        }
    }
</script>

<style lang="scss" scoped>
.cart{
    background-color: #f5f5f5;
.content{
    
    &>span{
            margin:8px 5% 8px 0;
            text-align: right;
            display: block;
    }
    .cartContent{
        margin: 0 auto;
        width: 90%;
        z-index: 9;
        ul{
            background-color: #ffffff;
            li{
                height: 120px;
                border-bottom: 1px solid gray;
                padding: 10px 5px;
                img{
                width:82px;
                height: 95px;
                float: left;
                }
            .cate{
                margin-top: 10px;
                text-align: left;
                margin-left: 15px;
                float: left;
                width: 250px;
                    .name{
                        font-size: 18px;
                        color:blue;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    .author{
                        font-size: 18px;
                        color:#777;
                    }
                    .price{
                        font-size: 24px;
                        color:red;
                    }
            }
            }
        }
        button{
            width: 100%;
            background-color: rgb(38, 201, 60);
            color: #ffffff;
            height: 50px;
            border-radius:10px; 
            margin-top:20px; 
        }
    }
    
}
}
</style>