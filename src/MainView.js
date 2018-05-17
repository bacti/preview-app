import React from 'react'
import { WebView } from 'react-native'  

export default class MainView extends React.Component
{
    render()
    {
        return (
            <WebView
                source={{ uri: this.props.uri }}
                mediaPlaybackRequiresUserAction={false}
                allowsInlineMediaPlayback={true}
            />
        )
    }
}
