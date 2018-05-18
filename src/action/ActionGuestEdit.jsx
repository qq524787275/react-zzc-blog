import {action, observable} from "mobx";

export default class ActionGuestEdit{
    @observable
    state = {
        show:false,
    }

    @action
    alert=()=>{
        this.state={
            ...this.state,
            show:true,
        }
    }

    static getInstance() {
        if(!this.instance) {
            this.instance = new ActionGuestEdit();
        }
        return this.instance;
    }
}