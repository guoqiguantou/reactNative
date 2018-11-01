import React from 'react';
import { View, Text,TouchableHighlight } from 'react-native';



export default class Modal extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>This is a modal!</Text>


                <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
                    <Text>Dismiss</Text>
                </TouchableHighlight>

            </View>
        );
    }
}




