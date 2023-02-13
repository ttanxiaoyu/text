<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{title}}</span>
          <!-- 单张图片 -->
          <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1">
        </div>

        <div class="thumb-box" v-if="cover.type === 3">
          <img :src="item" alt="" class="thumb" v-for="(item,i) in cover.images" :key="i">
          
        </div>
      </template>
      <template #label>
        <div class="label-box">
          <span>作者{{author}}&nbsp;&nbsp;评论{{cmtCount}}&nbsp;&nbsp;发布日期{{time}}</span>
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name:'ArticleInfo',
  //自定义属性
  props:{
    title: {
      type:String,
      default:''
    },
    author:{
      type:String,
      default:''
    },
    cmtCount:{
      type:[Number,String],
      default:0
    },
    time:{
      type:String,
      default:''
    },
    cover:{
      type:Object,
      //通过default函数，返回cover属性的默认值
      default:function(){
        return{type:0}
      }
    }
  }
}
</script>

<style lang='less' scoped>
.label-box{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.thumb{
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box{
  display: flex;
  justify-content: space-between;
}

</style>