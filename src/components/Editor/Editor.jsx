import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import editorStyle from "assets/jss/material-dashboard-pro-react/components/editorStyle";
import axios from 'axios';
import E from "wangeditor";
import {
    uploadUrl
} from 'http/env'
import RxBus from "../../uitls/RxBus";
import OnToastEvent from "../../action/OnToastEvent";
class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorContent: '<p>asd<br></p>'
        };
    }



    componentWillMount() {

    }

    componentDidMount() {
        const elem = this.refs.editorElem
        const toolElem=this.refs.toolElem
        const editor = new E(toolElem,elem)
        editor.customConfig.uploadImgShowBase64 = false
        editor.customConfig.uploadImgMaxLength = 1
        editor.customConfig.customAlert = function (info) {
            RxBus.getInstance().post(new OnToastEvent(info,"danger"));
        }
        editor.customConfig.customUploadImg = async (files, insert)=> {
            let file=files[0];
            let param = new FormData();
            param.append('file',file,file.name);//通过append向form对象添加数据
            let config = {
                headers:{'Content-Type':'multipart/form-data'}
            };  //添加请求头

            let response=await axios.post(uploadUrl,param,config);
            insert(response.data.result);
        }

        editor.customConfig.onchange = html => {
            this.setState({
                editorContent: html
            })
            this.props.onChange(this.state.editorContent)
        }
        editor.create()
        editor.txt.html(this.props.init)
    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                {/* 将生成编辑器 */}
                <div ref={"toolElem"} style={{border:"1px solid #ccc",backgroundColor:"#fff",flexWrap:"wrap"}}></div>
                <div ref="editorElem" style={{textAlign: 'left',border:"1px solid #ccc",height:400,backgroundColor:"#fff"}} >
                </div>
            </div>
        );
    }
}

export default withStyles(editorStyle)(Editor);
