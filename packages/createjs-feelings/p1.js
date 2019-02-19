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
		{src:"images/p1/a44.jpg", id:"a44"},
		{src:"images/p1/starBg2.jpg", id:"starBg2"},
		{src:"sounds/p1Wave0.mp3", id:"p1Wave0"},
		{src:"sounds/p1Wave1.mp3", id:"p1Wave1"}
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



(lib.a31 = function() {
	this.spriteSheet = ss["p1_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.a311 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.a312 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.a313 = function() {
	this.spriteSheet = ss["p1_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.a314 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.a44 = function() {
	this.initialize(img.a44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,960);


(lib.b0000 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.b0001 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.b0002 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.b0003 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.b0004 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.b0005 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.b0006 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.b0007 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.b0008 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.b0009 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.b0010 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.b0011 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.b0012 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.b0013 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.b0014 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.b0015 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.b0016 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.b0017 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.b0018 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.b0019 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.b0020 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.b0021 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.b0022 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.b0023 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.b0024 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.b0025 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.b0026 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.b0027 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.b0028 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.b0029 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.b0030 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.b0031 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.b0032 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.b0033 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.b0034 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.b0035 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.b0036 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.b0037 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.b0038 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.b0039 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.b0040 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.b0041 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.b0042 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.b0043 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.b0044 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.b0045 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.b0046 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.b0047 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.b0048 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.b0049 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.b0050 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.b0051 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.b0052 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.b0053 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.b0054 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.b0055 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.b0056 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.b0057 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.b0058 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.b0059 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.b0060 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.b0061 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.b0062 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.b0063 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.c2_0000_图层20 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.c2_0001_图层21 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.c2_0002_图层22 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.c2_0003_图层23 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.c3_0000_图层3 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.c3_0001_图层4 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.c3_0002_图层5 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.c3_0003_图层6 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.c4_0000_图层3 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.c4_0001_图层4 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.c4_0002_图层5 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.s1_0000 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.s1_0002 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.s1_0004 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.s1_0006 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.s1_0008 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.s1_0010 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.s1_0012 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.s1_0014 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.s1_0016 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.s1_0018 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.s1_0020 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.s1_0022 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.s1_0024 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.s1_0026 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.s1_0028 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.s1_0030 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.s2_0000 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.s2_0002 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.s2_0004 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.s2_0006 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.s2_0008 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.s2_0010 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.s2_0012 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.s2_0014 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.s2_0016 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.s2_0018 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.s2_0020 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.s2_0022 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.s2_0024 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.s2_0026 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.s2_0028 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.s2_0030 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.s3_0000 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.s3_0002 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.s3_0004 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.s3_0006 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.s3_0008 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.s3_0010 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.s3_0012 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.s3_0014 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.s3_0016 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.s3_0018 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.s3_0020 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.s3_0022 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.s3_0024 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.s3_0026 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.s3_0028 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.s3_0030 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.starBg2 = function() {
	this.initialize(img.starBg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,960);


(lib.z2 = function() {
	this.spriteSheet = ss["p1_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.z3 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.z4 = function() {
	this.spriteSheet = ss["p1_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.z6 = function() {
	this.spriteSheet = ss["p1_atlas_P_2"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.补间88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.starBg2();
	this.instance.setTransform(-400,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-480,800,960);


(lib.补间87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.starBg2();
	this.instance.setTransform(-400,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-480,800,960);


(lib.补间78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z6();
	this.instance.setTransform(-5.9,-12.4,0.219,0.219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-12.4,11.8,24.9);


(lib.补间76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z6();
	this.instance.setTransform(-5.9,-12.4,0.219,0.219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-12.4,11.8,24.9);


(lib.补间74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z6();
	this.instance.setTransform(-5.9,-12.4,0.219,0.219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-12.4,11.8,24.9);


(lib.补间72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z6();
	this.instance.setTransform(-5.9,-12.4,0.219,0.219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-12.4,11.8,24.9);


(lib.补间70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z6();
	this.instance.setTransform(-5.9,-12.4,0.219,0.219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-12.4,11.8,24.9);


(lib.补间68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z6();
	this.instance.setTransform(-5.9,-12.4,0.219,0.219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-12.4,11.8,24.9);


(lib.补间66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z6();
	this.instance.setTransform(-5.9,-12.4,0.219,0.219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-12.4,11.8,24.9);


(lib.补间64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z3();
	this.instance.setTransform(-16.9,-35.7,0.628,0.628);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-35.7,33.9,71.6);


(lib.补间63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z3();
	this.instance.setTransform(-16.9,-35.7,0.628,0.628);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-35.7,33.9,71.6);


(lib.补间62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z3();
	this.instance.setTransform(-16.9,-35.7,0.628,0.628);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-35.7,33.9,71.6);


(lib.补间53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z2();
	this.instance.setTransform(-400,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-480,800,960);


(lib.补间43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c4_0000_图层3();
	this.instance.setTransform(-10.5,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-96.5,25,204);


(lib.补间42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c4_0000_图层3();
	this.instance.setTransform(-10.5,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-96.5,25,204);


(lib.补间41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c4_0001_图层4();
	this.instance.setTransform(-11,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-127,26,278);


(lib.补间40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c4_0001_图层4();
	this.instance.setTransform(-11,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-127,26,278);


(lib.补间39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c4_0002_图层5();
	this.instance.setTransform(-11,-155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-155.5,26,349);


(lib.补间38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c4_0002_图层5();
	this.instance.setTransform(-11,-155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-155.5,26,349);


(lib.补间37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c3_0003_图层6();
	this.instance.setTransform(-10.5,-179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-179.5,25,385);


(lib.补间36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c3_0003_图层6();
	this.instance.setTransform(-10.5,-179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-179.5,25,385);


(lib.补间35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c3_0002_图层5();
	this.instance.setTransform(-18.5,-138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-138.5,26,277);


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


(lib.补间24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c3_0002_图层5();
	this.instance.setTransform(-18.5,-138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-138.5,26,277);


(lib.补间23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c3_0001_图层4();
	this.instance.setTransform(-11,-167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-167,26,313);


(lib.补间22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c3_0001_图层4();
	this.instance.setTransform(-11,-167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-167,26,313);


(lib.补间21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c3_0000_图层3();
	this.instance.setTransform(-10,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-210,25,385);


(lib.补间14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a44();
	this.instance.setTransform(-400,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-480,800,960);


(lib.补间13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z2();
	this.instance.setTransform(-400,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-480,800,960);


(lib.补间12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c3_0000_图层3();
	this.instance.setTransform(-10,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-210,25,385);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c2_0000_图层20();
	this.instance.setTransform(-10,-176.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-176.5,25,386);


(lib.补间10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c2_0000_图层20();
	this.instance.setTransform(-10,-176.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-176.5,25,386);


(lib.补间9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c2_0001_图层21();
	this.instance.setTransform(-10.5,-178.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-178.5,26,314);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c2_0001_图层21();
	this.instance.setTransform(-10.5,-178.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-178.5,26,314);


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c2_0002_图层22();
	this.instance.setTransform(-10.5,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-106,25,240);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c2_0002_图层22();
	this.instance.setTransform(-10.5,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-106,25,240);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c2_0003_图层23();
	this.instance.setTransform(-10,-150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-150.5,25,312);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.c2_0003_图层23();
	this.instance.setTransform(-10,-150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-150.5,25,312);


(lib.元件22 = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(0,0,800,960);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.s3_0000();

	this.instance_1 = new lib.s3_0002();

	this.instance_2 = new lib.s3_0004();

	this.instance_3 = new lib.s3_0006();

	this.instance_4 = new lib.s3_0008();

	this.instance_5 = new lib.s3_0010();

	this.instance_6 = new lib.s3_0012();

	this.instance_7 = new lib.s3_0014();

	this.instance_8 = new lib.s3_0016();

	this.instance_9 = new lib.s3_0018();

	this.instance_10 = new lib.s3_0020();

	this.instance_11 = new lib.s3_0022();

	this.instance_12 = new lib.s3_0024();

	this.instance_13 = new lib.s3_0026();

	this.instance_14 = new lib.s3_0028();

	this.instance_15 = new lib.s3_0030();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,30);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s2_0000();
	this.instance.setTransform(2,-5.7);

	this.instance_1 = new lib.s2_0002();
	this.instance_1.setTransform(2,-5.7);

	this.instance_2 = new lib.s2_0004();
	this.instance_2.setTransform(2,-5.7);

	this.instance_3 = new lib.s2_0006();
	this.instance_3.setTransform(2,-5.7);

	this.instance_4 = new lib.s2_0008();
	this.instance_4.setTransform(2,-5.7);

	this.instance_5 = new lib.s2_0010();
	this.instance_5.setTransform(2,-5.7);

	this.instance_6 = new lib.s2_0012();
	this.instance_6.setTransform(2,-5.7);

	this.instance_7 = new lib.s2_0014();
	this.instance_7.setTransform(2,-5.7);

	this.instance_8 = new lib.s2_0016();
	this.instance_8.setTransform(2,-5.7);

	this.instance_9 = new lib.s2_0018();
	this.instance_9.setTransform(2,-5.7);

	this.instance_10 = new lib.s2_0020();
	this.instance_10.setTransform(2,-5.7);

	this.instance_11 = new lib.s2_0022();
	this.instance_11.setTransform(2,-5.7);

	this.instance_12 = new lib.s2_0024();
	this.instance_12.setTransform(2,-5.7);

	this.instance_13 = new lib.s2_0026();
	this.instance_13.setTransform(2,-5.7);

	this.instance_14 = new lib.s2_0028();
	this.instance_14.setTransform(2,-5.7);

	this.instance_15 = new lib.s2_0030();
	this.instance_15.setTransform(2,-5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-5.7,80,50);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z4();
	this.instance.setTransform(0,131.4,1,0.826);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,131.4,800,792.9);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1_0000();

	this.instance_1 = new lib.s1_0002();

	this.instance_2 = new lib.s1_0004();

	this.instance_3 = new lib.s1_0006();

	this.instance_4 = new lib.s1_0008();

	this.instance_5 = new lib.s1_0010();

	this.instance_6 = new lib.s1_0012();

	this.instance_7 = new lib.s1_0014();

	this.instance_8 = new lib.s1_0016();

	this.instance_9 = new lib.s1_0018();

	this.instance_10 = new lib.s1_0020();

	this.instance_11 = new lib.s1_0022();

	this.instance_12 = new lib.s1_0024();

	this.instance_13 = new lib.s1_0026();

	this.instance_14 = new lib.s1_0028();

	this.instance_15 = new lib.s1_0030();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,180);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_GET_TO_ADD_MC,
			{id:'0',manId:1,parent:this,mcType:'man2',x:67,y:12}
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
			{id:'1',manId:0,parent:this,mcType:'man'}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.6,5.6,60,100);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.b0000();

	this.instance_1 = new lib.b0001();

	this.instance_2 = new lib.b0002();

	this.instance_3 = new lib.b0003();

	this.instance_4 = new lib.b0004();

	this.instance_5 = new lib.b0005();

	this.instance_6 = new lib.b0006();

	this.instance_7 = new lib.b0007();

	this.instance_8 = new lib.b0008();

	this.instance_9 = new lib.b0009();

	this.instance_10 = new lib.b0010();

	this.instance_11 = new lib.b0011();

	this.instance_12 = new lib.b0012();

	this.instance_13 = new lib.b0013();

	this.instance_14 = new lib.b0014();

	this.instance_15 = new lib.b0015();

	this.instance_16 = new lib.b0016();

	this.instance_17 = new lib.b0017();

	this.instance_18 = new lib.b0018();

	this.instance_19 = new lib.b0019();

	this.instance_20 = new lib.b0020();

	this.instance_21 = new lib.b0021();

	this.instance_22 = new lib.b0022();

	this.instance_23 = new lib.b0023();

	this.instance_24 = new lib.b0024();

	this.instance_25 = new lib.b0025();

	this.instance_26 = new lib.b0026();

	this.instance_27 = new lib.b0027();

	this.instance_28 = new lib.b0028();

	this.instance_29 = new lib.b0029();

	this.instance_30 = new lib.b0030();

	this.instance_31 = new lib.b0031();

	this.instance_32 = new lib.b0032();

	this.instance_33 = new lib.b0033();

	this.instance_34 = new lib.b0034();

	this.instance_35 = new lib.b0035();

	this.instance_36 = new lib.b0036();

	this.instance_37 = new lib.b0037();

	this.instance_38 = new lib.b0038();

	this.instance_39 = new lib.b0039();

	this.instance_40 = new lib.b0040();

	this.instance_41 = new lib.b0041();

	this.instance_42 = new lib.b0042();

	this.instance_43 = new lib.b0043();

	this.instance_44 = new lib.b0044();

	this.instance_45 = new lib.b0045();

	this.instance_46 = new lib.b0046();

	this.instance_47 = new lib.b0047();

	this.instance_48 = new lib.b0048();

	this.instance_49 = new lib.b0049();

	this.instance_50 = new lib.b0050();

	this.instance_51 = new lib.b0051();

	this.instance_52 = new lib.b0052();

	this.instance_53 = new lib.b0053();

	this.instance_54 = new lib.b0054();

	this.instance_55 = new lib.b0055();

	this.instance_56 = new lib.b0056();

	this.instance_57 = new lib.b0057();

	this.instance_58 = new lib.b0058();

	this.instance_59 = new lib.b0059();

	this.instance_60 = new lib.b0060();

	this.instance_61 = new lib.b0061();

	this.instance_62 = new lib.b0062();

	this.instance_63 = new lib.b0063();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_33}]},2).to({state:[{t:this.instance_34}]},2).to({state:[{t:this.instance_35}]},2).to({state:[{t:this.instance_36}]},2).to({state:[{t:this.instance_37}]},2).to({state:[{t:this.instance_38}]},2).to({state:[{t:this.instance_39}]},2).to({state:[{t:this.instance_40}]},2).to({state:[{t:this.instance_41}]},2).to({state:[{t:this.instance_42}]},2).to({state:[{t:this.instance_43}]},2).to({state:[{t:this.instance_44}]},2).to({state:[{t:this.instance_45}]},2).to({state:[{t:this.instance_46}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_48}]},2).to({state:[{t:this.instance_49}]},2).to({state:[{t:this.instance_50}]},2).to({state:[{t:this.instance_51}]},2).to({state:[{t:this.instance_52}]},2).to({state:[{t:this.instance_53}]},2).to({state:[{t:this.instance_54}]},2).to({state:[{t:this.instance_55}]},2).to({state:[{t:this.instance_56}]},2).to({state:[{t:this.instance_57}]},2).to({state:[{t:this.instance_58}]},2).to({state:[{t:this.instance_59}]},2).to({state:[{t:this.instance_60}]},2).to({state:[{t:this.instance_61}]},2).to({state:[{t:this.instance_62}]},2).to({state:[{t:this.instance_63}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间62("synched",0);
	this.instance.setTransform(17,35.8);

	this.instance_1 = new lib.补间63("synched",0);
	this.instance_1.setTransform(17,24.8);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间64("synched",0);
	this.instance_2.setTransform(17,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:35.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:35.6},0).wait(1).to({y:35.5},0).wait(1).to({y:35.4},0).wait(1).to({y:35.2},0).wait(1).to({y:35.1},0).wait(1).to({y:34.9},0).wait(1).to({y:34.6},0).wait(1).to({y:34.4},0).wait(1).to({y:34.1},0).wait(1).to({y:33.8},0).wait(1).to({y:33.5},0).wait(1).to({y:33.1},0).wait(1).to({y:32.7},0).wait(1).to({y:32.3},0).wait(1).to({y:31.9},0).wait(1).to({y:31.4},0).wait(1).to({y:30.9},0).wait(1).to({y:30.4},0).wait(1).to({y:29.9},0).wait(1).to({y:29.4},0).wait(1).to({y:28.9},0).wait(1).to({y:28.4},0).wait(1).to({y:27.9},0).wait(1).to({y:27.5},0).wait(1).to({y:27.1},0).wait(1).to({y:26.7},0).wait(1).to({y:26.3},0).wait(1).to({y:26},0).wait(1).to({y:25.7},0).wait(1).to({y:25.4},0).wait(1).to({y:25.2},0).wait(1).to({y:25},0).wait(1).to({y:24.9},0).wait(1).to({y:24.8},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:24.9},0).wait(1).to({y:25},0).wait(1).to({y:25.1},0).wait(1).to({y:25.2},0).wait(1).to({y:25.4},0).wait(1).to({y:25.6},0).wait(1).to({y:25.8},0).wait(1).to({y:26},0).wait(1).to({y:26.3},0).wait(1).to({y:26.6},0).wait(1).to({y:26.9},0).wait(1).to({y:27.3},0).wait(1).to({y:27.6},0).wait(1).to({y:28},0).wait(1).to({y:28.4},0).wait(1).to({y:28.9},0).wait(1).to({y:29.3},0).wait(1).to({y:29.8},0).wait(1).to({y:30.3},0).wait(1).to({y:30.8},0).wait(1).to({y:31.3},0).wait(1).to({y:31.8},0).wait(1).to({y:32.2},0).wait(1).to({y:32.7},0).wait(1).to({y:33.1},0).wait(1).to({y:33.6},0).wait(1).to({y:33.9},0).wait(1).to({y:34.3},0).wait(1).to({y:34.6},0).wait(1).to({y:34.9},0).wait(1).to({y:35.1},0).wait(1).to({y:35.3},0).wait(1).to({y:35.5},0).wait(1).to({y:35.6},0).wait(1).to({y:35.7},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.9,71.6);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件21();
	this.instance.setTransform(332.9,297.3,1,1,0,0,0,30,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:297.4},0).wait(2).to({y:297.5},0).wait(1).to({y:297.6},0).wait(1).to({y:297.8},0).wait(1).to({y:297.9},0).wait(1).to({y:298.1},0).wait(1).to({y:298.3},0).wait(1).to({y:298.5},0).wait(1).to({y:298.7},0).wait(1).to({y:299},0).wait(1).to({y:299.3},0).wait(1).to({y:299.6},0).wait(1).to({y:299.9},0).wait(1).to({y:300.2},0).wait(1).to({y:300.6},0).wait(1).to({y:300.9},0).wait(1).to({y:301.3},0).wait(1).to({y:301.7},0).wait(1).to({y:302},0).wait(1).to({y:302.4},0).wait(1).to({y:302.7},0).wait(1).to({y:303.1},0).wait(1).to({y:303.4},0).wait(1).to({y:303.6},0).wait(1).to({y:303.9},0).wait(1).to({y:304.1},0).wait(1).to({y:304.3},0).wait(1).to({y:304.5},0).wait(1).to({y:304.7},0).wait(1).to({y:304.8},0).wait(1).to({y:304.9},0).wait(2).to({y:305},0).wait(4).to({y:304.9},0).wait(2).to({y:304.8},0).wait(1).to({y:304.7},0).wait(1).to({y:304.6},0).wait(1).to({y:304.5},0).wait(1).to({y:304.3},0).wait(1).to({y:304.1},0).wait(1).to({y:303.9},0).wait(1).to({y:303.7},0).wait(1).to({y:303.5},0).wait(1).to({y:303.2},0).wait(1).to({y:303},0).wait(1).to({y:302.7},0).wait(1).to({y:302.4},0).wait(1).to({y:302},0).wait(1).to({y:301.7},0).wait(1).to({y:301.4},0).wait(1).to({y:301},0).wait(1).to({y:300.7},0).wait(1).to({y:300.3},0).wait(1).to({y:300},0).wait(1).to({y:299.7},0).wait(1).to({y:299.4},0).wait(1).to({y:299.1},0).wait(1).to({y:298.8},0).wait(1).to({y:298.5},0).wait(1).to({y:298.3},0).wait(1).to({y:298.1},0).wait(1).to({y:297.9},0).wait(1).to({y:297.7},0).wait(1).to({y:297.6},0).wait(1).to({y:297.5},0).wait(1).to({y:297.4},0).wait(1).to({y:297.3},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(302.9,282.3,60,30);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件20();
	this.instance.setTransform(260.6,353.5,1,1,0,0,0,40,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:42,regY:19.3,x:262.6,y:347.8},0).wait(3).to({y:347.7},0).wait(3).to({y:347.6},0).wait(1).to({y:347.5},0).wait(2).to({y:347.4},0).wait(1).to({y:347.3},0).wait(1).to({y:347.2},0).wait(1).to({y:347},0).wait(1).to({y:346.9},0).wait(1).to({y:346.7},0).wait(1).to({y:346.6},0).wait(1).to({y:346.4},0).wait(1).to({y:346.2},0).wait(1).to({y:346},0).wait(1).to({y:345.9},0).wait(1).to({y:345.7},0).wait(1).to({y:345.5},0).wait(1).to({y:345.3},0).wait(1).to({y:345.2},0).wait(1).to({y:345},0).wait(1).to({y:344.9},0).wait(1).to({y:344.8},0).wait(1).to({y:344.7},0).wait(1).to({y:344.6},0).wait(1).to({y:344.5},0).wait(2).to({y:344.4},0).wait(2).to({y:344.3},0).wait(3).to({regX:40,regY:25,x:260.6,y:350},0).wait(1).to({regX:42,regY:19.3,x:262.6,y:344.3},0).wait(3).to({y:344.4},0).wait(3).to({y:344.5},0).wait(2).to({y:344.6},0).wait(1).to({y:344.7},0).wait(1).to({y:344.8},0).wait(1).to({y:344.9},0).wait(1).to({y:345},0).wait(1).to({y:345.1},0).wait(1).to({y:345.3},0).wait(1).to({y:345.4},0).wait(1).to({y:345.6},0).wait(1).to({y:345.7},0).wait(1).to({y:345.9},0).wait(1).to({y:346.1},0).wait(1).to({y:346.2},0).wait(1).to({y:346.4},0).wait(1).to({y:346.6},0).wait(1).to({y:346.7},0).wait(1).to({y:346.9},0).wait(1).to({y:347},0).wait(1).to({y:347.1},0).wait(1).to({y:347.3},0).wait(1).to({y:347.4},0).wait(1).to({y:347.5},0).wait(2).to({y:347.6},0).wait(1).to({y:347.7},0).wait(3).to({y:347.8},0).wait(3).to({regX:40,regY:25,x:260.6,y:353.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(222.6,322.8,80,50);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件11();
	this.instance.setTransform(260.6,353.5,1,1,0,0,0,100,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:353.6},0).wait(2).to({y:353.7},0).wait(1).to({y:353.8},0).wait(1).to({y:353.9},0).wait(1).to({y:354},0).wait(1).to({y:354.2},0).wait(1).to({y:354.3},0).wait(1).to({y:354.5},0).wait(1).to({y:354.7},0).wait(1).to({y:355},0).wait(1).to({y:355.2},0).wait(1).to({y:355.5},0).wait(1).to({y:355.8},0).wait(1).to({y:356.1},0).wait(1).to({y:356.5},0).wait(1).to({y:356.8},0).wait(1).to({y:357.2},0).wait(1).to({y:357.5},0).wait(1).to({y:357.8},0).wait(1).to({y:358.2},0).wait(1).to({y:358.5},0).wait(1).to({y:358.8},0).wait(1).to({y:359},0).wait(1).to({y:359.3},0).wait(1).to({y:359.5},0).wait(1).to({y:359.7},0).wait(1).to({y:359.9},0).wait(1).to({y:360},0).wait(1).to({y:360.1},0).wait(1).to({y:360.2},0).wait(1).to({y:360.3},0).wait(1).to({y:360.4},0).wait(5).to({y:360.3},0).wait(2).to({y:360.2},0).wait(1).to({y:360.1},0).wait(1).to({y:360},0).wait(1).to({y:359.9},0).wait(1).to({y:359.8},0).wait(1).to({y:359.6},0).wait(1).to({y:359.4},0).wait(1).to({y:359.2},0).wait(1).to({y:359},0).wait(1).to({y:358.8},0).wait(1).to({y:358.5},0).wait(1).to({y:358.2},0).wait(1).to({y:357.9},0).wait(1).to({y:357.6},0).wait(1).to({y:357.3},0).wait(1).to({y:356.9},0).wait(1).to({y:356.6},0).wait(1).to({y:356.3},0).wait(1).to({y:355.9},0).wait(1).to({y:355.6},0).wait(1).to({y:355.3},0).wait(1).to({y:355},0).wait(1).to({y:354.8},0).wait(1).to({y:354.5},0).wait(1).to({y:354.3},0).wait(1).to({y:354.2},0).wait(1).to({y:354},0).wait(1).to({y:353.9},0).wait(1).to({y:353.7},0).wait(2).to({y:353.6},0).wait(1).to({y:353.5},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160.6,263.5,200,180);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间27("synched",0);
	this.instance.setTransform(389.5,478);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,779,956);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.gotoAndPlay(700);
		this.stop();
		playSound("p1Wave0");
	}
	this.frame_118 = function() {
		//next
		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_PLAY_NEXT_PAGE,
			{id:'1',action:'nextFrame'}
		);
	}
	this.frame_206 = function() {
		playSound("p1Wave1");
	}
	this.frame_294 = function() {
		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_PLAY_NEXT_PAGE,
			{id:'1',action:'nextFrame'}
		);
	}
	this.frame_410 = function() {
		this.stop();
		Config.sendEvent(Config.eventDispatcher,Main.EVENT_PLAY_NEXT_PAGE,
			{id:'1',action:'nextPage'}
		);
	}
	this.frame_514 = function() {
		//next
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(118).call(this.frame_118).wait(88).call(this.frame_206).wait(88).call(this.frame_294).wait(116).call(this.frame_410).wait(104).call(this.frame_514).wait(1));

	// c4_0002_图层-5.png
	this.instance = new lib.补间38("synched",0);
	this.instance.setTransform(165.2,678.3,0.826,0.826);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.补间39("synched",0);
	this.instance_1.setTransform(165.2,659.1,0.826,0.826);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(376).to({_off:false},0).wait(1).to({regX:2,regY:19,x:166.9,y:690.9,alpha:0.157},0).wait(1).to({y:688.8,alpha:0.268},0).wait(1).to({y:687.2,alpha:0.355},0).wait(1).to({y:685.8,alpha:0.427},0).wait(1).to({y:684.6,alpha:0.489},0).wait(1).to({y:683.6,alpha:0.543},0).wait(1).to({y:682.6,alpha:0.59},0).wait(1).to({y:681.8,alpha:0.633},0).wait(1).to({y:681.1,alpha:0.671},0).wait(1).to({y:680.4,alpha:0.705},0).wait(1).to({y:679.8,alpha:0.736},0).wait(1).to({y:679.3,alpha:0.765},0).wait(1).to({y:678.8,alpha:0.791},0).wait(1).to({y:678.4,alpha:0.814},0).wait(1).to({y:677.9,alpha:0.836},0).wait(1).to({y:677.6,alpha:0.856},0).wait(1).to({y:677.2,alpha:0.874},0).wait(1).to({y:676.9,alpha:0.89},0).wait(1).to({y:676.6,alpha:0.905},0).wait(1).to({y:676.4,alpha:0.919},0).wait(1).to({y:676.1,alpha:0.931},0).wait(1).to({y:675.9,alpha:0.942},0).wait(1).to({y:675.7,alpha:0.952},0).wait(1).to({y:675.5,alpha:0.961},0).wait(1).to({y:675.4,alpha:0.969},0).wait(1).to({y:675.3,alpha:0.976},0).wait(1).to({y:675.2,alpha:0.982},0).wait(1).to({y:675.1,alpha:0.987},0).wait(1).to({y:675,alpha:0.991},0).wait(1).to({y:674.9,alpha:0.994},0).wait(1).to({alpha:0.997},0).wait(1).to({y:674.8,alpha:0.999},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(410).to({_off:false},0).wait(1).to({regX:2,regY:19,x:166.9,y:674.9,alpha:0.996},0).wait(1).to({y:675.1,alpha:0.983},0).wait(1).to({y:675.5,alpha:0.96},0).wait(1).to({y:676.1,alpha:0.926},0).wait(1).to({y:676.8,alpha:0.881},0).wait(1).to({y:677.8,alpha:0.823},0).wait(1).to({y:679,alpha:0.755},0).wait(1).to({y:680.4,alpha:0.675},0).wait(1).to({y:681.9,alpha:0.586},0).wait(1).to({y:683.5,alpha:0.492},0).wait(1).to({y:685.1,alpha:0.398},0).wait(1).to({y:686.7,alpha:0.307},0).wait(1).to({y:688.1,alpha:0.225},0).wait(1).to({y:689.3,alpha:0.154},0).wait(1).to({y:690.3,alpha:0.096},0).wait(1).to({y:691,alpha:0.053},0).wait(1).to({y:691.6,alpha:0.023},0).wait(1).to({y:691.9,alpha:0.006},0).wait(1).to({regX:0,regY:0,x:165.2,y:676.3,alpha:0},0).to({_off:true},1).wait(85));

	// c4_0001_图层-4.png
	this.instance_2 = new lib.补间40("synched",0);
	this.instance_2.setTransform(203.5,654.7,0.826,0.826);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.补间41("synched",0);
	this.instance_3.setTransform(203.5,635.6,0.826,0.826);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(366).to({_off:false},0).wait(1).to({regX:2,regY:12,x:205.1,y:661.6,alpha:0.157},0).wait(1).to({y:659.5,alpha:0.268},0).wait(1).to({y:657.8,alpha:0.355},0).wait(1).to({y:656.4,alpha:0.427},0).wait(1).to({y:655.2,alpha:0.489},0).wait(1).to({y:654.2,alpha:0.543},0).wait(1).to({y:653.3,alpha:0.59},0).wait(1).to({y:652.5,alpha:0.633},0).wait(1).to({y:651.8,alpha:0.671},0).wait(1).to({y:651.1,alpha:0.705},0).wait(1).to({y:650.5,alpha:0.736},0).wait(1).to({y:650,alpha:0.765},0).wait(1).to({y:649.5,alpha:0.791},0).wait(1).to({y:649,alpha:0.814},0).wait(1).to({y:648.6,alpha:0.836},0).wait(1).to({y:648.2,alpha:0.856},0).wait(1).to({y:647.9,alpha:0.874},0).wait(1).to({y:647.6,alpha:0.89},0).wait(1).to({y:647.3,alpha:0.905},0).wait(1).to({y:647,alpha:0.919},0).wait(1).to({y:646.8,alpha:0.931},0).wait(1).to({y:646.6,alpha:0.942},0).wait(1).to({y:646.4,alpha:0.952},0).wait(1).to({y:646.2,alpha:0.961},0).wait(1).to({y:646,alpha:0.969},0).wait(1).to({y:645.9,alpha:0.976},0).wait(1).to({y:645.8,alpha:0.982},0).wait(1).to({y:645.7,alpha:0.987},0).wait(1).to({y:645.6,alpha:0.991},0).wait(1).to({alpha:0.994},0).wait(1).to({y:645.5,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(400).to({_off:false},0).wait(15).to({startPosition:0},0).wait(1).to({regX:2,regY:12,x:205.1,y:645.5,alpha:0.996},0).wait(1).to({y:645.7,alpha:0.983},0).wait(1).to({y:646.1,alpha:0.96},0).wait(1).to({y:646.7,alpha:0.926},0).wait(1).to({y:647.5,alpha:0.881},0).wait(1).to({y:648.5,alpha:0.823},0).wait(1).to({y:649.7,alpha:0.755},0).wait(1).to({y:651,alpha:0.675},0).wait(1).to({y:652.5,alpha:0.586},0).wait(1).to({y:654.2,alpha:0.492},0).wait(1).to({y:655.8,alpha:0.398},0).wait(1).to({y:657.3,alpha:0.307},0).wait(1).to({y:658.7,alpha:0.225},0).wait(1).to({y:660,alpha:0.154},0).wait(1).to({y:660.9,alpha:0.096},0).wait(1).to({y:661.7,alpha:0.053},0).wait(1).to({y:662.2,alpha:0.023},0).wait(1).to({y:662.5,alpha:0.006},0).wait(1).to({regX:0,regY:0,x:203.5,y:652.7,alpha:0},0).to({_off:true},1).wait(80));

	// c4_0000_图层-3.png
	this.instance_4 = new lib.补间42("synched",0);
	this.instance_4.setTransform(242.2,629.5,0.826,0.826);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.补间43("synched",0);
	this.instance_5.setTransform(242.2,610.4,0.826,0.826);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(356).to({_off:false},0).wait(1).to({regX:2,regY:5.5,x:243.8,y:631,alpha:0.157},0).wait(1).to({y:628.9,alpha:0.268},0).wait(1).to({y:627.3,alpha:0.355},0).wait(1).to({y:625.9,alpha:0.427},0).wait(1).to({y:624.7,alpha:0.489},0).wait(1).to({y:623.7,alpha:0.543},0).wait(1).to({y:622.7,alpha:0.59},0).wait(1).to({y:621.9,alpha:0.633},0).wait(1).to({y:621.2,alpha:0.671},0).wait(1).to({y:620.5,alpha:0.705},0).wait(1).to({y:619.9,alpha:0.736},0).wait(1).to({y:619.4,alpha:0.765},0).wait(1).to({y:618.9,alpha:0.791},0).wait(1).to({y:618.5,alpha:0.814},0).wait(1).to({y:618,alpha:0.836},0).wait(1).to({y:617.7,alpha:0.856},0).wait(1).to({y:617.3,alpha:0.874},0).wait(1).to({y:617,alpha:0.89},0).wait(1).to({y:616.7,alpha:0.905},0).wait(1).to({y:616.5,alpha:0.919},0).wait(1).to({y:616.2,alpha:0.931},0).wait(1).to({y:616,alpha:0.942},0).wait(1).to({y:615.8,alpha:0.952},0).wait(1).to({y:615.6,alpha:0.961},0).wait(1).to({y:615.5,alpha:0.969},0).wait(1).to({y:615.4,alpha:0.976},0).wait(1).to({y:615.3,alpha:0.982},0).wait(1).to({y:615.2,alpha:0.987},0).wait(1).to({y:615.1,alpha:0.991},0).wait(1).to({y:615,alpha:0.994},0).wait(1).to({alpha:0.997},0).wait(1).to({y:614.9,alpha:0.999},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(390).to({_off:false},0).wait(29).to({startPosition:0},0).wait(1).to({regX:2,regY:5.5,x:243.8,y:615,alpha:0.996},0).wait(1).to({y:615.2,alpha:0.983},0).wait(1).to({y:615.6,alpha:0.96},0).wait(1).to({y:616.2,alpha:0.926},0).wait(1).to({y:616.9,alpha:0.881},0).wait(1).to({y:617.9,alpha:0.823},0).wait(1).to({y:619.1,alpha:0.755},0).wait(1).to({y:620.5,alpha:0.675},0).wait(1).to({y:622,alpha:0.586},0).wait(1).to({y:623.6,alpha:0.492},0).wait(1).to({y:625.2,alpha:0.398},0).wait(1).to({y:626.8,alpha:0.307},0).wait(1).to({y:628.2,alpha:0.225},0).wait(1).to({y:629.4,alpha:0.154},0).wait(1).to({y:630.4,alpha:0.096},0).wait(1).to({y:631.1,alpha:0.053},0).wait(1).to({y:631.7,alpha:0.023},0).wait(1).to({y:632,alpha:0.006},0).wait(1).to({regX:0,regY:0,x:242.2,y:627.5,alpha:0},0).to({_off:true},1).wait(76));

	// z4.png
	this.instance_6 = new lib.元件18();
	this.instance_6.setTransform(206.3,302.2,1.078,1.352,0,0,0,400,480);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(318).to({_off:false},0).to({alpha:0.289},8).to({alpha:1},20).wait(103).to({alpha:0},39).to({_off:true},1).wait(26));

	// man
	this.instance_7 = new lib.元件4();
	this.instance_7.setTransform(191.4,958.4,1,1,0,0,0,40,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,x:151.8,y:870.4},0).wait(1).to({x:152.2,y:834.8},0).wait(1).to({x:152.6,y:801.4},0).wait(1).to({x:152.9,y:770},0).wait(1).to({x:153.2,y:740.4},0).wait(1).to({x:153.6,y:712.3},0).wait(1).to({x:153.9,y:685.8},0).wait(1).to({x:154.1,y:660.6},0).wait(1).to({x:154.4,y:636.6},0).wait(1).to({x:154.7,y:613.8},0).wait(1).to({x:154.9,y:592.1},0).wait(1).to({x:155.1,y:571.4},0).wait(1).to({x:155.4,y:551.6},0).wait(1).to({x:155.6,y:532.7},0).wait(1).to({x:155.8,y:514.6},0).wait(1).to({x:156,y:497.3},0).wait(1).to({x:156.2,y:480.8},0).wait(1).to({x:156.3,y:464.9},0).wait(1).to({x:156.5,y:449.7},0).wait(1).to({x:156.7,y:435.2},0).wait(1).to({x:156.8,y:421.2},0).wait(1).to({x:157,y:407.8},0).wait(1).to({x:157.1,y:395},0).wait(1).to({x:157.3,y:382.6},0).wait(1).to({x:157.4,y:370.8},0).wait(1).to({x:157.5,y:359.4},0).wait(1).to({x:157.7,y:348.5},0).wait(1).to({x:157.8,y:338},0).wait(1).to({x:157.9,y:327.9},0).wait(1).to({x:158,y:318.2},0).wait(1).to({x:158.1,y:308.9},0).wait(1).to({x:158.2,y:300},0).wait(1).to({x:158.3,y:291.5},0).wait(1).to({x:158.4,y:283.2},0).wait(1).to({x:158.5,y:275.3},0).wait(1).to({x:158.6,y:267.8},0).wait(1).to({y:260.5},0).wait(1).to({x:158.7,y:253.5},0).wait(1).to({x:158.8,y:246.8},0).wait(1).to({x:158.9,y:240.4},0).wait(1).to({y:234.3},0).wait(1).to({x:159,y:228.4},0).wait(1).to({x:159.1,y:222.8},0).wait(1).to({y:217.4},0).wait(1).to({x:159.2,y:212.2},0).wait(1).to({y:207.3},0).wait(1).to({x:159.3,y:202.6},0).wait(1).to({x:159.4,y:198.1},0).wait(1).to({y:193.8},0).wait(1).to({y:189.7},0).wait(1).to({x:159.5,y:185.8},0).wait(1).to({y:182.1},0).wait(1).to({x:159.6,y:178.6},0).wait(1).to({y:175.2},0).wait(1).to({y:172},0).wait(1).to({x:159.7,y:169},0).wait(1).to({y:166.2},0).wait(1).to({y:163.5},0).wait(1).to({x:159.8,y:161},0).wait(1).to({y:158.6},0).wait(1).to({y:156.4},0).wait(1).to({y:154.3},0).wait(1).to({x:159.9,y:152.3},0).wait(1).to({y:150.5},0).wait(1).to({y:148.8},0).wait(1).to({y:147.2},0).wait(1).to({y:145.7},0).wait(1).to({x:160,y:144.4},0).wait(1).to({y:143.2},0).wait(1).to({y:142},0).wait(1).to({y:141},0).wait(1).to({y:140.1},0).wait(1).to({y:139.3},0).wait(1).to({y:138.6},0).wait(1).to({y:138},0).wait(1).to({y:137.5},0).wait(1).to({y:137},0).wait(1).to({y:136.7},0).wait(1).to({y:136.4},0).wait(1).to({y:136.2},0).wait(1).to({y:136.1},0).wait(1).to({regX:40,regY:50,x:200.1,y:186.1},0).wait(37).to({regX:0,regY:0,x:160,y:136.1},0).wait(3).to({rotation:0.1,x:159.9},0).wait(1).to({y:136},0).wait(1).to({x:159.8},0).wait(1).to({rotation:0.2,x:159.7},0).wait(1).to({x:159.6},0).wait(1).to({rotation:0.3,x:159.4,y:135.9},0).wait(1).to({rotation:0.4,x:159.3},0).wait(1).to({rotation:0.5,x:159.1,y:135.8},0).wait(1).to({rotation:0.6,x:158.9},0).wait(1).to({rotation:0.7,x:158.7,y:135.7},0).wait(1).to({rotation:0.8,x:158.5},0).wait(1).to({rotation:0.9,x:158.3,y:135.6},0).wait(1).to({rotation:1,x:158,y:135.5},0).wait(1).to({rotation:1.1,x:157.7},0).wait(1).to({rotation:1.3,x:157.5,y:135.4},0).wait(1).to({rotation:1.4,x:157.1,y:135.3},0).wait(1).to({rotation:1.6,x:156.8,y:135.2},0).wait(1).to({rotation:1.8,x:156.5,y:135.1},0).wait(1).to({rotation:1.9,x:156.1,y:135},0).wait(1).to({rotation:2.1,x:155.7,y:134.9},0).wait(1).to({rotation:2.3,x:155.3,y:134.8},0).wait(1).to({rotation:2.5,x:154.9,y:134.7},0).wait(1).to({rotation:2.8,x:154.5,y:134.6},0).wait(1).to({rotation:3,x:154,y:134.4},0).wait(1).to({rotation:3.2,x:153.6,y:134.3},0).wait(1).to({rotation:3.5,x:153.1,y:134.2},0).wait(1).to({rotation:3.7,x:152.6,y:134.1},0).wait(1).to({rotation:4,x:152,y:133.9},0).wait(1).to({rotation:4.2,x:151.5,y:133.8},0).wait(1).to({rotation:4.5,x:150.9,y:133.6},0).wait(1).to({rotation:4.8,x:150.4,y:133.5},0).wait(1).to({rotation:5.1,x:149.8,y:133.4},0).wait(1).to({rotation:5.4,x:149.2,y:133.2},0).wait(1).to({rotation:5.7,x:148.5,y:133},0).wait(1).to({rotation:6.1,x:147.9,y:132.9},0).wait(1).to({rotation:6.4,x:147.3,y:132.7},0).wait(1).to({rotation:6.7,x:146.6,y:132.6},0).wait(1).to({rotation:7.1,x:145.9,y:132.4},0).wait(1).to({rotation:7.4,x:145.2,y:132.3},0).wait(1).to({rotation:7.8,x:144.5,y:132.1},0).wait(1).to({rotation:8.1,x:143.8,y:131.9},0).wait(1).to({rotation:8.5,x:143.1,y:131.8},0).wait(1).to({rotation:8.9,x:142.4,y:131.6},0).wait(1).to({rotation:9.2,x:141.7,y:131.4},0).wait(1).to({rotation:9.6,x:140.9,y:131.3},0).wait(1).to({rotation:10,x:140.2,y:131.1},0).wait(1).to({rotation:10.4,x:139.4,y:131},0).wait(1).to({rotation:10.8,x:138.7,y:130.8},0).wait(1).to({rotation:11.2,x:138,y:130.6},0).wait(1).to({rotation:11.6,x:137.2,y:130.5},0).wait(1).to({rotation:11.9,x:136.5,y:130.3},0).wait(1).to({rotation:12.3,x:135.7,y:130.2},0).wait(1).to({rotation:12.7,x:135,y:130.1},0).wait(1).to({rotation:13.1,x:134.3,y:129.9},0).wait(1).to({rotation:13.5,x:133.5,y:129.8},0).wait(1).to({rotation:13.8,x:132.8,y:129.7},0).wait(1).to({rotation:14.2,x:132.1,y:129.5},0).wait(1).to({rotation:14.6,x:131.4,y:129.4},0).wait(1).to({rotation:15,x:130.7,y:129.3},0).wait(1).to({rotation:15.3,x:130.1,y:129.2},0).wait(1).to({rotation:15.7,x:129.4,y:129},0).wait(1).to({rotation:16,x:128.8,y:128.9},0).wait(1).to({rotation:16.3,x:128.1,y:128.8},0).wait(1).to({rotation:16.7,x:127.5,y:128.7},0).wait(1).to({rotation:17,x:126.9,y:128.6},0).wait(1).to({rotation:17.3,x:126.3},0).wait(1).to({rotation:17.6,x:125.8,y:128.5},0).wait(1).to({rotation:17.9,x:125.2,y:128.4},0).wait(1).to({rotation:18.2,x:124.7,y:128.3},0).wait(1).to({rotation:18.4,x:124.2,y:128.2},0).wait(1).to({rotation:18.7,x:123.7},0).wait(1).to({rotation:19,x:123.2,y:128.1},0).wait(1).to({rotation:19.2,x:122.8,y:128},0).wait(1).to({rotation:19.4,x:122.4},0).wait(1).to({rotation:19.6,x:121.9,y:127.9},0).wait(1).to({rotation:19.9,x:121.6},0).wait(1).to({rotation:20,x:121.2,y:127.8},0).wait(1).to({rotation:20.2,x:120.9},0).wait(1).to({rotation:20.4,x:120.5},0).wait(1).to({rotation:20.6,x:120.2,y:127.7},0).wait(1).to({rotation:20.7,x:119.9},0).wait(1).to({rotation:20.9,x:119.7},0).wait(1).to({rotation:21,x:119.4,y:127.6},0).wait(1).to({rotation:21.1,x:119.2},0).wait(1).to({rotation:21.2,x:119},0).wait(1).to({rotation:21.3,x:118.8},0).wait(1).to({rotation:21.4,x:118.7,y:127.5},0).wait(1).to({rotation:21.5,x:118.5},0).wait(1).to({x:118.4},0).wait(1).to({rotation:21.6,x:118.3},0).wait(1).to({x:118.2},0).wait(1).to({rotation:21.7},0).wait(1).to({x:118.1},0).wait(2).to({regX:40.1,regY:50,x:136.8,y:188.8},0).wait(99).to({regX:40,rotation:0,x:195.1,y:254.4},61).wait(50).to({x:198.8,y:334.4},88).wait(1));

	// 图层 32      复制 6
	this.instance_8 = new lib.补间66("synched",0);
	this.instance_8.setTransform(108.1,865.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(337).to({_off:false},0).wait(1).to({x:107.6,y:792.6,alpha:0.101},0).wait(1).to({x:107.3,y:735.1,alpha:0.181},0).wait(1).to({x:107,y:686.9,alpha:0.247},0).wait(1).to({x:106.8,y:645.3,alpha:0.305},0).wait(1).to({x:106.6,y:608.6,alpha:0.356},0).wait(1).to({x:106.4,y:575.8,alpha:0.402},0).wait(1).to({x:106.3,y:546.2,alpha:0.443},0).wait(1).to({x:106.1,y:519.2,alpha:0.48},0).wait(1).to({x:106,y:494.4,alpha:0.515},0).wait(1).to({x:105.8,y:471.6,alpha:0.546},0).wait(1).to({x:105.7,y:450.5,alpha:0.576},0).wait(1).to({x:105.6,y:430.8,alpha:0.603},0).wait(1).to({x:105.5,y:412.5,alpha:0.628},0).wait(1).to({x:105.4,y:395.4,alpha:0.652},0).wait(1).to({x:105.3,y:379.4,alpha:0.674},0).wait(1).to({x:105.2,y:364.4,alpha:0.695},0).wait(1).to({y:350.3,alpha:0.715},0).wait(1).to({x:105.1,y:337.1,alpha:0.733},0).wait(1).to({x:105,y:324.6,alpha:0.75},0).wait(1).to({x:104.9,y:312.8,alpha:0.767},0).wait(1).to({y:301.7,alpha:0.782},0).wait(1).to({x:104.8,y:291.3,alpha:0.797},0).wait(1).to({y:281.4,alpha:0.81},0).wait(1).to({x:104.7,y:272,alpha:0.823},0).wait(1).to({y:263.2,alpha:0.836},0).wait(1).to({x:104.6,y:254.9,alpha:0.847},0).wait(1).to({y:247,alpha:0.858},0).wait(1).to({x:104.5,y:239.5,alpha:0.868},0).wait(1).to({y:232.5,alpha:0.878},0).wait(1).to({y:225.9,alpha:0.887},0).wait(1).to({x:104.4,y:219.6,alpha:0.896},0).wait(1).to({y:213.7,alpha:0.904},0).wait(1).to({y:208.1,alpha:0.912},0).wait(1).to({x:104.3,y:202.9,alpha:0.919},0).wait(1).to({y:197.9,alpha:0.926},0).wait(1).to({y:193.3,alpha:0.933},0).wait(1).to({x:104.2,y:188.9,alpha:0.939},0).wait(1).to({y:184.8,alpha:0.944},0).wait(1).to({y:181,alpha:0.95},0).wait(1).to({y:177.4,alpha:0.955},0).wait(1).to({y:174,alpha:0.959},0).wait(1).to({x:104.1,y:170.9,alpha:0.964},0).wait(1).to({y:168,alpha:0.968},0).wait(1).to({y:165.3,alpha:0.972},0).wait(1).to({y:162.8,alpha:0.975},0).wait(1).to({y:160.5,alpha:0.978},0).wait(1).to({y:158.4,alpha:0.981},0).wait(1).to({y:156.4,alpha:0.984},0).wait(1).to({y:154.7,alpha:0.986},0).wait(1).to({x:104,y:153.1,alpha:0.989},0).wait(1).to({y:151.7,alpha:0.99},0).wait(1).to({y:150.4,alpha:0.992},0).wait(1).to({y:149.2,alpha:0.994},0).wait(1).to({y:148.3,alpha:0.995},0).wait(1).to({y:147.4,alpha:0.996},0).wait(1).to({y:146.7,alpha:0.997},0).wait(1).to({y:146.1,alpha:0.998},0).wait(1).to({y:145.6,alpha:0.999},0).wait(1).to({y:145.2},0).wait(1).to({y:145,alpha:1},0).wait(1).to({y:144.8},0).wait(1).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({y:144.6},0).wait(1).to({y:144},0).wait(1).to({y:143},0).wait(1).to({y:141.5},0).wait(1).to({y:139.6},0).wait(1).to({y:137.1},0).wait(1).to({y:134.3},0).wait(1).to({y:130.8},0).wait(1).to({y:126.9},0).wait(1).to({y:122.4},0).wait(1).to({y:117.4},0).wait(1).to({y:111.7},0).wait(1).to({y:105.5},0).wait(1).to({y:98.6},0).wait(1).to({y:91},0).wait(1).to({y:82.8},0).wait(1).to({y:73.9},0).wait(1).to({y:64.3},0).wait(1).to({y:54},0).wait(1).to({y:43},0).wait(1).to({y:31.2},0).wait(1).to({y:18.8},0).wait(1).to({y:5.5},0).wait(1).to({y:-8.4},0).wait(1).to({y:-23},0).wait(1).to({y:-38.3},0).wait(1).to({y:-54.2},0).wait(1).to({y:-70.6},0).wait(1).to({y:-87.6},0).wait(1).to({y:-104.9},0).wait(1).to({y:-122.6},0).wait(1).to({y:-140.4},0).wait(1).to({y:-158.4},0).wait(1).to({y:-176.4},0).wait(1).to({y:-194.2},0).wait(1).to({y:-211.7},0).wait(1).to({y:-228.9},0).wait(1).to({y:-245.6},0).wait(1).to({y:-261.7},0).wait(1).to({y:-277.1},0).wait(1).to({y:-291.8},0).wait(1).to({y:-305.7},0).wait(1).to({y:-318.8},0).wait(1).to({y:-330.9},0).wait(1).to({y:-342.2},0).wait(1).to({y:-352.6},0).wait(1).to({y:-362.1},0).wait(1).to({y:-370.7},0).wait(1).to({y:-378.5},0).wait(1).to({y:-385.3},0).wait(1).to({y:-391.4},0).wait(1).to({y:-396.6},0).wait(1).to({y:-401},0).wait(1).to({y:-404.7},0).wait(1).to({y:-407.7},0).wait(1).to({y:-409.9},0).wait(1).to({y:-411.5},0).wait(1).to({y:-412.4},0).wait(1).to({y:-412.7},0).to({_off:true},1).wait(28));

	// 图层 32     复制 5
	this.instance_9 = new lib.补间68("synched",0);
	this.instance_9.setTransform(352.4,913.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(340).to({_off:false},0).wait(1).to({y:842.8,alpha:0.101},0).wait(1).to({y:787,alpha:0.181},0).wait(1).to({y:740.3,alpha:0.247},0).wait(1).to({y:700,alpha:0.305},0).wait(1).to({y:664.4,alpha:0.356},0).wait(1).to({y:632.6,alpha:0.402},0).wait(1).to({y:603.9,alpha:0.443},0).wait(1).to({y:577.7,alpha:0.48},0).wait(1).to({y:553.7,alpha:0.515},0).wait(1).to({y:531.6,alpha:0.546},0).wait(1).to({y:511.1,alpha:0.576},0).wait(1).to({y:492.1,alpha:0.603},0).wait(1).to({y:474.4,alpha:0.628},0).wait(1).to({y:457.8,alpha:0.652},0).wait(1).to({y:442.3,alpha:0.674},0).wait(1).to({y:427.7,alpha:0.695},0).wait(1).to({y:414.1,alpha:0.715},0).wait(1).to({y:401.2,alpha:0.733},0).wait(1).to({y:389.1,alpha:0.75},0).wait(1).to({y:377.7,alpha:0.767},0).wait(1).to({y:367,alpha:0.782},0).wait(1).to({y:356.8,alpha:0.797},0).wait(1).to({y:347.2,alpha:0.81},0).wait(1).to({y:338.2,alpha:0.823},0).wait(1).to({y:329.6,alpha:0.836},0).wait(1).to({y:321.5,alpha:0.847},0).wait(1).to({y:313.9,alpha:0.858},0).wait(1).to({y:306.7,alpha:0.868},0).wait(1).to({y:299.9,alpha:0.878},0).wait(1).to({y:293.4,alpha:0.887},0).wait(1).to({y:287.4,alpha:0.896},0).wait(1).to({y:281.6,alpha:0.904},0).wait(1).to({y:276.2,alpha:0.912},0).wait(1).to({y:271.1,alpha:0.919},0).wait(1).to({y:266.3,alpha:0.926},0).wait(1).to({y:261.8,alpha:0.933},0).wait(1).to({y:257.6,alpha:0.939},0).wait(1).to({y:253.6,alpha:0.944},0).wait(1).to({y:249.9,alpha:0.95},0).wait(1).to({y:246.4,alpha:0.955},0).wait(1).to({y:243.2,alpha:0.959},0).wait(1).to({y:240.1,alpha:0.964},0).wait(1).to({y:237.3,alpha:0.968},0).wait(1).to({y:234.7,alpha:0.972},0).wait(1).to({y:232.3,alpha:0.975},0).wait(1).to({y:230,alpha:0.978},0).wait(1).to({y:228,alpha:0.981},0).wait(1).to({y:226.1,alpha:0.984},0).wait(1).to({y:224.4,alpha:0.986},0).wait(1).to({y:222.9,alpha:0.989},0).wait(1).to({y:221.5,alpha:0.99},0).wait(1).to({y:220.3,alpha:0.992},0).wait(1).to({y:219.2,alpha:0.994},0).wait(1).to({y:218.2,alpha:0.995},0).wait(1).to({y:217.4,alpha:0.996},0).wait(1).to({y:216.7,alpha:0.997},0).wait(1).to({y:216.1,alpha:0.998},0).wait(1).to({y:215.6,alpha:0.999},0).wait(1).to({y:215.3},0).wait(1).to({y:215,alpha:1},0).wait(1).to({y:214.9},0).wait(1).to({startPosition:0},0).wait(23).to({startPosition:0},0).wait(1).to({y:214.7},0).wait(1).to({y:214},0).wait(1).to({y:213},0).wait(1).to({y:211.5},0).wait(1).to({y:209.6},0).wait(1).to({y:207.2},0).wait(1).to({y:204.3},0).wait(1).to({y:200.9},0).wait(1).to({y:197},0).wait(1).to({y:192.5},0).wait(1).to({y:187.4},0).wait(1).to({y:181.8},0).wait(1).to({y:175.5},0).wait(1).to({y:168.6},0).wait(1).to({y:161.1},0).wait(1).to({y:152.9},0).wait(1).to({y:144},0).wait(1).to({y:134.4},0).wait(1).to({y:124.1},0).wait(1).to({y:113.1},0).wait(1).to({y:101.3},0).wait(1).to({y:88.8},0).wait(1).to({y:75.6},0).wait(1).to({y:61.7},0).wait(1).to({y:47},0).wait(1).to({y:31.8},0).wait(1).to({y:15.9},0).wait(1).to({y:-0.6},0).wait(1).to({y:-17.5},0).wait(1).to({y:-34.9},0).wait(1).to({y:-52.5},0).wait(1).to({y:-70.4},0).wait(1).to({y:-88.4},0).wait(1).to({y:-106.3},0).wait(1).to({y:-124.1},0).wait(1).to({y:-141.7},0).wait(1).to({y:-158.8},0).wait(1).to({y:-175.5},0).wait(1).to({y:-191.6},0).wait(1).to({y:-207.1},0).wait(1).to({y:-221.7},0).wait(1).to({y:-235.6},0).wait(1).to({y:-248.7},0).wait(1).to({y:-260.9},0).wait(1).to({y:-272.2},0).wait(1).to({y:-282.6},0).wait(1).to({y:-292.1},0).wait(1).to({y:-300.7},0).wait(1).to({y:-308.4},0).wait(1).to({y:-315.3},0).wait(1).to({y:-321.3},0).wait(1).to({y:-326.6},0).wait(1).to({y:-331},0).wait(1).to({y:-334.7},0).wait(1).to({y:-337.6},0).wait(1).to({y:-339.9},0).wait(1).to({y:-341.4},0).wait(1).to({y:-342.3},0).wait(1).to({y:-342.6},0).to({_off:true},1).wait(30));

	// 图层 32    复制 4
	this.instance_10 = new lib.补间70("synched",0);
	this.instance_10.setTransform(143.9,1338,1.67,1.67);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(348).to({_off:false},0).wait(1).to({y:1237.3,alpha:0.101},0).wait(1).to({y:1157.4,alpha:0.181},0).wait(1).to({y:1090.5,alpha:0.247},0).wait(1).to({y:1032.8,alpha:0.305},0).wait(1).to({y:981.9,alpha:0.356},0).wait(1).to({y:936.3,alpha:0.402},0).wait(1).to({y:895.2,alpha:0.443},0).wait(1).to({y:857.7,alpha:0.48},0).wait(1).to({y:823.3,alpha:0.515},0).wait(1).to({y:791.6,alpha:0.546},0).wait(1).to({y:762.3,alpha:0.576},0).wait(1).to({y:735.1,alpha:0.603},0).wait(1).to({y:709.7,alpha:0.628},0).wait(1).to({y:685.9,alpha:0.652},0).wait(1).to({y:663.7,alpha:0.674},0).wait(1).to({y:642.9,alpha:0.695},0).wait(1).to({y:623.3,alpha:0.715},0).wait(1).to({y:604.9,alpha:0.733},0).wait(1).to({y:587.6,alpha:0.75},0).wait(1).to({y:571.3,alpha:0.767},0).wait(1).to({y:555.8,alpha:0.782},0).wait(1).to({y:541.3,alpha:0.797},0).wait(1).to({y:527.6,alpha:0.81},0).wait(1).to({y:514.6,alpha:0.823},0).wait(1).to({y:502.4,alpha:0.836},0).wait(1).to({y:490.8,alpha:0.847},0).wait(1).to({y:479.9,alpha:0.858},0).wait(1).to({y:469.5,alpha:0.868},0).wait(1).to({y:459.8,alpha:0.878},0).wait(1).to({y:450.5,alpha:0.887},0).wait(1).to({y:441.8,alpha:0.896},0).wait(1).to({y:433.6,alpha:0.904},0).wait(1).to({y:425.9,alpha:0.912},0).wait(1).to({y:418.6,alpha:0.919},0).wait(1).to({y:411.7,alpha:0.926},0).wait(1).to({y:405.3,alpha:0.933},0).wait(1).to({y:399.2,alpha:0.939},0).wait(1).to({y:393.5,alpha:0.944},0).wait(1).to({y:388.2,alpha:0.95},0).wait(1).to({y:383.2,alpha:0.955},0).wait(1).to({y:378.5,alpha:0.959},0).wait(1).to({y:374.2,alpha:0.964},0).wait(1).to({y:370.2,alpha:0.968},0).wait(1).to({y:366.4,alpha:0.972},0).wait(1).to({y:363,alpha:0.975},0).wait(1).to({y:359.8,alpha:0.978},0).wait(1).to({y:356.8,alpha:0.981},0).wait(1).to({y:354.2,alpha:0.984},0).wait(1).to({y:351.7,alpha:0.986},0).wait(1).to({y:349.5,alpha:0.989},0).wait(1).to({y:347.5,alpha:0.99},0).wait(1).to({y:345.7,alpha:0.992},0).wait(1).to({y:344.2,alpha:0.994},0).wait(1).to({y:342.8,alpha:0.995},0).wait(1).to({y:341.6,alpha:0.996},0).wait(1).to({y:340.6,alpha:0.997},0).wait(1).to({y:339.8,alpha:0.998},0).wait(1).to({y:339.1,alpha:0.999},0).wait(1).to({y:338.6},0).wait(1).to({y:338.3,alpha:1},0).wait(1).to({y:338.1},0).wait(1).to({y:338},0).wait(13).to({startPosition:0},0).wait(1).to({y:337.7},0).wait(1).to({y:336.6},0).wait(1).to({y:334.9},0).wait(1).to({y:332.5},0).wait(1).to({y:329.2},0).wait(1).to({y:325.2},0).wait(1).to({y:320.4},0).wait(1).to({y:314.7},0).wait(1).to({y:308.1},0).wait(1).to({y:300.6},0).wait(1).to({y:292.2},0).wait(1).to({y:282.7},0).wait(1).to({y:272.3},0).wait(1).to({y:260.8},0).wait(1).to({y:248.2},0).wait(1).to({y:234.5},0).wait(1).to({y:219.7},0).wait(1).to({y:203.6},0).wait(1).to({y:186.4},0).wait(1).to({y:168},0).wait(1).to({y:148.4},0).wait(1).to({y:127.5},0).wait(1).to({y:105.4},0).wait(1).to({y:82.2},0).wait(1).to({y:57.7},0).wait(1).to({y:32.2},0).wait(1).to({y:5.7},0).wait(1).to({y:-21.8},0).wait(1).to({y:-50.1},0).wait(1).to({y:-79},0).wait(1).to({y:-108.5},0).wait(1).to({y:-138.4},0).wait(1).to({y:-168.4},0).wait(1).to({y:-198.4},0).wait(1).to({y:-228.1},0).wait(1).to({y:-257.4},0).wait(1).to({y:-286.1},0).wait(1).to({y:-313.9},0).wait(1).to({y:-340.8},0).wait(1).to({y:-366.6},0).wait(1).to({y:-391.1},0).wait(1).to({y:-414.4},0).wait(1).to({y:-436.2},0).wait(1).to({y:-456.5},0).wait(1).to({y:-475.4},0).wait(1).to({y:-492.7},0).wait(1).to({y:-508.6},0).wait(1).to({y:-523},0).wait(1).to({y:-535.9},0).wait(1).to({y:-547.4},0).wait(1).to({y:-557.4},0).wait(1).to({y:-566.2},0).wait(1).to({y:-573.6},0).wait(1).to({y:-579.7},0).wait(1).to({y:-584.6},0).wait(1).to({y:-588.4},0).wait(1).to({y:-591},0).wait(1).to({y:-592.5},0).wait(1).to({y:-593},0).to({_off:true},1).wait(32));

	// 图层 32   复制 3
	this.instance_11 = new lib.补间72("synched",0);
	this.instance_11.setTransform(286.1,900.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(344).to({_off:false},0).wait(1).to({y:820.6,alpha:0.101},0).wait(1).to({y:757.6,alpha:0.181},0).wait(1).to({y:704.8,alpha:0.247},0).wait(1).to({y:659.2,alpha:0.305},0).wait(1).to({y:619,alpha:0.356},0).wait(1).to({y:583.1,alpha:0.402},0).wait(1).to({y:550.6,alpha:0.443},0).wait(1).to({y:521,alpha:0.48},0).wait(1).to({y:493.9,alpha:0.515},0).wait(1).to({y:468.9,alpha:0.546},0).wait(1).to({y:445.7,alpha:0.576},0).wait(1).to({y:424.2,alpha:0.603},0).wait(1).to({y:404.2,alpha:0.628},0).wait(1).to({y:385.5,alpha:0.652},0).wait(1).to({y:367.9,alpha:0.674},0).wait(1).to({y:351.5,alpha:0.695},0).wait(1).to({y:336,alpha:0.715},0).wait(1).to({y:321.5,alpha:0.733},0).wait(1).to({y:307.8,alpha:0.75},0).wait(1).to({y:294.9,alpha:0.767},0).wait(1).to({y:282.8,alpha:0.782},0).wait(1).to({y:271.3,alpha:0.797},0).wait(1).to({y:260.5,alpha:0.81},0).wait(1).to({y:250.2,alpha:0.823},0).wait(1).to({y:240.6,alpha:0.836},0).wait(1).to({y:231.4,alpha:0.847},0).wait(1).to({y:222.8,alpha:0.858},0).wait(1).to({y:214.7,alpha:0.868},0).wait(1).to({y:206.9,alpha:0.878},0).wait(1).to({y:199.7,alpha:0.887},0).wait(1).to({y:192.8,alpha:0.896},0).wait(1).to({y:186.3,alpha:0.904},0).wait(1).to({y:180.2,alpha:0.912},0).wait(1).to({y:174.5,alpha:0.919},0).wait(1).to({y:169,alpha:0.926},0).wait(1).to({y:163.9,alpha:0.933},0).wait(1).to({y:159.2,alpha:0.939},0).wait(1).to({y:154.7,alpha:0.944},0).wait(1).to({y:150.5,alpha:0.95},0).wait(1).to({y:146.5,alpha:0.955},0).wait(1).to({y:142.8,alpha:0.959},0).wait(1).to({y:139.4,alpha:0.964},0).wait(1).to({y:136.2,alpha:0.968},0).wait(1).to({y:133.3,alpha:0.972},0).wait(1).to({y:130.5,alpha:0.975},0).wait(1).to({y:128,alpha:0.978},0).wait(1).to({y:125.7,alpha:0.981},0).wait(1).to({y:123.6,alpha:0.984},0).wait(1).to({y:121.7,alpha:0.986},0).wait(1).to({y:119.9,alpha:0.989},0).wait(1).to({y:118.4,alpha:0.99},0).wait(1).to({y:117,alpha:0.992},0).wait(1).to({y:115.7,alpha:0.994},0).wait(1).to({y:114.6,alpha:0.995},0).wait(1).to({y:113.7,alpha:0.996},0).wait(1).to({y:112.9,alpha:0.997},0).wait(1).to({y:112.3,alpha:0.998},0).wait(1).to({y:111.7,alpha:0.999},0).wait(1).to({y:111.3},0).wait(1).to({y:111.1,alpha:1},0).wait(1).to({y:110.9},0).wait(1).to({startPosition:0},0).wait(15).to({startPosition:0},0).wait(1).to({y:110.7},0).wait(1).to({y:110},0).wait(1).to({y:109},0).wait(1).to({y:107.5},0).wait(1).to({y:105.6},0).wait(1).to({y:103.2},0).wait(1).to({y:100.3},0).wait(1).to({y:96.9},0).wait(1).to({y:93},0).wait(1).to({y:88.5},0).wait(1).to({y:83.4},0).wait(1).to({y:77.8},0).wait(1).to({y:71.5},0).wait(1).to({y:64.6},0).wait(1).to({y:57.1},0).wait(1).to({y:48.9},0).wait(1).to({y:40},0).wait(1).to({y:30.4},0).wait(1).to({y:20.1},0).wait(1).to({y:9.1},0).wait(1).to({y:-2.7},0).wait(1).to({y:-15.2},0).wait(1).to({y:-28.4},0).wait(1).to({y:-42.3},0).wait(1).to({y:-57},0).wait(1).to({y:-72.2},0).wait(1).to({y:-88.1},0).wait(1).to({y:-104.6},0).wait(1).to({y:-121.5},0).wait(1).to({y:-138.9},0).wait(1).to({y:-156.5},0).wait(1).to({y:-174.4},0).wait(1).to({y:-192.4},0).wait(1).to({y:-210.3},0).wait(1).to({y:-228.1},0).wait(1).to({y:-245.7},0).wait(1).to({y:-262.8},0).wait(1).to({y:-279.5},0).wait(1).to({y:-295.6},0).wait(1).to({y:-311.1},0).wait(1).to({y:-325.7},0).wait(1).to({y:-339.6},0).wait(1).to({y:-352.7},0).wait(1).to({y:-364.9},0).wait(1).to({y:-376.2},0).wait(1).to({y:-386.6},0).wait(1).to({y:-396.1},0).wait(1).to({y:-404.7},0).wait(1).to({y:-412.4},0).wait(1).to({y:-419.3},0).wait(1).to({y:-425.3},0).wait(1).to({y:-430.6},0).wait(1).to({y:-435},0).wait(1).to({y:-438.7},0).wait(1).to({y:-441.6},0).wait(1).to({y:-443.9},0).wait(1).to({y:-445.4},0).wait(1).to({y:-446.3},0).wait(1).to({y:-446.6},0).to({_off:true},1).wait(34));

	// 图层 32  复制 2
	this.instance_12 = new lib.补间74("synched",0);
	this.instance_12.setTransform(9.9,713.7,0.72,0.72);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(340).to({_off:false},0).wait(1).to({y:666.8,alpha:0.101},0).wait(1).to({y:629.6,alpha:0.181},0).wait(1).to({y:598.4,alpha:0.247},0).wait(1).to({y:571.5,alpha:0.305},0).wait(1).to({y:547.8,alpha:0.356},0).wait(1).to({y:526.6,alpha:0.402},0).wait(1).to({y:507.4,alpha:0.443},0).wait(1).to({y:490,alpha:0.48},0).wait(1).to({y:473.9,alpha:0.515},0).wait(1).to({y:459.2,alpha:0.546},0).wait(1).to({y:445.5,alpha:0.576},0).wait(1).to({y:432.8,alpha:0.603},0).wait(1).to({y:421,alpha:0.628},0).wait(1).to({y:409.9,alpha:0.652},0).wait(1).to({y:399.6,alpha:0.674},0).wait(1).to({y:389.9,alpha:0.695},0).wait(1).to({y:380.8,alpha:0.715},0).wait(1).to({y:372.2,alpha:0.733},0).wait(1).to({y:364.1,alpha:0.75},0).wait(1).to({y:356.5,alpha:0.767},0).wait(1).to({y:349.3,alpha:0.782},0).wait(1).to({y:342.6,alpha:0.797},0).wait(1).to({y:336.2,alpha:0.81},0).wait(1).to({y:330.1,alpha:0.823},0).wait(1).to({y:324.4,alpha:0.836},0).wait(1).to({y:319,alpha:0.847},0).wait(1).to({y:313.9,alpha:0.858},0).wait(1).to({y:309.1,alpha:0.868},0).wait(1).to({y:304.6,alpha:0.878},0).wait(1).to({y:300.3,alpha:0.887},0).wait(1).to({y:296.2,alpha:0.896},0).wait(1).to({y:292.4,alpha:0.904},0).wait(1).to({y:288.8,alpha:0.912},0).wait(1).to({y:285.4,alpha:0.919},0).wait(1).to({y:282.2,alpha:0.926},0).wait(1).to({y:279.2,alpha:0.933},0).wait(1).to({y:276.4,alpha:0.939},0).wait(1).to({y:273.7,alpha:0.944},0).wait(1).to({y:271.2,alpha:0.95},0).wait(1).to({y:268.9,alpha:0.955},0).wait(1).to({y:266.7,alpha:0.959},0).wait(1).to({y:264.7,alpha:0.964},0).wait(1).to({y:262.8,alpha:0.968},0).wait(1).to({y:261.1,alpha:0.972},0).wait(1).to({y:259.5,alpha:0.975},0).wait(1).to({y:258,alpha:0.978},0).wait(1).to({y:256.6,alpha:0.981},0).wait(1).to({y:255.4,alpha:0.984},0).wait(1).to({y:254.2,alpha:0.986},0).wait(1).to({y:253.2,alpha:0.989},0).wait(1).to({y:252.3,alpha:0.99},0).wait(1).to({y:251.5,alpha:0.992},0).wait(1).to({y:250.7,alpha:0.994},0).wait(1).to({y:250.1,alpha:0.995},0).wait(1).to({y:249.5,alpha:0.996},0).wait(1).to({y:249.1,alpha:0.997},0).wait(1).to({y:248.7,alpha:0.998},0).wait(1).to({y:248.4,alpha:0.999},0).wait(1).to({y:248.1},0).wait(1).to({y:248,alpha:1},0).wait(1).to({y:247.9},0).wait(1).to({startPosition:0},0).wait(18).to({startPosition:0},0).wait(1).to({y:247.7},0).wait(1).to({y:247.3},0).wait(1).to({y:246.5},0).wait(1).to({y:245.5},0).wait(1).to({y:244.1},0).wait(1).to({y:242.3},0).wait(1).to({y:240.3},0).wait(1).to({y:237.8},0).wait(1).to({y:235},0).wait(1).to({y:231.7},0).wait(1).to({y:228.1},0).wait(1).to({y:224},0).wait(1).to({y:219.5},0).wait(1).to({y:214.6},0).wait(1).to({y:209.1},0).wait(1).to({y:203.2},0).wait(1).to({y:196.8},0).wait(1).to({y:189.9},0).wait(1).to({y:182.5},0).wait(1).to({y:174.6},0).wait(1).to({y:166.1},0).wait(1).to({y:157.1},0).wait(1).to({y:147.6},0).wait(1).to({y:137.6},0).wait(1).to({y:127},0).wait(1).to({y:116},0).wait(1).to({y:104.6},0).wait(1).to({y:92.7},0).wait(1).to({y:80.5},0).wait(1).to({y:68.1},0).wait(1).to({y:55.3},0).wait(1).to({y:42.5},0).wait(1).to({y:29.5},0).wait(1).to({y:16.6},0).wait(1).to({y:3.8},0).wait(1).to({y:-8.8},0).wait(1).to({y:-21.2},0).wait(1).to({y:-33.2},0).wait(1).to({y:-44.8},0).wait(1).to({y:-55.9},0).wait(1).to({y:-66.5},0).wait(1).to({y:-76.5},0).wait(1).to({y:-85.9},0).wait(1).to({y:-94.7},0).wait(1).to({y:-102.8},0).wait(1).to({y:-110.3},0).wait(1).to({y:-117.1},0).wait(1).to({y:-123.3},0).wait(1).to({y:-128.9},0).wait(1).to({y:-133.9},0).wait(1).to({y:-138.2},0).wait(1).to({y:-142},0).wait(1).to({y:-145.2},0).wait(1).to({y:-147.8},0).wait(1).to({y:-149.9},0).wait(1).to({y:-151.5},0).wait(1).to({y:-152.7},0).wait(1).to({y:-153.3},0).wait(1).to({y:-153.5},0).to({_off:true},1).wait(35));

	// 图层 32 复制
	this.instance_13 = new lib.补间76("synched",0);
	this.instance_13.setTransform(40.5,935.7);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(342).to({_off:false},0).wait(1).to({y:880.5,alpha:0.101},0).wait(1).to({y:836.7,alpha:0.181},0).wait(1).to({y:800,alpha:0.247},0).wait(1).to({y:768.3,alpha:0.305},0).wait(1).to({y:740.4,alpha:0.356},0).wait(1).to({y:715.5,alpha:0.402},0).wait(1).to({y:692.9,alpha:0.443},0).wait(1).to({y:672.4,alpha:0.48},0).wait(1).to({y:653.5,alpha:0.515},0).wait(1).to({y:636.2,alpha:0.546},0).wait(1).to({y:620.1,alpha:0.576},0).wait(1).to({y:605.1,alpha:0.603},0).wait(1).to({y:591.2,alpha:0.628},0).wait(1).to({y:578.2,alpha:0.652},0).wait(1).to({y:566,alpha:0.674},0).wait(1).to({y:554.6,alpha:0.695},0).wait(1).to({y:543.9,alpha:0.715},0).wait(1).to({y:533.8,alpha:0.733},0).wait(1).to({y:524.3,alpha:0.75},0).wait(1).to({y:515.4,alpha:0.767},0).wait(1).to({y:506.9,alpha:0.782},0).wait(1).to({y:498.9,alpha:0.797},0).wait(1).to({y:491.4,alpha:0.81},0).wait(1).to({y:484.3,alpha:0.823},0).wait(1).to({y:477.6,alpha:0.836},0).wait(1).to({y:471.3,alpha:0.847},0).wait(1).to({y:465.3,alpha:0.858},0).wait(1).to({y:459.6,alpha:0.868},0).wait(1).to({y:454.2,alpha:0.878},0).wait(1).to({y:449.2,alpha:0.887},0).wait(1).to({y:444.4,alpha:0.896},0).wait(1).to({y:439.9,alpha:0.904},0).wait(1).to({y:435.7,alpha:0.912},0).wait(1).to({y:431.7,alpha:0.919},0).wait(1).to({y:427.9,alpha:0.926},0).wait(1).to({y:424.4,alpha:0.933},0).wait(1).to({y:421.1,alpha:0.939},0).wait(1).to({y:417.9,alpha:0.944},0).wait(1).to({y:415,alpha:0.95},0).wait(1).to({y:412.3,alpha:0.955},0).wait(1).to({y:409.7,alpha:0.959},0).wait(1).to({y:407.3,alpha:0.964},0).wait(1).to({y:405.1,alpha:0.968},0).wait(1).to({y:403.1,alpha:0.972},0).wait(1).to({y:401.2,alpha:0.975},0).wait(1).to({y:399.4,alpha:0.978},0).wait(1).to({y:397.8,alpha:0.981},0).wait(1).to({y:396.4,alpha:0.984},0).wait(1).to({y:395,alpha:0.986},0).wait(1).to({y:393.8,alpha:0.989},0).wait(1).to({y:392.7,alpha:0.99},0).wait(1).to({y:391.7,alpha:0.992},0).wait(1).to({y:390.9,alpha:0.994},0).wait(1).to({y:390.1,alpha:0.995},0).wait(1).to({y:389.5,alpha:0.996},0).wait(1).to({y:388.9,alpha:0.997},0).wait(1).to({y:388.5,alpha:0.998},0).wait(1).to({y:388.1,alpha:0.999},0).wait(1).to({y:387.8},0).wait(1).to({y:387.6,alpha:1},0).wait(1).to({y:387.5},0).wait(1).to({startPosition:0},0).wait(15).to({startPosition:0},0).wait(1).to({y:387.3},0).wait(1).to({y:386.7},0).wait(1).to({y:385.7},0).wait(1).to({y:384.2},0).wait(1).to({y:382.3},0).wait(1).to({y:379.8},0).wait(1).to({y:377},0).wait(1).to({y:373.5},0).wait(1).to({y:369.6},0).wait(1).to({y:365.1},0).wait(1).to({y:360.1},0).wait(1).to({y:354.4},0).wait(1).to({y:348.2},0).wait(1).to({y:341.3},0).wait(1).to({y:333.7},0).wait(1).to({y:325.5},0).wait(1).to({y:316.6},0).wait(1).to({y:307},0).wait(1).to({y:296.7},0).wait(1).to({y:285.7},0).wait(1).to({y:273.9},0).wait(1).to({y:261.5},0).wait(1).to({y:248.2},0).wait(1).to({y:234.3},0).wait(1).to({y:219.7},0).wait(1).to({y:204.4},0).wait(1).to({y:188.5},0).wait(1).to({y:172.1},0).wait(1).to({y:155.1},0).wait(1).to({y:137.8},0).wait(1).to({y:120.1},0).wait(1).to({y:102.3},0).wait(1).to({y:84.3},0).wait(1).to({y:66.3},0).wait(1).to({y:48.5},0).wait(1).to({y:31},0).wait(1).to({y:13.8},0).wait(1).to({y:-2.9},0).wait(1).to({y:-19},0).wait(1).to({y:-34.4},0).wait(1).to({y:-49.1},0).wait(1).to({y:-63},0).wait(1).to({y:-76.1},0).wait(1).to({y:-88.2},0).wait(1).to({y:-99.5},0).wait(1).to({y:-109.9},0).wait(1).to({y:-119.4},0).wait(1).to({y:-128},0).wait(1).to({y:-135.8},0).wait(1).to({y:-142.6},0).wait(1).to({y:-148.7},0).wait(1).to({y:-153.9},0).wait(1).to({y:-158.3},0).wait(1).to({y:-162},0).wait(1).to({y:-165},0).wait(1).to({y:-167.2},0).wait(1).to({y:-168.8},0).wait(1).to({y:-169.7},0).wait(1).to({y:-170},0).to({_off:true},1).wait(36));

	// 图层 32
	this.instance_14 = new lib.补间78("synched",0);
	this.instance_14.setTransform(143.7,877.7);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(344).to({_off:false},0).wait(1).to({x:144.1,y:810.5,alpha:0.101},0).wait(1).to({x:144.4,y:757.3,alpha:0.181},0).wait(1).to({x:144.7,y:712.7,alpha:0.247},0).wait(1).to({x:145,y:674.2,alpha:0.305},0).wait(1).to({x:145.2,y:640.3,alpha:0.356},0).wait(1).to({x:145.3,y:609.9,alpha:0.402},0).wait(1).to({x:145.5,y:582.5,alpha:0.443},0).wait(1).to({x:145.7,y:557.5,alpha:0.48},0).wait(1).to({x:145.8,y:534.6,alpha:0.515},0).wait(1).to({x:145.9,y:513.5,alpha:0.546},0).wait(1).to({x:146.1,y:493.9,alpha:0.576},0).wait(1).to({x:146.2,y:475.8,alpha:0.603},0).wait(1).to({x:146.3,y:458.8,alpha:0.628},0).wait(1).to({x:146.4,y:443,alpha:0.652},0).wait(1).to({x:146.5,y:428.2,alpha:0.674},0).wait(1).to({y:414.3,alpha:0.695},0).wait(1).to({x:146.6,y:401.3,alpha:0.715},0).wait(1).to({x:146.7,y:389,alpha:0.733},0).wait(1).to({x:146.8,y:377.5,alpha:0.75},0).wait(1).to({y:366.6,alpha:0.767},0).wait(1).to({x:146.9,y:356.3,alpha:0.782},0).wait(1).to({x:147,y:346.6,alpha:0.797},0).wait(1).to({y:337.5,alpha:0.81},0).wait(1).to({x:147.1,y:328.8,alpha:0.823},0).wait(1).to({y:320.7,alpha:0.836},0).wait(1).to({x:147.2,y:312.9,alpha:0.847},0).wait(1).to({y:305.7,alpha:0.858},0).wait(1).to({x:147.3,y:298.8,alpha:0.868},0).wait(1).to({y:292.3,alpha:0.878},0).wait(1).to({y:286.1,alpha:0.887},0).wait(1).to({x:147.4,y:280.3,alpha:0.896},0).wait(1).to({y:274.8,alpha:0.904},0).wait(1).to({y:269.7,alpha:0.912},0).wait(1).to({x:147.5,y:264.8,alpha:0.919},0).wait(1).to({y:260.2,alpha:0.926},0).wait(1).to({y:255.9,alpha:0.933},0).wait(1).to({y:251.9,alpha:0.939},0).wait(1).to({x:147.6,y:248.1,alpha:0.944},0).wait(1).to({y:244.6,alpha:0.95},0).wait(1).to({y:241.2,alpha:0.955},0).wait(1).to({y:238.1,alpha:0.959},0).wait(1).to({x:147.7,y:235.2,alpha:0.964},0).wait(1).to({y:232.5,alpha:0.968},0).wait(1).to({y:230,alpha:0.972},0).wait(1).to({y:227.7,alpha:0.975},0).wait(1).to({y:225.6,alpha:0.978},0).wait(1).to({y:223.7,alpha:0.981},0).wait(1).to({y:221.9,alpha:0.984},0).wait(1).to({y:220.2,alpha:0.986},0).wait(1).to({x:147.8,y:218.8,alpha:0.989},0).wait(1).to({y:217.4,alpha:0.99},0).wait(1).to({y:216.3,alpha:0.992},0).wait(1).to({y:215.2,alpha:0.994},0).wait(1).to({y:214.3,alpha:0.995},0).wait(1).to({y:213.5,alpha:0.996},0).wait(1).to({y:212.8,alpha:0.997},0).wait(1).to({y:212.3,alpha:0.998},0).wait(1).to({y:211.8,alpha:0.999},0).wait(1).to({y:211.5},0).wait(1).to({y:211.3,alpha:1},0).wait(1).to({y:211.1},0).wait(1).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(1).to({y:210.9},0).wait(1).to({y:210.3},0).wait(1).to({y:209.3},0).wait(1).to({y:207.8},0).wait(1).to({y:205.9},0).wait(1).to({y:203.4},0).wait(1).to({y:200.6},0).wait(1).to({y:197.1},0).wait(1).to({y:193.2},0).wait(1).to({y:188.7},0).wait(1).to({y:183.7},0).wait(1).to({y:178},0).wait(1).to({y:171.8},0).wait(1).to({y:164.9},0).wait(1).to({y:157.3},0).wait(1).to({y:149.1},0).wait(1).to({y:140.2},0).wait(1).to({y:130.6},0).wait(1).to({y:120.3},0).wait(1).to({y:109.3},0).wait(1).to({y:97.5},0).wait(1).to({y:85.1},0).wait(1).to({y:71.8},0).wait(1).to({y:57.9},0).wait(1).to({y:43.3},0).wait(1).to({y:28},0).wait(1).to({y:12.1},0).wait(1).to({y:-4.3},0).wait(1).to({y:-21.3},0).wait(1).to({y:-38.6},0).wait(1).to({y:-56.3},0).wait(1).to({y:-74.1},0).wait(1).to({y:-92.1},0).wait(1).to({y:-110.1},0).wait(1).to({y:-127.9},0).wait(1).to({y:-145.4},0).wait(1).to({y:-162.6},0).wait(1).to({y:-179.3},0).wait(1).to({y:-195.4},0).wait(1).to({y:-210.8},0).wait(1).to({y:-225.5},0).wait(1).to({y:-239.4},0).wait(1).to({y:-252.5},0).wait(1).to({y:-264.6},0).wait(1).to({y:-275.9},0).wait(1).to({y:-286.3},0).wait(1).to({y:-295.8},0).wait(1).to({y:-304.4},0).wait(1).to({y:-312.2},0).wait(1).to({y:-319},0).wait(1).to({y:-325.1},0).wait(1).to({y:-330.3},0).wait(1).to({y:-334.7},0).wait(1).to({y:-338.4},0).wait(1).to({y:-341.4},0).wait(1).to({y:-343.6},0).wait(1).to({y:-345.2},0).wait(1).to({y:-346.1},0).wait(1).to({y:-346.4},0).to({_off:true},1).wait(38));

	// 图层 31                 复制 17
	this.instance_15 = new lib.元件19();
	this.instance_15.setTransform(459.3,881.2,0.544,0.544,0,0,0,16.9,35.7);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(347).to({_off:false},0).wait(1).to({regY:30.3,y:811.5,alpha:0.101},0).wait(1).to({y:758.6,alpha:0.181},0).wait(1).to({y:714.3,alpha:0.247},0).wait(1).to({y:676,alpha:0.305},0).wait(1).to({y:642.3,alpha:0.356},0).wait(1).to({y:612.1,alpha:0.402},0).wait(1).to({y:584.9,alpha:0.443},0).wait(1).to({y:560,alpha:0.48},0).wait(1).to({y:537.3,alpha:0.515},0).wait(1).to({y:516.3,alpha:0.546},0).wait(1).to({y:496.8,alpha:0.576},0).wait(1).to({y:478.8,alpha:0.603},0).wait(1).to({y:462,alpha:0.628},0).wait(1).to({y:446.2,alpha:0.652},0).wait(1).to({y:431.5,alpha:0.674},0).wait(1).to({y:417.7,alpha:0.695},0).wait(1).to({y:404.8,alpha:0.715},0).wait(1).to({y:392.6,alpha:0.733},0).wait(1).to({y:381.1,alpha:0.75},0).wait(1).to({y:370.3,alpha:0.767},0).wait(1).to({y:360.1,alpha:0.782},0).wait(1).to({y:350.4,alpha:0.797},0).wait(1).to({y:341.3,alpha:0.81},0).wait(1).to({y:332.7,alpha:0.823},0).wait(1).to({y:324.6,alpha:0.836},0).wait(1).to({y:317,alpha:0.847},0).wait(1).to({y:309.7,alpha:0.858},0).wait(1).to({y:302.9,alpha:0.868},0).wait(1).to({y:296.4,alpha:0.878},0).wait(1).to({y:290.3,alpha:0.887},0).wait(1).to({y:284.5,alpha:0.896},0).wait(1).to({y:279.1,alpha:0.904},0).wait(1).to({y:274,alpha:0.912},0).wait(1).to({y:269.1,alpha:0.919},0).wait(1).to({y:264.6,alpha:0.926},0).wait(1).to({y:260.3,alpha:0.933},0).wait(1).to({y:256.3,alpha:0.939},0).wait(1).to({y:252.5,alpha:0.944},0).wait(1).to({y:249,alpha:0.95},0).wait(1).to({y:245.7,alpha:0.955},0).wait(1).to({y:242.6,alpha:0.959},0).wait(1).to({y:239.7,alpha:0.964},0).wait(1).to({y:237.1,alpha:0.968},0).wait(1).to({y:234.6,alpha:0.972},0).wait(1).to({y:232.3,alpha:0.975},0).wait(1).to({y:230.2,alpha:0.978},0).wait(1).to({y:228.2,alpha:0.981},0).wait(1).to({y:226.4,alpha:0.984},0).wait(1).to({y:224.8,alpha:0.986},0).wait(1).to({y:223.4,alpha:0.989},0).wait(1).to({y:222,alpha:0.99},0).wait(1).to({y:220.9,alpha:0.992},0).wait(1).to({y:219.8,alpha:0.994},0).wait(1).to({y:218.9,alpha:0.995},0).wait(1).to({y:218.1,alpha:0.996},0).wait(1).to({y:217.5,alpha:0.997},0).wait(1).to({y:216.9,alpha:0.998},0).wait(1).to({y:216.5,alpha:0.999},0).wait(1).to({y:216.2},0).wait(1).to({y:215.9,alpha:1},0).wait(1).to({y:215.8},0).wait(1).to({regY:35.7,y:218.7},0).wait(7).to({regY:30.3,y:215.6},0).wait(1).to({y:214.9},0).wait(1).to({y:213.9},0).wait(1).to({y:212.4},0).wait(1).to({y:210.5},0).wait(1).to({y:208.1},0).wait(1).to({y:205.2},0).wait(1).to({y:201.8},0).wait(1).to({y:197.9},0).wait(1).to({y:193.4},0).wait(1).to({y:188.3},0).wait(1).to({y:182.7},0).wait(1).to({y:176.4},0).wait(1).to({y:169.5},0).wait(1).to({y:162},0).wait(1).to({y:153.8},0).wait(1).to({y:144.9},0).wait(1).to({y:135.3},0).wait(1).to({y:125},0).wait(1).to({y:114},0).wait(1).to({y:102.2},0).wait(1).to({y:89.7},0).wait(1).to({y:76.5},0).wait(1).to({y:62.6},0).wait(1).to({y:47.9},0).wait(1).to({y:32.7},0).wait(1).to({y:16.8},0).wait(1).to({y:0.4},0).wait(1).to({y:-16.6},0).wait(1).to({y:-33.9},0).wait(1).to({y:-51.6},0).wait(1).to({y:-69.4},0).wait(1).to({y:-87.4},0).wait(1).to({y:-105.4},0).wait(1).to({y:-123.2},0).wait(1).to({y:-140.7},0).wait(1).to({y:-157.9},0).wait(1).to({y:-174.6},0).wait(1).to({y:-190.7},0).wait(1).to({y:-206.1},0).wait(1).to({y:-220.8},0).wait(1).to({y:-234.7},0).wait(1).to({y:-247.8},0).wait(1).to({y:-259.9},0).wait(1).to({y:-271.2},0).wait(1).to({y:-281.6},0).wait(1).to({y:-291.1},0).wait(1).to({y:-299.7},0).wait(1).to({y:-307.5},0).wait(1).to({y:-314.3},0).wait(1).to({y:-320.4},0).wait(1).to({y:-325.6},0).wait(1).to({y:-330},0).wait(1).to({y:-333.7},0).wait(1).to({y:-336.7},0).wait(1).to({y:-338.9},0).wait(1).to({y:-340.5},0).wait(1).to({y:-341.4},0).wait(1).to({regY:35.7,y:-338.8},0).to({_off:true},1).wait(40));

	// 图层 31                复制 16
	this.instance_16 = new lib.元件19();
	this.instance_16.setTransform(341.7,1286.9,0.544,0.544,0,0,0,16.9,35.7);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(340).to({_off:false},0).wait(1).to({regY:30.3,y:1196.1,alpha:0.101},0).wait(1).to({y:1126.4,alpha:0.181},0).wait(1).to({y:1068,alpha:0.247},0).wait(1).to({y:1017.6,alpha:0.305},0).wait(1).to({y:973.2,alpha:0.356},0).wait(1).to({y:933.5,alpha:0.402},0).wait(1).to({y:897.6,alpha:0.443},0).wait(1).to({y:864.9,alpha:0.48},0).wait(1).to({y:834.9,alpha:0.515},0).wait(1).to({y:807.3,alpha:0.546},0).wait(1).to({y:781.7,alpha:0.576},0).wait(1).to({y:757.9,alpha:0.603},0).wait(1).to({y:735.7,alpha:0.628},0).wait(1).to({y:715,alpha:0.652},0).wait(1).to({y:695.6,alpha:0.674},0).wait(1).to({y:677.5,alpha:0.695},0).wait(1).to({y:660.4,alpha:0.715},0).wait(1).to({y:644.3,alpha:0.733},0).wait(1).to({y:629.2,alpha:0.75},0).wait(1).to({y:615,alpha:0.767},0).wait(1).to({y:601.5,alpha:0.782},0).wait(1).to({y:588.8,alpha:0.797},0).wait(1).to({y:576.9,alpha:0.81},0).wait(1).to({y:565.5,alpha:0.823},0).wait(1).to({y:554.9,alpha:0.836},0).wait(1).to({y:544.8,alpha:0.847},0).wait(1).to({y:535.2,alpha:0.858},0).wait(1).to({y:526.2,alpha:0.868},0).wait(1).to({y:517.7,alpha:0.878},0).wait(1).to({y:509.6,alpha:0.887},0).wait(1).to({y:502.1,alpha:0.896},0).wait(1).to({y:494.9,alpha:0.904},0).wait(1).to({y:488.1,alpha:0.912},0).wait(1).to({y:481.8,alpha:0.919},0).wait(1).to({y:475.8,alpha:0.926},0).wait(1).to({y:470.2,alpha:0.933},0).wait(1).to({y:464.9,alpha:0.939},0).wait(1).to({y:459.9,alpha:0.944},0).wait(1).to({y:455.2,alpha:0.95},0).wait(1).to({y:450.9,alpha:0.955},0).wait(1).to({y:446.8,alpha:0.959},0).wait(1).to({y:443,alpha:0.964},0).wait(1).to({y:439.5,alpha:0.968},0).wait(1).to({y:436.2,alpha:0.972},0).wait(1).to({y:433.2,alpha:0.975},0).wait(1).to({y:430.4,alpha:0.978},0).wait(1).to({y:427.9,alpha:0.981},0).wait(1).to({y:425.5,alpha:0.984},0).wait(1).to({y:423.4,alpha:0.986},0).wait(1).to({y:421.5,alpha:0.989},0).wait(1).to({y:419.7,alpha:0.99},0).wait(1).to({y:418.2,alpha:0.992},0).wait(1).to({y:416.8,alpha:0.994},0).wait(1).to({y:415.6,alpha:0.995},0).wait(1).to({y:414.6,alpha:0.996},0).wait(1).to({y:413.7,alpha:0.997},0).wait(1).to({y:413,alpha:0.998},0).wait(1).to({y:412.4,alpha:0.999},0).wait(1).to({y:412},0).wait(1).to({y:411.7,alpha:1},0).wait(1).to({y:411.5},0).wait(1).to({regY:35.7,y:414.4},0).wait(17).to({regY:30.3,y:411.3},0).wait(1).to({y:410.6},0).wait(1).to({y:409.6},0).wait(1).to({y:408.1},0).wait(1).to({y:406.2},0).wait(1).to({y:403.8},0).wait(1).to({y:400.9},0).wait(1).to({y:397.5},0).wait(1).to({y:393.6},0).wait(1).to({y:389.1},0).wait(1).to({y:384},0).wait(1).to({y:378.4},0).wait(1).to({y:372.1},0).wait(1).to({y:365.2},0).wait(1).to({y:357.7},0).wait(1).to({y:349.5},0).wait(1).to({y:340.6},0).wait(1).to({y:331},0).wait(1).to({y:320.7},0).wait(1).to({y:309.7},0).wait(1).to({y:297.9},0).wait(1).to({y:285.4},0).wait(1).to({y:272.2},0).wait(1).to({y:258.3},0).wait(1).to({y:243.6},0).wait(1).to({y:228.4},0).wait(1).to({y:212.5},0).wait(1).to({y:196},0).wait(1).to({y:179.1},0).wait(1).to({y:161.7},0).wait(1).to({y:144.1},0).wait(1).to({y:126.2},0).wait(1).to({y:108.2},0).wait(1).to({y:90.3},0).wait(1).to({y:72.5},0).wait(1).to({y:54.9},0).wait(1).to({y:37.8},0).wait(1).to({y:21.1},0).wait(1).to({y:5},0).wait(1).to({y:-10.4},0).wait(1).to({y:-25.1},0).wait(1).to({y:-39},0).wait(1).to({y:-52.1},0).wait(1).to({y:-64.2},0).wait(1).to({y:-75.5},0).wait(1).to({y:-85.9},0).wait(1).to({y:-95.4},0).wait(1).to({y:-104},0).wait(1).to({y:-111.8},0).wait(1).to({y:-118.6},0).wait(1).to({y:-124.7},0).wait(1).to({y:-129.9},0).wait(1).to({y:-134.3},0).wait(1).to({y:-138},0).wait(1).to({y:-141},0).wait(1).to({y:-143.2},0).wait(1).to({y:-144.8},0).wait(1).to({y:-145.7},0).wait(1).to({regY:35.7,y:-143.1},0).to({_off:true},1).wait(37));

	// 图层 31               复制 15
	this.instance_17 = new lib.元件19();
	this.instance_17.setTransform(177.9,915.1,0.544,0.544,0,0,0,16.9,35.7);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(342).to({_off:false},0).wait(1).to({regY:30.3,y:865.3,alpha:0.101},0).wait(1).to({y:828.2,alpha:0.181},0).wait(1).to({y:797.1,alpha:0.247},0).wait(1).to({y:770.3,alpha:0.305},0).wait(1).to({y:746.6,alpha:0.356},0).wait(1).to({y:725.4,alpha:0.402},0).wait(1).to({y:706.3,alpha:0.443},0).wait(1).to({y:688.9,alpha:0.48},0).wait(1).to({y:672.9,alpha:0.515},0).wait(1).to({y:658.2,alpha:0.546},0).wait(1).to({y:644.6,alpha:0.576},0).wait(1).to({y:631.9,alpha:0.603},0).wait(1).to({y:620.1,alpha:0.628},0).wait(1).to({y:609.1,alpha:0.652},0).wait(1).to({y:598.8,alpha:0.674},0).wait(1).to({y:589.1,alpha:0.695},0).wait(1).to({y:580,alpha:0.715},0).wait(1).to({y:571.4,alpha:0.733},0).wait(1).to({y:563.4,alpha:0.75},0).wait(1).to({y:555.8,alpha:0.767},0).wait(1).to({y:548.6,alpha:0.782},0).wait(1).to({y:541.9,alpha:0.797},0).wait(1).to({y:535.5,alpha:0.81},0).wait(1).to({y:529.5,alpha:0.823},0).wait(1).to({y:523.8,alpha:0.836},0).wait(1).to({y:518.4,alpha:0.847},0).wait(1).to({y:513.3,alpha:0.858},0).wait(1).to({y:508.5,alpha:0.868},0).wait(1).to({y:504,alpha:0.878},0).wait(1).to({y:499.7,alpha:0.887},0).wait(1).to({y:495.7,alpha:0.896},0).wait(1).to({y:491.8,alpha:0.904},0).wait(1).to({y:488.2,alpha:0.912},0).wait(1).to({y:484.9,alpha:0.919},0).wait(1).to({y:481.7,alpha:0.926},0).wait(1).to({y:478.7,alpha:0.933},0).wait(1).to({y:475.8,alpha:0.939},0).wait(1).to({y:473.2,alpha:0.944},0).wait(1).to({y:470.7,alpha:0.95},0).wait(1).to({y:468.4,alpha:0.955},0).wait(1).to({y:466.2,alpha:0.959},0).wait(1).to({y:464.2,alpha:0.964},0).wait(1).to({y:462.3,alpha:0.968},0).wait(1).to({y:460.6,alpha:0.972},0).wait(1).to({y:459,alpha:0.975},0).wait(1).to({y:457.5,alpha:0.978},0).wait(1).to({y:456.2,alpha:0.981},0).wait(1).to({y:454.9,alpha:0.984},0).wait(1).to({y:453.8,alpha:0.986},0).wait(1).to({y:452.7,alpha:0.989},0).wait(1).to({y:451.8,alpha:0.99},0).wait(1).to({y:451,alpha:0.992},0).wait(1).to({y:450.3,alpha:0.994},0).wait(1).to({y:449.6,alpha:0.995},0).wait(1).to({y:449.1,alpha:0.996},0).wait(1).to({y:448.6,alpha:0.997},0).wait(1).to({y:448.2,alpha:0.998},0).wait(1).to({y:447.9,alpha:0.999},0).wait(1).to({y:447.7},0).wait(1).to({y:447.5,alpha:1},0).wait(1).to({y:447.4},0).wait(1).to({regY:35.7,y:450.4},0).wait(19).to({regY:30.3,y:447.2},0).wait(1).to({y:446.6},0).wait(1).to({y:445.6},0).wait(1).to({y:444.1},0).wait(1).to({y:442.2},0).wait(1).to({y:439.7},0).wait(1).to({y:436.9},0).wait(1).to({y:433.4},0).wait(1).to({y:429.5},0).wait(1).to({y:425},0).wait(1).to({y:420},0).wait(1).to({y:414.3},0).wait(1).to({y:408.1},0).wait(1).to({y:401.2},0).wait(1).to({y:393.6},0).wait(1).to({y:385.4},0).wait(1).to({y:376.5},0).wait(1).to({y:366.9},0).wait(1).to({y:356.6},0).wait(1).to({y:345.6},0).wait(1).to({y:333.8},0).wait(1).to({y:321.4},0).wait(1).to({y:308.1},0).wait(1).to({y:294.2},0).wait(1).to({y:279.6},0).wait(1).to({y:264.3},0).wait(1).to({y:248.4},0).wait(1).to({y:232},0).wait(1).to({y:215},0).wait(1).to({y:197.7},0).wait(1).to({y:180},0).wait(1).to({y:162.2},0).wait(1).to({y:144.2},0).wait(1).to({y:126.2},0).wait(1).to({y:108.4},0).wait(1).to({y:90.9},0).wait(1).to({y:73.7},0).wait(1).to({y:57},0).wait(1).to({y:40.9},0).wait(1).to({y:25.5},0).wait(1).to({y:10.9},0).wait(1).to({y:-3},0).wait(1).to({y:-16.1},0).wait(1).to({y:-28.3},0).wait(1).to({y:-39.6},0).wait(1).to({y:-50},0).wait(1).to({y:-59.5},0).wait(1).to({y:-68.1},0).wait(1).to({y:-75.8},0).wait(1).to({y:-82.7},0).wait(1).to({y:-88.7},0).wait(1).to({y:-94},0).wait(1).to({y:-98.4},0).wait(1).to({y:-102.1},0).wait(1).to({y:-105},0).wait(1).to({y:-107.3},0).wait(1).to({y:-108.8},0).wait(1).to({y:-109.7},0).wait(1).to({regY:35.7,y:-107.1},0).to({_off:true},1).wait(33));

	// 图层 31              复制 14
	this.instance_18 = new lib.元件19();
	this.instance_18.setTransform(-38.5,899.2,0.544,0.544,0,0,0,16.9,35.7);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(337).to({_off:false},0).wait(1).to({regY:30.3,y:839.9,alpha:0.101},0).wait(1).to({y:795.3,alpha:0.181},0).wait(1).to({y:758,alpha:0.247},0).wait(1).to({y:725.7,alpha:0.305},0).wait(1).to({y:697.2,alpha:0.356},0).wait(1).to({y:671.8,alpha:0.402},0).wait(1).to({y:648.8,alpha:0.443},0).wait(1).to({y:627.9,alpha:0.48},0).wait(1).to({y:608.7,alpha:0.515},0).wait(1).to({y:591,alpha:0.546},0).wait(1).to({y:574.6,alpha:0.576},0).wait(1).to({y:559.4,alpha:0.603},0).wait(1).to({y:545.2,alpha:0.628},0).wait(1).to({y:531.9,alpha:0.652},0).wait(1).to({y:519.5,alpha:0.674},0).wait(1).to({y:507.9,alpha:0.695},0).wait(1).to({y:496.9,alpha:0.715},0).wait(1).to({y:486.7,alpha:0.733},0).wait(1).to({y:477,alpha:0.75},0).wait(1).to({y:467.9,alpha:0.767},0).wait(1).to({y:459.2,alpha:0.782},0).wait(1).to({y:451.1,alpha:0.797},0).wait(1).to({y:443.5,alpha:0.81},0).wait(1).to({y:436.2,alpha:0.823},0).wait(1).to({y:429.4,alpha:0.836},0).wait(1).to({y:422.9,alpha:0.847},0).wait(1).to({y:416.8,alpha:0.858},0).wait(1).to({y:411,alpha:0.868},0).wait(1).to({y:405.6,alpha:0.878},0).wait(1).to({y:400.4,alpha:0.887},0).wait(1).to({y:395.6,alpha:0.896},0).wait(1).to({y:391,alpha:0.904},0).wait(1).to({y:386.7,alpha:0.912},0).wait(1).to({y:382.6,alpha:0.919},0).wait(1).to({y:378.7,alpha:0.926},0).wait(1).to({y:375.1,alpha:0.933},0).wait(1).to({y:371.7,alpha:0.939},0).wait(1).to({y:368.6,alpha:0.944},0).wait(1).to({y:365.6,alpha:0.95},0).wait(1).to({y:362.8,alpha:0.955},0).wait(1).to({y:360.2,alpha:0.959},0).wait(1).to({y:357.8,alpha:0.964},0).wait(1).to({y:355.5,alpha:0.968},0).wait(1).to({y:353.4,alpha:0.972},0).wait(1).to({y:351.5,alpha:0.975},0).wait(1).to({y:349.7,alpha:0.978},0).wait(1).to({y:348.1,alpha:0.981},0).wait(1).to({y:346.6,alpha:0.984},0).wait(1).to({y:345.2,alpha:0.986},0).wait(1).to({y:344,alpha:0.989},0).wait(1).to({y:342.9,alpha:0.99},0).wait(1).to({y:341.9,alpha:0.992},0).wait(1).to({y:341,alpha:0.994},0).wait(1).to({y:340.2,alpha:0.995},0).wait(1).to({y:339.6,alpha:0.996},0).wait(1).to({y:339,alpha:0.997},0).wait(1).to({y:338.5,alpha:0.998},0).wait(1).to({y:338.2,alpha:0.999},0).wait(1).to({y:337.9},0).wait(1).to({y:337.7,alpha:1},0).wait(1).to({y:337.6},0).wait(1).to({regY:35.7,y:340.5},0).wait(28).to({regY:30.3,y:337.4},0).wait(1).to({y:336.7},0).wait(1).to({y:335.7},0).wait(1).to({y:334.2},0).wait(1).to({y:332.3},0).wait(1).to({y:329.9},0).wait(1).to({y:327},0).wait(1).to({y:323.6},0).wait(1).to({y:319.7},0).wait(1).to({y:315.2},0).wait(1).to({y:310.1},0).wait(1).to({y:304.5},0).wait(1).to({y:298.2},0).wait(1).to({y:291.3},0).wait(1).to({y:283.8},0).wait(1).to({y:275.6},0).wait(1).to({y:266.7},0).wait(1).to({y:257.1},0).wait(1).to({y:246.8},0).wait(1).to({y:235.8},0).wait(1).to({y:224},0).wait(1).to({y:211.5},0).wait(1).to({y:198.3},0).wait(1).to({y:184.4},0).wait(1).to({y:169.7},0).wait(1).to({y:154.5},0).wait(1).to({y:138.6},0).wait(1).to({y:122.1},0).wait(1).to({y:105.2},0).wait(1).to({y:87.8},0).wait(1).to({y:70.2},0).wait(1).to({y:52.3},0).wait(1).to({y:34.3},0).wait(1).to({y:16.4},0).wait(1).to({y:-1.4},0).wait(1).to({y:-18.9},0).wait(1).to({y:-36.1},0).wait(1).to({y:-52.8},0).wait(1).to({y:-68.9},0).wait(1).to({y:-84.3},0).wait(1).to({y:-99},0).wait(1).to({y:-112.9},0).wait(1).to({y:-126},0).wait(1).to({y:-138.1},0).wait(1).to({y:-149.4},0).wait(1).to({y:-159.8},0).wait(1).to({y:-169.3},0).wait(1).to({y:-177.9},0).wait(1).to({y:-185.7},0).wait(1).to({y:-192.5},0).wait(1).to({y:-198.6},0).wait(1).to({y:-203.8},0).wait(1).to({y:-208.2},0).wait(1).to({y:-211.9},0).wait(1).to({y:-214.9},0).wait(1).to({y:-217.1},0).wait(1).to({y:-218.7},0).wait(1).to({y:-219.6},0).wait(1).to({regY:35.7,y:-217},0).to({_off:true},1).wait(29));

	// 图层 31             复制 13
	this.instance_19 = new lib.元件19();
	this.instance_19.setTransform(55.6,885.5,0.544,0.544,0,0,0,16.9,35.7);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(348).to({_off:false},0).wait(1).to({regY:30.3,y:812,alpha:0.101},0).wait(1).to({y:756,alpha:0.181},0).wait(1).to({y:709.1,alpha:0.247},0).wait(1).to({y:668.6,alpha:0.305},0).wait(1).to({y:632.9,alpha:0.356},0).wait(1).to({y:601,alpha:0.402},0).wait(1).to({y:572.2,alpha:0.443},0).wait(1).to({y:545.9,alpha:0.48},0).wait(1).to({y:521.8,alpha:0.515},0).wait(1).to({y:499.6,alpha:0.546},0).wait(1).to({y:479,alpha:0.576},0).wait(1).to({y:459.9,alpha:0.603},0).wait(1).to({y:442.1,alpha:0.628},0).wait(1).to({y:425.5,alpha:0.652},0).wait(1).to({y:409.9,alpha:0.674},0).wait(1).to({y:395.3,alpha:0.695},0).wait(1).to({y:381.6,alpha:0.715},0).wait(1).to({y:368.7,alpha:0.733},0).wait(1).to({y:356.5,alpha:0.75},0).wait(1).to({y:345.1,alpha:0.767},0).wait(1).to({y:334.3,alpha:0.782},0).wait(1).to({y:324.1,alpha:0.797},0).wait(1).to({y:314.5,alpha:0.81},0).wait(1).to({y:305.4,alpha:0.823},0).wait(1).to({y:296.8,alpha:0.836},0).wait(1).to({y:288.7,alpha:0.847},0).wait(1).to({y:281,alpha:0.858},0).wait(1).to({y:273.8,alpha:0.868},0).wait(1).to({y:266.9,alpha:0.878},0).wait(1).to({y:260.5,alpha:0.887},0).wait(1).to({y:254.4,alpha:0.896},0).wait(1).to({y:248.6,alpha:0.904},0).wait(1).to({y:243.2,alpha:0.912},0).wait(1).to({y:238.1,alpha:0.919},0).wait(1).to({y:233.3,alpha:0.926},0).wait(1).to({y:228.8,alpha:0.933},0).wait(1).to({y:224.5,alpha:0.939},0).wait(1).to({y:220.5,alpha:0.944},0).wait(1).to({y:216.8,alpha:0.95},0).wait(1).to({y:213.3,alpha:0.955},0).wait(1).to({y:210,alpha:0.959},0).wait(1).to({y:207,alpha:0.964},0).wait(1).to({y:204.1,alpha:0.968},0).wait(1).to({y:201.5,alpha:0.972},0).wait(1).to({y:199.1,alpha:0.975},0).wait(1).to({y:196.9,alpha:0.978},0).wait(1).to({y:194.8,alpha:0.981},0).wait(1).to({y:192.9,alpha:0.984},0).wait(1).to({y:191.2,alpha:0.986},0).wait(1).to({y:189.7,alpha:0.989},0).wait(1).to({y:188.3,alpha:0.99},0).wait(1).to({y:187,alpha:0.992},0).wait(1).to({y:185.9,alpha:0.994},0).wait(1).to({y:185,alpha:0.995},0).wait(1).to({y:184.1,alpha:0.996},0).wait(1).to({y:183.4,alpha:0.997},0).wait(1).to({y:182.8,alpha:0.998},0).wait(1).to({y:182.4,alpha:0.999},0).wait(1).to({y:182},0).wait(1).to({y:181.8,alpha:1},0).wait(1).to({y:181.6},0).wait(1).to({regY:35.7,y:184.6},0).wait(23).to({regY:30.3,y:181.4},0).wait(1).to({y:180.8},0).wait(1).to({y:179.8},0).wait(1).to({y:178.3},0).wait(1).to({y:176.4},0).wait(1).to({y:173.9},0).wait(1).to({y:171.1},0).wait(1).to({y:167.6},0).wait(1).to({y:163.7},0).wait(1).to({y:159.2},0).wait(1).to({y:154.2},0).wait(1).to({y:148.5},0).wait(1).to({y:142.3},0).wait(1).to({y:135.4},0).wait(1).to({y:127.8},0).wait(1).to({y:119.6},0).wait(1).to({y:110.7},0).wait(1).to({y:101.1},0).wait(1).to({y:90.8},0).wait(1).to({y:79.8},0).wait(1).to({y:68},0).wait(1).to({y:55.6},0).wait(1).to({y:42.3},0).wait(1).to({y:28.4},0).wait(1).to({y:13.8},0).wait(1).to({y:-1.4},0).wait(1).to({y:-17.3},0).wait(1).to({y:-33.8},0).wait(1).to({y:-50.7},0).wait(1).to({y:-68.1},0).wait(1).to({y:-85.7},0).wait(1).to({y:-103.6},0).wait(1).to({y:-121.6},0).wait(1).to({y:-139.5},0).wait(1).to({y:-157.3},0).wait(1).to({y:-174.9},0).wait(1).to({y:-192},0).wait(1).to({y:-208.7},0).wait(1).to({y:-224.8},0).wait(1).to({y:-240.3},0).wait(1).to({y:-254.9},0).wait(1).to({y:-268.8},0).wait(1).to({y:-281.9},0).wait(1).to({y:-294.1},0).wait(1).to({y:-305.4},0).wait(1).to({y:-315.8},0).wait(1).to({y:-325.3},0).wait(1).to({y:-333.9},0).wait(1).to({y:-341.6},0).wait(1).to({y:-348.5},0).wait(1).to({y:-354.5},0).wait(1).to({y:-359.8},0).wait(1).to({y:-364.2},0).wait(1).to({y:-367.9},0).wait(1).to({y:-370.8},0).wait(1).to({y:-373.1},0).wait(1).to({y:-374.6},0).wait(1).to({y:-375.5},0).wait(1).to({regY:35.7,y:-372.9},0).to({_off:true},1).wait(23));

	// 图层 31            复制 12
	this.instance_20 = new lib.元件19();
	this.instance_20.setTransform(307,1224.7,0.767,0.767,0,0,0,16.9,35.7);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(340).to({_off:false},0).wait(1).to({regY:30.3,y:1127.7,alpha:0.101},0).wait(1).to({y:1054,alpha:0.181},0).wait(1).to({y:992.3,alpha:0.247},0).wait(1).to({y:938.9,alpha:0.305},0).wait(1).to({y:892,alpha:0.356},0).wait(1).to({y:850,alpha:0.402},0).wait(1).to({y:812,alpha:0.443},0).wait(1).to({y:777.4,alpha:0.48},0).wait(1).to({y:745.7,alpha:0.515},0).wait(1).to({y:716.4,alpha:0.546},0).wait(1).to({y:689.4,alpha:0.576},0).wait(1).to({y:664.2,alpha:0.603},0).wait(1).to({y:640.8,alpha:0.628},0).wait(1).to({y:618.9,alpha:0.652},0).wait(1).to({y:598.4,alpha:0.674},0).wait(1).to({y:579.2,alpha:0.695},0).wait(1).to({y:561.1,alpha:0.715},0).wait(1).to({y:544.1,alpha:0.733},0).wait(1).to({y:528.2,alpha:0.75},0).wait(1).to({y:513.1,alpha:0.767},0).wait(1).to({y:498.9,alpha:0.782},0).wait(1).to({y:485.5,alpha:0.797},0).wait(1).to({y:472.8,alpha:0.81},0).wait(1).to({y:460.8,alpha:0.823},0).wait(1).to({y:449.5,alpha:0.836},0).wait(1).to({y:438.8,alpha:0.847},0).wait(1).to({y:428.7,alpha:0.858},0).wait(1).to({y:419.2,alpha:0.868},0).wait(1).to({y:410.2,alpha:0.878},0).wait(1).to({y:401.7,alpha:0.887},0).wait(1).to({y:393.7,alpha:0.896},0).wait(1).to({y:386.1,alpha:0.904},0).wait(1).to({y:379,alpha:0.912},0).wait(1).to({y:372.2,alpha:0.919},0).wait(1).to({y:365.9,alpha:0.926},0).wait(1).to({y:359.9,alpha:0.933},0).wait(1).to({y:354.3,alpha:0.939},0).wait(1).to({y:349.1,alpha:0.944},0).wait(1).to({y:344.2,alpha:0.95},0).wait(1).to({y:339.6,alpha:0.955},0).wait(1).to({y:335.3,alpha:0.959},0).wait(1).to({y:331.3,alpha:0.964},0).wait(1).to({y:327.5,alpha:0.968},0).wait(1).to({y:324.1,alpha:0.972},0).wait(1).to({y:320.9,alpha:0.975},0).wait(1).to({y:317.9,alpha:0.978},0).wait(1).to({y:315.2,alpha:0.981},0).wait(1).to({y:312.8,alpha:0.984},0).wait(1).to({y:310.5,alpha:0.986},0).wait(1).to({y:308.5,alpha:0.989},0).wait(1).to({y:306.6,alpha:0.99},0).wait(1).to({y:305,alpha:0.992},0).wait(1).to({y:303.5,alpha:0.994},0).wait(1).to({y:302.3,alpha:0.995},0).wait(1).to({y:301.2,alpha:0.996},0).wait(1).to({y:300.3,alpha:0.997},0).wait(1).to({y:299.5,alpha:0.998},0).wait(1).to({y:298.9,alpha:0.999},0).wait(1).to({y:298.4},0).wait(1).to({y:298.1,alpha:1},0).wait(1).to({y:297.9},0).wait(1).to({regY:35.7,y:302},0).wait(27).to({regY:30.3,y:297.6},0).wait(1).to({y:296.7},0).wait(1).to({y:295.3},0).wait(1).to({y:293.2},0).wait(1).to({y:290.5},0).wait(1).to({y:287.1},0).wait(1).to({y:283},0).wait(1).to({y:278.2},0).wait(1).to({y:272.6},0).wait(1).to({y:266.3},0).wait(1).to({y:259.2},0).wait(1).to({y:251.2},0).wait(1).to({y:242.4},0).wait(1).to({y:232.7},0).wait(1).to({y:222},0).wait(1).to({y:210.5},0).wait(1).to({y:197.9},0).wait(1).to({y:184.4},0).wait(1).to({y:169.9},0).wait(1).to({y:154.3},0).wait(1).to({y:137.7},0).wait(1).to({y:120.1},0).wait(1).to({y:101.5},0).wait(1).to({y:81.8},0).wait(1).to({y:61.2},0).wait(1).to({y:39.7},0).wait(1).to({y:17.3},0).wait(1).to({y:-5.9},0).wait(1).to({y:-29.7},0).wait(1).to({y:-54.2},0).wait(1).to({y:-79.1},0).wait(1).to({y:-104.3},0).wait(1).to({y:-129.6},0).wait(1).to({y:-154.9},0).wait(1).to({y:-180},0).wait(1).to({y:-204.8},0).wait(1).to({y:-229},0).wait(1).to({y:-252.5},0).wait(1).to({y:-275.2},0).wait(1).to({y:-297},0).wait(1).to({y:-317.7},0).wait(1).to({y:-337.3},0).wait(1).to({y:-355.7},0).wait(1).to({y:-372.9},0).wait(1).to({y:-388.8},0).wait(1).to({y:-403.5},0).wait(1).to({y:-416.9},0).wait(1).to({y:-429},0).wait(1).to({y:-439.9},0).wait(1).to({y:-449.6},0).wait(1).to({y:-458.1},0).wait(1).to({y:-465.5},0).wait(1).to({y:-471.7},0).wait(1).to({y:-476.9},0).wait(1).to({y:-481.1},0).wait(1).to({y:-484.2},0).wait(1).to({y:-486.4},0).wait(1).to({y:-487.7},0).wait(1).to({regY:35.8,y:-484},0).to({_off:true},1).wait(27));

	// 图层 31           复制 11
	this.instance_21 = new lib.元件19();
	this.instance_21.setTransform(252.8,607.9,0.315,0.315,0,0,0,16.9,35.7);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(342).to({_off:false},0).wait(1).to({regY:30.3,y:570.1,alpha:0.101},0).wait(1).to({y:541.4,alpha:0.181},0).wait(1).to({y:517.5,alpha:0.247},0).wait(1).to({y:496.8,alpha:0.305},0).wait(1).to({y:478.5,alpha:0.356},0).wait(1).to({y:462.2,alpha:0.402},0).wait(1).to({y:447.4,alpha:0.443},0).wait(1).to({y:434,alpha:0.48},0).wait(1).to({y:421.7,alpha:0.515},0).wait(1).to({y:410.3,alpha:0.546},0).wait(1).to({y:399.8,alpha:0.576},0).wait(1).to({y:390.1,alpha:0.603},0).wait(1).to({y:381,alpha:0.628},0).wait(1).to({y:372.4,alpha:0.652},0).wait(1).to({y:364.5,alpha:0.674},0).wait(1).to({y:357,alpha:0.695},0).wait(1).to({y:350,alpha:0.715},0).wait(1).to({y:343.4,alpha:0.733},0).wait(1).to({y:337.2,alpha:0.75},0).wait(1).to({y:331.3,alpha:0.767},0).wait(1).to({y:325.8,alpha:0.782},0).wait(1).to({y:320.6,alpha:0.797},0).wait(1).to({y:315.7,alpha:0.81},0).wait(1).to({y:311,alpha:0.823},0).wait(1).to({y:306.7,alpha:0.836},0).wait(1).to({y:302.5,alpha:0.847},0).wait(1).to({y:298.6,alpha:0.858},0).wait(1).to({y:294.9,alpha:0.868},0).wait(1).to({y:291.4,alpha:0.878},0).wait(1).to({y:288.1,alpha:0.887},0).wait(1).to({y:285,alpha:0.896},0).wait(1).to({y:282,alpha:0.904},0).wait(1).to({y:279.3,alpha:0.912},0).wait(1).to({y:276.6,alpha:0.919},0).wait(1).to({y:274.2,alpha:0.926},0).wait(1).to({y:271.9,alpha:0.933},0).wait(1).to({y:269.7,alpha:0.939},0).wait(1).to({y:267.6,alpha:0.944},0).wait(1).to({y:265.7,alpha:0.95},0).wait(1).to({y:263.9,alpha:0.955},0).wait(1).to({y:262.3,alpha:0.959},0).wait(1).to({y:260.7,alpha:0.964},0).wait(1).to({y:259.3,alpha:0.968},0).wait(1).to({y:257.9,alpha:0.972},0).wait(1).to({y:256.7,alpha:0.975},0).wait(1).to({y:255.6,alpha:0.978},0).wait(1).to({y:254.5,alpha:0.981},0).wait(1).to({y:253.5,alpha:0.984},0).wait(1).to({y:252.7,alpha:0.986},0).wait(1).to({y:251.9,alpha:0.989},0).wait(1).to({y:251.2,alpha:0.99},0).wait(1).to({y:250.5,alpha:0.992},0).wait(1).to({y:250,alpha:0.994},0).wait(1).to({y:249.5,alpha:0.995},0).wait(1).to({y:249,alpha:0.996},0).wait(1).to({y:248.7,alpha:0.997},0).wait(1).to({y:248.4,alpha:0.998},0).wait(1).to({y:248.2,alpha:0.999},0).wait(1).to({y:248},0).wait(1).to({y:247.8,alpha:1},0).wait(2).to({regY:35.7,y:249.5},0).wait(22).to({regY:30.3,y:247.6},0).wait(1).to({y:247.3},0).wait(1).to({y:246.7},0).wait(1).to({y:245.8},0).wait(1).to({y:244.7},0).wait(1).to({y:243.3},0).wait(1).to({y:241.6},0).wait(1).to({y:239.7},0).wait(1).to({y:237.4},0).wait(1).to({y:234.8},0).wait(1).to({y:231.8},0).wait(1).to({y:228.6},0).wait(1).to({y:224.9},0).wait(1).to({y:220.9},0).wait(1).to({y:216.6},0).wait(1).to({y:211.8},0).wait(1).to({y:206.7},0).wait(1).to({y:201.1},0).wait(1).to({y:195.1},0).wait(1).to({y:188.7},0).wait(1).to({y:181.9},0).wait(1).to({y:174.6},0).wait(1).to({y:167},0).wait(1).to({y:158.9},0).wait(1).to({y:150.4},0).wait(1).to({y:141.6},0).wait(1).to({y:132.3},0).wait(1).to({y:122.8},0).wait(1).to({y:113},0).wait(1).to({y:102.9},0).wait(1).to({y:92.7},0).wait(1).to({y:82.3},0).wait(1).to({y:71.9},0).wait(1).to({y:61.5},0).wait(1).to({y:51.1},0).wait(1).to({y:41},0).wait(1).to({y:31},0).wait(1).to({y:21.3},0).wait(1).to({y:12},0).wait(1).to({y:3.1},0).wait(1).to({y:-5.4},0).wait(1).to({y:-13.5},0).wait(1).to({y:-21.1},0).wait(1).to({y:-28.1},0).wait(1).to({y:-34.7},0).wait(1).to({y:-40.7},0).wait(1).to({y:-46.2},0).wait(1).to({y:-51.2},0).wait(1).to({y:-55.7},0).wait(1).to({y:-59.7},0).wait(1).to({y:-63.2},0).wait(1).to({y:-66.2},0).wait(1).to({y:-68.8},0).wait(1).to({y:-70.9},0).wait(1).to({y:-72.6},0).wait(1).to({y:-73.9},0).wait(1).to({y:-74.8},0).wait(1).to({y:-75.4},0).wait(1).to({regY:35.7,y:-73.9},0).to({_off:true},1).wait(30));

	// 图层 31          复制 10
	this.instance_22 = new lib.元件19();
	this.instance_22.setTransform(169.6,1069.3,0.685,0.685,0,0,0,16.9,35.7);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(345).to({_off:false},0).wait(1).to({regY:30.3,y:965.8,alpha:0.101},0).wait(1).to({y:886.7,alpha:0.181},0).wait(1).to({y:820.4,alpha:0.247},0).wait(1).to({y:763.2,alpha:0.305},0).wait(1).to({y:712.7,alpha:0.356},0).wait(1).to({y:667.6,alpha:0.402},0).wait(1).to({y:626.9,alpha:0.443},0).wait(1).to({y:589.7,alpha:0.48},0).wait(1).to({y:555.7,alpha:0.515},0).wait(1).to({y:524.3,alpha:0.546},0).wait(1).to({y:495.2,alpha:0.576},0).wait(1).to({y:468.2,alpha:0.603},0).wait(1).to({y:443,alpha:0.628},0).wait(1).to({y:419.5,alpha:0.652},0).wait(1).to({y:397.5,alpha:0.674},0).wait(1).to({y:376.9,alpha:0.695},0).wait(1).to({y:357.5,alpha:0.715},0).wait(1).to({y:339.3,alpha:0.733},0).wait(1).to({y:322.1,alpha:0.75},0).wait(1).to({y:305.9,alpha:0.767},0).wait(1).to({y:290.6,alpha:0.782},0).wait(1).to({y:276.2,alpha:0.797},0).wait(1).to({y:262.6,alpha:0.81},0).wait(1).to({y:249.8,alpha:0.823},0).wait(1).to({y:237.7,alpha:0.836},0).wait(1).to({y:226.2,alpha:0.847},0).wait(1).to({y:215.3,alpha:0.858},0).wait(1).to({y:205.1,alpha:0.868},0).wait(1).to({y:195.4,alpha:0.878},0).wait(1).to({y:186.3,alpha:0.887},0).wait(1).to({y:177.7,alpha:0.896},0).wait(1).to({y:169.6,alpha:0.904},0).wait(1).to({y:161.9,alpha:0.912},0).wait(1).to({y:154.7,alpha:0.919},0).wait(1).to({y:147.9,alpha:0.926},0).wait(1).to({y:141.5,alpha:0.933},0).wait(1).to({y:135.4,alpha:0.939},0).wait(1).to({y:129.8,alpha:0.944},0).wait(1).to({y:124.5,alpha:0.95},0).wait(1).to({y:119.6,alpha:0.955},0).wait(1).to({y:115,alpha:0.959},0).wait(1).to({y:110.7,alpha:0.964},0).wait(1).to({y:106.7,alpha:0.968},0).wait(1).to({y:103,alpha:0.972},0).wait(1).to({y:99.5,alpha:0.975},0).wait(1).to({y:96.4,alpha:0.978},0).wait(1).to({y:93.5,alpha:0.981},0).wait(1).to({y:90.8,alpha:0.984},0).wait(1).to({y:88.4,alpha:0.986},0).wait(1).to({y:86.2,alpha:0.989},0).wait(1).to({y:84.2,alpha:0.99},0).wait(1).to({y:82.5,alpha:0.992},0).wait(1).to({y:80.9,alpha:0.994},0).wait(1).to({y:79.5,alpha:0.995},0).wait(1).to({y:78.4,alpha:0.996},0).wait(1).to({y:77.4,alpha:0.997},0).wait(1).to({y:76.6,alpha:0.998},0).wait(1).to({y:75.9,alpha:0.999},0).wait(1).to({y:75.4},0).wait(1).to({y:75.1,alpha:1},0).wait(1).to({y:74.9},0).wait(1).to({regY:35.7,y:78.5},0).wait(23).to({regY:30.3,y:74.5},0).wait(1).to({y:73.8},0).wait(1).to({y:72.5},0).wait(1).to({y:70.6},0).wait(1).to({y:68.2},0).wait(1).to({y:65.2},0).wait(1).to({y:61.5},0).wait(1).to({y:57.2},0).wait(1).to({y:52.3},0).wait(1).to({y:46.6},0).wait(1).to({y:40.2},0).wait(1).to({y:33.1},0).wait(1).to({y:25.2},0).wait(1).to({y:16.6},0).wait(1).to({y:7.1},0).wait(1).to({y:-3.2},0).wait(1).to({y:-14.4},0).wait(1).to({y:-26.5},0).wait(1).to({y:-39.5},0).wait(1).to({y:-53.4},0).wait(1).to({y:-68.2},0).wait(1).to({y:-84},0).wait(1).to({y:-100.6},0).wait(1).to({y:-118.2},0).wait(1).to({y:-136.6},0).wait(1).to({y:-155.8},0).wait(1).to({y:-175.9},0).wait(1).to({y:-196.6},0).wait(1).to({y:-217.9},0).wait(1).to({y:-239.8},0).wait(1).to({y:-262},0).wait(1).to({y:-284.6},0).wait(1).to({y:-307.2},0).wait(1).to({y:-329.8},0).wait(1).to({y:-352.3},0).wait(1).to({y:-374.4},0).wait(1).to({y:-396},0).wait(1).to({y:-417},0).wait(1).to({y:-437.3},0).wait(1).to({y:-456.8},0).wait(1).to({y:-475.3},0).wait(1).to({y:-492.8},0).wait(1).to({y:-509.2},0).wait(1).to({y:-524.6},0).wait(1).to({y:-538.8},0).wait(1).to({y:-551.9},0).wait(1).to({y:-563.9},0).wait(1).to({y:-574.7},0).wait(1).to({y:-584.5},0).wait(1).to({y:-593.1},0).wait(1).to({y:-600.7},0).wait(1).to({y:-607.3},0).wait(1).to({y:-612.9},0).wait(1).to({y:-617.5},0).wait(1).to({y:-621.3},0).wait(1).to({y:-624.1},0).wait(1).to({y:-626.1},0).wait(1).to({y:-627.2},0).wait(1).to({regY:35.7,y:-623.9},0).to({_off:true},1).wait(26));

	// 图层 31         复制 9
	this.instance_23 = new lib.元件19();
	this.instance_23.setTransform(23.4,849,0.544,0.544,0,0,0,16.9,35.7);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(341).to({_off:false},0).wait(1).to({regY:30.3,y:763.4,alpha:0.101},0).wait(1).to({y:697.9,alpha:0.181},0).wait(1).to({y:643.1,alpha:0.247},0).wait(1).to({y:595.7,alpha:0.305},0).wait(1).to({y:553.9,alpha:0.356},0).wait(1).to({y:516.6,alpha:0.402},0).wait(1).to({y:482.8,alpha:0.443},0).wait(1).to({y:452.1,alpha:0.48},0).wait(1).to({y:423.9,alpha:0.515},0).wait(1).to({y:397.9,alpha:0.546},0).wait(1).to({y:373.9,alpha:0.576},0).wait(1).to({y:351.5,alpha:0.603},0).wait(1).to({y:330.7,alpha:0.628},0).wait(1).to({y:311.2,alpha:0.652},0).wait(1).to({y:293,alpha:0.674},0).wait(1).to({y:275.9,alpha:0.695},0).wait(1).to({y:259.9,alpha:0.715},0).wait(1).to({y:244.8,alpha:0.733},0).wait(1).to({y:230.6,alpha:0.75},0).wait(1).to({y:217.2,alpha:0.767},0).wait(1).to({y:204.6,alpha:0.782},0).wait(1).to({y:192.6,alpha:0.797},0).wait(1).to({y:181.4,alpha:0.81},0).wait(1).to({y:170.7,alpha:0.823},0).wait(1).to({y:160.7,alpha:0.836},0).wait(1).to({y:151.2,alpha:0.847},0).wait(1).to({y:142.2,alpha:0.858},0).wait(1).to({y:133.8,alpha:0.868},0).wait(1).to({y:125.8,alpha:0.878},0).wait(1).to({y:118.2,alpha:0.887},0).wait(1).to({y:111.1,alpha:0.896},0).wait(1).to({y:104.3,alpha:0.904},0).wait(1).to({y:98,alpha:0.912},0).wait(1).to({y:92,alpha:0.919},0).wait(1).to({y:86.4,alpha:0.926},0).wait(1).to({y:81.1,alpha:0.933},0).wait(1).to({y:76.1,alpha:0.939},0).wait(1).to({y:71.4,alpha:0.944},0).wait(1).to({y:67.1,alpha:0.95},0).wait(1).to({y:63,alpha:0.955},0).wait(1).to({y:59.1,alpha:0.959},0).wait(1).to({y:55.6,alpha:0.964},0).wait(1).to({y:52.3,alpha:0.968},0).wait(1).to({y:49.2,alpha:0.972},0).wait(1).to({y:46.4,alpha:0.975},0).wait(1).to({y:43.7,alpha:0.978},0).wait(1).to({y:41.3,alpha:0.981},0).wait(1).to({y:39.1,alpha:0.984},0).wait(1).to({y:37.1,alpha:0.986},0).wait(1).to({y:35.3,alpha:0.989},0).wait(1).to({y:33.7,alpha:0.99},0).wait(1).to({y:32.2,alpha:0.992},0).wait(1).to({y:31,alpha:0.994},0).wait(1).to({y:29.8,alpha:0.995},0).wait(1).to({y:28.9,alpha:0.996},0).wait(1).to({y:28,alpha:0.997},0).wait(1).to({y:27.4,alpha:0.998},0).wait(1).to({y:26.8,alpha:0.999},0).wait(1).to({y:26.4},0).wait(1).to({y:26.1,alpha:1},0).wait(1).to({y:26},0).wait(1).to({regY:35.7,y:28.9},0).wait(20).to({regY:30.3,y:25.7},0).wait(1).to({y:25.1},0).wait(1).to({y:24.1},0).wait(1).to({y:22.6},0).wait(1).to({y:20.7},0).wait(1).to({y:18.2},0).wait(1).to({y:15.4},0).wait(1).to({y:12},0).wait(1).to({y:8.1},0).wait(1).to({y:3.6},0).wait(1).to({y:-1.5},0).wait(1).to({y:-7.1},0).wait(1).to({y:-13.4},0).wait(1).to({y:-20.3},0).wait(1).to({y:-27.8},0).wait(1).to({y:-36},0).wait(1).to({y:-44.9},0).wait(1).to({y:-54.5},0).wait(1).to({y:-64.8},0).wait(1).to({y:-75.8},0).wait(1).to({y:-87.6},0).wait(1).to({y:-100.1},0).wait(1).to({y:-113.3},0).wait(1).to({y:-127.2},0).wait(1).to({y:-141.9},0).wait(1).to({y:-157.1},0).wait(1).to({y:-173},0).wait(1).to({y:-189.5},0).wait(1).to({y:-206.4},0).wait(1).to({y:-223.8},0).wait(1).to({y:-241.4},0).wait(1).to({y:-259.3},0).wait(1).to({y:-277.3},0).wait(1).to({y:-295.2},0).wait(1).to({y:-313},0).wait(1).to({y:-330.6},0).wait(1).to({y:-347.7},0).wait(1).to({y:-364.4},0).wait(1).to({y:-380.5},0).wait(1).to({y:-396},0).wait(1).to({y:-410.6},0).wait(1).to({y:-424.5},0).wait(1).to({y:-437.6},0).wait(1).to({y:-449.8},0).wait(1).to({y:-461.1},0).wait(1).to({y:-471.5},0).wait(1).to({y:-481},0).wait(1).to({y:-489.6},0).wait(1).to({y:-497.3},0).wait(1).to({y:-504.2},0).wait(1).to({y:-510.2},0).wait(1).to({y:-515.5},0).wait(1).to({y:-519.9},0).wait(1).to({y:-523.6},0).wait(1).to({y:-526.5},0).wait(1).to({y:-528.8},0).wait(1).to({y:-530.3},0).wait(1).to({y:-531.2},0).wait(1).to({regY:35.7,y:-528.6},0).to({_off:true},1).wait(33));

	// 图层 31        复制 8
	this.instance_24 = new lib.元件19();
	this.instance_24.setTransform(420,788.8,0.484,0.484,0,0,0,16.9,35.8);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(337).to({_off:false},0).wait(1).to({regY:30.3,y:718.6,alpha:0.101},0).wait(1).to({y:665.1,alpha:0.181},0).wait(1).to({y:620.3,alpha:0.247},0).wait(1).to({y:581.6,alpha:0.305},0).wait(1).to({y:547.4,alpha:0.356},0).wait(1).to({y:516.9,alpha:0.402},0).wait(1).to({y:489.4,alpha:0.443},0).wait(1).to({y:464.3,alpha:0.48},0).wait(1).to({y:441.2,alpha:0.515},0).wait(1).to({y:420,alpha:0.546},0).wait(1).to({y:400.3,alpha:0.576},0).wait(1).to({y:382.1,alpha:0.603},0).wait(1).to({y:365,alpha:0.628},0).wait(1).to({y:349.2,alpha:0.652},0).wait(1).to({y:334.3,alpha:0.674},0).wait(1).to({y:320.3,alpha:0.695},0).wait(1).to({y:307.2,alpha:0.715},0).wait(1).to({y:294.9,alpha:0.733},0).wait(1).to({y:283.2,alpha:0.75},0).wait(1).to({y:272.3,alpha:0.767},0).wait(1).to({y:262,alpha:0.782},0).wait(1).to({y:252.2,alpha:0.797},0).wait(1).to({y:243,alpha:0.81},0).wait(1).to({y:234.3,alpha:0.823},0).wait(1).to({y:226.1,alpha:0.836},0).wait(1).to({y:218.4,alpha:0.847},0).wait(1).to({y:211.1,alpha:0.858},0).wait(1).to({y:204.1,alpha:0.868},0).wait(1).to({y:197.6,alpha:0.878},0).wait(1).to({y:191.4,alpha:0.887},0).wait(1).to({y:185.6,alpha:0.896},0).wait(1).to({y:180.1,alpha:0.904},0).wait(1).to({y:174.9,alpha:0.912},0).wait(1).to({y:170,alpha:0.919},0).wait(1).to({y:165.4,alpha:0.926},0).wait(1).to({y:161.1,alpha:0.933},0).wait(1).to({y:157,alpha:0.939},0).wait(1).to({y:153.2,alpha:0.944},0).wait(1).to({y:149.6,alpha:0.95},0).wait(1).to({y:146.3,alpha:0.955},0).wait(1).to({y:143.2,alpha:0.959},0).wait(1).to({y:140.3,alpha:0.964},0).wait(1).to({y:137.6,alpha:0.968},0).wait(1).to({y:135,alpha:0.972},0).wait(1).to({y:132.7,alpha:0.975},0).wait(1).to({y:130.6,alpha:0.978},0).wait(1).to({y:128.6,alpha:0.981},0).wait(1).to({y:126.8,alpha:0.984},0).wait(1).to({y:125.2,alpha:0.986},0).wait(1).to({y:123.7,alpha:0.989},0).wait(1).to({y:122.4,alpha:0.99},0).wait(1).to({y:121.2,alpha:0.992},0).wait(1).to({y:120.1,alpha:0.994},0).wait(1).to({y:119.2,alpha:0.995},0).wait(1).to({y:118.4,alpha:0.996},0).wait(1).to({y:117.8,alpha:0.997},0).wait(1).to({y:117.2,alpha:0.998},0).wait(1).to({y:116.8,alpha:0.999},0).wait(1).to({y:116.4},0).wait(1).to({y:116.2,alpha:1},0).wait(1).to({y:116},0).wait(1).to({regY:35.6,y:118.7},0).wait(20).to({regY:30.3,y:115.9},0).wait(1).to({y:115.3},0).wait(1).to({y:114.4},0).wait(1).to({y:113.1},0).wait(1).to({y:111.4},0).wait(1).to({y:109.2},0).wait(1).to({y:106.7},0).wait(1).to({y:103.6},0).wait(1).to({y:100.1},0).wait(1).to({y:96.1},0).wait(1).to({y:91.6},0).wait(1).to({y:86.6},0).wait(1).to({y:81},0).wait(1).to({y:74.9},0).wait(1).to({y:68.2},0).wait(1).to({y:60.9},0).wait(1).to({y:53},0).wait(1).to({y:44.5},0).wait(1).to({y:35.3},0).wait(1).to({y:25.5},0).wait(1).to({y:15},0).wait(1).to({y:3.9},0).wait(1).to({y:-7.8},0).wait(1).to({y:-20.2},0).wait(1).to({y:-33.2},0).wait(1).to({y:-46.8},0).wait(1).to({y:-61},0).wait(1).to({y:-75.6},0).wait(1).to({y:-90.7},0).wait(1).to({y:-106.1},0).wait(1).to({y:-121.9},0).wait(1).to({y:-137.8},0).wait(1).to({y:-153.8},0).wait(1).to({y:-169.7},0).wait(1).to({y:-185.6},0).wait(1).to({y:-201.2},0).wait(1).to({y:-216.5},0).wait(1).to({y:-231.3},0).wait(1).to({y:-245.6},0).wait(1).to({y:-259.4},0).wait(1).to({y:-272.5},0).wait(1).to({y:-284.8},0).wait(1).to({y:-296.4},0).wait(1).to({y:-307.3},0).wait(1).to({y:-317.3},0).wait(1).to({y:-326.6},0).wait(1).to({y:-335},0).wait(1).to({y:-342.7},0).wait(1).to({y:-349.6},0).wait(1).to({y:-355.7},0).wait(1).to({y:-361.1},0).wait(1).to({y:-365.7},0).wait(1).to({y:-369.7},0).wait(1).to({y:-372.9},0).wait(1).to({y:-375.6},0).wait(1).to({y:-377.6},0).wait(1).to({y:-379},0).wait(1).to({y:-379.8},0).wait(1).to({regY:35.8,y:-377.5},0).to({_off:true},1).wait(37));

	// 图层 31       复制 7
	this.instance_25 = new lib.元件19();
	this.instance_25.setTransform(233.6,801.8,0.478,0.478,0,0,0,16.9,35.6);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(340).to({_off:false},0).wait(1).to({regY:30.3,y:721.9,alpha:0.101},0).wait(1).to({y:660.6,alpha:0.181},0).wait(1).to({y:609.2,alpha:0.247},0).wait(1).to({y:564.8,alpha:0.305},0).wait(1).to({y:525.7,alpha:0.356},0).wait(1).to({y:490.8,alpha:0.402},0).wait(1).to({y:459.2,alpha:0.443},0).wait(1).to({y:430.4,alpha:0.48},0).wait(1).to({y:404,alpha:0.515},0).wait(1).to({y:379.7,alpha:0.546},0).wait(1).to({y:357.2,alpha:0.576},0).wait(1).to({y:336.3,alpha:0.603},0).wait(1).to({y:316.8,alpha:0.628},0).wait(1).to({y:298.5,alpha:0.652},0).wait(1).to({y:281.5,alpha:0.674},0).wait(1).to({y:265.5,alpha:0.695},0).wait(1).to({y:250.5,alpha:0.715},0).wait(1).to({y:236.3,alpha:0.733},0).wait(1).to({y:223,alpha:0.75},0).wait(1).to({y:210.5,alpha:0.767},0).wait(1).to({y:198.7,alpha:0.782},0).wait(1).to({y:187.5,alpha:0.797},0).wait(1).to({y:177,alpha:0.81},0).wait(1).to({y:167,alpha:0.823},0).wait(1).to({y:157.6,alpha:0.836},0).wait(1).to({y:148.7,alpha:0.847},0).wait(1).to({y:140.3,alpha:0.858},0).wait(1).to({y:132.4,alpha:0.868},0).wait(1).to({y:124.9,alpha:0.878},0).wait(1).to({y:117.8,alpha:0.887},0).wait(1).to({y:111.1,alpha:0.896},0).wait(1).to({y:104.8,alpha:0.904},0).wait(1).to({y:98.9,alpha:0.912},0).wait(1).to({y:93.3,alpha:0.919},0).wait(1).to({y:88,alpha:0.926},0).wait(1).to({y:83.1,alpha:0.933},0).wait(1).to({y:78.4,alpha:0.939},0).wait(1).to({y:74,alpha:0.944},0).wait(1).to({y:69.9,alpha:0.95},0).wait(1).to({y:66.1,alpha:0.955},0).wait(1).to({y:62.5,alpha:0.959},0).wait(1).to({y:59.2,alpha:0.964},0).wait(1).to({y:56.1,alpha:0.968},0).wait(1).to({y:53.2,alpha:0.972},0).wait(1).to({y:50.6,alpha:0.975},0).wait(1).to({y:48.1,alpha:0.978},0).wait(1).to({y:45.9,alpha:0.981},0).wait(1).to({y:43.8,alpha:0.984},0).wait(1).to({y:41.9,alpha:0.986},0).wait(1).to({y:40.2,alpha:0.989},0).wait(1).to({y:38.7,alpha:0.99},0).wait(1).to({y:37.3,alpha:0.992},0).wait(1).to({y:36.1,alpha:0.994},0).wait(1).to({y:35.1,alpha:0.995},0).wait(1).to({y:34.2,alpha:0.996},0).wait(1).to({y:33.4,alpha:0.997},0).wait(1).to({y:32.8,alpha:0.998},0).wait(1).to({y:32.3,alpha:0.999},0).wait(1).to({y:31.9},0).wait(1).to({y:31.6,alpha:1},0).wait(1).to({y:31.5},0).wait(1).to({regY:35.6,y:34},0).wait(15).to({regY:30.3,y:31.2},0).wait(1).to({y:30.7},0).wait(1).to({y:29.8},0).wait(1).to({y:28.5},0).wait(1).to({y:26.8},0).wait(1).to({y:24.7},0).wait(1).to({y:22.1},0).wait(1).to({y:19.1},0).wait(1).to({y:15.7},0).wait(1).to({y:11.8},0).wait(1).to({y:7.3},0).wait(1).to({y:2.3},0).wait(1).to({y:-3.2},0).wait(1).to({y:-9.2},0).wait(1).to({y:-15.9},0).wait(1).to({y:-23.1},0).wait(1).to({y:-30.9},0).wait(1).to({y:-39.3},0).wait(1).to({y:-48.4},0).wait(1).to({y:-58.1},0).wait(1).to({y:-68.5},0).wait(1).to({y:-79.5},0).wait(1).to({y:-91.1},0).wait(1).to({y:-103.4},0).wait(1).to({y:-116.2},0).wait(1).to({y:-129.7},0).wait(1).to({y:-143.7},0).wait(1).to({y:-158.1},0).wait(1).to({y:-173},0).wait(1).to({y:-188.3},0).wait(1).to({y:-203.8},0).wait(1).to({y:-219.6},0).wait(1).to({y:-235.4},0).wait(1).to({y:-251.2},0).wait(1).to({y:-266.8},0).wait(1).to({y:-282.3},0).wait(1).to({y:-297.4},0).wait(1).to({y:-312.1},0).wait(1).to({y:-326.2},0).wait(1).to({y:-339.8},0).wait(1).to({y:-352.8},0).wait(1).to({y:-365},0).wait(1).to({y:-376.5},0).wait(1).to({y:-387.2},0).wait(1).to({y:-397.1},0).wait(1).to({y:-406.3},0).wait(1).to({y:-414.7},0).wait(1).to({y:-422.2},0).wait(1).to({y:-429},0).wait(1).to({y:-435.1},0).wait(1).to({y:-440.4},0).wait(1).to({y:-445},0).wait(1).to({y:-448.9},0).wait(1).to({y:-452.1},0).wait(1).to({y:-454.7},0).wait(1).to({y:-456.7},0).wait(1).to({y:-458.1},0).wait(1).to({y:-458.9},0).wait(1).to({regY:35.6,y:-456.6},0).to({_off:true},1).wait(39));

	// 图层 31      复制 6
	this.instance_26 = new lib.元件19();
	this.instance_26.setTransform(-79.6,903.7,0.544,0.544,0,0,0,16.9,35.7);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(337).to({_off:false},0).wait(1).to({regY:30.3,y:826.7,alpha:0.101},0).wait(1).to({y:767.9,alpha:0.181},0).wait(1).to({y:718.7,alpha:0.247},0).wait(1).to({y:676.2,alpha:0.305},0).wait(1).to({y:638.7,alpha:0.356},0).wait(1).to({y:605.2,alpha:0.402},0).wait(1).to({y:574.9,alpha:0.443},0).wait(1).to({y:547.4,alpha:0.48},0).wait(1).to({y:522.1,alpha:0.515},0).wait(1).to({y:498.8,alpha:0.546},0).wait(1).to({y:477.2,alpha:0.576},0).wait(1).to({y:457.1,alpha:0.603},0).wait(1).to({y:438.4,alpha:0.628},0).wait(1).to({y:421,alpha:0.652},0).wait(1).to({y:404.6,alpha:0.674},0).wait(1).to({y:389.3,alpha:0.695},0).wait(1).to({y:374.9,alpha:0.715},0).wait(1).to({y:361.4,alpha:0.733},0).wait(1).to({y:348.6,alpha:0.75},0).wait(1).to({y:336.6,alpha:0.767},0).wait(1).to({y:325.3,alpha:0.782},0).wait(1).to({y:314.6,alpha:0.797},0).wait(1).to({y:304.5,alpha:0.81},0).wait(1).to({y:294.9,alpha:0.823},0).wait(1).to({y:285.9,alpha:0.836},0).wait(1).to({y:277.4,alpha:0.847},0).wait(1).to({y:269.4,alpha:0.858},0).wait(1).to({y:261.8,alpha:0.868},0).wait(1).to({y:254.6,alpha:0.878},0).wait(1).to({y:247.8,alpha:0.887},0).wait(1).to({y:241.4,alpha:0.896},0).wait(1).to({y:235.4,alpha:0.904},0).wait(1).to({y:229.7,alpha:0.912},0).wait(1).to({y:224.3,alpha:0.919},0).wait(1).to({y:219.3,alpha:0.926},0).wait(1).to({y:214.5,alpha:0.933},0).wait(1).to({y:210,alpha:0.939},0).wait(1).to({y:205.8,alpha:0.944},0).wait(1).to({y:201.9,alpha:0.95},0).wait(1).to({y:198.3,alpha:0.955},0).wait(1).to({y:194.8,alpha:0.959},0).wait(1).to({y:191.6,alpha:0.964},0).wait(1).to({y:188.7,alpha:0.968},0).wait(1).to({y:185.9,alpha:0.972},0).wait(1).to({y:183.4,alpha:0.975},0).wait(1).to({y:181,alpha:0.978},0).wait(1).to({y:178.9,alpha:0.981},0).wait(1).to({y:176.9,alpha:0.984},0).wait(1).to({y:175.1,alpha:0.986},0).wait(1).to({y:173.5,alpha:0.989},0).wait(1).to({y:172,alpha:0.99},0).wait(1).to({y:170.7,alpha:0.992},0).wait(1).to({y:169.5,alpha:0.994},0).wait(1).to({y:168.5,alpha:0.995},0).wait(1).to({y:167.7,alpha:0.996},0).wait(1).to({y:166.9,alpha:0.997},0).wait(1).to({y:166.3,alpha:0.998},0).wait(1).to({y:165.8,alpha:0.999},0).wait(1).to({y:165.5},0).wait(1).to({y:165.2,alpha:1},0).wait(1).to({y:165},0).wait(1).to({regY:35.7,y:168},0).wait(25).to({regY:30.3,y:164.8},0).wait(1).to({y:164.2},0).wait(1).to({y:163.2},0).wait(1).to({y:161.7},0).wait(1).to({y:159.8},0).wait(1).to({y:157.3},0).wait(1).to({y:154.5},0).wait(1).to({y:151},0).wait(1).to({y:147.1},0).wait(1).to({y:142.6},0).wait(1).to({y:137.6},0).wait(1).to({y:131.9},0).wait(1).to({y:125.7},0).wait(1).to({y:118.8},0).wait(1).to({y:111.2},0).wait(1).to({y:103},0).wait(1).to({y:94.1},0).wait(1).to({y:84.5},0).wait(1).to({y:74.2},0).wait(1).to({y:63.2},0).wait(1).to({y:51.4},0).wait(1).to({y:39},0).wait(1).to({y:25.7},0).wait(1).to({y:11.9},0).wait(1).to({y:-2.8},0).wait(1).to({y:-18},0).wait(1).to({y:-33.9},0).wait(1).to({y:-50.4},0).wait(1).to({y:-67.3},0).wait(1).to({y:-84.7},0).wait(1).to({y:-102.3},0).wait(1).to({y:-120.2},0).wait(1).to({y:-138.2},0).wait(1).to({y:-156.1},0).wait(1).to({y:-173.9},0).wait(1).to({y:-191.5},0).wait(1).to({y:-208.6},0).wait(1).to({y:-225.3},0).wait(1).to({y:-241.4},0).wait(1).to({y:-256.9},0).wait(1).to({y:-271.5},0).wait(1).to({y:-285.4},0).wait(1).to({y:-298.5},0).wait(1).to({y:-310.7},0).wait(1).to({y:-322},0).wait(1).to({y:-332.4},0).wait(1).to({y:-341.9},0).wait(1).to({y:-350.5},0).wait(1).to({y:-358.2},0).wait(1).to({y:-365.1},0).wait(1).to({y:-371.1},0).wait(1).to({y:-376.4},0).wait(1).to({y:-380.8},0).wait(1).to({y:-384.5},0).wait(1).to({y:-387.4},0).wait(1).to({y:-389.7},0).wait(1).to({y:-391.2},0).wait(1).to({y:-392.1},0).wait(1).to({regY:35.7,y:-389.5},0).to({_off:true},1).wait(32));

	// 图层 31     复制 5
	this.instance_27 = new lib.元件19();
	this.instance_27.setTransform(3.3,1459.6,1.52,1.52,0,0,0,16.9,35.7);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(347).to({_off:false},0).wait(1).to({regY:30.3,y:1317.8,alpha:0.101},0).wait(1).to({y:1211.9,alpha:0.181},0).wait(1).to({y:1123.2,alpha:0.247},0).wait(1).to({y:1046.6,alpha:0.305},0).wait(1).to({y:979.1,alpha:0.356},0).wait(1).to({y:918.7,alpha:0.402},0).wait(1).to({y:864.1,alpha:0.443},0).wait(1).to({y:814.4,alpha:0.48},0).wait(1).to({y:768.8,alpha:0.515},0).wait(1).to({y:726.8,alpha:0.546},0).wait(1).to({y:687.9,alpha:0.576},0).wait(1).to({y:651.8,alpha:0.603},0).wait(1).to({y:618.1,alpha:0.628},0).wait(1).to({y:586.6,alpha:0.652},0).wait(1).to({y:557.2,alpha:0.674},0).wait(1).to({y:529.5,alpha:0.695},0).wait(1).to({y:503.6,alpha:0.715},0).wait(1).to({y:479.2,alpha:0.733},0).wait(1).to({y:456.2,alpha:0.75},0).wait(1).to({y:434.5,alpha:0.767},0).wait(1).to({y:414.1,alpha:0.782},0).wait(1).to({y:394.8,alpha:0.797},0).wait(1).to({y:376.6,alpha:0.81},0).wait(1).to({y:359.4,alpha:0.823},0).wait(1).to({y:343.2,alpha:0.836},0).wait(1).to({y:327.8,alpha:0.847},0).wait(1).to({y:313.3,alpha:0.858},0).wait(1).to({y:299.6,alpha:0.868},0).wait(1).to({y:286.7,alpha:0.878},0).wait(1).to({y:274.5,alpha:0.887},0).wait(1).to({y:262.9,alpha:0.896},0).wait(1).to({y:252,alpha:0.904},0).wait(1).to({y:241.8,alpha:0.912},0).wait(1).to({y:232.1,alpha:0.919},0).wait(1).to({y:223,alpha:0.926},0).wait(1).to({y:214.4,alpha:0.933},0).wait(1).to({y:206.4,alpha:0.939},0).wait(1).to({y:198.9,alpha:0.944},0).wait(1).to({y:191.8,alpha:0.95},0).wait(1).to({y:185.2,alpha:0.955},0).wait(1).to({y:179,alpha:0.959},0).wait(1).to({y:173.2,alpha:0.964},0).wait(1).to({y:167.9,alpha:0.968},0).wait(1).to({y:162.9,alpha:0.972},0).wait(1).to({y:158.3,alpha:0.975},0).wait(1).to({y:154.1,alpha:0.978},0).wait(1).to({y:150.2,alpha:0.981},0).wait(1).to({y:146.6,alpha:0.984},0).wait(1).to({y:143.4,alpha:0.986},0).wait(1).to({y:140.5,alpha:0.989},0).wait(1).to({y:137.8,alpha:0.99},0).wait(1).to({y:135.5,alpha:0.992},0).wait(1).to({y:133.4,alpha:0.994},0).wait(1).to({y:131.6,alpha:0.995},0).wait(1).to({y:130,alpha:0.996},0).wait(1).to({y:128.7,alpha:0.997},0).wait(1).to({y:127.6,alpha:0.998},0).wait(1).to({y:126.7,alpha:0.999},0).wait(1).to({y:126},0).wait(1).to({y:125.6,alpha:1},0).wait(1).to({y:125.3},0).wait(1).to({regY:35.8,y:133.5},0).wait(20).to({regY:30.3,y:124.8},0).wait(1).to({y:123.9},0).wait(1).to({y:122.4},0).wait(1).to({y:120.1},0).wait(1).to({y:117.2},0).wait(1).to({y:113.5},0).wait(1).to({y:109.1},0).wait(1).to({y:103.9},0).wait(1).to({y:97.9},0).wait(1).to({y:91.1},0).wait(1).to({y:83.4},0).wait(1).to({y:74.9},0).wait(1).to({y:65.3},0).wait(1).to({y:54.9},0).wait(1).to({y:43.5},0).wait(1).to({y:31},0).wait(1).to({y:17.5},0).wait(1).to({y:2.9},0).wait(1).to({y:-12.8},0).wait(1).to({y:-29.5},0).wait(1).to({y:-47.4},0).wait(1).to({y:-66.4},0).wait(1).to({y:-86.5},0).wait(1).to({y:-107.7},0).wait(1).to({y:-129.9},0).wait(1).to({y:-153.1},0).wait(1).to({y:-177.3},0).wait(1).to({y:-202.3},0).wait(1).to({y:-228},0).wait(1).to({y:-254.4},0).wait(1).to({y:-281.2},0).wait(1).to({y:-308.4},0).wait(1).to({y:-335.7},0).wait(1).to({y:-363},0).wait(1).to({y:-390},0).wait(1).to({y:-416.7},0).wait(1).to({y:-442.8},0).wait(1).to({y:-468.2},0).wait(1).to({y:-492.6},0).wait(1).to({y:-516.1},0).wait(1).to({y:-538.4},0).wait(1).to({y:-559.6},0).wait(1).to({y:-579.4},0).wait(1).to({y:-597.9},0).wait(1).to({y:-615.1},0).wait(1).to({y:-630.9},0).wait(1).to({y:-645.3},0).wait(1).to({y:-658.4},0).wait(1).to({y:-670.2},0).wait(1).to({y:-680.6},0).wait(1).to({y:-689.8},0).wait(1).to({y:-697.7},0).wait(1).to({y:-704.5},0).wait(1).to({y:-710.1},0).wait(1).to({y:-714.5},0).wait(1).to({y:-718},0).wait(1).to({y:-720.3},0).wait(1).to({y:-721.7},0).wait(1).to({regY:35.8,y:-713.9},0).to({_off:true},1).wait(27));

	// 图层 31    复制 4
	this.instance_28 = new lib.元件19();
	this.instance_28.setTransform(318.4,1389,1.56,1.56,0,0,0,16.9,35.8);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(341).to({_off:false},0).wait(1).to({regY:30.3,y:1243.3,alpha:0.101},0).wait(1).to({y:1134.6,alpha:0.181},0).wait(1).to({y:1043.5,alpha:0.247},0).wait(1).to({y:964.9,alpha:0.305},0).wait(1).to({y:895.6,alpha:0.356},0).wait(1).to({y:833.6,alpha:0.402},0).wait(1).to({y:777.6,alpha:0.443},0).wait(1).to({y:726.6,alpha:0.48},0).wait(1).to({y:679.8,alpha:0.515},0).wait(1).to({y:636.7,alpha:0.546},0).wait(1).to({y:596.8,alpha:0.576},0).wait(1).to({y:559.7,alpha:0.603},0).wait(1).to({y:525.1,alpha:0.628},0).wait(1).to({y:492.8,alpha:0.652},0).wait(1).to({y:462.6,alpha:0.674},0).wait(1).to({y:434.2,alpha:0.695},0).wait(1).to({y:407.6,alpha:0.715},0).wait(1).to({y:382.5,alpha:0.733},0).wait(1).to({y:359,alpha:0.75},0).wait(1).to({y:336.7,alpha:0.767},0).wait(1).to({y:315.8,alpha:0.782},0).wait(1).to({y:296,alpha:0.797},0).wait(1).to({y:277.3,alpha:0.81},0).wait(1).to({y:259.6,alpha:0.823},0).wait(1).to({y:243,alpha:0.836},0).wait(1).to({y:227.2,alpha:0.847},0).wait(1).to({y:212.3,alpha:0.858},0).wait(1).to({y:198.3,alpha:0.868},0).wait(1).to({y:185,alpha:0.878},0).wait(1).to({y:172.4,alpha:0.887},0).wait(1).to({y:160.6,alpha:0.896},0).wait(1).to({y:149.4,alpha:0.904},0).wait(1).to({y:138.9,alpha:0.912},0).wait(1).to({y:129,alpha:0.919},0).wait(1).to({y:119.6,alpha:0.926},0).wait(1).to({y:110.8,alpha:0.933},0).wait(1).to({y:102.6,alpha:0.939},0).wait(1).to({y:94.8,alpha:0.944},0).wait(1).to({y:87.6,alpha:0.95},0).wait(1).to({y:80.8,alpha:0.955},0).wait(1).to({y:74.4,alpha:0.959},0).wait(1).to({y:68.5,alpha:0.964},0).wait(1).to({y:63,alpha:0.968},0).wait(1).to({y:57.9,alpha:0.972},0).wait(1).to({y:53.2,alpha:0.975},0).wait(1).to({y:48.9,alpha:0.978},0).wait(1).to({y:44.9,alpha:0.981},0).wait(1).to({y:41.3,alpha:0.984},0).wait(1).to({y:38,alpha:0.986},0).wait(1).to({y:34.9,alpha:0.989},0).wait(1).to({y:32.2,alpha:0.99},0).wait(1).to({y:29.8,alpha:0.992},0).wait(1).to({y:27.7,alpha:0.994},0).wait(1).to({y:25.8,alpha:0.995},0).wait(1).to({y:24.2,alpha:0.996},0).wait(1).to({y:22.9,alpha:0.997},0).wait(1).to({y:21.7,alpha:0.998},0).wait(1).to({y:20.8,alpha:0.999},0).wait(1).to({y:20.1},0).wait(1).to({y:19.7,alpha:1},0).wait(1).to({y:19.4},0).wait(1).to({regY:35.8,y:27.9},0).wait(32).to({regY:30.3,y:19},0).wait(1).to({y:18},0).wait(1).to({y:16.4},0).wait(1).to({y:14.1},0).wait(1).to({y:11.1},0).wait(1).to({y:7.4},0).wait(1).to({y:2.8},0).wait(1).to({y:-2.5},0).wait(1).to({y:-8.6},0).wait(1).to({y:-15.6},0).wait(1).to({y:-23.5},0).wait(1).to({y:-32.3},0).wait(1).to({y:-42.1},0).wait(1).to({y:-52.8},0).wait(1).to({y:-64.6},0).wait(1).to({y:-77.4},0).wait(1).to({y:-91.2},0).wait(1).to({y:-106.2},0).wait(1).to({y:-122.3},0).wait(1).to({y:-139.5},0).wait(1).to({y:-157.8},0).wait(1).to({y:-177.3},0).wait(1).to({y:-198},0).wait(1).to({y:-219.7},0).wait(1).to({y:-242.5},0).wait(1).to({y:-266.3},0).wait(1).to({y:-291.1},0).wait(1).to({y:-316.8},0).wait(1).to({y:-343.2},0).wait(1).to({y:-370.3},0).wait(1).to({y:-397.8},0).wait(1).to({y:-425.7},0).wait(1).to({y:-453.7},0).wait(1).to({y:-481.7},0).wait(1).to({y:-509.5},0).wait(1).to({y:-536.9},0).wait(1).to({y:-563.7},0).wait(1).to({y:-589.7},0).wait(1).to({y:-614.8},0).wait(1).to({y:-638.9},0).wait(1).to({y:-661.8},0).wait(1).to({y:-683.5},0).wait(1).to({y:-703.8},0).wait(1).to({y:-722.9},0).wait(1).to({y:-740.5},0).wait(1).to({y:-756.7},0).wait(1).to({y:-771.5},0).wait(1).to({y:-784.9},0).wait(1).to({y:-797},0).wait(1).to({y:-807.7},0).wait(1).to({y:-817.1},0).wait(1).to({y:-825.3},0).wait(1).to({y:-832.2},0).wait(1).to({y:-837.9},0).wait(1).to({y:-842.5},0).wait(1).to({y:-846},0).wait(1).to({y:-848.5},0).wait(1).to({y:-849.9},0).wait(1).to({regY:35.8,y:-841.8},0).to({_off:true},1).wait(21));

	// 图层 31   复制 3
	this.instance_29 = new lib.元件19();
	this.instance_29.setTransform(234.5,944.7,1,1,0,0,0,16.9,35.8);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(337).to({_off:false},0).wait(1).to({regY:30.3,y:881.4,alpha:0.101},0).wait(1).to({y:835.5,alpha:0.181},0).wait(1).to({y:797.1,alpha:0.247},0).wait(1).to({y:763.9,alpha:0.305},0).wait(1).to({y:734.7,alpha:0.356},0).wait(1).to({y:708.6,alpha:0.402},0).wait(1).to({y:685,alpha:0.443},0).wait(1).to({y:663.5,alpha:0.48},0).wait(1).to({y:643.7,alpha:0.515},0).wait(1).to({y:625.5,alpha:0.546},0).wait(1).to({y:608.7,alpha:0.576},0).wait(1).to({y:593.1,alpha:0.603},0).wait(1).to({y:578.5,alpha:0.628},0).wait(1).to({y:564.9,alpha:0.652},0).wait(1).to({y:552.1,alpha:0.674},0).wait(1).to({y:540.2,alpha:0.695},0).wait(1).to({y:528.9,alpha:0.715},0).wait(1).to({y:518.4,alpha:0.733},0).wait(1).to({y:508.4,alpha:0.75},0).wait(1).to({y:499,alpha:0.767},0).wait(1).to({y:490.2,alpha:0.782},0).wait(1).to({y:481.8,alpha:0.797},0).wait(1).to({y:474,alpha:0.81},0).wait(1).to({y:466.5,alpha:0.823},0).wait(1).to({y:459.5,alpha:0.836},0).wait(1).to({y:452.9,alpha:0.847},0).wait(1).to({y:446.6,alpha:0.858},0).wait(1).to({y:440.6,alpha:0.868},0).wait(1).to({y:435,alpha:0.878},0).wait(1).to({y:429.7,alpha:0.887},0).wait(1).to({y:424.8,alpha:0.896},0).wait(1).to({y:420,alpha:0.904},0).wait(1).to({y:415.6,alpha:0.912},0).wait(1).to({y:411.4,alpha:0.919},0).wait(1).to({y:407.5,alpha:0.926},0).wait(1).to({y:403.8,alpha:0.933},0).wait(1).to({y:400.3,alpha:0.939},0).wait(1).to({y:397,alpha:0.944},0).wait(1).to({y:394,alpha:0.95},0).wait(1).to({y:391.1,alpha:0.955},0).wait(1).to({y:388.4,alpha:0.959},0).wait(1).to({y:385.9,alpha:0.964},0).wait(1).to({y:383.6,alpha:0.968},0).wait(1).to({y:381.5,alpha:0.972},0).wait(1).to({y:379.5,alpha:0.975},0).wait(1).to({y:377.6,alpha:0.978},0).wait(1).to({y:376,alpha:0.981},0).wait(1).to({y:374.4,alpha:0.984},0).wait(1).to({y:373,alpha:0.986},0).wait(1).to({y:371.7,alpha:0.989},0).wait(1).to({y:370.6,alpha:0.99},0).wait(1).to({y:369.6,alpha:0.992},0).wait(1).to({y:368.7,alpha:0.994},0).wait(1).to({y:367.9,alpha:0.995},0).wait(1).to({y:367.2,alpha:0.996},0).wait(1).to({y:366.6,alpha:0.997},0).wait(1).to({y:366.2,alpha:0.998},0).wait(1).to({y:365.8,alpha:0.999},0).wait(1).to({y:365.5},0).wait(1).to({y:365.3,alpha:1},0).wait(1).to({y:365.2},0).wait(1).to({regY:35.8,y:370.7},0).wait(22).to({regY:30.3,y:365},0).wait(1).to({y:364.3},0).wait(1).to({y:363.3},0).wait(1).to({y:361.8},0).wait(1).to({y:359.9},0).wait(1).to({y:357.5},0).wait(1).to({y:354.6},0).wait(1).to({y:351.2},0).wait(1).to({y:347.3},0).wait(1).to({y:342.8},0).wait(1).to({y:337.7},0).wait(1).to({y:332.1},0).wait(1).to({y:325.8},0).wait(1).to({y:318.9},0).wait(1).to({y:311.4},0).wait(1).to({y:303.2},0).wait(1).to({y:294.3},0).wait(1).to({y:284.7},0).wait(1).to({y:274.4},0).wait(1).to({y:263.4},0).wait(1).to({y:251.6},0).wait(1).to({y:239.1},0).wait(1).to({y:225.9},0).wait(1).to({y:212},0).wait(1).to({y:197.3},0).wait(1).to({y:182.1},0).wait(1).to({y:166.2},0).wait(1).to({y:149.7},0).wait(1).to({y:132.8},0).wait(1).to({y:115.4},0).wait(1).to({y:97.8},0).wait(1).to({y:79.9},0).wait(1).to({y:61.9},0).wait(1).to({y:44},0).wait(1).to({y:26.2},0).wait(1).to({y:8.7},0).wait(1).to({y:-8.5},0).wait(1).to({y:-25.2},0).wait(1).to({y:-41.3},0).wait(1).to({y:-56.7},0).wait(1).to({y:-71.4},0).wait(1).to({y:-85.3},0).wait(1).to({y:-98.4},0).wait(1).to({y:-110.5},0).wait(1).to({y:-121.8},0).wait(1).to({y:-132.2},0).wait(1).to({y:-141.7},0).wait(1).to({y:-150.3},0).wait(1).to({y:-158.1},0).wait(1).to({y:-164.9},0).wait(1).to({y:-171},0).wait(1).to({y:-176.2},0).wait(1).to({y:-180.6},0).wait(1).to({y:-184.3},0).wait(1).to({y:-187.3},0).wait(1).to({y:-189.5},0).wait(1).to({y:-191.1},0).wait(1).to({y:-192},0).wait(1).to({regY:35.8,y:-186.8},0).to({_off:true},1).wait(35));

	// 图层 31     复制 5
	this.instance_30 = new lib.元件19();
	this.instance_30.setTransform(300.7,613,0.514,0.514,0,0,0,16.9,35.7);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(344).to({_off:false},0).wait(1).to({regY:30.3,x:300.9,y:564,alpha:0.101},0).wait(1).to({x:301.1,y:527.4,alpha:0.181},0).wait(1).to({x:301.2,y:496.7,alpha:0.247},0).wait(1).to({x:301.3,y:470.2,alpha:0.305},0).wait(1).to({x:301.4,y:446.9,alpha:0.356},0).wait(1).to({x:301.5,y:426,alpha:0.402},0).wait(1).to({x:301.6,y:407.1,alpha:0.443},0).wait(1).to({x:301.7,y:389.9,alpha:0.48},0).wait(1).to({y:374.1,alpha:0.515},0).wait(1).to({x:301.8,y:359.6,alpha:0.546},0).wait(1).to({x:301.9,y:346.2,alpha:0.576},0).wait(1).to({y:333.7,alpha:0.603},0).wait(1).to({x:302,y:322,alpha:0.628},0).wait(1).to({y:311.1,alpha:0.652},0).wait(1).to({y:300.9,alpha:0.674},0).wait(1).to({x:302.1,y:291.4,alpha:0.695},0).wait(1).to({y:282.4,alpha:0.715},0).wait(1).to({x:302.2,y:274,alpha:0.733},0).wait(1).to({y:266,alpha:0.75},0).wait(1).to({y:258.5,alpha:0.767},0).wait(1).to({x:302.3,y:251.5,alpha:0.782},0).wait(1).to({y:244.8,alpha:0.797},0).wait(1).to({y:238.5,alpha:0.81},0).wait(1).to({y:232.6,alpha:0.823},0).wait(1).to({x:302.4,y:226.9,alpha:0.836},0).wait(1).to({y:221.6,alpha:0.847},0).wait(1).to({y:216.6,alpha:0.858},0).wait(1).to({y:211.9,alpha:0.868},0).wait(1).to({x:302.5,y:207.4,alpha:0.878},0).wait(1).to({y:203.2,alpha:0.887},0).wait(1).to({y:199.2,alpha:0.896},0).wait(1).to({y:195.4,alpha:0.904},0).wait(1).to({y:191.9,alpha:0.912},0).wait(1).to({y:188.5,alpha:0.919},0).wait(1).to({x:302.6,y:185.4,alpha:0.926},0).wait(1).to({y:182.4,alpha:0.933},0).wait(1).to({y:179.6,alpha:0.939},0).wait(1).to({y:177,alpha:0.944},0).wait(1).to({y:174.6,alpha:0.95},0).wait(1).to({y:172.3,alpha:0.955},0).wait(1).to({y:170.1,alpha:0.959},0).wait(1).to({y:168.2,alpha:0.964},0).wait(1).to({y:166.3,alpha:0.968},0).wait(1).to({y:164.6,alpha:0.972},0).wait(1).to({x:302.7,y:163,alpha:0.975},0).wait(1).to({y:161.5,alpha:0.978},0).wait(1).to({y:160.2,alpha:0.981},0).wait(1).to({y:159,alpha:0.984},0).wait(1).to({y:157.8,alpha:0.986},0).wait(1).to({y:156.8,alpha:0.989},0).wait(1).to({y:155.9,alpha:0.99},0).wait(1).to({y:155.1,alpha:0.992},0).wait(1).to({y:154.4,alpha:0.994},0).wait(1).to({y:153.7,alpha:0.995},0).wait(1).to({y:153.2,alpha:0.996},0).wait(1).to({y:152.7,alpha:0.997},0).wait(1).to({y:152.4,alpha:0.998},0).wait(1).to({y:152.1,alpha:0.999},0).wait(1).to({y:151.8},0).wait(1).to({y:151.7,alpha:1},0).wait(1).to({y:151.6},0).wait(1).to({regY:35.8,y:154.4},0).wait(13).to({regY:30.3,y:151.4},0).wait(1).to({y:151},0).wait(1).to({y:150.3},0).wait(1).to({y:149.4},0).wait(1).to({y:148.2},0).wait(1).to({y:146.7},0).wait(1).to({y:144.9},0).wait(1).to({y:142.7},0).wait(1).to({y:140.2},0).wait(1).to({y:137.4},0).wait(1).to({y:134.2},0).wait(1).to({y:130.7},0).wait(1).to({y:126.7},0).wait(1).to({y:122.4},0).wait(1).to({y:117.6},0).wait(1).to({y:112.5},0).wait(1).to({y:106.9},0).wait(1).to({y:100.8},0).wait(1).to({y:94.3},0).wait(1).to({y:87.4},0).wait(1).to({y:80},0).wait(1).to({y:72.1},0).wait(1).to({y:63.8},0).wait(1).to({y:55},0).wait(1).to({y:45.8},0).wait(1).to({y:36.1},0).wait(1).to({y:26.1},0).wait(1).to({y:15.8},0).wait(1).to({y:5.1},0).wait(1).to({y:-5.8},0).wait(1).to({y:-16.9},0).wait(1).to({y:-28.2},0).wait(1).to({y:-39.5},0).wait(1).to({y:-50.8},0).wait(1).to({y:-62},0).wait(1).to({y:-73.1},0).wait(1).to({y:-83.9},0).wait(1).to({y:-94.4},0).wait(1).to({y:-104.5},0).wait(1).to({y:-114.3},0).wait(1).to({y:-123.5},0).wait(1).to({y:-132.3},0).wait(1).to({y:-140.5},0).wait(1).to({y:-148.2},0).wait(1).to({y:-155.3},0).wait(1).to({y:-161.9},0).wait(1).to({y:-167.8},0).wait(1).to({y:-173.3},0).wait(1).to({y:-178.1},0).wait(1).to({y:-182.5},0).wait(1).to({y:-186.3},0).wait(1).to({y:-189.6},0).wait(1).to({y:-192.4},0).wait(1).to({y:-194.7},0).wait(1).to({y:-196.5},0).wait(1).to({y:-197.9},0).wait(1).to({y:-198.9},0).wait(1).to({y:-199.5},0).wait(1).to({regY:35.7,y:-196.9},0).to({_off:true},1).wait(37));

	// 图层 31    复制 4
	this.instance_31 = new lib.元件19();
	this.instance_31.setTransform(88.1,711.3,0.83,0.83,0,0,0,17,35.7);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(337).to({_off:false},0).wait(1).to({regX:16.9,regY:30.3,y:633.8,alpha:0.101},0).wait(1).to({y:576,alpha:0.181},0).wait(1).to({y:527.6,alpha:0.247},0).wait(1).to({y:485.7,alpha:0.305},0).wait(1).to({y:448.9,alpha:0.356},0).wait(1).to({y:415.9,alpha:0.402},0).wait(1).to({y:386.1,alpha:0.443},0).wait(1).to({y:359,alpha:0.48},0).wait(1).to({y:334.1,alpha:0.515},0).wait(1).to({y:311.1,alpha:0.546},0).wait(1).to({y:289.9,alpha:0.576},0).wait(1).to({y:270.1,alpha:0.603},0).wait(1).to({y:251.8,alpha:0.628},0).wait(1).to({y:234.6,alpha:0.652},0).wait(1).to({y:218.5,alpha:0.674},0).wait(1).to({y:203.4,alpha:0.695},0).wait(1).to({y:189.2,alpha:0.715},0).wait(1).to({y:175.9,alpha:0.733},0).wait(1).to({y:163.4,alpha:0.75},0).wait(1).to({y:151.5,alpha:0.767},0).wait(1).to({y:140.4,alpha:0.782},0).wait(1).to({y:129.9,alpha:0.797},0).wait(1).to({y:119.9,alpha:0.81},0).wait(1).to({y:110.5,alpha:0.823},0).wait(1).to({y:101.7,alpha:0.836},0).wait(1).to({y:93.3,alpha:0.847},0).wait(1).to({y:85.4,alpha:0.858},0).wait(1).to({y:77.9,alpha:0.868},0).wait(1).to({y:70.8,alpha:0.878},0).wait(1).to({y:64.1,alpha:0.887},0).wait(1).to({y:57.8,alpha:0.896},0).wait(1).to({y:51.9,alpha:0.904},0).wait(1).to({y:46.3,alpha:0.912},0).wait(1).to({y:41,alpha:0.919},0).wait(1).to({y:36,alpha:0.926},0).wait(1).to({y:31.4,alpha:0.933},0).wait(1).to({y:27,alpha:0.939},0).wait(1).to({y:22.9,alpha:0.944},0).wait(1).to({y:19,alpha:0.95},0).wait(1).to({y:15.4,alpha:0.955},0).wait(1).to({y:12,alpha:0.959},0).wait(1).to({y:8.9,alpha:0.964},0).wait(1).to({y:6,alpha:0.968},0).wait(1).to({y:3.3,alpha:0.972},0).wait(1).to({y:0.8,alpha:0.975},0).wait(1).to({y:-1.6,alpha:0.978},0).wait(1).to({y:-3.7,alpha:0.981},0).wait(1).to({y:-5.6,alpha:0.984},0).wait(1).to({y:-7.4,alpha:0.986},0).wait(1).to({y:-9,alpha:0.989},0).wait(1).to({y:-10.4,alpha:0.99},0).wait(1).to({y:-11.7,alpha:0.992},0).wait(1).to({y:-12.9,alpha:0.994},0).wait(1).to({y:-13.8,alpha:0.995},0).wait(1).to({y:-14.7,alpha:0.996},0).wait(1).to({y:-15.4,alpha:0.997},0).wait(1).to({y:-16,alpha:0.998},0).wait(1).to({y:-16.5,alpha:0.999},0).wait(1).to({y:-16.9},0).wait(1).to({y:-17.1,alpha:1},0).wait(1).to({y:-17.3},0).wait(1).to({regX:17,regY:35.8,y:-12.9},0).wait(16).to({regX:16.9,regY:30.3,y:-17.6},0).wait(1).to({y:-18.1},0).wait(1).to({y:-18.9},0).wait(1).to({y:-20.2},0).wait(1).to({y:-21.8},0).wait(1).to({y:-23.8},0).wait(1).to({y:-26.2},0).wait(1).to({y:-29},0).wait(1).to({y:-32.3},0).wait(1).to({y:-36},0).wait(1).to({y:-40.2},0).wait(1).to({y:-44.9},0).wait(1).to({y:-50.1},0).wait(1).to({y:-55.8},0).wait(1).to({y:-62},0).wait(1).to({y:-68.8},0).wait(1).to({y:-76.2},0).wait(1).to({y:-84.2},0).wait(1).to({y:-92.7},0).wait(1).to({y:-101.9},0).wait(1).to({y:-111.6},0).wait(1).to({y:-122},0).wait(1).to({y:-133},0).wait(1).to({y:-144.5},0).wait(1).to({y:-156.7},0).wait(1).to({y:-169.4},0).wait(1).to({y:-182.5},0).wait(1).to({y:-196.2},0).wait(1).to({y:-210.3},0).wait(1).to({y:-224.7},0).wait(1).to({y:-239.3},0).wait(1).to({y:-254.1},0).wait(1).to({y:-269.1},0).wait(1).to({y:-284},0).wait(1).to({y:-298.7},0).wait(1).to({y:-313.3},0).wait(1).to({y:-327.5},0).wait(1).to({y:-341.4},0).wait(1).to({y:-354.8},0).wait(1).to({y:-367.6},0).wait(1).to({y:-379.8},0).wait(1).to({y:-391.3},0).wait(1).to({y:-402.1},0).wait(1).to({y:-412.2},0).wait(1).to({y:-421.6},0).wait(1).to({y:-430.2},0).wait(1).to({y:-438.1},0).wait(1).to({y:-445.3},0).wait(1).to({y:-451.7},0).wait(1).to({y:-457.4},0).wait(1).to({y:-462.4},0).wait(1).to({y:-466.7},0).wait(1).to({y:-470.4},0).wait(1).to({y:-473.5},0).wait(1).to({y:-475.9},0).wait(1).to({y:-477.8},0).wait(1).to({y:-479.1},0).wait(1).to({y:-479.8},0).wait(1).to({regX:17,regY:35.8,y:-475.6},0).to({_off:true},1).wait(41));

	// 图层 31   复制 3
	this.instance_32 = new lib.元件19();
	this.instance_32.setTransform(68.9,867.3,0.568,0.568,0,0,0,17,35.6);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(342).to({_off:false},0).wait(1).to({regX:16.9,regY:30.3,y:806,alpha:0.101},0).wait(1).to({y:759.7,alpha:0.181},0).wait(1).to({y:721,alpha:0.247},0).wait(1).to({y:687.6,alpha:0.305},0).wait(1).to({y:658.1,alpha:0.356},0).wait(1).to({y:631.7,alpha:0.402},0).wait(1).to({y:607.9,alpha:0.443},0).wait(1).to({y:586.2,alpha:0.48},0).wait(1).to({y:566.3,alpha:0.515},0).wait(1).to({y:548,alpha:0.546},0).wait(1).to({y:531,alpha:0.576},0).wait(1).to({y:515.2,alpha:0.603},0).wait(1).to({y:500.5,alpha:0.628},0).wait(1).to({y:486.8,alpha:0.652},0).wait(1).to({y:473.9,alpha:0.674},0).wait(1).to({y:461.9,alpha:0.695},0).wait(1).to({y:450.5,alpha:0.715},0).wait(1).to({y:439.9,alpha:0.733},0).wait(1).to({y:429.8,alpha:0.75},0).wait(1).to({y:420.4,alpha:0.767},0).wait(1).to({y:411.5,alpha:0.782},0).wait(1).to({y:403.1,alpha:0.797},0).wait(1).to({y:395.1,alpha:0.81},0).wait(1).to({y:387.6,alpha:0.823},0).wait(1).to({y:380.5,alpha:0.836},0).wait(1).to({y:373.8,alpha:0.847},0).wait(1).to({y:367.5,alpha:0.858},0).wait(1).to({y:361.5,alpha:0.868},0).wait(1).to({y:355.8,alpha:0.878},0).wait(1).to({y:350.5,alpha:0.887},0).wait(1).to({y:345.5,alpha:0.896},0).wait(1).to({y:340.7,alpha:0.904},0).wait(1).to({y:336.2,alpha:0.912},0).wait(1).to({y:332,alpha:0.919},0).wait(1).to({y:328,alpha:0.926},0).wait(1).to({y:324.3,alpha:0.933},0).wait(1).to({y:320.8,alpha:0.939},0).wait(1).to({y:317.5,alpha:0.944},0).wait(1).to({y:314.4,alpha:0.95},0).wait(1).to({y:311.5,alpha:0.955},0).wait(1).to({y:308.8,alpha:0.959},0).wait(1).to({y:306.3,alpha:0.964},0).wait(1).to({y:304,alpha:0.968},0).wait(1).to({y:301.8,alpha:0.972},0).wait(1).to({y:299.8,alpha:0.975},0).wait(1).to({y:298,alpha:0.978},0).wait(1).to({y:296.3,alpha:0.981},0).wait(1).to({y:294.7,alpha:0.984},0).wait(1).to({y:293.3,alpha:0.986},0).wait(1).to({y:292,alpha:0.989},0).wait(1).to({y:290.9,alpha:0.99},0).wait(1).to({y:289.8,alpha:0.992},0).wait(1).to({y:288.9,alpha:0.994},0).wait(1).to({y:288.1,alpha:0.995},0).wait(1).to({y:287.4,alpha:0.996},0).wait(1).to({y:286.9,alpha:0.997},0).wait(1).to({y:286.4,alpha:0.998},0).wait(1).to({y:286,alpha:0.999},0).wait(1).to({y:285.7},0).wait(1).to({y:285.5,alpha:1},0).wait(1).to({y:285.4},0).wait(1).to({regX:17,regY:35.8,y:288.4},0).wait(21).to({regX:16.9,regY:30.3,y:285.1},0).wait(1).to({y:284.6},0).wait(1).to({y:283.8},0).wait(1).to({y:282.5},0).wait(1).to({y:280.9},0).wait(1).to({y:278.9},0).wait(1).to({y:276.5},0).wait(1).to({y:273.7},0).wait(1).to({y:270.4},0).wait(1).to({y:266.7},0).wait(1).to({y:262.5},0).wait(1).to({y:257.8},0).wait(1).to({y:252.6},0).wait(1).to({y:246.9},0).wait(1).to({y:240.7},0).wait(1).to({y:233.9},0).wait(1).to({y:226.5},0).wait(1).to({y:218.5},0).wait(1).to({y:210},0).wait(1).to({y:200.8},0).wait(1).to({y:191.1},0).wait(1).to({y:180.7},0).wait(1).to({y:169.7},0).wait(1).to({y:158.2},0).wait(1).to({y:146},0).wait(1).to({y:133.3},0).wait(1).to({y:120.2},0).wait(1).to({y:106.5},0).wait(1).to({y:92.4},0).wait(1).to({y:78},0).wait(1).to({y:63.4},0).wait(1).to({y:48.6},0).wait(1).to({y:33.6},0).wait(1).to({y:18.7},0).wait(1).to({y:4},0).wait(1).to({y:-10.5},0).wait(1).to({y:-24.8},0).wait(1).to({y:-38.6},0).wait(1).to({y:-52},0).wait(1).to({y:-64.8},0).wait(1).to({y:-77},0).wait(1).to({y:-88.5},0).wait(1).to({y:-99.4},0).wait(1).to({y:-109.5},0).wait(1).to({y:-118.9},0).wait(1).to({y:-127.5},0).wait(1).to({y:-135.4},0).wait(1).to({y:-142.5},0).wait(1).to({y:-148.9},0).wait(1).to({y:-154.6},0).wait(1).to({y:-159.7},0).wait(1).to({y:-164},0).wait(1).to({y:-167.7},0).wait(1).to({y:-170.7},0).wait(1).to({y:-173.2},0).wait(1).to({y:-175},0).wait(1).to({y:-176.3},0).wait(1).to({y:-177.1},0).wait(1).to({regX:17,regY:35.8,y:-174.3},0).to({_off:true},1).wait(31));

	// 图层 31  复制 2
	this.instance_33 = new lib.元件19();
	this.instance_33.setTransform(104,1102.6,1,1,0,0,0,16.9,35.8);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(337).to({_off:false},0).wait(1).to({regY:30.3,y:1032.9,alpha:0.101},0).wait(1).to({y:981.9,alpha:0.181},0).wait(1).to({y:939.3,alpha:0.247},0).wait(1).to({y:902.5,alpha:0.305},0).wait(1).to({y:870,alpha:0.356},0).wait(1).to({y:841,alpha:0.402},0).wait(1).to({y:814.8,alpha:0.443},0).wait(1).to({y:790.9,alpha:0.48},0).wait(1).to({y:768.9,alpha:0.515},0).wait(1).to({y:748.7,alpha:0.546},0).wait(1).to({y:730,alpha:0.576},0).wait(1).to({y:712.7,alpha:0.603},0).wait(1).to({y:696.5,alpha:0.628},0).wait(1).to({y:681.4,alpha:0.652},0).wait(1).to({y:667.2,alpha:0.674},0).wait(1).to({y:653.9,alpha:0.695},0).wait(1).to({y:641.4,alpha:0.715},0).wait(1).to({y:629.7,alpha:0.733},0).wait(1).to({y:618.7,alpha:0.75},0).wait(1).to({y:608.2,alpha:0.767},0).wait(1).to({y:598.4,alpha:0.782},0).wait(1).to({y:589.2,alpha:0.797},0).wait(1).to({y:580.4,alpha:0.81},0).wait(1).to({y:572.1,alpha:0.823},0).wait(1).to({y:564.3,alpha:0.836},0).wait(1).to({y:557,alpha:0.847},0).wait(1).to({y:550,alpha:0.858},0).wait(1).to({y:543.4,alpha:0.868},0).wait(1).to({y:537.2,alpha:0.878},0).wait(1).to({y:531.3,alpha:0.887},0).wait(1).to({y:525.7,alpha:0.896},0).wait(1).to({y:520.5,alpha:0.904},0).wait(1).to({y:515.6,alpha:0.912},0).wait(1).to({y:510.9,alpha:0.919},0).wait(1).to({y:506.6,alpha:0.926},0).wait(1).to({y:502.4,alpha:0.933},0).wait(1).to({y:498.6,alpha:0.939},0).wait(1).to({y:494.9,alpha:0.944},0).wait(1).to({y:491.5,alpha:0.95},0).wait(1).to({y:488.4,alpha:0.955},0).wait(1).to({y:485.4,alpha:0.959},0).wait(1).to({y:482.6,alpha:0.964},0).wait(1).to({y:480.1,alpha:0.968},0).wait(1).to({y:477.7,alpha:0.972},0).wait(1).to({y:475.5,alpha:0.975},0).wait(1).to({y:473.4,alpha:0.978},0).wait(1).to({y:471.6,alpha:0.981},0).wait(1).to({y:469.8,alpha:0.984},0).wait(1).to({y:468.3,alpha:0.986},0).wait(1).to({y:466.9,alpha:0.989},0).wait(1).to({y:465.6,alpha:0.99},0).wait(1).to({y:464.5,alpha:0.992},0).wait(1).to({y:463.5,alpha:0.994},0).wait(1).to({y:462.6,alpha:0.995},0).wait(1).to({y:461.9,alpha:0.996},0).wait(1).to({y:461.2,alpha:0.997},0).wait(1).to({y:460.7,alpha:0.998},0).wait(1).to({y:460.3,alpha:0.999},0).wait(1).to({y:459.9},0).wait(1).to({y:459.7,alpha:1},0).wait(1).to({y:459.6},0).wait(1).to({regY:35.8,y:465.1},0).wait(31).to({regY:30.3,y:459.3},0).wait(1).to({y:458.7},0).wait(1).to({y:457.7},0).wait(1).to({y:456.1},0).wait(1).to({y:454.2},0).wait(1).to({y:451.7},0).wait(1).to({y:448.7},0).wait(1).to({y:445.2},0).wait(1).to({y:441.1},0).wait(1).to({y:436.5},0).wait(1).to({y:431.3},0).wait(1).to({y:425.5},0).wait(1).to({y:419.1},0).wait(1).to({y:412},0).wait(1).to({y:404.2},0).wait(1).to({y:395.8},0).wait(1).to({y:386.6},0).wait(1).to({y:376.8},0).wait(1).to({y:366.1},0).wait(1).to({y:354.8},0).wait(1).to({y:342.7},0).wait(1).to({y:329.8},0).wait(1).to({y:316.2},0).wait(1).to({y:301.9},0).wait(1).to({y:286.8},0).wait(1).to({y:271.1},0).wait(1).to({y:254.8},0).wait(1).to({y:237.8},0).wait(1).to({y:220.4},0).wait(1).to({y:202.6},0).wait(1).to({y:184.4},0).wait(1).to({y:166},0).wait(1).to({y:147.5},0).wait(1).to({y:129},0).wait(1).to({y:110.7},0).wait(1).to({y:92.6},0).wait(1).to({y:75},0).wait(1).to({y:57.8},0).wait(1).to({y:41.2},0).wait(1).to({y:25.4},0).wait(1).to({y:10.3},0).wait(1).to({y:-4},0).wait(1).to({y:-17.5},0).wait(1).to({y:-30},0).wait(1).to({y:-41.6},0).wait(1).to({y:-52.3},0).wait(1).to({y:-62.1},0).wait(1).to({y:-71},0).wait(1).to({y:-78.9},0).wait(1).to({y:-86},0).wait(1).to({y:-92.2},0).wait(1).to({y:-97.6},0).wait(1).to({y:-102.1},0).wait(1).to({y:-105.9},0).wait(1).to({y:-109},0).wait(1).to({y:-111.3},0).wait(1).to({y:-112.9},0).wait(1).to({y:-113.8},0).wait(1).to({regY:35.8,y:-108.7},0).to({_off:true},1).wait(26));

	// 图层 31 复制
	this.instance_34 = new lib.元件19();
	this.instance_34.setTransform(-15.6,735,0.61,0.61,0,0,0,16.9,35.8);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(346).to({_off:false},0).wait(1).to({regY:30.3,y:689.9,alpha:0.101},0).wait(1).to({y:656.8,alpha:0.181},0).wait(1).to({y:629,alpha:0.247},0).wait(1).to({y:605.1,alpha:0.305},0).wait(1).to({y:584,alpha:0.356},0).wait(1).to({y:565.1,alpha:0.402},0).wait(1).to({y:548.1,alpha:0.443},0).wait(1).to({y:532.5,alpha:0.48},0).wait(1).to({y:518.3,alpha:0.515},0).wait(1).to({y:505.2,alpha:0.546},0).wait(1).to({y:493,alpha:0.576},0).wait(1).to({y:481.7,alpha:0.603},0).wait(1).to({y:471.2,alpha:0.628},0).wait(1).to({y:461.4,alpha:0.652},0).wait(1).to({y:452.1,alpha:0.674},0).wait(1).to({y:443.5,alpha:0.695},0).wait(1).to({y:435.4,alpha:0.715},0).wait(1).to({y:427.8,alpha:0.733},0).wait(1).to({y:420.6,alpha:0.75},0).wait(1).to({y:413.8,alpha:0.767},0).wait(1).to({y:407.4,alpha:0.782},0).wait(1).to({y:401.4,alpha:0.797},0).wait(1).to({y:395.7,alpha:0.81},0).wait(1).to({y:390.3,alpha:0.823},0).wait(1).to({y:385.3,alpha:0.836},0).wait(1).to({y:380.5,alpha:0.847},0).wait(1).to({y:375.9,alpha:0.858},0).wait(1).to({y:371.7,alpha:0.868},0).wait(1).to({y:367.6,alpha:0.878},0).wait(1).to({y:363.8,alpha:0.887},0).wait(1).to({y:360.2,alpha:0.896},0).wait(1).to({y:356.8,alpha:0.904},0).wait(1).to({y:353.6,alpha:0.912},0).wait(1).to({y:350.6,alpha:0.919},0).wait(1).to({y:347.7,alpha:0.926},0).wait(1).to({y:345,alpha:0.933},0).wait(1).to({y:342.5,alpha:0.939},0).wait(1).to({y:340.2,alpha:0.944},0).wait(1).to({y:338,alpha:0.95},0).wait(1).to({y:335.9,alpha:0.955},0).wait(1).to({y:334,alpha:0.959},0).wait(1).to({y:332.2,alpha:0.964},0).wait(1).to({y:330.5,alpha:0.968},0).wait(1).to({y:328.9,alpha:0.972},0).wait(1).to({y:327.5,alpha:0.975},0).wait(1).to({y:326.2,alpha:0.978},0).wait(1).to({y:325,alpha:0.981},0).wait(1).to({y:323.8,alpha:0.984},0).wait(1).to({y:322.8,alpha:0.986},0).wait(1).to({y:321.9,alpha:0.989},0).wait(1).to({y:321.1,alpha:0.99},0).wait(1).to({y:320.4,alpha:0.992},0).wait(1).to({y:319.7,alpha:0.994},0).wait(1).to({y:319.1,alpha:0.995},0).wait(1).to({y:318.6,alpha:0.996},0).wait(1).to({y:318.2,alpha:0.997},0).wait(1).to({y:317.9,alpha:0.998},0).wait(1).to({y:317.6,alpha:0.999},0).wait(1).to({y:317.4},0).wait(1).to({y:317.3,alpha:1},0).wait(1).to({y:317.2},0).wait(1).to({regY:35.8,y:320.5},0).wait(15).to({regY:30.3,y:317},0).wait(1).to({y:316.5},0).wait(1).to({y:315.8},0).wait(1).to({y:314.7},0).wait(1).to({y:313.3},0).wait(1).to({y:311.5},0).wait(1).to({y:309.3},0).wait(1).to({y:306.8},0).wait(1).to({y:303.9},0).wait(1).to({y:300.5},0).wait(1).to({y:296.8},0).wait(1).to({y:292.6},0).wait(1).to({y:287.9},0).wait(1).to({y:282.8},0).wait(1).to({y:277.2},0).wait(1).to({y:271.1},0).wait(1).to({y:264.5},0).wait(1).to({y:257.4},0).wait(1).to({y:249.8},0).wait(1).to({y:241.6},0).wait(1).to({y:232.9},0).wait(1).to({y:223.6},0).wait(1).to({y:213.8},0).wait(1).to({y:203.4},0).wait(1).to({y:192.6},0).wait(1).to({y:181.2},0).wait(1).to({y:169.4},0).wait(1).to({y:157.2},0).wait(1).to({y:144.7},0).wait(1).to({y:131.8},0).wait(1).to({y:118.7},0).wait(1).to({y:105.4},0).wait(1).to({y:92.1},0).wait(1).to({y:78.7},0).wait(1).to({y:65.5},0).wait(1).to({y:52.5},0).wait(1).to({y:39.7},0).wait(1).to({y:27.4},0).wait(1).to({y:15.5},0).wait(1).to({y:4},0).wait(1).to({y:-6.9},0).wait(1).to({y:-17.2},0).wait(1).to({y:-26.9},0).wait(1).to({y:-36},0).wait(1).to({y:-44.3},0).wait(1).to({y:-52.1},0).wait(1).to({y:-59.1},0).wait(1).to({y:-65.5},0).wait(1).to({y:-71.2},0).wait(1).to({y:-76.3},0).wait(1).to({y:-80.8},0).wait(1).to({y:-84.7},0).wait(1).to({y:-88},0).wait(1).to({y:-90.7},0).wait(1).to({y:-92.9},0).wait(1).to({y:-94.6},0).wait(1).to({y:-95.7},0).wait(1).to({y:-96.4},0).wait(1).to({regY:35.8,y:-93.3},0).to({_off:true},1).wait(33));

	// 图层 31
	this.instance_35 = new lib.元件19();
	this.instance_35.setTransform(436.9,1450.3,1.69,1.69,0,0,0,16.9,35.8);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(339).to({_off:false},0).wait(1).to({regY:30.3,y:1330.2,alpha:0.101},0).wait(1).to({y:1242.3,alpha:0.181},0).wait(1).to({y:1168.7,alpha:0.247},0).wait(1).to({y:1105.1,alpha:0.305},0).wait(1).to({y:1049,alpha:0.356},0).wait(1).to({y:998.9,alpha:0.402},0).wait(1).to({y:953.7,alpha:0.443},0).wait(1).to({y:912.4,alpha:0.48},0).wait(1).to({y:874.6,alpha:0.515},0).wait(1).to({y:839.7,alpha:0.546},0).wait(1).to({y:807.4,alpha:0.576},0).wait(1).to({y:777.4,alpha:0.603},0).wait(1).to({y:749.5,alpha:0.628},0).wait(1).to({y:723.4,alpha:0.652},0).wait(1).to({y:698.9,alpha:0.674},0).wait(1).to({y:676,alpha:0.695},0).wait(1).to({y:654.5,alpha:0.715},0).wait(1).to({y:634.2,alpha:0.733},0).wait(1).to({y:615.1,alpha:0.75},0).wait(1).to({y:597.2,alpha:0.767},0).wait(1).to({y:580.2,alpha:0.782},0).wait(1).to({y:564.2,alpha:0.797},0).wait(1).to({y:549.1,alpha:0.81},0).wait(1).to({y:534.8,alpha:0.823},0).wait(1).to({y:521.3,alpha:0.836},0).wait(1).to({y:508.6,alpha:0.847},0).wait(1).to({y:496.6,alpha:0.858},0).wait(1).to({y:485.2,alpha:0.868},0).wait(1).to({y:474.5,alpha:0.878},0).wait(1).to({y:464.3,alpha:0.887},0).wait(1).to({y:454.7,alpha:0.896},0).wait(1).to({y:445.7,alpha:0.904},0).wait(1).to({y:437.2,alpha:0.912},0).wait(1).to({y:429.2,alpha:0.919},0).wait(1).to({y:421.6,alpha:0.926},0).wait(1).to({y:414.5,alpha:0.933},0).wait(1).to({y:407.8,alpha:0.939},0).wait(1).to({y:401.6,alpha:0.944},0).wait(1).to({y:395.7,alpha:0.95},0).wait(1).to({y:390.2,alpha:0.955},0).wait(1).to({y:385.1,alpha:0.959},0).wait(1).to({y:380.3,alpha:0.964},0).wait(1).to({y:375.8,alpha:0.968},0).wait(1).to({y:371.7,alpha:0.972},0).wait(1).to({y:367.9,alpha:0.975},0).wait(1).to({y:364.4,alpha:0.978},0).wait(1).to({y:361.2,alpha:0.981},0).wait(1).to({y:358.2,alpha:0.984},0).wait(1).to({y:355.5,alpha:0.986},0).wait(1).to({y:353.1,alpha:0.989},0).wait(1).to({y:350.9,alpha:0.99},0).wait(1).to({y:349,alpha:0.992},0).wait(1).to({y:347.2,alpha:0.994},0).wait(1).to({y:345.7,alpha:0.995},0).wait(1).to({y:344.4,alpha:0.996},0).wait(1).to({y:343.3,alpha:0.997},0).wait(1).to({y:342.4,alpha:0.998},0).wait(1).to({y:341.7,alpha:0.999},0).wait(1).to({y:341.1},0).wait(1).to({y:340.7,alpha:1},0).wait(1).to({y:340.5},0).wait(1).to({regY:35.8,y:349.8},0).wait(17).to({regY:30.3,y:340.1},0).wait(1).to({y:339.1},0).wait(1).to({y:337.3},0).wait(1).to({y:334.8},0).wait(1).to({y:331.6},0).wait(1).to({y:327.5},0).wait(1).to({y:322.6},0).wait(1).to({y:316.9},0).wait(1).to({y:310.2},0).wait(1).to({y:302.6},0).wait(1).to({y:294.1},0).wait(1).to({y:284.5},0).wait(1).to({y:274},0).wait(1).to({y:262.3},0).wait(1).to({y:249.6},0).wait(1).to({y:235.7},0).wait(1).to({y:220.7},0).wait(1).to({y:204.5},0).wait(1).to({y:187.1},0).wait(1).to({y:168.4},0).wait(1).to({y:148.6},0).wait(1).to({y:127.4},0).wait(1).to({y:105.1},0).wait(1).to({y:81.6},0).wait(1).to({y:56.9},0).wait(1).to({y:31.1},0).wait(1).to({y:4.2},0).wait(1).to({y:-23.6},0).wait(1).to({y:-52.2},0).wait(1).to({y:-81.5},0).wait(1).to({y:-111.4},0).wait(1).to({y:-141.6},0).wait(1).to({y:-171.9},0).wait(1).to({y:-202.3},0).wait(1).to({y:-232.4},0).wait(1).to({y:-262},0).wait(1).to({y:-291},0).wait(1).to({y:-319.2},0).wait(1).to({y:-346.4},0).wait(1).to({y:-372.5},0).wait(1).to({y:-397.3},0).wait(1).to({y:-420.8},0).wait(1).to({y:-442.9},0).wait(1).to({y:-463.5},0).wait(1).to({y:-482.6},0).wait(1).to({y:-500.1},0).wait(1).to({y:-516.2},0).wait(1).to({y:-530.7},0).wait(1).to({y:-543.8},0).wait(1).to({y:-555.4},0).wait(1).to({y:-565.6},0).wait(1).to({y:-574.4},0).wait(1).to({y:-581.9},0).wait(1).to({y:-588.2},0).wait(1).to({y:-593.1},0).wait(1).to({y:-596.9},0).wait(1).to({y:-599.6},0).wait(1).to({y:-601.1},0).wait(1).to({regY:35.8,y:-592.4},0).to({_off:true},1).wait(38));

	// c3_0000_图层-3.png
	this.instance_36 = new lib.补间12("synched",0);
	this.instance_36.setTransform(135.8,672,0.807,0.807);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.instance_37 = new lib.补间21("synched",0);
	this.instance_37.setTransform(135.8,657.9,0.807,0.807);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(258).to({_off:false},0).wait(1).to({regX:2.5,regY:-17.5,x:137.8,y:655.4,alpha:0.171},0).wait(1).to({y:653.8,alpha:0.285},0).wait(1).to({y:652.6,alpha:0.374},0).wait(1).to({y:651.5,alpha:0.447},0).wait(1).to({y:650.7,alpha:0.508},0).wait(1).to({y:649.9,alpha:0.562},0).wait(1).to({y:649.2,alpha:0.608},0).wait(1).to({y:648.7,alpha:0.65},0).wait(1).to({y:648.1,alpha:0.687},0).wait(1).to({y:647.7,alpha:0.72},0).wait(1).to({y:647.2,alpha:0.75},0).wait(1).to({y:646.9,alpha:0.777},0).wait(1).to({y:646.5,alpha:0.802},0).wait(1).to({y:646.2,alpha:0.824},0).wait(1).to({y:645.9,alpha:0.844},0).wait(1).to({y:645.6,alpha:0.863},0).wait(1).to({y:645.4,alpha:0.88},0).wait(1).to({y:645.2,alpha:0.895},0).wait(1).to({y:645,alpha:0.909},0).wait(1).to({y:644.8,alpha:0.922},0).wait(1).to({y:644.6,alpha:0.933},0).wait(1).to({y:644.5,alpha:0.944},0).wait(1).to({y:644.4,alpha:0.953},0).wait(1).to({y:644.3,alpha:0.961},0).wait(1).to({y:644.1,alpha:0.968},0).wait(1).to({alpha:0.975},0).wait(1).to({y:644,alpha:0.98},0).wait(1).to({y:643.9,alpha:0.985},0).wait(1).to({alpha:0.989},0).wait(1).to({y:643.8,alpha:0.993},0).wait(1).to({alpha:0.995},0).wait(1).to({y:643.7,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(222));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(293).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({regX:2.5,regY:-17.5,x:137.8,y:643.8,alpha:0.993},0).wait(1).to({y:644,alpha:0.972},0).wait(1).to({y:644.3,alpha:0.936},0).wait(1).to({y:644.8,alpha:0.886},0).wait(1).to({y:645.4,alpha:0.821},0).wait(1).to({y:646.2,alpha:0.744},0).wait(1).to({y:647,alpha:0.656},0).wait(1).to({y:648,alpha:0.561},0).wait(1).to({y:648.9,alpha:0.463},0).wait(1).to({y:649.8,alpha:0.366},0).wait(1).to({y:650.7,alpha:0.275},0).wait(1).to({y:651.5,alpha:0.194},0).wait(1).to({y:652.2,alpha:0.124},0).wait(1).to({y:652.7,alpha:0.07},0).wait(1).to({y:653.1,alpha:0.031},0).wait(1).to({y:653.3,alpha:0.008},0).wait(1).to({regX:0,regY:0,x:135.8,y:667.6,alpha:0},0).to({_off:true},1).wait(203));

	// c3_0001_图层-4.png
	this.instance_38 = new lib.补间22("synched",0);
	this.instance_38.setTransform(174.7,637.3,0.807,0.807);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.instance_39 = new lib.补间23("synched",0);
	this.instance_39.setTransform(174.7,623.1,0.807,0.807);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(237).to({_off:false},0).wait(1).to({regX:2,regY:-10.5,x:176.3,y:626.4,alpha:0.171},0).wait(1).to({y:624.7,alpha:0.285},0).wait(1).to({y:623.5,alpha:0.374},0).wait(1).to({y:622.5,alpha:0.447},0).wait(1).to({y:621.6,alpha:0.508},0).wait(1).to({y:620.8,alpha:0.562},0).wait(1).to({y:620.2,alpha:0.608},0).wait(1).to({y:619.6,alpha:0.65},0).wait(1).to({y:619,alpha:0.687},0).wait(1).to({y:618.6,alpha:0.72},0).wait(1).to({y:618.2,alpha:0.75},0).wait(1).to({y:617.8,alpha:0.777},0).wait(1).to({y:617.4,alpha:0.802},0).wait(1).to({y:617.1,alpha:0.824},0).wait(1).to({y:616.8,alpha:0.844},0).wait(1).to({y:616.5,alpha:0.863},0).wait(1).to({y:616.3,alpha:0.88},0).wait(1).to({y:616.1,alpha:0.895},0).wait(1).to({y:615.9,alpha:0.909},0).wait(1).to({y:615.7,alpha:0.922},0).wait(1).to({y:615.5,alpha:0.933},0).wait(1).to({y:615.4,alpha:0.944},0).wait(1).to({y:615.3,alpha:0.953},0).wait(1).to({y:615.2,alpha:0.961},0).wait(1).to({y:615,alpha:0.968},0).wait(1).to({alpha:0.975},0).wait(1).to({y:614.9,alpha:0.98},0).wait(1).to({y:614.8,alpha:0.985},0).wait(1).to({alpha:0.989},0).wait(1).to({y:614.7,alpha:0.993},0).wait(1).to({alpha:0.995},0).wait(1).to({y:614.6,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(243));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(272).to({_off:false},0).wait(25).to({startPosition:0},0).wait(1).to({regX:2,regY:-10.5,x:176.3,y:614.7,alpha:0.993},0).wait(1).to({y:614.9,alpha:0.972},0).wait(1).to({y:615.2,alpha:0.936},0).wait(1).to({y:615.7,alpha:0.886},0).wait(1).to({y:616.3,alpha:0.821},0).wait(1).to({y:617.1,alpha:0.744},0).wait(1).to({y:617.9,alpha:0.656},0).wait(1).to({y:618.9,alpha:0.561},0).wait(1).to({y:619.8,alpha:0.463},0).wait(1).to({y:620.7,alpha:0.366},0).wait(1).to({y:621.6,alpha:0.275},0).wait(1).to({y:622.4,alpha:0.194},0).wait(1).to({y:623.1,alpha:0.124},0).wait(1).to({y:623.6,alpha:0.07},0).wait(1).to({y:624,alpha:0.031},0).wait(1).to({y:624.2,alpha:0.008},0).wait(1).to({regX:0,regY:0,x:174.7,y:632.8,alpha:0},0).to({_off:true},1).wait(200));

	// c3_0002_图层-5.png
	this.instance_40 = new lib.补间24("synched",0);
	this.instance_40.setTransform(221.4,614.3,0.807,0.807);
	this.instance_40.alpha = 0;
	this.instance_40._off = true;

	this.instance_41 = new lib.补间35("synched",0);
	this.instance_41.setTransform(221.4,600.1,0.807,0.807);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(217).to({_off:false},0).wait(1).to({regX:-5.5,x:217,y:611.9,alpha:0.171},0).wait(1).to({y:610.2,alpha:0.285},0).wait(1).to({y:609,alpha:0.374},0).wait(1).to({y:608,alpha:0.447},0).wait(1).to({y:607.1,alpha:0.508},0).wait(1).to({y:606.3,alpha:0.562},0).wait(1).to({y:605.7,alpha:0.608},0).wait(1).to({y:605.1,alpha:0.65},0).wait(1).to({y:604.5,alpha:0.687},0).wait(1).to({y:604.1,alpha:0.72},0).wait(1).to({y:603.7,alpha:0.75},0).wait(1).to({y:603.3,alpha:0.777},0).wait(1).to({y:602.9,alpha:0.802},0).wait(1).to({y:602.6,alpha:0.824},0).wait(1).to({y:602.3,alpha:0.844},0).wait(1).to({y:602,alpha:0.863},0).wait(1).to({y:601.8,alpha:0.88},0).wait(1).to({y:601.6,alpha:0.895},0).wait(1).to({y:601.4,alpha:0.909},0).wait(1).to({y:601.2,alpha:0.922},0).wait(1).to({y:601,alpha:0.933},0).wait(1).to({y:600.9,alpha:0.944},0).wait(1).to({y:600.8,alpha:0.953},0).wait(1).to({y:600.7,alpha:0.961},0).wait(1).to({y:600.5,alpha:0.968},0).wait(1).to({alpha:0.975},0).wait(1).to({y:600.4,alpha:0.98},0).wait(1).to({y:600.3,alpha:0.985},0).wait(1).to({alpha:0.989},0).wait(1).to({y:600.2,alpha:0.993},0).wait(1).to({alpha:0.995},0).wait(1).to({y:600.1,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(263));
	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(252).to({_off:false},0).wait(48).to({startPosition:0},0).wait(1).to({regX:-5.5,x:217,y:600.2,alpha:0.993},0).wait(1).to({y:600.4,alpha:0.972},0).wait(1).to({y:600.7,alpha:0.936},0).wait(1).to({y:601.2,alpha:0.886},0).wait(1).to({y:601.8,alpha:0.821},0).wait(1).to({y:602.6,alpha:0.744},0).wait(1).to({y:603.4,alpha:0.656},0).wait(1).to({y:604.4,alpha:0.561},0).wait(1).to({y:605.3,alpha:0.463},0).wait(1).to({y:606.2,alpha:0.366},0).wait(1).to({y:607.1,alpha:0.275},0).wait(1).to({y:607.9,alpha:0.194},0).wait(1).to({y:608.6,alpha:0.124},0).wait(1).to({y:609.1,alpha:0.07},0).wait(1).to({y:609.5,alpha:0.031},0).wait(1).to({y:609.7,alpha:0.008},0).wait(1).to({regX:0,x:221.4,y:609.8,alpha:0},0).to({_off:true},1).wait(197));

	// c3_0003_图层-6.png
	this.instance_42 = new lib.补间36("synched",0);
	this.instance_42.setTransform(254.6,647.4,0.807,0.807);
	this.instance_42.alpha = 0;
	this.instance_42._off = true;

	this.instance_43 = new lib.补间37("synched",0);
	this.instance_43.setTransform(254.6,633.2,0.807,0.807);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(199).to({_off:false},0).wait(1).to({regX:2,regY:13,x:256.2,y:655.5,alpha:0.171},0).wait(1).to({y:653.8,alpha:0.285},0).wait(1).to({y:652.6,alpha:0.374},0).wait(1).to({y:651.6,alpha:0.447},0).wait(1).to({y:650.7,alpha:0.508},0).wait(1).to({y:649.9,alpha:0.562},0).wait(1).to({y:649.3,alpha:0.608},0).wait(1).to({y:648.7,alpha:0.65},0).wait(1).to({y:648.1,alpha:0.687},0).wait(1).to({y:647.7,alpha:0.72},0).wait(1).to({y:647.3,alpha:0.75},0).wait(1).to({y:646.9,alpha:0.777},0).wait(1).to({y:646.5,alpha:0.802},0).wait(1).to({y:646.2,alpha:0.824},0).wait(1).to({y:645.9,alpha:0.844},0).wait(1).to({y:645.6,alpha:0.863},0).wait(1).to({y:645.4,alpha:0.88},0).wait(1).to({y:645.2,alpha:0.895},0).wait(1).to({y:645,alpha:0.909},0).wait(1).to({y:644.8,alpha:0.922},0).wait(1).to({y:644.6,alpha:0.933},0).wait(1).to({y:644.5,alpha:0.944},0).wait(1).to({y:644.4,alpha:0.953},0).wait(1).to({y:644.3,alpha:0.961},0).wait(1).to({y:644.1,alpha:0.968},0).wait(1).to({alpha:0.975},0).wait(1).to({y:644,alpha:0.98},0).wait(1).to({y:643.9,alpha:0.985},0).wait(1).to({alpha:0.989},0).wait(1).to({y:643.8,alpha:0.993},0).wait(1).to({alpha:0.995},0).wait(1).to({y:643.7,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(281));
	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(234).to({_off:false},0).wait(69).to({startPosition:0},0).wait(1).to({regX:2,regY:13,x:256.2,y:643.8,alpha:0.993},0).wait(1).to({y:644,alpha:0.972},0).wait(1).to({y:644.3,alpha:0.936},0).wait(1).to({y:644.8,alpha:0.886},0).wait(1).to({y:645.4,alpha:0.821},0).wait(1).to({y:646.2,alpha:0.744},0).wait(1).to({y:647,alpha:0.656},0).wait(1).to({y:648,alpha:0.561},0).wait(1).to({y:648.9,alpha:0.463},0).wait(1).to({y:649.8,alpha:0.366},0).wait(1).to({y:650.7,alpha:0.275},0).wait(1).to({y:651.5,alpha:0.194},0).wait(1).to({y:652.2,alpha:0.124},0).wait(1).to({y:652.7,alpha:0.07},0).wait(1).to({y:653.1,alpha:0.031},0).wait(1).to({y:653.3,alpha:0.008},0).wait(1).to({regX:0,regY:0,x:254.6,y:642.9,alpha:0},0).to({_off:true},1).wait(194));

	// chuang
	this.instance_44 = new lib.元件2();
	this.instance_44.setTransform(200.3,293.7,1.609,1.609,0,0,0,75,75);
	this.instance_44.alpha = 0;
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(178).to({_off:false},0).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.008},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.023},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.082},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.126},0).wait(1).to({alpha:0.153},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.215},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.288},0).wait(1).to({alpha:0.329},0).wait(1).to({alpha:0.372},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.463},0).wait(1).to({alpha:0.511},0).wait(1).to({alpha:0.558},0).wait(1).to({alpha:0.606},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.697},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.817},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.907},0).wait(1).to({alpha:0.93},0).wait(1).to({alpha:0.949},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(77).to({alpha:0},37).to({_off:true},1).wait(183));

	// man 2
	this.instance_45 = new lib.元件7();
	this.instance_45.setTransform(354.8,399.5,1,1,-147.9,0,0,43.5,50);
	this.instance_45.alpha = 0;
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(183).to({_off:false},0).wait(1).to({regX:0,regY:0,x:365,y:465,alpha:0.001},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.009},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0.025},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.051},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.108},0).wait(1).to({alpha:0.132},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.253},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.328},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.41},0).wait(1).to({alpha:0.453},0).wait(1).to({alpha:0.496},0).wait(1).to({alpha:0.539},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.707},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.781},0).wait(1).to({alpha:0.814},0).wait(1).to({alpha:0.845},0).wait(1).to({alpha:0.873},0).wait(1).to({alpha:0.898},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.956},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.989},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:43.5,regY:50,x:354.8,y:399.5,alpha:1},0).wait(70).to({alpha:0},37).to({_off:true},1).wait(183));

	// 图层 17
	this.instance_46 = new lib.补间13("synched",0);
	this.instance_46.setTransform(204.8,415.8,2.092,2.092,-16.7);
	this.instance_46.alpha = 0;
	this.instance_46._off = true;

	this.instance_47 = new lib.补间53("synched",0);
	this.instance_47.setTransform(204.8,415.8);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(149).to({_off:false},0).wait(1).to({scaleX:2.09,scaleY:2.09,alpha:0.001},0).wait(1).to({scaleX:2.09,scaleY:2.09,alpha:0.003},0).wait(1).to({scaleX:2.09,scaleY:2.09,rotation:-16.6,alpha:0.007},0).wait(1).to({scaleX:2.08,scaleY:2.08,rotation:-16.5,alpha:0.012},0).wait(1).to({scaleX:2.07,scaleY:2.07,rotation:-16.4,alpha:0.018},0).wait(1).to({scaleX:2.06,scaleY:2.06,rotation:-16.3,alpha:0.026},0).wait(1).to({scaleX:2.05,scaleY:2.05,rotation:-16.1,alpha:0.036},0).wait(1).to({scaleX:2.04,scaleY:2.04,rotation:-16,alpha:0.046},0).wait(1).to({scaleX:2.03,scaleY:2.03,rotation:-15.8,alpha:0.059},0).wait(1).to({scaleX:2.01,scaleY:2.01,rotation:-15.5,alpha:0.072},0).wait(1).to({scaleX:2,scaleY:2,rotation:-15.3,alpha:0.087},0).wait(1).to({scaleX:1.98,scaleY:1.98,rotation:-15,alpha:0.103},0).wait(1).to({scaleX:1.96,scaleY:1.96,rotation:-14.7,alpha:0.121},0).wait(1).to({scaleX:1.94,scaleY:1.94,rotation:-14.4,alpha:0.139},0).wait(1).to({scaleX:1.92,scaleY:1.92,rotation:-14.1,alpha:0.159},0).wait(1).to({scaleX:1.9,scaleY:1.9,rotation:-13.7,alpha:0.18},0).wait(1).to({scaleX:1.87,scaleY:1.87,rotation:-13.3,alpha:0.203},0).wait(1).to({scaleX:1.85,scaleY:1.85,rotation:-13,alpha:0.226},0).wait(1).to({scaleX:1.82,scaleY:1.82,rotation:-12.6,alpha:0.25},0).wait(1).to({scaleX:1.79,scaleY:1.79,rotation:-12.1,alpha:0.275},0).wait(1).to({scaleX:1.76,scaleY:1.76,rotation:-11.7,alpha:0.301},0).wait(1).to({scaleX:1.73,scaleY:1.73,rotation:-11.3,alpha:0.328},0).wait(1).to({scaleX:1.71,scaleY:1.71,rotation:-10.8,alpha:0.355},0).wait(1).to({scaleX:1.67,scaleY:1.67,rotation:-10.3,alpha:0.383},0).wait(1).to({scaleX:1.64,scaleY:1.64,rotation:-9.9,alpha:0.411},0).wait(1).to({scaleX:1.61,scaleY:1.61,rotation:-9.4,alpha:0.44},0).wait(1).to({scaleX:1.58,scaleY:1.58,rotation:-8.9,alpha:0.469},0).wait(1).to({scaleX:1.55,scaleY:1.55,rotation:-8.4,alpha:0.499},0).wait(1).to({scaleX:1.52,scaleY:1.52,rotation:-7.9,alpha:0.528},0).wait(1).to({scaleX:1.48,scaleY:1.48,rotation:-7.4,alpha:0.557},0).wait(1).to({scaleX:1.45,scaleY:1.45,rotation:-6.9,alpha:0.587},0).wait(1).to({scaleX:1.42,scaleY:1.42,rotation:-6.4,alpha:0.616},0).wait(1).to({scaleX:1.39,scaleY:1.39,rotation:-5.9,alpha:0.645},0).wait(1).to({scaleX:1.36,scaleY:1.36,rotation:-5.5,alpha:0.673},0).wait(1).to({scaleX:1.33,scaleY:1.33,rotation:-5,alpha:0.701},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:-4.6,alpha:0.728},0).wait(1).to({scaleX:1.27,scaleY:1.27,rotation:-4.1,alpha:0.754},0).wait(1).to({scaleX:1.24,scaleY:1.24,rotation:-3.7,alpha:0.78},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:-3.3,alpha:0.804},0).wait(1).to({scaleX:1.19,scaleY:1.19,rotation:-2.9,alpha:0.827},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:-2.5,alpha:0.85},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:-2.2,alpha:0.871},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:-1.8,alpha:0.89},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:-1.5,alpha:0.909},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-1.2,alpha:0.925},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:-1,alpha:0.941},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-0.8,alpha:0.954},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:-0.6,alpha:0.966},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-0.4,alpha:0.976},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-0.3,alpha:0.985},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-0.1,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,alpha:0.999},0).to({_off:true},1).wait(312));
	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(203).to({_off:false},0).wait(91).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,y:416},0).wait(1).to({scaleX:1,scaleY:1,y:416.5,alpha:0.998},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:417.4,alpha:0.995},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:204.9,y:418.7,alpha:0.992},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:420.3,alpha:0.987},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:205,y:422.4,alpha:0.981},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:424.9,alpha:0.974},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:205.1,y:427.8,alpha:0.965},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:205.2,y:431.2,alpha:0.955},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:205.3,y:435.1,alpha:0.944},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:205.4,y:439.4,alpha:0.931},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:205.6,y:444.3,alpha:0.917},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:205.7,y:449.6,alpha:0.902},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:205.9,y:455.5,alpha:0.884},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:206,y:462,alpha:0.866},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:206.2,y:468.9,alpha:0.845},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:206.4,y:476.5,alpha:0.823},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:206.6,y:484.5,alpha:0.8},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:206.9,y:493.2,alpha:0.775},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:207.1,y:502.3,alpha:0.748},0).wait(1).to({scaleX:1.61,scaleY:1.61,x:207.4,y:512,alpha:0.72},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:207.6,y:522.2,alpha:0.69},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:207.9,y:532.8,alpha:0.659},0).wait(1).to({scaleX:1.81,scaleY:1.81,x:208.2,y:543.9,alpha:0.627},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:208.5,y:555.3,alpha:0.594},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:208.8,y:567.1,alpha:0.56},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:209.1,y:579.1,alpha:0.525},0).wait(1).to({scaleX:2.1,scaleY:2.1,x:209.5,y:591.2,alpha:0.49},0).wait(1).to({scaleX:2.18,scaleY:2.18,x:209.8,y:603.4,alpha:0.454},0).wait(1).to({scaleX:2.26,scaleY:2.26,x:210.1,y:615.6,alpha:0.419},0).wait(1).to({scaleX:2.33,scaleY:2.33,x:210.4,y:627.6,alpha:0.384},0).wait(1).to({scaleX:2.41,scaleY:2.41,x:210.8,y:639.4,alpha:0.349},0).wait(1).to({scaleX:2.48,scaleY:2.48,x:211.1,y:651,alpha:0.316},0).wait(1).to({scaleX:2.55,scaleY:2.55,x:211.4,y:662.1,alpha:0.283},0).wait(1).to({scaleX:2.62,scaleY:2.62,x:211.6,y:672.8,alpha:0.252},0).wait(1).to({scaleX:2.68,scaleY:2.68,x:211.9,y:683,alpha:0.222},0).wait(1).to({scaleX:2.74,scaleY:2.74,x:212.2,y:692.6,alpha:0.194},0).wait(1).to({scaleX:2.8,scaleY:2.8,x:212.4,y:701.6,alpha:0.168},0).wait(1).to({scaleX:2.85,scaleY:2.85,x:212.6,y:710,alpha:0.144},0).wait(1).to({scaleX:2.9,scaleY:2.9,x:212.8,y:717.7,alpha:0.121},0).wait(1).to({scaleX:2.94,scaleY:2.94,x:213,y:724.7,alpha:0.101},0).wait(1).to({scaleX:2.98,scaleY:2.98,x:213.2,y:731,alpha:0.083},0).wait(1).to({scaleX:3.02,scaleY:3.02,x:213.3,y:736.7,alpha:0.066},0).wait(1).to({scaleX:3.05,scaleY:3.05,x:213.5,y:741.7,alpha:0.052},0).wait(1).to({scaleX:3.08,scaleY:3.08,x:213.6,y:746,alpha:0.039},0).wait(1).to({scaleX:3.1,scaleY:3.1,x:213.7,y:749.7,alpha:0.028},0).wait(1).to({scaleX:3.12,scaleY:3.12,x:213.8,y:752.7,alpha:0.019},0).wait(1).to({scaleX:3.13,scaleY:3.13,y:755.2,alpha:0.012},0).wait(1).to({scaleX:3.15,scaleY:3.15,x:213.9,y:757.1,alpha:0.007},0).wait(1).to({scaleX:3.15,scaleY:3.15,y:758.4,alpha:0.003},0).wait(1).to({scaleX:3.16,scaleY:3.16,y:759.1,alpha:0.001},0).wait(1).to({scaleX:3.16,scaleY:3.16,x:214,y:759.4,alpha:0},0).to({_off:true},1).wait(168));

	// 图层 3
	this.instance_48 = new lib.补间87("synched",0);
	this.instance_48.setTransform(204.8,416.1);
	this.instance_48.alpha = 0;
	this.instance_48._off = true;

	this.instance_49 = new lib.补间88("synched",0);
	this.instance_49.setTransform(204.8,416.1);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(149).to({_off:false},0).to({_off:true,alpha:1},54).wait(312));
	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(149).to({_off:false},54).wait(91).to({startPosition:0},0).to({scaleX:1.36,scaleY:1.36,alpha:0},52).to({_off:true},1).wait(168));

	// 图层 4
	this.instance_50 = new lib.补间4("synched",0);
	this.instance_50.setTransform(148,653.4,0.775,0.775);
	this.instance_50.alpha = 0;
	this.instance_50._off = true;

	this.instance_51 = new lib.补间5("synched",0);
	this.instance_51.setTransform(148,629.3,0.775,0.775);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(64).to({_off:false},0).wait(1).to({regX:2.5,regY:5.5,x:149.9,y:655,alpha:0.108},0).wait(1).to({y:652.8,alpha:0.198},0).wait(1).to({y:651,alpha:0.275},0).wait(1).to({y:649.4,alpha:0.342},0).wait(1).to({y:647.9,alpha:0.402},0).wait(1).to({y:646.6,alpha:0.454},0).wait(1).to({y:645.5,alpha:0.502},0).wait(1).to({y:644.5,alpha:0.545},0).wait(1).to({y:643.5,alpha:0.584},0).wait(1).to({y:642.7,alpha:0.62},0).wait(1).to({y:641.9,alpha:0.652},0).wait(1).to({y:641.2,alpha:0.682},0).wait(1).to({y:640.5,alpha:0.71},0).wait(1).to({y:639.9,alpha:0.735},0).wait(1).to({y:639.3,alpha:0.759},0).wait(1).to({y:638.8,alpha:0.78},0).wait(1).to({y:638.3,alpha:0.8},0).wait(1).to({y:637.9,alpha:0.818},0).wait(1).to({y:637.5,alpha:0.835},0).wait(1).to({y:637.1,alpha:0.851},0).wait(1).to({y:636.7,alpha:0.866},0).wait(1).to({y:636.4,alpha:0.879},0).wait(1).to({y:636.1,alpha:0.891},0).wait(1).to({y:635.8,alpha:0.903},0).wait(1).to({y:635.6,alpha:0.913},0).wait(1).to({y:635.4,alpha:0.923},0).wait(1).to({y:635.1,alpha:0.932},0).wait(1).to({y:634.9,alpha:0.94},0).wait(1).to({y:634.8,alpha:0.947},0).wait(1).to({y:634.6,alpha:0.954},0).wait(1).to({y:634.5,alpha:0.96},0).wait(1).to({y:634.3,alpha:0.966},0).wait(1).to({y:634.2,alpha:0.971},0).wait(1).to({y:634.1,alpha:0.975},0).wait(1).to({y:634,alpha:0.979},0).wait(1).to({y:633.9,alpha:0.983},0).wait(1).to({y:633.8,alpha:0.986},0).wait(1).to({alpha:0.989},0).wait(1).to({y:633.7,alpha:0.991},0).wait(1).to({alpha:0.993},0).wait(1).to({y:633.6,alpha:0.995},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.998},0).wait(1).to({y:633.5,alpha:0.999},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:148,y:629.3},0).to({_off:true},6).wait(397));
	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(118).to({_off:false},0).wait(1).to({regX:2.5,regY:5.5,x:149.9,y:634,alpha:0.994},0).wait(1).to({y:635.7,alpha:0.973},0).wait(1).to({y:638.5,alpha:0.937},0).wait(1).to({y:642.8,alpha:0.884},0).wait(1).to({y:648.3,alpha:0.815},0).wait(1).to({y:655.1,alpha:0.73},0).wait(1).to({y:662.8,alpha:0.634},0).wait(1).to({y:670.9,alpha:0.532},0).wait(1).to({y:679.1,alpha:0.431},0).wait(1).to({y:686.7,alpha:0.336},0).wait(1).to({y:693.5,alpha:0.251},0).wait(1).to({y:699.2,alpha:0.179},0).wait(1).to({y:703.9,alpha:0.12},0).wait(1).to({y:707.6,alpha:0.074},0).wait(1).to({y:710.3,alpha:0.04},0).wait(1).to({y:712.2,alpha:0.017},0).wait(1).to({y:713.2,alpha:0.004},0).wait(1).to({regX:0,regY:0,x:148,y:709.3,alpha:0},0).to({_off:true},1).wait(378));

	// 图层 11
	this.instance_52 = new lib.补间6("synched",0);
	this.instance_52.setTransform(184.1,618,0.775,0.775);
	this.instance_52.alpha = 0;
	this.instance_52._off = true;

	this.instance_53 = new lib.补间7("synched",0);
	this.instance_53.setTransform(184.1,594,0.775,0.775);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(48).to({_off:false},0).wait(1).to({regX:2,regY:14,x:185.7,y:626.5,alpha:0.097},0).wait(1).to({y:624.5,alpha:0.179},0).wait(1).to({y:622.8,alpha:0.251},0).wait(1).to({y:621.3,alpha:0.313},0).wait(1).to({y:620,alpha:0.369},0).wait(1).to({y:618.7,alpha:0.42},0).wait(1).to({y:617.7,alpha:0.465},0).wait(1).to({y:616.7,alpha:0.507},0).wait(1).to({y:615.7,alpha:0.545},0).wait(1).to({y:614.9,alpha:0.58},0).wait(1).to({y:614.1,alpha:0.612},0).wait(1).to({y:613.4,alpha:0.642},0).wait(1).to({y:612.8,alpha:0.669},0).wait(1).to({y:612.2,alpha:0.695},0).wait(1).to({y:611.6,alpha:0.719},0).wait(1).to({y:611.1,alpha:0.741},0).wait(1).to({y:610.6,alpha:0.761},0).wait(1).to({y:610.1,alpha:0.78},0).wait(1).to({y:609.7,alpha:0.798},0).wait(1).to({y:609.3,alpha:0.814},0).wait(1).to({y:608.9,alpha:0.83},0).wait(1).to({y:608.6,alpha:0.844},0).wait(1).to({y:608.3,alpha:0.858},0).wait(1).to({y:608,alpha:0.87},0).wait(1).to({y:607.7,alpha:0.882},0).wait(1).to({y:607.4,alpha:0.893},0).wait(1).to({y:607.2,alpha:0.903},0).wait(1).to({y:607,alpha:0.912},0).wait(1).to({y:606.7,alpha:0.921},0).wait(1).to({y:606.6,alpha:0.929},0).wait(1).to({y:606.4,alpha:0.936},0).wait(1).to({y:606.2,alpha:0.943},0).wait(1).to({y:606.1,alpha:0.95},0).wait(1).to({y:605.9,alpha:0.955},0).wait(1).to({y:605.8,alpha:0.961},0).wait(1).to({y:605.7,alpha:0.966},0).wait(1).to({y:605.6,alpha:0.97},0).wait(1).to({y:605.5,alpha:0.974},0).wait(1).to({y:605.4,alpha:0.978},0).wait(1).to({y:605.3,alpha:0.981},0).wait(1).to({y:605.2,alpha:0.984},0).wait(1).to({alpha:0.987},0).wait(1).to({y:605.1,alpha:0.989},0).wait(1).to({alpha:0.991},0).wait(1).to({y:605,alpha:0.993},0).wait(1).to({alpha:0.995},0).wait(1).to({y:604.9,alpha:0.996},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(413));
	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(102).to({_off:false},0).wait(19).to({startPosition:0},0).wait(1).to({regX:2,regY:14,x:185.7,y:605.3,alpha:0.994},0).wait(1).to({y:606.8,alpha:0.976},0).wait(1).to({y:609.4,alpha:0.944},0).wait(1).to({y:613.1,alpha:0.897},0).wait(1).to({y:618.1,alpha:0.835},0).wait(1).to({y:624.2,alpha:0.759},0).wait(1).to({y:631.3,alpha:0.671},0).wait(1).to({y:638.9,alpha:0.576},0).wait(1).to({y:646.7,alpha:0.478},0).wait(1).to({y:654.3,alpha:0.385},0).wait(1).to({y:661.2,alpha:0.298},0).wait(1).to({y:667.3,alpha:0.223},0).wait(1).to({y:672.4,alpha:0.159},0).wait(1).to({y:676.6,alpha:0.107},0).wait(1).to({y:679.9,alpha:0.066},0).wait(1).to({y:682.3,alpha:0.036},0).wait(1).to({y:683.9,alpha:0.015},0).wait(1).to({y:684.9,alpha:0.004},0).wait(1).to({regX:0,regY:0,x:184.1,y:674.3,alpha:0},0).to({_off:true},1).wait(374));

	// 图层 10
	this.instance_54 = new lib.补间8("synched",0);
	this.instance_54.setTransform(222.3,673.6,0.775,0.775);
	this.instance_54.alpha = 0;
	this.instance_54._off = true;

	this.instance_55 = new lib.补间9("synched",0);
	this.instance_55.setTransform(222.3,650.2,0.775,0.775);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(32).to({_off:false},0).wait(1).to({regX:2.5,regY:-21.5,x:224.2,y:654.7,alpha:0.097},0).wait(1).to({y:652.8,alpha:0.179},0).wait(1).to({y:651.1,alpha:0.251},0).wait(1).to({y:649.6,alpha:0.313},0).wait(1).to({y:648.3,alpha:0.369},0).wait(1).to({y:647.1,alpha:0.42},0).wait(1).to({y:646.1,alpha:0.465},0).wait(1).to({y:645.1,alpha:0.507},0).wait(1).to({y:644.2,alpha:0.545},0).wait(1).to({y:643.4,alpha:0.58},0).wait(1).to({y:642.6,alpha:0.612},0).wait(1).to({y:641.9,alpha:0.642},0).wait(1).to({y:641.3,alpha:0.669},0).wait(1).to({y:640.7,alpha:0.695},0).wait(1).to({y:640.1,alpha:0.719},0).wait(1).to({y:639.6,alpha:0.741},0).wait(1).to({y:639.1,alpha:0.761},0).wait(1).to({y:638.7,alpha:0.78},0).wait(1).to({y:638.3,alpha:0.798},0).wait(1).to({y:637.9,alpha:0.814},0).wait(1).to({y:637.5,alpha:0.83},0).wait(1).to({y:637.2,alpha:0.844},0).wait(1).to({y:636.9,alpha:0.858},0).wait(1).to({y:636.6,alpha:0.87},0).wait(1).to({y:636.3,alpha:0.882},0).wait(1).to({y:636.1,alpha:0.893},0).wait(1).to({y:635.8,alpha:0.903},0).wait(1).to({y:635.6,alpha:0.912},0).wait(1).to({y:635.4,alpha:0.921},0).wait(1).to({y:635.2,alpha:0.929},0).wait(1).to({y:635,alpha:0.936},0).wait(1).to({y:634.9,alpha:0.943},0).wait(1).to({y:634.7,alpha:0.95},0).wait(1).to({y:634.6,alpha:0.955},0).wait(1).to({y:634.5,alpha:0.961},0).wait(1).to({y:634.4,alpha:0.966},0).wait(1).to({y:634.2,alpha:0.97},0).wait(1).to({alpha:0.974},0).wait(1).to({y:634.1,alpha:0.978},0).wait(1).to({y:634,alpha:0.981},0).wait(1).to({y:633.9,alpha:0.984},0).wait(1).to({alpha:0.987},0).wait(1).to({y:633.8,alpha:0.989},0).wait(1).to({y:633.7,alpha:0.991},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.995},0).wait(1).to({y:633.6,alpha:0.996},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(429));
	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(86).to({_off:false},0).wait(38).to({startPosition:0},0).wait(1).to({regX:2.5,regY:-21.5,x:224.2,y:634,alpha:0.994},0).wait(1).to({y:635.5,alpha:0.976},0).wait(1).to({x:224.1,y:638.1,alpha:0.944},0).wait(1).to({x:224,y:641.8,alpha:0.897},0).wait(1).to({x:223.9,y:646.8,alpha:0.835},0).wait(1).to({x:223.7,y:652.9,alpha:0.759},0).wait(1).to({x:223.6,y:660,alpha:0.671},0).wait(1).to({x:223.4,y:667.6,alpha:0.576},0).wait(1).to({x:223.2,y:675.4,alpha:0.478},0).wait(1).to({x:223,y:683,alpha:0.385},0).wait(1).to({x:222.8,y:689.9,alpha:0.298},0).wait(1).to({x:222.7,y:696,alpha:0.223},0).wait(1).to({x:222.6,y:701.1,alpha:0.159},0).wait(1).to({x:222.5,y:705.3,alpha:0.107},0).wait(1).to({x:222.4,y:708.6,alpha:0.066},0).wait(1).to({x:222.3,y:711,alpha:0.036},0).wait(1).to({y:712.6,alpha:0.015},0).wait(1).to({y:713.6,alpha:0.004},0).wait(1).to({regX:0,regY:0,x:220.3,y:730.5,alpha:0},0).to({_off:true},1).wait(371));

	// 图层 8
	this.instance_56 = new lib.补间10("synched",0);
	this.instance_56.setTransform(258.8,673.1,0.775,0.775);
	this.instance_56.alpha = 0;
	this.instance_56._off = true;

	this.instance_57 = new lib.补间11("synched",0);
	this.instance_57.setTransform(258.8,648.7,0.775,0.775);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(18).to({_off:false},0).wait(1).to({regX:2.5,regY:16.5,x:260.7,y:683.5,alpha:0.097},0).wait(1).to({y:681.5,alpha:0.179},0).wait(1).to({y:679.7,alpha:0.251},0).wait(1).to({y:678.2,alpha:0.313},0).wait(1).to({y:676.8,alpha:0.369},0).wait(1).to({y:675.6,alpha:0.42},0).wait(1).to({y:674.5,alpha:0.465},0).wait(1).to({y:673.5,alpha:0.507},0).wait(1).to({y:672.6,alpha:0.545},0).wait(1).to({y:671.7,alpha:0.58},0).wait(1).to({y:670.9,alpha:0.612},0).wait(1).to({y:670.2,alpha:0.642},0).wait(1).to({y:669.5,alpha:0.669},0).wait(1).to({y:668.9,alpha:0.695},0).wait(1).to({y:668.3,alpha:0.719},0).wait(1).to({y:667.8,alpha:0.741},0).wait(1).to({y:667.3,alpha:0.761},0).wait(1).to({y:666.8,alpha:0.78},0).wait(1).to({y:666.4,alpha:0.798},0).wait(1).to({y:666,alpha:0.814},0).wait(1).to({y:665.6,alpha:0.83},0).wait(1).to({y:665.2,alpha:0.844},0).wait(1).to({y:664.9,alpha:0.858},0).wait(1).to({y:664.6,alpha:0.87},0).wait(1).to({y:664.3,alpha:0.882},0).wait(1).to({y:664.1,alpha:0.893},0).wait(1).to({y:663.8,alpha:0.903},0).wait(1).to({y:663.6,alpha:0.912},0).wait(1).to({y:663.4,alpha:0.921},0).wait(1).to({y:663.2,alpha:0.929},0).wait(1).to({y:663,alpha:0.936},0).wait(1).to({y:662.8,alpha:0.943},0).wait(1).to({y:662.7,alpha:0.95},0).wait(1).to({y:662.5,alpha:0.955},0).wait(1).to({y:662.4,alpha:0.961},0).wait(1).to({y:662.3,alpha:0.966},0).wait(1).to({y:662.2,alpha:0.97},0).wait(1).to({y:662.1,alpha:0.974},0).wait(1).to({y:662,alpha:0.978},0).wait(1).to({y:661.9,alpha:0.981},0).wait(1).to({y:661.8,alpha:0.984},0).wait(1).to({alpha:0.987},0).wait(1).to({y:661.7,alpha:0.989},0).wait(1).to({alpha:0.991},0).wait(1).to({y:661.6,alpha:0.993},0).wait(1).to({alpha:0.995},0).wait(1).to({y:661.5,alpha:0.996},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(443));
	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(72).to({_off:false},0).wait(56).to({startPosition:0},0).wait(1).to({regX:2.5,regY:16.5,x:260.7,y:662,alpha:0.994},0).wait(1).to({x:260.6,y:663.6,alpha:0.973},0).wait(1).to({x:260.5,y:666.5,alpha:0.937},0).wait(1).to({x:260.4,y:670.7,alpha:0.884},0).wait(1).to({x:260.2,y:676.3,alpha:0.815},0).wait(1).to({x:260,y:683.1,alpha:0.73},0).wait(1).to({x:259.7,y:690.8,alpha:0.634},0).wait(1).to({x:259.5,y:699,alpha:0.532},0).wait(1).to({x:259.2,y:707.1,alpha:0.431},0).wait(1).to({x:259,y:714.8,alpha:0.336},0).wait(1).to({x:258.8,y:721.6,alpha:0.251},0).wait(1).to({x:258.6,y:727.3,alpha:0.179},0).wait(1).to({x:258.4,y:732.1,alpha:0.12},0).wait(1).to({x:258.3,y:735.8,alpha:0.074},0).wait(1).to({x:258.2,y:738.5,alpha:0.04},0).wait(1).to({x:258.1,y:740.3,alpha:0.017},0).wait(1).to({y:741.4,alpha:0.004},0).wait(1).to({regX:0,regY:0,x:256.2,y:728.9,alpha:0},0).to({_off:true},1).wait(368));

	// 图层 7
	this.instance_58 = new lib.元件17();
	this.instance_58.setTransform(-188.1,-775.3,1,1,0,0,0,30,15);
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(18).to({_off:false},0).wait(1).to({regX:332.9,regY:301.1,x:114.8,y:-449.8},0).wait(1).to({y:-413.5},0).wait(1).to({y:-379.9},0).wait(1).to({y:-348.7},0).wait(1).to({y:-319.7},0).wait(1).to({y:-292.7},0).wait(1).to({y:-267.5},0).wait(1).to({y:-243.9},0).wait(1).to({y:-221.8},0).wait(1).to({y:-201.2},0).wait(1).to({y:-181.8},0).wait(1).to({y:-163.6},0).wait(1).to({y:-146.5},0).wait(1).to({y:-130.4},0).wait(1).to({y:-115.3},0).wait(1).to({y:-101},0).wait(1).to({y:-87.6},0).wait(1).to({y:-75},0).wait(1).to({y:-63.2},0).wait(1).to({y:-52},0).wait(1).to({y:-41.4},0).wait(1).to({y:-31.5},0).wait(1).to({y:-22.2},0).wait(1).to({y:-13.4},0).wait(1).to({y:-5.2},0).wait(1).to({y:2.6},0).wait(1).to({y:9.9},0).wait(1).to({y:16.8},0).wait(1).to({y:23.2},0).wait(1).to({y:29.3},0).wait(1).to({y:34.9},0).wait(1).to({y:40.2},0).wait(1).to({y:45.2},0).wait(1).to({y:49.8},0).wait(1).to({y:54.1},0).wait(1).to({y:58.1},0).wait(1).to({y:61.9},0).wait(1).to({y:65.3},0).wait(1).to({y:68.5},0).wait(1).to({y:71.5},0).wait(1).to({y:74.2},0).wait(1).to({y:76.7},0).wait(1).to({y:78.9},0).wait(1).to({y:81},0).wait(1).to({y:82.8},0).wait(1).to({y:84.5},0).wait(1).to({y:85.9},0).wait(1).to({y:87.2},0).wait(1).to({y:88.3},0).wait(1).to({y:89.3},0).wait(1).to({y:90.1},0).wait(1).to({y:90.8},0).wait(1).to({y:91.3},0).wait(1).to({regX:30,regY:15,x:-188.1,y:-194.5},0).wait(59).to({regX:332.9,regY:301.1,x:114.8,y:91.8},0).wait(1).to({y:92.2},0).wait(1).to({y:93},0).wait(1).to({y:94.1},0).wait(1).to({y:95.6},0).wait(1).to({y:97.4},0).wait(1).to({y:99.6},0).wait(1).to({x:114.9,y:102.1},0).wait(1).to({y:105.2},0).wait(1).to({y:108.6},0).wait(1).to({y:112.5},0).wait(1).to({y:117},0).wait(1).to({y:121.9},0).wait(1).to({x:115,y:127.4},0).wait(1).to({y:133.5},0).wait(1).to({y:140.3},0).wait(1).to({x:115.1,y:147.7},0).wait(1).to({y:155.8},0).wait(1).to({x:115.2,y:164.8},0).wait(1).to({y:174.5},0).wait(1).to({y:185.2},0).wait(1).to({x:115.3,y:196.8},0).wait(1).to({x:115.4,y:209.5},0).wait(1).to({y:223.3},0).wait(1).to({x:115.5,y:238.3},0).wait(1).to({x:115.6,y:254.7},0).wait(1).to({x:115.7,y:272.6},0).wait(1).to({x:115.8,y:292.1},0).wait(1).to({x:115.9,y:313.3},0).wait(1).to({x:116,y:336.4},0).wait(1).to({x:116.1,y:361.6},0).wait(1).to({x:116.2,y:389},0).wait(1).to({x:116.4,y:418.8},0).wait(1).to({x:116.5,y:450.9},0).wait(1).to({x:116.7,y:485.4},0).wait(1).to({x:116.9,y:522.1},0).wait(1).to({x:117.1,y:560.5},0).wait(1).to({x:117.2,y:599.8},0).wait(1).to({x:117.4,y:639.3},0).wait(1).to({x:117.6,y:677.8},0).wait(1).to({x:117.8,y:714.2},0).wait(1).to({x:118,y:747.9},0).wait(1).to({x:118.1,y:778.4},0).wait(1).to({x:118.2,y:805.5},0).wait(1).to({x:118.3,y:829.2},0).wait(1).to({x:118.4,y:849.7},0).wait(1).to({x:118.5,y:867.3},0).wait(1).to({x:118.6,y:882.2},0).wait(1).to({x:118.7,y:894.7},0).wait(1).to({y:905.1},0).wait(1).to({x:118.8,y:913.5},0).wait(1).to({y:920.3},0).wait(1).to({y:925.5},0).wait(1).to({y:929.4},0).wait(1).to({y:932},0).wait(1).to({y:933.5},0).wait(1).to({regX:30,regY:15,x:-184.1,y:647.9},0).to({_off:true},1).wait(327));

	// man copy 0
	this.instance_59 = new lib.元件7();
	this.instance_59.setTransform(91.7,65.1,0.318,0.318,0,0,0,40.1,50);
	this.instance_59.alpha = 0;
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(52).to({_off:false},0).wait(1).to({regX:0,regY:0,x:78.9,y:49.1,alpha:0.001},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0.005},0).wait(1).to({y:49,alpha:0.008},0).wait(1).to({alpha:0.013},0).wait(1).to({y:48.9,alpha:0.019},0).wait(1).to({y:48.8,alpha:0.026},0).wait(1).to({y:48.7,alpha:0.034},0).wait(1).to({y:48.6,alpha:0.043},0).wait(1).to({y:48.4,alpha:0.053},0).wait(1).to({y:48.3,alpha:0.064},0).wait(1).to({y:48.1,alpha:0.077},0).wait(1).to({y:47.9,alpha:0.09},0).wait(1).to({y:47.7,alpha:0.105},0).wait(1).to({y:47.5,alpha:0.121},0).wait(1).to({y:47.2,alpha:0.138},0).wait(1).to({y:47,alpha:0.156},0).wait(1).to({y:46.7,alpha:0.175},0).wait(1).to({y:46.5,alpha:0.195},0).wait(1).to({y:46.2,alpha:0.216},0).wait(1).to({y:45.9,alpha:0.237},0).wait(1).to({y:45.6,alpha:0.26},0).wait(1).to({y:45.2,alpha:0.284},0).wait(1).to({y:44.9,alpha:0.308},0).wait(1).to({y:44.6,alpha:0.333},0).wait(1).to({y:44.2,alpha:0.359},0).wait(1).to({y:43.8,alpha:0.385},0).wait(1).to({y:43.5,alpha:0.412},0).wait(1).to({y:43.1,alpha:0.439},0).wait(1).to({y:42.7,alpha:0.466},0).wait(1).to({y:42.3,alpha:0.493},0).wait(1).to({y:42,alpha:0.521},0).wait(1).to({y:41.6,alpha:0.548},0).wait(1).to({y:41.2,alpha:0.576},0).wait(1).to({y:40.8,alpha:0.603},0).wait(1).to({y:40.5,alpha:0.63},0).wait(1).to({y:40.1,alpha:0.656},0).wait(1).to({y:39.7,alpha:0.682},0).wait(1).to({y:39.4,alpha:0.707},0).wait(1).to({y:39,alpha:0.732},0).wait(1).to({y:38.7,alpha:0.756},0).wait(1).to({y:38.4,alpha:0.779},0).wait(1).to({y:38.1,alpha:0.801},0).wait(1).to({y:37.8,alpha:0.822},0).wait(1).to({y:37.5,alpha:0.842},0).wait(1).to({y:37.3,alpha:0.861},0).wait(1).to({y:37,alpha:0.879},0).wait(1).to({y:36.8,alpha:0.896},0).wait(1).to({y:36.6,alpha:0.911},0).wait(1).to({y:36.4,alpha:0.925},0).wait(1).to({y:36.2,alpha:0.938},0).wait(1).to({y:36,alpha:0.95},0).wait(1).to({y:35.9,alpha:0.961},0).wait(1).to({y:35.8,alpha:0.97},0).wait(1).to({y:35.7,alpha:0.978},0).wait(1).to({y:35.6,alpha:0.985},0).wait(1).to({y:35.5,alpha:0.99},0).wait(1).to({y:35.4,alpha:0.995},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:40.1,regY:50,x:91.7,y:51.3,alpha:1},0).wait(18).to({regX:0,regY:0,x:78.9,y:35.5},0).wait(1).to({y:35.9,alpha:0.999},0).wait(1).to({y:36.7,alpha:0.998},0).wait(1).to({x:79,y:37.8,alpha:0.997},0).wait(1).to({y:39.2,alpha:0.995},0).wait(1).to({y:41,alpha:0.993},0).wait(1).to({x:79.1,y:43.2,alpha:0.991},0).wait(1).to({x:79.2,y:45.8,alpha:0.988},0).wait(1).to({y:48.8,alpha:0.984},0).wait(1).to({x:79.3,y:52.3,alpha:0.98},0).wait(1).to({x:79.4,y:56.2,alpha:0.975},0).wait(1).to({x:79.5,y:60.6,alpha:0.97},0).wait(1).to({x:79.7,y:65.5,alpha:0.964},0).wait(1).to({x:79.8,y:71,alpha:0.958},0).wait(1).to({x:80,y:77.1,alpha:0.95},0).wait(1).to({x:80.1,y:83.8,alpha:0.942},0).wait(1).to({x:80.3,y:91.2,alpha:0.933},0).wait(1).to({x:80.5,y:99.3,alpha:0.924},0).wait(1).to({x:80.8,y:108.2,alpha:0.913},0).wait(1).to({x:81,y:117.9,alpha:0.902},0).wait(1).to({x:81.3,y:128.5,alpha:0.889},0).wait(1).to({x:81.6,y:140.1,alpha:0.875},0).wait(1).to({x:81.9,y:152.7,alpha:0.86},0).wait(1).to({x:82.3,y:166.5,alpha:0.844},0).wait(1).to({x:82.7,y:181.5,alpha:0.826},0).wait(1).to({x:83.1,y:197.8,alpha:0.806},0).wait(1).to({x:83.5,y:215.6,alpha:0.785},0).wait(1).to({x:84,y:235,alpha:0.762},0).wait(1).to({x:84.6,y:256.2,alpha:0.737},0).wait(1).to({x:85.2,y:279.2,alpha:0.709},0).wait(1).to({x:85.8,y:304.3,alpha:0.679},0).wait(1).to({x:86.5,y:331.7,alpha:0.647},0).wait(1).to({x:87.3,y:361.3,alpha:0.612},0).wait(1).to({x:88.1,y:393.3,alpha:0.573},0).wait(1).to({x:89,y:427.7,alpha:0.532},0).wait(1).to({x:89.9,y:464.2,alpha:0.489},0).wait(1).to({x:90.9,y:502.5,alpha:0.443},0).wait(1).to({x:91.9,y:541.7,alpha:0.397},0).wait(1).to({x:92.9,y:581,alpha:0.35},0).wait(1).to({x:93.9,y:619.3,alpha:0.304},0).wait(1).to({x:94.9,y:655.7,alpha:0.261},0).wait(1).to({x:95.7,y:689.2,alpha:0.221},0).wait(1).to({x:96.5,y:719.6,alpha:0.185},0).wait(1).to({x:97.2,y:746.6,alpha:0.152},0).wait(1).to({x:97.8,y:770.2,alpha:0.124},0).wait(1).to({x:98.3,y:790.6,alpha:0.1},0).wait(1).to({x:98.8,y:808.1,alpha:0.079},0).wait(1).to({x:99.2,y:823,alpha:0.061},0).wait(1).to({x:99.5,y:835.5,alpha:0.047},0).wait(1).to({x:99.8,y:845.8,alpha:0.034},0).wait(1).to({x:100,y:854.2,alpha:0.024},0).wait(1).to({x:100.1,y:860.9,alpha:0.016},0).wait(1).to({x:100.3,y:866.2,alpha:0.01},0).wait(1).to({x:100.4,y:870,alpha:0.005},0).wait(1).to({y:872.6,alpha:0.002},0).wait(1).to({x:100.5,y:874.1,alpha:0.001},0).wait(1).to({regX:40.1,regY:50,x:113.3,y:890.5,alpha:0},0).to({_off:true},1).wait(327));

	// 图层 6
	this.instance_60 = new lib.元件16();
	this.instance_60.setTransform(16.9,-878.4,1.419,1.419,0,0,0,40,25.1);
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(9).to({_off:false},0).wait(1).to({regX:262.6,regY:346,x:332.7,y:-389.2},0).wait(1).to({y:-357.6},0).wait(1).to({y:-328.1},0).wait(1).to({y:-300.4},0).wait(1).to({y:-274.4},0).wait(1).to({y:-250},0).wait(1).to({y:-227},0).wait(1).to({y:-205.3},0).wait(1).to({y:-184.9},0).wait(1).to({y:-165.5},0).wait(1).to({y:-147.3},0).wait(1).to({y:-130},0).wait(1).to({y:-113.6},0).wait(1).to({y:-98.1},0).wait(1).to({y:-83.4},0).wait(1).to({y:-69.5},0).wait(1).to({y:-56.3},0).wait(1).to({y:-43.7},0).wait(1).to({y:-31.8},0).wait(1).to({y:-20.5},0).wait(1).to({y:-9.8},0).wait(1).to({y:0.4},0).wait(1).to({y:10.1},0).wait(1).to({y:19.3},0).wait(1).to({y:28},0).wait(1).to({y:36.3},0).wait(1).to({y:44.2},0).wait(1).to({y:51.7},0).wait(1).to({y:58.8},0).wait(1).to({y:65.5},0).wait(1).to({y:71.9},0).wait(1).to({y:78},0).wait(1).to({y:83.7},0).wait(1).to({y:89.2},0).wait(1).to({y:94.3},0).wait(1).to({y:99.2},0).wait(1).to({y:103.8},0).wait(1).to({y:108.1},0).wait(1).to({y:112.2},0).wait(1).to({y:116.1},0).wait(1).to({y:119.7},0).wait(1).to({y:123.1},0).wait(1).to({y:126.3},0).wait(1).to({y:129.3},0).wait(1).to({y:132.1},0).wait(1).to({y:134.8},0).wait(1).to({y:137.2},0).wait(1).to({y:139.5},0).wait(1).to({y:141.6},0).wait(1).to({y:143.5},0).wait(1).to({y:145.3},0).wait(1).to({y:147},0).wait(1).to({y:148.5},0).wait(1).to({y:149.8},0).wait(1).to({y:151},0).wait(1).to({y:152.1},0).wait(1).to({y:153.1},0).wait(1).to({y:154},0).wait(1).to({y:154.7},0).wait(1).to({y:155.3},0).wait(1).to({y:155.8},0).wait(1).to({y:156.2},0).wait(1).to({regX:40,regY:25.1,x:16.9,y:-298.8},0).wait(59).to({regX:262.6,regY:346,x:332.8,y:156.7},0).wait(1).to({y:157.3},0).wait(1).to({y:158.2},0).wait(1).to({y:159.5},0).wait(1).to({y:161.3},0).wait(1).to({y:163.5},0).wait(1).to({y:166.2},0).wait(1).to({y:169.3},0).wait(1).to({y:173},0).wait(1).to({y:177.3},0).wait(1).to({x:332.9,y:182.1},0).wait(1).to({y:187.6},0).wait(1).to({y:193.8},0).wait(1).to({x:333,y:200.7},0).wait(1).to({y:208.4},0).wait(1).to({y:216.9},0).wait(1).to({x:333.1,y:226.3},0).wait(1).to({y:236.7},0).wait(1).to({x:333.2,y:248.2},0).wait(1).to({x:333.3,y:260.8},0).wait(1).to({y:274.6},0).wait(1).to({x:333.4,y:289.8},0).wait(1).to({x:333.5,y:306.6},0).wait(1).to({x:333.6,y:325},0).wait(1).to({x:333.7,y:345.2},0).wait(1).to({x:333.8,y:367.4},0).wait(1).to({x:333.9,y:391.8},0).wait(1).to({x:334,y:418.6},0).wait(1).to({x:334.2,y:448},0).wait(1).to({x:334.3,y:480.2},0).wait(1).to({x:334.5,y:515.2},0).wait(1).to({x:334.7,y:553.1},0).wait(1).to({x:334.9,y:593.5},0).wait(1).to({x:335.1,y:635.9},0).wait(1).to({x:335.3,y:679.2},0).wait(1).to({x:335.5,y:722.1},0).wait(1).to({x:335.7,y:763.3},0).wait(1).to({x:335.9,y:801.5},0).wait(1).to({x:336,y:836},0).wait(1).to({x:336.2,y:866.5},0).wait(1).to({x:336.3,y:892.8},0).wait(1).to({x:336.4,y:915.3},0).wait(1).to({x:336.5,y:934.3},0).wait(1).to({x:336.6,y:950.2},0).wait(1).to({y:963.2},0).wait(1).to({x:336.7,y:973.8},0).wait(1).to({y:982.2},0).wait(1).to({x:336.8,y:988.6},0).wait(1).to({y:993.3},0).wait(1).to({y:996.5},0).wait(1).to({y:998.3},0).wait(1).to({regX:40,regY:25.1,x:20.9,y:543.5},0).to({_off:true},1).wait(332));

	// man copy 1
	this.instance_61 = new lib.元件7();
	this.instance_61.setTransform(293.9,115.1,0.548,0.548,0,0,0,40.1,50.1);
	this.instance_61.alpha = 0;
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(43).to({_off:false},0).wait(1).to({regX:0,regY:0,x:271.9,y:87.6,alpha:0.001},0).wait(1).to({y:87.5,alpha:0.003},0).wait(1).to({y:87.4,alpha:0.008},0).wait(1).to({y:87.3,alpha:0.014},0).wait(1).to({y:87.2,alpha:0.022},0).wait(1).to({y:87,alpha:0.032},0).wait(1).to({y:86.8,alpha:0.044},0).wait(1).to({y:86.5,alpha:0.058},0).wait(1).to({y:86.2,alpha:0.074},0).wait(1).to({y:85.8,alpha:0.092},0).wait(1).to({y:85.5,alpha:0.112},0).wait(1).to({y:85,alpha:0.134},0).wait(1).to({y:84.6,alpha:0.158},0).wait(1).to({y:84.1,alpha:0.184},0).wait(1).to({y:83.6,alpha:0.211},0).wait(1).to({y:83,alpha:0.24},0).wait(1).to({y:82.4,alpha:0.271},0).wait(1).to({y:81.8,alpha:0.303},0).wait(1).to({y:81.2,alpha:0.337},0).wait(1).to({y:80.6,alpha:0.371},0).wait(1).to({y:79.9,alpha:0.406},0).wait(1).to({y:79.2,alpha:0.442},0).wait(1).to({y:78.5,alpha:0.479},0).wait(1).to({y:77.8,alpha:0.515},0).wait(1).to({y:77.1,alpha:0.551},0).wait(1).to({y:76.4,alpha:0.588},0).wait(1).to({y:75.8,alpha:0.623},0).wait(1).to({y:75.1,alpha:0.658},0).wait(1).to({y:74.5,alpha:0.691},0).wait(1).to({y:73.8,alpha:0.724},0).wait(1).to({y:73.3,alpha:0.755},0).wait(1).to({y:72.7,alpha:0.785},0).wait(1).to({y:72.2,alpha:0.812},0).wait(1).to({y:71.7,alpha:0.839},0).wait(1).to({y:71.2,alpha:0.863},0).wait(1).to({y:70.8,alpha:0.885},0).wait(1).to({y:70.4,alpha:0.905},0).wait(1).to({y:70,alpha:0.924},0).wait(1).to({y:69.7,alpha:0.94},0).wait(1).to({y:69.5,alpha:0.954},0).wait(1).to({y:69.2,alpha:0.967},0).wait(1).to({y:69,alpha:0.977},0).wait(1).to({y:68.9,alpha:0.985},0).wait(1).to({y:68.8,alpha:0.992},0).wait(1).to({y:68.7,alpha:0.996},0).wait(1).to({y:68.6,alpha:0.999},0).wait(1).to({regX:40.1,regY:50.1,x:293.9,y:96.1,alpha:1},0).wait(41).to({regX:0,regY:0,x:271.9,y:68.8},0).wait(1).to({y:69.3,alpha:0.999},0).wait(1).to({y:70.3,alpha:0.998},0).wait(1).to({x:272,y:71.6,alpha:0.996},0).wait(1).to({x:272.1,y:73.3,alpha:0.994},0).wait(1).to({x:272.2,y:75.6,alpha:0.992},0).wait(1).to({x:272.3,y:78.2,alpha:0.989},0).wait(1).to({x:272.4,y:81.4,alpha:0.985},0).wait(1).to({x:272.6,y:85.1,alpha:0.98},0).wait(1).to({x:272.8,y:89.4,alpha:0.975},0).wait(1).to({x:273,y:94.3,alpha:0.97},0).wait(1).to({x:273.3,y:99.8,alpha:0.963},0).wait(1).to({x:273.6,y:106,alpha:0.956},0).wait(1).to({x:273.9,y:112.9,alpha:0.948},0).wait(1).to({x:274.3,y:120.6,alpha:0.938},0).wait(1).to({x:274.7,y:129.2,alpha:0.928},0).wait(1).to({x:275.1,y:138.6,alpha:0.917},0).wait(1).to({x:275.6,y:149.1,alpha:0.905},0).wait(1).to({x:276.1,y:160.6,alpha:0.891},0).wait(1).to({x:276.7,y:173.2,alpha:0.876},0).wait(1).to({x:277.3,y:187.1,alpha:0.86},0).wait(1).to({x:278.1,y:202.4,alpha:0.842},0).wait(1).to({x:278.8,y:219.2,alpha:0.822},0).wait(1).to({x:279.7,y:237.7,alpha:0.8},0).wait(1).to({x:280.6,y:257.9,alpha:0.776},0).wait(1).to({x:281.7,y:280.2,alpha:0.75},0).wait(1).to({x:282.8,y:304.7,alpha:0.721},0).wait(1).to({x:284,y:331.6,alpha:0.689},0).wait(1).to({x:285.4,y:361.2,alpha:0.654},0).wait(1).to({x:286.9,y:393.5,alpha:0.616},0).wait(1).to({x:288.5,y:428.7,alpha:0.574},0).wait(1).to({x:290.3,y:466.7,alpha:0.529},0).wait(1).to({x:292.2,y:507.3,alpha:0.481},0).wait(1).to({x:294.2,y:549.9,alpha:0.431},0).wait(1).to({x:296.2,y:593.3,alpha:0.379},0).wait(1).to({x:298.2,y:636.4,alpha:0.329},0).wait(1).to({x:300.1,y:677.7,alpha:0.28},0).wait(1).to({x:301.9,y:716.1,alpha:0.234},0).wait(1).to({x:303.5,y:750.8,alpha:0.193},0).wait(1).to({x:304.9,y:781.3,alpha:0.157},0).wait(1).to({x:306.1,y:807.8,alpha:0.126},0).wait(1).to({x:307.2,y:830.4,alpha:0.099},0).wait(1).to({x:308,y:849.4,alpha:0.077},0).wait(1).to({x:308.8,y:865.3,alpha:0.058},0).wait(1).to({x:309.4,y:878.4,alpha:0.042},0).wait(1).to({x:309.9,y:889,alpha:0.03},0).wait(1).to({x:310.3,y:897.4,alpha:0.02},0).wait(1).to({x:310.6,y:903.9,alpha:0.012},0).wait(1).to({x:310.8,y:908.6,alpha:0.007},0).wait(1).to({x:310.9,y:911.8,alpha:0.003},0).wait(1).to({x:311,y:913.6,alpha:0.001},0).wait(1).to({regX:40.1,regY:50.1,x:333.1,y:941.7,alpha:0},0).to({_off:true},1).wait(332));

	// 图层 5
	this.instance_62 = new lib.元件15();
	this.instance_62.setTransform(43.5,-522.9,1,1,0,0,0,100,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(1).to({regX:260.6,regY:357,x:204.1,y:-225.5},0).wait(1).to({y:-196.9},0).wait(1).to({y:-170},0).wait(1).to({y:-144.6},0).wait(1).to({y:-120.6},0).wait(1).to({y:-97.9},0).wait(1).to({y:-76.4},0).wait(1).to({y:-56},0).wait(1).to({y:-36.6},0).wait(1).to({y:-18.3},0).wait(1).to({y:-0.8},0).wait(1).to({y:15.8},0).wait(1).to({y:31.7},0).wait(1).to({y:46.7},0).wait(1).to({y:61.1},0).wait(1).to({y:74.8},0).wait(1).to({y:87.8},0).wait(1).to({y:100.3},0).wait(1).to({y:112.2},0).wait(1).to({y:123.5},0).wait(1).to({y:134.3},0).wait(1).to({y:144.7},0).wait(1).to({y:154.6},0).wait(1).to({y:164},0).wait(1).to({y:173},0).wait(1).to({y:181.6},0).wait(1).to({y:189.8},0).wait(1).to({y:197.7},0).wait(1).to({y:205.2},0).wait(1).to({y:212.4},0).wait(1).to({y:219.2},0).wait(1).to({y:225.8},0).wait(1).to({y:232},0).wait(1).to({y:238},0).wait(1).to({y:243.7},0).wait(1).to({y:249.1},0).wait(1).to({y:254.2},0).wait(1).to({y:259.2},0).wait(1).to({y:263.9},0).wait(1).to({y:268.3},0).wait(1).to({y:272.6},0).wait(1).to({y:276.6},0).wait(1).to({y:280.5},0).wait(1).to({y:284.1},0).wait(1).to({y:287.6},0).wait(1).to({y:290.8},0).wait(1).to({y:293.9},0).wait(1).to({y:296.9},0).wait(1).to({y:299.6},0).wait(1).to({y:302.3},0).wait(1).to({y:304.7},0).wait(1).to({y:307},0).wait(1).to({y:309.2},0).wait(1).to({y:311.2},0).wait(1).to({y:313.1},0).wait(1).to({y:314.9},0).wait(1).to({y:316.6},0).wait(1).to({y:318.1},0).wait(1).to({y:319.5},0).wait(1).to({y:320.8},0).wait(1).to({y:322},0).wait(1).to({y:323.1},0).wait(1).to({y:324.1},0).wait(1).to({y:325},0).wait(1).to({y:325.8},0).wait(1).to({y:326.5},0).wait(1).to({y:327.1},0).wait(1).to({y:327.6},0).wait(1).to({y:328},0).wait(1).to({y:328.4},0).wait(1).to({regX:100,regY:90,x:43.5,y:61.6},0).wait(60).to({regX:260.6,regY:357,x:204.1,y:328.9},0).wait(1).to({y:329.6},0).wait(1).to({y:330.8},0).wait(1).to({y:332.5},0).wait(1).to({y:334.8},0).wait(1).to({y:337.6},0).wait(1).to({x:204.2,y:341.1},0).wait(1).to({y:345.3},0).wait(1).to({y:350.2},0).wait(1).to({y:355.8},0).wait(1).to({x:204.3,y:362.3},0).wait(1).to({y:369.7},0).wait(1).to({y:378},0).wait(1).to({x:204.4,y:387.4},0).wait(1).to({y:397.9},0).wait(1).to({x:204.5,y:409.7},0).wait(1).to({x:204.6,y:422.8},0).wait(1).to({y:437.5},0).wait(1).to({x:204.7,y:453.8},0).wait(1).to({x:204.8,y:471.9},0).wait(1).to({x:204.9,y:492},0).wait(1).to({x:205,y:514.5},0).wait(1).to({x:205.1,y:539.4},0).wait(1).to({x:205.2,y:567.2},0).wait(1).to({x:205.4,y:598},0).wait(1).to({x:205.6,y:632.3},0).wait(1).to({x:205.7,y:670.2},0).wait(1).to({x:205.9,y:711.7},0).wait(1).to({x:206.2,y:756.7},0).wait(1).to({x:206.4,y:804.3},0).wait(1).to({x:206.6,y:853.2},0).wait(1).to({x:206.9,y:901.6},0).wait(1).to({x:207.1,y:947.4},0).wait(1).to({x:207.3,y:989.1},0).wait(1).to({x:207.5,y:1025.8},0).wait(1).to({x:207.6,y:1057.3},0).wait(1).to({x:207.7,y:1083.8},0).wait(1).to({x:207.8,y:1105.7},0).wait(1).to({x:207.9,y:1123.5},0).wait(1).to({x:208,y:1137.8},0).wait(1).to({y:1149},0).wait(1).to({x:208.1,y:1157.6},0).wait(1).to({y:1163.7},0).wait(1).to({y:1167.9},0).wait(1).to({y:1170.2},0).wait(1).to({regX:100,regY:90,x:47.5,y:904},0).to({_off:true},1).wait(338));

	// a3 (14).png 复制
	this.instance_63 = new lib.补间25("synched",0);
	this.instance_63.setTransform(203.3,-617.3);
	this.instance_63._off = true;

	this.instance_64 = new lib.补间26("synched",0);
	this.instance_64.setTransform(203.3,354.8);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(126).to({_off:false},0).wait(1).to({y:-549.7},0).wait(1).to({y:-487.6},0).wait(1).to({y:-430.5},0).wait(1).to({y:-377.8},0).wait(1).to({y:-329},0).wait(1).to({y:-283.7},0).wait(1).to({y:-241.7},0).wait(1).to({y:-202.5},0).wait(1).to({y:-166},0).wait(1).to({y:-131.9},0).wait(1).to({y:-100.1},0).wait(1).to({y:-70.3},0).wait(1).to({y:-42.4},0).wait(1).to({y:-16.2},0).wait(1).to({y:8.3},0).wait(1).to({y:31.3},0).wait(1).to({y:52.8},0).wait(1).to({y:73.1},0).wait(1).to({y:92.1},0).wait(1).to({y:110},0).wait(1).to({y:126.8},0).wait(1).to({y:142.5},0).wait(1).to({y:157.3},0).wait(1).to({y:171.3},0).wait(1).to({y:184.3},0).wait(1).to({y:196.6},0).wait(1).to({y:208.1},0).wait(1).to({y:218.9},0).wait(1).to({y:229.1},0).wait(1).to({y:238.6},0).wait(1).to({y:247.5},0).wait(1).to({y:255.9},0).wait(1).to({y:263.7},0).wait(1).to({y:271.1},0).wait(1).to({y:277.9},0).wait(1).to({y:284.3},0).wait(1).to({y:290.3},0).wait(1).to({y:295.9},0).wait(1).to({y:301.1},0).wait(1).to({y:305.9},0).wait(1).to({y:310.4},0).wait(1).to({y:314.6},0).wait(1).to({y:318.4},0).wait(1).to({y:322},0).wait(1).to({y:325.3},0).wait(1).to({y:328.4},0).wait(1).to({y:331.2},0).wait(1).to({y:333.8},0).wait(1).to({y:336.2},0).wait(1).to({y:338.3},0).wait(1).to({y:340.3},0).wait(1).to({y:342.1},0).wait(1).to({y:343.7},0).wait(1).to({y:345.2},0).wait(1).to({y:346.5},0).wait(1).to({y:347.7},0).wait(1).to({y:348.8},0).wait(1).to({y:349.7},0).wait(1).to({y:350.6},0).wait(1).to({y:351.3},0).wait(1).to({y:351.9},0).wait(1).to({y:352.5},0).wait(1).to({y:352.9},0).wait(1).to({y:353.3},0).wait(1).to({y:353.7},0).wait(1).to({y:354},0).wait(1).to({y:354.2},0).wait(1).to({y:354.3},0).wait(1).to({y:354.5},0).wait(1).to({y:354.6},0).wait(1).to({y:354.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(313));
	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(202).to({_off:false},0).wait(92).to({startPosition:0},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:0.885},0).wait(1).to({alpha:0.858},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.597},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.508},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.329},0).wait(1).to({alpha:0.287},0).wait(1).to({alpha:0.247},0).wait(1).to({alpha:0.209},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.112},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.044},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(183));

	// a3 (13).png 复制
	this.instance_65 = new lib.元件12();
	this.instance_65.setTransform(203.3,-552.3,1,1,0,0,0,389.5,478);
	this.instance_65._off = true;

	this.instance_66 = new lib.补间28("synched",0);
	this.instance_66.setTransform(203.3,419.8);
	this.instance_66._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(118).to({_off:false},0).wait(1).to({y:-484.6},0).wait(1).to({y:-422.6},0).wait(1).to({y:-365.4},0).wait(1).to({y:-312.7},0).wait(1).to({y:-263.9},0).wait(1).to({y:-218.7},0).wait(1).to({y:-176.6},0).wait(1).to({y:-137.5},0).wait(1).to({y:-100.9},0).wait(1).to({y:-66.9},0).wait(1).to({y:-35},0).wait(1).to({y:-5.2},0).wait(1).to({y:22.7},0).wait(1).to({y:48.8},0).wait(1).to({y:73.3},0).wait(1).to({y:96.3},0).wait(1).to({y:117.9},0).wait(1).to({y:138.2},0).wait(1).to({y:157.2},0).wait(1).to({y:175},0).wait(1).to({y:191.8},0).wait(1).to({y:207.6},0).wait(1).to({y:222.4},0).wait(1).to({y:236.3},0).wait(1).to({y:249.4},0).wait(1).to({y:261.7},0).wait(1).to({y:273.2},0).wait(1).to({y:284},0).wait(1).to({y:294.2},0).wait(1).to({y:303.7},0).wait(1).to({y:312.6},0).wait(1).to({y:321},0).wait(1).to({y:328.8},0).wait(1).to({y:336.1},0).wait(1).to({y:343},0).wait(1).to({y:349.4},0).wait(1).to({y:355.4},0).wait(1).to({y:360.9},0).wait(1).to({y:366.1},0).wait(1).to({y:371},0).wait(1).to({y:375.5},0).wait(1).to({y:379.6},0).wait(1).to({y:383.5},0).wait(1).to({y:387.1},0).wait(1).to({y:390.4},0).wait(1).to({y:393.4},0).wait(1).to({y:396.3},0).wait(1).to({y:398.8},0).wait(1).to({y:401.2},0).wait(1).to({y:403.4},0).wait(1).to({y:405.4},0).wait(1).to({y:407.2},0).wait(1).to({y:408.8},0).wait(1).to({y:410.3},0).wait(1).to({y:411.6},0).wait(1).to({y:412.8},0).wait(1).to({y:413.8},0).wait(1).to({y:414.8},0).wait(1).to({y:415.6},0).wait(1).to({y:416.3},0).wait(1).to({y:417},0).wait(1).to({y:417.5},0).wait(1).to({y:418},0).wait(1).to({y:418.4},0).wait(1).to({y:418.7},0).wait(1).to({y:419},0).wait(1).to({y:419.2},0).wait(1).to({y:419.4},0).wait(1).to({y:419.5},0).wait(1).to({y:419.6},0).wait(1).to({y:419.7},0).wait(1).to({y:419.8},0).wait(3).to({_off:true},1).wait(321));
	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(194).to({_off:false},0).wait(100).to({startPosition:0},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:0.885},0).wait(1).to({alpha:0.858},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.597},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.508},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.329},0).wait(1).to({alpha:0.287},0).wait(1).to({alpha:0.247},0).wait(1).to({alpha:0.209},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.112},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.044},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(183));

	// a3 (12).png 复制
	this.instance_67 = new lib.补间29("synched",0);
	this.instance_67.setTransform(203.3,-647.8);
	this.instance_67._off = true;

	this.instance_68 = new lib.补间30("synched",0);
	this.instance_68.setTransform(203.3,324.3);
	this.instance_68._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(131).to({_off:false},0).wait(1).to({y:-580.2},0).wait(1).to({y:-518.1},0).wait(1).to({y:-461},0).wait(1).to({y:-408.3},0).wait(1).to({y:-359.5},0).wait(1).to({y:-314.2},0).wait(1).to({y:-272.2},0).wait(1).to({y:-233},0).wait(1).to({y:-196.5},0).wait(1).to({y:-162.4},0).wait(1).to({y:-130.6},0).wait(1).to({y:-100.8},0).wait(1).to({y:-72.9},0).wait(1).to({y:-46.7},0).wait(1).to({y:-22.2},0).wait(1).to({y:0.8},0).wait(1).to({y:22.3},0).wait(1).to({y:42.6},0).wait(1).to({y:61.6},0).wait(1).to({y:79.5},0).wait(1).to({y:96.3},0).wait(1).to({y:112},0).wait(1).to({y:126.9},0).wait(1).to({y:140.8},0).wait(1).to({y:153.8},0).wait(1).to({y:166.1},0).wait(1).to({y:177.6},0).wait(1).to({y:188.5},0).wait(1).to({y:198.6},0).wait(1).to({y:208.1},0).wait(1).to({y:217},0).wait(1).to({y:225.4},0).wait(1).to({y:233.2},0).wait(1).to({y:240.6},0).wait(1).to({y:247.4},0).wait(1).to({y:253.8},0).wait(1).to({y:259.8},0).wait(1).to({y:265.4},0).wait(1).to({y:270.6},0).wait(1).to({y:275.4},0).wait(1).to({y:279.9},0).wait(1).to({y:284.1},0).wait(1).to({y:287.9},0).wait(1).to({y:291.5},0).wait(1).to({y:294.8},0).wait(1).to({y:297.9},0).wait(1).to({y:300.7},0).wait(1).to({y:303.3},0).wait(1).to({y:305.7},0).wait(1).to({y:307.8},0).wait(1).to({y:309.8},0).wait(1).to({y:311.6},0).wait(1).to({y:313.2},0).wait(1).to({y:314.7},0).wait(1).to({y:316},0).wait(1).to({y:317.2},0).wait(1).to({y:318.3},0).wait(1).to({y:319.2},0).wait(1).to({y:320.1},0).wait(1).to({y:320.8},0).wait(1).to({y:321.4},0).wait(1).to({y:322},0).wait(1).to({y:322.4},0).wait(1).to({y:322.8},0).wait(1).to({y:323.2},0).wait(1).to({y:323.5},0).wait(1).to({y:323.7},0).wait(1).to({y:323.8},0).wait(1).to({y:324},0).wait(1).to({y:324.1},0).wait(1).to({y:324.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(308));
	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(207).to({_off:false},0).wait(87).to({startPosition:0},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:0.885},0).wait(1).to({alpha:0.858},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.597},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.508},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.329},0).wait(1).to({alpha:0.287},0).wait(1).to({alpha:0.247},0).wait(1).to({alpha:0.209},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.112},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.044},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(183));

	// a3 (11).png  复制 2
	this.instance_69 = new lib.补间31("synched",0);
	this.instance_69.setTransform(288.1,-737.4);
	this.instance_69._off = true;

	this.instance_70 = new lib.补间32("synched",0);
	this.instance_70.setTransform(288.1,234.7);
	this.instance_70._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(147).to({_off:false},0).wait(1).to({y:-669.8},0).wait(1).to({y:-607.7},0).wait(1).to({y:-550.6},0).wait(1).to({y:-497.9},0).wait(1).to({y:-449.1},0).wait(1).to({y:-403.8},0).wait(1).to({y:-361.8},0).wait(1).to({y:-322.6},0).wait(1).to({y:-286.1},0).wait(1).to({y:-252},0).wait(1).to({y:-220.2},0).wait(1).to({y:-190.4},0).wait(1).to({y:-162.5},0).wait(1).to({y:-136.3},0).wait(1).to({y:-111.8},0).wait(1).to({y:-88.8},0).wait(1).to({y:-67.3},0).wait(1).to({y:-47},0).wait(1).to({y:-28},0).wait(1).to({y:-10.1},0).wait(1).to({y:6.7},0).wait(1).to({y:22.4},0).wait(1).to({y:37.3},0).wait(1).to({y:51.2},0).wait(1).to({y:64.2},0).wait(1).to({y:76.5},0).wait(1).to({y:88},0).wait(1).to({y:98.9},0).wait(1).to({y:109},0).wait(1).to({y:118.5},0).wait(1).to({y:127.4},0).wait(1).to({y:135.8},0).wait(1).to({y:143.6},0).wait(1).to({y:151},0).wait(1).to({y:157.8},0).wait(1).to({y:164.2},0).wait(1).to({y:170.2},0).wait(1).to({y:175.8},0).wait(1).to({y:181},0).wait(1).to({y:185.8},0).wait(1).to({y:190.3},0).wait(1).to({y:194.5},0).wait(1).to({y:198.3},0).wait(1).to({y:201.9},0).wait(1).to({y:205.2},0).wait(1).to({y:208.3},0).wait(1).to({y:211.1},0).wait(1).to({y:213.7},0).wait(1).to({y:216.1},0).wait(1).to({y:218.2},0).wait(1).to({y:220.2},0).wait(1).to({y:222},0).wait(1).to({y:223.6},0).wait(1).to({y:225.1},0).wait(1).to({y:226.4},0).wait(1).to({y:227.6},0).wait(1).to({y:228.7},0).wait(1).to({y:229.6},0).wait(1).to({y:230.5},0).wait(1).to({y:231.2},0).wait(1).to({y:231.8},0).wait(1).to({y:232.4},0).wait(1).to({y:232.8},0).wait(1).to({y:233.2},0).wait(1).to({y:233.6},0).wait(1).to({y:233.9},0).wait(1).to({y:234.1},0).wait(1).to({y:234.2},0).wait(1).to({y:234.4},0).wait(1).to({y:234.5},0).wait(1).to({y:234.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(292));
	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(223).to({_off:false},0).wait(71).to({startPosition:0},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:0.885},0).wait(1).to({alpha:0.858},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.597},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.508},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.329},0).wait(1).to({alpha:0.287},0).wait(1).to({alpha:0.247},0).wait(1).to({alpha:0.209},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.112},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.044},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(183));

	// a3 (11).png 复制
	this.instance_71 = new lib.补间31("synched",0);
	this.instance_71.setTransform(203.3,-647.8);
	this.instance_71._off = true;

	this.instance_72 = new lib.补间32("synched",0);
	this.instance_72.setTransform(203.3,324.3);
	this.instance_72._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(147).to({_off:false},0).wait(1).to({y:-580.2},0).wait(1).to({y:-518.1},0).wait(1).to({y:-461},0).wait(1).to({y:-408.3},0).wait(1).to({y:-359.5},0).wait(1).to({y:-314.2},0).wait(1).to({y:-272.2},0).wait(1).to({y:-233},0).wait(1).to({y:-196.5},0).wait(1).to({y:-162.4},0).wait(1).to({y:-130.6},0).wait(1).to({y:-100.8},0).wait(1).to({y:-72.9},0).wait(1).to({y:-46.7},0).wait(1).to({y:-22.2},0).wait(1).to({y:0.8},0).wait(1).to({y:22.3},0).wait(1).to({y:42.6},0).wait(1).to({y:61.6},0).wait(1).to({y:79.5},0).wait(1).to({y:96.3},0).wait(1).to({y:112},0).wait(1).to({y:126.9},0).wait(1).to({y:140.8},0).wait(1).to({y:153.8},0).wait(1).to({y:166.1},0).wait(1).to({y:177.6},0).wait(1).to({y:188.5},0).wait(1).to({y:198.6},0).wait(1).to({y:208.1},0).wait(1).to({y:217},0).wait(1).to({y:225.4},0).wait(1).to({y:233.2},0).wait(1).to({y:240.6},0).wait(1).to({y:247.4},0).wait(1).to({y:253.8},0).wait(1).to({y:259.8},0).wait(1).to({y:265.4},0).wait(1).to({y:270.6},0).wait(1).to({y:275.4},0).wait(1).to({y:279.9},0).wait(1).to({y:284.1},0).wait(1).to({y:287.9},0).wait(1).to({y:291.5},0).wait(1).to({y:294.8},0).wait(1).to({y:297.9},0).wait(1).to({y:300.7},0).wait(1).to({y:303.3},0).wait(1).to({y:305.7},0).wait(1).to({y:307.8},0).wait(1).to({y:309.8},0).wait(1).to({y:311.6},0).wait(1).to({y:313.2},0).wait(1).to({y:314.7},0).wait(1).to({y:316},0).wait(1).to({y:317.2},0).wait(1).to({y:318.3},0).wait(1).to({y:319.2},0).wait(1).to({y:320.1},0).wait(1).to({y:320.8},0).wait(1).to({y:321.4},0).wait(1).to({y:322},0).wait(1).to({y:322.4},0).wait(1).to({y:322.8},0).wait(1).to({y:323.2},0).wait(1).to({y:323.5},0).wait(1).to({y:323.7},0).wait(1).to({y:323.8},0).wait(1).to({y:324},0).wait(1).to({y:324.1},0).wait(1).to({y:324.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(292));
	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(223).to({_off:false},0).wait(71).to({startPosition:0},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:0.885},0).wait(1).to({alpha:0.858},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.597},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.508},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.329},0).wait(1).to({alpha:0.287},0).wait(1).to({alpha:0.247},0).wait(1).to({alpha:0.209},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.112},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.044},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(183));

	// a3 (1).png  复制 2
	this.instance_73 = new lib.补间33("synched",0);
	this.instance_73.setTransform(76,-507.6);
	this.instance_73._off = true;

	this.instance_74 = new lib.补间34("synched",0);
	this.instance_74.setTransform(76,464.4);
	this.instance_74._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(140).to({_off:false},0).wait(1).to({y:-440},0).wait(1).to({y:-378},0).wait(1).to({y:-320.8},0).wait(1).to({y:-268.1},0).wait(1).to({y:-219.3},0).wait(1).to({y:-174.1},0).wait(1).to({y:-132},0).wait(1).to({y:-92.9},0).wait(1).to({y:-56.3},0).wait(1).to({y:-22.3},0).wait(1).to({y:9.6},0).wait(1).to({y:39.4},0).wait(1).to({y:67.3},0).wait(1).to({y:93.4},0).wait(1).to({y:117.9},0).wait(1).to({y:140.9},0).wait(1).to({y:162.5},0).wait(1).to({y:182.8},0).wait(1).to({y:201.8},0).wait(1).to({y:219.6},0).wait(1).to({y:236.4},0).wait(1).to({y:252.2},0).wait(1).to({y:267},0).wait(1).to({y:280.9},0).wait(1).to({y:294},0).wait(1).to({y:306.3},0).wait(1).to({y:317.8},0).wait(1).to({y:328.6},0).wait(1).to({y:338.8},0).wait(1).to({y:348.3},0).wait(1).to({y:357.2},0).wait(1).to({y:365.6},0).wait(1).to({y:373.4},0).wait(1).to({y:380.7},0).wait(1).to({y:387.6},0).wait(1).to({y:394},0).wait(1).to({y:400},0).wait(1).to({y:405.5},0).wait(1).to({y:410.7},0).wait(1).to({y:415.6},0).wait(1).to({y:420.1},0).wait(1).to({y:424.2},0).wait(1).to({y:428.1},0).wait(1).to({y:431.7},0).wait(1).to({y:435},0).wait(1).to({y:438},0).wait(1).to({y:440.9},0).wait(1).to({y:443.4},0).wait(1).to({y:445.8},0).wait(1).to({y:448},0).wait(1).to({y:450},0).wait(1).to({y:451.8},0).wait(1).to({y:453.4},0).wait(1).to({y:454.9},0).wait(1).to({y:456.2},0).wait(1).to({y:457.4},0).wait(1).to({y:458.4},0).wait(1).to({y:459.4},0).wait(1).to({y:460.2},0).wait(1).to({y:460.9},0).wait(1).to({y:461.6},0).wait(1).to({y:462.1},0).wait(1).to({y:462.6},0).wait(1).to({y:463},0).wait(1).to({y:463.3},0).wait(1).to({y:463.6},0).wait(1).to({y:463.8},0).wait(1).to({y:464},0).wait(1).to({y:464.1},0).wait(1).to({y:464.2},0).wait(1).to({y:464.3},0).wait(1).to({y:464.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(299));
	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(216).to({_off:false},0).wait(78).to({startPosition:0},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:0.885},0).wait(1).to({alpha:0.858},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.597},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.508},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.329},0).wait(1).to({alpha:0.287},0).wait(1).to({alpha:0.247},0).wait(1).to({alpha:0.209},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.112},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.044},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(183));

	// a3 (1).png 复制
	this.instance_75 = new lib.补间33("synched",0);
	this.instance_75.setTransform(203.3,-564.8);
	this.instance_75._off = true;

	this.instance_76 = new lib.补间34("synched",0);
	this.instance_76.setTransform(203.3,407.3);
	this.instance_76._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(140).to({_off:false},0).wait(1).to({y:-497.2},0).wait(1).to({y:-435.1},0).wait(1).to({y:-378},0).wait(1).to({y:-325.3},0).wait(1).to({y:-276.5},0).wait(1).to({y:-231.2},0).wait(1).to({y:-189.2},0).wait(1).to({y:-150},0).wait(1).to({y:-113.5},0).wait(1).to({y:-79.4},0).wait(1).to({y:-47.6},0).wait(1).to({y:-17.8},0).wait(1).to({y:10.1},0).wait(1).to({y:36.3},0).wait(1).to({y:60.8},0).wait(1).to({y:83.8},0).wait(1).to({y:105.3},0).wait(1).to({y:125.6},0).wait(1).to({y:144.6},0).wait(1).to({y:162.5},0).wait(1).to({y:179.3},0).wait(1).to({y:195},0).wait(1).to({y:209.9},0).wait(1).to({y:223.8},0).wait(1).to({y:236.8},0).wait(1).to({y:249.1},0).wait(1).to({y:260.6},0).wait(1).to({y:271.5},0).wait(1).to({y:281.6},0).wait(1).to({y:291.1},0).wait(1).to({y:300},0).wait(1).to({y:308.4},0).wait(1).to({y:316.2},0).wait(1).to({y:323.6},0).wait(1).to({y:330.4},0).wait(1).to({y:336.8},0).wait(1).to({y:342.8},0).wait(1).to({y:348.4},0).wait(1).to({y:353.6},0).wait(1).to({y:358.4},0).wait(1).to({y:362.9},0).wait(1).to({y:367.1},0).wait(1).to({y:370.9},0).wait(1).to({y:374.5},0).wait(1).to({y:377.8},0).wait(1).to({y:380.9},0).wait(1).to({y:383.7},0).wait(1).to({y:386.3},0).wait(1).to({y:388.7},0).wait(1).to({y:390.8},0).wait(1).to({y:392.8},0).wait(1).to({y:394.6},0).wait(1).to({y:396.2},0).wait(1).to({y:397.7},0).wait(1).to({y:399},0).wait(1).to({y:400.2},0).wait(1).to({y:401.3},0).wait(1).to({y:402.2},0).wait(1).to({y:403.1},0).wait(1).to({y:403.8},0).wait(1).to({y:404.4},0).wait(1).to({y:405},0).wait(1).to({y:405.4},0).wait(1).to({y:405.8},0).wait(1).to({y:406.2},0).wait(1).to({y:406.5},0).wait(1).to({y:406.7},0).wait(1).to({y:406.8},0).wait(1).to({y:407},0).wait(1).to({y:407.1},0).wait(1).to({y:407.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(299));
	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(216).to({_off:false},0).wait(78).to({startPosition:0},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:0.885},0).wait(1).to({alpha:0.858},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.597},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.508},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.329},0).wait(1).to({alpha:0.287},0).wait(1).to({alpha:0.247},0).wait(1).to({alpha:0.209},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.112},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.044},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(183));

	// 图层 2
	this.instance_77 = new lib.补间14("synched",0);
	this.instance_77.setTransform(204.8,415.8);
	this.instance_77.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0.005},0).wait(1).to({alpha:0.009},0).wait(1).to({alpha:0.014},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.047},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.073},0).wait(1).to({alpha:0.088},0).wait(1).to({alpha:0.104},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.142},0).wait(1).to({alpha:0.163},0).wait(1).to({alpha:0.186},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.237},0).wait(1).to({alpha:0.265},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.425},0).wait(1).to({alpha:0.461},0).wait(1).to({alpha:0.497},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.569},0).wait(1).to({alpha:0.605},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.799},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.851},0).wait(1).to({alpha:0.874},0).wait(1).to({alpha:0.896},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.932},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.971},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.987},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(73).to({startPosition:0},0).to({alpha:0},47).to({_off:true},1).wait(343));

	// bg
	this.instance_78 = new lib.元件22();
	this.instance_78.setTransform(204.8,416.1,1,1,0,0,0,400,480);

	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(515));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.2,-349.4,800,1245.3);


// stage content:
(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 11
	this.instance = new lib.元件6();
	this.instance.setTransform(362.3,493.6,1,1,0,0,0,167,429.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,194.5,800.1,1257.9);

})(libP1 = libP1||{}, imagesP1 = imagesP1||{}, createjs = createjs||{}, ss = ss||{});
var libP1, imagesP1, createjs, ss;