import React from 'react'
import Orientation from 'react-native-orientation'
import { WebView } from 'react-native'  

export default class MainView extends React.Component
{
    componentWillMount()
    {
        Orientation.lockToLandscape()
    }

    render()
    {
        return (
            <WebView
                source={{ uri: this.props.uri }}
                scrollEnabled={false}
                mediaPlaybackRequiresUserAction={false}
                allowsInlineMediaPlayback={true}
            />
        )
    }
}
