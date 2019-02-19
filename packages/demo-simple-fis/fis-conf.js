// fis.match('::packager', {
//   spriter: fis.plugin('csssprites')
// });

// fis.match('*', {
//   useHash: true
// });
// 
// fis.match('*.js', {
//  optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });



/* 发布部署配置 :
  1) -w为开启实时刷新
  2) 为外部路径时，不会重复嵌套情况
  3) 使用
  fis3 release prod -r ./fe-workflow/dist[指定需要处理的根目录] -d ../../../com_317hu_release[相对配置文件的路径]
  */
  
fis.media("prod")
.match('*.{js,css}', {  //清除其他配置，只剩下如下配置
  useHash: true
}).match('dist/img/*.{png,jpg}', {  //清除其他配置，只剩下如下配置
  useHash: true
})
.match('*.js', {    //资源压缩
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
})
.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
})
.match('dist/img/*.{png,jpg}', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

fis.config.set('name', 'demo-simple-fis');
fis.config.set('version', '1.0.2');

fis.match('dist/(**.*)', {
  release: '/${name}/${version}/$1'
});

/*
 roadmap.path 功能，用于分类文件、调整发布结构、指定文件的各种属性等功能实现?? 没有效果了
 */
// fis.config.set('roadmap.path', [
//   {
//       reg : /^\/dist\/(.*)$/,
//       //使用${xxx}引用fis.config的其他配置项
//       release : '/public/${name}/${version}/$1'
//   }
// ]);