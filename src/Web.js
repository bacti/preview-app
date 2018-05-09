import React from 'react'
import { WebView } from 'react-native'  

export default class Web extends React.Component
{
    render()
    {
        return (
            <WebView
                source={{uri: 'https://bacti.github.io/webvr-boilerplate/'}}
            />
        )
    }
}
