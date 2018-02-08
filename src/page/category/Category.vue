<template>
    <div class="category">
        <header>分类</header>
        <input :placeholder="placeholder">
        <div v-if="searchState">
            <p>没有您查找的图书</p>
        </div>
        <div v-else>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Category',
        data() {
            return {
                placeholder:"请输入您想查找的图书名称进行搜索",
                searchState:false
            }
        },
        
    }
</script>

<style lang="scss" scoped>
.category{
    text-align: center;
    input{
        width: 90%;
        margin-top: 10px;
        border-radius: 10px;
        height: 40px;
        font-size: 15px;
        outline: none;
        padding: 10px;
    }
}
</style>