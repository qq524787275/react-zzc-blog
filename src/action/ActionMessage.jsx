import {action, observable} from "mobx";

export default class ActionMessage{
    @observable
    data = {
        msg: "一剑",
        isShow:false,
        color:"info"
    }
    @action
    showMessage=(msg,color)=>{
        this.data.color="info"
        if(color!==null){
            this.data.color=color
        }
        if(!this.data.isShow){
            this.data.isShow= true;
            setTimeout(
                function() {
                    this.data.isShow = false;
                }.bind(this),
                1000
            );
        }
        this.data={
            ...this.data,
            msg:msg,
        }
    }

    @action
    hideMessgae=()=>{
        this.data={
            ...this.data,
            isShow:false,
        }
    }

    static getInstance() {
        if(!this.instance) {
            this.instance = new ActionMessage();
        }
        return this.instance;
    }
}