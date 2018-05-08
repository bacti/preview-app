import React from 'react'
import { StyleSheet, WebView } from 'react-native'
import QrReader from './src/QrReader'

export default class App extends React.Component
{
    render()
    {
        return (
            // <QrReader />
            <WebView
                source={{uri: 'https://bacti.github.io/webvr-boilerplate/'}}
            />
        )
    }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
