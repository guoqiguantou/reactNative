import React from "react";
import {View, Text, StyleSheet,TextInput,Alert} from 'react-native';
import CXIcon from "react-native-vector-icons/CXIcon";

export default class NavigationBarSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone:null
        };
    }
    clearPhone=()=>{
        Alert.alert('1111')
        this.setState({
            phone:null,
        })
    }
    render() {
        return (
            <View style={styles.navigationBar}>
                <View style={styles.barleft}>
                    <CXIcon name="wode" size={17} color='#fff' style={{lineHeight:44}}></CXIcon>
                </View>
                <View style={styles.barcenter}>
                    <View style={styles.inputwarp}>
                        <CXIcon name="pinglun" size={15} color='#ffffff' style={{lineHeight:24}}></CXIcon>
                        <TextInput
                            style={styles.input}
                            onChangeText={(phone)=>this.setState({phone})}
                            value={this.state.phone}
                            placeholder={'搜索'}
                            placeholderTextColor={'#fff'}
                        />
                        {
                            this.state.phone&&
                            <View style={styles.remove} >
                                <CXIcon name="X" size={15} color='#fff' style={{lineHeight:24}} onPress={this.clearPhone}></CXIcon>
                            </View>
                        }
                    </View>
                </View>
                <View style={styles.barright}>
                    <CXIcon name="xiaoxi1" size={17} color='#fff' style={{lineHeight:44}}></CXIcon>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    navigationBar: {
        height: 44,
        backgroundColor: "#f10000",
        flexDirection:'row',
        paddingHorizontal:10,
        justifyContent:'space-between'
    },
    barleft:{
        lineHeight:44,
    },
    barcenter:{
        flex:1,
        paddingHorizontal:40,
        paddingVertical:10,
    },
    inputwarp:{
        height: 24,
        borderRadius: 12,
        backgroundColor: "rgba(255,255,255,0.5)",
        paddingHorizontal:10,
        flexDirection:'row',
    },
    input:{
        paddingVertical:0,
        paddingHorizontal:10,
        fontSize: 12,
        lineHeight: 24,
        color: "#ffffff",
        flex:1,
        width:'100%'
    },
    remove:{
        width: 15,
        height: 24,
    },
    barright:{

    }

});