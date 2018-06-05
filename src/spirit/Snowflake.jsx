const arr = ['❄', '❉', '❅', '❆', '✻', '✼', '❇', '❈', '❊', '✥', '✺'];
class Snowflake {
    constructor() {
        this._type = arr[Math.floor((Math.random()*arr.length))];
        this._size=Math.floor((Math.random()*10+20));

    }

    draw(cxt){
        cxt.font="bold "+this.size+"px Arial";
        console.debug(cxt.font);
        cxt.fillStyle="#fff";
        cxt.fillText(this.type,100,20);
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
}

export default Snowflake;
