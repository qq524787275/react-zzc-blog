import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {EditorState, convertToRaw, ContentState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

import HeaderCard from "components/Cards/HeaderCard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';

import ActionMesage from "action/ActionMessage"

import {CircularProgress} from 'material-ui/Progress';


const styles = {
    root: {},
    editor: {
        height: 250,
        border: "1px solid #efefef",
    },
    wrapper: {}
};

class ArticlePulish extends Component {

    a = ActionMesage.getInstance();

    state = {
        editorState: EditorState.createEmpty(),
        isSubmitting: false,
    };

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState: editorState
        }, () => {
            console.log(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
        });
    }

    submit = () => {
        this.setState({
            isSubmitting: true,
        })

        this.a.showMessage("123");
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                <GridContainer justify={"center"}>
                    <ItemGrid xs={10}>
                        <HeaderCard
                            cardTitle={"填写文章信息"}
                            headerColor={"rose"}
                            content={
                                <GridContainer>
                                    <ItemGrid xs={12} style={{marginBottom: 20}}>
                                        <CustomInput
                                            labelText={"标题"}
                                            formControlProps={
                                                {
                                                    fullWidth: true,
                                                }
                                            }
                                        >
                                        </CustomInput>
                                    </ItemGrid>
                                    <ItemGrid xs={12}>
                                        <Editor
                                            localization={{locale: 'zh'}}
                                            initialEditorState={this.state.editorState}
                                            wrapperClassName={classes.wrapper}
                                            editorClassName={classes.editor}
                                            onEditorStateChange={this.onEditorStateChange}
                                        />
                                    </ItemGrid>
                                    <GridContainer justify={"center"}>
                                        <ItemGrid>
                                            {
                                                this.state.isSubmitting
                                                    ? <CircularProgress color={"secondary"}
                                                                        style={{marginTop: 15}}></CircularProgress>
                                                    : <Button color={"rose"} onClick={this.submit}>提交</Button>
                                            }
                                        </ItemGrid>
                                    </GridContainer>
                                </GridContainer>
                            }>
                        </HeaderCard>
                    </ItemGrid>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(styles)(ArticlePulish);
