
腾讯互动娱乐 2016年度发布会

============================================================

[分享&bull;致无用的时光 - feelings](http://up.qq.com/act/a20160318feelings/index.html)

[TGideas 腾讯游戏官方设计 团队博客](http://tgideas.qq.com/web201312/works.shtml)

[本机测试目录]  `http://10.96.228.228/feelings/index.html`

## [《致另一个无用的我 2.0》](http://up.qq.com/act/a20160318feelings/index.html)

页面结构，根目录 `http://up.qq.com/act/a20160318feelings/`

资源目录，./assets `http://game.gtimg.cn/images/up/act/a20160318feelings/`

### 1. 一镜到底的动画元素
* canvas 画布兼容 微信 android
* canvas meta view
    <meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=no"/>
    |
    对比
    |
    ```Javascript
    if (/Android (\d+\.\d+)/.test(ua)){
        var version = parseFloat(RegExp.$1);
        // andriod 2.3
        if(version>2.3){
            document.write('<meta name="viewport" content="width=640, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
            // andriod 2.3以上
        }else{
            document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
        }
        // 其他系统
    } else {
        document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
    }
    ```

### 2. 以 TexturePacker 创建精灵图片，或在 AnimateCC 开发精灵动画


### 3. createjs 的应用
* 界面控制
    - 横竖屏
* 声音控制


preloadjs-0.6.1_quanchenChange.min.js
    preloadjs_quanchenChange-修改的位置示意.png
```
    a._loadManifest= function(a){
        ...
        b.loadManifest(a.images) // 改成 a.images[0]= this._item.path+ a.images[0],
                                        b.loadManifest(a.images);

        ...
    }
```

是createjs的touch开关和我在canvas上自己加的touch事件冲突了，如果出了这样的bug只要关掉 createjs.Touch.enable(stage);或者不直接在canvas上侦听touch - touchstart、touchmove、touchend
```
Ignored attempt to cancel a touchstart event with cancelable=false, for example because scrolling is in progress and cannot be interrupted.
```
cjs/com/Core.js
    cjs.Touch.enable(stage);//锁屏,限制上下左右拖动;
