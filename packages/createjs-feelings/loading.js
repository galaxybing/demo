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
		{src:"images/loading/bg.jpg", id:"bg"},
		{src:"images/loading/word0.png", id:"word0"},
		{src:"images/loading/word1.png", id:"word1"}
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



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,960);


(lib.word0 = function() {
	this.initialize(img.word0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4,5);


(lib.word1 = function() {
	this.initialize(img.word1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,183);


(lib.COMMONBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,960);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 复制
	this.instance = new lib.word0();
	this.instance.setTransform(0,44.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(11));

	// 图层 1  复制 2
	this.instance_1 = new lib.word0();
	this.instance_1.setTransform(0,23.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(20));

	// 图层 1
	this.instance_2 = new lib.word0();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4,5);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// loading_0001_图层-1.png
	this.instance = new lib.word1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// loading_0000_图层-2.png
	this.instance_1 = new lib.元件3();
	this.instance_1.setTransform(14.7,204.3,1,1,0,0,0,2,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,206.8);


(lib.LOADING = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// loading_0001_图层-1.png
	this.instance = new lib.元件2();
	this.instance.setTransform(400.1,375.2,0.698,0.698,0,0,0,15,107.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// loading_0002_图层-3.png
	this.instance_1 = new lib.COMMONBG();
	this.instance_1.setTransform(400,480,1,1,0,0,0,400,480);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,960);


// stage content:
(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.LOADING();
	this.instance.setTransform(400,480,1,1,0,0,0,400,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,480,800,960);

})(libLoading = libLoading||{}, imagesLoading = imagesLoading||{}, createjs = createjs||{}, ss = ss||{});
var libLoading, imagesLoading, createjs, ss;