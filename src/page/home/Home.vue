<template>
    <div class="main">
        <header>首页</header>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../assets/1.png"></div>
                <div class="swiper-slide"><img src="../../assets/2.png"></div>
                <div class="swiper-slide"><img src="../../assets/3.png"></div>
            </div>

            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <div class="banner">
                <i class="fa fa-bell-o"></i>
                <div>
                <span>{{advertisement}}</span>
                </div>
        </div>
        <BookList 
        :newBookList="newBookList"
        :editorBookList="editorBookList" 
        :hotBookList="hotBookList"
        @detail="showDetail"
        />
        <transition name="fade">
        <describe
        :bookshow = bookDetail
        @close="closeDetail"
        v-if="show"
        />
        </transition>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import Swiper from 'swiper'
    import BookList from "./BookList.vue"
    import Describe from "./Describe.vue"
    import DetailsPage from "./DetailsPage.vue"
    export default {
        name: 'Home',
        components:{
            BookList,
            Describe
        },
        data() {
            return {
                advertisement:'双12全场图书低至1折，更有隐藏神秘惊喜',
                newBookList:[],
                editorBookList:[],
                hotBookList:[],
                index: "",
                bookDetail:{},
                show:false
            }
        },
        methods:{
            runSwiper() {
                var swiper = new Swiper('.swiper-container', {
                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            },
            showBookList() {
            // 使用axios进行数据请求
                axios.get('../../../static/HomeData.json')
                .then( (res) => {
                    // 如果请求成功，将bookList空数组替换为请求到的数组
                    this.newBookList = res.data.new;
                    this.editorBookList = res.data.editor;
                    this.hotBookList = res.data.hot;
                })
                .catch(function(){
                    console.error('数据请求错误');
                });
            },
            showDetail(idx, y) {
                this.show = true;
                this.index = idx;
                axios.get('../../../static/HomeData.json')
                .then( (res) => {
                    // console.log(res.data)
                    if(y=="newBookList"){
                    this.bookDetail = res.data.new[idx]; 
                    }
                    else if(y=="editorBookList"){
                    this.bookDetail = res.data.editor[idx]; 
                    }
                    else{
                    this.bookDetail = res.data.hot[idx]; 
                    }
                })
                .catch(function() {
                    console.error("数据请求错误");
                }) 
            },
            closeDetail(){
                this.show=false
            }
        },
        mounted(){
            this.runSwiper(),
            this.showBookList()
        }
    };
</script>
    
<style lang="scss" scoped>
    .fade-enter-active,.fade-leave-active {
            transition: opacity 0.6s;
        }
        .fade-enter,.fade-leave-to {
            opacity: 0;
        }
    .swiper-container {
        width: 100%;
        height: 174px;
            .swiper-slide {
            height: 100%;
            text-align: center;
            font-size: 18px;
            background: #fff;

            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
                &>img{
                width: 100%;
                height: 100%;
                }
        }
    }
    .banner{
        height: 40px;
        border-bottom: 1px solid #eeeeee; 
        padding: 0 10px;
        text-align: center;               
                i{
                    color: orange;
                    position: relative;
                    top: -3px;
                }
                div{
                    overflow: hidden;
                    display: inline-block;
                    width: 70%;
                    span{
                        position: relative;
                        font-size: 18px;
                        color: rgb(26, 24, 24);
                        white-space: nowrap;
                        
                        right: -100%;
                        animation: late 6s linear infinite;
                    }
                    @keyframes late {
                    0%{
                        right: -100%;
                    }
                    100%{
                        right: 100%;
                    }
                }
                }
            
    }
   
    
    
</style>