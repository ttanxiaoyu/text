//文章相关的API都封装到这里

import request from '@/utils/request.js'

//向外按需到处一个API函数
export const getArticleListAPI = function (_page,_limit) {
  return request.get('/articles',{
    //请求参数
    params:{
      _page,
      _limit
    }
  })
}