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
}

export default Snowflake;
