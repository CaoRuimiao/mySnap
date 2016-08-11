//Element.after(el)
var svg1 = Snap("#svg1");
var c1 = svg1.paper.circle(50, 50, 40).attr({
    fill: "#f00"	// 红色
});
var c2 = svg1.paper.circle(100, 50, 40).attr({
    fill: "#00f"	// 蓝色
});
// 事件
document.querySelector("#button1").addEventListener("click", function() {
    c2.after(c1);
});

//Element.animate(attrs, duration, [easing], [callback])
var svg2=Snap("#svg2");
var c3=svg2.paper.circle(50,50,40).attr({
    fill:"#f00"
});
$("#button2").click(function(){
    c3.animate({fill:"#00f"},2000, mina.bounce, function() {
        $("#button2").val("变成蓝色妖姬了~");
    });
});

//Element.append(el)
var svg3=Snap("#svg3");
var svg4=Snap("#svg4");
var c4=svg3.paper.circle(50,50,40).attr({
    fill:"purple"
});
var c5=svg4.paper.circle(50,50,30).attr({
    fill:"yellow"
});
$("#button3").click(function(){
    svg3.append(c5);
    $(this).val("蹭板成功");
});


//Element.asPX(attr, [value])
var svg5=Snap("#svg5");
var c6=svg5.paper.circle(50,50,40).attr({
    fill:"pink"
});
$("#div1").html("圆的cx为"+c6.asPX("cx")+"px");

//Element.attr(...)
var svg6=Snap("#svg6");
var r1=svg6.paper.rect(10,10,100,60).attr({
    width:"100",
    height:"60",
    fill:"yellow",
    stroke:"purple",
    storkeWidth:"5",   //驼峰命名
    "fill-opacity":".6"    //或者短横符连接名称
});
$("#div2").html("矩形的宽为"+r1.attr("width")+"px,<br>矩形的高为"+r1.attr("height")+"px,");

//Element.before(el)
var svg7=Snap("#svg7");
var c7=svg7.paper.circle(50,50,40).attr({
    fill:"purple"
});
var c8=svg7.paper.circle(100,50,40).attr({
    fill:"yellow"
});
$("#button4").click(function(){
    c7.before(c8);
});

//Element.click(handler)
var svg8=Snap("#svg8");
var c9=svg8.paper.circle(50,50,40).attr({
    fill:"pink",
    cursor:"pointer"
}).click(function(){
    this.animate({fill:"red"},1000);
});

//Element.clone()
var svg9=Snap("#svg9");
var c10=svg9.paper.circle(50,50,40).attr({
    fill:"green",
    cursor:"pointer",
}).click(function(){
    this.clone().attr({cx:150});
});


//Element.data(key, [value])
var svg10=Snap("#svg10");
var e1=svg10.paper.ellipse(100,60,80,30).attr({
    fill:"orange",
    cursor:"pointer"
}).data("author","CaoRuimiao").click(function(){
    $("#div3").html("作者是"+this.data("author"));
});

//Element.dblclick(handler)
var svg11=Snap("#svg11");
var star1=svg11.paper.polygon(100,10,40,180,190,60,10,60,160,180).attr({
    fill:"purple",
    stroke:"yellow",
    strokeWidth:"3",
    cursor:"pointer"
}).dblclick(function(){
    this.animate({fill:"yellow",stroke:"purple"},600);
});

//Element.drag(onmove, onstart, onend, [mcontext], [scontext], [econtext])
var svg12=Snap("#svg12");
var c11=svg12.paper.circle(50,50,40).attr({
    fill:"red",
    cursor:"pointer"
}).drag();

//Element.getBBox()
var svg13=Snap("#svg13");
var c12=svg13.paper.rect(10,10,160,80).attr({
    fill:"red",
    stroke:"#000",
    strokeWidth:"3"
});
var obj=c12.getBBox();
var str=JSON.stringify(obj);
console.log("Element.getBBox()："+obj);
$("#div4").html("c12的边界框描述："+str+"<br>可以在控制台查看！");

//Element.getPointAtLength(length)
var svg14=Snap("#svg14");
var p1=svg14.paper.path("M10 10L100 60").attr({
    stroke:"black",
    strokeWidth:"3"
});
var obj1=p1.getPointAtLength(20);
var str1=JSON.stringify(obj1);
console.log("Element.getPointAtLength(length)："+obj1);
$("#div5").html("p1给定路径上给定长度的点的坐标："+str1+"<br>可以在控制台查看！");

