<template>
    <div class="movie">
        <div class="header">
           {{title}}
        </div>

        <div class="con">
          <p>这里是{{title}}内容区域,修改内容请删掉我</p>
        </div>
    </div>
</template>

<script>
    export default {
      name:"Movie",
      data(){
        return{
          title:"电影",
        }
      }
    }
</script>

<style scoped="scoped">
    .home {
      width: 100%;
      height: 100%;
    }

    .header {
      width: 100%;
      height: 40px;
      background-color: #eb476d;
      text-align: center;
      position:fixed;
      top: 0;
      color: #fff;
      font-size: 16px;
      line-height: 40px;
    }

    .con {
        width: 100%;
        height: 100%;
        font-size: 20px;
        overflow: auto;
    }

    p {
      margin: 40% auto;
      text-align: center;
      font-size: 20px;
      font-weight: 700;
    }
</style>
