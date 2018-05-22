import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Banner from "react-slick";

import indexStyle from "assets/jss/material-dashboard-pro-react/pages/indexStyle.jsx";

import Favorite from "@material-ui/icons/Favorite";
import Receipt from "@material-ui/icons/Receipt";

import image1 from "assets/img/card-1.jpeg";
import image2 from "assets/img/card-2.jpeg";
import image3 from "assets/img/card-3.jpeg";
import ItemGrid from "components/Grid/ItemGrid";
import GridContainer from "components/Grid/GridContainer";

import IconCard from "components/Cards/IconCard";

class Index extends Component {
    state = {};

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

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
        return (
            <div className={classes.content}>
                <div >
                    <GridContainer spacing={40}>
                        <ItemGrid xs={12} sm={12} md={1}/>
                        <ItemGrid xs={12} sm={12} md={6}  className={classes.article}>
                            <IconCard
                                icon={Receipt}
                                title={"文章推荐"}
                                iconColor={"orange"}
                                content={
                                    <Banner {...settings}>
                                        <div>
                                            <img
                                                src={image1}
                                                alt="First slide"
                                                className="slick-image"
                                            />
                                            <div className="slick-caption">
                                                <h4>
                                                    <Favorite className="slick-icons"/>Yellowstone
                                                    National Park, United States
                                                </h4>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src={image2}
                                                alt="Second slide"
                                                className="slick-image"
                                            />
                                            <div className="slick-caption">
                                                <h4>
                                                    <Favorite className="slick-icons"/>Somewhere Beyond,
                                                    United States
                                                </h4>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src={image3}
                                                alt="Third slide"
                                                className="slick-image"
                                            />
                                            <div className="slick-caption">
                                                <h4>
                                                    <Favorite className="slick-icons"/>Yellowstone
                                                    National Park, United States
                                                </h4>
                                            </div>
                                        </div>
                                    </Banner>
                                }
                            />
                        </ItemGrid>
                        <ItemGrid xs={12} sm={12} md={4}  className={classes.hot}>
                            <IconCard
                                icon={Favorite}
                                iconColor="rose"
                                title={"热门推荐"}
                                content={
                                    <Banner {...settings}>
                                        <div>
                                            <img
                                                src={image1}
                                                alt="First slide"
                                                className="slick-image"
                                            />
                                            <div className="slick-caption">
                                                <h4>
                                                    <Favorite className="slick-icons"/>Yellowstone
                                                    National Park, United States
                                                </h4>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src={image2}
                                                alt="Second slide"
                                                className="slick-image"
                                            />
                                            <div className="slick-caption">
                                                <h4>
                                                    <Favorite className="slick-icons"/>Somewhere Beyond,
                                                    United States
                                                </h4>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src={image3}
                                                alt="Third slide"
                                                className="slick-image"
                                            />
                                            <div className="slick-caption">
                                                <h4>
                                                    <Favorite className="slick-icons"/>Yellowstone
                                                    National Park, United States
                                                </h4>
                                            </div>
                                        </div>
                                    </Banner>
                                }
                            />
                        </ItemGrid>
                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(indexStyle)(Index);
