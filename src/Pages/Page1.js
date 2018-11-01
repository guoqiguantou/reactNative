import React from "react";
import {View, Text,TouchableHighlight} from 'react-native';


export default class Page1 extends React.Component {
    render() {
        const {navigation} = this.props;
        return <View style={{flex: 1, backgroundColor: "#ccc",}}>
            <Text>欢迎来到Page1</Text>

            <TouchableHighlight onPress={() => {
                navigation.goBack();
            }}>
                <Text>按钮</Text>
            </TouchableHighlight>


        </View>
    }
}