import React from 'react'
import {
    Dimensions,
    StyleSheet,
    View,
} from 'react-native'        
import QRCodeScanner from 'react-native-qrcode-scanner'        

export default class QrReader extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = { width: 0, height: 0 }
    }

    OnRead(info)
    {
        this.props.navigator.push(
        {
            screen: 'webapp.MainView',
            navigatorStyle: { navBarHidden: true },
            passProps: { uri: info.data }, 
        })
    }

    OnLayout()
    {
        const { width, height } = Dimensions.get('window')
        this.setState({ width: width, height: height })
    }

    render()
    {
        return (
            <View onLayout={this.OnLayout.bind(this)}>
                <QRCodeScanner
                    onRead={this.OnRead.bind(this)}
                    cameraStyle={
                    {
                        width: this.state.width,
                        height: this.state.height,
                    }}
                />
            </View>
        )        
    }
}

const styles = StyleSheet.create(
{
})        
