import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import 'wangeditor/release/wangEditor.css'
import indexStyle from "assets/jss/material-dashboard-pro-react/pages/indexStyle.jsx";
// @material-ui/icons
import AddLocation from "@material-ui/icons/AddLocation";
import ItemGrid from "components/Grid/ItemGrid";
import GridContainer from "components/Grid/GridContainer";
// core components
import IconCard from "components/Cards/IconCard.jsx";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import OnToastEvent from "../../action/OnToastEvent";
import RxBus from "../../uitls/RxBus";
import HlsVideoPlayer from "../../components/Video/HlsVideoPlayer";
import RtmpVideoPlayer from "../../components/Video/RtmpVideoPlayer";

const RegularMap = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={8}
            center={props.location}
            defaultOptions={{
                scrollwheel: true
            }}
        >
            <Marker position={props.location}/>
        </GoogleMap>
    ))
);


class Index extends React.PureComponent {
    state = {
        location: {lat: 39.90923, lng: 116.397428}
    };

    componentWillMount() {

    }

    componentDidMount() {
        this.initWebSocket();
        window.isPageReady = 1

    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        this.websocket.close();
    }

    initWebSocket = () => {
        this.websocket = null;
        if ('WebSocket' in window) {
            this.websocket = new WebSocket("wss://zhuzichu.com/websocket");
        } else {
            alert("不支持websocket");
            return;
        }
        //连接发生错误的回调方法
        this.websocket.onerror = () => {
            console.debug("websocket发生错误");
        };
        this.websocket.onclose = () => {
            console.debug("websocket关闭连接");
        }
        this.websocket.onopen = () => {
            console.debug("websocket建立连接成功!")
        }
        //Object { mLatitude: 30.314651, mLongitude: 120.084928 }
        this.websocket.onmessage = (event) => {
            RxBus.getInstance().post(new OnToastEvent(event.data, "success"));
            try {
                let a = JSON.parse(event.data.toString());
                console.debug(a);
                this.setState({
                    ...this.state,
                    location: {
                        lat: a.mLatitude, lng: a.mLongitude
                    }
                })
            } catch (e) {

            }
            // console.debug())

        }
    }

    onToggleOpen = () => {
        console.debug("点击了");
    }


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.content}>
                <GridContainer style={{marginTop: 100}}>
                    <ItemGrid xs={12} sm={12} md={4}>
                        <IconCard
                            title="RTMP直播"
                            category={"flashovject播放rtmp"}
                            iconColor="rose"
                            icon={AddLocation}
                            content={
                                <div>
                                    <RtmpVideoPlayer></RtmpVideoPlayer>
                                </div>
                            }
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                        <IconCard
                            title="HLS直播"
                            category={"原生video播放m3u8"}
                            iconColor="rose"
                            icon={AddLocation}
                            content={
                                <div>
                                    <HlsVideoPlayer></HlsVideoPlayer>
                                </div>
                            }
                        />
                    </ItemGrid>

                    <ItemGrid xs={12} sm={12} md={4}>
                        <IconCard
                            title="HTTP-FLV直播"
                            category={"flv.js播放flv"}
                            iconColor="rose"
                            icon={AddLocation}
                            content={
                                    <div  style={{width:"100%",height:320}}
                                           />
                            }
                        />
                    </ItemGrid>


                    <ItemGrid xs={12} sm={12} md={4}>
                        <IconCard
                            title="我手机位置"
                            iconColor="rose"
                            icon={AddLocation}
                            content={
                                <RegularMap
                                    googleMapURL="http://ditu.google.cn/maps/api/js?v=3&key=AIzaSyC-K4_Tfnb-scqpM-wBa5MOPYXybTYjkYs&sensor=false"
                                    loadingElement={<div style={{height: `100%`}}/>}
                                    location={this.state.location}
                                    containerElement={<div
                                        style={{height: "50vh", borderRadius: "6px", overflow: "hidden"}}/>}
                                    mapElement={<div style={{height: `100%`}}/>}
                                />
                            }
                        />
                    </ItemGrid>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(indexStyle)(Index);
/*
<Player style={{width:640,height:320}}>
    <source  src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"/>
/Player>
 */