import React from "react";
import {View, Text, StyleSheet,Image} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Swiperwarp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Image source={require("../../../res/img/banner1.jpg")} style={{width:'100%',height:'100%'}}/>
                </View>
                <View style={styles.slide2}>
                    <Image source={require("../../../res/img/banner2.jpg")}  style={{width:'100%',height:'100%'}}/>
                </View>
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }


});