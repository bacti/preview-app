import React from 'react'
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
} from 'react-native'        
import QRCodeScanner from 'react-native-qrcode-scanner'        

export default class QrReader extends React.Component
{
    onSuccess(e)
    {
        this.props.navigator.push(
        {
            screen: 'webapp.MainView',
        })
    }

    render()
    {
        return (
            <QRCodeScanner
                onRead={this.onSuccess.bind(this)}
                cameraStyle={{height: Dimensions.get('window').height}}
            />
        )        
    }
}

const styles = StyleSheet.create(
{
})        
