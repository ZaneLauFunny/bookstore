<template>
    <div class="category">
        <header>分类</header>
        <input :placeholder="placeholder" type="search" @keyup="searchBook(val)" v-model="val">
        <div v-if="noMatching"><p>没有搜索到您需要的书籍</p></div>
        <div v-else>
            <ul class="cate-content">
                <li v-for="(booklist,index) in categoryList" :key="booklist.id">
                    <router-link :to="{name:'DetailsPage',params:{value:categy[index]}}" tag="a">
                    <img :src="booklist.img">
                    <div class="cate">
                        <p class="name">{{booklist.name}}</p>
                        <p class="author">{{booklist.author}}</p>
                        <p class="price">￥ {{booklist.price}}</p>
                    </div>
                    </router-link>
                </li>
                <span><p v-if="refresh" @click="loadnum">加载更多<i class="fa fa-angle-double-up"></i></p></span>
            </ul>
        </div>
        
    </div>
    
</template>

<script>
    export default {
        name: 'Category',
        data() {
            return {
                placeholder:"请输入您想查找的图书名称进行搜索",
                bookList:[],
                matching:null,
                val:'',
                categy:[],
                num:4,
                refresh:true
            }
        },
        
        methods:{
            categoryshow(){
                axios.get("../../../static/data.json").then(
                    (resp)=>{
                        this.bookList=resp.data;
                    }
                ).catch(function(){
                    console.error("错误")
                })
            },
            getcategory(){
                axios.get("../../../static/data.json").then(
                    (res)=>{
                        this.categy=res.data
                    }
                ).catch(function(){
                    console.error("错误")
                })
            },
            searchBook(val) {
           // 如果输入的值为空（去处字符串两端空格）
           if(val.trim() === "") {
               this.matching = this.bookList;
           }
           else {
                    // 将满足条件的对象数组项返回为一个新的对象数组
                    this.matching = this.bookList.filter((item) => {
                   // 将搜索框输入的值作为正则搜索条件
                   const matchReg = new RegExp(val, "ig");
                   // 匹配书名或作者名
                   
                   return matchReg.test(item.name) || matchReg.test(item.author);
               });
           }
        },
            loadnum(){
                    this.num += 4;
                }
        },
        computed:{
            categoryList(){
                if(!this.matching){
                    this.refresh=true;
                    return this.bookList.slice(0,this.num)
                }
                else if(this.matching.length){
                    this.refresh=false;
                    return this.matching
                }
                
            },
            noMatching(){
                if(this.categoryList){
                    return false
                }
                else{
                    return true
                }
            },
            
        },
        created(){
            this.categoryshow();
        },
        mounted(){
            this.getcategory();
        }
    }
</script>

<style lang="scss" scoped>
.category{
    padding:0 8%;
    text-align: center;
    input{
        width: 100%;
        margin-top: 10px;
        border-radius: 10px;
        height: 40px;
        font-size: 15px;
        outline: none;
        padding: 10px;
    }
    .cate-content{
        margin-top: 20px;
        li{
            border-bottom:1px solid #ccc;
            overflow: hidden;
            margin:10px 0;
            padding:8px 0;
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
                        font-size: 14px;
                        color:blue;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    .author{
                        font-size: 14px;
                        color:#777;
                    }
                    .price{
                        font-size: 18px;
                        color:orange;
                    }
            }
        }
        &>span{
            font-size: 20px;
            i{
                margin-left: 10px;
            }
        }
        
    }
}
</style>