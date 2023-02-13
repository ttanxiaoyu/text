<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-nav-bar title="新闻" fixed />
    <van-pull-refresh :disabled="finished" v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
          <!-- 导入注册，并使用ArticleInfo组件 -->
          <ArticleInfo v-for="item in artlist" :key="item.id" :title="item.title"
          :author="item.aut_name" :cmtCount="item.comm_count" :time="item.pubdate"
          :cover="item.cover"
          ></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
  
</template>

<script>
//导入request.js
//import requset from '@/utils/request.js'

//按需导入API接口
import {getArticleListAPI} from '@/api/articleAPI.js'
//导入ArticleInfo组件
import ArticleInfo from '@/components/Article/ArticleInfo.vue'

getArticleListAPI()


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  //注册ArticleInfo组件
  components:{
    ArticleInfo
  },
  data(){
    return{
      //页码值
      page:1,
      //每页显示多少条数据
      limit:10,
      //文章的数组
      artlist:[],
      loading: true,
      finished: false,
      isLoading:false
    }
  },
  created(){
    this.initArticleList()
  },
  methods:{
    //封装获取文章列表数据
    async initArticleList (isRefresh){
      //发起get请求，获取文章列表数据
      const {data:res} =await getArticleListAPI(this.page,this.limit)
    
      if(isRefresh){
         this.artlist = [...res,...this.artlist]
         this.isLoading=false
      }else{
        this.artlist = [...this.artlist,...res]
        this.loading=false
      }

      // this.artlist = [...this.artlist,...res]
      // this.loading=false

      if(res.length === 0){
        this.finished = true
      }

    },
    onLoad(){
      //页面+1
      this.page++
      //重新请求接口获取数据
      this.initArticleList()
    },
    onRefresh(){
      //让页码+1
      this.page++
      //重新请求数据获取数据
      this.initArticleList(true)
    }
  }
}
</script>

<style lang='less' scoped>
.home-container{
  padding: 46px 0px 50px 0px;

  .van-nav-bar{
    background-color: #007bff;
  }
  /deep/.van-nav-bar__title{
    color: white;
  }
}
</style>
