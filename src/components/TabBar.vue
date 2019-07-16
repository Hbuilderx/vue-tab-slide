<template>
  <div class="tab-bar" >


      <!--
       切换img图标的思路，以home为例
          1：使用v-bind:src动态绑定img的src
          2：使用了三元表达式，如果当前路由的path中包含了/home，src为选中（selected)的图标，否则为正常（normal)的图标，

      切换span样式的思路，以home为例
          1：使用v-bind:class动态绑定span的class
          2：使用了对象绑定方式，如果当前路由的path中包含了/home，即{active:true}，增加active类
       -->

      <span class="item" @click="switchTo('/home')">
        <img :src="$route.path.includes('/home') ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="">
        <span :class="{active:$route.path.includes('/home')}">首页</span>
      </span>
      <span class="item" @click="switchTo('/movie')">
        <img :src="$route.path.includes('/movie') ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="">
        <span :class="{active:$route.path.includes('/movie')}">电影</span>
      </span>
      <span class="item" @click="switchTo('/explore')">
        <img :src="$route.path.includes('/explore') ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="">
        <span :class="{active:$route.path.includes('/explore')}">发现</span>
      </span>
      <span class="item" @click="switchTo('/show')">
        <img :src="$route.path.includes('/show') ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="">
        <span :class="{active:$route.path.includes('/show')}">演出</span>
      </span>
      <span class="item" @click="switchTo('/me')">
        <img :src="$route.path.includes('/me') ? tabBarImgArr[4].selected : tabBarImgArr[4].normal" alt="">
        <span :class="{active:$route.path.includes('/me')}">我的</span>
      </span>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      msg: '这是底部导航栏',

      //1.定义底部按钮的图标数组，正常颜色和和选中颜色的
      tabBarImgArr:[
        {
          normal:require('./../../static/img/home.png'),
          selected:require('./../../static/img/home-selected.png'),
        },
        {
          normal:require('./../../static/img/movie.png'),
          selected:require('./../../static/img/movie-selected.png'),
        },
        {
          normal:require('./../../static/img/explore.png'),
          selected:require('./../../static/img/explore-selected.png'),
        },
        {
          normal:require('./../../static/img/show.png'),
          selected:require('./../../static/img/show-selected.png'),
        },
        {
          normal:require('./../../static/img/me.png'),
          selected:require('./../../static/img/me-selected.png'),
        },
      ]
    }
  },

  methods:{

    //2.切换路由的函数，接收一个参数，该参数为要切换的路径
    switchTo(path){
      this.$router.replace(path);
    }
  }
}
</script>


<style scoped>
  .tab-bar {
    height: 56px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
  }

  .tab-bar .item {
    display: flex;
    font-size: 12px;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #000;
  }

  /* span标签的选active中样式 */
  .tab-bar .item span.active {
    color: #eb476d;
  }

  .tab-bar .item img {
    width: 28px;
  }

/* 发现图标有点过大了，这里特别设置小一点 */
  .tab-bar .item img.exp {
    width: 25px;
  }
</style>
