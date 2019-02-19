var Mock = require('mockjs')
var data = Mock.mock({
    'list|3': [{
        // relue为大于1数字，值为 数组时： 重复
        'id|+1': [2,3, '@paragraph']
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))

var Random = Mock.Random
console.log('直接输出，生成的随机数据：', Random.tld())
