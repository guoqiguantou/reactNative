import React from 'react';
import {View, Text, Image, StyleSheet, Animated} from 'react-native';

export default class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
            translateValue: new Animated.Value(-25),
            text:null
        };
    }

    componentDidMount() {
        this.props.onRef(this);
    }
    init = (text) => {
        this.setState({
            text:text
        })
        this.show();
        setTimeout(() => {
            this.hide();
        }, 2000)
    }
    show = () => {
        Animated.parallel([
            Animated.timing(
                this.state.fadeAnim,
                {
                    duration: 1000,
                    toValue: 1
                }
            ).start(),
            Animated.timing(
                this.state.translateValue,
                {
                    duration: 500,
                    toValue: 0
                }
            ).start()

        ])


    }
    hide = () => {

        Animated.parallel([
            Animated.timing(
                this.state.fadeAnim,
                {
                    duration: 1000,
                    toValue: 0
                }
            ).start(),
            Animated.timing(
                this.state.translateValue,
                {
                    duration: 500,
                    toValue: -25
                }
            ).start()

        ])


    }

    render() {
        let {text}=this.state;
        return (
            <View style={styles.warpcon}>
                <Animated.View style={{
                    opacity: this.state.fadeAnim,
                    transform: [
                        {translateY: this.state.translateValue}, // x轴移动
                    ],
                    color: '#333',
                    height: 25,
                    backgroundColor: '#ED3F14',
                    alignItems: 'center',
                }}>
                    <Text style={styles.context}>{text}</Text>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    warpcon: {
        // height:25,
        width: '100%',
        height: 25,
        overflow: 'hidden',
        position:'absolute',
        left:0,
        top:0,
    },
    con: {
        height: 25,
        backgroundColor: '#ED3F14',
        alignItems: 'center',

    },
    context: {
        lineHeight: 25,
        color: '#fff'
    }

});