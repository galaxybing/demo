(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {};

// library properties:
lib.properties = {
	width: 800,
	height: 960,
	fps: 24,
	color: "#000000",
	webfonts: {},
	manifest: [
		{src:"sounds/wave0.mp3", id:"wave0"},
		{src:"sounds/wave1.mp3", id:"wave1"}
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



(lib.a1 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.a3 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.a5 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.a8 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.a9 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.a31 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.a311 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.a312 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.a313 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.a314 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.a35 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.a36 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.b_00000 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.b_00001 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.b_00002 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.b_00003 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.b_00004 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.b_00005 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.b_00006 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.b_00007 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.b_00008 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.b_00009 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.b_00010 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.b_00011 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.b_00012 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.b_00013 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.b_00014 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.b_00015 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.b_00016 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.b_00017 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.b_00018 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.b_00019 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.b_00020 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.b_00021 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.b_00022 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.b_00023 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.c1_0000_图层15 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.c1_0001_图层16 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.c1_0002_图层17 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.c1_0003_图层18 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.f1_0000_图层2 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.f1_0001_图层3 = function() {
	this.spriteSheet = ss["p0_atlas_P_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.补间60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.f1_0001_图层3();
	this.instance.setTransform(-12.5,-138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-138.5,25,277);


(lib.补间59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.f1_0001_图层3();
	this.instance.setTransform(-12.5,-138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-138.5,25,277);


(lib.补间58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.f1_0000_图层2();
	this.instance.setTransform(-12.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-102.5,25,205);


(lib.补间57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.f1_0000_图层2();
	this.instance.setTransform(-12.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-102.5,25,205);


(lib.补间53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c1_0003_图层18();
	this.instance.setTransform(-11.5,-163.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-163.5,26,350);


(lib.补间46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a36();
	this.instance.setTransform(-95,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-52,190,104);


(lib.补间45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a36();
	this.instance.setTransform(-95,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-52,190,104);


(lib.补间44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a36();
	this.instance.setTransform(-95,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-52,190,104);


(lib.补间43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a35();
	this.instance.setTransform(-95,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-52,190,104);


(lib.补间42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a35();
	this.instance.setTransform(-95,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-52,190,104);


(lib.补间41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a35();
	this.instance.setTransform(-95,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-52,190,104);


(lib.补间39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a36();
	this.instance.setTransform(-95,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-52,190,104);


(lib.补间37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a35();
	this.instance.setTransform(-95,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-52,190,104);


(lib.补间36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c1_0003_图层18();
	this.instance.setTransform(-11.5,-163.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-163.5,26,350);


(lib.补间35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c1_0002_图层17();
	this.instance.setTransform(-12,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-57,26,96);


(lib.补间34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a31();
	this.instance.setTransform(-400,-465.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-465.5,800,931);


(lib.补间33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a31();
	this.instance.setTransform(-400,-465.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-465.5,800,931);


(lib.补间32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a311();
	this.instance.setTransform(-336,-219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-336,-219,672,438);


(lib.补间31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a311();
	this.instance.setTransform(-336,-219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-336,-219,672,438);


(lib.补间30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a312();
	this.instance.setTransform(-349,-345.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-349,-345.5,698,691);


(lib.补间29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a312();
	this.instance.setTransform(-349,-345.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-349,-345.5,698,691);


(lib.补间28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a313();
	this.instance.setTransform(-389.5,-478);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-389.5,-478,779,956);


(lib.补间27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a313();
	this.instance.setTransform(-389.5,-478);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-389.5,-478,779,956);


(lib.补间26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a314();
	this.instance.setTransform(-398,-413);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-398,-413,796,826);


(lib.补间25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a314();
	this.instance.setTransform(-398,-413);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-398,-413,796,826);


(lib.补间20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c1_0002_图层17();
	this.instance.setTransform(-12,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-57,26,96);


(lib.补间19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c1_0001_图层16();
	this.instance.setTransform(-11.5,-181.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-181.5,25,349);


(lib.补间18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c1_0001_图层16();
	this.instance.setTransform(-11.5,-181.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-181.5,25,349);


(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c1_0000_图层15();
	this.instance.setTransform(-11.5,-166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-166,26,279);


(lib.补间16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c1_0000_图层15();
	this.instance.setTransform(-11.5,-166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-166,26,279);


(lib.补间12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a3();
	this.instance.setTransform(6.9,-205.7,0.87,0.87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.9,-205.7,35.7,326.2);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a3();
	this.instance.setTransform(5,-266.5,0.87,0.87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,-266.5,35.7,326.2);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a9();
	this.instance.setTransform(-148,-112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-112.5,296,225);


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a9();
	this.instance.setTransform(-148,-112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-112.5,296,225);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a1();
	this.instance.setTransform(-101.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,-55.5,203,111);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a1();
	this.instance.setTransform(-101.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,-55.5,203,111);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a8();
	this.instance.setTransform(-119,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-76.5,238,153);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a8();
	this.instance.setTransform(-119,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-76.5,238,153);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a5();
	this.instance.setTransform(-167,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167,-110.5,334,221);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a5();
	this.instance.setTransform(-167,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167,-110.5,334,221);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.b_00000();
	this.instance.setTransform(0,359.2);

	this.instance_1 = new lib.b_00001();
	this.instance_1.setTransform(0,359.2);

	this.instance_2 = new lib.b_00002();
	this.instance_2.setTransform(0,359.2);

	this.instance_3 = new lib.b_00003();
	this.instance_3.setTransform(0,359.2);

	this.instance_4 = new lib.b_00004();
	this.instance_4.setTransform(0,359.2);

	this.instance_5 = new lib.b_00005();
	this.instance_5.setTransform(0,359.2);

	this.instance_6 = new lib.b_00006();
	this.instance_6.setTransform(0,359.2);

	this.instance_7 = new lib.b_00007();
	this.instance_7.setTransform(0,359.2);

	this.instance_8 = new lib.b_00008();
	this.instance_8.setTransform(0,359.2);

	this.instance_9 = new lib.b_00009();
	this.instance_9.setTransform(0,359.2);

	this.instance_10 = new lib.b_00010();
	this.instance_10.setTransform(0,359.2);

	this.instance_11 = new lib.b_00011();
	this.instance_11.setTransform(0,359.2);

	this.instance_12 = new lib.b_00012();
	this.instance_12.setTransform(0,359.2);

	this.instance_13 = new lib.b_00013();
	this.instance_13.setTransform(0,359.2);

	this.instance_14 = new lib.b_00014();
	this.instance_14.setTransform(0,359.2);

	this.instance_15 = new lib.b_00015();
	this.instance_15.setTransform(0,359.2);

	this.instance_16 = new lib.b_00016();
	this.instance_16.setTransform(0,359.2);

	this.instance_17 = new lib.b_00017();
	this.instance_17.setTransform(0,359.2);

	this.instance_18 = new lib.b_00018();
	this.instance_18.setTransform(0,359.2);

	this.instance_19 = new lib.b_00019();
	this.instance_19.setTransform(0,359.2);

	this.instance_20 = new lib.b_00020();
	this.instance_20.setTransform(0,359.2);

	this.instance_21 = new lib.b_00021();
	this.instance_21.setTransform(0,359.2);

	this.instance_22 = new lib.b_00022();
	this.instance_22.setTransform(0,359.2);

	this.instance_23 = new lib.b_00023();
	this.instance_23.setTransform(0,359.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[]},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,359.2,150,100);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_TO_ADD_MC,
			{id:'0',manId:1,parent:this,mcType:'man2'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_TO_ADD_MC,
			{id:'0',manId:0,parent:this,mcType:'man'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.6,5.6,60,100);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//bg
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_TO_ADD_MC,
			{id:'0',manId:1,parent:this,mcType:'bg'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.补间40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间44("synched",0);

	this.instance_1 = new lib.补间45("synched",0);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间46("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-52,190,104);


(lib.补间38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间41("synched",0);

	this.instance_1 = new lib.补间42("synched",0);
	this.instance_1.setTransform(0,-10.8);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间43("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({y:-0.1},0).wait(1).to({startPosition:0},0).wait(1).to({y:-0.2},0).wait(1).to({y:-0.3},0).wait(1).to({y:-0.5},0).wait(1).to({y:-0.7},0).wait(1).to({y:-0.9},0).wait(1).to({y:-1.1},0).wait(1).to({y:-1.4},0).wait(1).to({y:-1.7},0).wait(1).to({y:-2},0).wait(1).to({y:-2.3},0).wait(1).to({y:-2.7},0).wait(1).to({y:-3.1},0).wait(1).to({y:-3.5},0).wait(1).to({y:-3.9},0).wait(1).to({y:-4.3},0).wait(1).to({y:-4.8},0).wait(1).to({y:-5.2},0).wait(1).to({y:-5.7},0).wait(1).to({y:-6.1},0).wait(1).to({y:-6.6},0).wait(1).to({y:-7},0).wait(1).to({y:-7.5},0).wait(1).to({y:-7.9},0).wait(1).to({y:-8.3},0).wait(1).to({y:-8.7},0).wait(1).to({y:-9},0).wait(1).to({y:-9.4},0).wait(1).to({y:-9.7},0).wait(1).to({y:-9.9},0).wait(1).to({y:-10.2},0).wait(1).to({y:-10.4},0).wait(1).to({y:-10.5},0).wait(1).to({y:-10.6},0).wait(1).to({y:-10.7},0).wait(1).to({y:-10.8},0).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({y:-10.7},0).wait(1).to({startPosition:0},0).wait(1).to({y:-10.6},0).wait(1).to({y:-10.5},0).wait(1).to({y:-10.3},0).wait(1).to({y:-10.2},0).wait(1).to({y:-10},0).wait(1).to({y:-9.8},0).wait(1).to({y:-9.5},0).wait(1).to({y:-9.2},0).wait(1).to({y:-8.9},0).wait(1).to({y:-8.6},0).wait(1).to({y:-8.3},0).wait(1).to({y:-7.9},0).wait(1).to({y:-7.5},0).wait(1).to({y:-7.1},0).wait(1).to({y:-6.7},0).wait(1).to({y:-6.2},0).wait(1).to({y:-5.8},0).wait(1).to({y:-5.4},0).wait(1).to({y:-4.9},0).wait(1).to({y:-4.5},0).wait(1).to({y:-4},0).wait(1).to({y:-3.6},0).wait(1).to({y:-3.2},0).wait(1).to({y:-2.8},0).wait(1).to({y:-2.4},0).wait(1).to({y:-2},0).wait(1).to({y:-1.7},0).wait(1).to({y:-1.4},0).wait(1).to({y:-1.1},0).wait(1).to({y:-0.8},0).wait(1).to({y:-0.6},0).wait(1).to({y:-0.4},0).wait(1).to({y:-0.3},0).wait(1).to({y:-0.2},0).wait(1).to({y:-0.1},0).wait(1).to({y:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-52,190,104);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间34("synched",0);
	this.instance.setTransform(400,494.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:494.9},0).wait(1).to({y:496.2},0).wait(1).to({y:498.3},0).wait(1).to({y:501.3},0).wait(1).to({y:505.3},0).wait(1).to({y:510.2},0).wait(1).to({y:516},0).wait(1).to({y:522.9},0).wait(1).to({y:530.8},0).wait(1).to({y:539.7},0).wait(1).to({y:549.7},0).wait(1).to({y:560.8},0).wait(1).to({y:573.1},0).wait(1).to({y:586.6},0).wait(1).to({y:601.2},0).wait(1).to({y:617.1},0).wait(1).to({y:634.2},0).wait(1).to({y:652.7},0).wait(1).to({y:672.5},0).wait(1).to({y:693.6},0).wait(1).to({y:716.1},0).wait(1).to({y:740.1},0).wait(1).to({y:765.4},0).wait(1).to({y:792.3},0).wait(1).to({y:820.6},0).wait(1).to({y:850.4},0).wait(1).to({y:881.7},0).wait(1).to({y:914.5},0).wait(1).to({y:948.8},0).wait(1).to({y:984.6},0).wait(1).to({y:1021.8},0).wait(1).to({y:1060.5},0).wait(1).to({y:1100.7},0).wait(1).to({y:1142.1},0).wait(1).to({y:1184.9},0).wait(1).to({y:1228.8},0).wait(1).to({y:1273.8},0).wait(1).to({y:1319.9},0).wait(1).to({y:1366.8},0).wait(1).to({y:1414.4},0).wait(1).to({y:1462.5},0).wait(1).to({y:1511.1},0).wait(1).to({y:1559.8},0).wait(1).to({y:1608.6},0).wait(1).to({y:1657.2},0).wait(1).to({y:1705.4},0).wait(1).to({y:1753},0).wait(1).to({y:1799.9},0).wait(1).to({y:1845.8},0).wait(1).to({y:1890.6},0).wait(1).to({y:1934.1},0).wait(1).to({y:1976.1},0).wait(1).to({y:2016.6},0).wait(1).to({y:2055.4},0).wait(1).to({y:2092.4},0).wait(1).to({y:2127.6},0).wait(1).to({y:2160.9},0).wait(1).to({y:2192.3},0).wait(1).to({y:2221.6},0).wait(1).to({y:2249},0).wait(1).to({y:2274.3},0).wait(1).to({y:2297.7},0).wait(1).to({y:2319.1},0).wait(1).to({y:2338.5},0).wait(1).to({y:2356.1},0).wait(1).to({y:2371.7},0).wait(1).to({y:2385.5},0).wait(1).to({y:2397.5},0).wait(1).to({y:2407.8},0).wait(1).to({y:2416.3},0).wait(1).to({y:2423.2},0).wait(1).to({y:2428.4},0).wait(1).to({y:2432.1},0).wait(1).to({y:2434.3},0).wait(1).to({y:2435.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,29,800,931);


(lib.元件23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间32("synched",0);
	this.instance.setTransform(336,588.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:588.8},0).wait(1).to({y:590.9},0).wait(1).to({y:594.6},0).wait(1).to({y:599.8},0).wait(1).to({y:606.4},0).wait(1).to({y:614.7},0).wait(1).to({y:624.5},0).wait(1).to({y:636},0).wait(1).to({y:649},0).wait(1).to({y:663.7},0).wait(1).to({y:680},0).wait(1).to({y:698},0).wait(1).to({y:717.6},0).wait(1).to({y:738.9},0).wait(1).to({y:761.7},0).wait(1).to({y:786.2},0).wait(1).to({y:812.3},0).wait(1).to({y:839.9},0).wait(1).to({y:869},0).wait(1).to({y:899.5},0).wait(1).to({y:931.4},0).wait(1).to({y:964.6},0).wait(1).to({y:999},0).wait(1).to({y:1034.5},0).wait(1).to({y:1071},0).wait(1).to({y:1108.3},0).wait(1).to({y:1146.4},0).wait(1).to({y:1185},0).wait(1).to({y:1224.1},0).wait(1).to({y:1263.5},0).wait(1).to({y:1303},0).wait(1).to({y:1342.4},0).wait(1).to({y:1381.6},0).wait(1).to({y:1420.5},0).wait(1).to({y:1458.8},0).wait(1).to({y:1496.5},0).wait(1).to({y:1533.3},0).wait(1).to({y:1569.1},0).wait(1).to({y:1603.8},0).wait(1).to({y:1637.3},0).wait(1).to({y:1669.4},0).wait(1).to({y:1700.1},0).wait(1).to({y:1729.2},0).wait(1).to({y:1756.8},0).wait(1).to({y:1782.7},0).wait(1).to({y:1806.8},0).wait(1).to({y:1829.2},0).wait(1).to({y:1849.8},0).wait(1).to({y:1868.5},0).wait(1).to({y:1885.5},0).wait(1).to({y:1900.6},0).wait(1).to({y:1913.8},0).wait(1).to({y:1925.3},0).wait(1).to({y:1934.9},0).wait(1).to({y:1942.7},0).wait(1).to({y:1948.7},0).wait(1).to({y:1953},0).wait(1).to({y:1955.5},0).wait(1).to({y:1956.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,369.1,672,438);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间30("synched",0);
	this.instance.setTransform(349,589.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:590},0).wait(1).to({y:591.6},0).wait(1).to({y:594.3},0).wait(1).to({y:598.1},0).wait(1).to({y:603.1},0).wait(1).to({y:609.2},0).wait(1).to({y:616.6},0).wait(1).to({y:625.2},0).wait(1).to({y:635.1},0).wait(1).to({y:646.2},0).wait(1).to({y:658.7},0).wait(1).to({y:672.6},0).wait(1).to({y:687.8},0).wait(1).to({y:704.5},0).wait(1).to({y:722.5},0).wait(1).to({y:742.1},0).wait(1).to({y:763.1},0).wait(1).to({y:785.5},0).wait(1).to({y:809.5},0).wait(1).to({y:835},0).wait(1).to({y:862},0).wait(1).to({y:890.5},0).wait(1).to({y:920.4},0).wait(1).to({y:951.9},0).wait(1).to({y:984.8},0).wait(1).to({y:1019},0).wait(1).to({y:1054.7},0).wait(1).to({y:1091.6},0).wait(1).to({y:1129.7},0).wait(1).to({y:1169},0).wait(1).to({y:1209.3},0).wait(1).to({y:1250.5},0).wait(1).to({y:1292.5},0).wait(1).to({y:1335.2},0).wait(1).to({y:1378.4},0).wait(1).to({y:1422},0).wait(1).to({y:1465.8},0).wait(1).to({y:1509.6},0).wait(1).to({y:1553.3},0).wait(1).to({y:1596.7},0).wait(1).to({y:1639.6},0).wait(1).to({y:1681.9},0).wait(1).to({y:1723.4},0).wait(1).to({y:1764},0).wait(1).to({y:1803.4},0).wait(1).to({y:1841.7},0).wait(1).to({y:1878.7},0).wait(1).to({y:1914.2},0).wait(1).to({y:1948.2},0).wait(1).to({y:1980.6},0).wait(1).to({y:2011.3},0).wait(1).to({y:2040.4},0).wait(1).to({y:2067.7},0).wait(1).to({y:2093.2},0).wait(1).to({y:2117},0).wait(1).to({y:2139},0).wait(1).to({y:2159.2},0).wait(1).to({y:2177.7},0).wait(1).to({y:2194.3},0).wait(1).to({y:2209.3},0).wait(1).to({y:2222.5},0).wait(1).to({y:2234},0).wait(1).to({y:2243.9},0).wait(1).to({y:2252.1},0).wait(1).to({y:2258.8},0).wait(1).to({y:2263.9},0).wait(1).to({y:2267.6},0).wait(1).to({y:2269.7},0).wait(1).to({y:2270.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,244,698,691);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间28("synched",0);
	this.instance.setTransform(389.5,496.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:496.7},0).wait(1).to({y:497.9},0).wait(1).to({y:499.8},0).wait(1).to({y:502.6},0).wait(1).to({y:506.3},0).wait(1).to({y:510.7},0).wait(1).to({y:516},0).wait(1).to({y:522.2},0).wait(1).to({y:529.3},0).wait(1).to({y:537.3},0).wait(1).to({y:546.2},0).wait(1).to({y:556},0).wait(1).to({y:566.8},0).wait(1).to({y:578.5},0).wait(1).to({y:591.2},0).wait(1).to({y:604.9},0).wait(1).to({y:619.6},0).wait(1).to({y:635.2},0).wait(1).to({y:651.9},0).wait(1).to({y:669.6},0).wait(1).to({y:688.3},0).wait(1).to({y:708},0).wait(1).to({y:728.8},0).wait(1).to({y:750.5},0).wait(1).to({y:773.3},0).wait(1).to({y:797.2},0).wait(1).to({y:822},0).wait(1).to({y:847.8},0).wait(1).to({y:874.7},0).wait(1).to({y:902.5},0).wait(1).to({y:931.2},0).wait(1).to({y:960.9},0).wait(1).to({y:991.5},0).wait(1).to({y:1023},0).wait(1).to({y:1055.3},0).wait(1).to({y:1088.4},0).wait(1).to({y:1122.3},0).wait(1).to({y:1156.8},0).wait(1).to({y:1192},0).wait(1).to({y:1227.8},0).wait(1).to({y:1264.2},0).wait(1).to({y:1301},0).wait(1).to({y:1338.2},0).wait(1).to({y:1375.8},0).wait(1).to({y:1413.6},0).wait(1).to({y:1451.5},0).wait(1).to({y:1489.6},0).wait(1).to({y:1527.6},0).wait(1).to({y:1565.7},0).wait(1).to({y:1603.5},0).wait(1).to({y:1641.1},0).wait(1).to({y:1678.4},0).wait(1).to({y:1715.3},0).wait(1).to({y:1751.8},0).wait(1).to({y:1787.7},0).wait(1).to({y:1823},0).wait(1).to({y:1857.6},0).wait(1).to({y:1891.4},0).wait(1).to({y:1924.5},0).wait(1).to({y:1956.7},0).wait(1).to({y:1988},0).wait(1).to({y:2018.3},0).wait(1).to({y:2047.6},0).wait(1).to({y:2075.9},0).wait(1).to({y:2103.1},0).wait(1).to({y:2129.3},0).wait(1).to({y:2154.3},0).wait(1).to({y:2178.2},0).wait(1).to({y:2200.9},0).wait(1).to({y:2222.4},0).wait(1).to({y:2242.8},0).wait(1).to({y:2262.1},0).wait(1).to({y:2280.1},0).wait(1).to({y:2297},0).wait(1).to({y:2312.7},0).wait(1).to({y:2327.2},0).wait(1).to({y:2340.6},0).wait(1).to({y:2352.8},0).wait(1).to({y:2363.8},0).wait(1).to({y:2373.8},0).wait(1).to({y:2382.6},0).wait(1).to({y:2390.3},0).wait(1).to({y:2397},0).wait(1).to({y:2402.6},0).wait(1).to({y:2407.1},0).wait(1).to({y:2410.6},0).wait(1).to({y:2413},0).wait(1).to({y:2414.5},0).wait(1).to({y:2415},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,18.3,779,956);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间26("synched",0);
	this.instance.setTransform(398,560);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:560.4},0).wait(1).to({y:561.7},0).wait(1).to({y:564},0).wait(1).to({y:567.2},0).wait(1).to({y:571.5},0).wait(1).to({y:576.7},0).wait(1).to({y:583.1},0).wait(1).to({y:590.5},0).wait(1).to({y:599.1},0).wait(1).to({y:608.9},0).wait(1).to({y:619.9},0).wait(1).to({y:632.1},0).wait(1).to({y:645.7},0).wait(1).to({y:660.7},0).wait(1).to({y:677.1},0).wait(1).to({y:694.9},0).wait(1).to({y:714.2},0).wait(1).to({y:735.1},0).wait(1).to({y:757.5},0).wait(1).to({y:781.7},0).wait(1).to({y:807.5},0).wait(1).to({y:835},0).wait(1).to({y:864.3},0).wait(1).to({y:895.4},0).wait(1).to({y:928.2},0).wait(1).to({y:962.9},0).wait(1).to({y:999.4},0).wait(1).to({y:1037.8},0).wait(1).to({y:1077.9},0).wait(1).to({y:1119.7},0).wait(1).to({y:1163.1},0).wait(1).to({y:1208.1},0).wait(1).to({y:1254.5},0).wait(1).to({y:1302.2},0).wait(1).to({y:1350.9},0).wait(1).to({y:1400.5},0).wait(1).to({y:1450.8},0).wait(1).to({y:1501.5},0).wait(1).to({y:1552.3},0).wait(1).to({y:1602.9},0).wait(1).to({y:1653.1},0).wait(1).to({y:1702.6},0).wait(1).to({y:1751.1},0).wait(1).to({y:1798.3},0).wait(1).to({y:1844.2},0).wait(1).to({y:1888.4},0).wait(1).to({y:1930.7},0).wait(1).to({y:1971.2},0).wait(1).to({y:2009.6},0).wait(1).to({y:2045.9},0).wait(1).to({y:2080},0).wait(1).to({y:2111.8},0).wait(1).to({y:2141.5},0).wait(1).to({y:2169},0).wait(1).to({y:2194.3},0).wait(1).to({y:2217.5},0).wait(1).to({y:2238.6},0).wait(1).to({y:2257.6},0).wait(1).to({y:2274.7},0).wait(1).to({y:2289.8},0).wait(1).to({y:2303.1},0).wait(1).to({y:2314.6},0).wait(1).to({y:2324.3},0).wait(1).to({y:2332.4},0).wait(1).to({y:2338.9},0).wait(1).to({y:2343.8},0).wait(1).to({y:2347.3},0).wait(1).to({y:2349.3},0).wait(1).to({y:2350},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,147,796,826);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间27("synched",0);
	this.instance.setTransform(389.5,478);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,779,956);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间40("synched",0);
	this.instance.setTransform(95,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({y:52.1,startPosition:3},0).wait(1).to({y:52.2,startPosition:4},0).wait(1).to({y:52.3,startPosition:5},0).wait(1).to({y:52.4,startPosition:6},0).wait(1).to({y:52.5,startPosition:7},0).wait(1).to({y:52.7,startPosition:8},0).wait(1).to({y:52.9,startPosition:9},0).wait(1).to({y:53.1,startPosition:10},0).wait(1).to({y:53.4,startPosition:11},0).wait(1).to({y:53.7,startPosition:12},0).wait(1).to({y:54,startPosition:13},0).wait(1).to({y:54.3,startPosition:14},0).wait(1).to({y:54.7,startPosition:15},0).wait(1).to({y:55.1,startPosition:16},0).wait(1).to({y:55.5,startPosition:17},0).wait(1).to({y:56,startPosition:18},0).wait(1).to({y:56.5,startPosition:19},0).wait(1).to({y:57,startPosition:20},0).wait(1).to({y:57.5,startPosition:21},0).wait(1).to({y:58,startPosition:22},0).wait(1).to({y:58.5,startPosition:23},0).wait(1).to({y:59,startPosition:24},0).wait(1).to({y:59.4,startPosition:25},0).wait(1).to({y:59.9,startPosition:26},0).wait(1).to({y:60.3,startPosition:27},0).wait(1).to({y:60.8,startPosition:28},0).wait(1).to({y:61.1,startPosition:29},0).wait(1).to({y:61.5,startPosition:30},0).wait(1).to({y:61.8,startPosition:31},0).wait(1).to({y:62,startPosition:32},0).wait(1).to({y:62.3,startPosition:33},0).wait(1).to({y:62.4,startPosition:34},0).wait(1).to({y:62.6,startPosition:35},0).wait(1).to({y:62.7,startPosition:36},0).wait(1).to({y:62.8,startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({y:62.9,startPosition:39},0).wait(1).to({y:62.8,startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({y:62.7,startPosition:43},0).wait(1).to({y:62.6,startPosition:44},0).wait(1).to({y:62.5,startPosition:45},0).wait(1).to({y:62.3,startPosition:46},0).wait(1).to({y:62.2,startPosition:47},0).wait(1).to({y:62,startPosition:48},0).wait(1).to({y:61.8,startPosition:49},0).wait(1).to({y:61.5,startPosition:50},0).wait(1).to({y:61.3,startPosition:51},0).wait(1).to({y:61,startPosition:52},0).wait(1).to({y:60.6,startPosition:53},0).wait(1).to({y:60.3,startPosition:54},0).wait(1).to({y:59.9,startPosition:55},0).wait(1).to({y:59.5,startPosition:56},0).wait(1).to({y:59.1,startPosition:57},0).wait(1).to({y:58.6,startPosition:58},0).wait(1).to({y:58.1,startPosition:59},0).wait(1).to({y:57.7,startPosition:60},0).wait(1).to({y:57.2,startPosition:61},0).wait(1).to({y:56.7,startPosition:62},0).wait(1).to({y:56.2,startPosition:63},0).wait(1).to({y:55.7,startPosition:64},0).wait(1).to({y:55.2,startPosition:65},0).wait(1).to({y:54.8,startPosition:66},0).wait(1).to({y:54.4,startPosition:67},0).wait(1).to({y:54,startPosition:68},0).wait(1).to({y:53.6,startPosition:69},0).wait(1).to({y:53.3,startPosition:70},0).wait(1).to({y:53,startPosition:71},0).wait(1).to({y:52.8,startPosition:72},0).wait(1).to({y:52.6,startPosition:73},0).wait(1).to({y:52.4,startPosition:74},0).wait(1).to({y:52.2,startPosition:75},0).wait(1).to({y:52.1,startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({y:52,startPosition:78},0).wait(1).to({startPosition:79},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,104);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间38("synched",0);
	this.instance.setTransform(95,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,104);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(90));

	// x1
	this.instance = new lib.元件20("synched",0);
	this.instance.setTransform(203.3,-630.6,1,1,0,0,0,398,413);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},70).wait(20));

	// x2
	this.instance_1 = new lib.元件21("synched",0);
	this.instance_1.setTransform(203.3,-565.6,1,1,0,0,0,389.5,478);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// x3
	this.instance_2 = new lib.元件22("synched",0);
	this.instance_2.setTransform(203.3,-661.1,1,1,0,0,0,349,345.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},70).wait(20));

	// x5
	this.instance_3 = new lib.元件24("synched",0);
	this.instance_3.setTransform(203.3,-578.1,1,1,0,0,0,400,465.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},76).wait(14));

	// x4
	this.instance_4 = new lib.元件23("synched",0);
	this.instance_4.setTransform(203.3,-661.1,1,1,0,0,0,336,219);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},60).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.7,-1025.3,800,956);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.gotoAndPlay(600)
	}
	this.frame_27 = function() {
		playSound("wave0");
	}
	this.frame_259 = function() {
		//next

		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_PLAY_NEXT_PAGE,
			{id:'0',action:'nextFrame'}
		);
	}
	this.frame_345 = function() {
		//next
		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_PLAY_NEXT_PAGE,
			{id:'0',action:'nextFrame'}
		);
	}
	this.frame_493 = function() {
		playSound("wave1");
	}
	this.frame_548 = function() {
		//next

		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_PLAY_NEXT_PAGE,
			{id:'0',action:'nextPage'}
		);
	}
	this.frame_625 = function() {
		//next

		this.stop();
		/*
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_PLAY_NEXT_PAGE,
			{id:'0',action:'nextPage'}
		);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(232).call(this.frame_259).wait(86).call(this.frame_345).wait(148).call(this.frame_493).wait(55).call(this.frame_548).wait(77).call(this.frame_625).wait(1));

	// 图层 35
	this.instance = new lib.元件11("synched",0);
	this.instance.setTransform(199,-215.6,1.269,1.269,0,0,0,75,50);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(493).to({_off:false},0).wait(1).to({regY:409.2,y:245.5,startPosition:1},0).wait(1).to({y:249.5,startPosition:2},0).wait(1).to({y:252.8,startPosition:3},0).wait(1).to({y:255.7,startPosition:4},0).wait(1).to({y:258.2,startPosition:5},0).wait(1).to({y:260.4,startPosition:6},0).wait(1).to({y:262.4,startPosition:7},0).wait(1).to({y:264.2,startPosition:8},0).wait(1).to({y:265.8,startPosition:9},0).wait(1).to({y:267.3,startPosition:10},0).wait(1).to({y:268.7,startPosition:11},0).wait(1).to({y:270,startPosition:12},0).wait(1).to({y:271.1,startPosition:13},0).wait(1).to({y:272.2,startPosition:14},0).wait(1).to({y:273.2,startPosition:15},0).wait(1).to({y:274.2,startPosition:16},0).wait(1).to({y:275.1,startPosition:17},0).wait(1).to({y:275.9,startPosition:18},0).wait(1).to({y:276.6,startPosition:19},0).wait(1).to({y:277.3,startPosition:20},0).wait(1).to({y:278,startPosition:21},0).wait(1).to({y:278.6,startPosition:22},0).wait(1).to({y:279.2,startPosition:23},0).wait(1).to({y:279.7,startPosition:24},0).wait(1).to({y:280.2,startPosition:25},0).wait(1).to({y:280.7,startPosition:26},0).wait(1).to({y:281.1,startPosition:27},0).wait(1).to({y:281.5,startPosition:28},0).wait(1).to({y:281.9,startPosition:29},0).wait(1).to({y:282.2,startPosition:30},0).wait(1).to({y:282.5,startPosition:31},0).wait(1).to({y:282.8,startPosition:32},0).wait(1).to({y:283.1,startPosition:33},0).wait(1).to({y:283.3,startPosition:34},0).wait(1).to({y:283.5,startPosition:35},0).wait(1).to({y:283.7,startPosition:36},0).wait(1).to({y:283.9,startPosition:37},0).wait(1).to({y:284.1,startPosition:38},0).wait(1).to({y:284.2,startPosition:39},0).wait(1).to({y:284.3,startPosition:40},0).wait(1).to({y:284.4,startPosition:41},0).wait(1).to({y:284.5,startPosition:42},0).wait(1).to({y:284.6,startPosition:43},0).wait(1).to({y:284.7,startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({regY:50,y:-171.2,startPosition:0},0).to({_off:true},1).wait(85));

	// end_mc
	this.end_mc = new lib.元件8();
	this.end_mc.setTransform(192.5,180.1,1,1,0,0,0,191.3,177.9);
	this.end_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.end_mc).wait(625).to({_off:false},0).wait(1));

	// f1_0001_图层-3.png
	this.instance_1 = new lib.补间59("synched",0);
	this.instance_1.setTransform(180,618.2,0.825,0.825);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.补间60("synched",0);
	this.instance_2.setTransform(180,588.2,0.825,0.825);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(312).to({_off:false},0).wait(1).to({y:613.2,alpha:0.166},0).wait(1).to({y:609.7,alpha:0.282},0).wait(1).to({y:607,alpha:0.372},0).wait(1).to({y:604.8,alpha:0.447},0).wait(1).to({y:602.9,alpha:0.51},0).wait(1).to({y:601.2,alpha:0.565},0).wait(1).to({y:599.8,alpha:0.613},0).wait(1).to({y:598.5,alpha:0.655},0).wait(1).to({y:597.4,alpha:0.693},0).wait(1).to({y:596.4,alpha:0.727},0).wait(1).to({y:595.4,alpha:0.758},0).wait(1).to({y:594.6,alpha:0.786},0).wait(1).to({y:593.9,alpha:0.811},0).wait(1).to({y:593.2,alpha:0.834},0).wait(1).to({y:592.6,alpha:0.855},0).wait(1).to({y:592,alpha:0.873},0).wait(1).to({y:591.5,alpha:0.89},0).wait(1).to({y:591,alpha:0.906},0).wait(1).to({y:590.6,alpha:0.919},0).wait(1).to({y:590.2,alpha:0.932},0).wait(1).to({y:589.9,alpha:0.943},0).wait(1).to({y:589.6,alpha:0.953},0).wait(1).to({y:589.3,alpha:0.962},0).wait(1).to({y:589.1,alpha:0.97},0).wait(1).to({y:588.9,alpha:0.976},0).wait(1).to({y:588.7,alpha:0.982},0).wait(1).to({y:588.6,alpha:0.987},0).wait(1).to({y:588.5,alpha:0.991},0).wait(1).to({y:588.4,alpha:0.994},0).wait(1).to({y:588.3,alpha:0.997},0).wait(1).to({y:588.2,alpha:0.999},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(281));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(345).to({_off:false},0).wait(1).to({y:588.3,alpha:0.996},0).wait(1).to({y:588.8,alpha:0.985},0).wait(1).to({y:589.5,alpha:0.965},0).wait(1).to({y:590.6,alpha:0.936},0).wait(1).to({y:592,alpha:0.898},0).wait(1).to({y:593.7,alpha:0.851},0).wait(1).to({y:595.8,alpha:0.795},0).wait(1).to({y:598.2,alpha:0.731},0).wait(1).to({y:600.8,alpha:0.66},0).wait(1).to({y:603.6,alpha:0.584},0).wait(1).to({y:606.5,alpha:0.505},0).wait(1).to({y:609.5,alpha:0.426},0).wait(1).to({y:612.3,alpha:0.349},0).wait(1).to({y:615,alpha:0.277},0).wait(1).to({y:617.4,alpha:0.211},0).wait(1).to({y:619.5,alpha:0.154},0).wait(1).to({y:621.3,alpha:0.106},0).wait(1).to({y:622.8,alpha:0.067},0).wait(1).to({y:623.9,alpha:0.037},0).wait(1).to({y:624.7,alpha:0.016},0).wait(1).to({y:625.1,alpha:0.004},0).wait(1).to({y:625.3,alpha:0},0).to({_off:true},1).wait(258));

	// f1_0000_图层-2.png
	this.instance_3 = new lib.补间57("synched",0);
	this.instance_3.setTransform(219.3,587.9,0.841,0.816);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.补间58("synched",0);
	this.instance_4.setTransform(219.3,558.3,0.841,0.816);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(297).to({_off:false},0).wait(1).to({y:583,alpha:0.166},0).wait(1).to({y:579.5,alpha:0.282},0).wait(1).to({y:576.9,alpha:0.372},0).wait(1).to({y:574.7,alpha:0.447},0).wait(1).to({y:572.8,alpha:0.51},0).wait(1).to({y:571.2,alpha:0.565},0).wait(1).to({y:569.7,alpha:0.613},0).wait(1).to({y:568.5,alpha:0.655},0).wait(1).to({y:567.3,alpha:0.693},0).wait(1).to({y:566.3,alpha:0.727},0).wait(1).to({y:565.4,alpha:0.758},0).wait(1).to({y:564.6,alpha:0.786},0).wait(1).to({y:563.9,alpha:0.811},0).wait(1).to({y:563.2,alpha:0.834},0).wait(1).to({y:562.6,alpha:0.855},0).wait(1).to({y:562,alpha:0.873},0).wait(1).to({y:561.5,alpha:0.89},0).wait(1).to({y:561,alpha:0.906},0).wait(1).to({y:560.6,alpha:0.919},0).wait(1).to({y:560.3,alpha:0.932},0).wait(1).to({y:559.9,alpha:0.943},0).wait(1).to({y:559.6,alpha:0.953},0).wait(1).to({y:559.4,alpha:0.962},0).wait(1).to({y:559.1,alpha:0.97},0).wait(1).to({y:558.9,alpha:0.976},0).wait(1).to({y:558.8,alpha:0.982},0).wait(1).to({y:558.6,alpha:0.987},0).wait(1).to({y:558.5,alpha:0.991},0).wait(1).to({y:558.4,alpha:0.994},0).wait(1).to({y:558.3,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(296));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(330).to({_off:false},0).wait(23).to({startPosition:0},0).wait(1).to({y:558.4,alpha:0.996},0).wait(1).to({y:558.8,alpha:0.985},0).wait(1).to({y:559.5,alpha:0.965},0).wait(1).to({y:560.6,alpha:0.936},0).wait(1).to({y:562,alpha:0.898},0).wait(1).to({y:563.7,alpha:0.851},0).wait(1).to({y:565.7,alpha:0.795},0).wait(1).to({y:568.1,alpha:0.731},0).wait(1).to({y:570.7,alpha:0.66},0).wait(1).to({y:573.5,alpha:0.584},0).wait(1).to({y:576.4,alpha:0.505},0).wait(1).to({y:579.3,alpha:0.426},0).wait(1).to({y:582.1,alpha:0.349},0).wait(1).to({y:584.7,alpha:0.277},0).wait(1).to({y:587.1,alpha:0.211},0).wait(1).to({y:589.2,alpha:0.154},0).wait(1).to({y:591,alpha:0.106},0).wait(1).to({y:592.4,alpha:0.067},0).wait(1).to({y:593.5,alpha:0.037},0).wait(1).to({y:594.3,alpha:0.016},0).wait(1).to({y:594.7,alpha:0.004},0).wait(1).to({y:594.9,alpha:0},0).to({_off:true},1).wait(250));

	// man
	this.instance_5 = new lib.元件4();
	this.instance_5.setTransform(97.2,543.2,1,1,0,0,0,40,50);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(102).to({_off:false},0).wait(1).to({regX:0,regY:0,x:57.2,y:493.1,alpha:0.004},0).wait(1).to({y:493,alpha:0.014},0).wait(1).to({y:492.7,alpha:0.029},0).wait(1).to({y:492.4,alpha:0.048},0).wait(1).to({y:492,alpha:0.073},0).wait(1).to({y:491.6,alpha:0.101},0).wait(1).to({y:491.1,alpha:0.133},0).wait(1).to({y:490.5,alpha:0.169},0).wait(1).to({y:489.9,alpha:0.208},0).wait(1).to({y:489.2,alpha:0.25},0).wait(1).to({y:488.5,alpha:0.294},0).wait(1).to({y:487.8,alpha:0.34},0).wait(1).to({y:487,alpha:0.388},0).wait(1).to({y:486.2,alpha:0.437},0).wait(1).to({y:485.4,alpha:0.487},0).wait(1).to({y:484.6,alpha:0.537},0).wait(1).to({y:483.8,alpha:0.587},0).wait(1).to({y:483.1,alpha:0.636},0).wait(1).to({y:482.3,alpha:0.684},0).wait(1).to({y:481.5,alpha:0.731},0).wait(1).to({y:480.8,alpha:0.776},0).wait(1).to({y:480.2,alpha:0.817},0).wait(1).to({y:479.5,alpha:0.856},0).wait(1).to({y:479,alpha:0.891},0).wait(1).to({y:478.5,alpha:0.923},0).wait(1).to({y:478.1,alpha:0.949},0).wait(1).to({y:477.7,alpha:0.971},0).wait(1).to({y:477.5,alpha:0.987},0).wait(1).to({y:477.3,alpha:0.997},0).wait(1).to({regX:40,regY:50,x:97.2,y:527.3,alpha:1},0).wait(1).to({regX:0,regY:0,x:57.2,y:477.4},0).wait(1).to({y:477.5},0).wait(1).to({y:477.7},0).wait(1).to({y:477.9},0).wait(1).to({y:478.2},0).wait(1).to({y:478.5},0).wait(1).to({y:478.8},0).wait(1).to({y:479.1},0).wait(1).to({y:479.5},0).wait(1).to({y:479.8},0).wait(1).to({y:480.2},0).wait(1).to({y:480.6},0).wait(1).to({y:481},0).wait(1).to({y:481.5},0).wait(1).to({y:481.9},0).wait(1).to({y:482.3},0).wait(1).to({y:482.7},0).wait(1).to({y:483.1},0).wait(1).to({y:483.5},0).wait(1).to({y:483.8},0).wait(1).to({y:484.2},0).wait(1).to({y:484.5},0).wait(1).to({y:484.8},0).wait(1).to({y:485.1},0).wait(1).to({y:485.3},0).wait(1).to({y:485.5},0).wait(1).to({y:485.7},0).wait(1).to({y:485.8},0).wait(1).to({regX:40,regY:50,x:97.2,y:536},0).wait(1).to({regX:0,regY:0,x:57.2,y:485.9},0).wait(2).to({x:57.4,y:485.8},0).wait(1).to({x:57.5,y:485.6},0).wait(1).to({x:57.7,y:485.5},0).wait(1).to({x:58,y:485.2},0).wait(1).to({x:58.3,y:485},0).wait(1).to({x:58.7,y:484.7},0).wait(1).to({x:59.2,y:484.3},0).wait(1).to({x:59.7,y:483.9},0).wait(1).to({x:60.2,y:483.5},0).wait(1).to({x:60.8,y:482.9},0).wait(1).to({x:61.5,y:482.4},0).wait(1).to({x:62.3,y:481.8},0).wait(1).to({x:63.1,y:481.1},0).wait(1).to({x:64,y:480.4},0).wait(1).to({x:64.9,y:479.6},0).wait(1).to({x:65.9,y:478.8},0).wait(1).to({x:67,y:477.9},0).wait(1).to({x:68.2,y:476.9},0).wait(1).to({x:69.5,y:475.9},0).wait(1).to({x:70.8,y:474.8},0).wait(1).to({x:72.2,y:473.6},0).wait(1).to({x:73.7,y:472.4},0).wait(1).to({x:75.3,y:471.1},0).wait(1).to({x:77,y:469.7},0).wait(1).to({x:78.8,y:468.3},0).wait(1).to({x:80.7,y:466.8},0).wait(1).to({x:82.6,y:465.2},0).wait(1).to({x:84.7,y:463.5},0).wait(1).to({x:86.8,y:461.7},0).wait(1).to({x:89.1,y:459.9},0).wait(1).to({x:91.4,y:458},0).wait(1).to({x:93.8,y:456},0).wait(1).to({x:96.4,y:453.9},0).wait(1).to({x:99,y:451.8},0).wait(1).to({x:101.7,y:449.6},0).wait(1).to({x:104.5,y:447.3},0).wait(1).to({x:107.4,y:444.9},0).wait(1).to({x:110.4,y:442.5},0).wait(1).to({x:113.4,y:440.1},0).wait(1).to({x:116.5,y:437.5},0).wait(1).to({x:119.7,y:435},0).wait(1).to({x:122.8,y:432.3},0).wait(1).to({x:126.1,y:429.7},0).wait(1).to({x:129.3,y:427.1},0).wait(1).to({x:132.6,y:424.4},0).wait(1).to({x:135.9,y:421.7},0).wait(1).to({x:139.1,y:419.1},0).wait(1).to({x:142.3,y:416.5},0).wait(1).to({x:145.5,y:413.9},0).wait(1).to({x:148.6,y:411.3},0).wait(1).to({x:151.6,y:408.8},0).wait(1).to({x:154.6,y:406.4},0).wait(1).to({x:157.5,y:404.1},0).wait(1).to({x:160.2,y:401.9},0).wait(1).to({x:162.9,y:399.7},0).wait(1).to({x:165.4,y:397.6},0).wait(1).to({x:167.8,y:395.7},0).wait(1).to({x:170.1,y:393.8},0).wait(1).to({x:172.2,y:392.1},0).wait(1).to({x:174.2,y:390.5},0).wait(1).to({x:176,y:388.9},0).wait(1).to({x:177.8,y:387.5},0).wait(1).to({x:179.3,y:386.3},0).wait(1).to({x:180.8,y:385.1},0).wait(1).to({x:182.1,y:384},0).wait(1).to({x:183.3,y:383.1},0).wait(1).to({x:184.3,y:382.2},0).wait(1).to({x:185.2,y:381.5},0).wait(1).to({x:186,y:380.8},0).wait(1).to({x:186.7,y:380.3},0).wait(1).to({regX:40,regY:50,x:227.3,y:429.8},0).wait(1).to({regX:0,regY:0,x:187.4,y:380},0).wait(1).to({x:187.6,y:380.1},0).wait(1).to({x:187.7,y:380.3},0).wait(1).to({x:187.9,y:380.4},0).wait(1).to({x:188,y:380.6},0).wait(1).to({x:188.2,y:380.8},0).wait(1).to({x:188.4,y:380.9},0).wait(1).to({x:188.5,y:381.1},0).wait(1).to({x:188.7,y:381.2},0).wait(1).to({x:188.8,y:381.4},0).wait(1).to({x:189,y:381.6},0).wait(1).to({x:189.1,y:381.7},0).wait(1).to({x:189.3,y:381.9},0).wait(1).to({x:189.5,y:382},0).wait(1).to({x:189.6,y:382.2},0).wait(1).to({x:189.8,y:382.4},0).wait(1).to({x:189.9,y:382.5},0).wait(1).to({x:190.1,y:382.7},0).wait(1).to({x:190.3,y:382.8},0).wait(1).to({x:190.4,y:383},0).wait(1).to({x:190.6,y:383.2},0).wait(1).to({x:190.7,y:383.3},0).wait(1).to({x:190.9,y:383.5},0).wait(1).to({x:191,y:383.6},0).wait(1).to({regX:40,regY:50,x:231.2,y:433.8},0).wait(12).to({regX:0,regY:0,x:191.2,y:383.8},0).wait(1).to({x:191.1,y:383.6},0).wait(1).to({y:383.4},0).wait(1).to({x:191,y:383.1},0).wait(1).to({x:190.9,y:382.8},0).wait(1).to({x:190.7,y:382.3},0).wait(1).to({x:190.5,y:381.8},0).wait(1).to({x:190.3,y:381.1},0).wait(1).to({x:190.1,y:380.4},0).wait(1).to({x:189.8,y:379.6},0).wait(1).to({x:189.5,y:378.7},0).wait(1).to({x:189.1,y:377.7},0).wait(1).to({x:188.8,y:376.6},0).wait(1).to({x:188.4,y:375.5},0).wait(1).to({x:188,y:374.2},0).wait(1).to({x:187.5,y:372.9},0).wait(1).to({x:187,y:371.4},0).wait(1).to({x:186.5,y:369.9},0).wait(1).to({x:186,y:368.3},0).wait(1).to({x:185.4,y:366.6},0).wait(1).to({x:184.8,y:364.8},0).wait(1).to({x:184.1,y:362.9},0).wait(1).to({x:183.5,y:361},0).wait(1).to({x:182.8,y:359},0).wait(1).to({x:182.1,y:356.9},0).wait(1).to({x:181.3,y:354.7},0).wait(1).to({x:180.6,y:352.5},0).wait(1).to({x:179.8,y:350.2},0).wait(1).to({x:179,y:347.8},0).wait(1).to({x:178.2,y:345.4},0).wait(1).to({x:177.4,y:342.9},0).wait(1).to({x:176.5,y:340.4},0).wait(1).to({x:175.7,y:337.9},0).wait(1).to({x:174.8,y:335.3},0).wait(1).to({x:173.9,y:332.7},0).wait(1).to({x:173,y:330.1},0).wait(1).to({x:172.1,y:327.5},0).wait(1).to({x:171.2,y:324.8},0).wait(1).to({x:170.4,y:322.2},0).wait(1).to({x:169.5,y:319.6},0).wait(1).to({x:168.6,y:317},0).wait(1).to({x:167.7,y:314.4},0).wait(1).to({x:166.8,y:311.9},0).wait(1).to({x:166,y:309.3},0).wait(1).to({x:165.2,y:306.9},0).wait(1).to({x:164.3,y:304.4},0).wait(1).to({x:163.5,y:302.1},0).wait(1).to({x:162.7,y:299.7},0).wait(1).to({x:162,y:297.5},0).wait(1).to({x:161.2,y:295.3},0).wait(1).to({x:160.5,y:293.2},0).wait(1).to({x:159.8,y:291.1},0).wait(1).to({x:159.2,y:289.2},0).wait(1).to({x:158.5,y:287.3},0).wait(1).to({x:157.9,y:285.5},0).wait(1).to({x:157.3,y:283.7},0).wait(1).to({x:156.8,y:282.1},0).wait(1).to({x:156.3,y:280.6},0).wait(1).to({x:155.8,y:279.1},0).wait(1).to({x:155.3,y:277.7},0).wait(1).to({x:154.9,y:276.5},0).wait(1).to({x:154.5,y:275.3},0).wait(1).to({x:154.1,y:274.2},0).wait(1).to({x:153.7,y:273.2},0).wait(1).to({x:153.4,y:272.3},0).wait(1).to({x:153.2,y:271.4},0).wait(1).to({x:152.9,y:270.7},0).wait(1).to({x:152.7,y:270.1},0).wait(1).to({x:152.5,y:269.5},0).wait(1).to({x:152.4,y:269},0).wait(1).to({x:152.2,y:268.7},0).wait(1).to({x:152.1,y:268.4},0).wait(1).to({y:268.2},0).wait(1).to({x:152,y:268},0).wait(1).to({regX:40,regY:50,x:192,y:318},0).to({scaleX:0.85,scaleY:0.85,x:197.4,y:71.4},115).wait(1).to({regX:0,regY:0,x:163.5,y:26.7},0).wait(1).to({y:24.9},0).wait(1).to({y:23.5},0).wait(1).to({y:22.3},0).wait(1).to({y:21.3},0).wait(1).to({y:20.3},0).wait(1).to({y:19.5},0).wait(1).to({y:18.7},0).wait(1).to({y:18},0).wait(1).to({y:17.4},0).wait(1).to({y:16.8},0).wait(1).to({y:16.3},0).wait(1).to({y:15.8},0).wait(1).to({y:15.4},0).wait(1).to({y:15},0).wait(1).to({y:14.7},0).wait(1).to({y:14.4},0).wait(1).to({y:14.2},0).wait(1).to({y:14},0).wait(1).to({y:13.8},0).wait(1).to({y:13.7},0).wait(1).to({y:13.6},0).wait(1).to({regX:40,regY:50.1,x:197.4,y:56},0).wait(1).to({regX:0,regY:0,x:163.5,y:14.2},0).wait(1).to({y:16.1},0).wait(1).to({y:18.9},0).wait(1).to({y:22.3},0).wait(1).to({y:25.8},0).wait(1).to({y:29.3},0).wait(1).to({y:32.2},0).wait(1).to({y:34.2},0).wait(1).to({regX:40,regY:50,x:197.4,y:77.4},0).wait(1).to({regX:0,regY:0,x:163.5,y:30.2},0).wait(1).to({y:27.1},0).wait(1).to({y:24.7},0).wait(1).to({y:22.9},0).wait(1).to({y:21.3},0).wait(1).to({y:19.9},0).wait(1).to({y:18.7},0).wait(1).to({y:17.6},0).wait(1).to({y:16.6},0).wait(1).to({y:15.7},0).wait(1).to({y:14.9},0).wait(1).to({y:14.2},0).wait(1).to({y:13.5},0).wait(1).to({y:12.9},0).wait(1).to({y:12.4},0).wait(1).to({y:11.9},0).wait(1).to({y:11.4},0).wait(1).to({y:10.9},0).wait(1).to({y:10.5},0).wait(1).to({y:10.1},0).wait(1).to({y:9.8},0).wait(1).to({y:9.4},0).wait(1).to({y:9.1},0).wait(1).to({y:8.9},0).wait(1).to({y:8.6},0).wait(1).to({y:8.4},0).wait(1).to({y:8.1},0).wait(1).to({y:7.9},0).wait(1).to({y:7.7},0).wait(1).to({y:7.6},0).wait(1).to({y:7.4},0).wait(1).to({y:7.3},0).wait(1).to({y:7.1},0).wait(1).to({y:7},0).wait(1).to({y:6.9},0).wait(1).to({y:6.8},0).wait(1).to({y:6.7},0).wait(1).to({y:6.6},0).wait(2).to({y:6.5},0).wait(2).to({y:6.4},0).wait(2).to({y:6.3},0).wait(4).to({regX:40,regY:50,x:197.4,y:48.6},0).wait(9).to({regX:0,regY:0,x:163.5,y:6.5},0).wait(1).to({y:7.2},0).wait(1).to({y:8.3},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:9.9},0).wait(1).to({y:11.9},0).wait(1).to({y:14.5},0).wait(1).to({y:17.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:21.1},0).wait(1).to({x:163.4,y:25.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:29.9},0).wait(1).to({y:35.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:41},0).wait(1).to({y:47.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:54.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:163.3,y:62.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:70.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:79.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:163.2,y:89.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:99.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:110.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:163.1,y:122.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:134.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:148},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:163,y:161.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:176.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:162.9,y:192},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:208.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:162.8,y:225},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:242.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:162.7,y:260.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:279.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:162.6,y:299.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:162.5,y:319.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:339.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:162.4,y:360.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:162.3,y:382.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:404.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:162.2,y:426.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:162.1,y:448.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:471},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:162,y:493.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:161.9,y:515.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:538},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:161.8,y:560},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:161.7,y:581.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:602.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:161.6,y:623.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:161.5,y:643.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:663.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:161.4,y:682.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:700.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:161.3,y:718.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:161.2,y:735.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:751.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:161.1,y:766.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:781.1},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:794.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:161,y:807.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:819.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:160.9,y:830.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:841.1},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:850.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:859.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:160.8,y:867.6},0).wait(1).to({y:874.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:881.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:887.3},0).wait(1).to({y:892.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:160.7,y:896.9},0).wait(1).to({y:900.8},0).wait(1).to({y:903.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:906.5},0).wait(1).to({y:908.5},0).wait(1).to({y:909.9},0).wait(1).to({y:910.7},0).wait(1).to({regX:40,regY:49.9,x:198.3,y:957.9},0).to({_off:true},1).wait(1));

	// man copy
	this.instance_6 = new lib.元件7();
	this.instance_6.setTransform(201.8,324.5,0.846,0.846,180,0,0,40,50.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(460).to({_off:false},0).to({alpha:1},32).wait(1).to({regX:0,regY:0,x:235.6,y:369.1},0).wait(1).to({y:370.7},0).wait(1).to({y:372},0).wait(1).to({y:373.1},0).wait(1).to({y:374},0).wait(1).to({y:374.8},0).wait(1).to({y:375.6},0).wait(1).to({y:376.3},0).wait(1).to({y:376.9},0).wait(1).to({y:377.5},0).wait(1).to({y:378.1},0).wait(1).to({y:378.6},0).wait(1).to({y:379},0).wait(1).to({y:379.5},0).wait(1).to({y:379.9},0).wait(1).to({y:380.3},0).wait(1).to({y:380.7},0).wait(1).to({y:381.1},0).wait(1).to({y:381.4},0).wait(1).to({y:381.7},0).wait(1).to({y:382},0).wait(1).to({y:382.3},0).wait(1).to({y:382.6},0).wait(1).to({y:382.9},0).wait(1).to({y:383.1},0).wait(1).to({y:383.4},0).wait(1).to({y:383.6},0).wait(1).to({y:383.8},0).wait(1).to({y:384.1},0).wait(1).to({y:384.3},0).wait(1).to({y:384.5},0).wait(1).to({y:384.7},0).wait(1).to({y:384.8},0).wait(1).to({y:385},0).wait(1).to({y:385.2},0).wait(1).to({y:385.3},0).wait(1).to({y:385.5},0).wait(1).to({y:385.7},0).wait(1).to({y:385.8},0).wait(1).to({y:385.9},0).wait(1).to({y:386.1},0).wait(1).to({y:386.2},0).wait(1).to({y:386.3},0).wait(1).to({y:386.4},0).wait(1).to({y:386.6},0).wait(1).to({y:386.7},0).wait(1).to({y:386.8},0).wait(1).to({regX:40,regY:50.3,x:201.8,y:344.5},0).wait(9).to({regX:0,regY:0,x:235.6,y:388.2},0).wait(1).to({y:389.5},0).wait(1).to({y:390.9},0).wait(1).to({y:392.5},0).wait(1).to({y:394.3},0).wait(1).to({y:396.4},0).wait(1).to({y:398.6},0).wait(1).to({y:401.1},0).wait(1).to({y:403.8},0).wait(1).to({y:406.9},0).wait(1).to({x:235.7,y:410.2},0).wait(1).to({y:413.8},0).wait(1).to({y:417.7},0).wait(1).to({y:422},0).wait(1).to({y:426.7},0).wait(1).to({y:431.8},0).wait(1).to({y:437.3},0).wait(1).to({y:443.4},0).wait(1).to({x:235.8,y:449.9},0).wait(1).to({y:457},0).wait(1).to({y:464.6},0).wait(1).to({y:472.9},0).wait(1).to({y:481.9},0).wait(1).to({x:235.9,y:491.7},0).wait(1).to({y:502.3},0).wait(1).to({y:513.7},0).wait(1).to({y:526.2},0).wait(1).to({x:236,y:539.7},0).wait(1).to({y:554.4},0).wait(1).to({y:570.4},0).wait(1).to({x:236.1,y:587.9},0).wait(1).to({y:607},0).wait(1).to({x:236.2,y:627.9},0).wait(1).to({y:650.9},0).wait(1).to({x:236.3,y:676.2},0).wait(1).to({x:236.4,y:704.3},0).wait(1).to({y:735.7},0).wait(1).to({x:236.5,y:770.9},0).wait(1).to({x:236.6,y:810.7},0).wait(1).to({x:236.7,y:856.4},0).wait(1).to({x:236.9,y:909.6},0).wait(1).to({x:237,y:972.9},0).wait(1).to({regX:40,regY:50.1,x:203.3,y:1008.5},0).to({_off:true},34).wait(1));

	// 图层 37
	this.instance_7 = new lib.补间38();
	this.instance_7.setTransform(199,149.3,0.846,0.846);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(541).to({_off:false},0).wait(8).to({regY:-5.4,y:144.9},0).wait(1).to({y:145.6},0).wait(1).to({y:146.7},0).wait(1).to({y:148.2},0).wait(1).to({y:150.2},0).wait(1).to({y:152.6},0).wait(1).to({y:155.6},0).wait(1).to({y:158.9},0).wait(1).to({y:162.8},0).wait(1).to({y:167.1},0).wait(1).to({y:172},0).wait(1).to({y:177.4},0).wait(1).to({y:183.2},0).wait(1).to({y:189.7},0).wait(1).to({y:196.7},0).wait(1).to({y:204.2},0).wait(1).to({y:212.4},0).wait(1).to({y:221.2},0).wait(1).to({y:230.6},0).wait(1).to({y:240.7},0).wait(1).to({y:251.6},0).wait(1).to({y:263.1},0).wait(1).to({y:275.5},0).wait(1).to({y:288.7},0).wait(1).to({y:302.8},0).wait(1).to({y:317.8},0).wait(1).to({y:333.8},0).wait(1).to({y:351},0).wait(1).to({y:369.3},0).wait(1).to({y:389},0).wait(1).to({y:410.1},0).wait(1).to({y:432.8},0).wait(1).to({y:457.2},0).wait(1).to({y:483.8},0).wait(1).to({y:512.6},0).wait(1).to({y:544.3},0).wait(1).to({y:579.2},0).wait(1).to({y:618.2},0).wait(1).to({y:662.3},0).wait(1).to({y:713.5},0).wait(1).to({y:774.9},0).wait(1).to({y:853.5},0).wait(1).to({regY:0,y:977.5,mode:"synched",startPosition:52},0).to({_off:true},1).wait(34));

	// a3 (5).png
	this.instance_8 = new lib.补间37("synched",0);
	this.instance_8.setTransform(206.6,-321,0.846,0.846);
	this.instance_8._off = true;

	this.instance_9 = new lib.元件9();
	this.instance_9.setTransform(198.8,163.9,0.846,0.846,0,0,0,95,52.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(367).to({_off:false},0).wait(1).to({x:206.2,y:-296.6},0).wait(1).to({x:205.8,y:-273.7},0).wait(1).to({x:205.5,y:-252},0).wait(1).to({x:205.2,y:-231.6},0).wait(1).to({x:204.8,y:-212.3},0).wait(1).to({x:204.6,y:-194},0).wait(1).to({x:204.3,y:-176.7},0).wait(1).to({x:204,y:-160.4},0).wait(1).to({x:203.8,y:-144.8},0).wait(1).to({x:203.5,y:-130},0).wait(1).to({x:203.3,y:-116},0).wait(1).to({x:203.1,y:-102.7},0).wait(1).to({x:202.9,y:-90},0).wait(1).to({x:202.7,y:-77.9},0).wait(1).to({x:202.5,y:-66.4},0).wait(1).to({x:202.3,y:-55.4},0).wait(1).to({x:202.2,y:-45},0).wait(1).to({x:202,y:-35},0).wait(1).to({x:201.8,y:-25.5},0).wait(1).to({x:201.7,y:-16.4},0).wait(1).to({x:201.5,y:-7.8},0).wait(1).to({x:201.4,y:0.5},0).wait(1).to({x:201.3,y:8.4},0).wait(1).to({x:201.2,y:16},0).wait(1).to({x:201.1,y:23.2},0).wait(1).to({x:200.9,y:30.1},0).wait(1).to({x:200.8,y:36.7},0).wait(1).to({x:200.7,y:43},0).wait(1).to({x:200.6,y:49.1},0).wait(1).to({x:200.5,y:54.8},0).wait(1).to({y:60.3},0).wait(1).to({x:200.4,y:65.6},0).wait(1).to({x:200.3,y:70.7},0).wait(1).to({x:200.2,y:75.5},0).wait(1).to({x:200.1,y:80.1},0).wait(1).to({y:84.5},0).wait(1).to({x:200,y:88.7},0).wait(1).to({x:199.9,y:92.7},0).wait(1).to({y:96.6},0).wait(1).to({x:199.8,y:100.3},0).wait(1).to({y:103.8},0).wait(1).to({x:199.7,y:107.1},0).wait(1).to({x:199.6,y:110.4},0).wait(1).to({y:113.4},0).wait(1).to({x:199.5,y:116.3},0).wait(1).to({y:119.1},0).wait(1).to({y:121.8},0).wait(1).to({x:199.4,y:124.3},0).wait(1).to({y:126.7},0).wait(1).to({x:199.3,y:129.1},0).wait(1).to({y:131.2},0).wait(1).to({y:133.3},0).wait(1).to({x:199.2,y:135.3},0).wait(1).to({y:137.2},0).wait(1).to({y:139},0).wait(1).to({y:140.7},0).wait(1).to({x:199.1,y:142.3},0).wait(1).to({y:143.9},0).wait(1).to({y:145.3},0).wait(1).to({y:146.7},0).wait(1).to({x:199,y:148},0).wait(1).to({y:149.3},0).wait(1).to({y:150.4},0).wait(1).to({y:151.5},0).wait(1).to({y:152.6},0).wait(1).to({x:198.9,y:153.5},0).wait(1).to({y:154.5},0).wait(1).to({y:155.3},0).wait(1).to({y:156.1},0).wait(1).to({y:156.9},0).wait(1).to({y:157.6},0).wait(1).to({y:158.2},0).wait(1).to({y:158.8},0).wait(1).to({y:159.4},0).wait(1).to({x:198.8,y:159.9},0).wait(1).to({y:160.4},0).wait(1).to({y:160.9},0).wait(1).to({y:161.3},0).wait(1).to({y:161.6},0).wait(1).to({y:162},0).wait(1).to({y:162.3},0).wait(1).to({y:162.6},0).wait(1).to({y:162.8},0).wait(1).to({y:163},0).wait(1).to({y:163.2},0).wait(1).to({y:163.4},0).wait(1).to({y:163.5},0).wait(1).to({y:163.6},0).wait(1).to({y:163.7},0).wait(1).to({y:163.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(166));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(460).to({_off:false},0).wait(33).to({regY:46.6,y:156.7},0).wait(1).to({x:198.9,y:155.2},0).wait(1).to({y:154},0).wait(1).to({y:153},0).wait(1).to({y:152.2},0).wait(1).to({y:151.5},0).wait(1).to({y:150.9},0).wait(1).to({y:150.4},0).wait(1).to({y:149.9},0).wait(1).to({y:149.4},0).wait(1).to({y:149},0).wait(1).to({x:199,y:148.7},0).wait(1).to({y:148.3},0).wait(1).to({y:148},0).wait(1).to({y:147.7},0).wait(1).to({y:147.5},0).wait(1).to({y:147.2},0).wait(1).to({y:147},0).wait(1).to({y:146.8},0).wait(1).to({y:146.6},0).wait(1).to({y:146.4},0).wait(1).to({y:146.3},0).wait(1).to({y:146.1},0).wait(1).to({y:146},0).wait(1).to({y:145.8},0).wait(1).to({y:145.7},0).wait(1).to({y:145.6},0).wait(1).to({y:145.5},0).wait(1).to({y:145.4},0).wait(1).to({y:145.3},0).wait(1).to({y:145.2},0).wait(1).to({y:145.1},0).wait(2).to({y:145},0).wait(2).to({y:144.9},0).wait(2).to({y:144.8},0).wait(3).to({y:144.7},0).wait(7).to({regY:52,x:199.1,y:149.3},0).to({_off:true},1).wait(85));

	// 图层 38
	this.instance_10 = new lib.补间40("synched",15);
	this.instance_10.setTransform(199.9,252.2,0.846,0.846);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(549).to({_off:false},0).wait(1).to({y:252.4,startPosition:16},0).wait(1).to({y:253.1,startPosition:17},0).wait(1).to({y:254.3,startPosition:18},0).wait(1).to({y:255.9,startPosition:19},0).wait(1).to({y:258,startPosition:20},0).wait(1).to({y:260.5,startPosition:21},0).wait(1).to({y:263.6,startPosition:22},0).wait(1).to({y:267.1,startPosition:23},0).wait(1).to({y:271.2,startPosition:24},0).wait(1).to({y:275.8,startPosition:25},0).wait(1).to({y:280.9,startPosition:26},0).wait(1).to({y:286.5,startPosition:27},0).wait(1).to({y:292.7,startPosition:28},0).wait(1).to({y:299.4,startPosition:29},0).wait(1).to({y:306.8,startPosition:30},0).wait(1).to({y:314.8,startPosition:31},0).wait(1).to({y:323.4,startPosition:32},0).wait(1).to({y:332.6,startPosition:33},0).wait(1).to({y:342.6,startPosition:34},0).wait(1).to({y:353.3,startPosition:35},0).wait(1).to({y:364.7,startPosition:36},0).wait(1).to({y:377,startPosition:37},0).wait(1).to({y:390.1,startPosition:38},0).wait(1).to({y:404.1,startPosition:39},0).wait(1).to({y:419.1,startPosition:40},0).wait(1).to({y:435.1,startPosition:41},0).wait(1).to({y:452.2,startPosition:42},0).wait(1).to({y:470.6,startPosition:43},0).wait(1).to({y:490.3,startPosition:44},0).wait(1).to({y:511.4,startPosition:45},0).wait(1).to({y:534.2,startPosition:46},0).wait(1).to({y:558.7,startPosition:47},0).wait(1).to({y:585.4,startPosition:48},0).wait(1).to({y:614.4,startPosition:49},0).wait(1).to({y:646.3,startPosition:50},0).wait(1).to({y:681.5,startPosition:51},0).wait(1).to({y:720.8,startPosition:52},0).wait(1).to({y:765.4,startPosition:53},0).wait(1).to({y:817.1,startPosition:54},0).wait(1).to({y:879.2,startPosition:55},0).wait(1).to({y:958.8,startPosition:56},0).wait(1).to({y:1080.4,startPosition:50},0).to({_off:true},1).wait(34));

	// a3 (6).png
	this.instance_11 = new lib.补间39("synched",0);
	this.instance_11.setTransform(207.3,-249.5,0.846,0.846);
	this.instance_11._off = true;

	this.instance_12 = new lib.元件10();
	this.instance_12.setTransform(199.5,234.5,0.846,0.846,0,0,0,95,52);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(367).to({_off:false},0).wait(1).to({x:206.9,y:-225.2},0).wait(1).to({x:206.5,y:-202.2},0).wait(1).to({x:206.1,y:-180.6},0).wait(1).to({x:205.8,y:-160.2},0).wait(1).to({x:205.5,y:-141},0).wait(1).to({x:205.2,y:-122.8},0).wait(1).to({x:204.9,y:-105.5},0).wait(1).to({x:204.7,y:-89.1},0).wait(1).to({x:204.4,y:-73.6},0).wait(1).to({x:204.2,y:-58.9},0).wait(1).to({x:203.9,y:-44.9},0).wait(1).to({x:203.7,y:-31.6},0).wait(1).to({x:203.5,y:-18.9},0).wait(1).to({x:203.3,y:-6.9},0).wait(1).to({x:203.1,y:4.6},0).wait(1).to({x:203,y:15.6},0).wait(1).to({x:202.8,y:26},0).wait(1).to({x:202.6,y:36},0).wait(1).to({x:202.5,y:45.5},0).wait(1).to({x:202.3,y:54.5},0).wait(1).to({x:202.2,y:63.2},0).wait(1).to({x:202.1,y:71.4},0).wait(1).to({x:201.9,y:79.3},0).wait(1).to({x:201.8,y:86.9},0).wait(1).to({x:201.7,y:94.1},0).wait(1).to({x:201.6,y:101},0).wait(1).to({x:201.5,y:107.6},0).wait(1).to({x:201.4,y:113.9},0).wait(1).to({x:201.3,y:119.9},0).wait(1).to({x:201.2,y:125.6},0).wait(1).to({x:201.1,y:131.2},0).wait(1).to({x:201,y:136.4},0).wait(1).to({x:200.9,y:141.4},0).wait(1).to({y:146.3},0).wait(1).to({x:200.8,y:150.9},0).wait(1).to({x:200.7,y:155.3},0).wait(1).to({x:200.6,y:159.5},0).wait(1).to({y:163.5},0).wait(1).to({x:200.5,y:167.3},0).wait(1).to({y:171},0).wait(1).to({x:200.4,y:174.5},0).wait(1).to({x:200.3,y:177.9},0).wait(1).to({y:181.1},0).wait(1).to({x:200.2,y:184.1},0).wait(1).to({y:187},0).wait(1).to({y:189.8},0).wait(1).to({x:200.1,y:192.5},0).wait(1).to({y:195},0).wait(1).to({x:200,y:197.4},0).wait(1).to({y:199.7},0).wait(1).to({y:201.9},0).wait(1).to({x:199.9,y:204},0).wait(1).to({y:206},0).wait(1).to({y:207.9},0).wait(1).to({x:199.8,y:209.7},0).wait(1).to({y:211.4},0).wait(1).to({y:213},0).wait(1).to({y:214.5},0).wait(1).to({x:199.7,y:216},0).wait(1).to({y:217.4},0).wait(1).to({y:218.7},0).wait(1).to({y:219.9},0).wait(1).to({y:221.1},0).wait(1).to({x:199.6,y:222.2},0).wait(1).to({y:223.2},0).wait(1).to({y:224.2},0).wait(1).to({y:225.1},0).wait(1).to({y:225.9},0).wait(1).to({y:226.7},0).wait(1).to({x:199.5,y:227.5},0).wait(1).to({y:228.2},0).wait(1).to({y:228.9},0).wait(1).to({y:229.5},0).wait(1).to({y:230},0).wait(1).to({y:230.6},0).wait(1).to({y:231},0).wait(1).to({y:231.5},0).wait(1).to({y:231.9},0).wait(1).to({y:232.3},0).wait(1).to({y:232.6},0).wait(1).to({y:232.9},0).wait(1).to({y:233.2},0).wait(1).to({y:233.4},0).wait(1).to({x:199.4,y:233.6},0).wait(1).to({y:233.8},0).wait(1).to({y:234},0).wait(1).to({y:234.1},0).wait(1).to({y:234.2},0).wait(1).to({y:234.3},0).wait(1).to({y:234.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(166));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(460).to({_off:false},0).wait(35).to({regY:52.1,y:235.4},0).wait(1).to({regY:57.4,y:242.7},0).wait(1).to({x:199.6,y:244.5},0).wait(1).to({y:245.9},0).wait(1).to({y:247},0).wait(1).to({y:248},0).wait(1).to({x:199.7,y:248.8},0).wait(1).to({y:249.5},0).wait(1).to({y:250.1},0).wait(1).to({y:250.7},0).wait(1).to({y:251.2},0).wait(1).to({y:251.7},0).wait(1).to({y:252.1},0).wait(1).to({x:199.8,y:252.5},0).wait(1).to({y:252.8},0).wait(1).to({y:253.2},0).wait(1).to({y:253.5},0).wait(1).to({y:253.7},0).wait(1).to({y:254},0).wait(1).to({y:254.2},0).wait(1).to({y:254.5},0).wait(1).to({y:254.7},0).wait(1).to({y:254.9},0).wait(1).to({y:255},0).wait(1).to({y:255.2},0).wait(1).to({y:255.4},0).wait(1).to({y:255.5},0).wait(1).to({y:255.6},0).wait(1).to({y:255.8},0).wait(1).to({y:255.9},0).wait(1).to({y:256},0).wait(1).to({y:256.1},0).wait(2).to({y:256.2},0).wait(1).to({y:256.3},0).wait(1).to({y:256.4},0).wait(1).to({x:199.9},0).wait(1).to({y:256.5},0).wait(2).to({y:256.6},0).wait(4).to({y:256.7},0).wait(5).to({regY:52,y:252.2},0).to({_off:true},6).wait(77));

	// 1
	this.instance_13 = new lib.补间1("synched",0);
	this.instance_13.setTransform(171.8,1007.4,0.883,0.883);
	this.instance_13._off = true;

	this.instance_14 = new lib.补间2("synched",0);
	this.instance_14.setTransform(171.8,772.9,0.883,0.883);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(28).to({_off:false},0).wait(1).to({y:987.3},0).wait(1).to({y:969.5},0).wait(1).to({y:953.4},0).wait(1).to({y:938.8},0).wait(1).to({y:925.5},0).wait(1).to({y:913.1},0).wait(1).to({y:901.7},0).wait(1).to({y:891.1},0).wait(1).to({y:881.3},0).wait(1).to({y:872},0).wait(1).to({y:863.4},0).wait(1).to({y:855.4},0).wait(1).to({y:847.8},0).wait(1).to({y:840.8},0).wait(1).to({y:834.1},0).wait(1).to({y:828},0).wait(1).to({y:822.2},0).wait(1).to({y:816.8},0).wait(1).to({y:811.8},0).wait(1).to({y:807.1},0).wait(1).to({y:802.8},0).wait(1).to({y:798.8},0).wait(1).to({y:795.1},0).wait(1).to({y:791.7},0).wait(1).to({y:788.6},0).wait(1).to({y:785.8},0).wait(1).to({y:783.3},0).wait(1).to({y:781.1},0).wait(1).to({y:779.2},0).wait(1).to({y:777.5},0).wait(1).to({y:776.1},0).wait(1).to({y:774.9},0).wait(1).to({y:774},0).wait(1).to({y:773.4},0).wait(1).to({y:773},0).to({_off:true},1).wait(562));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(64).to({_off:false},0).wait(197).to({startPosition:0},0).wait(1).to({x:171.7,y:773.2},0).wait(1).to({y:774.2},0).wait(1).to({y:775.9},0).wait(1).to({x:171.6,y:778.3},0).wait(1).to({y:781.4},0).wait(1).to({x:171.5,y:785.2},0).wait(1).to({x:171.4,y:789.8},0).wait(1).to({x:171.3,y:795.2},0).wait(1).to({x:171.2,y:801.3},0).wait(1).to({x:171.1,y:808.1},0).wait(1).to({x:170.9,y:815.6},0).wait(1).to({x:170.8,y:823.8},0).wait(1).to({x:170.6,y:832.7},0).wait(1).to({x:170.5,y:842.1},0).wait(1).to({x:170.3,y:852},0).wait(1).to({x:170.1,y:862.3},0).wait(1).to({x:169.9,y:873},0).wait(1).to({x:169.7,y:883.8},0).wait(1).to({x:169.5,y:894.8},0).wait(1).to({x:169.3,y:905.7},0).wait(1).to({x:169.1,y:916.5},0).wait(1).to({x:168.9,y:927},0).wait(1).to({x:168.7,y:937.2},0).wait(1).to({x:168.5,y:946.9},0).wait(1).to({x:168.3,y:956.1},0).wait(1).to({x:168.1,y:964.7},0).wait(1).to({x:168,y:972.6},0).wait(1).to({x:167.9,y:979.8},0).wait(1).to({x:167.7,y:986.2},0).wait(1).to({x:167.6,y:991.8},0).wait(1).to({x:167.5,y:996.7},0).wait(1).to({y:1000.8},0).wait(1).to({x:167.4,y:1004.1},0).wait(1).to({y:1006.6},0).wait(1).to({x:167.3,y:1008.4},0).wait(1).to({y:1009.5},0).wait(1).to({y:1009.9},0).to({_off:true},1).wait(327));

	// 1-mask
	this.instance_15 = new lib.补间7("synched",0);
	this.instance_15.setTransform(188.5,774.7,0.883,0.883);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.instance_16 = new lib.补间8("synched",0);
	this.instance_16.setTransform(188.5,774.7,0.883,0.883);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(47).to({_off:false},0).to({_off:true,alpha:1},8).wait(571));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(47).to({_off:false},8).wait(28).to({startPosition:0},0).to({alpha:0},12).to({_off:true},1).wait(530));

	// 2
	this.instance_17 = new lib.补间3("synched",0);
	this.instance_17.setTransform(142.3,988.3,0.883,0.883);
	this.instance_17._off = true;

	this.instance_18 = new lib.补间4("synched",0);
	this.instance_18.setTransform(142.3,636,0.883,0.883);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(47).to({_off:false},0).wait(1).to({y:963.3},0).wait(1).to({y:940.7},0).wait(1).to({y:920},0).wait(1).to({y:901},0).wait(1).to({y:883.4},0).wait(1).to({y:866.9},0).wait(1).to({y:851.6},0).wait(1).to({y:837.1},0).wait(1).to({y:823.6},0).wait(1).to({y:810.8},0).wait(1).to({y:798.8},0).wait(1).to({y:787.4},0).wait(1).to({y:776.6},0).wait(1).to({y:766.4},0).wait(1).to({y:756.7},0).wait(1).to({y:747.5},0).wait(1).to({y:738.9},0).wait(1).to({y:730.6},0).wait(1).to({y:722.9},0).wait(1).to({y:715.5},0).wait(1).to({y:708.5},0).wait(1).to({y:701.9},0).wait(1).to({y:695.7},0).wait(1).to({y:689.9},0).wait(1).to({y:684.3},0).wait(1).to({y:679.2},0).wait(1).to({y:674.3},0).wait(1).to({y:669.8},0).wait(1).to({y:665.6},0).wait(1).to({y:661.6},0).wait(1).to({y:658},0).wait(1).to({y:654.7},0).wait(1).to({y:651.7},0).wait(1).to({y:648.9},0).wait(1).to({y:646.4},0).wait(1).to({y:644.2},0).wait(1).to({y:642.3},0).wait(1).to({y:640.6},0).wait(1).to({y:639.2},0).wait(1).to({y:638},0).wait(1).to({y:637.1},0).wait(1).to({y:636.5},0).wait(1).to({y:636.1},0).to({_off:true},1).wait(535));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(91).to({_off:false},0).wait(178).to({startPosition:0},0).wait(1).to({y:636.4},0).wait(1).to({y:637.5},0).wait(1).to({y:639.5},0).wait(1).to({y:642.3},0).wait(1).to({y:645.9},0).wait(1).to({y:650.4},0).wait(1).to({y:655.8},0).wait(1).to({y:662},0).wait(1).to({y:669.1},0).wait(1).to({y:677.1},0).wait(1).to({y:685.9},0).wait(1).to({y:695.6},0).wait(1).to({y:706.1},0).wait(1).to({y:717.3},0).wait(1).to({y:729.3},0).wait(1).to({y:741.8},0).wait(1).to({y:754.9},0).wait(1).to({y:768.5},0).wait(1).to({y:782.4},0).wait(1).to({y:796.5},0).wait(1).to({y:810.8},0).wait(1).to({y:825},0).wait(1).to({y:839.1},0).wait(1).to({y:852.9},0).wait(1).to({y:866.3},0).wait(1).to({y:879.3},0).wait(1).to({y:891.6},0).wait(1).to({y:903.3},0).wait(1).to({y:914.3},0).wait(1).to({y:924.4},0).wait(1).to({y:933.7},0).wait(1).to({y:942.1},0).wait(1).to({y:949.7},0).wait(1).to({y:956.3},0).wait(1).to({y:961.9},0).wait(1).to({y:966.7},0).wait(1).to({y:970.6},0).wait(1).to({y:973.6},0).wait(1).to({y:975.7},0).wait(1).to({y:976.9},0).wait(1).to({y:977.3},0).to({_off:true},1).wait(315));

	// 3
	this.instance_19 = new lib.补间5("synched",0);
	this.instance_19.setTransform(203.5,957.7,0.883,0.883);
	this.instance_19._off = true;

	this.instance_20 = new lib.补间6("synched",0);
	this.instance_20.setTransform(203.5,543.6,0.883,0.883);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(70).to({_off:false},0).wait(1).to({y:934.7},0).wait(1).to({y:913.6},0).wait(1).to({y:893.9},0).wait(1).to({y:875.4},0).wait(1).to({y:858.2},0).wait(1).to({y:841.8},0).wait(1).to({y:826.4},0).wait(1).to({y:811.8},0).wait(1).to({y:797.9},0).wait(1).to({y:784.7},0).wait(1).to({y:772.1},0).wait(1).to({y:760.1},0).wait(1).to({y:748.6},0).wait(1).to({y:737.6},0).wait(1).to({y:727.1},0).wait(1).to({y:717},0).wait(1).to({y:707.4},0).wait(1).to({y:698.1},0).wait(1).to({y:689.2},0).wait(1).to({y:680.7},0).wait(1).to({y:672.5},0).wait(1).to({y:664.7},0).wait(1).to({y:657.2},0).wait(1).to({y:650},0).wait(1).to({y:643.1},0).wait(1).to({y:636.4},0).wait(1).to({y:630.1},0).wait(1).to({y:624},0).wait(1).to({y:618.2},0).wait(1).to({y:612.7},0).wait(1).to({y:607.4},0).wait(1).to({y:602.3},0).wait(1).to({y:597.5},0).wait(1).to({y:592.9},0).wait(1).to({y:588.5},0).wait(1).to({y:584.4},0).wait(1).to({y:580.5},0).wait(1).to({y:576.8},0).wait(1).to({y:573.3},0).wait(1).to({y:570},0).wait(1).to({y:566.9},0).wait(1).to({y:564},0).wait(1).to({y:561.4},0).wait(1).to({y:558.9},0).wait(1).to({y:556.6},0).wait(1).to({y:554.5},0).wait(1).to({y:552.6},0).wait(1).to({y:550.9},0).wait(1).to({y:549.3},0).wait(1).to({y:548},0).wait(1).to({y:546.8},0).wait(1).to({y:545.8},0).wait(1).to({y:545},0).wait(1).to({y:544.4},0).wait(1).to({y:544},0).wait(1).to({y:543.7},0).to({_off:true},1).wait(499));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(127).to({_off:false},0).wait(153).to({startPosition:0},0).wait(1).to({y:544.2},0).wait(1).to({y:545.9},0).wait(1).to({y:548.9},0).wait(1).to({y:553.1},0).wait(1).to({y:558.6},0).wait(1).to({y:565.4},0).wait(1).to({y:573.5},0).wait(1).to({y:582.9},0).wait(1).to({y:593.6},0).wait(1).to({y:605.6},0).wait(1).to({y:618.9},0).wait(1).to({y:633.3},0).wait(1).to({y:648.9},0).wait(1).to({y:665.5},0).wait(1).to({y:682.9},0).wait(1).to({y:701.1},0).wait(1).to({y:719.9},0).wait(1).to({y:739},0).wait(1).to({y:758.3},0).wait(1).to({y:777.6},0).wait(1).to({y:796.6},0).wait(1).to({y:815.2},0).wait(1).to({y:833.1},0).wait(1).to({y:850.2},0).wait(1).to({y:866.4},0).wait(1).to({y:881.5},0).wait(1).to({y:895.4},0).wait(1).to({y:908},0).wait(1).to({y:919.3},0).wait(1).to({y:929.3},0).wait(1).to({y:937.9},0).wait(1).to({y:945.1},0).wait(1).to({y:950.9},0).wait(1).to({y:955.4},0).wait(1).to({y:958.6},0).wait(1).to({y:960.4},0).wait(1).to({y:961.1},0).to({_off:true},1).wait(308));

	// a (3).png
	this.instance_21 = new lib.补间11("synched",0);
	this.instance_21.setTransform(174.1,325.1,1.034,1.034);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.instance_22 = new lib.补间12("synched",0);
	this.instance_22.setTransform(174.1,301.5,1.034,1.034);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21}]},130).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},83).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[]},1).wait(346));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(130).to({_off:false},0).wait(1).to({regX:22.8,regY:-103.5,x:197.7,y:213.5,alpha:0.108},0).wait(1).to({y:209.8,alpha:0.194},0).wait(1).to({y:206.8,alpha:0.267},0).wait(1).to({y:204.1,alpha:0.329},0).wait(1).to({y:201.8,alpha:0.385},0).wait(1).to({y:199.7,alpha:0.434},0).wait(1).to({y:197.8,alpha:0.479},0).wait(1).to({y:196.1,alpha:0.52},0).wait(1).to({y:194.6,alpha:0.557},0).wait(1).to({y:193.1,alpha:0.591},0).wait(1).to({y:191.8,alpha:0.623},0).wait(1).to({y:190.6,alpha:0.652},0).wait(1).to({y:189.4,alpha:0.679},0).wait(1).to({y:188.3,alpha:0.704},0).wait(1).to({y:187.4,alpha:0.728},0).wait(1).to({y:186.4,alpha:0.75},0).wait(1).to({y:185.6,alpha:0.771},0).wait(1).to({y:184.8,alpha:0.79},0).wait(1).to({y:184,alpha:0.808},0).wait(1).to({y:183.3,alpha:0.824},0).wait(1).to({y:182.6,alpha:0.84},0).wait(1).to({y:182,alpha:0.855},0).wait(1).to({y:181.4,alpha:0.869},0).wait(1).to({y:180.9,alpha:0.881},0).wait(1).to({y:180.4,alpha:0.893},0).wait(1).to({y:179.9,alpha:0.904},0).wait(1).to({y:179.5,alpha:0.915},0).wait(1).to({y:179.1,alpha:0.924},0).wait(1).to({y:178.7,alpha:0.933},0).wait(1).to({y:178.4,alpha:0.942},0).wait(1).to({y:178,alpha:0.949},0).wait(1).to({y:177.7,alpha:0.956},0).wait(1).to({y:177.5,alpha:0.963},0).wait(1).to({y:177.2,alpha:0.969},0).wait(1).to({y:177,alpha:0.974},0).wait(1).to({y:176.8,alpha:0.979},0).wait(1).to({y:176.6,alpha:0.983},0).wait(1).to({y:176.5,alpha:0.987},0).wait(1).to({y:176.3,alpha:0.99},0).wait(1).to({y:176.2,alpha:0.993},0).wait(1).to({y:176.1,alpha:0.995},0).wait(1).to({y:176,alpha:0.997},0).wait(1).to({alpha:0.998},0).wait(1).to({y:175.9,alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:0,regY:0,x:174.1,y:283},0).wait(83).to({startPosition:0},0).wait(1).to({regX:22.8,regY:-103.5,x:197.7,y:179.1,alpha:0.827},0).wait(1).to({y:181.6,alpha:0.69},0).wait(1).to({y:183.7,alpha:0.578},0).wait(1).to({y:185.5,alpha:0.484},0).wait(1).to({y:186.9,alpha:0.404},0).wait(1).to({y:188.2,alpha:0.336},0).wait(1).to({y:189.3,alpha:0.277},0).wait(1).to({y:190.2,alpha:0.227},0).wait(1).to({y:191,alpha:0.184},0).wait(1).to({y:191.7,alpha:0.147},0).wait(1).to({y:192.3,alpha:0.115},0).wait(1).to({y:192.8,alpha:0.088},0).wait(1).to({y:193.2,alpha:0.065},0).wait(1).to({y:193.5,alpha:0.047},0).wait(1).to({y:193.8,alpha:0.031},0).wait(1).to({y:194,alpha:0.02},0).wait(1).to({y:194.2,alpha:0.011},0).wait(1).to({y:194.3,alpha:0.005},0).wait(1).to({y:194.4,alpha:0.001},0).to({_off:true},1).wait(347));

	// 图层 8
	this.instance_23 = new lib.补间16("synched",0);
	this.instance_23.setTransform(139.7,642.3,0.799,0.799);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.instance_24 = new lib.补间17("synched",0);
	this.instance_24.setTransform(139.7,629.5,0.799,0.799);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(491).to({_off:false},0).wait(1).to({regX:1.5,regY:-26.5,x:140.9,y:619.9,alpha:0.091},0).wait(1).to({y:618.9,alpha:0.171},0).wait(1).to({y:618,alpha:0.243},0).wait(1).to({y:617.2,alpha:0.307},0).wait(1).to({y:616.4,alpha:0.366},0).wait(1).to({y:615.7,alpha:0.419},0).wait(1).to({y:615.1,alpha:0.467},0).wait(1).to({y:614.5,alpha:0.511},0).wait(1).to({y:614,alpha:0.552},0).wait(1).to({y:613.5,alpha:0.589},0).wait(1).to({y:613.1,alpha:0.623},0).wait(1).to({y:612.7,alpha:0.655},0).wait(1).to({y:612.3,alpha:0.684},0).wait(1).to({y:612,alpha:0.711},0).wait(1).to({y:611.6,alpha:0.736},0).wait(1).to({y:611.3,alpha:0.759},0).wait(1).to({y:611.1,alpha:0.78},0).wait(1).to({y:610.8,alpha:0.8},0).wait(1).to({y:610.6,alpha:0.818},0).wait(1).to({y:610.4,alpha:0.835},0).wait(1).to({y:610.2,alpha:0.85},0).wait(1).to({y:610,alpha:0.865},0).wait(1).to({y:609.8,alpha:0.878},0).wait(1).to({y:609.7,alpha:0.89},0).wait(1).to({y:609.5,alpha:0.902},0).wait(1).to({y:609.4,alpha:0.912},0).wait(1).to({y:609.3,alpha:0.922},0).wait(1).to({y:609.1,alpha:0.931},0).wait(1).to({y:609,alpha:0.939},0).wait(1).to({y:608.9,alpha:0.947},0).wait(1).to({y:608.8,alpha:0.954},0).wait(1).to({alpha:0.96},0).wait(1).to({y:608.7,alpha:0.966},0).wait(1).to({y:608.6,alpha:0.971},0).wait(1).to({alpha:0.976},0).wait(1).to({y:608.5,alpha:0.981},0).wait(1).to({y:608.4,alpha:0.985},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.992},0).wait(1).to({y:608.3,alpha:0.995},0).wait(1).to({alpha:0.997},0).to({_off:true},1).wait(93));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(533).to({_off:false},0).wait(15).to({x:139.5},0).wait(1).to({regX:1.5,regY:-26.5,x:140.7,y:608.3,alpha:0.995},0).wait(1).to({y:608.5,alpha:0.978},0).wait(1).to({y:608.9,alpha:0.949},0).wait(1).to({x:140.8,y:609.5,alpha:0.906},0).wait(1).to({y:610.2,alpha:0.848},0).wait(1).to({x:140.9,y:611.1,alpha:0.775},0).wait(1).to({y:612.3,alpha:0.688},0).wait(1).to({x:141,y:613.5,alpha:0.589},0).wait(1).to({x:141.1,y:614.9,alpha:0.484},0).wait(1).to({x:141.2,y:616.2,alpha:0.378},0).wait(1).to({x:141.3,y:617.5,alpha:0.279},0).wait(1).to({y:618.6,alpha:0.192},0).wait(1).to({x:141.4,y:619.6,alpha:0.12},0).wait(1).to({y:620.3,alpha:0.066},0).wait(1).to({x:141.5,y:620.7,alpha:0.028},0).wait(1).to({y:621,alpha:0.007},0).wait(1).to({regX:0,regY:0,x:140.3,y:642.3,alpha:0},0).to({_off:true},1).wait(60));

	// 图层 7
	this.instance_25 = new lib.补间18("synched",0);
	this.instance_25.setTransform(178.5,654.7,0.799,0.799);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.instance_26 = new lib.补间19("synched",0);
	this.instance_26.setTransform(178.5,641.9,0.799,0.799);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(465).to({_off:false},0).wait(1).to({regX:1,regY:-7,x:179.3,y:647.9,alpha:0.091},0).wait(1).to({y:646.9,alpha:0.171},0).wait(1).to({y:645.9,alpha:0.243},0).wait(1).to({y:645.1,alpha:0.307},0).wait(1).to({y:644.4,alpha:0.366},0).wait(1).to({y:643.7,alpha:0.419},0).wait(1).to({y:643.1,alpha:0.467},0).wait(1).to({y:642.5,alpha:0.511},0).wait(1).to({y:642,alpha:0.552},0).wait(1).to({y:641.5,alpha:0.589},0).wait(1).to({y:641.1,alpha:0.623},0).wait(1).to({y:640.7,alpha:0.655},0).wait(1).to({y:640.3,alpha:0.684},0).wait(1).to({y:639.9,alpha:0.711},0).wait(1).to({y:639.6,alpha:0.736},0).wait(1).to({y:639.3,alpha:0.759},0).wait(1).to({y:639.1,alpha:0.78},0).wait(1).to({y:638.8,alpha:0.8},0).wait(1).to({y:638.6,alpha:0.818},0).wait(1).to({y:638.4,alpha:0.835},0).wait(1).to({y:638.2,alpha:0.85},0).wait(1).to({y:638,alpha:0.865},0).wait(1).to({y:637.8,alpha:0.878},0).wait(1).to({y:637.7,alpha:0.89},0).wait(1).to({y:637.5,alpha:0.902},0).wait(1).to({y:637.4,alpha:0.912},0).wait(1).to({y:637.2,alpha:0.922},0).wait(1).to({y:637.1,alpha:0.931},0).wait(1).to({y:637,alpha:0.939},0).wait(1).to({y:636.9,alpha:0.947},0).wait(1).to({y:636.8,alpha:0.954},0).wait(1).to({alpha:0.96},0).wait(1).to({y:636.7,alpha:0.966},0).wait(1).to({y:636.6,alpha:0.971},0).wait(1).to({alpha:0.976},0).wait(1).to({y:636.5,alpha:0.981},0).wait(1).to({y:636.4,alpha:0.985},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.992},0).wait(1).to({y:636.3,alpha:0.995},0).wait(1).to({alpha:0.997},0).to({_off:true},1).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(507).to({_off:false},0).wait(47).to({startPosition:0},0).wait(1).to({regX:1,regY:-7,x:179.3,y:636.3,alpha:0.995},0).wait(1).to({y:636.5,alpha:0.978},0).wait(1).to({y:636.9,alpha:0.949},0).wait(1).to({y:637.5,alpha:0.906},0).wait(1).to({y:638.2,alpha:0.848},0).wait(1).to({y:639.1,alpha:0.775},0).wait(1).to({y:640.2,alpha:0.688},0).wait(1).to({y:641.5,alpha:0.589},0).wait(1).to({y:642.9,alpha:0.484},0).wait(1).to({y:644.2,alpha:0.378},0).wait(1).to({y:645.5,alpha:0.279},0).wait(1).to({y:646.6,alpha:0.192},0).wait(1).to({y:647.5,alpha:0.12},0).wait(1).to({y:648.2,alpha:0.066},0).wait(1).to({y:648.7,alpha:0.028},0).wait(1).to({y:649,alpha:0.007},0).wait(1).to({regX:0,regY:0,x:178.5,y:654.7,alpha:0},0).to({_off:true},1).wait(54));

	// 图层 6
	this.instance_27 = new lib.补间20("synched",0);
	this.instance_27.setTransform(217.2,555.2,0.799,0.799);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.instance_28 = new lib.补间35("synched",0);
	this.instance_28.setTransform(217.2,542.4,0.799,0.799);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(442).to({_off:false},0).wait(1).to({regX:1,regY:-9,x:218,y:546.8,alpha:0.091},0).wait(1).to({y:545.8,alpha:0.171},0).wait(1).to({y:544.9,alpha:0.243},0).wait(1).to({y:544.1,alpha:0.307},0).wait(1).to({y:543.3,alpha:0.366},0).wait(1).to({y:542.6,alpha:0.419},0).wait(1).to({y:542,alpha:0.467},0).wait(1).to({y:541.4,alpha:0.511},0).wait(1).to({y:540.9,alpha:0.552},0).wait(1).to({y:540.4,alpha:0.589},0).wait(1).to({y:540,alpha:0.623},0).wait(1).to({y:539.6,alpha:0.655},0).wait(1).to({y:539.2,alpha:0.684},0).wait(1).to({y:538.9,alpha:0.711},0).wait(1).to({y:538.5,alpha:0.736},0).wait(1).to({y:538.2,alpha:0.759},0).wait(1).to({y:538,alpha:0.78},0).wait(1).to({y:537.7,alpha:0.8},0).wait(1).to({y:537.5,alpha:0.818},0).wait(1).to({y:537.3,alpha:0.835},0).wait(1).to({y:537.1,alpha:0.85},0).wait(1).to({y:536.9,alpha:0.865},0).wait(1).to({y:536.7,alpha:0.878},0).wait(1).to({y:536.6,alpha:0.89},0).wait(1).to({y:536.4,alpha:0.902},0).wait(1).to({y:536.3,alpha:0.912},0).wait(1).to({y:536.2,alpha:0.922},0).wait(1).to({y:536,alpha:0.931},0).wait(1).to({y:535.9,alpha:0.939},0).wait(1).to({y:535.8,alpha:0.947},0).wait(1).to({y:535.7,alpha:0.954},0).wait(1).to({alpha:0.96},0).wait(1).to({y:535.6,alpha:0.966},0).wait(1).to({y:535.5,alpha:0.971},0).wait(1).to({alpha:0.976},0).wait(1).to({y:535.4,alpha:0.981},0).wait(1).to({y:535.3,alpha:0.985},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.992},0).wait(1).to({y:535.2,alpha:0.995},0).wait(1).to({alpha:0.997},0).to({_off:true},1).wait(142));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(484).to({_off:false},0).wait(75).to({startPosition:0},0).wait(1).to({regX:1,regY:-9,x:218,y:535.2,alpha:0.995},0).wait(1).to({y:535.4,alpha:0.978},0).wait(1).to({y:535.8,alpha:0.949},0).wait(1).to({y:536.4,alpha:0.906},0).wait(1).to({y:537.1,alpha:0.848},0).wait(1).to({y:538,alpha:0.775},0).wait(1).to({y:539.2,alpha:0.688},0).wait(1).to({y:540.4,alpha:0.589},0).wait(1).to({y:541.8,alpha:0.484},0).wait(1).to({y:543.1,alpha:0.378},0).wait(1).to({y:544.4,alpha:0.279},0).wait(1).to({y:545.5,alpha:0.192},0).wait(1).to({y:546.5,alpha:0.12},0).wait(1).to({y:547.2,alpha:0.066},0).wait(1).to({y:547.6,alpha:0.028},0).wait(1).to({y:547.9,alpha:0.007},0).wait(1).to({regX:0,regY:0,x:217.2,y:555.2,alpha:0},0).to({_off:true},1).wait(49));

	// 图层 5
	this.instance_29 = new lib.补间36("synched",0);
	this.instance_29.setTransform(253.5,640.3,0.799,0.799);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.instance_30 = new lib.补间53("synched",0);
	this.instance_30.setTransform(253.5,627.5,0.799,0.799);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(423).to({_off:false},0).wait(1).to({regX:1.5,regY:11.5,x:254.7,y:648.3,alpha:0.091},0).wait(1).to({y:647.3,alpha:0.171},0).wait(1).to({y:646.4,alpha:0.243},0).wait(1).to({y:645.6,alpha:0.307},0).wait(1).to({y:644.8,alpha:0.366},0).wait(1).to({y:644.1,alpha:0.419},0).wait(1).to({y:643.5,alpha:0.467},0).wait(1).to({y:642.9,alpha:0.511},0).wait(1).to({y:642.4,alpha:0.552},0).wait(1).to({y:641.9,alpha:0.589},0).wait(1).to({y:641.5,alpha:0.623},0).wait(1).to({y:641.1,alpha:0.655},0).wait(1).to({y:640.7,alpha:0.684},0).wait(1).to({y:640.4,alpha:0.711},0).wait(1).to({y:640,alpha:0.736},0).wait(1).to({y:639.7,alpha:0.759},0).wait(1).to({y:639.5,alpha:0.78},0).wait(1).to({y:639.2,alpha:0.8},0).wait(1).to({y:639,alpha:0.818},0).wait(1).to({y:638.8,alpha:0.835},0).wait(1).to({y:638.6,alpha:0.85},0).wait(1).to({y:638.4,alpha:0.865},0).wait(1).to({y:638.2,alpha:0.878},0).wait(1).to({y:638.1,alpha:0.89},0).wait(1).to({y:637.9,alpha:0.902},0).wait(1).to({y:637.8,alpha:0.912},0).wait(1).to({y:637.7,alpha:0.922},0).wait(1).to({y:637.5,alpha:0.931},0).wait(1).to({y:637.4,alpha:0.939},0).wait(1).to({y:637.3,alpha:0.947},0).wait(1).to({y:637.2,alpha:0.954},0).wait(1).to({alpha:0.96},0).wait(1).to({y:637.1,alpha:0.966},0).wait(1).to({y:637,alpha:0.971},0).wait(1).to({alpha:0.976},0).wait(1).to({y:636.9,alpha:0.981},0).wait(1).to({y:636.8,alpha:0.985},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.992},0).wait(1).to({y:636.7,alpha:0.995},0).wait(1).to({alpha:0.997},0).to({_off:true},1).wait(161));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(465).to({_off:false},0).wait(99).to({startPosition:0},0).wait(1).to({regX:1.5,regY:11.5,x:254.7,y:636.7,alpha:0.995},0).wait(1).to({y:636.9,alpha:0.978},0).wait(1).to({y:637.3,alpha:0.949},0).wait(1).to({y:637.9,alpha:0.906},0).wait(1).to({y:638.6,alpha:0.848},0).wait(1).to({y:639.5,alpha:0.775},0).wait(1).to({y:640.7,alpha:0.688},0).wait(1).to({y:641.9,alpha:0.589},0).wait(1).to({y:643.3,alpha:0.484},0).wait(1).to({y:644.6,alpha:0.378},0).wait(1).to({y:645.9,alpha:0.279},0).wait(1).to({y:647,alpha:0.192},0).wait(1).to({y:648,alpha:0.12},0).wait(1).to({y:648.7,alpha:0.066},0).wait(1).to({y:649.1,alpha:0.028},0).wait(1).to({y:649.4,alpha:0.007},0).wait(1).to({regX:0,regY:0,x:253.5,y:640.3,alpha:0},0).to({_off:true},1).wait(44));

	// x1
	this.instance_31 = new lib.补间25("synched",0);
	this.instance_31.setTransform(203.3,-617.3);
	this.instance_31._off = true;

	this.instance_32 = new lib.补间26("synched",0);
	this.instance_32.setTransform(203.3,354.8);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(357).to({_off:false},0).wait(1).to({y:-549.7},0).wait(1).to({y:-487.6},0).wait(1).to({y:-430.5},0).wait(1).to({y:-377.8},0).wait(1).to({y:-329},0).wait(1).to({y:-283.7},0).wait(1).to({y:-241.7},0).wait(1).to({y:-202.5},0).wait(1).to({y:-166},0).wait(1).to({y:-131.9},0).wait(1).to({y:-100.1},0).wait(1).to({y:-70.3},0).wait(1).to({y:-42.4},0).wait(1).to({y:-16.2},0).wait(1).to({y:8.3},0).wait(1).to({y:31.3},0).wait(1).to({y:52.8},0).wait(1).to({y:73.1},0).wait(1).to({y:92.1},0).wait(1).to({y:110},0).wait(1).to({y:126.8},0).wait(1).to({y:142.5},0).wait(1).to({y:157.3},0).wait(1).to({y:171.3},0).wait(1).to({y:184.3},0).wait(1).to({y:196.6},0).wait(1).to({y:208.1},0).wait(1).to({y:218.9},0).wait(1).to({y:229.1},0).wait(1).to({y:238.6},0).wait(1).to({y:247.5},0).wait(1).to({y:255.9},0).wait(1).to({y:263.7},0).wait(1).to({y:271.1},0).wait(1).to({y:277.9},0).wait(1).to({y:284.3},0).wait(1).to({y:290.3},0).wait(1).to({y:295.9},0).wait(1).to({y:301.1},0).wait(1).to({y:305.9},0).wait(1).to({y:310.4},0).wait(1).to({y:314.6},0).wait(1).to({y:318.4},0).wait(1).to({y:322},0).wait(1).to({y:325.3},0).wait(1).to({y:328.4},0).wait(1).to({y:331.2},0).wait(1).to({y:333.8},0).wait(1).to({y:336.2},0).wait(1).to({y:338.3},0).wait(1).to({y:340.3},0).wait(1).to({y:342.1},0).wait(1).to({y:343.7},0).wait(1).to({y:345.2},0).wait(1).to({y:346.5},0).wait(1).to({y:347.7},0).wait(1).to({y:348.8},0).wait(1).to({y:349.7},0).wait(1).to({y:350.6},0).wait(1).to({y:351.3},0).wait(1).to({y:351.9},0).wait(1).to({y:352.5},0).wait(1).to({y:352.9},0).wait(1).to({y:353.3},0).wait(1).to({y:353.7},0).wait(1).to({y:354},0).wait(1).to({y:354.2},0).wait(1).to({y:354.3},0).wait(1).to({y:354.5},0).wait(1).to({y:354.6},0).wait(1).to({y:354.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(193));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(433).to({_off:false},0).wait(115).to({startPosition:0},0).wait(1).to({y:354.9},0).wait(1).to({y:355.3,alpha:0.999},0).wait(1).to({y:355.9},0).wait(1).to({y:356.9,alpha:0.998},0).wait(1).to({y:358.1,alpha:0.997},0).wait(1).to({y:359.6,alpha:0.995},0).wait(1).to({y:361.4,alpha:0.993},0).wait(1).to({y:363.6,alpha:0.991},0).wait(1).to({y:366.1,alpha:0.988},0).wait(1).to({y:368.9,alpha:0.985},0).wait(1).to({y:372.1,alpha:0.982},0).wait(1).to({y:375.6,alpha:0.978},0).wait(1).to({y:379.6,alpha:0.974},0).wait(1).to({y:383.9,alpha:0.97},0).wait(1).to({y:388.7,alpha:0.965},0).wait(1).to({y:394,alpha:0.959},0).wait(1).to({y:399.7,alpha:0.954},0).wait(1).to({y:405.9,alpha:0.947},0).wait(1).to({y:412.6,alpha:0.94},0).wait(1).to({y:419.9,alpha:0.933},0).wait(1).to({y:427.7,alpha:0.924},0).wait(1).to({y:436.2,alpha:0.916},0).wait(1).to({y:445.3,alpha:0.906},0).wait(1).to({y:455.1,alpha:0.896},0).wait(1).to({y:465.7,alpha:0.885},0).wait(1).to({y:477.1,alpha:0.873},0).wait(1).to({y:489.4,alpha:0.861},0).wait(1).to({y:502.6,alpha:0.847},0).wait(1).to({y:516.8,alpha:0.832},0).wait(1).to({y:532.2,alpha:0.816},0).wait(1).to({y:548.8,alpha:0.799},0).wait(1).to({y:566.8,alpha:0.781},0).wait(1).to({y:586.3,alpha:0.76},0).wait(1).to({y:607.5,alpha:0.738},0).wait(1).to({y:630.7,alpha:0.714},0).wait(1).to({y:656.1,alpha:0.688},0).wait(1).to({y:684.2,alpha:0.659},0).wait(1).to({y:715.4,alpha:0.627},0).wait(1).to({y:750.5,alpha:0.59},0).wait(1).to({y:790.5,alpha:0.549},0).wait(1).to({y:836.9,alpha:0.501},0).wait(1).to({y:892.3,alpha:0.444},0).wait(1).to({y:961.9,alpha:0.372},0).wait(1).to({y:1058.7,alpha:0.271},0).wait(1).to({y:1320.9,alpha:0},0).to({_off:true},1).wait(32));

	// x2
	this.instance_33 = new lib.元件12();
	this.instance_33.setTransform(203.3,-552.3,1,1,0,0,0,389.5,478);
	this.instance_33._off = true;

	this.instance_34 = new lib.补间28("synched",0);
	this.instance_34.setTransform(203.3,419.8);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(349).to({_off:false},0).wait(1).to({y:-484.6},0).wait(1).to({y:-422.6},0).wait(1).to({y:-365.4},0).wait(1).to({y:-312.7},0).wait(1).to({y:-263.9},0).wait(1).to({y:-218.7},0).wait(1).to({y:-176.6},0).wait(1).to({y:-137.5},0).wait(1).to({y:-100.9},0).wait(1).to({y:-66.9},0).wait(1).to({y:-35},0).wait(1).to({y:-5.2},0).wait(1).to({y:22.7},0).wait(1).to({y:48.8},0).wait(1).to({y:73.3},0).wait(1).to({y:96.3},0).wait(1).to({y:117.9},0).wait(1).to({y:138.2},0).wait(1).to({y:157.2},0).wait(1).to({y:175},0).wait(1).to({y:191.8},0).wait(1).to({y:207.6},0).wait(1).to({y:222.4},0).wait(1).to({y:236.3},0).wait(1).to({y:249.4},0).wait(1).to({y:261.7},0).wait(1).to({y:273.2},0).wait(1).to({y:284},0).wait(1).to({y:294.2},0).wait(1).to({y:303.7},0).wait(1).to({y:312.6},0).wait(1).to({y:321},0).wait(1).to({y:328.8},0).wait(1).to({y:336.1},0).wait(1).to({y:343},0).wait(1).to({y:349.4},0).wait(1).to({y:355.4},0).wait(1).to({y:360.9},0).wait(1).to({y:366.1},0).wait(1).to({y:371},0).wait(1).to({y:375.5},0).wait(1).to({y:379.6},0).wait(1).to({y:383.5},0).wait(1).to({y:387.1},0).wait(1).to({y:390.4},0).wait(1).to({y:393.4},0).wait(1).to({y:396.3},0).wait(1).to({y:398.8},0).wait(1).to({y:401.2},0).wait(1).to({y:403.4},0).wait(1).to({y:405.4},0).wait(1).to({y:407.2},0).wait(1).to({y:408.8},0).wait(1).to({y:410.3},0).wait(1).to({y:411.6},0).wait(1).to({y:412.8},0).wait(1).to({y:413.8},0).wait(1).to({y:414.8},0).wait(1).to({y:415.6},0).wait(1).to({y:416.3},0).wait(1).to({y:417},0).wait(1).to({y:417.5},0).wait(1).to({y:418},0).wait(1).to({y:418.4},0).wait(1).to({y:418.7},0).wait(1).to({y:419},0).wait(1).to({y:419.2},0).wait(1).to({y:419.4},0).wait(1).to({y:419.5},0).wait(1).to({y:419.6},0).wait(1).to({y:419.7},0).wait(1).to({y:419.8},0).wait(3).to({_off:true},1).wait(201));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(425).to({_off:false},0).wait(123).to({startPosition:0},0).wait(1).to({y:420},0).wait(1).to({y:420.6,alpha:0.999},0).wait(1).to({y:421.7,alpha:0.998},0).wait(1).to({y:423.3,alpha:0.996},0).wait(1).to({y:425.4,alpha:0.994},0).wait(1).to({y:427.9,alpha:0.992},0).wait(1).to({y:431.1,alpha:0.988},0).wait(1).to({y:434.8,alpha:0.984},0).wait(1).to({y:439.1,alpha:0.98},0).wait(1).to({y:444,alpha:0.975},0).wait(1).to({y:449.6,alpha:0.969},0).wait(1).to({y:455.9,alpha:0.963},0).wait(1).to({y:463,alpha:0.955},0).wait(1).to({y:470.9,alpha:0.947},0).wait(1).to({y:479.6,alpha:0.938},0).wait(1).to({y:489.3,alpha:0.928},0).wait(1).to({y:499.9,alpha:0.917},0).wait(1).to({y:511.7,alpha:0.905},0).wait(1).to({y:524.6,alpha:0.891},0).wait(1).to({y:538.8,alpha:0.877},0).wait(1).to({y:554.4,alpha:0.861},0).wait(1).to({y:571.6,alpha:0.843},0).wait(1).to({y:590.5,alpha:0.823},0).wait(1).to({y:611.4,alpha:0.802},0).wait(1).to({y:634.5,alpha:0.778},0).wait(1).to({y:660.1,alpha:0.751},0).wait(1).to({y:688.8,alpha:0.722},0).wait(1).to({y:721.1,alpha:0.688},0).wait(1).to({y:757.8,alpha:0.65},0).wait(1).to({y:800,alpha:0.606},0).wait(1).to({y:849.4,alpha:0.555},0).wait(1).to({y:909.2,alpha:0.493},0).wait(1).to({y:984.9,alpha:0.415},0).wait(1).to({y:1091.6,alpha:0.305},0).wait(1).to({y:1385.9,alpha:0},0).to({_off:true},1).wait(42));

	// x3
	this.instance_35 = new lib.补间29("synched",0);
	this.instance_35.setTransform(203.3,-647.8);
	this.instance_35._off = true;

	this.instance_36 = new lib.补间30("synched",0);
	this.instance_36.setTransform(203.3,324.3);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(362).to({_off:false},0).wait(1).to({y:-580.2},0).wait(1).to({y:-518.1},0).wait(1).to({y:-461},0).wait(1).to({y:-408.3},0).wait(1).to({y:-359.5},0).wait(1).to({y:-314.2},0).wait(1).to({y:-272.2},0).wait(1).to({y:-233},0).wait(1).to({y:-196.5},0).wait(1).to({y:-162.4},0).wait(1).to({y:-130.6},0).wait(1).to({y:-100.8},0).wait(1).to({y:-72.9},0).wait(1).to({y:-46.7},0).wait(1).to({y:-22.2},0).wait(1).to({y:0.8},0).wait(1).to({y:22.3},0).wait(1).to({y:42.6},0).wait(1).to({y:61.6},0).wait(1).to({y:79.5},0).wait(1).to({y:96.3},0).wait(1).to({y:112},0).wait(1).to({y:126.9},0).wait(1).to({y:140.8},0).wait(1).to({y:153.8},0).wait(1).to({y:166.1},0).wait(1).to({y:177.6},0).wait(1).to({y:188.5},0).wait(1).to({y:198.6},0).wait(1).to({y:208.1},0).wait(1).to({y:217},0).wait(1).to({y:225.4},0).wait(1).to({y:233.2},0).wait(1).to({y:240.6},0).wait(1).to({y:247.4},0).wait(1).to({y:253.8},0).wait(1).to({y:259.8},0).wait(1).to({y:265.4},0).wait(1).to({y:270.6},0).wait(1).to({y:275.4},0).wait(1).to({y:279.9},0).wait(1).to({y:284.1},0).wait(1).to({y:287.9},0).wait(1).to({y:291.5},0).wait(1).to({y:294.8},0).wait(1).to({y:297.9},0).wait(1).to({y:300.7},0).wait(1).to({y:303.3},0).wait(1).to({y:305.7},0).wait(1).to({y:307.8},0).wait(1).to({y:309.8},0).wait(1).to({y:311.6},0).wait(1).to({y:313.2},0).wait(1).to({y:314.7},0).wait(1).to({y:316},0).wait(1).to({y:317.2},0).wait(1).to({y:318.3},0).wait(1).to({y:319.2},0).wait(1).to({y:320.1},0).wait(1).to({y:320.8},0).wait(1).to({y:321.4},0).wait(1).to({y:322},0).wait(1).to({y:322.4},0).wait(1).to({y:322.8},0).wait(1).to({y:323.2},0).wait(1).to({y:323.5},0).wait(1).to({y:323.7},0).wait(1).to({y:323.8},0).wait(1).to({y:324},0).wait(1).to({y:324.1},0).wait(1).to({y:324.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(188));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(438).to({_off:false},0).wait(110).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:324.6},0).wait(1).to({y:325,alpha:0.999},0).wait(1).to({y:325.7},0).wait(1).to({y:326.5,alpha:0.998},0).wait(1).to({y:327.5,alpha:0.997},0).wait(1).to({y:328.7,alpha:0.995},0).wait(1).to({y:330.1,alpha:0.994},0).wait(1).to({y:331.7,alpha:0.992},0).wait(1).to({y:333.5,alpha:0.99},0).wait(1).to({y:335.6,alpha:0.988},0).wait(1).to({y:337.9,alpha:0.986},0).wait(1).to({y:340.4,alpha:0.983},0).wait(1).to({y:343.1,alpha:0.98},0).wait(1).to({y:346.2,alpha:0.977},0).wait(1).to({y:349.5,alpha:0.974},0).wait(1).to({y:353,alpha:0.97},0).wait(1).to({y:356.9,alpha:0.966},0).wait(1).to({y:361,alpha:0.962},0).wait(1).to({y:365.5,alpha:0.957},0).wait(1).to({y:370.3,alpha:0.952},0).wait(1).to({y:375.4,alpha:0.947},0).wait(1).to({y:380.8,alpha:0.941},0).wait(1).to({y:386.6,alpha:0.935},0).wait(1).to({y:392.9,alpha:0.929},0).wait(1).to({y:399.5,alpha:0.922},0).wait(1).to({y:406.5,alpha:0.915},0).wait(1).to({y:414,alpha:0.907},0).wait(1).to({y:421.9,alpha:0.899},0).wait(1).to({y:430.3,alpha:0.89},0).wait(1).to({y:439.3,alpha:0.881},0).wait(1).to({y:448.8,alpha:0.871},0).wait(1).to({y:458.9,alpha:0.861},0).wait(1).to({y:469.6,alpha:0.85},0).wait(1).to({y:481,alpha:0.838},0).wait(1).to({y:493.2,alpha:0.825},0).wait(1).to({y:506.1,alpha:0.812},0).wait(1).to({y:519.9,alpha:0.798},0).wait(1).to({y:534.6,alpha:0.782},0).wait(1).to({y:550.3,alpha:0.766},0).wait(1).to({y:567.1,alpha:0.749},0).wait(1).to({y:585.2,alpha:0.73},0).wait(1).to({y:604.6,alpha:0.71},0).wait(1).to({y:625.6,alpha:0.688},0).wait(1).to({y:648.4,alpha:0.665},0).wait(1).to({y:673.2,alpha:0.639},0).wait(1).to({y:700.4,alpha:0.611},0).wait(1).to({y:730.4,alpha:0.58},0).wait(1).to({y:763.9,alpha:0.545},0).wait(1).to({y:801.9,alpha:0.506},0).wait(1).to({y:845.6,alpha:0.46},0).wait(1).to({y:897.5,alpha:0.407},0).wait(1).to({y:962.1,alpha:0.34},0).wait(1).to({y:1051.5,alpha:0.247},0).wait(1).to({y:1290.4,alpha:0},0).to({_off:true},1).wait(22));

	// x4
	this.instance_37 = new lib.补间31("synched",0);
	this.instance_37.setTransform(203.3,-647.8);
	this.instance_37._off = true;

	this.instance_38 = new lib.补间32("synched",0);
	this.instance_38.setTransform(203.3,324.3);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(378).to({_off:false},0).wait(1).to({y:-580.2},0).wait(1).to({y:-518.1},0).wait(1).to({y:-461},0).wait(1).to({y:-408.3},0).wait(1).to({y:-359.5},0).wait(1).to({y:-314.2},0).wait(1).to({y:-272.2},0).wait(1).to({y:-233},0).wait(1).to({y:-196.5},0).wait(1).to({y:-162.4},0).wait(1).to({y:-130.6},0).wait(1).to({y:-100.8},0).wait(1).to({y:-72.9},0).wait(1).to({y:-46.7},0).wait(1).to({y:-22.2},0).wait(1).to({y:0.8},0).wait(1).to({y:22.3},0).wait(1).to({y:42.6},0).wait(1).to({y:61.6},0).wait(1).to({y:79.5},0).wait(1).to({y:96.3},0).wait(1).to({y:112},0).wait(1).to({y:126.9},0).wait(1).to({y:140.8},0).wait(1).to({y:153.8},0).wait(1).to({y:166.1},0).wait(1).to({y:177.6},0).wait(1).to({y:188.5},0).wait(1).to({y:198.6},0).wait(1).to({y:208.1},0).wait(1).to({y:217},0).wait(1).to({y:225.4},0).wait(1).to({y:233.2},0).wait(1).to({y:240.6},0).wait(1).to({y:247.4},0).wait(1).to({y:253.8},0).wait(1).to({y:259.8},0).wait(1).to({y:265.4},0).wait(1).to({y:270.6},0).wait(1).to({y:275.4},0).wait(1).to({y:279.9},0).wait(1).to({y:284.1},0).wait(1).to({y:287.9},0).wait(1).to({y:291.5},0).wait(1).to({y:294.8},0).wait(1).to({y:297.9},0).wait(1).to({y:300.7},0).wait(1).to({y:303.3},0).wait(1).to({y:305.7},0).wait(1).to({y:307.8},0).wait(1).to({y:309.8},0).wait(1).to({y:311.6},0).wait(1).to({y:313.2},0).wait(1).to({y:314.7},0).wait(1).to({y:316},0).wait(1).to({y:317.2},0).wait(1).to({y:318.3},0).wait(1).to({y:319.2},0).wait(1).to({y:320.1},0).wait(1).to({y:320.8},0).wait(1).to({y:321.4},0).wait(1).to({y:322},0).wait(1).to({y:322.4},0).wait(1).to({y:322.8},0).wait(1).to({y:323.2},0).wait(1).to({y:323.5},0).wait(1).to({y:323.7},0).wait(1).to({y:323.8},0).wait(1).to({y:324},0).wait(1).to({y:324.1},0).wait(1).to({y:324.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(172));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(454).to({_off:false},0).wait(94).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:324.5},0).wait(1).to({y:324.8,alpha:0.999},0).wait(1).to({y:325.2},0).wait(1).to({y:325.7,alpha:0.998},0).wait(1).to({y:326.4},0).wait(1).to({y:327.2,alpha:0.997},0).wait(1).to({y:328.1,alpha:0.996},0).wait(1).to({y:329.2,alpha:0.995},0).wait(1).to({y:330.4,alpha:0.994},0).wait(1).to({y:331.7,alpha:0.992},0).wait(1).to({y:333.2,alpha:0.991},0).wait(1).to({y:334.9,alpha:0.989},0).wait(1).to({y:336.7,alpha:0.987},0).wait(1).to({y:338.6,alpha:0.985},0).wait(1).to({y:340.7,alpha:0.983},0).wait(1).to({y:343,alpha:0.981},0).wait(1).to({y:345.5,alpha:0.978},0).wait(1).to({y:348.1,alpha:0.975},0).wait(1).to({y:350.9,alpha:0.972},0).wait(1).to({y:353.9,alpha:0.969},0).wait(1).to({y:357.1,alpha:0.966},0).wait(1).to({y:360.5,alpha:0.962},0).wait(1).to({y:364.1,alpha:0.959},0).wait(1).to({y:367.9,alpha:0.955},0).wait(1).to({y:372,alpha:0.951},0).wait(1).to({y:376.2,alpha:0.946},0).wait(1).to({y:380.7,alpha:0.942},0).wait(1).to({y:385.5,alpha:0.937},0).wait(1).to({y:390.5,alpha:0.931},0).wait(1).to({y:395.8,alpha:0.926},0).wait(1).to({y:401.3,alpha:0.92},0).wait(1).to({y:407.1,alpha:0.914},0).wait(1).to({y:413.3,alpha:0.908},0).wait(1).to({y:419.7,alpha:0.901},0).wait(1).to({y:426.5,alpha:0.894},0).wait(1).to({y:433.6,alpha:0.887},0).wait(1).to({y:441.1,alpha:0.879},0).wait(1).to({y:448.9,alpha:0.871},0).wait(1).to({y:457.2,alpha:0.862},0).wait(1).to({y:465.9,alpha:0.853},0).wait(1).to({y:475,alpha:0.844},0).wait(1).to({y:484.6,alpha:0.834},0).wait(1).to({y:494.7,alpha:0.824},0).wait(1).to({y:505.3,alpha:0.813},0).wait(1).to({y:516.5,alpha:0.801},0).wait(1).to({y:528.3,alpha:0.789},0).wait(1).to({y:540.8,alpha:0.776},0).wait(1).to({y:554,alpha:0.762},0).wait(1).to({y:567.9,alpha:0.748},0).wait(1).to({y:582.7,alpha:0.733},0).wait(1).to({y:598.4,alpha:0.716},0).wait(1).to({y:615.1,alpha:0.699},0).wait(1).to({y:632.9,alpha:0.681},0).wait(1).to({y:651.9,alpha:0.661},0).wait(1).to({y:672.4,alpha:0.64},0).wait(1).to({y:694.5,alpha:0.617},0).wait(1).to({y:718.4,alpha:0.592},0).wait(1).to({y:744.4,alpha:0.565},0).wait(1).to({y:773.1,alpha:0.535},0).wait(1).to({y:804.9,alpha:0.503},0).wait(1).to({y:840.7,alpha:0.465},0).wait(1).to({y:881.7,alpha:0.423},0).wait(1).to({y:930.2,alpha:0.373},0).wait(1).to({y:990.2,alpha:0.311},0).wait(1).to({y:1072.5,alpha:0.226},0).wait(1).to({y:1290.4,alpha:0},0).to({_off:true},1).wait(10));

	// x5
	this.instance_39 = new lib.补间33("synched",0);
	this.instance_39.setTransform(203.3,-564.8);
	this.instance_39._off = true;

	this.instance_40 = new lib.补间34("synched",0);
	this.instance_40.setTransform(203.3,407.3);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(371).to({_off:false},0).wait(1).to({y:-497.2},0).wait(1).to({y:-435.1},0).wait(1).to({y:-378},0).wait(1).to({y:-325.3},0).wait(1).to({y:-276.5},0).wait(1).to({y:-231.2},0).wait(1).to({y:-189.2},0).wait(1).to({y:-150},0).wait(1).to({y:-113.5},0).wait(1).to({y:-79.4},0).wait(1).to({y:-47.6},0).wait(1).to({y:-17.8},0).wait(1).to({y:10.1},0).wait(1).to({y:36.3},0).wait(1).to({y:60.8},0).wait(1).to({y:83.8},0).wait(1).to({y:105.3},0).wait(1).to({y:125.6},0).wait(1).to({y:144.6},0).wait(1).to({y:162.5},0).wait(1).to({y:179.3},0).wait(1).to({y:195},0).wait(1).to({y:209.9},0).wait(1).to({y:223.8},0).wait(1).to({y:236.8},0).wait(1).to({y:249.1},0).wait(1).to({y:260.6},0).wait(1).to({y:271.5},0).wait(1).to({y:281.6},0).wait(1).to({y:291.1},0).wait(1).to({y:300},0).wait(1).to({y:308.4},0).wait(1).to({y:316.2},0).wait(1).to({y:323.6},0).wait(1).to({y:330.4},0).wait(1).to({y:336.8},0).wait(1).to({y:342.8},0).wait(1).to({y:348.4},0).wait(1).to({y:353.6},0).wait(1).to({y:358.4},0).wait(1).to({y:362.9},0).wait(1).to({y:367.1},0).wait(1).to({y:370.9},0).wait(1).to({y:374.5},0).wait(1).to({y:377.8},0).wait(1).to({y:380.9},0).wait(1).to({y:383.7},0).wait(1).to({y:386.3},0).wait(1).to({y:388.7},0).wait(1).to({y:390.8},0).wait(1).to({y:392.8},0).wait(1).to({y:394.6},0).wait(1).to({y:396.2},0).wait(1).to({y:397.7},0).wait(1).to({y:399},0).wait(1).to({y:400.2},0).wait(1).to({y:401.3},0).wait(1).to({y:402.2},0).wait(1).to({y:403.1},0).wait(1).to({y:403.8},0).wait(1).to({y:404.4},0).wait(1).to({y:405},0).wait(1).to({y:405.4},0).wait(1).to({y:405.8},0).wait(1).to({y:406.2},0).wait(1).to({y:406.5},0).wait(1).to({y:406.7},0).wait(1).to({y:406.8},0).wait(1).to({y:407},0).wait(1).to({y:407.1},0).wait(1).to({y:407.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(179));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(447).to({_off:false},0).wait(101).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:407.5},0).wait(1).to({y:407.8,alpha:0.999},0).wait(1).to({y:408.2},0).wait(1).to({y:408.7,alpha:0.998},0).wait(1).to({y:409.4},0).wait(1).to({y:410.2,alpha:0.997},0).wait(1).to({y:411.1,alpha:0.996},0).wait(1).to({y:412.2,alpha:0.995},0).wait(1).to({y:413.4,alpha:0.994},0).wait(1).to({y:414.7,alpha:0.992},0).wait(1).to({y:416.2,alpha:0.991},0).wait(1).to({y:417.9,alpha:0.989},0).wait(1).to({y:419.7,alpha:0.987},0).wait(1).to({y:421.6,alpha:0.985},0).wait(1).to({y:423.7,alpha:0.983},0).wait(1).to({y:426,alpha:0.981},0).wait(1).to({y:428.5,alpha:0.978},0).wait(1).to({y:431.1,alpha:0.975},0).wait(1).to({y:433.9,alpha:0.972},0).wait(1).to({y:436.9,alpha:0.969},0).wait(1).to({y:440.1,alpha:0.966},0).wait(1).to({y:443.5,alpha:0.962},0).wait(1).to({y:447.1,alpha:0.959},0).wait(1).to({y:450.9,alpha:0.955},0).wait(1).to({y:455,alpha:0.951},0).wait(1).to({y:459.2,alpha:0.946},0).wait(1).to({y:463.7,alpha:0.942},0).wait(1).to({y:468.5,alpha:0.937},0).wait(1).to({y:473.5,alpha:0.931},0).wait(1).to({y:478.8,alpha:0.926},0).wait(1).to({y:484.3,alpha:0.92},0).wait(1).to({y:490.1,alpha:0.914},0).wait(1).to({y:496.3,alpha:0.908},0).wait(1).to({y:502.7,alpha:0.901},0).wait(1).to({y:509.5,alpha:0.894},0).wait(1).to({y:516.6,alpha:0.887},0).wait(1).to({y:524.1,alpha:0.879},0).wait(1).to({y:531.9,alpha:0.871},0).wait(1).to({y:540.2,alpha:0.862},0).wait(1).to({y:548.9,alpha:0.853},0).wait(1).to({y:558,alpha:0.844},0).wait(1).to({y:567.6,alpha:0.834},0).wait(1).to({y:577.7,alpha:0.824},0).wait(1).to({y:588.3,alpha:0.813},0).wait(1).to({y:599.5,alpha:0.801},0).wait(1).to({y:611.3,alpha:0.789},0).wait(1).to({y:623.8,alpha:0.776},0).wait(1).to({y:637,alpha:0.762},0).wait(1).to({y:650.9,alpha:0.748},0).wait(1).to({y:665.7,alpha:0.733},0).wait(1).to({y:681.4,alpha:0.716},0).wait(1).to({y:698.1,alpha:0.699},0).wait(1).to({y:715.9,alpha:0.681},0).wait(1).to({y:734.9,alpha:0.661},0).wait(1).to({y:755.4,alpha:0.64},0).wait(1).to({y:777.5,alpha:0.617},0).wait(1).to({y:801.4,alpha:0.592},0).wait(1).to({y:827.4,alpha:0.565},0).wait(1).to({y:856.1,alpha:0.535},0).wait(1).to({y:887.9,alpha:0.503},0).wait(1).to({y:923.7,alpha:0.465},0).wait(1).to({y:964.7,alpha:0.423},0).wait(1).to({y:1013.2,alpha:0.373},0).wait(1).to({y:1073.2,alpha:0.311},0).wait(1).to({y:1155.5,alpha:0.226},0).wait(1).to({y:1373.4,alpha:0},0).to({_off:true},1).wait(10));

	// bg
	this.instance_41 = new lib.元件2();
	this.instance_41.setTransform(-118.5,-8,1,1,0,0,0,77,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(626));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.p0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 11
	this.instance = new lib.元件6();
	this.instance.setTransform(195.3,63.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(libP0 = libP0||{}, imagesP0 = imagesP0||{}, createjs = createjs||{}, ss = ss||{});
var libP0, imagesP0, createjs, ss;
