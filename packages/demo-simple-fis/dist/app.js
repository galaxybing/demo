alert("Hello, World");
function testAqalert(){
  alert('galaxyw bing xin.');
}
function experiencefree(){
  var u = navigator.userAgent;
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if(isiOS){
    testAqalert()
  }
}
$(document).on('touchend','#btnDemo', function(){
  experiencefree();
});