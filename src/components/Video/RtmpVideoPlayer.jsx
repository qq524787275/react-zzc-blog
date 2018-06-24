import React, { PureComponent } from 'react';
import swfobject from 'swfobject';
import player from './../../assets/swf/player.swf';

const ID = 'rtmp-player';

export default class RtmpVideoPlayer extends PureComponent {

    componentDidMount() {
        const soFlashVars = {
            src: `rtmp://zhuzichu.com:8011/hls/123`,
            streamType: 'live',
            autoPlay: "true",
            controlBarAutoHide: "true",
            controlBarPosition: "bottom"
        };
        const swfVersionStr = "10.3.0";
        const xiSwfUrlStr = "playerProductInstall.swf";
        const params = {
            quality: 'high',
            allowscriptaccess: 'sameDomain',
        };
        swfobject.embedSWF(player, ID, "100%", "320", swfVersionStr, xiSwfUrlStr, soFlashVars, params);
    }

    componentWillUnmount() {
        swfobject.removeSWF(ID);
    }

    render() {
        return (
            <div>
                <div id={ID}/>
            </div>
        )
    }
}
