import React from 'react'
import { StyleSheet, WebView } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './screens'

registerScreens()

Navigation.startSingleScreenApp(
{
    screen:
    {
        screen: 'webapp.QrReader',
        title: 'QrReader',
        navigatorStyle: { navBarHidden: true },
    },
    animationType: 'slide-down',
});

export default class App extends React.Component
{
    render()
    {
        return null
        // return (
        //     <QrReader />
        //     // <WebView
        //     //     source={{uri: 'https://bacti.github.io/webvr-boilerplate/'}}
        //     // />
        // )
    }
}

const styles = StyleSheet.create(
{
})
