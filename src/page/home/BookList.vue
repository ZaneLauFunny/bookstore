<template>
  <div class="bookList">
      <div>
          <h3>新书上架</h3>
          <ul>
              <li v-for="booklist in newBookList" :key="booklist.id">
                  <img :src="booklist.img">
                  <p class="name">{{booklist.name}}</p>
                  <p class="price">￥ {{booklist.price}}</p>
              </li>
          </ul>
      </div>
      <div>
          <h3>编辑推荐</h3>
          <ul>
              <li v-for="booklist in editorBookList" :key="booklist.id">
                  <img :src="booklist.img">
                  <p class="name">{{booklist.name}}</p>
                  <p class="price">￥ {{booklist.price}}</p>
              </li>
          </ul>
      </div>
      <div>
          <h3>热门新书</h3>
          <ul>
              <li v-for="booklist in hotBookList" :key="booklist.id">
                  <img :src="booklist.img">
                  <p class="name">{{booklist.name}}</p>
                  <p class="price">￥ {{booklist.price}}</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
    export default{
        name:"BookList",
        props:["newBookList","editorBookList","hotBookList"],
        data(){
            return{};
        }
    };
</script>

<style lang="scss" scoped>
.bookList{
    padding: 10px;
    h3{
        font-weight: bold;
        margin-left: 25px;
    }
    ul{
        margin-top: 5px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        li{
            
            img{
                width: 160px;
                height: 210px;
            }
            p{
                font-size: 14px;
            }
            .price{
                color: orangered;
            }
        }
    }
}
</style>
