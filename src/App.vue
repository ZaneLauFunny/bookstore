<template>
    <div id="app">
        <main>
            <router-view/>
        </main>
        <footer>
            <nav>
                <router-link tag="div" :to="{name: 'Home'}" exact class="col-md-3 col-xs-3">
                    <i class="fa fa-home"></i>
                    <span>首页</span>
                </router-link>
                <router-link tag="div" :to="{name: 'Category'}" class="col-md-3 col-xs-3">
                    <i class="fa fa-sitemap"></i>
                    <span>分类</span>
                </router-link>
                <router-link tag="div" :to="{name: 'Cart'}" class="col-md-3 col-xs-3">
                    <i class="fa fa-shopping-cart"></i>
                    <span>购物车</span>
                </router-link>
                <router-link tag="div" :to="{name: 'Me'}" class="col-md-3 col-xs-3">
                    <i class="fa fa-user"></i>
                    <span>我</span>
                </router-link>
            </nav>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    $theme-color: #000000;
    *,*::before,*::after {
        box-sizing: border-box;
    }
    li,h3,img,ul,li,input,h2,p,fieldset{
        padding: 0;
        margin: 0;
    }
    html,body {
        height: 100%;
        font: 24px "Microsoft YaHei",sans-serif,Arial;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
        
    }
    a:focus{
        text-decoration: none
        }
    #app {
        height: 100%;
        & > main {
            $header-height: 40px;
            height: calc(100% - 44px);
            overflow-y:auto;
            overflow-x: hidden; 
            
            & > div {
                height: 100%;
                padding-top: $header-height;
                & > header {
                    width: 100%;
                    height: 40px;
                    background-color: $theme-color;
                    text-align: center;
                    color: #ffffff;
                    position: absolute;
                    left: 0; 
                    top: 0;
                    z-index: 10;
                }
                .content {
                    height: 100%;
                    overflow-x: hidden;
                    overflow-y: auto;
                }
            }
        }
        & > footer {
            height: 44px;
            background-color:#ffffff;
            color: rgb(68, 65, 65);
            nav {
                    display: flex;
                    div{
                        text-align: center;
                        i{
                        display: block;
                        height: 13px;
                        }
                        span{
                            font-size: 18px;
                        }
                    }
                    & > .router-link-exact-active{
                    color: rgba(51, 153, 51,0.9);
                    }
                    
            
        }
        
    }
    }
</style>