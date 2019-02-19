var request = require('request').defaults({
    timeout: 3000
});
module.exports = function(){
    this.re = 'foo.js 加载完成，并被 exports 导出了';// 加载模块是同步的.所以只有加载完成才能执行后面的操作
    this.req = function(url){
        request(url, (error, status, res)=>{// 但发送请求是异步的，而不能被直接 CommonJS 规范应用
            this.re = res;
            console.log(this.re);
        });
    };
};
