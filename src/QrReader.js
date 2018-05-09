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
        this.state =
        {
            width: 0,
            height: 0,
        }
    }

    onSuccess(e)
    {
        this.props.navigator.push(
        {
            screen: 'webapp.MainView',
            navigatorStyle:
            {
                navBarHidden: true,
            },
            passProps: { uri: e.data }, 
        })
    }

    onLayout(e)
    {
        const { width, height } = Dimensions.get('window')
        this.setState(
        {
            width: width,
            height: height,
        })
    }

    render()
    {
        return (
            <View
                onLayout={this.onLayout.bind(this)}
                style={styles.container}
            >
                <QRCodeScanner
                    onRead={this.onSuccess.bind(this)}
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
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
})        