//Element.getSubpath(from, to)
var svg15=Snap("#svg15");
var p2=svg15.paper.path("M10 10L100 60").attr({
    stroke:"black",
    strokeWidth:"3"
});
var obj2=p2.getSubpath(10,20);
var str2=JSON.stringify(obj2);
console.log("Element.getSubpath(from, to)："+obj2);
$("#div6").html("p2指定起始结束长度上的子路径："+str2+"<br>可以在控制台查看！");

//Element.getTotalLength()

var svg16=Snap("#svg16");
var p3=svg16.paper.path("M10 10L100 60").attr({
    stroke:"black",
    strokeWidth:"3"
});
$("#div7").html("路径的长度："+p3.getTotalLength());

//Element.hover(f_in, f_out, [icontext], [ocontext])
var svg17=Snap("#svg17");
var c13=svg17.paper.circle(50,50,40).attr({
    fill:"red",
    cursor:"pointer"
}).hover(function(){
    this.animate({
        fill:"blue"
    },1000)
},function(){
    this.animate({
        fill:"yellow"
    },1000)
});

//Element.inAnim()
//返回可能操作当前元素的一组动画
var svg18=Snap("#svg18");
var c14=svg18.paper.circle(50,50,40).attr({
    fill:"red",
    cursor:"pointer"
}).click(function(){
    this.animate({
        fill: "#" + (Math.random() + "").slice(-3)    // 随机
    },1000)/*;
    setTimeout(function(){
        console.dir(c14.inAnim());
    },500)*/
});


//Element.innerSVG()
//返回元素内容的SVG代码。近似于HTML中的innerHTML方法。
var svg19=Snap("#svg19");
var c15=svg19.paper.circle(50,50,40).attr({
    fill:"red"
});
console.log("Element.innerSVG()："+svg19.innerSVG());
$("#div8").html(svg19.innerSVG()+"<br>可以在控制台中查看！");

//Element.insertAfter(el)
var svg20=Snap("#svg20");
var c16=svg20.paper.circle(50,50,40).attr({
    fill:"red"
});
var c17=svg20.paper.circle(100,50,40).attr({
    fill:"blue"
});
$("#button5").click(function(){
    c16.insertAfter(c17);
});

//Element.insertBefore(el)
var svg21=Snap("#svg21");
var c18=svg21.paper.circle(50,50,40).attr({
    fill:"red"
});
var c19=svg21.paper.circle(100,60,40).attr({
    fill:"blue"
});
$("#button6").click(function(){
    c19.insertBefore(c18);
});

//Element.marker(x, y, width, height, refX, refY)
var svg22=Snap("#svg22");
// 圈圈
var c20 = svg22.paper.circle(5, 5, 3);
// 三角
var p4 = svg22.paper.path("M2,2 L2,11 L10,6 L2,2").attr({
    fill: "#000"
});
// 变身标记
var m1 = c20.marker(0, 0, 8, 8, 5, 5), m2 = p4.marker(0, 0, 13, 13, 2, 6);

// 添加一个路径
var p5 = svg22.paper.path("M10,10 L150,10 L150,90").attr({
    // 描边
    stroke: "#00f",
    strokeWidth: 1,
    fill: "none",
    // 起始标记
    markerStart: m1,
    // 结束标记
    "marker-end": m2
});



//Element.mousedown(handler)
//Element.mouseup(handler)
var svg23=Snap("#svg23");
var c21=svg23.paper.circle(50,50,40).attr({
    fill:"red",
    cursor:"pointer"
}).mousedown(function(){
    this.animate({fill:"blue"},1000)
}).mouseup(function(){
    this.animate({fill:"yellow"},1000)
});

//Element.mousemove(handler)
//Element.mouseout(handler)
var svg24=Snap("#svg24");
var c22=svg24.paper.circle(50,50,40).attr({
    fill:"red",
    cursor:"pointer"
}).mousemove(function(){
    this.animate({fill:"blue"},1000)
}).mouseout(function(){
    this.animate({fill:"yellow"},1000)
});
//Element.mouseover(handler)
var svg25=Snap("#svg25");
var c23=svg25.paper.circle(50,50,40).attr({
    fill:"red",
    cursor:"pointer"
}).mouseover(function(){
    this.animate({fill:"blue"},1000)
});

