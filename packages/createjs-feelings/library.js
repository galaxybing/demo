(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 800,
	height: 960,
	fps: 24,
	color: "#CCCCCC",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._1_00000 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1_00001 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1_00002 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._1_00003 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._1_00004 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._1_00005 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._1_00006 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._1_00007 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._1_00008 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._1_00009 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._1_00010 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._1_00011 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._1_00012 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._1_00013 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._1_00014 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._1_00015 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._1_00016 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._1_00017 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._1_00018 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._1_00019 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib._1_00020 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib._1_00021 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib._1_00022 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib._1_00023 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib._1_00024 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib._1_00025 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib._1_00026 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib._1_00027 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib._1_00028 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib._1_00029 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib._1_00030 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib._1_00031 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib._1_00032 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib._1_00033 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib._1_00034 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib._1_00035 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib._1_00036 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib._1_00037 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib._1_00038 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib._1_00039 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib._1_00040 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib._1_00041 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib._1_00042 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib._1_00043 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib._1_00044 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib._1_00045 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib._1_00046 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib._1_00047 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib._1_00048 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib._1_00049 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib._1_00050 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib._1_00051 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib._1_00052 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib._1_00053 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib._1_00054 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib._1_00055 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib._1_00056 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib._1_00057 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib._1_00058 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib._1_00059 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib._1_00060 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib._1_00061 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib._1_00062 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib._1_00063 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib._1_00064 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib._1_00065 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib._1_00066 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib._1_00067 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib._1_00068 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib._1_00069 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib._1_00070 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib._1_00071 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib._1_00072 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib._1_00073 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib._1_00074 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib._2_00000 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib._2_00001 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib._2_00002 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib._2_00003 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib._2_00004 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib._2_00005 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib._2_00006 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib._2_00007 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib._2_00008 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib._2_00009 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib._2_00010 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib._2_00011 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib._2_00012 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib._2_00013 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib._2_00014 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib._2_00015 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib._2_00016 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib._2_00017 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib._2_00018 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib._2_00019 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib._2_00020 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib._2_00021 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib._2_00022 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib._2_00023 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib._2_00024 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib._2_00025 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib._2_00026 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib._2_00027 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib._2_00028 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib._2_00029 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib._2_00030 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib._2_00031 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib._2_00032 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib._2_00033 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib._2_00034 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib._2_00035 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib._2_00036 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib._2_00037 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib._2_00038 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib._2_00039 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib._2_00040 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib._2_00041 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib._2_00042 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib._2_00043 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib._2_00044 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib._2_00045 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib._2_00046 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib._2_00047 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib._2_00048 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib._2_00049 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib._2_00050 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib._2_00051 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib._2_00052 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib._2_00053 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib._2_00054 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib._2_00055 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib._2_00056 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib._2_00057 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib._2_00058 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib._2_00059 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib._2_00060 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib._2_00061 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib._2_00062 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib._2_00063 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib._2_00064 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib._2_00065 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib._2_00066 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib._2_00067 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib._2_00068 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib._2_00069 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib._2_00070 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib._2_00071 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib._2_00072 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib._2_00073 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib._2_00074 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.a6 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.a7 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.a10 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.z8 = function() {
	this.spriteSheet = ss["library_atlas_P_"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.SOUNDBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// a (7).png
	this.instance = new lib.a6();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// a (6).png
	this.instance_1 = new lib.a7();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,47);


(lib.icon2element01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-76.5,0,76.5,0).s().p("Ar8GsIABiBIAAAAQANkmDTjQQDfjhE8AAQE9AADfDhQDhDdAAE+IkuAAQAAjAiIiIQiIiGi/AAQi+AAiICGQh7B6gMCpIABAAQgCA/AABCg");
	this.shape.setTransform(0,-33.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-76.5,153,85.8);


(lib.补间14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 1
	this.instance = new lib.a10();
	this.instance.setTransform(-12.5,-7.5);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(-12.5,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-7.5,25,15);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z8();
	this.instance.setTransform(-17.5,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-132,25,215);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z8();
	this.instance.setTransform(-17.5,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-132,25,215);


(lib.MAN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib._1_00000();
	this.instance.setTransform(16.8,0,0.836,0.836);

	this.instance_1 = new lib._1_00001();
	this.instance_1.setTransform(16.8,0,0.836,0.836);

	this.instance_2 = new lib._1_00002();
	this.instance_2.setTransform(16.8,0,0.836,0.836);

	this.instance_3 = new lib._1_00003();
	this.instance_3.setTransform(16.8,0,0.836,0.836);

	this.instance_4 = new lib._1_00004();
	this.instance_4.setTransform(16.8,0,0.836,0.836);

	this.instance_5 = new lib._1_00005();
	this.instance_5.setTransform(16.8,0,0.836,0.836);

	this.instance_6 = new lib._1_00006();
	this.instance_6.setTransform(16.8,0,0.836,0.836);

	this.instance_7 = new lib._1_00007();
	this.instance_7.setTransform(16.8,0,0.836,0.836);

	this.instance_8 = new lib._1_00008();
	this.instance_8.setTransform(16.8,0,0.836,0.836);

	this.instance_9 = new lib._1_00009();
	this.instance_9.setTransform(16.8,0,0.836,0.836);

	this.instance_10 = new lib._1_00010();
	this.instance_10.setTransform(16.8,0,0.836,0.836);

	this.instance_11 = new lib._1_00011();
	this.instance_11.setTransform(16.8,0,0.836,0.836);

	this.instance_12 = new lib._1_00012();
	this.instance_12.setTransform(16.8,0,0.836,0.836);

	this.instance_13 = new lib._1_00013();
	this.instance_13.setTransform(16.8,0,0.836,0.836);

	this.instance_14 = new lib._1_00014();
	this.instance_14.setTransform(16.8,0,0.836,0.836);

	this.instance_15 = new lib._1_00015();
	this.instance_15.setTransform(16.8,0,0.836,0.836);

	this.instance_16 = new lib._1_00016();
	this.instance_16.setTransform(16.8,0,0.836,0.836);

	this.instance_17 = new lib._1_00017();
	this.instance_17.setTransform(16.8,0,0.836,0.836);

	this.instance_18 = new lib._1_00018();
	this.instance_18.setTransform(16.8,0,0.836,0.836);

	this.instance_19 = new lib._1_00019();
	this.instance_19.setTransform(16.8,0,0.836,0.836);

	this.instance_20 = new lib._1_00020();
	this.instance_20.setTransform(16.8,0,0.836,0.836);

	this.instance_21 = new lib._1_00021();
	this.instance_21.setTransform(16.8,0,0.836,0.836);

	this.instance_22 = new lib._1_00022();
	this.instance_22.setTransform(16.8,0,0.836,0.836);

	this.instance_23 = new lib._1_00023();
	this.instance_23.setTransform(16.8,0,0.836,0.836);

	this.instance_24 = new lib._1_00024();
	this.instance_24.setTransform(16.8,0,0.836,0.836);

	this.instance_25 = new lib._1_00025();
	this.instance_25.setTransform(16.8,0,0.836,0.836);

	this.instance_26 = new lib._1_00026();
	this.instance_26.setTransform(16.8,0,0.836,0.836);

	this.instance_27 = new lib._1_00027();
	this.instance_27.setTransform(16.8,0,0.836,0.836);

	this.instance_28 = new lib._1_00028();
	this.instance_28.setTransform(16.8,0,0.836,0.836);

	this.instance_29 = new lib._1_00029();
	this.instance_29.setTransform(16.8,0,0.836,0.836);

	this.instance_30 = new lib._1_00030();
	this.instance_30.setTransform(16.8,0,0.836,0.836);

	this.instance_31 = new lib._1_00031();
	this.instance_31.setTransform(16.8,0,0.836,0.836);

	this.instance_32 = new lib._1_00032();
	this.instance_32.setTransform(16.8,0,0.836,0.836);

	this.instance_33 = new lib._1_00033();
	this.instance_33.setTransform(16.8,0,0.836,0.836);

	this.instance_34 = new lib._1_00034();
	this.instance_34.setTransform(16.8,0,0.836,0.836);

	this.instance_35 = new lib._1_00035();
	this.instance_35.setTransform(16.8,0,0.836,0.836);

	this.instance_36 = new lib._1_00036();
	this.instance_36.setTransform(16.8,0,0.836,0.836);

	this.instance_37 = new lib._1_00037();
	this.instance_37.setTransform(16.8,0,0.836,0.836);

	this.instance_38 = new lib._1_00038();
	this.instance_38.setTransform(16.8,0,0.836,0.836);

	this.instance_39 = new lib._1_00039();
	this.instance_39.setTransform(16.8,0,0.836,0.836);

	this.instance_40 = new lib._1_00040();
	this.instance_40.setTransform(16.8,0,0.836,0.836);

	this.instance_41 = new lib._1_00041();
	this.instance_41.setTransform(16.8,0,0.836,0.836);

	this.instance_42 = new lib._1_00042();
	this.instance_42.setTransform(16.8,0,0.836,0.836);

	this.instance_43 = new lib._1_00043();
	this.instance_43.setTransform(16.8,0,0.836,0.836);

	this.instance_44 = new lib._1_00044();
	this.instance_44.setTransform(16.8,0,0.836,0.836);

	this.instance_45 = new lib._1_00045();
	this.instance_45.setTransform(16.8,0,0.836,0.836);

	this.instance_46 = new lib._1_00046();
	this.instance_46.setTransform(16.8,0,0.836,0.836);

	this.instance_47 = new lib._1_00047();
	this.instance_47.setTransform(16.8,0,0.836,0.836);

	this.instance_48 = new lib._1_00048();
	this.instance_48.setTransform(16.8,0,0.836,0.836);

	this.instance_49 = new lib._1_00049();
	this.instance_49.setTransform(16.8,0,0.836,0.836);

	this.instance_50 = new lib._1_00050();
	this.instance_50.setTransform(16.8,0,0.836,0.836);

	this.instance_51 = new lib._1_00051();
	this.instance_51.setTransform(16.8,0,0.836,0.836);

	this.instance_52 = new lib._1_00052();
	this.instance_52.setTransform(16.8,0,0.836,0.836);

	this.instance_53 = new lib._1_00053();
	this.instance_53.setTransform(16.8,0,0.836,0.836);

	this.instance_54 = new lib._1_00054();
	this.instance_54.setTransform(16.8,0,0.836,0.836);

	this.instance_55 = new lib._1_00055();
	this.instance_55.setTransform(16.8,0,0.836,0.836);

	this.instance_56 = new lib._1_00056();
	this.instance_56.setTransform(16.8,0,0.836,0.836);

	this.instance_57 = new lib._1_00057();
	this.instance_57.setTransform(16.8,0,0.836,0.836);

	this.instance_58 = new lib._1_00058();
	this.instance_58.setTransform(16.8,0,0.836,0.836);

	this.instance_59 = new lib._1_00059();
	this.instance_59.setTransform(16.8,0,0.836,0.836);

	this.instance_60 = new lib._1_00060();
	this.instance_60.setTransform(16.8,0,0.836,0.836);

	this.instance_61 = new lib._1_00061();
	this.instance_61.setTransform(16.8,0,0.836,0.836);

	this.instance_62 = new lib._1_00062();
	this.instance_62.setTransform(16.8,0,0.836,0.836);

	this.instance_63 = new lib._1_00063();
	this.instance_63.setTransform(16.8,0,0.836,0.836);

	this.instance_64 = new lib._1_00064();
	this.instance_64.setTransform(16.8,0,0.836,0.836);

	this.instance_65 = new lib._1_00065();
	this.instance_65.setTransform(16.8,0,0.836,0.836);

	this.instance_66 = new lib._1_00066();
	this.instance_66.setTransform(16.8,0,0.836,0.836);

	this.instance_67 = new lib._1_00067();
	this.instance_67.setTransform(16.8,0,0.836,0.836);

	this.instance_68 = new lib._1_00068();
	this.instance_68.setTransform(16.8,0,0.836,0.836);

	this.instance_69 = new lib._1_00069();
	this.instance_69.setTransform(16.8,0,0.836,0.836);

	this.instance_70 = new lib._1_00070();
	this.instance_70.setTransform(16.8,0,0.836,0.836);

	this.instance_71 = new lib._1_00071();
	this.instance_71.setTransform(16.8,0,0.836,0.836);

	this.instance_72 = new lib._1_00072();
	this.instance_72.setTransform(16.8,0,0.836,0.836);

	this.instance_73 = new lib._1_00073();
	this.instance_73.setTransform(16.8,0,0.836,0.836);

	this.instance_74 = new lib._1_00074();
	this.instance_74.setTransform(16.8,0,0.836,0.836);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.8,0,58.5,100.3);


(lib.MAN2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib._2_00000();
	this.instance.setTransform(20.5,0,0.803,0.803);

	this.instance_1 = new lib._2_00001();
	this.instance_1.setTransform(20.5,0,0.803,0.803);

	this.instance_2 = new lib._2_00002();
	this.instance_2.setTransform(20.5,0,0.803,0.803);

	this.instance_3 = new lib._2_00003();
	this.instance_3.setTransform(20.5,0,0.803,0.803);

	this.instance_4 = new lib._2_00004();
	this.instance_4.setTransform(20.5,0,0.803,0.803);

	this.instance_5 = new lib._2_00005();
	this.instance_5.setTransform(20.5,0,0.803,0.803);

	this.instance_6 = new lib._2_00006();
	this.instance_6.setTransform(20.5,0,0.803,0.803);

	this.instance_7 = new lib._2_00007();
	this.instance_7.setTransform(20.5,0,0.803,0.803);

	this.instance_8 = new lib._2_00008();
	this.instance_8.setTransform(20.5,0,0.803,0.803);

	this.instance_9 = new lib._2_00009();
	this.instance_9.setTransform(20.5,0,0.803,0.803);

	this.instance_10 = new lib._2_00010();
	this.instance_10.setTransform(20.5,0,0.803,0.803);

	this.instance_11 = new lib._2_00011();
	this.instance_11.setTransform(20.5,0,0.803,0.803);

	this.instance_12 = new lib._2_00012();
	this.instance_12.setTransform(20.5,0,0.803,0.803);

	this.instance_13 = new lib._2_00013();
	this.instance_13.setTransform(20.5,0,0.803,0.803);

	this.instance_14 = new lib._2_00014();
	this.instance_14.setTransform(20.5,0,0.803,0.803);

	this.instance_15 = new lib._2_00015();
	this.instance_15.setTransform(20.5,0,0.803,0.803);

	this.instance_16 = new lib._2_00016();
	this.instance_16.setTransform(20.5,0,0.803,0.803);

	this.instance_17 = new lib._2_00017();
	this.instance_17.setTransform(20.5,0,0.803,0.803);

	this.instance_18 = new lib._2_00018();
	this.instance_18.setTransform(20.5,0,0.803,0.803);

	this.instance_19 = new lib._2_00019();
	this.instance_19.setTransform(20.5,0,0.803,0.803);

	this.instance_20 = new lib._2_00020();
	this.instance_20.setTransform(20.5,0,0.803,0.803);

	this.instance_21 = new lib._2_00021();
	this.instance_21.setTransform(20.5,0,0.803,0.803);

	this.instance_22 = new lib._2_00022();
	this.instance_22.setTransform(20.5,0,0.803,0.803);

	this.instance_23 = new lib._2_00023();
	this.instance_23.setTransform(20.5,0,0.803,0.803);

	this.instance_24 = new lib._2_00024();
	this.instance_24.setTransform(20.5,0,0.803,0.803);

	this.instance_25 = new lib._2_00025();
	this.instance_25.setTransform(20.5,0,0.803,0.803);

	this.instance_26 = new lib._2_00026();
	this.instance_26.setTransform(20.5,0,0.803,0.803);

	this.instance_27 = new lib._2_00027();
	this.instance_27.setTransform(20.5,0,0.803,0.803);

	this.instance_28 = new lib._2_00028();
	this.instance_28.setTransform(20.5,0,0.803,0.803);

	this.instance_29 = new lib._2_00029();
	this.instance_29.setTransform(20.5,0,0.803,0.803);

	this.instance_30 = new lib._2_00030();
	this.instance_30.setTransform(20.5,0,0.803,0.803);

	this.instance_31 = new lib._2_00031();
	this.instance_31.setTransform(20.5,0,0.803,0.803);

	this.instance_32 = new lib._2_00032();
	this.instance_32.setTransform(20.5,0,0.803,0.803);

	this.instance_33 = new lib._2_00033();
	this.instance_33.setTransform(20.5,0,0.803,0.803);

	this.instance_34 = new lib._2_00034();
	this.instance_34.setTransform(20.5,0,0.803,0.803);

	this.instance_35 = new lib._2_00035();
	this.instance_35.setTransform(20.5,0,0.803,0.803);

	this.instance_36 = new lib._2_00036();
	this.instance_36.setTransform(20.5,0,0.803,0.803);

	this.instance_37 = new lib._2_00037();
	this.instance_37.setTransform(20.5,0,0.803,0.803);

	this.instance_38 = new lib._2_00038();
	this.instance_38.setTransform(20.5,0,0.803,0.803);

	this.instance_39 = new lib._2_00039();
	this.instance_39.setTransform(20.5,0,0.803,0.803);

	this.instance_40 = new lib._2_00040();
	this.instance_40.setTransform(20.5,0,0.803,0.803);

	this.instance_41 = new lib._2_00041();
	this.instance_41.setTransform(20.5,0,0.803,0.803);

	this.instance_42 = new lib._2_00042();
	this.instance_42.setTransform(20.5,0,0.803,0.803);

	this.instance_43 = new lib._2_00043();
	this.instance_43.setTransform(20.5,0,0.803,0.803);

	this.instance_44 = new lib._2_00044();
	this.instance_44.setTransform(20.5,0,0.803,0.803);

	this.instance_45 = new lib._2_00045();
	this.instance_45.setTransform(20.5,0,0.803,0.803);

	this.instance_46 = new lib._2_00046();
	this.instance_46.setTransform(20.5,0,0.803,0.803);

	this.instance_47 = new lib._2_00047();
	this.instance_47.setTransform(20.5,0,0.803,0.803);

	this.instance_48 = new lib._2_00048();
	this.instance_48.setTransform(20.5,0,0.803,0.803);

	this.instance_49 = new lib._2_00049();
	this.instance_49.setTransform(20.5,0,0.803,0.803);

	this.instance_50 = new lib._2_00050();
	this.instance_50.setTransform(20.5,0,0.803,0.803);

	this.instance_51 = new lib._2_00051();
	this.instance_51.setTransform(20.5,0,0.803,0.803);

	this.instance_52 = new lib._2_00052();
	this.instance_52.setTransform(20.5,0,0.803,0.803);

	this.instance_53 = new lib._2_00053();
	this.instance_53.setTransform(20.5,0,0.803,0.803);

	this.instance_54 = new lib._2_00054();
	this.instance_54.setTransform(20.5,0,0.803,0.803);

	this.instance_55 = new lib._2_00055();
	this.instance_55.setTransform(20.5,0,0.803,0.803);

	this.instance_56 = new lib._2_00056();
	this.instance_56.setTransform(20.5,0,0.803,0.803);

	this.instance_57 = new lib._2_00057();
	this.instance_57.setTransform(20.5,0,0.803,0.803);

	this.instance_58 = new lib._2_00058();
	this.instance_58.setTransform(20.5,0,0.803,0.803);

	this.instance_59 = new lib._2_00059();
	this.instance_59.setTransform(20.5,0,0.803,0.803);

	this.instance_60 = new lib._2_00060();
	this.instance_60.setTransform(20.5,0,0.803,0.803);

	this.instance_61 = new lib._2_00061();
	this.instance_61.setTransform(20.5,0,0.803,0.803);

	this.instance_62 = new lib._2_00062();
	this.instance_62.setTransform(20.5,0,0.803,0.803);

	this.instance_63 = new lib._2_00063();
	this.instance_63.setTransform(20.5,0,0.803,0.803);

	this.instance_64 = new lib._2_00064();
	this.instance_64.setTransform(20.5,0,0.803,0.803);

	this.instance_65 = new lib._2_00065();
	this.instance_65.setTransform(20.5,0,0.803,0.803);

	this.instance_66 = new lib._2_00066();
	this.instance_66.setTransform(20.5,0,0.803,0.803);

	this.instance_67 = new lib._2_00067();
	this.instance_67.setTransform(20.5,0,0.803,0.803);

	this.instance_68 = new lib._2_00068();
	this.instance_68.setTransform(20.5,0,0.803,0.803);

	this.instance_69 = new lib._2_00069();
	this.instance_69.setTransform(20.5,0,0.803,0.803);

	this.instance_70 = new lib._2_00070();
	this.instance_70.setTransform(20.5,0,0.803,0.803);

	this.instance_71 = new lib._2_00071();
	this.instance_71.setTransform(20.5,0,0.803,0.803);

	this.instance_72 = new lib._2_00072();
	this.instance_72.setTransform(20.5,0,0.803,0.803);

	this.instance_73 = new lib._2_00073();
	this.instance_73.setTransform(20.5,0,0.803,0.803);

	this.instance_74 = new lib._2_00074();
	this.instance_74.setTransform(20.5,0,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.5,0,56.2,96.3);


(lib.icon2element02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.icon2element01();
	this.instance.setTransform(0,38.3,1,1,180,0,0,0,-38.3);

	this.instance_1 = new lib.icon2element01();
	this.instance_1.setTransform(0,-38.3,1,1,0,0,0,0,-38.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-76.5,153,153);


(lib.PRELOADING = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_22 = function() {
		/* gotoAndPlay (1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(2));

	// Calque 1
	this.instance = new lib.icon2element02();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-76.5,153,153);


(lib.PAGEDOWNTIPS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this._mc = new lib.补间14();
	this._mc.setTransform(12.5,7.5);
	this._mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this._mc).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0.008},0).wait(1).to({y:7.6,alpha:0.018},0).wait(1).to({alpha:0.033},0).wait(1).to({y:7.7,alpha:0.052},0).wait(1).to({y:7.8,alpha:0.076},0).wait(1).to({y:7.9,alpha:0.105},0).wait(1).to({y:8,alpha:0.14},0).wait(1).to({y:8.2,alpha:0.179},0).wait(1).to({y:8.4,alpha:0.224},0).wait(1).to({y:8.6,alpha:0.273},0).wait(1).to({y:8.8,alpha:0.327},0).wait(1).to({y:9,alpha:0.384},0).wait(1).to({y:9.2,alpha:0.444},0).wait(1).to({y:9.4,alpha:0.505},0).wait(1).to({y:9.7,alpha:0.566},0).wait(1).to({y:9.9,alpha:0.627},0).wait(1).to({y:10.1,alpha:0.685},0).wait(1).to({y:10.3,alpha:0.74},0).wait(1).to({y:10.5,alpha:0.79},0).wait(1).to({y:10.7,alpha:0.836},0).wait(1).to({y:10.9,alpha:0.875},0).wait(1).to({y:11,alpha:0.91},0).wait(1).to({y:11.1,alpha:0.938},0).wait(1).to({y:11.2,alpha:0.961},0).wait(1).to({y:11.3,alpha:0.979},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.998},0).wait(1).to({y:11.4,alpha:1},0).wait(1).to({y:11.3,alpha:0.998},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.983},0).wait(1).to({y:11.2,alpha:0.97},0).wait(1).to({alpha:0.952},0).wait(1).to({y:11.1,alpha:0.929},0).wait(1).to({y:11,alpha:0.902},0).wait(1).to({y:10.8,alpha:0.87},0).wait(1).to({y:10.7,alpha:0.833},0).wait(1).to({y:10.5,alpha:0.792},0).wait(1).to({y:10.4,alpha:0.745},0).wait(1).to({y:10.2,alpha:0.695},0).wait(1).to({y:10,alpha:0.641},0).wait(1).to({y:9.8,alpha:0.584},0).wait(1).to({y:9.5,alpha:0.526},0).wait(1).to({y:9.3,alpha:0.466},0).wait(1).to({y:9.1,alpha:0.407},0).wait(1).to({y:8.8,alpha:0.35},0).wait(1).to({y:8.6,alpha:0.294},0).wait(1).to({y:8.4,alpha:0.243},0).wait(1).to({y:8.3,alpha:0.196},0).wait(1).to({y:8.1,alpha:0.153},0).wait(1).to({y:7.9,alpha:0.116},0).wait(1).to({y:7.8,alpha:0.084},0).wait(1).to({y:7.7,alpha:0.057},0).wait(1).to({y:7.6,alpha:0.036},0).wait(1).to({alpha:0.02},0).wait(1).to({y:7.5,alpha:0.009},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,15);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间1("synched",0);
	this.instance.setTransform(17.5,132);

	this.instance_1 = new lib.补间2("synched",0);
	this.instance_1.setTransform(17.5,119);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-5,regY:-24.5,x:12.5,y:107.5},0).wait(1).to({y:107.4},0).wait(1).to({startPosition:0},0).wait(1).to({y:107.2},0).wait(1).to({y:107.1},0).wait(1).to({y:106.9},0).wait(1).to({y:106.6},0).wait(1).to({y:106.3},0).wait(1).to({y:106},0).wait(1).to({y:105.6},0).wait(1).to({y:105.2},0).wait(1).to({y:104.7},0).wait(1).to({y:104.2},0).wait(1).to({y:103.6},0).wait(1).to({y:103},0).wait(1).to({y:102.3},0).wait(1).to({y:101.7},0).wait(1).to({y:101},0).wait(1).to({y:100.3},0).wait(1).to({y:99.6},0).wait(1).to({y:98.9},0).wait(1).to({y:98.2},0).wait(1).to({y:97.6},0).wait(1).to({y:97.1},0).wait(1).to({y:96.6},0).wait(1).to({y:96.1},0).wait(1).to({y:95.7},0).wait(1).to({y:95.4},0).wait(1).to({y:95.1},0).wait(1).to({y:94.9},0).wait(1).to({y:94.7},0).wait(1).to({y:94.6},0).wait(1).to({y:94.5},0).to({_off:true},1).wait(35).to({_off:false,regX:0,regY:0,x:17.5,y:132},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).wait(1).to({regX:-5,regY:-24.5,x:12.5,y:94.5},0).wait(1).to({y:94.6},0).wait(1).to({startPosition:0},0).wait(1).to({y:94.8},0).wait(1).to({y:94.9},0).wait(1).to({y:95.1},0).wait(1).to({y:95.3},0).wait(1).to({y:95.6},0).wait(1).to({y:95.9},0).wait(1).to({y:96.3},0).wait(1).to({y:96.7},0).wait(1).to({y:97.1},0).wait(1).to({y:97.6},0).wait(1).to({y:98.2},0).wait(1).to({y:98.7},0).wait(1).to({y:99.4},0).wait(1).to({y:100},0).wait(1).to({y:100.7},0).wait(1).to({y:101.3},0).wait(1).to({y:102},0).wait(1).to({y:102.7},0).wait(1).to({y:103.4},0).wait(1).to({y:104},0).wait(1).to({y:104.5},0).wait(1).to({y:105.1},0).wait(1).to({y:105.6},0).wait(1).to({y:106},0).wait(1).to({y:106.4},0).wait(1).to({y:106.7},0).wait(1).to({y:106.9},0).wait(1).to({y:107.1},0).wait(1).to({y:107.3},0).wait(1).to({y:107.4},0).wait(1).to({y:107.5},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,215);


(lib.SHARESP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件2();
	this.instance.setTransform(767.5,172,1,1,0,0,0,17.5,132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.6)").s().p("Eg+fBLAMAAAiV/MB8/AAAMAAACV/g");
	this.shape.setTransform(400,480);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,960);


// stage content:
(lib.library = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PAGEDOWNTIPS
	this.instance = new lib.PAGEDOWNTIPS();
	this.instance.setTransform(18.3,11,1.459,1.459,0,0,0,12.5,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// SHARESP
	this.instance_1 = new lib.SHARESP();
	this.instance_1.setTransform(17.5,132,1,1,0,0,0,17.5,132);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// MAN2
	this.instance_2 = new lib.MAN2();
	this.instance_2.setTransform(564,131,1,1,0,0,0,30,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// MAN
	this.instance_3 = new lib.MAN();
	this.instance_3.setTransform(476.9,129.4,1,1,0,0,0,40,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// SOUNDBTN
	this.instance_4 = new lib.SOUNDBTN();
	this.instance_4.setTransform(96,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// PRELOADING
	this.instance_5 = new lib.PRELOADING();
	this.instance_5.setTransform(242.4,185.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,480,800,960);

})(libLibrary = libLibrary||{}, imagesLibrary = imagesLibrary||{}, createjs = createjs||{}, ss = ss||{});
var libLibrary, imagesLibrary, createjs, ss;