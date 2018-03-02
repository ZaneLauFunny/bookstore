<template>
  <div class="self">
    <header>
      <h3>个人中心</h3>
    </header>
    <main>
        <div></div>
        <div>
          <img src="">
          <p>{{userName}}</p>
        </div>
        <div class="main-count">
		  <p @click="perdata">设置个人资料 <span></span></p>
		  <p @click="csreceipt">收货地址管理<span></span></p>
        </div>
        <div class="main-count">
          <p>我的订单 <span></span></p>
          <p>我的评价 <span></span></p>
        </div>
        <div class="main-count">
          <p>商品收藏<span></span></p>
          <p>店铺收藏<span></span></p>
          <p>浏览记录<span></span></p>
      </div>
    </main>
    <button>退出登录</button>
    
	  <!-- <personaldata :displaydata="displaydata" @returnself="returnself"  @colsePerData="colsePerData"></personaldata>
	  <addressmanage :displayaddress="displayaddress" true="state" @returnaddress="returnaddress"  @colseAddress="colseAddress" address = "收货地址"></addressmanage>
    <Login
      head-title="登录/注册"
    /> -->
  </div>
</template>

<script>


export default {
  name: 'Me',
  components:{
       
  },
  data () {
    return {
        //个人资料显示状态
		displaydata:false,
       //地址管理显示状态
    displayaddress:false,
    userName:""
    }
  },
	methods:{
    
  },
  mounted(){
    
  }
}
</script>
<style>

</style>
