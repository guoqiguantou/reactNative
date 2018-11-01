import React from "react";
import {View, Text, TouchableHighlight, StyleSheet,TextInput,Alert} from 'react-native';
import CXIcon from "react-native-vector-icons/CXIcon";
import Message from '../common/Message'
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone:null,
            password:null,
            isShow:true
        };
    }
    inputChange=(text,name)=>{
        this.setState({
            [name]:text
        })

    }
    clearPhone=()=>{
        this.setState({
            phone:null,
        })
    }
    clearPassword=()=>{
        this.setState({
            password:null,
        })
    }
    showChange=()=>{
        this.setState({
            isShow:!this.state.isShow,
        })
    }
    submitfunc=()=>{
        //this.child.init('账号或密码错误');
        let {phone,password}=this.state;
        if(phone==''||phone==null||phone==' '){
            this.child.init('手机号不能为空');
        }else if(password==''||password==null||password==' '){
            this.child.init('密码不能为空');
        }else{
            this.props.navigation.navigate('Home');
        }




    }
    onRef = (ref) => {
        this.child = ref
    }
    render() {
        const {navigation} = this.props;
        let{phone,password,isShow}=this.state;
        return (
            <View style={styles.warp}>

                <View style={styles.logincon}>
                    <View style={styles.inputitem}>
                        <View style={styles.inputitemLeft}>
                            <CXIcon name="mobile" size={15} color='#b2b2b2' style={{lineHeight:50}}></CXIcon>
                        </View>
                        <View style={styles.inputitemContent}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(phone)=>this.inputChange(phone,'phone')}
                                value={phone}
                                placeholder={'请输入手机号码'}
                                placeholderTextColor={'#999'}
                            />
                            {
                                phone&&
                                <View style={styles.remove}  >
                                    <CXIcon name="X" size={15} color='#b2b2b2' style={{lineHeight:50}} onPress={this.clearPhone}></CXIcon>
                                </View>
                            }
                        </View>
                    </View>
                    <View style={styles.inputitem}>
                        <View style={styles.inputitemLeft}>
                            <CXIcon name="mima" size={15} color='#b2b2b2' style={{lineHeight:50}}></CXIcon>
                        </View>
                        <View style={styles.inputitemContent}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(password)=>this.inputChange(password,'password')}
                                value={password}
                                placeholder={'请输入密码'}
                                secureTextEntry={isShow?true:false}
                                placeholderTextColor={'#999'}
                            />
                            {
                                password&&
                                <View style={styles.remove}>
                                    <CXIcon name="X" size={15} color='#b2b2b2' style={{lineHeight:50}} onPress={this.clearPassword}></CXIcon>
                                </View>
                            }
                        </View>
                        <View style={styles.inputitemRight}>
                            <View style={styles.isshow}>
                                <CXIcon name={isShow?'yanjing':'yanjing1'} size={15} color='#b2b2b2' style={{lineHeight:50}} onPress={this.showChange}></CXIcon>
                            </View>
                            <Text style={styles.forgetPassword} >忘记密码</Text>
                        </View>
                    </View>
                    <TouchableHighlight style={styles.buttonitem} onPress={this.submitfunc}>
                        <Text style={styles.buttontext}>登录</Text>
                    </TouchableHighlight>
                    <View style={styles.footeritem}>
                        <Text style={styles.footertext}>验证码登录</Text>
                        <Text style={styles.footertext}>注册账号</Text>
                    </View>
                </View>
                <Message onRef={this.onRef}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    warp: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
    },
    logincon: {
        width: 250,
        height: 100,
        marginTop: 110
    },
    inputitem: {
        height: 50,
        borderRadius: 25,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(153, 153, 153, 0.18)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 9,
        shadowOpacity: 1,
        marginBottom:20,
        paddingHorizontal:20,
        flexDirection:'row'
    },
    inputitemLeft:{
        width: 15,
        height: 50

    },
    inputitemContent:{
        height: 50,
        flex:1,
        flexDirection:'row'
    },
    input:{
        width:'100%',
        height: 30,
        fontSize:14,
        marginVertical:10,
        paddingVertical:0,
        paddingHorizontal:10,
        flex:1,
    },
    remove:{
        width: 15,
        height: 50,
    },
    inputitemRight:{
        height: 50,
        flexDirection:'row'
    },
    isshow:{
        marginHorizontal:5
    },
    forgetPassword:{
        height: 50,
        lineHeight:50,
        fontSize: 14,
        color: "#666666",
        padding:0,
        margin:0,
        textAlignVertical:'center',
    },
    buttonitem:{
        height: 50,
        borderRadius: 25,
        backgroundColor: "#f10000",
        shadowColor: "rgba(217, 0, 0, 0.35)",
        shadowOffset: {
            width: 0,
            height: 1.5
        },
        shadowRadius: 3.5,
        shadowOpacity: 1,
        marginBottom:23,
    },
    buttontext:{
        textAlign:'center',
        height: 50,
        lineHeight:50,
        fontSize: 18,
        color:'#fff',
        textAlignVertical:'center',

    },
    footeritem:{
        height: 20,
        lineHeight: 20,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    footertext:{
        fontSize: 16,
        color: "#f10000",
        lineHeight: 20,
        textAlignVertical:'center',
    }

});