(this["webpackJsonpface-app"]=this["webpackJsonpface-app"]||[]).push([[0],{19:function(o,e,a){o.exports=a(39)},24:function(o,e,a){},32:function(o,e){},33:function(o,e){},34:function(o,e){},36:function(o,e,a){o.exports=a.p+"static/media/logo.5d5d9eef.svg"},37:function(o,e,a){o.exports=a.p+"static/media/bonnie.baeadfc2.jpg"},38:function(o,e,a){},39:function(o,e,a){"use strict";a.r(e);var n=a(2),r=a.n(n),i=a(18),c=a.n(i),l=(a(24),a(3)),t=a.n(l),d=a(4),m=a(9),s=a(10),E=a(7),u=a(13),C=a(12),D=a(8),p=a(5);function A(o){o=o.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(o,e,a,n){return e+e+a+a+n+n}));var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function F(o){for(var e={brand:"",series:"",color:"",id:"",name:"",dis:999999999},a=0;a<p.brands.length;a++){var n=p.brands[a].name;console.log(n);for(var r=0;r<p.brands[a].series.length;r++)for(var i=p.brands[a].series[r].name,c=0;c<p.brands[a].series[r].lipsticks.length;c++){var l=p.brands[a].series[r].lipsticks[c].color,t=A(l),d=p.brands[a].series[r].lipsticks[c].id,m=p.brands[a].series[r].lipsticks[c].name,s=(o.r-t.r)*(o.r-t.r)+(o.g-t.g)*(o.g-t.g)+(o.b-t.b)*(o.b-t.b);console.log(m),e.dis>s&&(e.brand=n,e.series=i,e.color=l,e.id=d,e.name=m,e.dis=s)}}return e}function B(){return h.apply(this,arguments)}function h(){return(h=Object(d.a)(t.a.mark((function o(){return t.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log("Init Model"),o.prev=1,o.next=4,D.b("/models");case 4:return console.log("Loaded FaceLandmarkTinyModel"),o.next=7,D.d("/models");case 7:return console.log("Loaded TinyFaceDetectorModel"),o.next=10,D.c("/models");case 10:console.log("Loaded SsdMobilenetv1Model"),o.next=16;break;case 13:o.prev=13,o.t0=o.catch(1),console.log("Loaded Model Failed");case 16:case"end":return o.stop()}}),o,null,[[1,13]])})))).apply(this,arguments)}function g(o){return f.apply(this,arguments)}function f(){return(f=Object(d.a)(t.a.mark((function o(e){var a,n,r,i,c;return t.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,D.a(e).withFaceLandmarks(!0);case 2:return a=o.sent,n=a.landmarks.getMouth(),r=v(e,n),i=I(r),c=F(i),o.abrupt("return",{mouthColors:r,avgColor:i,lipstickColor:c});case 8:case"end":return o.stop()}}),o)})))).apply(this,arguments)}function v(o,e){for(var a=o.getContext("2d"),n=[],r=0;r<e.length;r++){var i=a.getImageData(e[r]._x,e[r]._y,1,1);n[r]=i.data}return n}function I(o){for(var e=0,a=0,n=0,r=o.length,i=0;i<o.length;i++)e+=o[i][0],a+=o[i][1],n+=o[i][2];return{r:Math.round(e/r),g:Math.round(a/r),b:Math.round(n/r)}}var k=function(o){Object(u.a)(a,o);var e=Object(C.a)(a);function a(o){var n;return Object(m.a)(this,a),(n=e.call(this,o)).state={image:void 0},n.onImageChange=n.onImageChange.bind(Object(E.a)(n)),n}return Object(s.a)(a,[{key:"onImageChange",value:function(o){var e=this;if(o.target.files&&o.target.files[0]){var a=o.target.files[0];if(this.setState({image:URL.createObjectURL(a)}),void 0!==this.props.getImage){var n=new FileReader;n.readAsDataURL(a),n.onload=function(){var o=Object(d.a)(t.a.mark((function o(a){var n,r;return t.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:(n=new Image).src=a.target.result,r=e,n.onload=Object(d.a)(t.a.mark((function o(){var e,a,i,c;return t.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:(e=document.createElement("canvas")).width=this.width,e.height=this.height,a=e.getContext("2d"),i=this.width,c=this.height,a.drawImage(n,0,0,i,c),r.props.getImage(e);case 8:case"end":return o.stop()}}),o,this)})));case 4:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}()}}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,void 0!==this.state.image?r.a.createElement("img",{src:this.state.image,alt:"uploaded_img",style:{width:"100%"}}):r.a.createElement("div",null),r.a.createElement("h1",null,"Select Image"),r.a.createElement("input",{type:"file",name:"myImage",onChange:this.onImageChange}))))}}]),a}(n.Component),b=(a(36),a(37),a(38),function(o){Object(u.a)(a,o);var e=Object(C.a)(a);function a(o){var n;return Object(m.a)(this,a),(n=e.call(this,o)).canvas=r.a.createRef(),n.mouthColors=[],n.lipColor={},n.state={img:void 0,lipstick:void 0},n.getImage=n.getImage.bind(Object(E.a)(n)),n}return Object(s.a)(a,[{key:"drawHTMLImage",value:function(o,e){o.getContext("2d").drawImage(e,0,0)}},{key:"getImage",value:function(){var o=Object(d.a)(t.a.mark((function o(e){var a;return t.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,g(e);case 2:a=o.sent,this.lipColor=a,console.log(a),console.log(this.lipColor),this.setState({img:e,lipstick:a.lipstickColor});case 7:case"end":return o.stop()}}),o,this)})));return function(e){return o.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var o=Object(d.a)(t.a.mark((function o(){return t.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,B();case 2:if(void 0===this.state.img){o.next=9;break}return document.getElementById("test"),this.drawHTMLImage(this.canvas.current,this.state.img,296,296),o.next=7,g(this.canvas.current);case 7:this.lipColor=o.sent,console.log(this.lipColor);case 9:case"end":return o.stop()}}),o,this)})));return function(){return o.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,{getImage:this.getImage}),void 0!==this.state.lipstick?r.a.createElement("h3",{style:{color:this.state.lipstick.color}},this.state.lipstick.color+" "+this.state.lipstick.brand+" "+this.state.lipstick.series+" "+this.state.lipstick.name):r.a.createElement("h3",null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(o){o.unregister()})).catch((function(o){console.error(o.message)}))},5:function(o){o.exports=JSON.parse('{"brands":[{"name":"\u5723\u7f57\u5170","series":[{"name":"\u83b9\u4eae\u7eaf\u9b45\u5507\u818f","lipsticks":[{"color":"#D62352","id":"49","name":"\u64a9\u9a9a"},{"color":"#DC4B41","id":"14","name":"\u4e00\u89c1\u503e\u5fc3"},{"color":"#B22146","id":"05","name":"\u6d6e\u751f\u82e5\u68a6"},{"color":"#A25356","id":"08","name":"\u7eaf\u771f\u68a6\u5e7b"},{"color":"#DF3443","id":"12","name":"\u7ea2\u7c89\u6d3e\u5bf9"},{"color":"#E06C68","id":"15","name":"\u73ca\u745a\u604b\u4eba"},{"color":"#842C71","id":"19","name":"\u534e\u4e3d\u8f6c\u8eab"},{"color":"#D13C4F","id":"43","name":"\u5507\u5370"},{"color":"#B71D32","id":"04","name":"\u5371\u60c5\u7981\u679c"},{"color":"#DE2361","id":"06","name":"\u60c5\u7aa6\u521d\u5f00"},{"color":"#B05856","id":"09","name":"\u88f8\u8272\u6697\u604b"},{"color":"#E06F70","id":"13","name":"\u9082\u9005\u5df4\u9ece"},{"color":"#CD4143","id":"16","name":"\u7cd6\u679c\u5973\u5b69"},{"color":"#EC6A70","id":"41","name":"\u544a\u767d"},{"color":"#EFE9DE","id":"42","name":"\u521d\u604b"},{"color":"#C60F2F","id":"45","name":"\u62e5\u543b"},{"color":"#BB6868","id":"47","name":"\u5fc3\u8df3"},{"color":"#E0186B","id":"50","name":"\u7ea6\u5b9a"},{"color":"#D45E85","id":"52","name":"\u6e38\u620f"},{"color":"#C16E6F","id":"44","name":"\u610f\u5916"},{"color":"#D1121B","id":"46","name":"\u949f\u60c5"},{"color":"#8E243E","id":"48","name":"\u591c\u8272"},{"color":"#EE7486","id":"51","name":"\u79c1\u8bed"}]},{"name":"\u7eaf\u53e3\u7ea2","lipsticks":[{"id":"19","color":"#B13C79","name":"\u73ab\u7ea2\u8272"},{"id":"13","color":"#BB1813","name":"\u6b63\u6a58\u8272"},{"id":"52","color":"#EA4E59","name":"\u661f\u661f\u8272"},{"id":"01","color":"#B8122B","name":"\u6b63\u7ea2\u8272"},{"id":"17","color":"#F75E70","name":"\u5ae3\u7c89\u7eb1\u4e3d"},{"id":"07","color":"#CB2276","name":"\u96c5\u7d2b\u7eb1\u84c9"},{"id":"09","color":"#C27482","name":"\u7edb\u7d2b\u4e1d\u7ed2"},{"id":"11","color":"#C06B72","name":"\u85d5\u7c89\u4e91\u7f57"},{"id":"16","color":"#BB444A","name":"\u7eef\u7ea2\u9999\u7f0e"},{"id":"22","color":"#E86E9F","name":"\u83b9\u4eae\u88f8\u7c89"},{"id":"23","color":"#DE6F5C","name":"\u674f\u8272\u5e9c\u7ef8"},{"id":"26","color":"#CC6D84","name":"\u5807\u8272\u6d41\u7eb1"},{"id":"36","color":"#ED695D","name":"\u73ca\u745a\u96ea\u7eba"},{"id":"49","color":"#DC4D8D","name":"\u60f3\u4f60\u8272"},{"id":"51","color":"#FA6C55","name":"\u83b9\u4eae\u73ca\u745a\u6a59"},{"id":"56","color":"#D9100E","name":"\u6a59\u7ea2\u7ec7\u9526"},{"id":"59","color":"#B96463","name":"\u88f8\u8272\u8584\u7eb1"},{"id":"207","color":"#CA4061","name":"\u73ca\u745a\u67da"},{"id":"208","color":"#D60846","name":"\u73ab\u7ea2\u8272"},{"id":"27","color":"#D24379","name":"\u7eaf\u771f\u73ab\u7ea2"},{"id":"50","color":"#DC2923","name":"\u524d\u536b\u9713\u7ea2"},{"id":"57","color":"#C7153D","name":"\u660e\u4eae\u88f8\u5507"},{"id":"58","color":"#B25D84","name":"\u660e\u4eae\u6de1\u7d2b"},{"id":"201","color":"#B01020","name":"\u7ea2\u5507\u5370\u8c61"},{"id":"202","color":"#9E2C2C","name":"\u75af\u72c2\u73ab\u7470"},{"id":"203","color":"#940220","name":"\u6447\u6eda\u7ea2\u5507"},{"id":"205","color":"#550001","name":"\u5929\u7136\u6d46\u679c"},{"id":"72","color":"#9A1B2F","name":""},{"id":"73","color":"#CF0410","name":""},{"id":"74","color":"#E0291B","name":""},{"id":"211","color":"#E4004F","name":"DECADENT"},{"id":"212","color":"#A53B4F","name":"ALTERNATIVEPLUM"},{"id":"213","color":"#E94138","name":"ORANGE SEVENTIES"},{"id":"215","color":"#E34E90","name":"LUST FOR PINK"},{"id":"216","color":"#DE455A","name":"RED CLASH"},{"id":"217","color":"#DE455A","name":"NUDE TROUBLE"}]},{"name":"\u83b9\u4eae\u7eaf\u9b45\u7f8e\u5507\u818f","lipsticks":[{"id":"11","color":"#D51768","name":"\u73ab\u8272\u6e38\u620f"},{"id":"3","color":"#F18885","name":"\u73ab\u7470\u8f7b\u8bed"},{"id":"8","color":"#E52322","name":"\u6a59\u8272\u653e\u7eb5"},{"id":"4","color":"#DA0140","name":"\u6843\u7ea2\u6b32\u671b"},{"id":"1","color":"#C05B60","name":"\u88f8\u8272\u5e7b\u60f3"},{"id":"2","color":"#E87593","name":"\u7c89\u8272\u5b09\u620f"},{"id":"5","color":"#630F28","name":"\u6885\u8272\u64a9\u62e8"},{"id":"6","color":"#CC0824","name":"\u7ea2\u8272\u89e6\u78b0"},{"id":"7","color":"#ED6D68","name":"\u73ca\u745a\u6311\u9017"},{"id":"9","color":"#E73458","name":"\u7c89\u8272\u7eb5\u60c5"},{"id":"10","color":"#A00F30","name":"\u7eef\u7ea2\u8bf1\u60d1"},{"id":"12","color":"#B81D3D","name":"\u82fa\u8272\u66a7\u6627"}]},{"name":"\u7eaf\u8272\u5507\u91c9\u53db\u9006\u88f8\u5507","lipsticks":[{"id":"12","color":"#D0011E","name":"\u7ea2\u7eef"},{"id":"46","color":"#9F182C","name":"\u6df1\u7ea2\u8272"},{"id":"50","color":"#C64E5B","name":"\u81ea\u7136\u73ca\u745a"},{"id":"08","color":"#C41304","name":"\u5510\u6a58"},{"id":"07","color":"#CC2010","name":"\u871c\u67da"},{"id":"09","color":"#D4020E","name":"\u7ea2\u91c9"},{"id":"11","color":"#D0010B","name":"\u6d0b\u7ea2"},{"id":"13","color":"#CC030E","name":"\u831c\u8272"},{"id":"15","color":"#D41B40","name":"\u6843\u7ea2"},{"id":"42","color":"#DF294E","name":"\u98ce\u60c5\u6a58\u7ea2"},{"id":"43","color":"#E23E44","name":"\u73ab\u7470\u6b4c\u8c23"},{"id":"47","color":"#BC3250","name":"\u6843\u7ea2\u8272"},{"id":"48","color":"#C13E30","name":"\u6a59\u8272"},{"id":"49","color":"#BB325C","name":"\u6885\u5b50\u8272"},{"id":"51","color":"#951E53","name":"\u73ab\u7ea2\u8272"},{"id":"200","color":"#DC9F8F","name":"\u4e30\u5507\u5507\u91c9"}]},{"name":"\u83b9\u4eae\u7eda\u67d3\u5507\u6cb9","lipsticks":[{"id":"05","color":"#FF54A3","name":"\u6a31\u6843\u60c5\u4eba"},{"id":"04","color":"#FF725D","name":"\u7c89\u604b\u73ab\u7470"},{"id":"06","color":"#C072B5","name":"\u871c\u6843\u70ed\u604b"},{"id":"07","color":"#FFD0DD","name":"\u6a59\u8272\u9082\u9005"},{"id":"08","color":"#FF7B1E","name":"\u7c89\u8272\u61a7\u61ac"}]},{"name":"\u751c\u543b\u5507\u988a\u971c","lipsticks":[{"id":"05","color":"#E21949","name":"\u6d0b\u7ea2\u8272"},{"id":"01","color":"#DD2269","name":"\u73ab\u7ea2\u8272"},{"id":"02","color":"#E05572","name":"\u6a31\u82b1\u7c89"},{"id":"03","color":"#D16479","name":"\u88f8\u7c89\u8272"},{"id":"04","color":"#DF4A43","name":"\u4eae\u6a58\u8272"},{"id":"07","color":"#DC6B5D","name":"\u73ca\u745a\u6a59"},{"id":"08","color":"#DE6A78","name":"\u73ca\u745a\u7c89"},{"id":"09","color":"#BF7083","name":"\u73ca\u745a\u67da"},{"id":"12","color":"#AD625E","name":"\u6469\u5361\u8272"}]},{"name":"\u83b9\u4eae\u707f\u91d1\u5507\u5f69","lipsticks":[{"id":"49","color":"#D03370","name":"\u9a9a\u52a8"},{"id":"207","color":"#D11746","name":"\u6fc0\u60c5"},{"id":"03","color":"#D34E59","name":"\u61a7\u61ac"},{"id":"15","color":"#AB3B48","name":"\u7a81\u7136"},{"id":"30","color":"#DD6053","name":"\u751c\u871c"},{"id":"203","color":"#FE645A","name":"\u5fc3\u8df3"},{"id":"204","color":"#FE5B56","name":"\u610f\u5916"},{"id":"206","color":"#B80722","name":"\u7099\u70ed"}]}]},{"name":"\u9999\u5948\u513f\u53ef\u53ef\u5c0f\u59d0","series":[{"name":"\u5507\u818f\u6c34\u4eae","lipsticks":[{"id":"69","color":"#F17365","name":"\u4f20\u60c5"},{"id":"46","color":"#E87268","name":"\u81ea\u7531"},{"id":"122","color":"#EA4D4A","name":"CORAIL RADIEUX"},{"id":"97","color":"#D53D49","name":"\u6d12\u8131"},{"id":"44","color":"#FD4334","name":"\u6c34\u6f3e\u7eb1\u4e3d"},{"id":"507","color":"#E94648","name":"\u5014\u5f3a"},{"id":"114","color":"#FF3220","name":"SHIPSHAPE"},{"id":"91","color":"#C12A33","name":"\u6ce2\u5e0c\u7c73\u4e9a"},{"id":"84","color":"#CE1220","name":"\u5bf9\u767d"},{"id":"57","color":"#EB6F79","name":"\u5192\u9669"},{"id":"116","color":"#EC5193","name":"MIGHTY"},{"id":"54","color":"#D1918D","name":"\u5361\u67cf\u7537\u5b69"},{"id":"79","color":"#E86A75","name":"\u4f20\u5947"},{"id":"497","color":"#ED5A5E","name":"\u52c7\u6562"},{"id":"132","color":"#E93A5B","name":"ROSE RAVISSANT"},{"id":"87","color":"#F8657F","name":"\u7ea6\u4f1a"},{"id":"55","color":"#F14C77","name":"\u6d6a\u6f2b\u7231\u60c5"},{"id":"118","color":"#EB2755","name":"ENERGY"},{"id":"62","color":"#E12948","name":"\u8499\u7279\u5361\u7f57"},{"id":"134","color":"#E7394A","name":"RENOUVEAU"},{"id":"98","color":"#CC4D68","name":"\u7387\u771f"},{"id":"60","color":"#BB395F","name":"\u5b89\u8482\u5c97\u59ae"},{"id":"61","color":"#C54463","name":"\u5e78\u798f\u65f6\u5149"}]},{"name":"\u70ab\u4eae\u9b45\u529b\u5507\u818f","lipsticks":[{"id":"90","color":"#FC6E48","name":"\u6d3b\u6cfc"},{"id":"96","color":"#FA421C","name":"\u53e4\u7075\u7cbe\u602a"},{"id":"182","color":"#E02E20","name":"VIBRANTE"},{"id":"152","color":"#E82F2C","name":"\u9690\u7ea6"},{"id":"172","color":"#E40021","name":"ROUGE REBELLE"},{"id":"135","color":"#99413D","name":"\u8c1c\u60c5"},{"id":"99","color":"#8A010D","name":"\u6d77\u76d7"},{"id":"176","color":"#A80D1F","name":"IND\xc9PENDANTE"},{"id":"169","color":"#8E2622","name":"ROUGE TENTATION"},{"id":"91","color":"#E45661","name":"\u5438\u5f15\u529b"},{"id":"179","color":"#ED6160","name":"LUMINOUS"},{"id":"94","color":"#FC3E6E","name":"\u7740\u8ff7"},{"id":"138","color":"#D93E5E","name":"\u6fc0\u6602"},{"id":"136","color":"#EF4246","name":"\u60a0\u626c"},{"id":"178","color":"#BF5363","name":"NEW PRODIGIOUS"},{"id":"158","color":"#B24957","name":"VIREVOLTANTE"},{"id":"93","color":"#CD0043","name":"\u5174\u594b"},{"id":"165","color":"#C82C40","name":"\xc9BLOUISSANTE"},{"id":"184","color":"#C80F2E","name":"INCANTEVOLE"},{"id":"102","color":"#B20032","name":"\u60b8\u52a8"}]},{"name":"\u70ab\u4eae\u9b45\u529b\u5507\u818f","lipsticks":[{"id":"90","color":"#E1527E","name":"IMAGINATION"}]},{"name":"\u70ab\u4eae\u9b45\u529b\u5507\u818f\u4e1d\u7ed2","lipsticks":[{"id":"65","color":"#E17062","name":"L\'ARISTOCRATICA"},{"id":"64","color":"#E84632","name":"FIRST LIGHT"},{"id":"57","color":"#BE2B24","name":"ROUGE FEU"},{"id":"66","color":"#E1112A","name":"L\'INDOMABILE"},{"id":"51","color":"#9E333D","name":"\u9707\u64bc"},{"id":"56","color":"#B23030","name":"ROUGE CHARNEL"},{"id":"38","color":"#892833","name":"\u8ff7\u60d1"},{"id":"58","color":"#822E2E","name":"ROUGE VIE"},{"id":"63","color":"#802932","name":"NIGHTFALL"},{"id":"61","color":"#EC7879","name":"LA SECR\xc8TE"},{"id":"42","color":"#FE697F","name":"\u663e\u773c"},{"id":"43","color":"#FA5059","name":"\u4eb2\u7231"},{"id":"46","color":"#C92D38","name":"\u6167\u9ee0"},{"id":"37","color":"#C43759","name":"\u7eb5\u60c5"},{"id":"44","color":"#F06FA5","name":"\u6b4c\u5267\u540d\u4f36"},{"id":"50","color":"#9F2F56","name":"\u6d6a\u6f2b\u5e7b\u60f3"}]}]},{"name":"\u8fea\u5965","series":[{"name":"\u9b45\u60d1\u91c9\u5507\u818f","lipsticks":[{"id":"457","color":"#EB636B","name":"\u9e21\u5c3e\u9152"},{"id":"487","color":"#EB5C97","name":"\u6ce1\u6ce1\u5802"},{"id":"550","color":"#E47082","name":"\u5c0f\u5fc3\u8ba1"},{"id":"554","color":"#EA5344","name":"\u65e5\u5149\u6d74"},{"id":"564","color":"#E94858","name":"\u8d2d\u7269\u72c2"},{"id":"577","color":"#C86378","name":"\u6df7\u65e5\u5b50"},{"id":"637","color":"#E74218","name":"\u70ed\u70b9"},{"id":"644","color":"#EA5331","name":"\u751f\u5b58\u6e38\u620f"},{"id":"684","color":"#E60860","name":"\u4eba\u751f\u8d62\u5bb6"},{"id":"740","color":"#902216","name":"\u53ef\u4e50\u90e8"},{"id":"744","color":"#E51E1B","name":"\u82b1\u8774\u8776"},{"id":"794","color":"#95358C","name":"\u5929\u751f\u73a9\u5bb6"},{"id":"857","color":"#A01314","name":"\u597d\u83b1\u575e\u5927\u5496"},{"id":"867","color":"#901A32","name":"\u7ea2\u9152"},{"id":"877","color":"#C4032B","name":"\u7ed9\u6211\u8fea\u5965"},{"id":"882","color":"#BB0E63","name":"\u91ce\u86ee\u5973\u53cb"},{"id":"904","color":"#391E1D","name":"\u9ed1\u5496\u5561"},{"id":"924","color":"#602227","name":"\u4e0d\u7f81"}]},{"name":"\u9b45\u60d1\u67d3\u5507\u871c","lipsticks":[{"id":"351","color":"#D8707D","name":"\u9b45\u60d1\u67d3\u5507\u871c"},{"id":"421","color":"#AD5F56","name":"\u9b45\u60d1\u67d3\u5507\u871c"},{"id":"451","color":"#E55461","name":"Natural Coral"},{"id":"491","color":"#A76165","name":"\u9b45\u60d1\u67d3\u5507\u871c"},{"id":"761","color":"#E13D5D","name":"Natural Cherry"},{"id":"771","color":"#974249","name":"Natural Berry"},{"id":"881","color":"#EC6292","name":"Natural Pink"}]},{"name":"\u70c8\u8273\u84dd\u91d1\u5507\u818f","lipsticks":[{"id":"028","color":"#E83F4A","name":"Actrice"},{"id":"426","color":"#D58F7F","name":""},{"id":"481","color":"#B76566","name":""},{"id":"047","color":"#E40068","name":"\u8fea\u5965\u5c0f\u59d0"},{"id":"781","color":"#833B43","name":""},{"id":"060","color":"#D36179","name":"\u9996\u6620\u793c"},{"id":"080","color":"#D91820","name":"\u5fae\u7b11\u6b63\u7ea2"},{"id":"861","color":"#B52237","name":""},{"id":"996","color":"#BD7376","name":""},{"id":"999","color":"#A82628","name":""},{"id":"999","color":"#A82628","name":"Metallic"},{"id":"207","color":"#BBC3C2","name":"\u8499\u7530\u7070"},{"id":"277","color":"#DB7096","name":"Os\xe9e"},{"id":"343","color":"#EF7C6B","name":"Panar\xe9a"},{"id":"351","color":"#E46177","name":"Dansante"},{"id":"459","color":"#D1546E","name":"Charnelle"},{"id":"520","color":"#E4003E","name":"Feel Good"},{"id":"553","color":"#DA4F4E","name":"Sillage"},{"id":"567","color":"#EA5069","name":"Rose en Dior"},{"id":"576","color":"#F08182","name":"Pretty Matte"},{"id":"602","color":"#2E4763","name":"\u72c2\u60f3"},{"id":"642","color":"#EA5155","name":"Ready"},{"id":"643","color":"#E84617","name":"Stand Out"},{"id":"652","color":"#ED6C7F","name":"\u73ca\u745a"},{"id":"663","color":"#D0546B","name":"D\xe9sir"},{"id":"665","color":"#BD5154","name":"R\xeav\xe9e"},{"id":"678","color":"#CC4A6B","name":"Culte"},{"id":"746","color":"#DC002C","name":"Favorite"},{"id":"756","color":"#E52F31","name":"Panache"},{"id":"766","color":"#CF1D59","name":"Rose Harpers"},{"id":"771","color":"#E96C81","name":"Radiant Matte"},{"id":"772","color":"#CB7A84","name":"Classic Matte"},{"id":"775","color":"#E1244B","name":"Hyde Park"},{"id":"787","color":"#E6699D","name":"Exuberant Matte"},{"id":"789","color":"#96518F","name":"\u75f4\u8ff7"},{"id":"844","color":"#E0262E","name":"Trafalgar"},{"id":"856","color":"#B62631","name":"C\xe9l\xe8bre"},{"id":"888","color":"#EB5958","name":"Strong Matte"},{"id":"962","color":"#86556D","name":"\u5947\u8469"},{"id":"999","color":"#BE020D","name":""},{"id":"999","color":"#CC434D","name":"\u4f20\u5947\u7ea2\u5507\u54d1\u5149"}]}]},{"name":"\u7f8e\u5b9d\u83b2","series":[{"name":"\u7edd\u8272\u6301\u4e45\u5507\u818f\u7ed2\u60c5\u54d1\u5149","lipsticks":[{"id":"MAT5","color":"#99163A","name":""},{"id":"R45M","color":"#A22040","name":""},{"id":"R41M","color":"#C31431","name":"COLOR SENSATIONAL VIVID MATTE"},{"id":"MAT1","color":"#EC5C80","name":""},{"id":"MAT3","color":"#EC594F","name":""},{"id":"MAT5","color":"#F193AD","name":""}]}]},{"name":"\u7eaa\u68b5\u5e0c","series":[{"name":"\u9ad8\u5b9a\u9999\u69ad\u5929\u9e45\u7ed2\u5507\u818f\uff08\u5c0f\u7f8a\u76ae\uff09","lipsticks":[{"id":"N103","color":"#DF695F","name":"\u4f18\u96c5\u7c73\u8272"},{"id":"N103","color":"#C74A52","name":"\u8ff7\u4eba\u8336\u8272"},{"id":"N105","color":"#A82A40","name":"\u9633\u5149\u5c0f\u9ea6"},{"id":"N202","color":"#F43556","name":"\u5e7b\u60f3\u73ab\u7470"},{"id":"N204","color":"#BE2446","name":"\u6a31\u6843\u73ab\u7470"},{"id":"N205","color":"#E70060","name":"\u52a0\u4ed1\u73ab\u7470"},{"id":"N304","color":"#F82131","name":"\u52a0\u5dde\u7ea2"},{"id":"N306","color":"#E50036","name":"\u6cd5\u5f0f\u7ea2"},{"id":"N303","color":"#FA054B","name":"\u73ca\u745a\u7ea2"},{"id":"N302","color":"#FB2C60","name":"\u82ad\u6bd4\u7ea2"},{"id":"305","color":"#FA013D","name":"\u7f2a\u65af\u7ea2"},{"id":"201","color":"#FA6173","name":"\u7cd6\u679c\u73ab\u7470"},{"id":"209","color":"#F60071","name":"\u660e\u8273\u73ab\u7470"},{"id":"210","color":"#FF4D89","name":"\u5927\u4e3d\u73ab\u7470"},{"id":"315","color":"#AC003A","name":"\u8986\u76c6\u5b50\u7ea2"},{"id":"317","color":"#E03B35","name":"\u6696\u67ff\u7ea2"},{"id":"307","color":"#93142F","name":"\u77f3\u69b4\u7ea2"},{"id":"301","color":"#DF3751","name":"\u897f\u74dc\u7ea2"},{"id":"214","color":"#BB3C5A","name":"\u590d\u53e4\u73ab\u7470"},{"id":"323","color":"#C53057","name":"\u9ad8\u96c5\u6885"},{"id":"326","color":"#932844","name":"\u52c3\u826e\u7b2c\u7ea2"},{"id":"327","color":"#9B325A","name":"\u8393\u7d2b\u7ea2"},{"id":"324","color":"#EE4650","name":"\u79c0\u573a\u7ea2"},{"id":"325","color":"#E11020","name":"\u5723\u6c34\u7ea2"},{"id":"215","color":"#844452","name":"\u6a61\u76ae\u88f8\u808c"},{"id":"329","color":"#731919","name":"\u7ea2\u8272\u9ad8\u8ddf\u978b"},{"id":"330","color":"#64263F","name":"\u590d\u53e4\u63d0\u7434"},{"id":"331","color":"#58151E","name":"\u8d64\u971e\u73e0"}]},{"name":"\u7981\u5fcc\u4e4b\u543b\u9713\u8679\u5507\u818f","lipsticks":[{"id":"11","color":"#BA353C","name":"\u5fa1\u59d0\u6a58"},{"id":"7","color":"#8B2844","name":"\u5e7b\u60f3\u7d2b"},{"id":"8","color":"#B12252","name":"\u6697\u591c\u8393"},{"id":"9","color":"#DD485B","name":"\u6c89\u7761\u7ea2"},{"id":"10","color":"#B53D52","name":"\u5e05T\u7ea2"},{"id":"12","color":"#B9282D","name":"\u5973\u5deb\u7ea2"},{"id":"13","color":"#CA292E","name":"\u7981\u5fcc\u7ea2"},{"id":"14","color":"#CB2D21","name":"\u9b3c\u9b45\u7ea2"},{"id":"15","color":"#D43A29","name":"\u591c\u5149\u6a58"},{"id":"16","color":"#DF4541","name":"\u6f6e\u5973\u7ea2"},{"id":"18","color":"#D35C5E","name":"\u7ae5\u8bdd\u7c89"},{"id":"22","color":"#EC2663","name":"\u7cbe\u7075\u7c89"},{"id":"23","color":"#C62E54","name":"\u9b54\u5973\u7c89"},{"id":"24","color":"#AA2260","name":"\u50b2\u5a07\u7c89"},{"id":"17","color":"#DD5852","name":"\u4e59\u5973\u7c89"},{"id":"19","color":"#E36476","name":"\u6cbb\u6108\u7c89"},{"id":"20","color":"#EC6284","name":"\u841d\u8389\u7c89"},{"id":"21","color":"#EA586F","name":"\u5143\u6c14\u7c89"}]}]}]}')}},[[19,1,2]]]);
//# sourceMappingURL=main.88895f7c.chunk.js.map