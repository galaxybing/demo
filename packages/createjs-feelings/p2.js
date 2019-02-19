(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 800,
	height: 960,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"sounds/p2Wave0.mp3", id:"p2Wave0"},
		{src:"sounds/p2Wave1.mp3", id:"p2Wave1"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.a111 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.a112 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.a113 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.a115 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.a61 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.a81 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.a96 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.c6_0000_图层3 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.c6_0001_图层4 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.c6_0002_图层5 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.c6_0003_图层6 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.c6_0004_图层7 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.c7_0000_图层9 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.c7_0001_图层10 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.c7_0002_图层11 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.c8_0003_图层16 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.c8_0004_图层17 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.c8_0005_图层18 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.c8_0006_图层19 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.e1_0003_图层15 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.g_0000_10 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.g_0001_9 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.g_0002_8 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.g_0003_7 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.g_0004_6 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.g_0005_5 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.g_0006_4 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.g_0007_3 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.g_0008_2 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.g_0009_1 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.h_0000_图层10 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.h_0001_图层11 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.h_0002_图层12 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.h_0003_图层13 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.h_0004_图层14 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.h_0005_图层6 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.h_0006_图层7 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.h_0007_图层8 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.h_0008_图层9 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.h_0009_图层1 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.h_0010_图层2 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.h_0011_图层3 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.h_0012_图层4 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.h_0013_图层5 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.vcvb = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.zzz1_0002_图层3 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.zzz2_0001_Group43copy = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.zzz2_0002_Group46copy = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.zzz2_0003_行星大 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.zzz3_0001_图层2 = function() {
	this.spriteSheet = ss["p2_atlas_P_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.rwqereqw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.vcvb();
	this.instance.setTransform(-90.5,-137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.5,-137.5,181,275);


(lib.fsdfas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.fsdafads = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.补间108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AwaAAMAg1AAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.1,-1,212.3,2);


(lib.补间107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AwaAAMAg1AAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.1,-1,212.3,2);


(lib.补间102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a61();
	this.instance.setTransform(-400,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-480,800,960);


(lib.补间101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a61();
	this.instance.setTransform(-400,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-480,800,960);


(lib.补间92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c7_0000_图层9();
	this.instance.setTransform(-11.5,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-164,25,422);


(lib.补间90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c7_0001_图层10();
	this.instance.setTransform(-11.5,-182.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-182.5,27,313);


(lib.补间89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c7_0001_图层10();
	this.instance.setTransform(-11.5,-182.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-182.5,27,313);


(lib.补间88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c7_0002_图层11();
	this.instance.setTransform(-11.5,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-149,25,457);


(lib.补间87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c7_0002_图层11();
	this.instance.setTransform(-11.5,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-149,25,457);


(lib.补间84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c6_0004_图层7();
	this.instance.setTransform(-11,-254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-254,25,484);


(lib.补间83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c6_0004_图层7();
	this.instance.setTransform(-11,-254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-254,25,484);


(lib.补间82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c6_0000_图层3();
	this.instance.setTransform(-11.5,-178.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-178.5,27,387);


(lib.补间81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c6_0000_图层3();
	this.instance.setTransform(-11.5,-178.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-178.5,27,387);


(lib.补间80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c6_0001_图层4();
	this.instance.setTransform(-11,-209.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-209.5,25,133);


(lib.补间79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c6_0001_图层4();
	this.instance.setTransform(-11,-209.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-209.5,25,133);


(lib.补间78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c6_0002_图层5();
	this.instance.setTransform(-11.5,-270.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-270.5,27,279);


(lib.补间77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c6_0002_图层5();
	this.instance.setTransform(-11.5,-270.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-270.5,27,279);


(lib.补间76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c6_0003_图层6();
	this.instance.setTransform(-11.5,-255.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-255.5,26,459);


(lib.补间75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c6_0003_图层6();
	this.instance.setTransform(-11.5,-255.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-255.5,26,459);


(lib.补间67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zzz3_0001_图层2();
	this.instance.setTransform(-12.3,-111.5,0.797,0.797);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-111.5,24.7,223.1);


(lib.补间66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zzz3_0001_图层2();
	this.instance.setTransform(-12.3,-111.5,0.797,0.797);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-111.5,24.7,223.1);


(lib.补间65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zzz2_0003_行星大();
	this.instance.setTransform(-9.4,-9.4,0.296,0.296);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-9.4,19,19);


(lib.补间62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zzz2_0003_行星大();
	this.instance.setTransform(-9.4,-9.4,0.296,0.296);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-9.4,19,19);


(lib.补间61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zzz2_0003_行星大();
	this.instance.setTransform(-9.4,-9.4,0.296,0.296);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-9.4,19,19);


(lib.补间59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a115();
	this.instance.setTransform(-89,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-12.5,134,20);


(lib.补间57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_MC_OBJ,
			{obj:this,name:'share'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 1
	this.instance = new lib.a111();
	this.instance.setTransform(-177.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.5,-49,199,20);


(lib.补间56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a113();
	this.instance.setTransform(-217.8,2.6,0.797,0.797);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.8,2.6,24.7,137.9);


(lib.补间52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a112();
	this.instance.setTransform(-98.5,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-140,139,197);


(lib.补间51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a112();
	this.instance.setTransform(-98.5,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-140,139,197);


(lib.补间49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zzz2_0001_Group43copy();
	this.instance.setTransform(-10.2,-10.4,0.419,0.419);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-10.4,20.5,21);


(lib.补间48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zzz2_0001_Group43copy();
	this.instance.setTransform(-10.2,-10.4,0.419,0.419);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-10.4,20.5,21);


(lib.补间47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zzz2_0001_Group43copy();
	this.instance.setTransform(-10.2,-10.4,0.419,0.419);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-10.4,20.5,21);


(lib.补间46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zzz2_0002_Group46copy();
	this.instance.setTransform(-11.9,-11.9,0.488,0.488);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-11.9,23.9,23.9);


(lib.补间45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zzz2_0002_Group46copy();
	this.instance.setTransform(-11.9,-11.9,0.488,0.488);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-11.9,23.9,23.9);


(lib.补间42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zzz1_0002_图层3();
	this.instance.setTransform(-9.8,-193.9,0.788,0.788);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-193.9,19.7,387.9);


(lib.补间41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zzz1_0002_图层3();
	this.instance.setTransform(-9.8,-193.9,0.788,0.788);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-193.9,19.7,387.9);


(lib.ewqrqwer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.vcvb();
	this.instance.setTransform(-90.5,-137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.5,-137.5,181,275);


(lib.补间13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a96();
	this.instance.setTransform(-5.4,-5.4,0.219,0.219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-5.4,11,10.8);


(lib.元件46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 图层 1
	this.instance = new lib.c8_0006_图层19();

	this.instance_1 = new lib.h_0004_图层14();

	this.instance_2 = new lib.h_0008_图层9();
	this.instance_2.setTransform(7.7,36.6);

	this.instance_3 = new lib.h_0013_图层5();
	this.instance_3.setTransform(0,107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,279);


(lib.元件45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 图层 1
	this.instance = new lib.e1_0003_图层15();

	this.instance_1 = new lib.h_0003_图层13();

	this.instance_2 = new lib.h_0012_图层4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,313);


(lib.元件44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 图层 1
	this.instance = new lib.c8_0005_图层18();

	this.instance_1 = new lib.h_0002_图层12();
	this.instance_1.setTransform(1,0);

	this.instance_2 = new lib.h_0007_图层8();
	this.instance_2.setTransform(-38.1,0);

	this.instance_3 = new lib.h_0011_图层3();
	this.instance_3.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,241);


(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 图层 1
	this.instance = new lib.c8_0003_图层16();

	this.instance_1 = new lib.h_0000_图层10();

	this.instance_2 = new lib.h_0005_图层6();
	this.instance_2.setTransform(-38.1,0);

	this.instance_3 = new lib.h_0009_图层1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,350);


(lib.元件42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 图层 1
	this.instance = new lib.c8_0004_图层17();

	this.instance_1 = new lib.h_0001_图层11();

	this.instance_2 = new lib.h_0006_图层7();
	this.instance_2.setTransform(-39.1,0);

	this.instance_3 = new lib.h_0010_图层2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,241);


(lib.元件37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.g_0009_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,179);


(lib.元件36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.g_0008_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167,49);


(lib.元件35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.g_0007_3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,61);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.g_0006_4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174,90);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.g_0005_5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,64);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.g_0004_6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,188);


(lib.元件31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.g_0003_7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170,60);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.g_0002_8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,94);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.g_0001_9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,185);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.g_0000_10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,162);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a115();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134,20);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a81();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,219,194);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_TO_ADD_MC,
			{id:'2',manId:2,parent:this,mcType:'man2'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.6,0.1,60,100);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_TO_ADD_MC,
			{id:'2',manId:0,parent:this,mcType:'man'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.补间105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_MC_OBJ,
			{obj:this,name:'word1'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 图层 2
	this._mc = new lib.元件45();
	this._mc.setTransform(8.7,-123.8,1,1,0,0,0,20.9,32);

	this.timeline.addTween(cjs.Tween.get(this._mc).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-156.5,25.3,313.7);


(lib.补间99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_MC_OBJ,
			{obj:this,name:'word4'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 图层 3
	this._mc = new lib.元件43();
	this._mc.setTransform(9.4,-153.5,1,1,0,0,0,20.4,33.5);

	this.timeline.addTween(cjs.Tween.get(this._mc).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-187,26,350);


(lib.补间97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_MC_OBJ,
			{obj:this,name:'word3'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 图层 3
	this._mc = new lib.元件42();
	this._mc.setTransform(13.3,-144,1,1,0,0,0,24.9,43.1);

	this.timeline.addTween(cjs.Tween.get(this._mc).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-187.5,25.7,241.4);


(lib.补间95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_MC_OBJ,
			{obj:this,name:'word2'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 图层 3
	this._mc = new lib.元件44();
	this._mc.setTransform(3.2,-101.3,1,1,0,0,0,14.2,22.9);

	this.timeline.addTween(cjs.Tween.get(this._mc).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-124.5,26.6,241.3);


(lib.补间93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_MC_OBJ,
			{obj:this,name:'word0'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 图层 2
	this._mc = new lib.元件46();
	this._mc.setTransform(14.4,-144,1,1,0,0,0,24.9,42.5);

	this.timeline.addTween(cjs.Tween.get(this._mc).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-186.5,25,279.2);


(lib.补间60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件21();
	this.instance.setTransform(-22,-2.5,1,1,0,0,0,67,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-12.5,134,20);


(lib.元件40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zzz2_0003_行星大();
	this.instance.setTransform(2.2,2.2,0.363,0.363);

	this.instance_1 = new lib.补间61("synched",0);
	this.instance_1.setTransform(13.7,13.7,1.223,1.223);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间62("synched",0);
	this.instance_2.setTransform(13.7,13.7,1.45,1.45);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间65("synched",0);
	this.instance_3.setTransform(13.7,13.7,1.223,1.223);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},180).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.28,scaleY:1.28},0).wait(1).to({scaleX:1.33,scaleY:1.33},0).wait(1).to({scaleX:1.38,scaleY:1.38},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({scaleX:1.44,scaleY:1.44},0).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(188).to({_off:false},0).wait(1).to({scaleX:1.44,scaleY:1.44},0).wait(1).to({scaleX:1.43,scaleY:1.43},0).wait(1).to({scaleX:1.39,scaleY:1.39},0).wait(1).to({scaleX:1.35,scaleY:1.35},0).wait(1).to({scaleX:1.3,scaleY:1.3},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,2.2,23.2,23.2);


(lib.元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zzz2_0001_Group43copy();
	this.instance.setTransform(-2.4,-2.4,0.517,0.517);

	this.instance_1 = new lib.补间47("synched",0);
	this.instance_1.setTransform(10.3,10.5,1.235,1.235);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间48("synched",0);
	this.instance_2.setTransform(10.3,10.5,1.483,1.483);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间49("synched",0);
	this.instance_3.setTransform(10.3,10.5,1.235,1.235);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},180).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.3,scaleY:1.3},0).wait(1).to({scaleX:1.35,scaleY:1.35},0).wait(1).to({scaleX:1.4,scaleY:1.4},0).wait(1).to({scaleX:1.45,scaleY:1.45},0).wait(1).to({scaleX:1.48,scaleY:1.48},0).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(188).to({_off:false},0).wait(1).to({scaleX:1.48,scaleY:1.48},0).wait(1).to({scaleX:1.46,scaleY:1.46},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({scaleX:1.37,scaleY:1.37},0).wait(1).to({scaleX:1.32,scaleY:1.32},0).wait(1).to({scaleX:1.27,scaleY:1.27},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,25.3,25.9);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zzz2_0002_Group46copy();
	this.instance.setTransform(-1.6,-1.6,0.554,0.554);

	this.instance_1 = new lib.补间45("synched",0);
	this.instance_1.setTransform(12,12,1.137,1.137);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间46("synched",0);
	this.instance_2.setTransform(12,12,1.498,1.498);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},180).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.29,scaleY:1.29},0).wait(1).to({scaleX:1.38,scaleY:1.38},0).wait(1).to({scaleX:1.44,scaleY:1.44},0).wait(1).to({scaleX:1.49,scaleY:1.49},0).to({_off:true},1).wait(8).to({_off:false,scaleX:1.14,scaleY:1.14},0).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(188).to({_off:false},0).wait(1).to({scaleX:1.49,scaleY:1.49},0).wait(1).to({scaleX:1.46,scaleY:1.46},0).wait(1).to({scaleX:1.41,scaleY:1.41},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.6,27.2,27.2);


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间13("synched",0);
	this.instance.setTransform(5.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11,10.8);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件6();
	this.instance.setTransform(113,99,1,1,0,0,0,113,99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,219,194);


(lib.补间25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//send myself
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_MC_OBJ,
			{obj:this,name:'star2'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 3
	this.instance = new lib.元件40();
	this.instance.setTransform(-0.1,0,1,1,0,0,0,13.7,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-11.6,23.2,23.2);


(lib.补间23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//send myself
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_MC_OBJ,
			{obj:this,name:'star3'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 3
	this.instance = new lib.元件39();
	this.instance.setTransform(-0.2,0.1,1,1,0,0,0,10.3,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,-12.9,25.4,25.9);


(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//send myself
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_MC_OBJ,
			{obj:this,name:'star0'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 2
	this.instance = new lib.元件38();
	this.instance.setTransform(-0.1,0.1,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-13.6,27.2,27.2);


(lib.元件41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件27();
	this.instance.setTransform(5.5,5.6,1.207,1.207,0,0,0,5.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181).to({regY:5.4,scaleX:1.22,scaleY:1.22,y:5.4},0).wait(1).to({scaleX:1.25,scaleY:1.25,y:5.5},0).wait(1).to({scaleX:1.3,scaleY:1.3},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:5.6},0).wait(1).to({scaleX:1.46,scaleY:1.46},0).wait(1).to({scaleX:1.53,scaleY:1.53},0).wait(1).to({scaleX:1.58,scaleY:1.58},0).wait(1).to({regY:5.5,scaleX:1.59,scaleY:1.59,x:5.5,y:5.6},0).wait(1).to({regY:5.4,scaleX:1.58,scaleY:1.58,x:5.6,y:5.5},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:5.5,y:5.4},0).wait(1).to({scaleX:1.49,scaleY:1.49},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.27,scaleY:1.27},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({regY:5.5,scaleX:1.21,scaleY:1.21,y:5.6},0).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,13.3,13);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件19();
	this.instance.setTransform(52.1,46.3,0.464,0.464,0,0,0,109.5,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,1.3,101.7,90.1);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件19();
	this.instance.setTransform(108.5,69.7,1,1,0,0,0,109.5,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:108.6},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:108.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:108.6},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({regX:109.6,scaleX:1.05,scaleY:1.05},0).wait(1).to({regX:109.5,scaleX:1.05,scaleY:1.05,x:108.5},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:108.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:108.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:108.4},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,x:108.5},0).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-27.3,219,194);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// a9 (6).png
	this.instance = new lib.补间17();
	this.instance.setTransform(17,64.3,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.2,x:16.7},0).wait(1).to({y:64.5},0).wait(1).to({x:16.8,y:64.7},0).wait(1).to({x:16.9,y:65.2},0).wait(1).to({x:17.1,y:65.7},0).wait(1).to({x:17.3,y:66.4},0).wait(1).to({x:17.6,y:67.3},0).wait(1).to({x:17.9,y:68.3},0).wait(1).to({x:18.3,y:69.4},0).wait(1).to({x:18.8,y:70.6},0).wait(1).to({x:19.4,y:72},0).wait(1).to({x:20.1,y:73.5},0).wait(1).to({x:20.9,y:75.1},0).wait(1).to({x:21.8,y:76.8},0).wait(1).to({x:22.9,y:78.5},0).wait(1).to({x:24,y:80.4},0).wait(1).to({x:25.3,y:82.3},0).wait(1).to({x:26.8,y:84.3},0).wait(1).to({x:28.3,y:86.3},0).wait(1).to({x:30,y:88.3},0).wait(1).to({x:31.8,y:90.4},0).wait(1).to({x:33.8,y:92.4},0).wait(1).to({x:35.8,y:94.5},0).wait(1).to({x:38,y:96.6},0).wait(1).to({x:40.3,y:98.7},0).wait(1).to({x:42.6,y:100.9},0).wait(1).to({x:45.1,y:103},0).wait(1).to({x:47.8,y:105.1},0).wait(1).to({x:50.5,y:107.2},0).wait(1).to({x:53.3,y:109.3},0).wait(1).to({x:56.2,y:111.5},0).wait(1).to({x:59.3,y:113.6},0).wait(1).to({x:62.4,y:115.7},0).wait(1).to({x:65.8,y:117.9},0).wait(1).to({x:70.3,y:120.7},0).wait(1).to({x:75.1,y:123.7},0).wait(1).to({x:80.2,y:126.6},0).wait(1).to({x:85.4,y:129.5},0).wait(1).to({x:90.7,y:132.4},0).wait(1).to({x:96.1,y:135.1},0).wait(1).to({x:101.6,y:137.9},0).wait(1).to({x:107.2,y:140.6},0).wait(1).to({x:112.9,y:143.2},0).wait(1).to({x:118.7,y:145.8},0).wait(1).to({x:124.5,y:148.3},0).wait(1).to({x:130.5,y:150.8},0).wait(1).to({x:136.6,y:153.3},0).wait(1).to({x:142.8,y:155.7},0).wait(1).to({x:149.1,y:158.1},0).wait(1).to({x:155.5,y:160.5},0).wait(1).to({x:162,y:162.9},0).wait(1).to({x:168.6,y:165.2},0).wait(1).to({x:175.3,y:167.4},0).wait(1).to({x:182.1,y:169.7},0).wait(1).to({x:189,y:171.9},0).wait(1).to({x:196,y:174.1},0).wait(1).to({x:203.1,y:176.3},0).wait(1).to({x:210.3,y:178.4},0).wait(1).to({x:217.6,y:180.5},0).wait(1).to({x:224.9,y:182.5},0).wait(1).to({x:232.3,y:184.4},0).wait(1).to({x:239.9,y:186.3},0).wait(1).to({x:247.6,y:188},0).wait(1).to({x:255.6,y:189.7},0).wait(1).to({x:263.7,y:191.3},0).wait(1).to({x:272.1,y:192.7},0).wait(1).to({x:280.6,y:194},0).wait(1).to({x:289.3,y:195.2},0).wait(1).to({x:298.1,y:196.2},0).wait(1).to({x:307.1,y:197.1},0).wait(1).to({x:316.3,y:197.8},0).wait(1).to({x:324.9,y:198.3},0).wait(1).to({x:333.6,y:198.7},0).wait(1).to({x:342.5,y:198.9},0).wait(1).to({x:351.6,y:199},0).wait(1).to({x:360.9,y:198.8},0).wait(1).to({x:370.4,y:198.5},0).wait(1).to({x:380.1,y:197.8},0).wait(1).to({x:390.1,y:196.9},0).wait(1).to({x:399.7,y:195.7},0).wait(1).to({x:408.6,y:194.3},0).wait(1).to({x:417.8,y:192.5},0).wait(1).to({x:427.2,y:190.3},0).wait(1).to({x:436.7,y:187.4},0).wait(1).to({x:446.2,y:184},0).wait(1).to({x:455.7,y:179.7},0).wait(1).to({x:463.1,y:175.3},0).wait(1).to({x:470.5,y:169.6},0).wait(1).to({x:477,y:162.3},0).wait(1).to({x:481.5,y:152.8},0).wait(1).to({x:481.6,y:140.6},0).wait(1).to({x:477.1,y:127.9},0).wait(1).to({x:471,y:117.6},0).wait(1).to({x:463.6,y:108.1},0).wait(1).to({x:454.5,y:98.8},0).wait(1).to({x:445,y:90.6},0).wait(1).to({x:435.5,y:83.5},0).wait(1).to({x:426.2,y:77.2},0).wait(1).to({x:416.7,y:71.2},0).wait(1).to({x:406.6,y:65.4},0).wait(1).to({x:396.5,y:59.9},0).wait(1).to({x:386.4,y:54.8},0).wait(1).to({x:376.4,y:50},0).wait(1).to({x:366.4,y:45.5},0).wait(1).to({x:356.5,y:41.4},0).wait(1).to({x:346.8,y:37.5},0).wait(1).to({x:337.3,y:34},0).wait(1).to({x:327.8,y:30.6},0).wait(1).to({x:318.2,y:27.5},0).wait(1).to({x:308.6,y:24.6},0).wait(1).to({x:299.1,y:21.9},0).wait(1).to({x:289.5,y:19.5},0).wait(1).to({x:280,y:17.3},0).wait(1).to({x:270.4,y:15.3},0).wait(1).to({x:261.1,y:13.5},0).wait(1).to({x:252,y:11.8},0).wait(1).to({x:243,y:10.3},0).wait(1).to({x:234.1,y:8.8},0).wait(1).to({x:225.3,y:7.5},0).wait(1).to({x:216.6,y:6.3},0).wait(1).to({x:207.9,y:5.3},0).wait(1).to({x:199.4,y:4.3},0).wait(1).to({x:191,y:3.5},0).wait(1).to({x:182.7,y:2.8},0).wait(1).to({x:175.1,y:2.2},0).wait(1).to({x:167.8,y:1.7},0).wait(1).to({x:160.6,y:1.3},0).wait(1).to({x:153.5,y:1.1},0).wait(1).to({x:146.4,y:0.9},0).wait(1).to({x:139.5,y:0.8},0).wait(1).to({x:132.6},0).wait(1).to({x:125.8,y:1},0).wait(1).to({x:119.2,y:1.2},0).wait(1).to({x:112.6,y:1.5},0).wait(1).to({x:106.1,y:2},0).wait(1).to({x:100.4,y:2.5},0).wait(1).to({x:95.2,y:3},0).wait(1).to({x:90,y:3.7},0).wait(1).to({x:85,y:4.4},0).wait(1).to({x:80,y:5.2},0).wait(1).to({x:75.2,y:6.1},0).wait(1).to({x:70.5,y:7.1},0).wait(1).to({x:65.8,y:8.2},0).wait(1).to({x:61.3,y:9.5},0).wait(1).to({x:56.9,y:10.8},0).wait(1).to({x:52.7,y:12.3},0).wait(1).to({x:48.5,y:13.9},0).wait(1).to({x:44.6,y:15.7},0).wait(1).to({x:41.7,y:17.1},0).wait(1).to({x:38.7,y:18.8},0).wait(1).to({x:35.9,y:20.5},0).wait(1).to({x:33.2,y:22.3},0).wait(1).to({x:30.7,y:24.2},0).wait(1).to({x:28.4,y:26.2},0).wait(1).to({x:26.2,y:28.3},0).wait(1).to({x:24.3,y:30.4},0).wait(1).to({x:22.5,y:32.7},0).wait(1).to({x:21,y:35},0).wait(1).to({x:19.7,y:37.3},0).wait(1).to({x:18.6,y:39.6},0).wait(1).to({x:17.7,y:41.8},0).wait(1).to({x:17,y:44},0).wait(1).to({x:16.5,y:45.9},0).wait(1).to({x:16.1,y:47.8},0).wait(1).to({x:15.8,y:49.6},0).wait(1).to({x:15.6,y:51.3},0).wait(1).to({x:15.5,y:52.9},0).wait(1).to({y:54.3},0).wait(1).to({y:55.6},0).wait(1).to({y:56.8},0).wait(1).to({x:15.6,y:57.9},0).wait(1).to({x:15.7,y:58.8},0).wait(1).to({x:15.8,y:59.6},0).wait(1).to({x:15.9,y:60.2},0).wait(1).to({x:16,y:60.8},0).wait(1).to({y:61.2},0).wait(1).to({x:16.1,y:61.5},0).wait(1).to({y:61.6},0).wait(1).to({regX:0,x:16.4,y:61.7},0).wait(1));

	// 引导层: a9 (6).png 复制
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("EgkQgFjQA+D7GHEDQIWFlPwEiQHQCGHSAlQGrAjFfgjQFfgjD0hkQD0hjBRiXQBRiXiJjdQiJjck5jOQk4jNmOikQmkitmihWQm1hamkglQm1gnleAYQl2AajmBfQj5Bog+CxQgiBiASBk");
	this.shape.setTransform(249.1,99.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,-0.2,483.1,200.1);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// 图层 3
	this.instance = new lib.补间23();
	this.instance.setTransform(422.8,145.5,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.2,x:422.5,y:145.4},0).wait(1).to({x:422.6,y:145.3},0).wait(1).to({x:422.8,y:145.1},0).wait(1).to({x:423,y:144.9},0).wait(1).to({x:423.3,y:144.5},0).wait(1).to({x:423.7,y:144.1},0).wait(1).to({x:424.2,y:143.6},0).wait(1).to({x:424.6,y:143.1},0).wait(1).to({x:425.1,y:142.5},0).wait(1).to({x:425.7,y:141.8},0).wait(1).to({x:426.3,y:141.1},0).wait(1).to({x:426.9,y:140.3},0).wait(1).to({x:427.7,y:139.4},0).wait(1).to({x:428.4,y:138.4},0).wait(1).to({x:429.2,y:137.3},0).wait(1).to({x:430.1,y:136.1},0).wait(1).to({x:431,y:134.8},0).wait(1).to({x:431.9,y:133.4},0).wait(1).to({x:432.8,y:131.9},0).wait(1).to({x:433.8,y:130.2},0).wait(1).to({x:434.8,y:128.4},0).wait(1).to({x:435.7,y:126.4},0).wait(1).to({x:436.7,y:124.3},0).wait(1).to({x:437.6,y:122},0).wait(1).to({x:438.4,y:119.6},0).wait(1).to({x:439.2,y:117},0).wait(1).to({x:439.8,y:114.2},0).wait(1).to({x:440.3,y:111.2},0).wait(1).to({x:440.6,y:108},0).wait(1).to({x:440.8,y:104.7},0).wait(1).to({x:440.6,y:101.3},0).wait(1).to({x:440.2,y:97.6},0).wait(1).to({x:439.5,y:93.8},0).wait(1).to({x:438.3,y:89.9},0).wait(1).to({x:436.8,y:85.9},0).wait(1).to({x:434.9,y:81.9},0).wait(1).to({x:432.6,y:78},0).wait(1).to({x:430,y:74.2},0).wait(1).to({x:427.1,y:70.5},0).wait(1).to({x:424,y:67},0).wait(1).to({x:420.6,y:63.6},0).wait(1).to({x:416.5,y:59.9},0).wait(1).to({x:412,y:56.3},0).wait(1).to({x:407.3,y:52.8},0).wait(1).to({x:402.4,y:49.6},0).wait(1).to({x:397.4,y:46.5},0).wait(1).to({x:392.3,y:43.6},0).wait(1).to({x:387,y:40.9},0).wait(1).to({x:381.7,y:38.4},0).wait(1).to({x:376.3,y:35.9},0).wait(1).to({x:370.6,y:33.6},0).wait(1).to({x:364.4,y:31.2},0).wait(1).to({x:358.1,y:28.9},0).wait(1).to({x:351.7,y:26.8},0).wait(1).to({x:345.1,y:24.8},0).wait(1).to({x:338.5,y:22.9},0).wait(1).to({x:331.7,y:21.2},0).wait(1).to({x:324.9,y:19.6},0).wait(1).to({x:318,y:18.1},0).wait(1).to({x:311.1,y:16.7},0).wait(1).to({x:304,y:15.4},0).wait(1).to({x:296.7,y:14.3},0).wait(1).to({x:289.3,y:13.2},0).wait(1).to({x:281.8,y:12.3},0).wait(1).to({x:274.2,y:11.5},0).wait(1).to({x:266.4,y:10.9},0).wait(1).to({x:258.6,y:10.4},0).wait(1).to({x:250.7,y:10},0).wait(1).to({x:242.6,y:9.8},0).wait(1).to({x:234.5,y:9.7},0).wait(1).to({x:226.4,y:9.9},0).wait(1).to({x:218.2,y:10.2},0).wait(1).to({x:209.9,y:10.7},0).wait(1).to({x:201.6,y:11.5},0).wait(1).to({x:193.1,y:12.5},0).wait(1).to({x:184.6,y:13.7},0).wait(1).to({x:176.1,y:15.2},0).wait(1).to({x:167.5,y:16.9},0).wait(1).to({x:159,y:18.9},0).wait(1).to({x:150.9,y:20.9},0).wait(1).to({x:142.8,y:23.3},0).wait(1).to({x:134.7,y:25.9},0).wait(1).to({x:126.5,y:28.8},0).wait(1).to({x:118.3,y:32},0).wait(1).to({x:110.1,y:35.6},0).wait(1).to({x:102,y:39.6},0).wait(1).to({x:94.3,y:43.8},0).wait(1).to({x:87.4,y:48},0).wait(1).to({x:80.4,y:52.7},0).wait(1).to({x:73.7,y:57.8},0).wait(1).to({x:67.1,y:63.6},0).wait(1).to({x:60.9,y:70},0).wait(1).to({x:55.2,y:77.1},0).wait(1).to({x:50.9,y:84},0).wait(1).to({x:47.3,y:91.6},0).wait(1).to({x:44.8,y:100.1},0).wait(1).to({x:43.9,y:109.1},0).wait(1).to({x:44.7,y:118.3},0).wait(1).to({x:47.6,y:127.7},0).wait(1).to({x:52.5,y:136.7},0).wait(1).to({x:58.6,y:144.5},0).wait(1).to({x:65.3,y:151.1},0).wait(1).to({x:73.1,y:157.6},0).wait(1).to({x:81.8,y:163.5},0).wait(1).to({x:90.5,y:168.6},0).wait(1).to({x:99,y:173},0).wait(1).to({x:107.4,y:176.9},0).wait(1).to({x:115.6,y:180.3},0).wait(1).to({x:124.5,y:183.6},0).wait(1).to({x:133.3,y:186.6},0).wait(1).to({x:142,y:189.2},0).wait(1).to({x:150.6,y:191.6},0).wait(1).to({x:159.1,y:193.6},0).wait(1).to({x:167.4,y:195.5},0).wait(1).to({x:175.5,y:197.1},0).wait(1).to({x:183.5,y:198.5},0).wait(1).to({x:191.5,y:199.8},0).wait(1).to({x:199.3,y:200.9},0).wait(1).to({x:207.1,y:201.8},0).wait(1).to({x:214.8,y:202.6},0).wait(1).to({x:222.4,y:203.2},0).wait(1).to({x:229.9,y:203.7},0).wait(1).to({x:237.3,y:204},0).wait(1).to({x:244.6,y:204.2},0).wait(1).to({x:251.7,y:204.3},0).wait(1).to({x:258.7,y:204.2},0).wait(1).to({x:265.6,y:203.9},0).wait(1).to({x:272.4,y:203.5},0).wait(1).to({x:279,y:203},0).wait(1).to({x:285.5,y:202.3},0).wait(1).to({x:291.9,y:201.5},0).wait(1).to({x:298.1,y:200.6},0).wait(1).to({x:304.2,y:199.6},0).wait(1).to({x:310.1,y:198.5},0).wait(1).to({x:315.8,y:197.4},0).wait(1).to({x:321.4,y:196.1},0).wait(1).to({x:326.5,y:194.9},0).wait(1).to({x:331.5,y:193.7},0).wait(1).to({x:336.3,y:192.3},0).wait(1).to({x:341,y:191},0).wait(1).to({x:345.6,y:189.5},0).wait(1).to({x:350,y:188.1},0).wait(1).to({x:354.4,y:186.5},0).wait(1).to({x:358.6,y:185},0).wait(1).to({x:362.6,y:183.4},0).wait(1).to({x:366.6,y:181.8},0).wait(1).to({x:370.4,y:180.2},0).wait(1).to({x:374,y:178.5},0).wait(1).to({x:377.5,y:176.8},0).wait(1).to({x:380.9,y:175.2},0).wait(1).to({x:383.9,y:173.6},0).wait(1).to({x:386.6,y:172.2},0).wait(1).to({x:389.3,y:170.7},0).wait(1).to({x:391.8,y:169.3},0).wait(1).to({x:394.2,y:167.9},0).wait(1).to({x:396.5,y:166.5},0).wait(1).to({x:398.6,y:165.1},0).wait(1).to({x:400.7,y:163.7},0).wait(1).to({x:402.7,y:162.4},0).wait(1).to({x:404.5,y:161.1},0).wait(1).to({x:406.2,y:159.8},0).wait(1).to({x:407.9,y:158.6},0).wait(1).to({x:409.4,y:157.4},0).wait(1).to({x:410.8,y:156.3},0).wait(1).to({x:412.1,y:155.2},0).wait(1).to({x:413.3,y:154.2},0).wait(1).to({x:414.4,y:153.2},0).wait(1).to({x:415.5,y:152.4},0).wait(1).to({x:416.4,y:151.5},0).wait(1).to({x:417.2,y:150.8},0).wait(1).to({x:417.9,y:150.1},0).wait(1).to({x:418.5,y:149.5},0).wait(1).to({x:419.1,y:149},0).wait(1).to({x:419.5,y:148.5},0).wait(1).to({x:419.9,y:148.1},0).wait(1).to({x:420.2,y:147.8},0).wait(1).to({x:420.4,y:147.6},0).wait(1).to({x:420.5,y:147.5},0).wait(1).to({regX:0,x:421.7,y:148.3},0).wait(1));

	// 引导层: 图层 20 复制
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AcJGAQAIgIAHgIQCoi+AAjIQgBjKirizQihiokkiBQkah9lphHQlphGl6gFQl2gEloBOQldBMkWCMQkYCNicC0QijC8AADIQAADHCwCyQCkClEpCBQEbB7FpBIQFmBHFvAHQFpAHFmhNQFchKEZiLQEFiBCbih");
	this.shape.setTransform(242.6,107);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.2,8.8,398.9,196.5);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// 图层 3
	this.instance = new lib.补间25();
	this.instance.setTransform(161.7,134.9,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:161.8,y:134.8},0).wait(1).to({x:161.9,y:134.9},0).wait(1).to({x:162},0).wait(1).to({x:162.3,y:135},0).wait(1).to({x:162.6,y:135.1},0).wait(1).to({x:162.9,y:135.2},0).wait(1).to({x:163.4,y:135.4},0).wait(1).to({x:163.9,y:135.6},0).wait(1).to({x:164.5,y:135.8},0).wait(1).to({x:165.2,y:136},0).wait(1).to({x:165.9,y:136.2},0).wait(1).to({x:166.7,y:136.5},0).wait(1).to({x:167.6,y:136.7},0).wait(1).to({x:168.6,y:137},0).wait(1).to({x:169.6,y:137.3},0).wait(1).to({x:170.7,y:137.6},0).wait(1).to({x:171.9,y:138},0).wait(1).to({x:173.2,y:138.3},0).wait(1).to({x:174.5,y:138.7},0).wait(1).to({x:176,y:139.1},0).wait(1).to({x:177.5,y:139.4},0).wait(1).to({x:179,y:139.8},0).wait(1).to({x:180.7,y:140.2},0).wait(1).to({x:182.4,y:140.6},0).wait(1).to({x:184.2,y:141},0).wait(1).to({x:186.1,y:141.4},0).wait(1).to({x:188.1,y:141.7},0).wait(1).to({x:190.1,y:142.1},0).wait(1).to({x:192.3,y:142.5},0).wait(1).to({x:194.5,y:142.9},0).wait(1).to({x:196.9,y:143.3},0).wait(1).to({x:199.4,y:143.6},0).wait(1).to({x:202,y:144},0).wait(1).to({x:204.6,y:144.3},0).wait(1).to({x:207.4,y:144.6},0).wait(1).to({x:210.2,y:144.9},0).wait(1).to({x:213.1,y:145.2},0).wait(1).to({x:216.1,y:145.4},0).wait(1).to({x:219.2,y:145.6},0).wait(1).to({x:222.4,y:145.8},0).wait(1).to({x:225.6,y:145.9},0).wait(1).to({x:229,y:146},0).wait(1).to({x:232.4,y:146.1},0).wait(1).to({x:235.9},0).wait(1).to({x:239.4},0).wait(1).to({x:243.1,y:146},0).wait(1).to({x:246.8,y:145.9},0).wait(1).to({x:250.6,y:145.7},0).wait(1).to({x:254.4,y:145.5},0).wait(1).to({x:258.1,y:145.3},0).wait(1).to({x:261.3,y:145},0).wait(1).to({x:264.7,y:144.7},0).wait(1).to({x:268.2,y:144.4},0).wait(1).to({x:271.7,y:144.1},0).wait(1).to({x:275.3,y:143.6},0).wait(1).to({x:279,y:143.2},0).wait(1).to({x:282.8,y:142.7},0).wait(1).to({x:286.7,y:142.1},0).wait(1).to({x:290.6,y:141.4},0).wait(1).to({x:294.6,y:140.7},0).wait(1).to({x:298.8,y:139.9},0).wait(1).to({x:302.9,y:138.9},0).wait(1).to({x:307.2,y:137.9},0).wait(1).to({x:311.5,y:136.8},0).wait(1).to({x:316,y:135.5},0).wait(1).to({x:320.4,y:134.1},0).wait(1).to({x:325,y:132.6},0).wait(1).to({x:329.6,y:130.8},0).wait(1).to({x:334.3,y:128.9},0).wait(1).to({x:339,y:126.8},0).wait(1).to({x:343.7,y:124.4},0).wait(1).to({x:348.4,y:121.7},0).wait(1).to({x:353.2,y:118.7},0).wait(1).to({x:357.5,y:115.6},0).wait(1).to({x:361.6,y:112.4},0).wait(1).to({x:365.5,y:108.7},0).wait(1).to({x:369.3,y:104.6},0).wait(1).to({x:372.7,y:100.1},0).wait(1).to({x:375.7,y:95},0).wait(1).to({x:377.9,y:90},0).wait(1).to({x:379.5,y:84.4},0).wait(1).to({x:380,y:78.5},0).wait(1).to({x:379.1,y:72.3},0).wait(1).to({x:375.8,y:65.6},0).wait(1).to({x:371.1,y:59.9},0).wait(1).to({x:366.4,y:55.3},0).wait(1).to({x:360.9,y:51},0).wait(1).to({x:354.9,y:46.9},0).wait(1).to({x:348.8,y:43.4},0).wait(1).to({x:342.7,y:40.3},0).wait(1).to({x:336.8,y:37.6},0).wait(1).to({x:330.8,y:35},0).wait(1).to({x:324.5,y:32.7},0).wait(1).to({x:318.1,y:30.5},0).wait(1).to({x:311.8,y:28.6},0).wait(1).to({x:305.4,y:26.8},0).wait(1).to({x:299.1,y:25.3},0).wait(1).to({x:292.8,y:23.9},0).wait(1).to({x:286.6,y:22.7},0).wait(1).to({x:280.3,y:21.7},0).wait(1).to({x:274,y:20.8},0).wait(1).to({x:267.7,y:20.1},0).wait(1).to({x:261.5,y:19.6},0).wait(1).to({x:255.2,y:19.1},0).wait(1).to({x:248.9,y:18.9},0).wait(1).to({x:242.7,y:18.8},0).wait(1).to({x:236.6},0).wait(1).to({x:230.6,y:19},0).wait(1).to({x:224.6,y:19.4},0).wait(1).to({x:218.6,y:19.8},0).wait(1).to({x:212.7,y:20.5},0).wait(1).to({x:206.8,y:21.2},0).wait(1).to({x:201,y:22.1},0).wait(1).to({x:195.3,y:23.1},0).wait(1).to({x:189.6,y:24.3},0).wait(1).to({x:184.1,y:25.5},0).wait(1).to({x:178.9,y:26.8},0).wait(1).to({x:173.9,y:28.2},0).wait(1).to({x:168.9,y:29.8},0).wait(1).to({x:163.9,y:31.4},0).wait(1).to({x:159,y:33.2},0).wait(1).to({x:154.2,y:35.1},0).wait(1).to({x:149.5,y:37.2},0).wait(1).to({x:144.9,y:39.3},0).wait(1).to({x:140.4,y:41.6},0).wait(1).to({x:136.7,y:43.6},0).wait(1).to({x:132.9,y:45.9},0).wait(1).to({x:129.2,y:48.2},0).wait(1).to({x:125.7,y:50.7},0).wait(1).to({x:122.3,y:53.4},0).wait(1).to({x:119,y:56.2},0).wait(1).to({x:115.9,y:59.3},0).wait(1).to({x:113,y:62.5},0).wait(1).to({x:110.8,y:65.3},0).wait(1).to({x:108.8,y:68.3},0).wait(1).to({x:107.1,y:71.5},0).wait(1).to({x:105.7,y:74.9},0).wait(1).to({x:104.8,y:78.5},0).wait(1).to({x:104.5,y:82.3},0).wait(1).to({x:104.6,y:86},0).wait(1).to({x:105.4,y:89.9},0).wait(1).to({x:106.7,y:93.8},0).wait(1).to({x:108.4,y:97.3},0).wait(1).to({x:110.3,y:100.5},0).wait(1).to({x:112.3,y:103.3},0).wait(1).to({x:114.4,y:105.9},0).wait(1).to({x:116.5,y:108.2},0).wait(1).to({x:118.8,y:110.5},0).wait(1).to({x:121.2,y:112.8},0).wait(1).to({x:123.6,y:114.8},0).wait(1).to({x:125.9,y:116.6},0).wait(1).to({x:128.2,y:118.3},0).wait(1).to({x:130.4,y:119.8},0).wait(1).to({x:132.6,y:121.2},0).wait(1).to({x:134.6,y:122.5},0).wait(1).to({x:136.6,y:123.6},0).wait(1).to({x:138.5,y:124.7},0).wait(1).to({x:140.3,y:125.6},0).wait(1).to({x:142,y:126.5},0).wait(1).to({x:143.6,y:127.3},0).wait(1).to({x:145.1,y:128.1},0).wait(1).to({x:146.6,y:128.8},0).wait(1).to({x:148,y:129.4},0).wait(1).to({x:149.3,y:130},0).wait(1).to({x:150.5,y:130.5},0).wait(1).to({x:151.6,y:131},0).wait(1).to({x:152.7,y:131.4},0).wait(1).to({x:153.6,y:131.8},0).wait(1).to({x:154.5,y:132.2},0).wait(1).to({x:155.3,y:132.5},0).wait(1).to({x:156,y:132.7},0).wait(1).to({x:156.6,y:133},0).wait(1).to({x:157.1,y:133.2},0).wait(1).to({x:157.6,y:133.4},0).wait(1).to({x:158,y:133.5},0).wait(1).to({x:158.2,y:133.6},0).wait(1).to({x:158.4,y:133.7},0).wait(1).to({x:158.6},0).wait(1).to({y:133.8},0).wait(1));

	// 引导层: 图层 23 复制
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AsuIIQCPAyCnAdQEjAzFIgTQJ4gmFYjbQCQhcBLhyQBEhoAAhpQAAhjhwhrQhthojAhXQjHhajyg0QkFg3kLAAQkPAAkCA5QjyA1jDBeQi+BchrByQhuB0AABwQAAB2BoB3QBrB5C/BdQBDAgBJAa");
	this.shape.setTransform(242.3,82.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103.5,17.8,277.6,138);


(lib.补间27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//send myself
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_MC_OBJ,
			{obj:this,name:'star1'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 1
	this.instance = new lib.元件41();
	this.instance.setTransform(0.1,0,1,1,0,0,0,5.5,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-6.5,13.3,13);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件10();
	this.instance.setTransform(140.4,46.3,1,1,0,0,0,243.8,66.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,-1.3,276.1,137.3);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件11();
	this.instance.setTransform(201.3,55.1,1,1,0,0,0,244.3,66.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,-1.8,397.9,195.5);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件12();
	this.instance.setTransform(245.2,66.1,1,1,0,0,0,244.1,66.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,0.6,482.4,198.6);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// 图层 3
	this.instance = new lib.补间27();
	this.instance.setTransform(315.2,80.6,2.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-0.1,y:80.3},0).wait(2).to({x:315.3,y:80.2},0).wait(2).to({x:315.4,y:80.1},0).wait(1).to({x:315.5,y:79.9},0).wait(1).to({x:315.7,y:79.8},0).wait(1).to({x:315.8,y:79.6},0).wait(1).to({x:316,y:79.4},0).wait(1).to({x:316.2,y:79.2},0).wait(1).to({x:316.4,y:78.9},0).wait(1).to({x:316.6,y:78.7},0).wait(1).to({x:316.8,y:78.3},0).wait(1).to({x:317.1,y:78},0).wait(1).to({x:317.3,y:77.6},0).wait(1).to({x:317.6,y:77.2},0).wait(1).to({x:317.8,y:76.8},0).wait(1).to({x:318.1,y:76.3},0).wait(1).to({x:318.4,y:75.8},0).wait(1).to({x:318.6,y:75.3},0).wait(1).to({x:318.9,y:74.7},0).wait(1).to({x:319.2,y:74.1},0).wait(1).to({x:319.5,y:73.5},0).wait(1).to({x:319.7,y:72.7},0).wait(1).to({x:320,y:72},0).wait(1).to({x:320.2,y:71.1},0).wait(1).to({x:320.4,y:70.2},0).wait(1).to({x:320.6,y:69.3},0).wait(1).to({y:68.3},0).wait(1).to({y:67.2},0).wait(1).to({x:320.5,y:65.9},0).wait(1).to({x:320.1,y:64.4},0).wait(1).to({x:319.5,y:62.9},0).wait(1).to({x:318.8,y:61.5},0).wait(1).to({x:318,y:60.1},0).wait(1).to({x:317.1,y:58.9},0).wait(1).to({x:316.2,y:57.7},0).wait(1).to({x:315.3,y:56.5},0).wait(1).to({x:314.3,y:55.4},0).wait(1).to({x:313.1,y:54.2},0).wait(1).to({x:311.8,y:53},0).wait(1).to({x:310.5,y:51.9},0).wait(1).to({x:309,y:50.7},0).wait(1).to({x:307.5,y:49.7},0).wait(1).to({x:305.9,y:48.7},0).wait(1).to({x:304.2,y:47.7},0).wait(1).to({x:302.5,y:46.8},0).wait(1).to({x:300.7,y:46},0).wait(1).to({x:298.9,y:45.2},0).wait(1).to({x:296.8,y:44.3},0).wait(1).to({x:294.5,y:43.4},0).wait(1).to({x:292.2,y:42.6},0).wait(1).to({x:289.8,y:41.8},0).wait(1).to({x:287.3,y:41},0).wait(1).to({x:284.8,y:40.3},0).wait(1).to({x:282.2,y:39.7},0).wait(1).to({x:279.5,y:39.1},0).wait(1).to({x:276.9,y:38.5},0).wait(1).to({x:274.2,y:38},0).wait(1).to({x:271.4,y:37.5},0).wait(1).to({x:268.6,y:37.1},0).wait(1).to({x:265.8,y:36.7},0).wait(1).to({x:262.9,y:36.4},0).wait(1).to({x:260,y:36.1},0).wait(1).to({x:257.1,y:35.9},0).wait(1).to({x:254.1,y:35.7},0).wait(1).to({x:251.2,y:35.5},0).wait(1).to({x:248.2,y:35.4},0).wait(1).to({x:245.1},0).wait(1).to({x:242.1},0).wait(1).to({x:239},0).wait(1).to({x:236.4},0).wait(1).to({x:233.7,y:35.5},0).wait(1).to({x:230.9,y:35.6},0).wait(1).to({x:228.1,y:35.8},0).wait(1).to({x:225.2,y:36.1},0).wait(1).to({x:222.3,y:36.3},0).wait(1).to({x:219.3,y:36.7},0).wait(1).to({x:216.3,y:37.1},0).wait(1).to({x:213.2,y:37.6},0).wait(1).to({x:210.1,y:38.2},0).wait(1).to({x:207,y:38.8},0).wait(1).to({x:203.8,y:39.6},0).wait(1).to({x:200.5,y:40.5},0).wait(1).to({x:197.3,y:41.5},0).wait(1).to({x:194,y:42.6},0).wait(1).to({x:190.7,y:43.8},0).wait(1).to({x:187.4,y:45.3},0).wait(1).to({x:184.1,y:46.8},0).wait(1).to({x:180.9,y:48.6},0).wait(1).to({x:178.1,y:50.3},0).wait(1).to({x:175.3,y:52.2},0).wait(1).to({x:172.6,y:54.4},0).wait(1).to({x:170,y:56.8},0).wait(1).to({x:167.7,y:59.7},0).wait(1).to({x:165.9,y:62.5},0).wait(1).to({x:164.7,y:65.6},0).wait(1).to({x:164.2,y:69.2},0).wait(1).to({x:164.8,y:73},0).wait(1).to({x:166.5,y:76.8},0).wait(1).to({x:169.1,y:80.2},0).wait(1).to({x:171.8,y:82.9},0).wait(1).to({x:175.3,y:85.6},0).wait(1).to({x:178.9,y:87.9},0).wait(1).to({x:182.5,y:89.8},0).wait(1).to({x:185.9,y:91.5},0).wait(1).to({x:189.6,y:93},0).wait(1).to({x:193.8,y:94.4},0).wait(1).to({x:198.1,y:95.7},0).wait(1).to({x:202.3,y:96.8},0).wait(1).to({x:206.4,y:97.8},0).wait(1).to({x:210.5,y:98.5},0).wait(1).to({x:214.5,y:99.1},0).wait(1).to({x:218.4,y:99.6},0).wait(1).to({x:222.1,y:100},0).wait(1).to({x:225.8,y:100.3},0).wait(1).to({x:229.5,y:100.6},0).wait(1).to({x:233,y:100.7},0).wait(1).to({x:236.4,y:100.8},0).wait(1).to({x:239.8},0).wait(1).to({x:243},0).wait(1).to({x:246.2,y:100.7},0).wait(1).to({x:249.3,y:100.6},0).wait(1).to({x:251.4},0).wait(1).to({x:253.7,y:100.5},0).wait(1).to({x:256,y:100.3},0).wait(1).to({x:258.2,y:100.2},0).wait(1).to({x:260.3,y:100.1},0).wait(1).to({x:262.5,y:99.9},0).wait(1).to({x:264.6,y:99.7},0).wait(1).to({x:266.6,y:99.5},0).wait(1).to({x:268.6,y:99.3},0).wait(1).to({x:270.6,y:99.1},0).wait(1).to({x:272.6,y:98.8},0).wait(1).to({x:274.5,y:98.6},0).wait(1).to({x:276.4,y:98.3},0).wait(1).to({x:278.2,y:98},0).wait(1).to({x:280,y:97.7},0).wait(1).to({x:281.8,y:97.3},0).wait(1).to({x:283.5,y:97},0).wait(1).to({x:285.2,y:96.6},0).wait(1).to({x:286.8,y:96.2},0).wait(1).to({x:288.4,y:95.7},0).wait(1).to({x:290,y:95.3},0).wait(1).to({x:291.5,y:94.8},0).wait(1).to({x:293,y:94.3},0).wait(1).to({x:294.4,y:93.7},0).wait(1).to({x:295.8,y:93.2},0).wait(1).to({x:297.1,y:92.5},0).wait(1).to({x:298.4,y:91.9},0).wait(1).to({x:299.7,y:91.2},0).wait(1).to({x:300.7,y:90.6},0).wait(1).to({x:301.6,y:90.1},0).wait(1).to({x:302.5,y:89.5},0).wait(1).to({x:303.4,y:89},0).wait(1).to({x:304.2,y:88.5},0).wait(1).to({x:305,y:88},0).wait(1).to({x:305.8,y:87.6},0).wait(1).to({x:306.5,y:87.1},0).wait(1).to({x:307.2,y:86.7},0).wait(1).to({x:307.8,y:86.2},0).wait(1).to({x:308.4,y:85.8},0).wait(1).to({x:309,y:85.4},0).wait(1).to({x:309.6,y:85},0).wait(1).to({x:310.1,y:84.7},0).wait(1).to({x:310.5,y:84.3},0).wait(1).to({x:310.9,y:84},0).wait(1).to({x:311.3,y:83.7},0).wait(1).to({x:311.7,y:83.4},0).wait(1).to({x:312,y:83.2},0).wait(1).to({x:312.3,y:83},0).wait(1).to({x:312.5,y:82.8},0).wait(1).to({x:312.8,y:82.6},0).wait(1).to({x:312.9,y:82.4},0).wait(1).to({x:313.1,y:82.3},0).wait(1).to({x:313.2,y:82.2},0).wait(1).to({x:313.3,y:82.1},0).wait(2).to({regY:0,x:314.1,y:83.1},0).wait(1));

	// 引导层: 图层 26 复制
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("ALXB6QALgLAGgKQAmg4AAgvQAAgyg4hAQg3hAhhgrQjohnlaAAQlfAAjiBzQhgAwg1A9QgzA6AAA2QAAA5AzA4QA2A7BlAuQDvBsF3gKQF6gKCRhQQBog5Awgt");
	this.shape.setTransform(242.4,68.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(163.2,34.6,167.9,67.5);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件9();
	this.instance.setTransform(80.4,30.9,1,1,0,0,0,244.2,66.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.2,167.2,66);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 17
	this.instance = new lib.元件13();
	this.instance.setTransform(241.3,99,1,1,0,0,0,242.3,99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 16
	this.instance_1 = new lib.元件14();
	this.instance_1.setTransform(242.1,107.6,1,1,0,0,0,199,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 15
	this.instance_2 = new lib.元件15();
	this.instance_2.setTransform(241.9,82.9,1,1,0,0,0,138.5,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层 12
	this.instance_3 = new lib.元件16();
	this.instance_3.setTransform(242.9,78.5,1,1,0,0,0,79,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,0.6,482.4,204.2);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件8();
	this.instance.setTransform(69,40.5,1,1,0,0,0,67.9,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,0.6,482.4,204.2);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 28 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AopFVIAAqpIRTAAIAAKpg");
	mask.setTransform(244.1,52.8);

	// a8 (1).png  复制 2
	this.instance = new lib.元件22();
	this.instance.setTransform(243.8,65.9,1,1,0,0,0,51.9,46);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 29
	this.instance_1 = new lib.元件17();
	this.instance_1.setTransform(241.5,102.2,1,1,0,0,0,242.3,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 28 复制 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AqxENIAAoZIVjAAIAAIZg");
	mask_1.setTransform(244.1,113.8);

	// a8 (1).png 复制
	this.instance_2 = new lib.元件22();
	this.instance_2.setTransform(243.8,65.9,1,1,0,0,0,51.9,46);

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0.8,482.4,204.2);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件7();
	this.instance.setTransform(242.3,101.8,1,1,0,0,0,241.5,102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,0.6,482.4,204.2);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.gotoAndPlay (100)
		
		this.stop();
	}
	this.frame_93 = function() {
		playSound("p2Wave0");
	}
	this.frame_153 = function() {
		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_PLAY_NEXT_PAGE,
			{id:'2',action:'nextFrame'}
		);
	}
	this.frame_263 = function() {
		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_PLAY_NEXT_PAGE,
			{id:'2',action:'nextFrame'}
		);
	}
	this.frame_306 = function() {
		playSound("p2Wave1");
	}
	this.frame_338 = function() {
		playSound("p2Wave1");
	}
	this.frame_365 = function() {
		playSound("p2Wave1");
	}
	this.frame_383 = function() {
		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_PLAY_NEXT_PAGE,
			{id:'2',action:'nextFrame'}
		);
	}
	this.frame_506 = function() {
		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_PLAY_NEXT_PAGE,
			{id:'2',action:'nextPage'}
		);
	}
	this.frame_665 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(93).call(this.frame_93).wait(60).call(this.frame_153).wait(110).call(this.frame_263).wait(43).call(this.frame_306).wait(32).call(this.frame_338).wait(27).call(this.frame_365).wait(18).call(this.frame_383).wait(123).call(this.frame_506).wait(159).call(this.frame_665).wait(1));

	// a11 (2).png
	this.instance = new lib.补间51("synched",0);
	this.instance.setTransform(434.1,238.4,1.116,1.116);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.补间52("synched",0);
	this.instance_1.setTransform(434.1,217,1.116,1.116);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},544).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(544).to({_off:false},0).wait(1).to({regX:-29,regY:-41.5,x:401.8,y:188.6,alpha:0.161},0).wait(1).to({y:186.4,alpha:0.264},0).wait(1).to({y:184.7,alpha:0.344},0).wait(1).to({y:183.3,alpha:0.41},0).wait(1).to({y:182.1,alpha:0.466},0).wait(1).to({y:181,alpha:0.516},0).wait(1).to({y:180.1,alpha:0.56},0).wait(1).to({y:179.2,alpha:0.6},0).wait(1).to({y:178.4,alpha:0.636},0).wait(1).to({y:177.7,alpha:0.669},0).wait(1).to({y:177.1,alpha:0.7},0).wait(1).to({y:176.5,alpha:0.728},0).wait(1).to({y:175.9,alpha:0.754},0).wait(1).to({y:175.4,alpha:0.778},0).wait(1).to({y:174.9,alpha:0.8},0).wait(1).to({y:174.5,alpha:0.82},0).wait(1).to({y:174.1,alpha:0.84},0).wait(1).to({y:173.7,alpha:0.857},0).wait(1).to({y:173.4,alpha:0.874},0).wait(1).to({y:173,alpha:0.889},0).wait(1).to({y:172.7,alpha:0.903},0).wait(1).to({y:172.4,alpha:0.916},0).wait(1).to({y:172.2,alpha:0.928},0).wait(1).to({y:172,alpha:0.939},0).wait(1).to({y:171.7,alpha:0.949},0).wait(1).to({y:171.6,alpha:0.958},0).wait(1).to({y:171.4,alpha:0.966},0).wait(1).to({y:171.2,alpha:0.973},0).wait(1).to({y:171.1,alpha:0.979},0).wait(1).to({y:171,alpha:0.985},0).wait(1).to({y:170.9,alpha:0.99},0).wait(1).to({y:170.8,alpha:0.993},0).wait(1).to({y:170.7,alpha:0.996},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(86));

	// 图层 23
	this.instance_2 = new lib.补间66("synched",0);
	this.instance_2.setTransform(372.5,493.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.补间67("synched",0);
	this.instance_3.setTransform(372.5,493.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},594).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(594).to({_off:false},0).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.01},0).wait(1).to({alpha:0.018},0).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.079},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.157},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.226},0).wait(1).to({alpha:0.265},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.501},0).wait(1).to({alpha:0.552},0).wait(1).to({alpha:0.602},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.787},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.918},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.975},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:0.999},0).to({_off:true},1).wait(36));

	// a11 (3).png
	this.instance_4 = new lib.补间56("synched",0);
	this.instance_4.setTransform(620.4,321.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(567).to({_off:false},0).wait(1).to({regX:-205.5,regY:71.5,x:414.8,y:393.3,alpha:0.001},0).wait(1).to({alpha:0.005},0).wait(1).to({alpha:0.011},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.032},0).wait(1).to({alpha:0.047},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.108},0).wait(1).to({alpha:0.135},0).wait(1).to({alpha:0.164},0).wait(1).to({alpha:0.197},0).wait(1).to({alpha:0.232},0).wait(1).to({alpha:0.27},0).wait(1).to({alpha:0.311},0).wait(1).to({alpha:0.354},0).wait(1).to({alpha:0.399},0).wait(1).to({alpha:0.445},0).wait(1).to({alpha:0.493},0).wait(1).to({alpha:0.541},0).wait(1).to({alpha:0.589},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.808},0).wait(1).to({alpha:0.845},0).wait(1).to({alpha:0.877},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.953},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.983},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.998},0).wait(1).to({regX:0,regY:0,x:620.4,y:321.8,alpha:1},0).wait(63));

	// share_btn
	this.instance_5 = new lib.补间57();
	this.instance_5.setTransform(476.9,852.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(616).to({_off:false},0).wait(1).to({regX:-78,regY:-39,x:398.9,y:810.7,alpha:0.089},0).wait(1).to({y:809,alpha:0.146},0).wait(1).to({y:807.7,alpha:0.189},0).wait(1).to({y:806.7,alpha:0.226},0).wait(1).to({y:805.8,alpha:0.257},0).wait(1).to({y:805,alpha:0.284},0).wait(1).to({y:804.3,alpha:0.308},0).wait(1).to({y:803.7,alpha:0.33},0).wait(1).to({y:803.1,alpha:0.35},0).wait(1).to({y:802.5,alpha:0.369},0).wait(1).to({y:802.1,alpha:0.385},0).wait(1).to({y:801.6,alpha:0.401},0).wait(1).to({y:801.2,alpha:0.415},0).wait(1).to({y:800.8,alpha:0.428},0).wait(1).to({y:800.5,alpha:0.441},0).wait(1).to({y:800.1,alpha:0.452},0).wait(1).to({y:799.8,alpha:0.462},0).wait(1).to({y:799.5,alpha:0.472},0).wait(1).to({y:799.3,alpha:0.481},0).wait(1).to({y:799,alpha:0.49},0).wait(1).to({y:798.8,alpha:0.497},0).wait(1).to({y:798.6,alpha:0.505},0).wait(1).to({y:798.4,alpha:0.511},0).wait(1).to({y:798.2,alpha:0.517},0).wait(1).to({y:798.1,alpha:0.523},0).wait(1).to({y:797.9,alpha:0.528},0).wait(1).to({y:797.8,alpha:0.532},0).wait(1).to({y:797.7,alpha:0.536},0).wait(1).to({y:797.6,alpha:0.539},0).wait(1).to({y:797.5,alpha:0.542},0).wait(1).to({y:797.4,alpha:0.545},0).wait(1).to({alpha:0.547},0).wait(1).to({y:797.3,alpha:0.549},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.551},0).wait(1).to({regX:0,regY:0,x:476.9,y:836.3},0).wait(14));

	// 图层 5
	this.instance_6 = new lib.补间107("synched",0);
	this.instance_6.setTransform(399.1,820.5,0.002,1);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间108("synched",0);
	this.instance_7.setTransform(399.1,820.5);
	this.instance_7.alpha = 0.551;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},621).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(621).to({_off:false},0).wait(1).to({scaleX:0,alpha:0.999},0).wait(1).to({scaleX:0.01,alpha:0.998},0).wait(1).to({scaleX:0.01,alpha:0.995},0).wait(1).to({scaleX:0.02,alpha:0.991},0).wait(1).to({scaleX:0.03,alpha:0.986},0).wait(1).to({scaleX:0.05,alpha:0.979},0).wait(1).to({scaleX:0.07,alpha:0.971},0).wait(1).to({scaleX:0.09,alpha:0.962},0).wait(1).to({scaleX:0.11,alpha:0.951},0).wait(1).to({scaleX:0.14,alpha:0.938},0).wait(1).to({scaleX:0.17,alpha:0.923},0).wait(1).to({scaleX:0.21,alpha:0.907},0).wait(1).to({scaleX:0.25,alpha:0.889},0).wait(1).to({scaleX:0.29,alpha:0.869},0).wait(1).to({scaleX:0.34,alpha:0.848},0).wait(1).to({scaleX:0.39,alpha:0.825},0).wait(1).to({scaleX:0.44,alpha:0.802},0).wait(1).to({scaleX:0.5,alpha:0.778},0).wait(1).to({scaleX:0.55,alpha:0.755},0).wait(1).to({scaleX:0.6,alpha:0.731},0).wait(1).to({scaleX:0.65,alpha:0.708},0).wait(1).to({scaleX:0.7,alpha:0.687},0).wait(1).to({scaleX:0.74,alpha:0.667},0).wait(1).to({scaleX:0.78,alpha:0.648},0).wait(1).to({scaleX:0.82,alpha:0.631},0).wait(1).to({scaleX:0.86,alpha:0.616},0).wait(1).to({scaleX:0.89,alpha:0.602},0).wait(1).to({scaleX:0.91,alpha:0.591},0).wait(1).to({scaleX:0.93,alpha:0.581},0).wait(1).to({scaleX:0.95,alpha:0.572},0).wait(1).to({scaleX:0.97,alpha:0.565},0).wait(1).to({scaleX:0.98,alpha:0.56},0).wait(1).to({scaleX:0.99,alpha:0.556},0).wait(1).to({scaleX:1,alpha:0.553},0).wait(1).to({scaleX:1,alpha:0.551},0).to({_off:true},1).wait(9));

	// a11 (5).png
	this.instance_8 = new lib.补间59("synched",0);
	this.instance_8.setTransform(423,860.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.补间60("synched",0);
	this.instance_9.setTransform(423,844.7);
	this.instance_9.alpha = 0.551;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},629).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(629).to({_off:false},0).wait(1).to({regX:-22,regY:-2.5,x:401,y:855.6,alpha:0.089},0).wait(1).to({y:853.9,alpha:0.146},0).wait(1).to({y:852.6,alpha:0.189},0).wait(1).to({y:851.6,alpha:0.226},0).wait(1).to({y:850.7,alpha:0.257},0).wait(1).to({y:849.9,alpha:0.284},0).wait(1).to({y:849.2,alpha:0.308},0).wait(1).to({y:848.6,alpha:0.33},0).wait(1).to({y:848,alpha:0.35},0).wait(1).to({y:847.4,alpha:0.369},0).wait(1).to({y:847,alpha:0.385},0).wait(1).to({y:846.5,alpha:0.401},0).wait(1).to({y:846.1,alpha:0.415},0).wait(1).to({y:845.7,alpha:0.428},0).wait(1).to({y:845.4,alpha:0.441},0).wait(1).to({y:845,alpha:0.452},0).wait(1).to({y:844.7,alpha:0.462},0).wait(1).to({y:844.4,alpha:0.472},0).wait(1).to({y:844.2,alpha:0.481},0).wait(1).to({y:843.9,alpha:0.49},0).wait(1).to({y:843.7,alpha:0.497},0).wait(1).to({y:843.5,alpha:0.505},0).wait(1).to({y:843.3,alpha:0.511},0).wait(1).to({y:843.1,alpha:0.517},0).wait(1).to({y:843,alpha:0.523},0).wait(1).to({y:842.8,alpha:0.528},0).wait(1).to({y:842.7,alpha:0.532},0).wait(1).to({y:842.6,alpha:0.536},0).wait(1).to({y:842.5,alpha:0.539},0).wait(1).to({y:842.4,alpha:0.542},0).wait(1).to({y:842.3,alpha:0.545},0).wait(1).to({alpha:0.547},0).wait(1).to({y:842.2,alpha:0.549},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.551},0).to({_off:true},1).wait(1));

	// man
	this.instance_10 = new lib.元件4();
	this.instance_10.setTransform(388.1,312.6,0.9,0.9,0,0,0,40,50);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(456).to({_off:false},0).wait(51).to({regX:0,regY:0,x:352.1,y:267.6},0).wait(1).to({y:267.8},0).wait(1).to({y:268.1},0).wait(1).to({y:268.5},0).wait(1).to({y:269.1},0).wait(1).to({y:269.7},0).wait(1).to({y:270.5},0).wait(1).to({y:271.5},0).wait(1).to({y:272.5},0).wait(1).to({x:352,y:273.7},0).wait(1).to({y:275},0).wait(1).to({y:276.4},0).wait(1).to({y:277.9},0).wait(1).to({y:279.6},0).wait(1).to({y:281.4},0).wait(1).to({y:283.3},0).wait(1).to({y:285.4},0).wait(1).to({x:351.9,y:287.5},0).wait(1).to({y:289.8},0).wait(1).to({y:292.3},0).wait(1).to({y:294.8},0).wait(1).to({y:297.5},0).wait(1).to({x:351.8,y:300.3},0).wait(1).to({y:303.2},0).wait(1).to({y:306.2},0).wait(1).to({y:309.3},0).wait(1).to({x:351.7,y:312.6},0).wait(1).to({y:316},0).wait(1).to({y:319.5},0).wait(1).to({x:351.6,y:323.1},0).wait(1).to({y:326.8},0).wait(1).to({y:330.7},0).wait(1).to({y:334.6},0).wait(1).to({x:351.5,y:338.7},0).wait(1).to({y:342.8},0).wait(1).to({y:347.1},0).wait(1).to({x:351.4,y:351.4},0).wait(1).to({y:355.9},0).wait(1).to({x:351.3,y:360.4},0).wait(1).to({y:365},0).wait(1).to({y:369.7},0).wait(1).to({x:351.2,y:374.5},0).wait(1).to({y:379.4},0).wait(1).to({x:351.1,y:384.4},0).wait(1).to({y:389.4},0).wait(1).to({y:394.5},0).wait(1).to({x:351,y:399.6},0).wait(1).to({y:404.9},0).wait(1).to({x:350.9,y:410.1},0).wait(1).to({y:415.5},0).wait(1).to({x:350.8,y:420.8},0).wait(1).to({y:426.2},0).wait(1).to({y:431.7},0).wait(1).to({x:350.7,y:437.2},0).wait(1).to({y:442.7},0).wait(1).to({x:350.6,y:448.2},0).wait(1).to({y:453.7},0).wait(1).to({x:350.5,y:459.3},0).wait(1).to({y:464.8},0).wait(1).to({x:350.4,y:470.4},0).wait(1).to({y:475.9},0).wait(1).to({y:481.5},0).wait(1).to({x:350.3,y:487},0).wait(1).to({y:492.5},0).wait(1).to({x:350.2,y:497.9},0).wait(1).to({y:503.4},0).wait(1).to({x:350.1,y:508.8},0).wait(1).to({y:514.1},0).wait(1).to({x:350,y:519.4},0).wait(1).to({y:524.7},0).wait(1).to({y:529.9},0).wait(1).to({x:349.9,y:535},0).wait(1).to({y:540.1},0).wait(1).to({x:349.8,y:545.1},0).wait(1).to({y:550},0).wait(1).to({y:554.8},0).wait(1).to({x:349.7,y:559.5},0).wait(1).to({y:564.2},0).wait(1).to({x:349.6,y:568.7},0).wait(1).to({y:573.2},0).wait(1).to({y:577.5},0).wait(1).to({x:349.5,y:581.7},0).wait(1).to({y:585.9},0).wait(1).to({y:589.9},0).wait(1).to({x:349.4,y:593.8},0).wait(1).to({y:597.5},0).wait(1).to({y:601.2},0).wait(1).to({x:349.3,y:604.7},0).wait(1).to({y:608.1},0).wait(1).to({y:611.4},0).wait(1).to({y:614.5},0).wait(1).to({x:349.2,y:617.5},0).wait(1).to({y:620.3},0).wait(1).to({y:623.1},0).wait(1).to({y:625.6},0).wait(1).to({y:628.1},0).wait(1).to({x:349.1,y:630.4},0).wait(1).to({y:632.5},0).wait(1).to({y:634.5},0).wait(1).to({y:636.4},0).wait(1).to({y:638.1},0).wait(1).to({y:639.6},0).wait(1).to({x:349,y:641},0).wait(1).to({y:642.3},0).wait(1).to({y:643.4},0).wait(1).to({y:644.4},0).wait(1).to({y:645.2},0).wait(1).to({y:645.9},0).wait(1).to({y:646.4},0).wait(1).to({y:646.8},0).wait(1).to({y:647},0).wait(1).to({regX:40,regY:50,x:385,y:692.1},0).wait(48));

	// man
	this.instance_11 = new lib.元件4();
	this.instance_11.setTransform(392,512.8,1,1,0,0,0,40,50);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).to({x:390.4,y:447.3,alpha:1},32).to({x:387.3,y:327},43).wait(1).to({regX:0,regY:0,x:347.3,y:262.6},0).wait(1).to({y:249.9},0).wait(1).to({y:238.5},0).wait(1).to({y:228.2},0).wait(1).to({y:218.7},0).wait(1).to({y:210},0).wait(1).to({y:201.9},0).wait(1).to({y:194.4},0).wait(1).to({y:187.3},0).wait(1).to({y:180.8},0).wait(1).to({y:174.6},0).wait(1).to({y:168.8},0).wait(1).to({y:163.4},0).wait(1).to({y:158.2},0).wait(1).to({y:153.3},0).wait(1).to({y:148.7},0).wait(1).to({y:144.4},0).wait(1).to({y:140.2},0).wait(1).to({y:136.3},0).wait(1).to({y:132.6},0).wait(1).to({y:129.1},0).wait(1).to({y:125.7},0).wait(1).to({y:122.5},0).wait(1).to({y:119.5},0).wait(1).to({y:116.6},0).wait(1).to({y:113.9},0).wait(1).to({y:111.3},0).wait(1).to({y:108.8},0).wait(1).to({y:106.5},0).wait(1).to({y:104.2},0).wait(1).to({y:102.1},0).wait(1).to({y:100.1},0).wait(1).to({y:98.2},0).wait(1).to({y:96.4},0).wait(1).to({y:94.7},0).wait(1).to({y:93.1},0).wait(1).to({y:91.5},0).wait(1).to({y:90.1},0).wait(1).to({y:88.7},0).wait(1).to({y:87.5},0).wait(1).to({y:86.2},0).wait(1).to({y:85.1},0).wait(1).to({y:84},0).wait(1).to({y:83.1},0).wait(1).to({y:82.1},0).wait(1).to({y:81.3},0).wait(1).to({y:80.5},0).wait(1).to({y:79.7},0).wait(1).to({y:79},0).wait(1).to({y:78.4},0).wait(1).to({y:77.9},0).wait(1).to({y:77.3},0).wait(1).to({y:76.9},0).wait(1).to({y:76.5},0).wait(1).to({y:76.1},0).wait(1).to({y:75.8},0).wait(1).to({y:75.5},0).wait(1).to({y:75.3},0).wait(1).to({y:75.1},0).wait(1).to({y:75},0).wait(1).to({y:74.9},0).wait(1).to({y:74.8},0).wait(1).to({regX:40,regY:50,x:387.3,y:124.8},0).wait(2).to({regX:0,regY:0,x:347.2,y:74.9},0).wait(1).to({y:75.2},0).wait(1).to({y:75.6},0).wait(1).to({y:76.2},0).wait(1).to({y:77.1},0).wait(1).to({y:78.1},0).wait(1).to({y:79.4},0).wait(1).to({y:80.9},0).wait(1).to({y:82.6},0).wait(1).to({y:84.6},0).wait(1).to({y:86.8},0).wait(1).to({y:89.3},0).wait(1).to({y:92},0).wait(1).to({y:95.1},0).wait(1).to({y:98.4},0).wait(1).to({y:102.1},0).wait(1).to({y:106},0).wait(1).to({y:110.4},0).wait(1).to({y:115},0).wait(1).to({y:120},0).wait(1).to({y:125.4},0).wait(1).to({x:347.1,y:131.2},0).wait(1).to({y:137.3},0).wait(1).to({y:143.9},0).wait(1).to({y:150.8},0).wait(1).to({y:158.2},0).wait(1).to({y:165.9},0).wait(1).to({y:174},0).wait(1).to({y:182.5},0).wait(1).to({x:347,y:191.3},0).wait(1).to({y:200.4},0).wait(1).to({y:209.9},0).wait(1).to({y:219.5},0).wait(1).to({y:229.4},0).wait(1).to({x:346.9,y:239.3},0).wait(1).to({y:249.4},0).wait(1).to({y:259.4},0).wait(1).to({y:269.4},0).wait(1).to({y:279.2},0).wait(1).to({y:288.8},0).wait(1).to({x:346.8,y:298.1},0).wait(1).to({y:307.2},0).wait(1).to({y:315.9},0).wait(1).to({y:324.2},0).wait(1).to({y:332},0).wait(1).to({y:339.5},0).wait(1).to({y:346.4},0).wait(1).to({x:346.7,y:353},0).wait(1).to({y:359.1},0).wait(1).to({y:364.7},0).wait(1).to({y:369.9},0).wait(1).to({y:374.6},0).wait(1).to({y:378.9},0).wait(1).to({y:382.8},0).wait(1).to({y:386.3},0).wait(1).to({y:389.5},0).wait(1).to({y:392.3},0).wait(1).to({y:394.7},0).wait(1).to({y:396.8},0).wait(1).to({y:398.5},0).wait(1).to({y:400},0).wait(1).to({y:401.2},0).wait(1).to({y:402},0).wait(1).to({y:402.7},0).wait(1).to({y:403},0).wait(1).to({regX:40,regY:50,x:386.7,y:453.2},0).wait(1).to({regX:0,regY:0,x:346.7,y:403.1},0).wait(1).to({y:403},0).wait(1).to({y:402.8},0).wait(1).to({y:402.5},0).wait(1).to({y:402.1},0).wait(1).to({y:401.6},0).wait(1).to({y:401},0).wait(1).to({y:400.3},0).wait(1).to({y:399.4},0).wait(1).to({y:398.5},0).wait(1).to({y:397.4},0).wait(1).to({y:396.3},0).wait(1).to({y:395},0).wait(1).to({y:393.6},0).wait(1).to({y:392.1},0).wait(1).to({y:390.4},0).wait(1).to({y:388.7},0).wait(1).to({y:386.8},0).wait(1).to({y:384.9},0).wait(1).to({y:382.9},0).wait(1).to({y:380.8},0).wait(1).to({y:378.6},0).wait(1).to({y:376.5},0).wait(1).to({y:374.3},0).wait(1).to({y:372.1},0).wait(1).to({y:370},0).wait(1).to({y:368},0).wait(1).to({y:366},0).wait(1).to({y:364.1},0).wait(1).to({y:362.3},0).wait(1).to({y:360.6},0).wait(1).to({y:359},0).wait(1).to({y:357.6},0).wait(1).to({y:356.3},0).wait(1).to({y:355.2},0).wait(1).to({y:354.1},0).wait(1).to({y:353.2},0).wait(1).to({y:352.5},0).wait(1).to({y:351.9},0).wait(1).to({y:351.4},0).wait(1).to({y:351},0).wait(1).to({y:350.7},0).wait(1).to({y:350.6},0).wait(1).to({regX:40,regY:50,x:386.7,y:400.5},0).wait(1).to({regX:0,regY:0,x:346.7,y:350.5},0).wait(1).to({y:350.4},0).wait(1).to({y:350.3},0).wait(1).to({y:350.1},0).wait(1).to({y:349.8},0).wait(1).to({y:349.5},0).wait(1).to({y:349.2},0).wait(1).to({y:348.8},0).wait(1).to({y:348.3},0).wait(1).to({y:347.7},0).wait(1).to({y:347.1},0).wait(1).to({y:346.4},0).wait(1).to({y:345.7},0).wait(1).to({y:344.8},0).wait(1).to({y:343.9},0).wait(1).to({y:342.9},0).wait(1).to({x:346.8,y:341.9},0).wait(1).to({y:340.8},0).wait(1).to({y:339.5},0).wait(1).to({y:338.3},0).wait(1).to({y:336.9},0).wait(1).to({y:335.5},0).wait(1).to({x:346.9,y:334},0).wait(1).to({y:332.4},0).wait(1).to({y:330.8},0).wait(1).to({y:329.1},0).wait(1).to({y:327.4},0).wait(1).to({x:347,y:325.7},0).wait(1).to({y:323.9},0).wait(1).to({y:322.1},0).wait(1).to({y:320.3},0).wait(1).to({y:318.6},0).wait(1).to({x:347.1,y:316.8},0).wait(1).to({y:315.1},0).wait(1).to({y:313.4},0).wait(1).to({y:311.8},0).wait(1).to({y:310.2},0).wait(1).to({x:347.2,y:308.7},0).wait(1).to({y:307.3},0).wait(1).to({y:306},0).wait(1).to({y:304.8},0).wait(1).to({y:303.7},0).wait(1).to({y:302.6},0).wait(1).to({y:301.7},0).wait(1).to({x:347.3,y:300.8},0).wait(1).to({y:300.1},0).wait(1).to({y:299.4},0).wait(1).to({y:298.9},0).wait(1).to({y:298.4},0).wait(1).to({y:298},0).wait(1).to({y:297.8},0).wait(1).to({y:297.6},0).wait(1).to({y:297.4},0).wait(1).to({regX:40,regY:50,x:387.3,y:347.4},0).wait(1).to({regX:0,regY:0,x:347.3,y:297.4},0).wait(2).to({y:297.5},0).wait(1).to({y:297.6},0).wait(1).to({y:297.7},0).wait(1).to({y:297.8},0).wait(1).to({y:298},0).wait(1).to({y:298.2},0).wait(1).to({y:298.4},0).wait(1).to({y:298.6},0).wait(1).to({y:298.9},0).wait(1).to({y:299.2},0).wait(1).to({y:299.6},0).wait(1).to({x:347.4,y:299.9},0).wait(1).to({y:300.3},0).wait(1).to({y:300.8},0).wait(1).to({y:301.2},0).wait(1).to({y:301.7},0).wait(1).to({y:302.3},0).wait(1).to({y:302.9},0).wait(1).to({y:303.5},0).wait(1).to({y:304.1},0).wait(1).to({x:347.5,y:304.8},0).wait(1).to({y:305.5},0).wait(1).to({y:306.2},0).wait(1).to({y:307},0).wait(1).to({y:307.8},0).wait(1).to({y:308.7},0).wait(1).to({x:347.6,y:309.5},0).wait(1).to({y:310.4},0).wait(1).to({y:311.4},0).wait(1).to({y:312.3},0).wait(1).to({y:313.3},0).wait(1).to({x:347.7,y:314.2},0).wait(1).to({y:315.2},0).wait(1).to({y:316.2},0).wait(1).to({y:317.2},0).wait(1).to({x:347.8,y:318.2},0).wait(1).to({y:319.2},0).wait(1).to({y:320.2},0).wait(1).to({y:321.2},0).wait(1).to({y:322.2},0).wait(1).to({x:347.9,y:323.1},0).wait(1).to({y:324},0).wait(1).to({y:324.9},0).wait(1).to({y:325.7},0).wait(1).to({y:326.6},0).wait(1).to({x:348,y:327.3},0).wait(1).to({y:328.1},0).wait(1).to({y:328.7},0).wait(1).to({y:329.4},0).wait(1).to({y:330},0).wait(1).to({y:330.6},0).wait(1).to({y:331.1},0).wait(1).to({y:331.5},0).wait(1).to({x:348.1,y:332},0).wait(1).to({y:332.3},0).wait(1).to({y:332.7},0).wait(1).to({y:333},0).wait(1).to({y:333.2},0).wait(1).to({y:333.4},0).wait(1).to({y:333.6},0).wait(1).to({y:333.7},0).wait(1).to({y:333.8},0).wait(1).to({y:333.9},0).wait(1).to({regX:40,regY:50,x:388.1,y:383.9},0).wait(1).to({regX:0,regY:0,x:348.1,y:333.9},0).wait(1).to({y:333.7},0).wait(1).to({scaleX:1,scaleY:1,y:333.5},0).wait(1).to({y:333.2},0).wait(1).to({scaleX:1,scaleY:1,x:348.2,y:332.8},0).wait(1).to({y:332.4},0).wait(1).to({scaleX:1,scaleY:1,y:331.8},0).wait(1).to({scaleX:1,scaleY:1,x:348.3,y:331.2},0).wait(1).to({scaleX:1,scaleY:1,y:330.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:348.4,y:329.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:328.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:348.5,y:328},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:327},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:348.6,y:326},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:324.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:348.7,y:323.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:348.8,y:322.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:348.9,y:321.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:320},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:349,y:318.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:349.1,y:317.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:349.2,y:315.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:349.3,y:314.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:349.4,y:312.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:349.5,y:311.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:349.6,y:309.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:308.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:349.7,y:306.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:349.8,y:305.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:349.9,y:303.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:350,y:301.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:350.1,y:300.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:350.2,y:298.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:350.3,y:297.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:350.4,y:295.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:350.5,y:294},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:350.6,y:292.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:350.7,y:291},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:350.8,y:289.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:350.9,y:288.1},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:286.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:351,y:285.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:351.1,y:283.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:351.2,y:282.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:351.3,y:281.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:280.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:351.4,y:279},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:351.5,y:277.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:276.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:351.6,y:275.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:351.7,y:274.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:273.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:351.8,y:273},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:272.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:351.9,y:271.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:270.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:270.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:352,y:269.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:269.2},0).wait(1).to({y:268.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:352.1,y:268.4},0).wait(1).to({y:268.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:267.8},0).wait(1).to({y:267.7},0).wait(1).to({y:267.6},0).wait(1).to({regX:40,regY:50,x:388.1,y:312.6},0).to({_off:true},7).wait(210));

	// g_0000_10.png
	this.instance_12 = new lib.元件28();
	this.instance_12.setTransform(433.5,259,1,1,0,0,0,14.5,81);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25).to({_off:false},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.443},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.678},0).wait(1).to({alpha:0.721},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.827},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(43).to({regX:16.1,regY:151.5,x:435.1,y:329.5},0).wait(1).to({regX:14.5,regY:81,rotation:1.8,x:448.6,y:253},0).wait(1).to({rotation:3.2,x:459.6,y:248.7},0).wait(1).to({rotation:4.2,x:468.3,y:245.3},0).wait(1).to({rotation:5.1,x:475.7,y:242.4},0).wait(1).to({rotation:5.9,x:482.1,y:240},0).wait(1).to({rotation:6.6,x:487.8,y:237.8},0).wait(1).to({rotation:7.2,x:492.9,y:235.9},0).wait(1).to({rotation:7.8,x:497.5,y:234.1},0).wait(1).to({rotation:8.3,x:501.7,y:232.5},0).wait(1).to({rotation:8.8,x:505.6,y:231.1},0).wait(1).to({rotation:9.2,x:509.1,y:229.7},0).wait(1).to({rotation:9.6,x:512.4,y:228.5},0).wait(1).to({rotation:10,x:515.5,y:227.3},0).wait(1).to({rotation:10.3,x:518.4,y:226.3},0).wait(1).to({rotation:10.7,x:521.1,y:225.3},0).wait(1).to({rotation:11,x:523.6,y:224.3},0).wait(1).to({rotation:11.3,x:525.9,y:223.5},0).wait(1).to({rotation:11.5,x:528.2,y:222.6},0).wait(1).to({rotation:11.8,x:530.3,y:221.9},0).wait(1).to({rotation:12,x:532.3,y:221.1},0).wait(1).to({rotation:12.3,x:534.1,y:220.5},0).wait(1).to({rotation:12.5,x:535.9,y:219.8},0).wait(1).to({rotation:12.7,x:537.5,y:219.2},0).wait(1).to({rotation:12.9,x:539.1,y:218.6},0).wait(1).to({rotation:13.1,x:540.6,y:218.1},0).wait(1).to({rotation:13.2,x:542,y:217.5},0).wait(1).to({rotation:13.4,x:543.3,y:217.1},0).wait(1).to({rotation:13.5,x:544.6,y:216.6},0).wait(1).to({rotation:13.7,x:545.8,y:216.2},0).wait(1).to({rotation:13.8,x:546.9,y:215.8},0).wait(1).to({rotation:14,x:547.9,y:215.4},0).wait(1).to({rotation:14.1,x:548.9,y:215},0).wait(1).to({rotation:14.2,x:549.9,y:214.7},0).wait(1).to({rotation:14.3,x:550.8,y:214.4},0).wait(1).to({rotation:14.4,x:551.6,y:214},0).wait(1).to({rotation:14.5,x:552.4,y:213.8},0).wait(1).to({rotation:14.6,x:553.2,y:213.5},0).wait(1).to({rotation:14.7,x:553.9,y:213.2},0).wait(1).to({rotation:14.8,x:554.5,y:213},0).wait(1).to({x:555.1,y:212.8},0).wait(1).to({rotation:14.9,x:555.6,y:212.6},0).wait(1).to({rotation:15,x:556.2,y:212.4},0).wait(1).to({x:556.7,y:212.2},0).wait(1).to({rotation:15.1,x:557.1,y:212},0).wait(1).to({x:557.6,y:211.9},0).wait(1).to({rotation:15.2,x:558,y:211.7},0).wait(1).to({x:558.4,y:211.6},0).wait(1).to({rotation:15.3,x:558.6,y:211.5},0).wait(1).to({x:558.9,y:211.4},0).wait(1).to({x:559.3,y:211.3},0).wait(1).to({rotation:15.4,x:559.5,y:211.2},0).wait(1).to({x:559.7},0).wait(1).to({x:559.8,y:211.1},0).wait(1).to({x:560,y:211},0).wait(1).to({x:560.2,y:210.9},0).wait(1).to({rotation:15.5},0).wait(1).to({x:560.3},0).wait(2).to({x:560.4},0).wait(1).to({regX:16.1,regY:151.5,x:543.1,y:279.3},0).wait(1).to({regX:14.5,regY:81,x:560.4,y:211,alpha:0.994},0).wait(1).to({y:211.6,alpha:0.976},0).wait(1).to({y:212.5,alpha:0.944},0).wait(1).to({y:213.9,alpha:0.898},0).wait(1).to({y:215.7,alpha:0.837},0).wait(1).to({y:218,alpha:0.763},0).wait(1).to({y:220.6,alpha:0.676},0).wait(1).to({y:223.5,alpha:0.58},0).wait(1).to({y:226.5,alpha:0.478},0).wait(1).to({y:229.5,alpha:0.377},0).wait(1).to({y:232.4,alpha:0.281},0).wait(1).to({y:235,alpha:0.196},0).wait(1).to({y:237.1,alpha:0.124},0).wait(1).to({y:238.8,alpha:0.069},0).wait(1).to({y:239.9,alpha:0.03},0).wait(1).to({y:240.6,alpha:0.007},0).wait(1).to({regX:16.1,regY:151.5,x:543.1,y:309.3,alpha:0},0).to({_off:true},1).wait(495));

	// g_0001_9.png
	this.instance_13 = new lib.元件29();
	this.instance_13.setTransform(480.1,311.1,1,1,0,0,0,42.5,92.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(25).to({_off:false},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.443},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.678},0).wait(1).to({alpha:0.721},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.827},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(43).to({regX:65.9,regY:169.3,x:503.5,y:387.9},0).wait(1).to({regX:42.5,regY:92.5,rotation:4.8,x:490.7,y:312.6},0).wait(1).to({rotation:8.3,x:498.4,y:314},0).wait(1).to({rotation:11.1,x:504.6,y:315.4},0).wait(1).to({rotation:13.5,x:509.9,y:316.6},0).wait(1).to({rotation:15.5,x:514.5,y:317.9},0).wait(1).to({rotation:17.3,x:518.5,y:319},0).wait(1).to({rotation:18.9,x:522.1,y:320.2},0).wait(1).to({rotation:20.4,x:525.4,y:321.2},0).wait(1).to({rotation:21.7,x:528.4,y:322.3},0).wait(1).to({rotation:23,x:531.2,y:323.2},0).wait(1).to({rotation:24.1,x:533.7,y:324.1},0).wait(1).to({rotation:25.1,x:536,y:325},0).wait(1).to({rotation:26.1,x:538.2,y:325.9},0).wait(1).to({rotation:27,x:540.2,y:326.7},0).wait(1).to({rotation:27.9,x:542.1,y:327.5},0).wait(1).to({rotation:28.7,x:544,y:328.2},0).wait(1).to({rotation:29.5,x:545.6,y:329},0).wait(1).to({rotation:30.2,x:547.1,y:329.6},0).wait(1).to({rotation:30.8,x:548.6,y:330.3},0).wait(1).to({rotation:31.5,x:550,y:331},0).wait(1).to({rotation:32.1,x:551.3,y:331.5},0).wait(1).to({rotation:32.6,x:552.6,y:332.1},0).wait(1).to({rotation:33.1,x:553.7,y:332.7},0).wait(1).to({rotation:33.7,x:554.8,y:333.2},0).wait(1).to({rotation:34.1,x:555.8,y:333.7},0).wait(1).to({rotation:34.6,x:556.8,y:334.2},0).wait(1).to({rotation:35,x:557.7,y:334.6},0).wait(1).to({rotation:35.4,x:558.6,y:335.1},0).wait(1).to({rotation:35.8,x:559.4,y:335.5},0).wait(1).to({rotation:36.1,x:560.2,y:335.9},0).wait(1).to({rotation:36.5,x:560.9,y:336.3},0).wait(1).to({rotation:36.8,x:561.6,y:336.7},0).wait(1).to({rotation:37.1,x:562.2,y:337},0).wait(1).to({rotation:37.4,x:562.9,y:337.3},0).wait(1).to({rotation:37.6,x:563.4,y:337.6},0).wait(1).to({rotation:37.9,x:564,y:337.9},0).wait(1).to({rotation:38.1,x:564.5,y:338.2},0).wait(1).to({rotation:38.4,x:565,y:338.5},0).wait(1).to({rotation:38.6,x:565.5,y:338.7},0).wait(1).to({rotation:38.8,x:565.9,y:338.9},0).wait(1).to({rotation:38.9,x:566.2,y:339.1},0).wait(1).to({rotation:39.1,x:566.6,y:339.3},0).wait(1).to({rotation:39.3,x:566.9,y:339.5},0).wait(1).to({rotation:39.4,x:567.2,y:339.7},0).wait(1).to({rotation:39.6,x:567.5,y:339.8},0).wait(1).to({rotation:39.7,x:567.8,y:340},0).wait(1).to({rotation:39.8,x:568,y:340.1},0).wait(1).to({rotation:39.9,x:568.2,y:340.3},0).wait(1).to({rotation:40,x:568.4,y:340.4},0).wait(1).to({rotation:40.1,x:568.6,y:340.5},0).wait(1).to({rotation:40.2,x:568.8,y:340.6},0).wait(1).to({x:568.9,y:340.7},0).wait(1).to({rotation:40.3,x:569.1},0).wait(1).to({x:569.2,y:340.8},0).wait(1).to({rotation:40.4,x:569.3,y:340.9},0).wait(2).to({x:569.4},0).wait(2).to({rotation:40.5,x:569.5},0).wait(1).to({regX:65.8,regY:169.3,x:537.4,y:414.5},0).wait(1).to({regX:42.5,regY:92.5,x:569.6,y:341.2,alpha:0.994},0).wait(1).to({y:341.7,alpha:0.976},0).wait(1).to({y:342.7,alpha:0.944},0).wait(1).to({y:344.1,alpha:0.898},0).wait(1).to({y:345.9,alpha:0.837},0).wait(1).to({y:348.1,alpha:0.763},0).wait(1).to({y:350.7,alpha:0.676},0).wait(1).to({y:353.6,alpha:0.58},0).wait(1).to({y:356.7,alpha:0.478},0).wait(1).to({y:359.7,alpha:0.377},0).wait(1).to({y:362.6,alpha:0.281},0).wait(1).to({y:365.1,alpha:0.196},0).wait(1).to({y:367.3,alpha:0.124},0).wait(1).to({y:368.9,alpha:0.069},0).wait(1).to({y:370.1,alpha:0.03},0).wait(1).to({y:370.8,alpha:0.007},0).wait(1).to({regX:65.8,regY:169.3,x:537.4,y:444.5,alpha:0},0).to({_off:true},1).wait(495));

	// g_0002_8.png
	this.instance_14 = new lib.元件30();
	this.instance_14.setTransform(317.2,386,1,1,0,0,0,35.5,47);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(25).to({_off:false},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.443},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.678},0).wait(1).to({alpha:0.721},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.827},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(43).to({regX:63.8,regY:81.5,x:345.5,y:420.5},0).wait(1).to({regX:35.5,regY:47,rotation:-2.7,x:311.1,y:393.8},0).wait(1).to({rotation:-4.7,x:306.8,y:399.6},0).wait(1).to({rotation:-6.2,x:303.4,y:404.2},0).wait(1).to({rotation:-7.6,x:300.6,y:408.1},0).wait(1).to({rotation:-8.7,x:298.1,y:411.5},0).wait(1).to({rotation:-9.7,x:295.9,y:414.5},0).wait(1).to({rotation:-10.6,x:294,y:417.2},0).wait(1).to({rotation:-11.5,x:292.2,y:419.7},0).wait(1).to({rotation:-12.2,x:290.6,y:422},0).wait(1).to({rotation:-12.9,x:289.2,y:424},0).wait(1).to({rotation:-13.5,x:287.8,y:426},0).wait(1).to({rotation:-14.1,x:286.6,y:427.8},0).wait(1).to({rotation:-14.7,x:285.4,y:429.4},0).wait(1).to({rotation:-15.2,x:284.3,y:431},0).wait(1).to({rotation:-15.7,x:283.4,y:432.4},0).wait(1).to({rotation:-16.1,x:282.4,y:433.8},0).wait(1).to({rotation:-16.5,x:281.6,y:435.1},0).wait(1).to({rotation:-16.9,x:280.7,y:436.3},0).wait(1).to({rotation:-17.3,x:280,y:437.4},0).wait(1).to({rotation:-17.7,x:279.2,y:438.5},0).wait(1).to({rotation:-18,x:278.6,y:439.5},0).wait(1).to({rotation:-18.3,x:277.9,y:440.5},0).wait(1).to({rotation:-18.6,x:277.3,y:441.4},0).wait(1).to({rotation:-18.9,x:276.8,y:442.2},0).wait(1).to({rotation:-19.2,x:276.2,y:443.1},0).wait(1).to({rotation:-19.4,x:275.7,y:443.9},0).wait(1).to({rotation:-19.7,x:275.2,y:444.5},0).wait(1).to({rotation:-19.9,x:274.8,y:445.3},0).wait(1).to({rotation:-20.1,x:274.3,y:445.9},0).wait(1).to({rotation:-20.3,x:273.9,y:446.6},0).wait(1).to({rotation:-20.5,x:273.5,y:447.1},0).wait(1).to({rotation:-20.7,x:273.1,y:447.7},0).wait(1).to({rotation:-20.8,x:272.8,y:448.2},0).wait(1).to({rotation:-21,x:272.5,y:448.7},0).wait(1).to({rotation:-21.1,x:272.2,y:449.2},0).wait(1).to({rotation:-21.3,x:271.9,y:449.6},0).wait(1).to({rotation:-21.4,x:271.6,y:450},0).wait(1).to({rotation:-21.5,x:271.3,y:450.3},0).wait(1).to({rotation:-21.7,x:271.1,y:450.7},0).wait(1).to({rotation:-21.8,x:270.9,y:451.1},0).wait(1).to({rotation:-21.9,x:270.7,y:451.3},0).wait(1).to({rotation:-22,x:270.5,y:451.7},0).wait(1).to({rotation:-22.1,x:270.3,y:451.9},0).wait(1).to({x:270.2,y:452.2},0).wait(1).to({rotation:-22.2,x:270,y:452.4},0).wait(1).to({rotation:-22.3,x:269.9,y:452.7},0).wait(1).to({rotation:-22.4,x:269.8,y:452.8},0).wait(1).to({x:269.6,y:453},0).wait(1).to({rotation:-22.5,x:269.5,y:453.2},0).wait(1).to({y:453.3},0).wait(1).to({rotation:-22.6,x:269.4,y:453.5},0).wait(1).to({x:269.3,y:453.6},0).wait(1).to({x:269.2,y:453.7},0).wait(1).to({rotation:-22.7,y:453.8},0).wait(1).to({x:269.1},0).wait(1).to({y:453.9},0).wait(2).to({x:269,y:454},0).wait(2).to({regX:63.8,regY:81.6,x:308.5,y:474.9},0).wait(1).to({regX:35.5,regY:47,x:269,y:454.1,alpha:0.994},0).wait(1).to({y:454.7,alpha:0.976},0).wait(1).to({y:455.6,alpha:0.944},0).wait(1).to({y:457,alpha:0.898},0).wait(1).to({y:458.8,alpha:0.837},0).wait(1).to({y:461.1,alpha:0.763},0).wait(1).to({y:463.7,alpha:0.676},0).wait(1).to({y:466.6,alpha:0.58},0).wait(1).to({y:469.6,alpha:0.478},0).wait(1).to({y:472.6,alpha:0.377},0).wait(1).to({y:475.5,alpha:0.281},0).wait(1).to({y:478.1,alpha:0.196},0).wait(1).to({y:480.2,alpha:0.124},0).wait(1).to({y:481.9,alpha:0.069},0).wait(1).to({y:483,alpha:0.03},0).wait(1).to({y:483.7,alpha:0.007},0).wait(1).to({regX:63.8,regY:81.6,x:308.5,y:504.9,alpha:0},0).to({_off:true},1).wait(495));

	// g_0003_7.png
	this.instance_15 = new lib.元件31();
	this.instance_15.setTransform(369.7,341.7,1,1,0,0,0,85,30);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(25).to({_off:false},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.443},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.678},0).wait(1).to({alpha:0.721},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.827},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(43).to({regX:10.3,regY:43.1,x:295,y:354.8},0).wait(1).to({regX:85,regY:30,rotation:3.6,x:366,y:352.9},0).wait(1).to({rotation:6.2,x:363.2,y:361},0).wait(1).to({rotation:8.3,x:360.8,y:367.6},0).wait(1).to({rotation:10,x:358.7,y:373.1},0).wait(1).to({rotation:11.6,x:356.8,y:377.9},0).wait(1).to({rotation:12.9,x:355.1,y:382.1},0).wait(1).to({rotation:14.1,x:353.6,y:385.9},0).wait(1).to({rotation:15.2,x:352.2,y:389.3},0).wait(1).to({rotation:16.2,x:350.8,y:392.5},0).wait(1).to({rotation:17.1,x:349.6,y:395.3},0).wait(1).to({rotation:18,x:348.4,y:398},0).wait(1).to({rotation:18.8,x:347.3,y:400.4},0).wait(1).to({rotation:19.5,x:346.3,y:402.7},0).wait(1).to({rotation:20.2,x:345.3,y:404.9},0).wait(1).to({rotation:20.8,x:344.4,y:406.8},0).wait(1).to({rotation:21.4,x:343.5,y:408.7},0).wait(1).to({rotation:22,x:342.6,y:410.4},0).wait(1).to({rotation:22.5,x:341.8,y:412.1},0).wait(1).to({rotation:23,x:341.1,y:413.6},0).wait(1).to({rotation:23.5,x:340.4,y:415.1},0).wait(1).to({rotation:23.9,x:339.8,y:416.4},0).wait(1).to({rotation:24.3,x:339.1,y:417.8},0).wait(1).to({rotation:24.7,x:338.5,y:419},0).wait(1).to({rotation:25.1,x:337.9,y:420.1},0).wait(1).to({rotation:25.5,x:337.4,y:421.3},0).wait(1).to({rotation:25.8,x:336.9,y:422.3},0).wait(1).to({rotation:26.1,x:336.3,y:423.2},0).wait(1).to({rotation:26.4,x:335.8,y:424.1},0).wait(1).to({rotation:26.7,x:335.4,y:425.1},0).wait(1).to({rotation:27,x:335,y:425.9},0).wait(1).to({rotation:27.2,x:334.6,y:426.7},0).wait(1).to({rotation:27.5,x:334.2,y:427.4},0).wait(1).to({rotation:27.7,x:333.8,y:428.1},0).wait(1).to({rotation:27.9,x:333.5,y:428.7},0).wait(1).to({rotation:28.1,x:333.2,y:429.3},0).wait(1).to({rotation:28.3,x:332.9,y:429.9},0).wait(1).to({rotation:28.5,x:332.6,y:430.4},0).wait(1).to({rotation:28.6,x:332.3,y:431},0).wait(1).to({rotation:28.8,x:332.1,y:431.5},0).wait(1).to({rotation:28.9,x:331.9,y:431.9},0).wait(1).to({rotation:29.1,x:331.6,y:432.3},0).wait(1).to({rotation:29.2,x:331.4,y:432.7},0).wait(1).to({rotation:29.3,x:331.2,y:433},0).wait(1).to({rotation:29.4,x:331,y:433.4},0).wait(1).to({rotation:29.5,x:330.8,y:433.7},0).wait(1).to({rotation:29.6,x:330.7,y:434},0).wait(1).to({rotation:29.7,x:330.6,y:434.2},0).wait(1).to({rotation:29.8,x:330.5,y:434.5},0).wait(1).to({x:330.3,y:434.7},0).wait(1).to({rotation:29.9,y:434.9},0).wait(1).to({rotation:30,x:330.1,y:435.1},0).wait(1).to({y:435.2},0).wait(1).to({rotation:30.1,x:329.9,y:435.3},0).wait(1).to({y:435.4},0).wait(1).to({y:435.6},0).wait(1).to({rotation:30.2,x:329.8,y:435.7},0).wait(2).to({y:435.8},0).wait(1).to({x:329.7},0).wait(1).to({regX:10.3,regY:43.2,x:258.6,y:409.6},0).wait(1).to({regX:85,regY:30,x:329.8,y:435.9,alpha:0.994},0).wait(1).to({y:436.5,alpha:0.976},0).wait(1).to({y:437.4,alpha:0.944},0).wait(1).to({y:438.8,alpha:0.898},0).wait(1).to({y:440.6,alpha:0.837},0).wait(1).to({y:442.9,alpha:0.763},0).wait(1).to({y:445.5,alpha:0.676},0).wait(1).to({y:448.4,alpha:0.58},0).wait(1).to({y:451.4,alpha:0.478},0).wait(1).to({y:454.4,alpha:0.377},0).wait(1).to({y:457.3,alpha:0.281},0).wait(1).to({y:459.9,alpha:0.196},0).wait(1).to({y:462,alpha:0.124},0).wait(1).to({y:463.7,alpha:0.069},0).wait(1).to({y:464.8,alpha:0.03},0).wait(1).to({y:465.5,alpha:0.007},0).wait(1).to({regX:10.3,regY:43.2,x:258.6,y:439.6,alpha:0},0).to({_off:true},1).wait(495));

	// g_0004_6.png
	this.instance_16 = new lib.元件32();
	this.instance_16.setTransform(360.1,338.2,1,1,0,0,0,18,94);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(25).to({_off:false},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.443},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.678},0).wait(1).to({alpha:0.721},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.827},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(43).to({regX:17,regY:176,x:359.1,y:420.2},0).wait(1).to({regX:18,regY:94,rotation:-2.4,x:350.7,y:338.3},0).wait(1).to({rotation:-4.2,x:343.9,y:338.5},0).wait(1).to({rotation:-5.5,x:338.5,y:338.7},0).wait(1).to({rotation:-6.7,x:334,y:338.9},0).wait(1).to({rotation:-7.7,x:330,y:339.1},0).wait(1).to({rotation:-8.6,x:326.6,y:339.3},0).wait(1).to({rotation:-9.5,x:323.4,y:339.5},0).wait(1).to({rotation:-10.2,x:320.6,y:339.7},0).wait(1).to({rotation:-10.9,x:318,y:339.9},0).wait(1).to({rotation:-11.5,x:315.7,y:340},0).wait(1).to({rotation:-12,x:313.5,y:340.3},0).wait(1).to({rotation:-12.6,x:311.4,y:340.4},0).wait(1).to({rotation:-13.1,x:309.6,y:340.6},0).wait(1).to({rotation:-13.5,x:307.8,y:340.8},0).wait(1).to({rotation:-13.9,x:306.1,y:340.9},0).wait(1).to({rotation:-14.3,x:304.6,y:341.1},0).wait(1).to({rotation:-14.7,x:303.2,y:341.2},0).wait(1).to({rotation:-15.1,x:301.8,y:341.3},0).wait(1).to({rotation:-15.4,x:300.5,y:341.4},0).wait(1).to({rotation:-15.7,x:299.3,y:341.6},0).wait(1).to({rotation:-16,x:298.2,y:341.7},0).wait(1).to({rotation:-16.3,x:297.1,y:341.8},0).wait(1).to({rotation:-16.6,x:296.1,y:341.9},0).wait(1).to({rotation:-16.8,x:295.2,y:342.1},0).wait(1).to({rotation:-17.1,x:294.2},0).wait(1).to({rotation:-17.3,x:293.4,y:342.3},0).wait(1).to({rotation:-17.5,x:292.5,y:342.4},0).wait(1).to({rotation:-17.7,x:291.8,y:342.5},0).wait(1).to({rotation:-17.9,x:291.1},0).wait(1).to({rotation:-18.1,x:290.4,y:342.6},0).wait(1).to({rotation:-18.2,x:289.7,y:342.7},0).wait(1).to({rotation:-18.4,x:289.2,y:342.8},0).wait(1).to({rotation:-18.5,x:288.6},0).wait(1).to({rotation:-18.7,x:288,y:342.9},0).wait(1).to({rotation:-18.8,x:287.5,y:343},0).wait(1).to({rotation:-18.9,x:287},0).wait(1).to({rotation:-19.1,x:286.6,y:343.1},0).wait(1).to({rotation:-19.2,x:286.1,y:343.2},0).wait(1).to({rotation:-19.3,x:285.7},0).wait(1).to({rotation:-19.4,x:285.4,y:343.3},0).wait(1).to({rotation:-19.5,x:285},0).wait(1).to({x:284.7,y:343.4},0).wait(1).to({rotation:-19.6,x:284.4},0).wait(1).to({rotation:-19.7,x:284.2},0).wait(1).to({rotation:-19.8,x:283.9},0).wait(1).to({x:283.7,y:343.5},0).wait(1).to({rotation:-19.9,x:283.4},0).wait(1).to({x:283.2},0).wait(1).to({rotation:-20,x:283,y:343.6},0).wait(1).to({x:282.9},0).wait(1).to({rotation:-20.1,x:282.7},0).wait(1).to({x:282.6},0).wait(1).to({x:282.5},0).wait(1).to({x:282.4,y:343.7},0).wait(1).to({rotation:-20.2,x:282.3},0).wait(2).to({x:282.2},0).wait(3).to({regX:17,regY:176,x:309.6,y:421},0).wait(1).to({regX:18,regY:94,x:282.2,y:343.9,alpha:0.994},0).wait(1).to({y:344.4,alpha:0.976},0).wait(1).to({y:345.4,alpha:0.944},0).wait(1).to({y:346.8,alpha:0.898},0).wait(1).to({y:348.6,alpha:0.837},0).wait(1).to({y:350.8,alpha:0.763},0).wait(1).to({y:353.4,alpha:0.676},0).wait(1).to({y:356.3,alpha:0.58},0).wait(1).to({y:359.4,alpha:0.478},0).wait(1).to({y:362.4,alpha:0.377},0).wait(1).to({y:365.3,alpha:0.281},0).wait(1).to({y:367.8,alpha:0.196},0).wait(1).to({y:370,alpha:0.124},0).wait(1).to({y:371.6,alpha:0.069},0).wait(1).to({y:372.8,alpha:0.03},0).wait(1).to({y:373.5,alpha:0.007},0).wait(1).to({regX:17,regY:176,x:309.6,y:451,alpha:0},0).to({_off:true},1).wait(495));

	// g_0005_5.png
	this.instance_17 = new lib.元件33();
	this.instance_17.setTransform(431.2,401.3,1,1,0,0,0,87.5,32);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(25).to({_off:false},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.443},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.678},0).wait(1).to({alpha:0.721},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.827},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(43).to({regX:160.3,regY:17.5,x:504,y:386.8},0).wait(1).to({regX:87.5,regY:32,rotation:1.9,x:439.1,y:403.6},0).wait(1).to({rotation:3.2,x:444.8,y:405.3},0).wait(1).to({rotation:4.3,x:449.5,y:406.6},0).wait(1).to({rotation:5.2,x:453.4,y:407.8},0).wait(1).to({rotation:6,x:456.8,y:408.8},0).wait(1).to({rotation:6.7,x:459.9,y:409.7},0).wait(1).to({rotation:7.3,x:462.7,y:410.5},0).wait(1).to({rotation:7.9,x:465.1,y:411.2},0).wait(1).to({rotation:8.4,x:467.4,y:411.8},0).wait(1).to({rotation:8.9,x:469.5,y:412.4},0).wait(1).to({rotation:9.3,x:471.5,y:412.9},0).wait(1).to({rotation:9.8,x:473.3,y:413.5},0).wait(1).to({rotation:10.1,x:475,y:413.9},0).wait(1).to({rotation:10.5,x:476.5,y:414.4},0).wait(1).to({rotation:10.8,x:478,y:414.8},0).wait(1).to({rotation:11.1,x:479.4,y:415.2},0).wait(1).to({rotation:11.4,x:480.7,y:415.6},0).wait(1).to({rotation:11.7,x:482,y:415.9},0).wait(1).to({rotation:12,x:483.1,y:416.2},0).wait(1).to({rotation:12.2,x:484.2,y:416.5},0).wait(1).to({rotation:12.4,x:485.2,y:416.8},0).wait(1).to({rotation:12.7,x:486.2,y:417},0).wait(1).to({rotation:12.9,x:487.2,y:417.4},0).wait(1).to({rotation:13.1,x:488,y:417.5},0).wait(1).to({rotation:13.2,x:488.8,y:417.8},0).wait(1).to({rotation:13.4,x:489.6,y:418},0).wait(1).to({rotation:13.6,x:490.4,y:418.2},0).wait(1).to({rotation:13.7,x:491.1,y:418.5},0).wait(1).to({rotation:13.9,x:491.7,y:418.6},0).wait(1).to({rotation:14,x:492.4,y:418.8},0).wait(1).to({rotation:14.2,x:493,y:419},0).wait(1).to({rotation:14.3,x:493.5,y:419.1},0).wait(1).to({rotation:14.4,x:494,y:419.2},0).wait(1).to({rotation:14.5,x:494.6,y:419.4},0).wait(1).to({rotation:14.6,x:495,y:419.5},0).wait(1).to({rotation:14.7,x:495.5,y:419.6},0).wait(1).to({rotation:14.8,x:495.9,y:419.8},0).wait(1).to({rotation:14.9,x:496.3,y:419.9},0).wait(1).to({rotation:15,x:496.7},0).wait(1).to({x:497,y:420},0).wait(1).to({rotation:15.1,x:497.3,y:420.1},0).wait(1).to({rotation:15.2,x:497.6,y:420.2},0).wait(1).to({x:497.9,y:420.3},0).wait(1).to({rotation:15.3,x:498.1,y:420.4},0).wait(1).to({x:498.4},0).wait(1).to({rotation:15.4,x:498.6,y:420.5},0).wait(1).to({x:498.8,y:420.6},0).wait(1).to({rotation:15.5,x:499},0).wait(1).to({x:499.2,y:420.7},0).wait(1).to({rotation:15.6,x:499.3},0).wait(1).to({x:499.5},0).wait(2).to({x:499.7},0).wait(1).to({y:420.8},0).wait(1).to({rotation:15.7,x:499.8},0).wait(1).to({x:499.9},0).wait(2).to({x:500},0).wait(2).to({regX:160.3,regY:17.5,x:574,y:426.6},0).wait(1).to({regX:87.5,regY:32,x:500.1,y:421,alpha:0.994},0).wait(1).to({y:421.6,alpha:0.976},0).wait(1).to({y:422.5,alpha:0.944},0).wait(1).to({y:423.9,alpha:0.898},0).wait(1).to({y:425.7,alpha:0.837},0).wait(1).to({y:428,alpha:0.763},0).wait(1).to({y:430.6,alpha:0.676},0).wait(1).to({y:433.5,alpha:0.58},0).wait(1).to({y:436.5,alpha:0.478},0).wait(1).to({y:439.5,alpha:0.377},0).wait(1).to({y:442.4,alpha:0.281},0).wait(1).to({y:445,alpha:0.196},0).wait(1).to({y:447.1,alpha:0.124},0).wait(1).to({y:448.8,alpha:0.069},0).wait(1).to({y:449.9,alpha:0.03},0).wait(1).to({y:450.6,alpha:0.007},0).wait(1).to({regX:160.3,regY:17.5,x:574,y:456.6,alpha:0},0).to({_off:true},1).wait(495));

	// g_0006_4.png
	this.instance_18 = new lib.元件34();
	this.instance_18.setTransform(359,224,1,1,0,0,0,87,45);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(25).to({_off:false},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.443},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.678},0).wait(1).to({alpha:0.721},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.827},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(43).to({regX:67.9,regY:78.3,x:339.9,y:257.3},0).wait(1).to({regX:87,regY:45,rotation:-2.8,x:352.1,y:219.5},0).wait(1).to({rotation:-4.8,x:347.1,y:216.4},0).wait(1).to({rotation:-6.4,x:343,y:213.8},0).wait(1).to({rotation:-7.8,x:339.6,y:211.8},0).wait(1).to({rotation:-9,x:336.6,y:210},0).wait(1).to({rotation:-10,x:334,y:208.4},0).wait(1).to({rotation:-11,x:331.6,y:207},0).wait(1).to({rotation:-11.8,x:329.5,y:205.8},0).wait(1).to({rotation:-12.6,x:327.5,y:204.6},0).wait(1).to({rotation:-13.3,x:325.7,y:203.6},0).wait(1).to({rotation:-14,x:324.1,y:202.6},0).wait(1).to({rotation:-14.6,x:322.5,y:201.7},0).wait(1).to({rotation:-15.1,x:321.1,y:200.9},0).wait(1).to({rotation:-15.7,x:319.7,y:200.2},0).wait(1).to({rotation:-16.2,x:318.5,y:199.4},0).wait(1).to({rotation:-16.6,x:317.3,y:198.8},0).wait(1).to({rotation:-17.1,x:316.1,y:198.1},0).wait(1).to({rotation:-17.5,x:315.1,y:197.5},0).wait(1).to({rotation:-17.9,x:314.1,y:197},0).wait(1).to({rotation:-18.2,x:313.3,y:196.6},0).wait(1).to({rotation:-18.6,x:312.3,y:196.1},0).wait(1).to({rotation:-18.9,x:311.5,y:195.5},0).wait(1).to({rotation:-19.2,x:310.7,y:195.1},0).wait(1).to({rotation:-19.5,x:310,y:194.7},0).wait(1).to({rotation:-19.8,x:309.3,y:194.4},0).wait(1).to({rotation:-20,x:308.6,y:194},0).wait(1).to({rotation:-20.3,x:308,y:193.7},0).wait(1).to({rotation:-20.5,x:307.4,y:193.3},0).wait(1).to({rotation:-20.7,x:306.9,y:193.1},0).wait(1).to({rotation:-20.9,x:306.3,y:192.8},0).wait(1).to({rotation:-21.1,x:305.9,y:192.4},0).wait(1).to({rotation:-21.3,x:305.3,y:192.2},0).wait(1).to({rotation:-21.5,x:304.9,y:192},0).wait(1).to({rotation:-21.7,x:304.5,y:191.8},0).wait(1).to({rotation:-21.8,x:304.1,y:191.6},0).wait(1).to({rotation:-22,x:303.8,y:191.4},0).wait(1).to({rotation:-22.1,x:303.4,y:191.2},0).wait(1).to({rotation:-22.2,x:303.1,y:191},0).wait(1).to({rotation:-22.4,x:302.7,y:190.8},0).wait(1).to({rotation:-22.5,x:302.5,y:190.7},0).wait(1).to({rotation:-22.6,x:302.2,y:190.5},0).wait(1).to({rotation:-22.7,x:302,y:190.4},0).wait(1).to({rotation:-22.8,x:301.7,y:190.3},0).wait(1).to({x:301.4,y:190.1},0).wait(1).to({rotation:-22.9,x:301.3},0).wait(1).to({rotation:-23,x:301.1,y:189.9},0).wait(1).to({rotation:-23.1,x:300.9},0).wait(1).to({x:300.7,y:189.8},0).wait(1).to({rotation:-23.2,x:300.6,y:189.7},0).wait(1).to({x:300.5},0).wait(1).to({rotation:-23.3,x:300.4,y:189.6},0).wait(1).to({x:300.3,y:189.5},0).wait(1).to({x:300.2},0).wait(1).to({rotation:-23.4,x:300.1},0).wait(1).to({y:189.4},0).wait(2).to({x:300},0).wait(1).to({x:299.9},0).wait(2).to({regX:67.9,regY:78.3,x:295.7,y:227.5},0).wait(1).to({regX:87,regY:45,x:299.9,y:189.5,alpha:0.994},0).wait(1).to({y:190.1,alpha:0.976},0).wait(1).to({y:191,alpha:0.944},0).wait(1).to({y:192.4,alpha:0.898},0).wait(1).to({y:194.2,alpha:0.837},0).wait(1).to({y:196.5,alpha:0.763},0).wait(1).to({y:199.1,alpha:0.676},0).wait(1).to({y:202,alpha:0.58},0).wait(1).to({y:205,alpha:0.478},0).wait(1).to({y:208,alpha:0.377},0).wait(1).to({y:210.9,alpha:0.281},0).wait(1).to({y:213.5,alpha:0.196},0).wait(1).to({y:215.6,alpha:0.124},0).wait(1).to({y:217.3,alpha:0.069},0).wait(1).to({y:218.4,alpha:0.03},0).wait(1).to({y:219.1,alpha:0.007},0).wait(1).to({regX:67.9,regY:78.3,x:295.7,y:257.5,alpha:0},0).to({_off:true},1).wait(495));

	// g_0007_3.png
	this.instance_19 = new lib.元件35();
	this.instance_19.setTransform(481.3,209.5,1,1,0,0,0,41.5,30.5);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(25).to({_off:false},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.443},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.678},0).wait(1).to({alpha:0.721},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.827},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(43).to({regX:74.4,regY:50.3,x:514.2,y:229.3},0).wait(1).to({regX:41.5,regY:30.5,rotation:-2.4,x:486.3,y:207.8},0).wait(1).to({rotation:-4.1,x:489.9,y:206.6},0).wait(1).to({rotation:-5.4,x:492.8,y:205.8},0).wait(1).to({rotation:-6.6,x:495.4,y:205},0).wait(1).to({rotation:-7.6,x:497.5,y:204.4},0).wait(1).to({rotation:-8.4,x:499.4,y:203.7},0).wait(1).to({rotation:-9.2,x:501.1,y:203.2},0).wait(1).to({rotation:-9.9,x:502.7,y:202.8},0).wait(1).to({rotation:-10.6,x:504.2,y:202.4},0).wait(1).to({rotation:-11.2,x:505.5,y:202},0).wait(1).to({rotation:-11.7,x:506.7,y:201.6},0).wait(1).to({rotation:-12.3,x:507.9,y:201.3},0).wait(1).to({rotation:-12.7,x:508.9,y:201},0).wait(1).to({rotation:-13.2,x:509.9,y:200.7},0).wait(1).to({rotation:-13.6,x:510.9,y:200.4},0).wait(1).to({rotation:-14,x:511.7,y:200.2},0).wait(1).to({rotation:-14.4,x:512.6,y:199.9},0).wait(1).to({rotation:-14.7,x:513.4,y:199.7},0).wait(1).to({rotation:-15,x:514.1,y:199.5},0).wait(1).to({rotation:-15.3,x:514.8,y:199.3},0).wait(1).to({rotation:-15.6,x:515.4,y:199.1},0).wait(1).to({rotation:-15.9,x:516.1,y:199},0).wait(1).to({rotation:-16.2,x:516.7,y:198.8},0).wait(1).to({rotation:-16.4,x:517.2,y:198.7},0).wait(1).to({rotation:-16.6,x:517.7,y:198.5},0).wait(1).to({rotation:-16.9,x:518.2,y:198.4},0).wait(1).to({rotation:-17.1,x:518.7,y:198.2},0).wait(1).to({rotation:-17.3,x:519.2},0).wait(1).to({rotation:-17.4,x:519.6,y:198},0).wait(1).to({rotation:-17.6,x:520,y:197.9},0).wait(1).to({rotation:-17.8,x:520.3,y:197.8},0).wait(1).to({rotation:-17.9,x:520.7,y:197.7},0).wait(1).to({rotation:-18.1,x:521,y:197.6},0).wait(1).to({rotation:-18.2,x:521.4,y:197.5},0).wait(1).to({rotation:-18.4,x:521.7},0).wait(1).to({rotation:-18.5,x:521.9,y:197.4},0).wait(1).to({rotation:-18.6,x:522.2,y:197.3},0).wait(1).to({rotation:-18.7,x:522.5},0).wait(1).to({rotation:-18.8,x:522.7,y:197.1},0).wait(1).to({rotation:-18.9,x:522.9},0).wait(1).to({rotation:-19,x:523.1},0).wait(1).to({rotation:-19.1,x:523.3,y:197},0).wait(1).to({x:523.5},0).wait(1).to({rotation:-19.2,x:523.7,y:196.9},0).wait(1).to({rotation:-19.3,x:523.8},0).wait(1).to({x:524},0).wait(1).to({rotation:-19.4,x:524.1,y:196.8},0).wait(1).to({rotation:-19.5,x:524.2},0).wait(1).to({x:524.3,y:196.7},0).wait(1).to({x:524.4},0).wait(1).to({rotation:-19.6,x:524.5},0).wait(1).to({x:524.6},0).wait(1).to({x:524.7},0).wait(1).to({rotation:-19.7,y:196.6},0).wait(2).to({x:524.8},0).wait(4).to({regX:74.4,regY:50.2,x:562.5,y:204.1},0).wait(1).to({regX:41.5,regY:30.5,x:524.9,y:196.8,alpha:0.994},0).wait(1).to({y:197.4,alpha:0.976},0).wait(1).to({y:198.3,alpha:0.944},0).wait(1).to({y:199.7,alpha:0.898},0).wait(1).to({y:201.5,alpha:0.837},0).wait(1).to({y:203.8,alpha:0.763},0).wait(1).to({y:206.4,alpha:0.676},0).wait(1).to({y:209.3,alpha:0.58},0).wait(1).to({y:212.3,alpha:0.478},0).wait(1).to({y:215.3,alpha:0.377},0).wait(1).to({y:218.2,alpha:0.281},0).wait(1).to({y:220.8,alpha:0.196},0).wait(1).to({y:222.9,alpha:0.124},0).wait(1).to({y:224.6,alpha:0.069},0).wait(1).to({y:225.7,alpha:0.03},0).wait(1).to({y:226.4,alpha:0.007},0).wait(1).to({regX:74.4,regY:50.2,x:562.5,y:234.1,alpha:0},0).to({_off:true},1).wait(495));

	// g_0008_2.png
	this.instance_20 = new lib.元件36();
	this.instance_20.setTransform(434.4,241.5,1,1,0,0,0,83.5,24.5);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(25).to({_off:false},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.443},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.678},0).wait(1).to({alpha:0.721},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.827},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(43).to({regX:7.8,regY:39.6,x:358.7,y:256.6},0).wait(1).to({regX:83.5,regY:24.5,rotation:3.1,x:416.2,y:245.5},0).wait(1).to({rotation:5.3,x:402.9,y:248.4},0).wait(1).to({rotation:7.1,x:392.2,y:250.7},0).wait(1).to({rotation:8.6,x:383.1,y:252.7},0).wait(1).to({rotation:9.9,x:375.1,y:254.4},0).wait(1).to({rotation:11,x:368.1,y:255.9},0).wait(1).to({rotation:12,x:361.7,y:257.3},0).wait(1).to({rotation:13,x:356,y:258.5},0).wait(1).to({rotation:13.8,x:350.7,y:259.7},0).wait(1).to({rotation:14.6,x:345.8,y:260.7},0).wait(1).to({rotation:15.3,x:341.3,y:261.7},0).wait(1).to({rotation:16,x:337.1,y:262.5},0).wait(1).to({rotation:16.6,x:333.2,y:263.4},0).wait(1).to({rotation:17.2,x:329.5,y:264.1},0).wait(1).to({rotation:17.8,x:326.1,y:264.8},0).wait(1).to({rotation:18.3,x:322.9,y:265.5},0).wait(1).to({rotation:18.7,x:319.8,y:266.1},0).wait(1).to({rotation:19.2,x:317,y:266.7},0).wait(1).to({rotation:19.6,x:314.3,y:267.3},0).wait(1).to({rotation:20,x:311.7,y:267.8},0).wait(1).to({rotation:20.4,x:309.3,y:268.3},0).wait(1).to({rotation:20.8,x:307.1,y:268.7},0).wait(1).to({rotation:21.1,x:304.9,y:269.2},0).wait(1).to({rotation:21.4,x:302.9,y:269.6},0).wait(1).to({rotation:21.7,x:300.9,y:270},0).wait(1).to({rotation:22,x:299.1,y:270.4},0).wait(1).to({rotation:22.3,x:297.3,y:270.7},0).wait(1).to({rotation:22.5,x:295.8,y:271.1},0).wait(1).to({rotation:22.8,x:294.2,y:271.4},0).wait(1).to({rotation:23,x:292.7,y:271.6},0).wait(1).to({rotation:23.2,x:291.4,y:271.9},0).wait(1).to({rotation:23.4,x:290,y:272.2},0).wait(1).to({rotation:23.6,x:288.8,y:272.5},0).wait(1).to({rotation:23.8,x:287.6,y:272.7},0).wait(1).to({rotation:24,x:286.5,y:272.9},0).wait(1).to({rotation:24.1,x:285.5,y:273.1},0).wait(1).to({rotation:24.3,x:284.5,y:273.3},0).wait(1).to({rotation:24.4,x:283.6,y:273.5},0).wait(1).to({rotation:24.5,x:282.7,y:273.7},0).wait(1).to({rotation:24.7,x:281.9,y:273.8},0).wait(1).to({rotation:24.8,x:281.2,y:274},0).wait(1).to({rotation:24.9,x:280.5,y:274.1},0).wait(1).to({rotation:25,x:279.9,y:274.2},0).wait(1).to({rotation:25.1,x:279.2,y:274.4},0).wait(1).to({rotation:25.2,x:278.7},0).wait(1).to({rotation:25.3,x:278.2,y:274.5},0).wait(1).to({x:277.7,y:274.6},0).wait(1).to({rotation:25.4,x:277.3,y:274.7},0).wait(1).to({rotation:25.5,x:276.9,y:274.8},0).wait(1).to({x:276.5,y:274.9},0).wait(1).to({rotation:25.6,x:276.3},0).wait(1).to({x:275.9,y:275},0).wait(1).to({x:275.7},0).wait(1).to({rotation:25.7,x:275.5,y:275.1},0).wait(1).to({x:275.4},0).wait(1).to({x:275.2},0).wait(1).to({x:275.1},0).wait(1).to({x:275},0).wait(2).to({regX:7.8,regY:39.6,x:200.3,y:255.9},0).wait(1).to({regX:83.5,regY:24.5,x:274.9,y:275.3,alpha:0.994},0).wait(1).to({y:275.9,alpha:0.976},0).wait(1).to({y:276.8,alpha:0.944},0).wait(1).to({y:278.2,alpha:0.898},0).wait(1).to({y:280,alpha:0.837},0).wait(1).to({y:282.3,alpha:0.763},0).wait(1).to({y:284.9,alpha:0.676},0).wait(1).to({y:287.8,alpha:0.58},0).wait(1).to({y:290.8,alpha:0.478},0).wait(1).to({y:293.8,alpha:0.377},0).wait(1).to({y:296.7,alpha:0.281},0).wait(1).to({y:299.3,alpha:0.196},0).wait(1).to({y:301.4,alpha:0.124},0).wait(1).to({y:303.1,alpha:0.069},0).wait(1).to({y:304.2,alpha:0.03},0).wait(1).to({y:304.9,alpha:0.007},0).wait(1).to({regX:7.8,regY:39.6,x:200.3,y:285.9,alpha:0},0).to({_off:true},1).wait(495));

	// g_0009_1.png
	this.instance_21 = new lib.元件37();
	this.instance_21.setTransform(297.1,281.4,1,1,0,0,0,17,89.5);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(25).to({_off:false},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.443},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.678},0).wait(1).to({alpha:0.721},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.827},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(43).to({regX:16.6,regY:164.9,x:296.7,y:356.8},0).wait(1).to({regX:17,regY:89.5,rotation:1.7,x:290.7,y:273.5},0).wait(1).to({rotation:2.9,x:286.2,y:267.8},0).wait(1).to({rotation:3.8,x:282.5,y:263.3},0).wait(1).to({rotation:4.6,x:279.4,y:259.6},0).wait(1).to({rotation:5.3,x:276.7,y:256.3},0).wait(1).to({rotation:6,x:274.3,y:253.4},0).wait(1).to({rotation:6.5,x:272.2,y:250.8},0).wait(1).to({rotation:7,x:270.2,y:248.5},0).wait(1).to({rotation:7.5,x:268.5,y:246.4},0).wait(1).to({rotation:7.9,x:266.9,y:244.5},0).wait(1).to({rotation:8.3,x:265.3,y:242.6},0).wait(1).to({rotation:8.7,x:264,y:241},0).wait(1).to({rotation:9,x:262.7,y:239.4},0).wait(1).to({rotation:9.3,x:261.5,y:238},0).wait(1).to({rotation:9.6,x:260.3,y:236.7},0).wait(1).to({rotation:9.9,x:259.3,y:235.4},0).wait(1).to({rotation:10.2,x:258.3,y:234.3},0).wait(1).to({rotation:10.4,x:257.3,y:233.1},0).wait(1).to({rotation:10.6,x:256.5,y:232.1},0).wait(1).to({rotation:10.9,x:255.6,y:231.1},0).wait(1).to({rotation:11.1,x:254.9,y:230.2},0).wait(1).to({rotation:11.3,x:254.1,y:229.3},0).wait(1).to({rotation:11.4,x:253.4,y:228.5},0).wait(1).to({rotation:11.6,x:252.7,y:227.7},0).wait(1).to({rotation:11.8,x:252.1,y:227},0).wait(1).to({rotation:11.9,x:251.5,y:226.3},0).wait(1).to({rotation:12.1,x:250.9,y:225.6},0).wait(1).to({rotation:12.2,x:250.4,y:225},0).wait(1).to({rotation:12.3,x:249.9,y:224.5},0).wait(1).to({rotation:12.5,x:249.5,y:223.9},0).wait(1).to({rotation:12.6,x:249,y:223.4},0).wait(1).to({rotation:12.7,x:248.6,y:222.9},0).wait(1).to({rotation:12.8,x:248.2,y:222.4},0).wait(1).to({rotation:12.9,x:247.8,y:222},0).wait(1).to({rotation:13,x:247.4,y:221.5},0).wait(1).to({rotation:13.1,x:247.1,y:221.2},0).wait(1).to({rotation:13.2,x:246.8,y:220.8},0).wait(1).to({x:246.5,y:220.5},0).wait(1).to({rotation:13.3,x:246.2,y:220.1},0).wait(1).to({rotation:13.4,x:246,y:219.8},0).wait(1).to({x:245.7,y:219.6},0).wait(1).to({rotation:13.5,x:245.5,y:219.3},0).wait(1).to({x:245.3,y:219.1},0).wait(1).to({rotation:13.6,x:245.1,y:218.9},0).wait(1).to({x:244.9,y:218.6},0).wait(1).to({rotation:13.7,x:244.8,y:218.4},0).wait(1).to({x:244.6,y:218.3},0).wait(1).to({rotation:13.8,x:244.4,y:218.1},0).wait(1).to({x:244.3,y:217.9},0).wait(1).to({x:244.2,y:217.8},0).wait(1).to({x:244.1,y:217.7},0).wait(1).to({rotation:13.9,x:244},0).wait(1).to({x:243.9,y:217.6},0).wait(1).to({y:217.5},0).wait(1).to({x:243.8,y:217.4},0).wait(1).to({y:217.3},0).wait(3).to({rotation:14,x:243.7},0).wait(1).to({regX:16.6,regY:164.9,x:225.2,y:290.4},0).wait(1).to({regX:17,regY:89.5,x:243.7,y:217.4,alpha:0.994},0).wait(1).to({y:218,alpha:0.976},0).wait(1).to({y:218.9,alpha:0.944},0).wait(1).to({y:220.3,alpha:0.898},0).wait(1).to({y:222.1,alpha:0.837},0).wait(1).to({y:224.4,alpha:0.763},0).wait(1).to({y:227,alpha:0.676},0).wait(1).to({y:229.9,alpha:0.58},0).wait(1).to({y:232.9,alpha:0.478},0).wait(1).to({y:235.9,alpha:0.377},0).wait(1).to({y:238.8,alpha:0.281},0).wait(1).to({y:241.4,alpha:0.196},0).wait(1).to({y:243.5,alpha:0.124},0).wait(1).to({y:245.2,alpha:0.069},0).wait(1).to({y:246.3,alpha:0.03},0).wait(1).to({y:247,alpha:0.007},0).wait(1).to({regX:16.6,regY:164.9,x:225.2,y:320.4,alpha:0},0).to({_off:true},1).wait(495));

	// a8 (1).png
	this.instance_22 = new lib.元件20();
	this.instance_22.setTransform(396.2,230.2,1,1,0,0,0,109.5,97);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(303).to({_off:false},0).to({y:205.4,alpha:1},30).wait(70).to({regX:108.4,regY:69.6,scaleX:1,scaleY:1,x:395.1,y:178},0).wait(1).to({scaleX:1,scaleY:1,y:177.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:395},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:177.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:394.9,y:177.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:394.8,y:177.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:394.7,y:177.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:394.6,y:177.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:394.4,y:177},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:394.3,y:176.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:394.1,y:176.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:393.9,y:176.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:393.7,y:175.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:393.5,y:175.5},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:393.2,y:175.2},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:393,y:174.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:392.7,y:174.4},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:392.5,y:174.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:392.3,y:173.7},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:392.1,y:173.4},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:391.9,y:173.1},0).wait(1).to({regX:109.5,regY:97,scaleX:0.53,scaleY:0.53,x:392.4,y:187.5},0).wait(1).to({regX:108.4,regY:69.6,scaleX:0.51,scaleY:0.51,x:391.7,y:172.7,alpha:0.688},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:391.5,y:172.6,alpha:0.435},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:172.4,alpha:0.241},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:391.4,y:172.3,alpha:0.105},0).wait(1).to({scaleX:0.47,scaleY:0.47,alpha:0.026},0).wait(1).to({regX:109.7,regY:97.2,scaleX:0.47,scaleY:0.47,x:391.9,y:185.3,alpha:0},0).to({_off:true},1).wait(235));

	// star_mc
	this.instance_23 = new lib.元件18();
	this.instance_23.setTransform(389.3,208.9,1,1,0,0,0,242.3,102);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(402).to({_off:false},0).wait(1).to({regX:250.1,regY:102.5,x:397.1,y:209.4,alpha:0.173},0).wait(1).to({alpha:0.312},0).wait(1).to({alpha:0.425},0).wait(1).to({alpha:0.518},0).wait(1).to({alpha:0.596},0).wait(1).to({alpha:0.662},0).wait(1).to({alpha:0.717},0).wait(1).to({alpha:0.764},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.866},0).wait(1).to({alpha:0.89},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:0.927},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.953},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.989},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.998},0).wait(1).to({regX:242.3,regY:102,x:389.3,y:208.9,alpha:1},0).wait(77).to({regX:250.1,regY:102.5,x:397.1,y:209.4,alpha:0.999},0).wait(1).to({alpha:0.994},0).wait(1).to({y:209.5,alpha:0.987},0).wait(1).to({y:209.6,alpha:0.977},0).wait(1).to({y:209.8,alpha:0.963},0).wait(1).to({y:210,alpha:0.947},0).wait(1).to({y:210.3,alpha:0.926},0).wait(1).to({y:210.6,alpha:0.902},0).wait(1).to({y:210.9,alpha:0.875},0).wait(1).to({y:211.3,alpha:0.844},0).wait(1).to({y:211.8,alpha:0.809},0).wait(1).to({y:212.3,alpha:0.771},0).wait(1).to({y:212.8,alpha:0.73},0).wait(1).to({y:213.4,alpha:0.686},0).wait(1).to({y:214,alpha:0.639},0).wait(1).to({y:214.6,alpha:0.59},0).wait(1).to({y:215.3,alpha:0.539},0).wait(1).to({y:215.9,alpha:0.487},0).wait(1).to({y:216.6,alpha:0.436},0).wait(1).to({y:217.2,alpha:0.384},0).wait(1).to({y:217.9,alpha:0.334},0).wait(1).to({y:218.5,alpha:0.287},0).wait(1).to({y:219.1,alpha:0.241},0).wait(1).to({y:219.6,alpha:0.199},0).wait(1).to({y:220.1,alpha:0.161},0).wait(1).to({y:220.5,alpha:0.126},0).wait(1).to({y:220.9,alpha:0.096},0).wait(1).to({y:221.3,alpha:0.07},0).wait(1).to({y:221.5,alpha:0.048},0).wait(1).to({y:221.8,alpha:0.03},0).wait(1).to({y:221.9,alpha:0.017},0).wait(1).to({y:222.1,alpha:0.007},0).wait(1).to({alpha:0.002},0).wait(1).to({regX:242.3,regY:102,x:389.3,y:221.7,alpha:0},0).to({_off:true},1).wait(125));

	// changeWord0_mc
	this.instance_24 = new lib.补间93();
	this.instance_24.setTransform(304.4,713.2,0.882,0.882);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(470).to({_off:false},0).wait(1).to({regX:5.8,regY:5.9,x:309.5,y:714.7,alpha:0.184},0).wait(1).to({y:712,alpha:0.315},0).wait(1).to({y:710,alpha:0.419},0).wait(1).to({y:708.2,alpha:0.503},0).wait(1).to({y:706.8,alpha:0.574},0).wait(1).to({y:705.6,alpha:0.635},0).wait(1).to({y:704.5,alpha:0.688},0).wait(1).to({y:703.6,alpha:0.733},0).wait(1).to({y:702.8,alpha:0.774},0).wait(1).to({y:702.1,alpha:0.809},0).wait(1).to({regX:0,regY:0,x:304.4,y:696.3,alpha:0.84},0).wait(1).to({regX:5.8,regY:5.9,x:309.5,y:700.9,alpha:0.866},0).wait(1).to({y:700.4,alpha:0.889},0).wait(1).to({y:700,alpha:0.91},0).wait(1).to({y:699.6,alpha:0.927},0).wait(1).to({y:699.3,alpha:0.943},0).wait(1).to({y:699,alpha:0.956},0).wait(1).to({y:698.8,alpha:0.967},0).wait(1).to({y:698.6,alpha:0.976},0).wait(1).to({y:698.4,alpha:0.984},0).wait(1).to({y:698.3,alpha:0.99},0).wait(1).to({y:698.2,alpha:0.994},0).wait(1).to({alpha:0.998},0).wait(1).to({y:698.1,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:304.4,y:692.9,alpha:1},0).wait(12).to({regX:5.8,regY:5.9,x:309.5,y:698.2,alpha:0.996},0).wait(1).to({y:698.4,alpha:0.984},0).wait(1).to({y:698.8,alpha:0.962},0).wait(1).to({y:699.5,alpha:0.929},0).wait(1).to({y:700.3,alpha:0.885},0).wait(1).to({y:701.4,alpha:0.829},0).wait(1).to({y:702.7,alpha:0.761},0).wait(1).to({y:704.3,alpha:0.68},0).wait(1).to({y:706.1,alpha:0.59},0).wait(1).to({y:707.9,alpha:0.494},0).wait(1).to({y:709.8,alpha:0.396},0).wait(1).to({y:711.6,alpha:0.303},0).wait(1).to({y:713.2,alpha:0.22},0).wait(1).to({y:714.6,alpha:0.149},0).wait(1).to({y:715.7,alpha:0.093},0).wait(1).to({y:716.5,alpha:0.05},0).wait(1).to({y:717.1,alpha:0.022},0).wait(1).to({y:717.4,alpha:0.005},0).wait(1).to({regX:0,regY:0,x:304.4,y:712.3,alpha:0},0).to({_off:true},1).wait(140));

	// changeWord1_mc
	this.instance_25 = new lib.补间105();
	this.instance_25.setTransform(372,632.1,0.882,0.882);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(461).to({_off:false},0).wait(1).to({regX:0.3,regY:0.7,x:372.2,y:627,alpha:0.208},0).wait(1).to({y:623.1,alpha:0.348},0).wait(1).to({y:620.2,alpha:0.454},0).wait(1).to({y:617.9,alpha:0.539},0).wait(1).to({y:616,alpha:0.609},0).wait(1).to({y:614.4,alpha:0.669},0).wait(1).to({y:613,alpha:0.719},0).wait(1).to({y:611.8,alpha:0.762},0).wait(1).to({y:610.8,alpha:0.799},0).wait(1).to({y:609.9,alpha:0.832},0).wait(1).to({y:609.1,alpha:0.86},0).wait(1).to({y:608.5,alpha:0.884},0).wait(1).to({y:607.9,alpha:0.905},0).wait(1).to({y:607.4,alpha:0.923},0).wait(1).to({y:607,alpha:0.939},0).wait(1).to({y:606.6,alpha:0.952},0).wait(1).to({y:606.3,alpha:0.964},0).wait(1).to({y:606,alpha:0.973},0).wait(1).to({y:605.8,alpha:0.981},0).wait(1).to({y:605.6,alpha:0.987},0).wait(1).to({y:605.5,alpha:0.992},0).wait(1).to({y:605.4,alpha:0.996},0).wait(1).to({alpha:0.998},0).wait(1).to({y:605.3,alpha:1},0).wait(1).to({regX:0,regY:0,x:372,y:604.7},0).wait(26).to({regX:0.3,regY:0.7,x:372.2,y:605.4,alpha:0.996},0).wait(1).to({y:605.6,alpha:0.983},0).wait(1).to({y:605.9,alpha:0.961},0).wait(1).to({y:606.4,alpha:0.929},0).wait(1).to({y:607.1,alpha:0.886},0).wait(1).to({y:608,alpha:0.832},0).wait(1).to({y:609,alpha:0.766},0).wait(1).to({y:610.2,alpha:0.691},0).wait(1).to({y:611.5,alpha:0.606},0).wait(1).to({y:613,alpha:0.515},0).wait(1).to({y:614.5,alpha:0.422},0).wait(1).to({y:615.9,alpha:0.331},0).wait(1).to({y:617.3,alpha:0.245},0).wait(1).to({y:618.5,alpha:0.17},0).wait(1).to({y:619.4,alpha:0.108},0).wait(1).to({y:620.2,alpha:0.06},0).wait(1).to({y:620.7,alpha:0.026},0).wait(1).to({y:621.1,alpha:0.006},0).wait(1).to({regX:0,regY:0,x:372,y:620.6,alpha:0},0).to({_off:true},1).wait(135));

	// changeWord2_mc
	this.instance_26 = new lib.补间95();
	this.instance_26.setTransform(410.6,595.9,0.882,0.882);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(451).to({_off:false},0).wait(1).to({regX:-17.1,regY:104.3,x:395.5,y:684.2,alpha:0.183},0).wait(1).to({y:681.5,alpha:0.314},0).wait(1).to({y:679.5,alpha:0.416},0).wait(1).to({y:677.7,alpha:0.5},0).wait(1).to({y:676.3,alpha:0.571},0).wait(1).to({y:675.1,alpha:0.631},0).wait(1).to({y:674,alpha:0.684},0).wait(1).to({y:673.1,alpha:0.729},0).wait(1).to({y:672.3,alpha:0.769},0).wait(1).to({y:671.6,alpha:0.804},0).wait(1).to({y:670.9,alpha:0.835},0).wait(1).to({y:670.4,alpha:0.862},0).wait(1).to({y:669.9,alpha:0.886},0).wait(1).to({y:669.5,alpha:0.907},0).wait(1).to({y:669.1,alpha:0.925},0).wait(1).to({y:668.8,alpha:0.941},0).wait(1).to({y:668.5,alpha:0.954},0).wait(1).to({y:668.3,alpha:0.966},0).wait(1).to({y:668.1,alpha:0.976},0).wait(1).to({y:667.9,alpha:0.983},0).wait(1).to({y:667.8,alpha:0.99},0).wait(1).to({y:667.7,alpha:0.994},0).wait(1).to({alpha:0.998},0).wait(1).to({y:667.6,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:410.6,y:575.6,alpha:1},0).wait(42).to({regX:-17.1,regY:104.3,x:395.5,y:667.7,alpha:0.996},0).wait(1).to({y:667.9,alpha:0.984},0).wait(1).to({y:668.3,alpha:0.962},0).wait(1).to({y:669,alpha:0.929},0).wait(1).to({y:669.8,alpha:0.885},0).wait(1).to({y:670.9,alpha:0.829},0).wait(1).to({y:672.3,alpha:0.761},0).wait(1).to({y:673.8,alpha:0.68},0).wait(1).to({y:675.6,alpha:0.59},0).wait(1).to({y:677.4,alpha:0.494},0).wait(1).to({y:679.3,alpha:0.396},0).wait(1).to({y:681.1,alpha:0.303},0).wait(1).to({y:682.8,alpha:0.22},0).wait(1).to({y:684.1,alpha:0.149},0).wait(1).to({y:685.2,alpha:0.093},0).wait(1).to({y:686.1,alpha:0.05},0).wait(1).to({y:686.6,alpha:0.022},0).wait(1).to({y:686.9,alpha:0.005},0).wait(1).to({regX:0,regY:0,x:410.6,y:595,alpha:0},0).to({_off:true},1).wait(129));

	// changeWord3_mc
	this.instance_27 = new lib.补间97();
	this.instance_27.setTransform(451.4,651.5,0.882,0.882);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(440).to({_off:false},0).wait(1).to({regX:-18.7,regY:-12.2,x:434.9,y:637,alpha:0.183},0).wait(1).to({y:634.3,alpha:0.314},0).wait(1).to({y:632.3,alpha:0.416},0).wait(1).to({y:630.5,alpha:0.5},0).wait(1).to({y:629.1,alpha:0.571},0).wait(1).to({y:627.9,alpha:0.631},0).wait(1).to({y:626.8,alpha:0.684},0).wait(1).to({y:625.9,alpha:0.729},0).wait(1).to({y:625.1,alpha:0.769},0).wait(1).to({y:624.4,alpha:0.804},0).wait(1).to({y:623.7,alpha:0.835},0).wait(1).to({y:623.2,alpha:0.862},0).wait(1).to({y:622.7,alpha:0.886},0).wait(1).to({y:622.3,alpha:0.907},0).wait(1).to({y:621.9,alpha:0.925},0).wait(1).to({y:621.6,alpha:0.941},0).wait(1).to({y:621.3,alpha:0.954},0).wait(1).to({y:621.1,alpha:0.966},0).wait(1).to({y:620.9,alpha:0.976},0).wait(1).to({y:620.7,alpha:0.983},0).wait(1).to({y:620.6,alpha:0.99},0).wait(1).to({y:620.5,alpha:0.994},0).wait(1).to({alpha:0.998},0).wait(1).to({y:620.4,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:451.4,y:631.2,alpha:1},0).wait(58).to({regX:-18.7,regY:-12.2,x:434.9,y:620.5,alpha:0.996},0).wait(1).to({y:620.7,alpha:0.984},0).wait(1).to({y:621.1,alpha:0.962},0).wait(1).to({y:621.8,alpha:0.929},0).wait(1).to({y:622.6,alpha:0.885},0).wait(1).to({y:623.7,alpha:0.829},0).wait(1).to({y:625,alpha:0.761},0).wait(1).to({y:626.6,alpha:0.68},0).wait(1).to({y:628.4,alpha:0.59},0).wait(1).to({y:630.2,alpha:0.494},0).wait(1).to({y:632.1,alpha:0.396},0).wait(1).to({y:633.9,alpha:0.303},0).wait(1).to({y:635.5,alpha:0.22},0).wait(1).to({y:636.9,alpha:0.149},0).wait(1).to({y:638,alpha:0.093},0).wait(1).to({y:638.8,alpha:0.05},0).wait(1).to({y:639.4,alpha:0.022},0).wait(1).to({y:639.7,alpha:0.005},0).wait(1).to({regX:0,regY:0,x:451.4,y:650.6,alpha:0},0).to({_off:true},1).wait(124));

	// changeWord4_mc
	this.instance_28 = new lib.补间99();
	this.instance_28.setTransform(492.1,651,0.882,0.882);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(431).to({_off:false},0).wait(1).to({regX:-17.1,regY:24,x:477,y:668.5,alpha:0.183},0).wait(1).to({y:665.8,alpha:0.314},0).wait(1).to({y:663.8,alpha:0.416},0).wait(1).to({y:662,alpha:0.5},0).wait(1).to({y:660.6,alpha:0.571},0).wait(1).to({y:659.4,alpha:0.631},0).wait(1).to({y:658.3,alpha:0.684},0).wait(1).to({y:657.4,alpha:0.729},0).wait(1).to({y:656.6,alpha:0.769},0).wait(1).to({y:655.9,alpha:0.804},0).wait(1).to({y:655.2,alpha:0.835},0).wait(1).to({y:654.7,alpha:0.862},0).wait(1).to({y:654.2,alpha:0.886},0).wait(1).to({y:653.8,alpha:0.907},0).wait(1).to({y:653.4,alpha:0.925},0).wait(1).to({y:653.1,alpha:0.941},0).wait(1).to({y:652.8,alpha:0.954},0).wait(1).to({y:652.6,alpha:0.966},0).wait(1).to({y:652.4,alpha:0.976},0).wait(1).to({y:652.2,alpha:0.983},0).wait(1).to({y:652.1,alpha:0.99},0).wait(1).to({y:652,alpha:0.994},0).wait(1).to({alpha:0.998},0).wait(1).to({y:651.9,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:492.1,y:630.7,alpha:1},0).wait(72).to({regX:-17.1,regY:24,x:477,y:652,alpha:0.996},0).wait(1).to({y:652.2,alpha:0.984},0).wait(1).to({y:652.6,alpha:0.962},0).wait(1).to({y:653.3,alpha:0.929},0).wait(1).to({y:654.1,alpha:0.885},0).wait(1).to({y:655.2,alpha:0.829},0).wait(1).to({y:656.5,alpha:0.761},0).wait(1).to({y:658.1,alpha:0.68},0).wait(1).to({y:659.9,alpha:0.59},0).wait(1).to({y:661.7,alpha:0.494},0).wait(1).to({y:663.6,alpha:0.396},0).wait(1).to({y:665.4,alpha:0.303},0).wait(1).to({y:667,alpha:0.22},0).wait(1).to({y:668.4,alpha:0.149},0).wait(1).to({y:669.5,alpha:0.093},0).wait(1).to({y:670.3,alpha:0.05},0).wait(1).to({y:670.9,alpha:0.022},0).wait(1).to({y:671.2,alpha:0.005},0).wait(1).to({regX:0,regY:0,x:492.1,y:650.1,alpha:0},0).to({_off:true},1).wait(119));

	// c7_0002_图层-11.png
	this.instance_29 = new lib.补间87("synched",0);
	this.instance_29.setTransform(357.3,657.9,0.79,0.79);
	this.instance_29.alpha = 0.5;
	this.instance_29._off = true;

	this.instance_30 = new lib.补间88("synched",0);
	this.instance_30.setTransform(357.3,636.1,0.79,0.79);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(357).to({_off:false},0).wait(1).to({regX:1,regY:79.5,x:358.1,y:716.6,alpha:0.595},0).wait(1).to({y:713.8,alpha:0.659},0).wait(1).to({y:711.6,alpha:0.709},0).wait(1).to({y:709.8,alpha:0.75},0).wait(1).to({y:708.3,alpha:0.784},0).wait(1).to({y:707.1,alpha:0.813},0).wait(1).to({y:706,alpha:0.839},0).wait(1).to({y:705,alpha:0.861},0).wait(1).to({y:704.2,alpha:0.88},0).wait(1).to({y:703.4,alpha:0.898},0).wait(1).to({y:702.7,alpha:0.913},0).wait(1).to({y:702.2,alpha:0.926},0).wait(1).to({y:701.6,alpha:0.938},0).wait(1).to({y:701.2,alpha:0.949},0).wait(1).to({y:700.8,alpha:0.958},0).wait(1).to({y:700.4,alpha:0.966},0).wait(1).to({y:700.1,alpha:0.973},0).wait(1).to({y:699.9,alpha:0.979},0).wait(1).to({y:699.6,alpha:0.984},0).wait(1).to({y:699.4,alpha:0.989},0).wait(1).to({y:699.3,alpha:0.992},0).wait(1).to({y:699.2,alpha:0.995},0).wait(1).to({y:699.1,alpha:0.997},0).wait(1).to({y:699,alpha:0.999},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(283));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(383).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({regX:1,regY:79.5,x:358.1,y:699,alpha:0.996},0).wait(1).to({y:699.3,alpha:0.984},0).wait(1).to({y:699.8,alpha:0.962},0).wait(1).to({y:700.6,alpha:0.931},0).wait(1).to({y:701.6,alpha:0.89},0).wait(1).to({y:702.8,alpha:0.839},0).wait(1).to({y:704.2,alpha:0.778},0).wait(1).to({y:705.9,alpha:0.707},0).wait(1).to({y:707.7,alpha:0.629},0).wait(1).to({y:709.7,alpha:0.545},0).wait(1).to({y:711.8,alpha:0.458},0).wait(1).to({y:713.8,alpha:0.371},0).wait(1).to({y:715.8,alpha:0.289},0).wait(1).to({y:717.6,alpha:0.213},0).wait(1).to({y:719.1,alpha:0.148},0).wait(1).to({y:720.4,alpha:0.094},0).wait(1).to({y:721.4,alpha:0.052},0).wait(1).to({y:722.1,alpha:0.023},0).wait(1).to({y:722.5,alpha:0.006},0).wait(1).to({regX:0,regY:0,x:357.3,y:659.8,alpha:0},0).to({_off:true},1).wait(261));

	// c7_0001_图层-10.png
	this.instance_31 = new lib.补间89("synched",0);
	this.instance_31.setTransform(396.5,684.3,0.79,0.79);
	this.instance_31.alpha = 0.5;
	this.instance_31._off = true;

	this.instance_32 = new lib.补间90("synched",0);
	this.instance_32.setTransform(396.5,662.6,0.79,0.79);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(341).to({_off:false},0).wait(1).to({regX:2,regY:-26,x:398.1,y:659.6,alpha:0.595},0).wait(1).to({y:656.8,alpha:0.659},0).wait(1).to({y:654.7,alpha:0.709},0).wait(1).to({y:652.9,alpha:0.75},0).wait(1).to({y:651.4,alpha:0.784},0).wait(1).to({y:650.1,alpha:0.813},0).wait(1).to({y:649,alpha:0.839},0).wait(1).to({y:648.1,alpha:0.861},0).wait(1).to({y:647.2,alpha:0.88},0).wait(1).to({y:646.5,alpha:0.898},0).wait(1).to({y:645.8,alpha:0.913},0).wait(1).to({y:645.3,alpha:0.926},0).wait(1).to({y:644.7,alpha:0.938},0).wait(1).to({y:644.3,alpha:0.949},0).wait(1).to({y:643.9,alpha:0.958},0).wait(1).to({y:643.5,alpha:0.966},0).wait(1).to({y:643.2,alpha:0.973},0).wait(1).to({y:643,alpha:0.979},0).wait(1).to({y:642.7,alpha:0.984},0).wait(1).to({y:642.5,alpha:0.989},0).wait(1).to({y:642.4,alpha:0.992},0).wait(1).to({y:642.3,alpha:0.995},0).wait(1).to({y:642.2,alpha:0.997},0).wait(1).to({y:642.1,alpha:0.999},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(299));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(367).to({_off:false},0).wait(27).to({startPosition:0},0).wait(1).to({regX:2,regY:-26,x:398.1,y:642.1,alpha:0.996},0).wait(1).to({y:642.4,alpha:0.984},0).wait(1).to({y:642.9,alpha:0.962},0).wait(1).to({y:643.7,alpha:0.931},0).wait(1).to({y:644.7,alpha:0.89},0).wait(1).to({y:645.9,alpha:0.839},0).wait(1).to({y:647.3,alpha:0.778},0).wait(1).to({y:649,alpha:0.707},0).wait(1).to({y:650.8,alpha:0.629},0).wait(1).to({y:652.8,alpha:0.545},0).wait(1).to({y:654.9,alpha:0.458},0).wait(1).to({y:656.9,alpha:0.371},0).wait(1).to({y:658.9,alpha:0.289},0).wait(1).to({y:660.7,alpha:0.213},0).wait(1).to({y:662.2,alpha:0.148},0).wait(1).to({y:663.5,alpha:0.094},0).wait(1).to({y:664.5,alpha:0.052},0).wait(1).to({y:665.2,alpha:0.023},0).wait(1).to({y:665.6,alpha:0.006},0).wait(1).to({regX:0,regY:0,x:396.5,y:686.3,alpha:0},0).to({_off:true},1).wait(251));

	// c7_0000_图层-9.png
	this.instance_33 = new lib.补间92();
	this.instance_33.setTransform(437.8,669,0.79,0.79);
	this.instance_33.alpha = 0.5;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(327).to({_off:false},0).wait(1).to({regX:1,regY:47,x:438.6,y:702,alpha:0.595},0).wait(1).to({y:699.2,alpha:0.659},0).wait(1).to({y:697,alpha:0.709},0).wait(1).to({y:695.2,alpha:0.75},0).wait(1).to({y:693.7,alpha:0.784},0).wait(1).to({y:692.5,alpha:0.813},0).wait(1).to({y:691.4,alpha:0.839},0).wait(1).to({y:690.4,alpha:0.861},0).wait(1).to({y:689.6,alpha:0.88},0).wait(1).to({y:688.8,alpha:0.898},0).wait(1).to({y:688.1,alpha:0.913},0).wait(1).to({y:687.6,alpha:0.926},0).wait(1).to({y:687,alpha:0.938},0).wait(1).to({y:686.6,alpha:0.949},0).wait(1).to({y:686.2,alpha:0.958},0).wait(1).to({y:685.8,alpha:0.966},0).wait(1).to({y:685.5,alpha:0.973},0).wait(1).to({y:685.3,alpha:0.979},0).wait(1).to({y:685,alpha:0.984},0).wait(1).to({y:684.8,alpha:0.989},0).wait(1).to({y:684.7,alpha:0.992},0).wait(1).to({y:684.6,alpha:0.995},0).wait(1).to({y:684.5,alpha:0.997},0).wait(1).to({y:684.4,alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:0,regY:0,x:437.8,y:647.2},0).wait(51).to({regX:1,regY:47,x:438.6,y:684.4,alpha:0.996},0).wait(1).to({y:684.7,alpha:0.984},0).wait(1).to({y:685.2,alpha:0.962},0).wait(1).to({y:686,alpha:0.931},0).wait(1).to({y:687,alpha:0.89},0).wait(1).to({y:688.2,alpha:0.839},0).wait(1).to({y:689.6,alpha:0.778},0).wait(1).to({y:691.3,alpha:0.707},0).wait(1).to({y:693.1,alpha:0.629},0).wait(1).to({y:695.1,alpha:0.545},0).wait(1).to({y:697.2,alpha:0.458},0).wait(1).to({y:699.2,alpha:0.371},0).wait(1).to({y:701.2,alpha:0.289},0).wait(1).to({y:703,alpha:0.213},0).wait(1).to({y:704.5,alpha:0.148},0).wait(1).to({y:705.8,alpha:0.094},0).wait(1).to({y:706.8,alpha:0.052},0).wait(1).to({y:707.5,alpha:0.023},0).wait(1).to({y:707.9,alpha:0.006},0).wait(1).to({regX:0,regY:0,x:437.8,y:670.9,alpha:0},0).to({_off:true},1).wait(242));

	// 图层 21
	this.instance_34 = new lib.补间41("synched",0);
	this.instance_34.setTransform(355.9,694.6);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.instance_35 = new lib.补间42("synched",0);
	this.instance_35.setTransform(355.9,678.2);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(242).to({_off:false},0).wait(1).to({y:691.3,alpha:0.203},0).wait(1).to({y:688.9,alpha:0.345},0).wait(1).to({y:687.1,alpha:0.456},0).wait(1).to({y:685.7,alpha:0.545},0).wait(1).to({y:684.5,alpha:0.619},0).wait(1).to({y:683.4,alpha:0.681},0).wait(1).to({y:682.5,alpha:0.735},0).wait(1).to({y:681.8,alpha:0.781},0).wait(1).to({y:681.1,alpha:0.82},0).wait(1).to({y:680.6,alpha:0.854},0).wait(1).to({y:680.1,alpha:0.883},0).wait(1).to({y:679.7,alpha:0.908},0).wait(1).to({y:679.4,alpha:0.93},0).wait(1).to({y:679.1,alpha:0.948},0).wait(1).to({y:678.8,alpha:0.963},0).wait(1).to({y:678.6,alpha:0.975},0).wait(1).to({y:678.5,alpha:0.984},0).wait(1).to({y:678.3,alpha:0.991},0).wait(1).to({alpha:0.996},0).wait(1).to({y:678.2,alpha:0.999},0).to({_off:true},1).wait(403));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(263).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({y:678.3,alpha:0.994},0).wait(1).to({y:678.5,alpha:0.974},0).wait(1).to({y:679,alpha:0.938},0).wait(1).to({y:679.7,alpha:0.884},0).wait(1).to({y:680.7,alpha:0.81},0).wait(1).to({y:682,alpha:0.713},0).wait(1).to({y:683.5,alpha:0.596},0).wait(1).to({y:685.3,alpha:0.465},0).wait(1).to({y:687,alpha:0.331},0).wait(1).to({y:688.6,alpha:0.21},0).wait(1).to({y:689.9,alpha:0.115},0).wait(1).to({y:690.8,alpha:0.049},0).wait(1).to({y:691.2,alpha:0.011},0).wait(1).to({y:691.4,alpha:0},0).to({_off:true},1).wait(387));

	// c6_0004_图层-7.png
	this.instance_36 = new lib.补间83("synched",0);
	this.instance_36.setTransform(393.5,703.6,0.783,0.783);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.instance_37 = new lib.补间84("synched",0);
	this.instance_37.setTransform(393.5,689.9,0.783,0.783);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(224).to({_off:false},0).wait(1).to({regX:1.5,regY:-12,x:394.6,y:691.7,alpha:0.176},0).wait(1).to({y:689.9,alpha:0.311},0).wait(1).to({y:688.4,alpha:0.42},0).wait(1).to({y:687.2,alpha:0.511},0).wait(1).to({y:686.1,alpha:0.587},0).wait(1).to({y:685.2,alpha:0.652},0).wait(1).to({y:684.5,alpha:0.708},0).wait(1).to({y:683.8,alpha:0.756},0).wait(1).to({y:683.2,alpha:0.798},0).wait(1).to({y:682.7,alpha:0.834},0).wait(1).to({y:682.3,alpha:0.866},0).wait(1).to({y:681.9,alpha:0.893},0).wait(1).to({y:681.6,alpha:0.916},0).wait(1).to({y:681.3,alpha:0.936},0).wait(1).to({y:681.1,alpha:0.952},0).wait(1).to({y:680.9,alpha:0.966},0).wait(1).to({y:680.8,alpha:0.977},0).wait(1).to({y:680.6,alpha:0.986},0).wait(1).to({alpha:0.992},0).wait(1).to({y:680.5,alpha:0.997},0).wait(1).to({alpha:0.999},0).to({_off:true},1).wait(420));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(246).to({_off:false},0).wait(26).to({startPosition:0},0).wait(1).to({regX:1.5,regY:-12,x:394.6,y:680.7,alpha:0.99},0).wait(1).to({y:681.4,alpha:0.956},0).wait(1).to({y:682.8,alpha:0.897},0).wait(1).to({y:684.7,alpha:0.81},0).wait(1).to({y:687.3,alpha:0.696},0).wait(1).to({y:690.4,alpha:0.559},0).wait(1).to({y:693.7,alpha:0.411},0).wait(1).to({y:696.9,alpha:0.27},0).wait(1).to({y:699.5,alpha:0.151},0).wait(1).to({y:701.5,alpha:0.066},0).wait(1).to({y:702.6,alpha:0.016},0).wait(1).to({regX:0,regY:0,x:393.5,y:712.4,alpha:0},0).to({_off:true},1).wait(381));

	// c6_0003_图层-6.png
	this.instance_38 = new lib.补间75("synched",0);
	this.instance_38.setTransform(433.6,696,0.783,0.783);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.instance_39 = new lib.补间76("synched",0);
	this.instance_39.setTransform(433.6,682.3,0.783,0.783);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(207).to({_off:false},0).wait(1).to({regX:1.5,regY:-26,x:434.8,y:673.3,alpha:0.169},0).wait(1).to({y:671.5,alpha:0.301},0).wait(1).to({y:670,alpha:0.407},0).wait(1).to({y:668.8,alpha:0.496},0).wait(1).to({y:667.8,alpha:0.571},0).wait(1).to({y:666.9,alpha:0.636},0).wait(1).to({y:666.1,alpha:0.692},0).wait(1).to({y:665.5,alpha:0.74},0).wait(1).to({y:664.9,alpha:0.782},0).wait(1).to({y:664.4,alpha:0.819},0).wait(1).to({y:663.9,alpha:0.851},0).wait(1).to({y:663.6,alpha:0.879},0).wait(1).to({y:663.2,alpha:0.903},0).wait(1).to({y:662.9,alpha:0.924},0).wait(1).to({y:662.7,alpha:0.942},0).wait(1).to({y:662.5,alpha:0.957},0).wait(1).to({y:662.3,alpha:0.969},0).wait(1).to({y:662.2,alpha:0.979},0).wait(1).to({y:662.1,alpha:0.987},0).wait(1).to({y:662,alpha:0.993},0).wait(1).to({y:661.9,alpha:0.997},0).wait(1).to({alpha:0.999},0).to({_off:true},1).wait(436));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(230).to({_off:false},0).wait(47).to({startPosition:0},0).wait(1).to({regX:1.5,regY:-26,x:434.8,y:662.1,alpha:0.99},0).wait(1).to({y:662.9,alpha:0.956},0).wait(1).to({y:664.2,alpha:0.897},0).wait(1).to({y:666.2,alpha:0.81},0).wait(1).to({y:668.7,alpha:0.696},0).wait(1).to({y:671.8,alpha:0.559},0).wait(1).to({y:675.1,alpha:0.411},0).wait(1).to({y:678.3,alpha:0.27},0).wait(1).to({y:681,alpha:0.151},0).wait(1).to({y:682.9,alpha:0.066},0).wait(1).to({y:684,alpha:0.016},0).wait(1).to({regX:0,regY:0,x:433.6,y:704.8,alpha:0},0).to({_off:true},1).wait(376));

	// a7 (2).png
	this.instance_40 = new lib.ewqrqwer("synched",0);
	this.instance_40.setTransform(392,-237.6);
	this.instance_40._off = true;

	this.instance_41 = new lib.rwqereqw("synched",0);
	this.instance_41.setTransform(393.9,213.1);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(185).to({_off:false},0).wait(1).to({x:392.2,y:-182.7},0).wait(1).to({x:392.4,y:-144.5},0).wait(1).to({x:392.5,y:-113.9},0).wait(1).to({x:392.6,y:-88.1},0).wait(1).to({x:392.7,y:-65.6},0).wait(1).to({x:392.8,y:-45.6},0).wait(1).to({x:392.9,y:-27.5},0).wait(1).to({y:-10.9},0).wait(1).to({x:393,y:4.3},0).wait(1).to({x:393.1,y:18.4},0).wait(1).to({y:31.5},0).wait(1).to({x:393.2,y:43.7},0).wait(1).to({y:55.2},0).wait(1).to({y:66},0).wait(1).to({x:393.3,y:76.1},0).wait(1).to({y:85.7},0).wait(1).to({x:393.4,y:94.8},0).wait(1).to({y:103.3},0).wait(1).to({y:111.4},0).wait(1).to({x:393.5,y:119.1},0).wait(1).to({y:126.3},0).wait(1).to({y:133.2},0).wait(1).to({y:139.8},0).wait(1).to({x:393.6,y:145.9},0).wait(1).to({y:151.8},0).wait(1).to({y:157.3},0).wait(1).to({y:162.6},0).wait(1).to({x:393.7,y:167.5},0).wait(1).to({y:172.2},0).wait(1).to({y:176.6},0).wait(1).to({y:180.7},0).wait(1).to({y:184.6},0).wait(1).to({y:188.2},0).wait(1).to({x:393.8,y:191.6},0).wait(1).to({y:194.7},0).wait(1).to({y:197.6},0).wait(1).to({y:200.2},0).wait(1).to({y:202.6},0).wait(1).to({y:204.7},0).wait(1).to({y:206.7},0).wait(1).to({y:208.3},0).wait(1).to({y:209.8},0).wait(1).to({y:210.9},0).wait(1).to({y:211.9},0).wait(1).to({y:212.5},0).wait(1).to({y:213},0).to({_off:true},1).wait(434));
	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(232).to({_off:false},0).wait(42).to({startPosition:0},0).wait(1).to({y:213.7},0).wait(1).to({y:215.6},0).wait(1).to({y:218.7},0).wait(1).to({y:223.1},0).wait(1).to({y:228.7},0).wait(1).to({y:235.6},0).wait(1).to({y:243.7},0).wait(1).to({y:253},0).wait(1).to({y:263.6},0).wait(1).to({y:275.3},0).wait(1).to({y:288.2},0).wait(1).to({y:302.3},0).wait(1).to({y:317.4},0).wait(1).to({y:333.7},0).wait(1).to({y:351},0).wait(1).to({y:369.3},0).wait(1).to({y:388.6},0).wait(1).to({y:408.7},0).wait(1).to({y:429.7},0).wait(1).to({y:451.5},0).wait(1).to({y:474.1},0).wait(1).to({y:497.3},0).wait(1).to({y:521},0).wait(1).to({y:545.3},0).wait(1).to({y:570},0).wait(1).to({y:595.1},0).wait(1).to({y:620.4},0).wait(1).to({y:645.9},0).wait(1).to({y:671.5},0).wait(1).to({y:697.1},0).wait(1).to({y:722.5},0).wait(1).to({y:747.8},0).wait(1).to({y:772.9},0).wait(1).to({y:797.5},0).wait(1).to({y:821.8},0).wait(1).to({y:845.5},0).wait(1).to({y:868.6},0).wait(1).to({y:891},0).wait(1).to({y:912.7},0).wait(1).to({y:933.5},0).wait(1).to({y:953.5},0).wait(1).to({y:972.5},0).wait(1).to({y:990.5},0).wait(1).to({y:1007.5},0).wait(1).to({y:1023.4},0).wait(1).to({y:1038.1},0).wait(1).to({y:1051.7},0).wait(1).to({y:1064},0).wait(1).to({y:1075.1},0).wait(1).to({y:1085},0).wait(1).to({y:1093.5},0).wait(1).to({y:1100.8},0).wait(1).to({y:1106.8},0).wait(1).to({y:1111.4},0).wait(1).to({y:1114.7},0).wait(1).to({y:1116.7},0).wait(1).to({y:1117.4},0).to({_off:true},1).wait(334));

	// a7 (1).png
	this.instance_42 = new lib.fsdfas("synched",0);
	this.instance_42.setTransform(394.9,682);
	this.instance_42.alpha = 0;
	this.instance_42._off = true;

	this.instance_43 = new lib.fsdafads("synched",0);
	this.instance_43.setTransform(394.9,667.7);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(219).to({_off:false},0).wait(1).to({y:680.1,alpha:0.131},0).wait(1).to({y:678.9,alpha:0.22},0).wait(1).to({y:677.8,alpha:0.291},0).wait(1).to({y:677,alpha:0.351},0).wait(1).to({y:676.2,alpha:0.403},0).wait(1).to({y:675.6,alpha:0.449},0).wait(1).to({y:675,alpha:0.491},0).wait(1).to({y:674.4,alpha:0.529},0).wait(1).to({y:673.9,alpha:0.564},0).wait(1).to({y:673.5,alpha:0.597},0).wait(1).to({y:673,alpha:0.627},0).wait(1).to({y:672.6,alpha:0.656},0).wait(1).to({y:672.2,alpha:0.682},0).wait(1).to({y:671.9,alpha:0.707},0).wait(1).to({y:671.6,alpha:0.731},0).wait(1).to({y:671.2,alpha:0.753},0).wait(1).to({y:670.9,alpha:0.774},0).wait(1).to({y:670.7,alpha:0.793},0).wait(1).to({y:670.4,alpha:0.812},0).wait(1).to({y:670.1,alpha:0.829},0).wait(1).to({y:669.9,alpha:0.846},0).wait(1).to({y:669.7,alpha:0.861},0).wait(1).to({y:669.5,alpha:0.876},0).wait(1).to({y:669.3,alpha:0.89},0).wait(1).to({y:669.1,alpha:0.903},0).wait(1).to({y:668.9,alpha:0.915},0).wait(1).to({y:668.8,alpha:0.926},0).wait(1).to({y:668.6,alpha:0.937},0).wait(1).to({y:668.5,alpha:0.946},0).wait(1).to({y:668.3,alpha:0.955},0).wait(1).to({y:668.2,alpha:0.963},0).wait(1).to({y:668.1,alpha:0.971},0).wait(1).to({y:668,alpha:0.977},0).wait(1).to({y:667.9,alpha:0.983},0).wait(1).to({alpha:0.988},0).wait(1).to({y:667.8,alpha:0.992},0).wait(1).to({alpha:0.996},0).wait(1).to({y:667.7,alpha:0.998},0).wait(1).to({alpha:0.999},0).to({_off:true},1).wait(407));
	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(259).to({_off:false},0).wait(9).to({startPosition:0},0).wait(1).to({alpha:0.998},0).wait(1).to({y:667.8,alpha:0.992},0).wait(1).to({y:667.9,alpha:0.983},0).wait(1).to({y:668,alpha:0.969},0).wait(1).to({y:668.2,alpha:0.952},0).wait(1).to({y:668.4,alpha:0.93},0).wait(1).to({y:668.7,alpha:0.904},0).wait(1).to({y:669,alpha:0.875},0).wait(1).to({y:669.4,alpha:0.841},0).wait(1).to({y:669.7,alpha:0.804},0).wait(1).to({y:670.2,alpha:0.763},0).wait(1).to({y:670.6,alpha:0.719},0).wait(1).to({y:671.1,alpha:0.673},0).wait(1).to({y:671.6,alpha:0.624},0).wait(1).to({y:672.1,alpha:0.573},0).wait(1).to({y:672.7,alpha:0.522},0).wait(1).to({y:673.2,alpha:0.469},0).wait(1).to({y:673.8,alpha:0.417},0).wait(1).to({y:674.3,alpha:0.366},0).wait(1).to({y:674.8,alpha:0.317},0).wait(1).to({y:675.3,alpha:0.269},0).wait(1).to({y:675.8,alpha:0.225},0).wait(1).to({y:676.2,alpha:0.183},0).wait(1).to({y:676.6,alpha:0.145},0).wait(1).to({y:676.9,alpha:0.111},0).wait(1).to({y:677.2,alpha:0.082},0).wait(1).to({y:677.5,alpha:0.057},0).wait(1).to({y:677.7,alpha:0.036},0).wait(1).to({y:677.9,alpha:0.02},0).wait(1).to({y:678,alpha:0.009},0).wait(1).to({y:678.1,alpha:0.002},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(365));

	// 图层 22 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_219 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_274 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_275 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_276 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_277 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_278 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_279 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_280 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_281 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_282 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_283 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_284 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_285 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_286 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_287 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_288 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_289 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_290 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_291 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_292 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_293 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_294 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_295 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_296 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_297 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_298 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_299 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_300 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_301 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_302 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_303 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_304 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_305 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_306 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_307 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_308 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_309 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_310 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_311 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_312 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_313 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_314 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_315 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_316 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_317 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_318 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_319 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_320 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_321 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_322 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_323 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_324 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_325 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_326 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_327 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_328 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_329 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_330 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");
	var mask_graphics_331 = new cjs.Graphics().p("AogP2IAA/rIRBAAIAAfrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(219).to({graphics:mask_graphics_219,x:394.8,y:214.7}).wait(55).to({graphics:mask_graphics_274,x:394.8,y:214.7}).wait(1).to({graphics:mask_graphics_275,x:394.8,y:215.3}).wait(1).to({graphics:mask_graphics_276,x:394.8,y:217.2}).wait(1).to({graphics:mask_graphics_277,x:394.8,y:220.3}).wait(1).to({graphics:mask_graphics_278,x:394.8,y:224.7}).wait(1).to({graphics:mask_graphics_279,x:394.8,y:230.3}).wait(1).to({graphics:mask_graphics_280,x:394.8,y:237.2}).wait(1).to({graphics:mask_graphics_281,x:394.7,y:245.3}).wait(1).to({graphics:mask_graphics_282,x:394.7,y:254.7}).wait(1).to({graphics:mask_graphics_283,x:394.7,y:265.2}).wait(1).to({graphics:mask_graphics_284,x:394.6,y:277}).wait(1).to({graphics:mask_graphics_285,x:394.6,y:289.9}).wait(1).to({graphics:mask_graphics_286,x:394.5,y:304}).wait(1).to({graphics:mask_graphics_287,x:394.5,y:319.2}).wait(1).to({graphics:mask_graphics_288,x:394.5,y:335.5}).wait(1).to({graphics:mask_graphics_289,x:394.4,y:352.8}).wait(1).to({graphics:mask_graphics_290,x:394.3,y:371.1}).wait(1).to({graphics:mask_graphics_291,x:394.3,y:390.4}).wait(1).to({graphics:mask_graphics_292,x:394.2,y:410.6}).wait(1).to({graphics:mask_graphics_293,x:394.2,y:431.7}).wait(1).to({graphics:mask_graphics_294,x:394.1,y:453.5}).wait(1).to({graphics:mask_graphics_295,x:394,y:476.1}).wait(1).to({graphics:mask_graphics_296,x:393.9,y:499.3}).wait(1).to({graphics:mask_graphics_297,x:393.9,y:523.2}).wait(1).to({graphics:mask_graphics_298,x:393.8,y:547.5}).wait(1).to({graphics:mask_graphics_299,x:393.7,y:572.2}).wait(1).to({graphics:mask_graphics_300,x:393.6,y:597.3}).wait(1).to({graphics:mask_graphics_301,x:393.6,y:622.7}).wait(1).to({graphics:mask_graphics_302,x:393.5,y:648.2}).wait(1).to({graphics:mask_graphics_303,x:393.4,y:673.8}).wait(1).to({graphics:mask_graphics_304,x:393.3,y:699.5}).wait(1).to({graphics:mask_graphics_305,x:393.2,y:725}).wait(1).to({graphics:mask_graphics_306,x:393.2,y:750.3}).wait(1).to({graphics:mask_graphics_307,x:393.1,y:775.4}).wait(1).to({graphics:mask_graphics_308,x:393,y:800.1}).wait(1).to({graphics:mask_graphics_309,x:392.9,y:824.4}).wait(1).to({graphics:mask_graphics_310,x:392.9,y:848.1}).wait(1).to({graphics:mask_graphics_311,x:392.8,y:871.3}).wait(1).to({graphics:mask_graphics_312,x:392.7,y:893.7}).wait(1).to({graphics:mask_graphics_313,x:392.7,y:915.5}).wait(1).to({graphics:mask_graphics_314,x:392.6,y:936.3}).wait(1).to({graphics:mask_graphics_315,x:392.5,y:956.3}).wait(1).to({graphics:mask_graphics_316,x:392.5,y:975.4}).wait(1).to({graphics:mask_graphics_317,x:392.4,y:993.5}).wait(1).to({graphics:mask_graphics_318,x:392.4,y:1010.4}).wait(1).to({graphics:mask_graphics_319,x:392.3,y:1026.3}).wait(1).to({graphics:mask_graphics_320,x:392.3,y:1041.1}).wait(1).to({graphics:mask_graphics_321,x:392.2,y:1054.7}).wait(1).to({graphics:mask_graphics_322,x:392.2,y:1067}).wait(1).to({graphics:mask_graphics_323,x:392.2,y:1078.2}).wait(1).to({graphics:mask_graphics_324,x:392.1,y:1088}).wait(1).to({graphics:mask_graphics_325,x:392.1,y:1096.6}).wait(1).to({graphics:mask_graphics_326,x:392.1,y:1103.9}).wait(1).to({graphics:mask_graphics_327,x:392.1,y:1109.9}).wait(1).to({graphics:mask_graphics_328,x:392,y:1114.5}).wait(1).to({graphics:mask_graphics_329,x:392,y:1117.9}).wait(1).to({graphics:mask_graphics_330,x:392,y:1119.9}).wait(1).to({graphics:mask_graphics_331,x:392,y:1120.5}).wait(335));

	// 图层 1
	this.instance_44 = new lib.元件5();
	this.instance_44.setTransform(388.9,353.9,1,1,0,0,0,40,50);
	this.instance_44.alpha = 0.301;
	this.instance_44._off = true;

	this.instance_44.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(219).to({_off:false},0).wait(1).to({regX:0,regY:0,x:348.9,y:303.8},0).wait(1).to({y:303.5},0).wait(1).to({y:303.2},0).wait(1).to({y:302.6},0).wait(1).to({y:301.9},0).wait(1).to({y:301},0).wait(1).to({y:299.9},0).wait(1).to({y:298.6},0).wait(1).to({y:297.2},0).wait(1).to({y:295.6},0).wait(1).to({y:293.8},0).wait(1).to({y:291.7},0).wait(1).to({y:289.5},0).wait(1).to({y:287.2},0).wait(1).to({y:284.6},0).wait(1).to({y:281.9},0).wait(1).to({y:279},0).wait(1).to({y:275.9},0).wait(1).to({y:272.7},0).wait(1).to({y:269.4},0).wait(1).to({y:266},0).wait(1).to({y:262.5},0).wait(1).to({y:259},0).wait(1).to({y:255.5},0).wait(1).to({y:251.9},0).wait(1).to({y:248.4},0).wait(1).to({y:245},0).wait(1).to({y:241.7},0).wait(1).to({y:238.4},0).wait(1).to({y:235.4},0).wait(1).to({y:232.5},0).wait(1).to({y:229.8},0).wait(1).to({y:227.2},0).wait(1).to({y:224.9},0).wait(1).to({y:222.9},0).wait(1).to({y:221},0).wait(1).to({y:219.4},0).wait(1).to({y:217.9},0).wait(1).to({y:216.8},0).wait(1).to({y:215.8},0).wait(1).to({y:215.1},0).wait(1).to({y:214.6},0).wait(1).to({y:214.3},0).wait(1).to({regX:40,regY:50,x:388.9,y:264.2},0).to({_off:true},32).wait(371));

	// c6_0002_图层-5.png
	this.instance_45 = new lib.补间77("synched",0);
	this.instance_45.setTransform(353.4,729,0.783,0.783);
	this.instance_45.alpha = 0;
	this.instance_45._off = true;

	this.instance_46 = new lib.补间78("synched",0);
	this.instance_46.setTransform(353.4,715.3,0.783,0.783);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(102).to({_off:false},0).wait(1).to({regX:2,regY:-131,x:355,y:624.1,alpha:0.169},0).wait(1).to({y:622.3,alpha:0.301},0).wait(1).to({y:620.9,alpha:0.407},0).wait(1).to({y:619.7,alpha:0.496},0).wait(1).to({y:618.6,alpha:0.571},0).wait(1).to({y:617.7,alpha:0.636},0).wait(1).to({y:617,alpha:0.692},0).wait(1).to({y:616.3,alpha:0.74},0).wait(1).to({y:615.7,alpha:0.782},0).wait(1).to({y:615.2,alpha:0.819},0).wait(1).to({y:614.8,alpha:0.851},0).wait(1).to({y:614.4,alpha:0.879},0).wait(1).to({y:614.1,alpha:0.903},0).wait(1).to({y:613.8,alpha:0.924},0).wait(1).to({y:613.5,alpha:0.942},0).wait(1).to({y:613.3,alpha:0.957},0).wait(1).to({y:613.2,alpha:0.969},0).wait(1).to({y:613,alpha:0.979},0).wait(1).to({y:612.9,alpha:0.987},0).wait(1).to({y:612.8,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.999},0).to({_off:true},1).wait(541));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(125).to({_off:false},0).wait(29).to({startPosition:0},0).wait(1).to({regX:2,regY:-131,x:355,y:613,alpha:0.99},0).wait(1).to({y:613.7,alpha:0.956},0).wait(1).to({y:615.1,alpha:0.897},0).wait(1).to({y:617,alpha:0.81},0).wait(1).to({y:619.6,alpha:0.696},0).wait(1).to({y:622.7,alpha:0.559},0).wait(1).to({y:626,alpha:0.411},0).wait(1).to({y:629.2,alpha:0.27},0).wait(1).to({y:631.8,alpha:0.151},0).wait(1).to({y:633.8,alpha:0.066},0).wait(1).to({y:634.9,alpha:0.016},0).wait(1).to({regX:0,regY:0,x:353.4,y:737.8,alpha:0},0).to({_off:true},1).wait(499));

	// c6_0001_图层-4.png
	this.instance_47 = new lib.补间79("synched",0);
	this.instance_47.setTransform(388.8,680.7,0.783,0.783);
	this.instance_47.alpha = 0;
	this.instance_47._off = true;

	this.instance_48 = new lib.补间80("synched",0);
	this.instance_48.setTransform(388.8,666.9,0.783,0.783);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(79).to({_off:false},0).wait(1).to({regX:1.5,regY:-143,x:390,y:566.4,alpha:0.169},0).wait(1).to({y:564.6,alpha:0.301},0).wait(1).to({y:563.1,alpha:0.407},0).wait(1).to({y:561.9,alpha:0.496},0).wait(1).to({y:560.9,alpha:0.571},0).wait(1).to({y:560,alpha:0.636},0).wait(1).to({y:559.2,alpha:0.692},0).wait(1).to({y:558.6,alpha:0.74},0).wait(1).to({y:558,alpha:0.782},0).wait(1).to({y:557.5,alpha:0.819},0).wait(1).to({y:557,alpha:0.851},0).wait(1).to({y:556.7,alpha:0.879},0).wait(1).to({y:556.3,alpha:0.903},0).wait(1).to({y:556,alpha:0.924},0).wait(1).to({y:555.8,alpha:0.942},0).wait(1).to({y:555.6,alpha:0.957},0).wait(1).to({y:555.4,alpha:0.969},0).wait(1).to({y:555.3,alpha:0.979},0).wait(1).to({y:555.2,alpha:0.987},0).wait(1).to({y:555.1,alpha:0.993},0).wait(1).to({y:555,alpha:0.997},0).wait(1).to({alpha:0.999},0).to({_off:true},1).wait(564));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(102).to({_off:false},0).wait(56).to({startPosition:0},0).wait(1).to({regX:1.5,regY:-143,x:390,y:555.3,alpha:0.99},0).wait(1).to({y:556.1,alpha:0.956},0).wait(1).to({y:557.6,alpha:0.897},0).wait(1).to({y:559.8,alpha:0.81},0).wait(1).to({y:562.7,alpha:0.696},0).wait(1).to({y:566.2,alpha:0.559},0).wait(1).to({y:569.9,alpha:0.411},0).wait(1).to({y:573.5,alpha:0.27},0).wait(1).to({y:576.5,alpha:0.151},0).wait(1).to({y:578.7,alpha:0.066},0).wait(1).to({y:580,alpha:0.016},0).wait(1).to({regX:0,regY:0,x:388.8,y:692.3,alpha:0},0).to({_off:true},1).wait(495));

	// c6_0000_图层-3.png
	this.instance_49 = new lib.补间81("synched",0);
	this.instance_49.setTransform(426.1,657.7,0.783,0.783);
	this.instance_49.alpha = 0;
	this.instance_49._off = true;

	this.instance_50 = new lib.补间82("synched",0);
	this.instance_50.setTransform(426.1,644,0.783,0.783);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(59).to({_off:false},0).wait(1).to({regX:2,regY:15,x:427.6,y:667.1,alpha:0.169},0).wait(1).to({y:665.3,alpha:0.301},0).wait(1).to({y:663.8,alpha:0.407},0).wait(1).to({y:662.6,alpha:0.496},0).wait(1).to({y:661.6,alpha:0.571},0).wait(1).to({y:660.7,alpha:0.636},0).wait(1).to({y:659.9,alpha:0.692},0).wait(1).to({y:659.3,alpha:0.74},0).wait(1).to({y:658.7,alpha:0.782},0).wait(1).to({y:658.2,alpha:0.819},0).wait(1).to({y:657.7,alpha:0.851},0).wait(1).to({y:657.4,alpha:0.879},0).wait(1).to({y:657,alpha:0.903},0).wait(1).to({y:656.7,alpha:0.924},0).wait(1).to({y:656.5,alpha:0.942},0).wait(1).to({y:656.3,alpha:0.957},0).wait(1).to({y:656.1,alpha:0.969},0).wait(1).to({y:656,alpha:0.979},0).wait(1).to({y:655.9,alpha:0.987},0).wait(1).to({y:655.8,alpha:0.993},0).wait(1).to({y:655.7,alpha:0.997},0).wait(1).to({alpha:0.999},0).to({_off:true},1).wait(584));
	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(82).to({_off:false},0).wait(79).to({startPosition:0},0).wait(1).to({regX:2,regY:15,x:427.6,y:656,alpha:0.99},0).wait(1).to({y:656.9,alpha:0.956},0).wait(1).to({y:658.5,alpha:0.897},0).wait(1).to({y:660.8,alpha:0.81},0).wait(1).to({y:663.9,alpha:0.696},0).wait(1).to({y:667.6,alpha:0.559},0).wait(1).to({y:671.6,alpha:0.411},0).wait(1).to({y:675.4,alpha:0.27},0).wait(1).to({y:678.6,alpha:0.151},0).wait(1).to({y:680.9,alpha:0.066},0).wait(1).to({y:682.3,alpha:0.016},0).wait(1).to({regX:0,regY:0,x:426.1,y:671,alpha:0},0).to({_off:true},1).wait(492));

	// a6 (1).png
	this.instance_51 = new lib.补间101("synched",0);
	this.instance_51.setTransform(400,480);
	this.instance_51.alpha = 0;

	this.instance_52 = new lib.补间102("synched",0);
	this.instance_52.setTransform(400,480);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_51}]}).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).wait(629));
	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.01},0).wait(1).to({alpha:0.017},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.074},0).wait(1).to({alpha:0.096},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.148},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.212},0).wait(1).to({alpha:0.249},0).wait(1).to({alpha:0.289},0).wait(1).to({alpha:0.332},0).wait(1).to({alpha:0.377},0).wait(1).to({alpha:0.424},0).wait(1).to({alpha:0.472},0).wait(1).to({alpha:0.521},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.713},0).wait(1).to({alpha:0.756},0).wait(1).to({alpha:0.796},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.866},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.921},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.961},0).wait(1).to({alpha:0.975},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:0.999},0).to({_off:true},1).wait(629));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,960);


// stage content:



(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件1();
	this.instance.setTransform(400,480,1,1,0,0,0,400,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,480,800,960);

})(libP2 = libP2||{}, imagesP2 = imagesP2||{}, createjs = createjs||{}, ss = ss||{});
var libP2, imagesP2, createjs, ss;