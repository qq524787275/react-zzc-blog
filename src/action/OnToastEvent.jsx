
export default class OnToastEvent{
    constructor(msg,color) {
        this.msg=!msg?"msg":msg;
        this.color=!color?"info":color;
    }
}