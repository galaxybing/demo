
Main.EVENT_PLAY_NEXT_PAGE='event_play_next_page';//通知现在是点击播放帧还是跳转文件;
Main.EVENT_GET_TO_ADD_MC='event_get_to_add_mc';//发送容器和需要的mc对象;
Main.EVENT_GET_MC_OBJ='event_get_mc_obj';//发送mc本身过来,mc所属动画层级较深时使用;

function Main()
{
    this.Core_constructor();//集成父类内容;

    Core.FPS=30;//动画播放帧频;
    Core.WIDTH=800;//场景宽度;
    Core.HEIGHT=960;//场景高度;
    Core.ISCHACE=false;//是否对图片做缓存;
    Core.PRELOADNUM=1;//首次加载的文件个数,一般作为主loading使用;
    Core.PRELOADNUM2=2;//二次加载文件个数,一般:公用素材[小loading,音乐开关,点击按钮,过场动画],第一个场景;
    Core.OFFICIALPATH = './assets/';//文件分离路径;
    Config.isTest=false;
    var target=this;//存储自身对象;
    this.init('canvasStage');//初始化createjs引擎,参数:canvas id;
    //新建容器;
    //容器实例名,深度,自适应类型,坐标偏移量;
    this.addContainer('content',0,{type:'showAll',pos:{type:'showMain',hType:'middle',x:0,y:0}});
    this.addContainer('controlContent',1,{type:'showAll',pos:{type:'showMain',hType:'middle',x:0,y:0}});
    this.addContainer('clickContent',2,{type:'showAll',pos:{type:'showMain',hType:'top',x:0,y:0}});
    this.addContainer('soundContent',3,{type:'topRight',pos:{x:30,y:20,width:35,height:62}});
    this.addContainer('loadingContent',4,{type:'showAll',pos:{type:'showMain',hType:'middle',x:0,y:0}});
    this.addContainer('preLoadingContent',5,{type:'showAll',pos:{type:'showMain',hType:'middle',x:0,y:0}});
    this.addContainer('shareContent',6,{type:'topRight',pos:{x:0,y:0,width:800,height:960}});
    this.addContainer('fpsContent',7,{type:'topLeft',pos:{x:10,y:10,width:100,height:100}});

    /*
    * 场景数据[动画loading,公共资源,场景0-...];
    * id:场景id;
    * childIndex:置于舞台的深度;
    * atlas:雪碧图数量;
    * src:其他附带资源;
    * */
    this.dataArr=
        [
            {id:'loading',childIndex:0,atlas_P:0,src:[

            ]},
            {id:'library',childIndex:1,atlas_P:1,src:[
                //{src:'sounds/bg.mp3',id:'bgSound'}
            ]},
            {id:'p0',childIndex:2,atlas_P:1,src:[

            ]},
            {id:'p1',childIndex:3,atlas_P:2,src:[

            ]},
            {id:'p2',childIndex:4,atlas_P:1,src:[

            ]}

        ];
    this.setSource(this.dataArr);//将加载数据赋值,启动加载程序;


    //添加全局侦听事件,便于跟动画逻辑进行交互,直接将事件发送点写在动画逻辑里面;
    /*
        //发送事件;
        Config.sendEvent(
            Config.eventDispatcher,//事件接受对象;
            'keyboradSoundControl',//事件类型;
            {play:true,playId:0}//事件参数;
        );
        //接受事件;
        Config.eventDispatcher.addEventListener('keyboradSoundControl',keyboradSoundControl);
        //事件处理函数;
        function keyboradSoundControl(e)
        {
            console.log('keyboradSoundControl:', e.play, e.playId);
        }

    * */

    /*
    * 第一批文件加载进度;
    * pro:百分比(0-1);
    * */
    this.mainLoadProgressHandler=function(pro)
    {
        divLoadProgress(pro*100>>0);
    };
    /*
    * 第一批文件加载完成;
    * e:事件;
    * */
    this.mainLoadCompleteHandler=function(e)
    {
        divLoadComplete();
        //bgSound=Config.addAudio('bgSound','sounds/bg',true,true,true);
        this.getMc(0);
        addMainloading(-1)
        //this.currentPage=0;
        //this.addScenes('content',this.currentPage);
    };
    /*
    * 第二批文件加载进度;
    * pro:百分比(0-1);
    * */
    this.mainPageLoadingProgressHandler=function(pro)
    {
        //addMainloading(pro);
    };
    /*
    * 第二批文件加载完成;
    * e:事件;
    * */
    this.mainPageLoadingCompleteHandler=function(e)
    {
        addFpsTest();
        addMainloading(-2);

        this.getMc(1);//组成类库动画;
        //addLoading();
        addShare();
        addClickShape();
        clickShapeEnabled(false);
        addSound();
        manInit();
        this.currentPage=2;
        this.addScenes('content',this.currentPage);

        Config.eventDispatcher.addEventListener(Main.EVENT_PLAY_NEXT_PAGE,onPlayNextPage);
        Config.eventDispatcher.addEventListener(Main.EVENT_GET_TO_ADD_MC,onGetToAddMc);
        Config.eventDispatcher.addEventListener(Main.EVENT_GET_MC_OBJ,onGetMcObj);

    };
    /*
    * 需要的资源正在缓冲,此时需要loading过度;
    * pro:百分比(0-1);
    * */
    this.mainPreLoadingProgressHandler=function(pro)
    {
        loadingEnabled(true,pro);
    };
    /*
    * 需要的资源缓冲完成;
    * e:事件;
    * */
    this.mainPreLoadingCompleteHandler=function(e)
    {
        loadingEnabled(false);
        this.onScenesOutComplete('content');//退场完成必须通知调用该函数;
    };
    /*
    * 当前场景播放到最后一帧;
    * 可以在此做处理,是自动播放下一个场景/等待交互;
    * mc:当前场景;
    * mc.pageId:当前场景的索引;
    * */
    this.mainScenesPlayEnd=function(mc)
    {
        //console.log('mainScenesPlayEnd');
        this.onScenesNextLoadComplete('content');//退场完成必须通知调用该函数,该函数不会组成mc,只会通知素材加载完成;
    };
    /*
    * 当前场景如何进场;
    * */
    this.mainScenesIn=function(mc)
    {
        //console.log('mainScenesIn mc.pageId:',mc.pageId);
        if(mc.pageId==2)
        {
            mc.instance.gotoAndPlay(0);
            //mc.instance.gotoAndPlay(545);
            //mc.instance.gotoAndPlay(400);
            //mc.instance.gotoAndPlay(244);
        }
        else if(mc.pageId==3)
        {
            mc.instance.gotoAndPlay(0);
            //mc.instance.gotoAndPlay(409);
        }
        else if(mc.pageId==4)
        {
            mc.instance.gotoAndPlay(0);
            //mc.instance.gotoAndPlay(400);
        }

    };
    /*
    * 当前场景如何退场;
    * 退场完成之后的事件可在此函数内部处理;
    *
    * this.currentPage+=1;
    * this.addScenes('content',target.currentPage);
    *
    * this.onScenesOutComplete('content');//退场完成必须通知调用该函数;
    * */
    this.mainScenesOut=function(mc)
    {
        //this.onScenesOutComplete('content');//需要下个场景经常必须通知调用该函数,该函数会触发场景进场函数;

    };

    /*
    * 当场景资源准备完成时调用;
    * 假如是场景后面跟随循环过场动画,可以在该函数里面执行退场动画;
    * */
    this.mainScenesRead=function(pageId)
    {
        //this.onScenesNextLoadComplete('content');//退场完成必须通知调用该函数,该函数不会组成mc,只会通知素材加载完成;
        var end_mc;
        switch (pageId)
        {
            case 3:
                end_mc=target.getContainer('content').getChildAt(0).getChildAt(0).end_mc;
                //console.log('end_mc:',end_mc.totalFrames-1);
                //mc.instance.visible=false;
                target.addFrameScript(end_mc,end_mc.totalFrames-1,function(){
                    target.getContainer('content').removeChildAt(0);
                    end_mc.stop();
                    //mc.instance.visible=true;
                    target.onScenesOutComplete('content');//需要下个场景经常必须通知调用该函数,该函数会触发场景进场函数;
                    //mc.instance.gotoAndPlay(400);
                });
                break;
            case 4:
                end_mc=target.getContainer('content').getChildAt(0);
                cjs.Tween.get(end_mc).to({alpha:0}, 500).call(function(){
                    target.getContainer('content').removeChildAt(0);
                    target.onScenesOutComplete('content');//需要下个场景经常必须通知调用该函数,该函数会触发场景进场函数;
                });
                break;
        }
    }

    /*
     * -1 添加对象;
     * 0-1 显示百分比;
     * -2 移除对象;
     * */
    function addMainloading(pro)
    {
        var mc;
        if(pro==-1)
        {
            target.getContainer('loadingContent').addChild(new libLoading.LOADING());
        }
        else if(pro==-2)
        {
            target.getContainer('loadingContent').removeAllChildren();
        }
        else
        {
            mc=target.getContainer('loadingContent').getChildAt(0);
            mc.gotoAndStop((99)*pro>>0);
        }
    }

    /*
    *
    * */

    function addClickShape()//添加全屏点击区域;
    {
        var s=new cjs.Shape();
        s.graphics.f("#ffffff").drawRect(0,-200+Core.HEIGHT/2,Core.WIDTH,Core.HEIGHT/2+200);
        s.alpha=1;
        //target.getContainer('clickContent').addChild(s);
        target.getContainer('clickContent').hitArea=s;

        var tips=new libLibrary.PAGEDOWNTIPS();
        tips.x=(Core.WIDTH/2)-36/2;
        tips.y=Core.HEIGHT-40;
        tips.name='tips';
        target.getContainer('clickContent').addChild(tips);
    }
    function clickShapeEnabled(arg)//全屏点击区域是否显示;
    {
        //console.log('clickShapeEnabled:',arg,target.currentPage);
        var tips=target.getContainer('clickContent').getChildByName('tips');
        if(target.currentPage==4)
        {
            tips._mc.gotoAndStop(1);
        }
        if(arg)
        {
            tips.gotoAndPlay(0);
            target.getContainer('clickContent').visible=true;
            target.getContainer('clickContent').addEventListener('pressup',onMouseEvent);
        }
        else
        {
            target.getContainer('clickContent').visible=false;
            target.getContainer('clickContent').removeEventListener('pressup',onMouseEvent);
        }
    }

    function addLoading()//添加预载loading;
    {
        var smallLoading=new libLibrary.PRELOADING();
        smallLoading.x=Core.WIDTH/2;
        smallLoading.y=Core.HEIGHT/2;
        target.getContainer('loadingContent').addChild(smallLoading);
    }
    function loadingEnabled(arg,pro)//预载loading是否显示;
    {
        if(arg)
        {
            if(!target.getContainer('loadingContent').visible) target.getContainer('loadingContent').visible=arg;
        }
        else
        {
            if(target.getContainer('loadingContent').visible) target.getContainer('loadingContent').visible=arg;
        }
    }

    function addSound()//添加背景音乐;
    {
        var soundBtn=new libLibrary.SOUNDBTN();
        var bgSoundPos=0;
        var s=new cjs.Shape();
        s.graphics.f("#ffffff").drawRect(-5,-5,60,60);
        s.alpha=1;
        //target.getContainer('soundContent').addChild(s);
        soundBtn.hitArea=s;
        target.getContainer('soundContent').addChild(soundBtn);
        soundBtn.addEventListener('click',function(e){

            if(e.currentTarget.currentFrame==0)
            {
                if(bgSound)
                {
                    //bgSoundPos=bgSound.position;
                    //bgSound.stop();
                    bgSound.pause();
                }
                e.currentTarget.gotoAndStop(1);
            }
            else
            {
                //bgSound=Config.soundPlay('bgSound',-1,0.5,bgSoundPos);
                bgSound.play();
                e.currentTarget.gotoAndStop(0);
            }
        });
        setTimeout(function(){
            //bgSound=Config.addAudio('bgSound','sounds/bg',true,true,true);
        },200);
    }

    function addShare()//添加分享动画;
    {
        var share=new libLibrary.SHARESP();
        target.getContainer('shareContent').addChild(share);
        var mc=target.getContainer('shareContent').getChildAt(0);
        target.addFrameScript(mc,mc.totalFrames-1,function()
        {
            //console.log(mc.currentFrame,mc);
            setTimeout(function(){
                //console.log(mc.share_mc);
                //mc.share_mc.gotoAndPlay(0);
            },200);
        });
        target.getContainer('shareContent').visible=false;
        shareEnabled(false);
    }

    function shareEnabled(arg)//分享动画是否显示;
    {

        var mc=target.getContainer('shareContent').getChildAt(0);
        mc.name='shareClose_mc';
        if(arg)
        {
            target.getContainer('shareContent').visible=true;
            target.getContainer('shareContent').alpha=1;
            mc.gotoAndPlay(1);
            mc.addEventListener('click',onClick);
        }
        else
        {
            cjs.Tween.removeTweens(target.getContainer('shareContent'));
            cjs.Tween.get(target.getContainer('shareContent'), {override:true}).to({alpha:0}, 500).call(handleComplete);
            function handleComplete() {
                //Tween complete
                target.getContainer('shareContent').visible=false;
                mc.gotoAndStop(0);
            }
            mc.removeEventListener('click',onClick);
        }
    }

    function addFpsTest()//添加fps和输出信息文本;
    {
        if(!Config.isTest) return;
        Config.addFps(target.getContainer('fpsContent'),Core.FPS);
        Config.addOutput(target.getContainer('fpsContent'));
        Config.trace('test output');
    }

    function onMouseEvent(e)//点击跳转到下个场景;
    {
        clickShapeEnabled(false);
        var mc;
        switch (playNextPageAction)
        {
            case 'nextFrame':
                mc=target.getMc(target.currentPage);
                mc.getChildAt(0).play();
                break;
            case 'nextPage':
                mc=target.getMc(target.currentPage);
                mc.getChildAt(0).play();
                target.currentPage+=1;
                target.addScenes('content',target.currentPage);
                break;
        }
    }

    function onClick(e)//所有点击事件;
    {
        //console.log(e);
        var mc= e.currentTarget;
        switch (mc.name)
        {
            case 'start_mc':
                sendClick('page');
                mc.parent.play();
                mc.removeEventListener('click',onClick);
                break;
            case 'shareClose_mc':
                shareEnabled(false);
                break;
            case 'share_mc':
                sendClick('share');
                shareEnabled(true);
                break;
            case 'star0':
                sendClick('star0');
                p2WordChange(0);
                break;
            case 'star1':
                sendClick('star1');
                p2WordChange(1);
                break;
            case 'star2':
                sendClick('star2');
                p2WordChange(2);
                break;
            case 'star3':
                sendClick('star3');
                p2WordChange(3);
                break;
        }
    }

    var playNextPageAction;
    var sendClickPageId=0;
    function onPlayNextPage(e)
    {
        clickShapeEnabled(true);
        //console.log(e.action)
        sendClick('page'+sendClickPageId.toString());
        sendClickPageId+=1;
        switch (e.action)
        {
            case 'nextFrame':
                playNextPageAction='nextFrame';
                break;
            case 'nextPage':
                playNextPageAction='nextPage';
                break;
        }
    }

    var manObjArr=[];
    function manInit()
    {
        return;
        for(var i=0;i<3;i++)
        {
            manObjArr.push(new libLibrary.MAN());
        }
    }

    function onGetToAddMc(e)//获取公用素材;
    {
        //console.log('onGetToAddMc:',e.mcType);
        //e.parent.addChild(manObjArr[e.manId]);
        var tmp;
        switch (e.mcType)
        {
            case 'man':
                tmp=new libLibrary.MAN();
                break;
            case 'man2':
                tmp=new libLibrary.MAN2();
                break;
            case 'bg':
                tmp=new libLoading.COMMONBG();
                break;
        }
        if(e.x)
        {
            tmp.x= e.x;
            tmp.y= e.y;
        }
        e.parent.addChild(tmp);
    }

    var p2WordArr=[];
    var p2StarArr=[];
    var p2RndArr=[0,2,3];
    var p2WordRnd=p2RndArr[Math.random()*p2RndArr.length>>0];
    var p2StarCurrent=p2WordRnd;
    /*setInterval(function(){
        console.log(p2WordRnd=Math.random()*3>>0);
    },30);*/
    function onGetMcObj(e)
    {
        if(e.name.indexOf('star')!=-1)
        {
            e.obj.name= e.name;
            if(e.obj.name=='star'+p2WordRnd.toString())
            {
                //
                console.log('e.obj.name:',e.obj.name,e.obj.getChildAt(0),e.obj.stage);
                setTimeout(function(){
                    e.obj.getChildAt(0).scaleX= e.obj.getChildAt(0).scaleY=2;
                    console.log('e.obj.name:',e.obj.name,e.obj.getChildAt(0),e.obj.stage);
                },50);
            }
            p2StarArr.push(e.obj);
            e.obj.alpha=0;
            cjs.Tween.get(e.obj, {override:true}).to({alpha:1}, 2000);
            e.obj.addEventListener('click',onClick);
            p2WordAutoPlayTime=setTimeout(function(){
                p2WordAutoPlay();
            },9500);
        }
        else if(e.name.indexOf('word')!=-1)
        {
            p2WordArr.push(e.obj);
            //console.log('p2WordRnd:',p2WordRnd)
            setTimeout(function(){
                if(p2WordRnd!=0) e.obj._mc.gotoAndStop(p2WordRnd);
            },20);
        }
        else if(e.name.indexOf('share')!=-1)
        {
            e.obj.name='share_mc';
            e.obj.addEventListener('click',onClick);
            var s=new cjs.Shape();
            s.graphics.f("#ffffff").drawRect(-190,-55,230,85);
            s.alpha=1;
            //e.obj.addChild(s);
            e.obj.hitArea=s;
        }
        //console.log('onGetMcObj:', e.obj, e.name);
    }

    function p2WordChange(id)
    {
        if(p2StarCurrent==id) return;
        p2StarCurrent=id;
        var mc;
        for(var i=0;i<p2WordArr.length;i++)
        {
            mc=p2WordArr[i];
            mc.alpha=0;
            cjs.Tween.get(mc, {override:true}).to({alpha:1}, 800);
            if(mc._mc.currentFrame!=id) mc._mc.gotoAndStop(id);
        }
        for(var j=0;j<p2StarArr.length;j++)
        {
            //console.log(p2StarArr[j].name,'star'+id.toString());
            if(p2StarArr[j].name=='star'+id.toString())
            {
                cjs.Tween.get(p2StarArr[j].getChildAt(0), {override:true}).to({scaleY:2,scaleX:2}, 500);
            }
            else
            {
                cjs.Tween.get(p2StarArr[j].getChildAt(0), {override:true}).to({scaleY:1,scaleX:1}, 500);
            }
        }
        p2WordAutoPlay();
    }
    var p2WordAutoPlayTime;
    function p2WordAutoPlay()
    {
        clearTimeout(p2WordAutoPlayTime);
        p2WordAutoPlayTime=setTimeout(function(){
            //console.log('p2StarArr[0].stage:',p2StarArr[0].stage)
            if(!p2StarArr[0].stage)
            {
                clearTimeout(p2WordAutoPlayTime);
                return;
            }
            var nextId,mc;
            if(p2StarCurrent<p2StarArr.length-1)
            {
                nextId=p2StarCurrent+1;
            }
            else
            {
                nextId=0;
            }
            for(var i=0;i<p2StarArr.length;i++)
            {
                //console.log(p2StarArr[i].name,'star'+nextId.toString())
                if(p2StarArr[i].name=='star'+nextId.toString())
                {
                    mc=p2StarArr[i];
                }
            }
            //console.log('p2WordAutoPlay:',mc)
            mc.dispatchEvent(new cjs.MouseEvent('click'));
        },7000);
    }
}
cjs.extend(Main,Core);
//所有继承自core类的函数都进行封装;
var mainP=Main.prototype;
mainP.onLoadProgressHandler=function(pro)//第一个场景loading进度;
{
    //console.log('Main onLoadProgressHandler:', pro);
    this.mainLoadProgressHandler(pro);
}
mainP.onLoadCompleteHandler=function(e)//第一个场景loading加载完成;
{
    //console.log('Main onLoadCompleteHandler');
    this.mainLoadCompleteHandler(e);
}
mainP.onPageLoadingProgressHandler=function(pro)//第二批场景loading进度;
{
    //console.log('onPageLoadingProgressHandler:',pro);
    this.mainPageLoadingProgressHandler(pro);
}
mainP.onPageLoadingCompleteHandler=function(e)//第二批场景loading加载完成;
{
    //console.log('onPageLoadingCompleteHandler');
    this.mainPageLoadingCompleteHandler(e);
}
mainP.onPreLoadingProgressHandler=function(pro)//预加载loading,需要下个场景,该场景正在下载,需要显示loading;
{
    //console.log('onPreLoadingProgressHandler:',pro);
    this.mainPreLoadingProgressHandler(pro);
}
mainP.onPreLoadingCompleteHandler=function(e)//预载该场景完成,需要立刻显示;
{
    //console.log('onPreLoadingCompleteHandler: play');
    this.mainPreLoadingCompleteHandler(e);
}
mainP.onScenesPlayEnd=function(mc)//场景播放完成;
{
    //console.log('onScenesPlayEnd',mc.totalFrames);
    this.mainScenesPlayEnd(mc);
}
mainP.onScenesIn=function(mc)//场景进场;
{
    this.mainScenesIn(mc);
}
mainP.onScenesOut=function(mc)//场景退场;
{
    this.mainScenesOut(mc);
}
mainP.onScenesRead=function(pageId)//场景素材加载完成;
{
    this.mainScenesRead(pageId);
}
cjs.promote(Main,'Core');
function cjsStart()//main启动函数;
{
    Config.CANVAS = document.getElementById("canvasStage");// 这里做一次赋值，为声音自动播放提供 Config.CANVAS
    Core.OFFICIALPATH = './assets/';//文件分离路径;
    Config.path=Core.OFFICIALPATH;
    bgSound=Config.addAudio('bgSound','sounds/bg',true,true,true);
    bgSound.addEventListener("play",audioEvent);//音频/视频已开始或不再暂停时;

    function audioEvent(e)
    {
        alert("触发 play 事件回调."+ (new Date()).getTime());
        bgSound.removeEventListener("play",audioEvent);//音频/视频已开始或不再暂停时;
        var main=new Main();
    }
    //var main=new Main();
}
function playSound(id, loop) {
    //return;
    if(Config.isAndroid()) return;
    //Config.addAudio(id,'sounds/'+id,true,false,false);
    //return;
    return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}
