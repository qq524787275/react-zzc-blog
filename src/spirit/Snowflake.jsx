import Color from "color";
const arr = ['❄', '❉', '❅', '❆', '✻', '✼', '❇', '❈', '❊', '✥', '✺'];
class Snowflake {
    constructor() {
        this._type = arr[Math.floor((Math.random()*arr.length))];
        this._size=Math.floor((Math.random()*30+10));
        this._y=20;
        this._x=Math.floor((Math.random()*window.innerWidth));
        this._speed=Math.random()*5+1;
        this._alpha=1;
        this.move();
    }

    move=()=> {
      this.interval=setInterval(()=>{
            this._y=this.y+2*this.speed;
        },16)
    }

    die=(completed)=>{
        let interval=setInterval(()=>{
            this._alpha=this.alpha-0.01;
            if(this._alpha<0){
                clearInterval(interval);
                clearInterval(this.interval);
                completed&&completed();
            }
        },16)
    }

    draw(ctx){
        ctx.save();
        ctx.font="bold "+this.size+"px Arial";
        ctx.fillStyle=Color.rgb(255, 255, 255).alpha(this.alpha);
        ctx.fillText(this.type,this.x,this.y);
        ctx.restore();
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get alpha() {
        return this._alpha;
    }

    set alpha(value) {
        this._alpha = value;
    }
    // drawCanvas = canvas => {
    //     console.debug(Color.rgb(255, 255, 255).alpha(0.5))
    //     if (!canvas) {
    //         return
    //     }
    //     console.debug(canvas);
    //     canvas.width = window.innerWidth;
    //     canvas.height = 1500;
    //     let ctx = canvas.getContext("2d");
    //     //雪花数组
    //     let arrSnow = [];
    //     //快要死的雪花数组
    //     let arrDieSnow = [];
    //     //下雪规则
    //     var rule = 0.05;
    //
    //
    //     let intval = setInterval(() => {
    //         ctx.clearRect(0, 0, canvas.width, canvas.height);
    //         if (Math.random() < rule) {
    //             let snowflake = new Snowflake();
    //             snowflake.dieListener = function () {
    //                 console.debug("死了一条雪花");
    //             }
    //             arrSnow.push(snowflake);
    //         }
    //         //画活雪花
    //         arrSnow.forEach((item, index) => {
    //             item.draw(ctx);
    //         })
    //
    //         //画快要死的雪花
    //         arrDieSnow.forEach((item, index) => {
    //             item.draw(ctx);
    //         })
    //
    //         arrSnow.forEach((item, index) => {
    //             if (item.y > 500) {
    //                 arrSnow.splice(index, 1);//
    //                 arrDieSnow.push(item);
    //                 item.die();
    //             }
    //         })
    //
    //         //优化 清除出界的死雪花
    //         arrDieSnow.forEach((item, index) => {
    //             if (item.y > 1500) {
    //                 arrDieSnow.splice(index, 1);//
    //             }
    //         })
    //     }, 16);
    // }
}

export default Snowflake;
