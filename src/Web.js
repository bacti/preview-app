import React from 'react'

export default class Web extends React.Component
{
    render()
    {
        return (
            <WebView
                source={{uri: this.props.uri}}
            />
        )
    }
}