//Element.parent()
var svg26=Snap("#svg26");
var c24=svg26.paper.circle(50,50,40).attr({
    fill:"red"
}).parent().animate({stroke:"black",strokeWidth:"5"},3000);

//lement.pattern(x, y, width, height)
// 路径中的M10-5-10,15表示从点（10，-5）到点（-10，15）
var svg27=Snap("#svg27");
//var p6=svg27.paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
//    fill:"none",
//    stroke:"#beceeb",
//    strokeWidth:5
//}).pattern(0,0,10,10);
//var c25=svg27.paper.circle(80,80,60).attr({
//    fill:p6
//});

//M30-15-10,45M45,0,0,45M0-15-60,45
var p7=svg27.paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
    fill:"none",
    stroke:"yellow",
    strokeWidth:5
});
p7.pattern(0,0,10,10);
var c26=svg27.paper.circle(80,80,60).attr({
    fill:p7
});


//lement.pattern(x, y, width, height)
//路径写在页面内
var p8=Snap("#p8");
var svg28=Snap("#svg28");
p8.pattern(0,0,10,10);
var c27=svg28.paper.circle(80,80,60).attr({
    fill:p8
});




//Snap.deg(rad)
//转换弧度为角度。
console.log(Snap.deg(Math.PI));




//一些缓动函数
//mina(a, A, b, B, get, set, [easing])
var svg29=Snap("#svg29");
var c28=svg29.paper.circle(50,50,40).attr({
    fill:"red"
});
$("#button7").click(function(){
    var now = mina.time();
    var ani = mina(50, 150, now, now + 1000, mina.time, function(val) {
        c28.attr({
            cx: val
        });
    }, mina.easeout);
    console.dir(ani);
});




//mina.backin(n)
var svg30=Snap("#svg30");
var c29=svg30.paper.circle(50,50,40).attr({
    fill:"red"
});
$("#button8").click(function(){
    c29.animate({
        cx: c29.attr("cx") == 50? 150 : 50
    }, 1000, mina.backin);
});
//mina.backout(n)
var svg31=Snap("#svg31");
var c30=svg31.paper.circle(50,50,40).attr({
    fill:"red"
});
$("#button9").click(function(){
    c30.animate({
        cx: c30.attr("cx") == 50? 150 : 50
    }, 1000, mina.backout);
});


//mina.bounce(n)
var svg32=Snap("#svg32");
var c31=svg32.paper.circle(50,50,40).attr({
    fill:"red"
});
$("#button10").click(function(){
    c31.animate({
        cx: c31.attr("cx") == 50? 150 : 50
    }, 1000, mina.bounce);
});

//mina.easein(n)
var svg33=Snap("#svg33");
var c32=svg33.paper.circle(50,50,40).attr({
    fill:"red"
});
$("#button11").click(function(){
    c32.animate({
        cx: c32.attr("cx") == 50? 150 : 50
    }, 1000, mina.easein);
});
//mina.easeinout(n)
var svg34=Snap("#svg34");
var c33=svg34.paper.circle(50,50,40).attr({
    fill:"red"
});
$("#button12").click(function(){
    c33.animate({
        cx: c33.attr("cx") == 50? 150 : 50
    }, 1000, mina.easeinout);
});
//mina.easeout(n)
var svg35=Snap("#svg35");
var c34=svg35.paper.circle(50,50,40).attr({
    fill:"red"
});
$("#button13").click(function(){
    c34.animate({
        cx: c34.attr("cx") == 50? 150 : 50
    }, 1000, mina.easeout);
});
//mina.elastic(n)
var svg36=Snap("#svg36");
var c35=svg36.paper.circle(50,50,40).attr({
    fill:"red"
});
$("#button14").click(function(){
    c35.animate({
        cx: c35.attr("cx") == 50? 150 : 50
    }, 1000, mina.easeout);
});
//mina.linear(n)
var svg37=Snap("#svg37");
var c36=svg37.paper.circle(50,50,40).attr({
    fill:"red"
});
$("#button15").click(function(){
    c36.animate({
        cx: c36.attr("cx") == 50? 150 : 50
    }, 1000, mina.linear);
});

//mina.time()
var svg38=Snap("#svg38");
$("#button16").click(function(){
    $("#button16").val("在控制台中查看！");
    console.log("mina.time()："+(new Date).getTime());
});


