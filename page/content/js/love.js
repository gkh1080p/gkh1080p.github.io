//this绑定的属性可以在整个构造函数内部都可以使用，而变量只能在函数内部使用。
function Fireworks(x, y) {//x,y鼠标的位置
    this.x = x;
    this.y = y;
    var that = this;
    //1.创建烟花。
    this.ceratefirework = function () {
        this.firework = document.createElement('div');//整个构造函数内部都可以使用
        this.firework.style.cssText = `width:5px;height:5px;background:#fff;position:absolute;left:${this.x}px;top:${document.documentElement.clientHeight}px;`;
        document.body.appendChild(this.firework);
        this.fireworkmove();
    };
    //2.烟花运动和消失
    this.fireworkmove = function () {
        buffermove(this.firework, { top: this.y }, function () {
            document.body.removeChild(that.firework);//烟花消失，碎片产生
            that.fireworkfragment();
        });
    };
    //3.创建烟花的碎片
    this.fireworkfragment = function () {
        var num = this.ranNum(30, 60);//盒子的个数
        this.perRadio = 2 * Math.PI / num;//弧度
        for (var i = 0; i < num; i++) {
            this.fragment = document.createElement('div');
            this.fragment.style.cssText = `width:5px;height:5px;background:rgb(${this.ranNum(0, 255)},${this.ranNum(0, 255)},${this.ranNum(0, 255)});position:absolute;left:${this.x}px;top:${this.y}px;`;
            document.body.appendChild(this.fragment);
            this.fireworkboom(this.fragment, i);//将当前创建的碎片传过去，方便运动和删除
        }
    }



    //x=16*Math.pow(sint,3);  //Math.sin(perRadio*i)
    //y=13Cost-5*Cos2t-2*Cos3t-Cos4t
    //4.碎片运动
    this.fireworkboom = function (obj, i) {//obj:创建的碎片
        var r = 0.1;
        obj.timer = setInterval(function () {//一个盒子运动
            r += 0.4;
            if (r >= 10) {
                clearInterval(obj.timer);
                document.body.removeChild(obj);
            }
            obj.style.left = that.x + 16 * Math.pow(Math.sin(that.perRadio * i), 3) * r + 'px';
            obj.style.top = that.y - (13 * Math.cos(that.perRadio * i) - 5 * Math.cos(2 * that.perRadio * i) - 2 * Math.cos(3 * that.perRadio * i) - Math.cos(4 * that.perRadio * i)) * r + 'px';
        }, 20);

    }

    //随机方法
    this.ranNum = function (min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    };
}


document.onclick = function (ev) {
    var ev = ev || window.event;
    new Fireworks(ev.clientX, ev.clientY).ceratefirework();
    console.log(ev.clientX,ev.clientY)
}
function random(N,M){
	return Math.floor(Math.random()*(M-N+1))+N
}
// new Fireworks(264 ,301).ceratefirework();
let time=1000
function auto_love(){
    const auto_x=random(0,540)
    const auto_y=random(0,800)
    new Fireworks(auto_x, auto_y).ceratefirework();
    time=time-80;
    console.log(time)
    if(time<0){
        clearInterval(auto_time)
    }
}

const auto_time= setInterval(auto_love,1000)


