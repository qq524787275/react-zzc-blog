import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';

import projectStyle from "assets/jss/material-dashboard-pro-react/pages/projectStyle.jsx";
import ItemGrid from "components/Grid/ItemGrid";
import GridContainer from "components/Grid/GridContainer";
import ImagePriceCard from "components/Cards/ImagePriceCard.jsx";
// @material-ui/icons
import Favorite from "@material-ui/icons/RemoveRedEye";

import {projectList} from "../../http/okgo";

import {Fade} from 'material-ui/transitions';

class Project extends Component {
    state = {
        data: null,
        height: window.innerHeight,
    };

    componentWillMount() {

    }

    componentDidMount() {
        this.loadProjectData(1, 10);
    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
    }

    loadProjectData = async (page, size) => {
        try {
            let response = await projectList(page, size);
            if (response.status === 1) {
                this.setState({data: response.result});
            }
        } catch (e) {
            console.debug(e);
        }
    }

    onImageClick = (link) => {
        console.debug(link);
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.content}>
                <div className={classes.container}>
                    <GridContainer>
                        {
                            this.state.data !== null ?
                                this.state.data.list.map(function (item, key) {
                                    console.debug(item);
                                    return (
                                        <Fade key={key} style={{transitionDelay: key * 100}} in={true}
                                              timeout={{enter: 1000, exit: 500}}>
                                            <ItemGrid xs={12} sm={12} md={3}>
                                                <ImagePriceCard
                                                    image={item.image}
                                                    title={item.title}
                                                    text={item.description}
                                                    price={item.cycle}
                                                    statIcon={Favorite}
                                                    statText={item.num}
                                                    hover
                                                    onImageClick={function () {
                                                        window.open(item.link);
                                                    }}
                                                />
                                            </ItemGrid>
                                        </Fade>
                                    )
                                })
                                : console.debug("数据为空")
                        }
                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(projectStyle)(Project);
