import React from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    ImageBackground
} from 'react-native';
import CXIcon from "react-native-vector-icons/CXIcon";
import NavigationBar from '../../common/NavigationBar';
import { withNavigation } from 'react-navigation';

class My extends React.Component {
    constructor(props) {
        super(props);
        const {navigation} = this.props;
        //Alert.alert(JSON.stringify(navigation));
    }


    render() {
        return (
            <View style={styles.warp}>
                <ScrollView>

                    <View style={styles.top}>
                        <ImageBackground source={require('../../../res/img/personbg.jpg')}
                                         style={{width: '100%', height: '100%'}}>
                            <NavigationBar
                                leftButton={
                                    <TouchableOpacity>
                                        <CXIcon name="fit" size={17} color='#fff' style={{margin: 5}}></CXIcon>
                                    </TouchableOpacity>
                                }
                                rightButton={
                                    <TouchableOpacity>
                                        <CXIcon name="msg" size={17} color='#fff' style={{margin: 5}}></CXIcon>
                                    </TouchableOpacity>
                                }
                            />
                            <View style={styles.user}>
                                <Image source={require("../../../res/img/pic.png")} style={styles.userPic}/>
                                <Text style={styles.userText}>用户名</Text>
                            </View>
                            <View style={styles.menu}>
                                <TouchableOpacity>
                                <View style={styles.menuitem}>
                                    <CXIcon name="looked" size={20} color='#fff' style={{lineHeight: 30}}></CXIcon>
                                    <Text style={styles.menutext}>看过</Text>
                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                <View style={styles.menuitem}>
                                    <CXIcon name="uncollect" size={22} color='#fff' style={{lineHeight: 30}}></CXIcon>
                                    <Text style={styles.menutext}>收藏</Text>
                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                <View style={styles.menuitem}>
                                    <CXIcon name="message" size={27} color='#fff' style={{lineHeight: 30}}></CXIcon>
                                    <Text style={styles.menutext}>评论</Text>
                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                <View style={styles.menuitem}>
                                    <CXIcon name="seafood" size={30} color='#fff' style={{lineHeight: 30}}></CXIcon>
                                    <Text style={styles.menutext}>虾米</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.listitem}>
                            <View style={styles.listleft}>
                                <CXIcon name="material" size={18} style={{lineHeight: 30}} color='#ff9685'></CXIcon>
                            </View>
                            <View style={styles.listcenter}>
                                <Text>个人信息修改</Text>
                            </View>
                            <View style={styles.listright}>
                                <CXIcon name="right" size={16} style={{lineHeight: 30}} color='#333'></CXIcon>
                            </View>
                        </View>
                        <View style={styles.listitem}>
                            <View style={styles.listleft}>
                                <CXIcon name="password" size={18} style={{lineHeight: 30}} color='#fc4675'></CXIcon>
                            </View>
                            <View style={styles.listcenter}>
                                <Text>密码修改</Text>
                            </View>
                            <View style={styles.listright}>
                                <CXIcon name="right" size={16} style={{lineHeight: 20}} color='#333'></CXIcon>
                            </View>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.listitem}>
                            <View style={styles.listleft}>
                                <CXIcon name="integral" size={20} style={{lineHeight: 20}} color='#FD8A5C'></CXIcon>
                            </View>
                            <View style={styles.listcenter}>
                                <Text>(ICON)我的虾米</Text>
                            </View>
                            <View style={styles.listright}>
                                <CXIcon name="right" size={16} style={{lineHeight: 20}} color='#333'></CXIcon>
                            </View>
                        </View>
                        <View style={styles.listitem}>
                            <View style={styles.listleft}>
                                <CXIcon name="cart" size={18} style={{lineHeight: 20}} color='#8eb0fd'></CXIcon>
                            </View>
                            <View style={styles.listcenter}>
                                <Text>(ICON)设备购买</Text>
                            </View>
                            <View style={styles.listright}>
                                <CXIcon name="right" size={16} style={{lineHeight: 20}} color='#333'></CXIcon>
                            </View>
                        </View>
                        <View style={styles.listitem}>
                            <View style={styles.listleft}>
                                <CXIcon name="collect" size={18} style={{lineHeight: 20}} color='#ffe033'></CXIcon>
                            </View>
                            <View style={styles.listcenter}>
                                <Text>我的收藏</Text>
                            </View>
                            <View style={styles.listright}>
                                <CXIcon name="right" size={16} style={{lineHeight: 20}} color='#333'></CXIcon>
                            </View>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.listitem}>
                            <View style={styles.listleft}>
                                <CXIcon name="center" size={18} color='#85c7ff'></CXIcon>
                            </View>
                            <View style={styles.listcenter}>
                                <Text>潜江虾稻大数据中心</Text>
                            </View>
                            <View style={styles.listright}>
                                <CXIcon name="right" size={16} color='#333'></CXIcon>
                            </View>
                        </View>
                        <View style={styles.listitem}>
                            <View style={styles.listleft}>
                                <CXIcon name="opinion" size={18} color='#1fdccc'></CXIcon>
                            </View>
                            <View style={styles.listcenter}>
                                <Text>意见反馈</Text>
                            </View>
                            <View style={styles.listright}>
                                <CXIcon name="right" size={16} color='#333'></CXIcon>
                            </View>
                        </View>
                        <View style={styles.listitem}>
                            <View style={styles.listleft}>
                                <CXIcon name="contact" size={18} color='#FE7878'></CXIcon>
                            </View>
                            <View style={styles.listcenter}>
                                <Text>联系我们</Text>
                            </View>
                            <View style={styles.listright}>
                                <CXIcon name="right" size={16} color='#333'></CXIcon>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }
}
export default withNavigation(My);

const styles = StyleSheet.create({
    warp: {},
    top: {
        height: 245
    },
    user: {
        height: 105,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userPic: {
        width: 60,
        height: 60,
        backgroundColor: "#50add3",
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 60,
    },
    userText: {
        fontSize: 14,
        color: "#ffffff",
        lineHeight: 20,
        textAlign: 'center',
        marginTop:10,
    },
    menu: {
        height: 100,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuitem: {
        marginVertical:20,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    menutext: {
        fontSize: 14,
        height:20,
        lineHeight:20,
        color: "#ffffff",
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    list: {
        backgroundColor: '#fff',
        marginBottom:9,
    },
    listitem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        height: 50,
        padding: 10,
    },
    listleft: {
        lineHeight: 30,
        justifyContent:'center',
    },
    listcenter: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent:'center',
        fontSize: 15,
        color: "#333333",
        textAlignVertical: 'center',
    },
    listright: {
        lineHeight: 30,
        justifyContent:'center',

    }

});