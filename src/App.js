import React from 'react'
import { Navigation } from 'react-native-navigation'
import './Screens'

Navigation.startSingleScreenApp(
{
    screen:
    {
        screen: 'webapp.QrReader',
        navigatorStyle:
        {
            navBarHidden: true,
        },
    },
    animationType: 'slide-down',
})

export default class App extends React.Component
{
    render()
    {
        return null
    }
}
