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
        Linking
            .openURL(e.data)
            .catch(err => console.error('An error occured', err))        
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
    camera:
    {
        height: Dimensions.get('window').height
    },
})        
