import React, { PureComponent } from 'react';

export default class HlsVideoPlayer extends PureComponent {

    render() {
        return (
            <video autoPlay style={{ width: '100%',height:320}}>
                <source src={`http://zhuzichu.com/hls/123.m3u8`}/>
            </video>
        )
    }
}
