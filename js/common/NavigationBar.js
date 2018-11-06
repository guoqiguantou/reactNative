import React from 'react';
import {View, Text, Image, StyleSheet,Platform,StatusBar} from 'react-native';
import PropTypes from 'prop-types';

const NAV_BAR_HEIGHT_ANDROID=50;
const NAV_BAR_HEIGHT_IOS=44;
const STATUS_BAR_HEIGHT=20;
const STATEBAR_SHAPE={
    backgroundColor:PropTypes.string,
    barStyle:PropTypes.oneOf('default', 'light-content', 'dark-content'),
    hidden:PropTypes.bool
}

export default class NavigationBar extends React.Component {
    static propTypes={
        // style:View.propTypes.style,
        //titlestyle:Text.propTypes.style,
        title:PropTypes.string,
        titleView:PropTypes.element,
        hide:PropTypes.bool,
        leftButton:PropTypes.element,
        rightButton:PropTypes.element,
        stateBar:PropTypes.shape(STATEBAR_SHAPE)

    }
    static defaultProps={
        stateBar:{
            barStyle:'light-content',
            hidden:false,
        }

    }
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            hide:false,
        };
    }

    componentDidMount() {

    }


    render() {
        let statusBar=<View style={[styles.statusBar,this.props.stateBar]}><StatusBar {...this.props.stateBar}/></View>;
        let titleView=this.props.titleView?this.props.titleView:<Text style={[styles.title,this.props.titlestyle]}>{this.props.title}</Text>
        let content = <View style={styles.navbar}>
            {this.props.leftButton}
            <View style={styles.navbartitlecon}>
            {titleView}
            </View>
            {this.props.rightButton}
        </View>
        return (
            <View style={[styles.header,this.props.style]}>
                {statusBar}
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width:'100%'
    },
    navbar:{
        justifyContent:'space-between',
        height:Platform.OS==='ios'?NAV_BAR_HEIGHT_IOS:NAV_BAR_HEIGHT_ANDROID,
        flexDirection:'row',
        alignItems:'center',
    },
    navbartitlecon:{
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        left:40,
        right:40,
        top:0,
        bottom:0,
    },
    title:{
        fontSize: 18,
        color:'#fff'
    },
    statusBar:{
        height:Platform.OS==='ios'?STATUS_BAR_HEIGHT:0,
    }


});