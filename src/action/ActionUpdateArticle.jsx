import {action, observable} from "mobx";
import {getArticleDetial} from "../http/okgo";
export default class ActionUpdateArticle{

    @observable
    data = {
        id:null,
        title:"",
        content:"",
        description:"",
        visible:null,
        uid:null,
        love:null,
        date:null
    }

    @action
    showEdit(node){
        this.data={
            ...this.data,
        }
    }

    @action
    loadArticleDetail=async (item)=> {
        let response = await getArticleDetial(item.id);
        this.data = response.result
        console.debug(response.result);
    }

    @action
    handleChange=(event)=>{
        console.debug(event.target.id);
        this.data={
            ...this.data,
            [event.target.id]: event.target.value
        }
    }

    static getInstance() {
        if(!this.instance) {
            this.instance = new ActionUpdateArticle();
        }
        return this.instance;
    }
}