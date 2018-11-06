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
    TouchableHighlight
} from 'react-native';
import CXIcon from "react-native-vector-icons/CXIcon";
import Swiperwarp from './Swiper'
import NavigationBar from '../../common/NavigationBar'
import Hotspot from './Hotspot'

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: null,
        };
    }

    clearPhone = () => {
        this.setState({
            phone: null,
        })
    }

    render() {
        return (
            <View style={styles.warp}>
                <ScrollView>
                    <NavigationBar
                        style={{
                            backgroundColor: '#f10000'
                        }}
                        stateBar={{
                            backgroundColor: '#f10000'
                        }}
                        titleView={
                            <View style={styles.barcenter}>
                                <View style={styles.inputwarp}>
                                    <CXIcon name="commit" size={15} color='#ffffff' style={{lineHeight: 24}}></CXIcon>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={(phone) => this.setState({phone})}
                                        value={this.state.phone}
                                        placeholder={'搜索'}
                                        placeholderTextColor={'#fff'}
                                    />
                                    <TouchableHighlight onPress={this.clearPhone}>
                                        <View style={styles.remove}>
                                            <CXIcon name="delete" size={15} color='#fff' style={{lineHeight: 24}}
                                                    onPress={this.clearPhone}></CXIcon>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>

                        }
                        leftButton={
                            <TouchableOpacity>
                                <CXIcon name="mine" size={17} color='#fff' style={{margin: 5}}></CXIcon>
                            </TouchableOpacity>
                        }
                        rightButton={
                            <TouchableOpacity>
                                <CXIcon name="msg" size={17} color='#fff' style={{margin: 5}}></CXIcon>
                            </TouchableOpacity>
                        }
                    />
                    <View style={styles.swiper}>
                        <Swiperwarp/>
                    </View>
                    <View style={styles.menuwarp}>
                        <TouchableOpacity>
                            <View style={styles.menuitem}>
                                <Image source={require("../../../res/img/news1.png")} style={styles.menuicon}/>
                                <Text style={styles.menutext}>政策信息</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.menuitem}>
                                <Image source={require("../../../res/img/news2.png")} style={styles.menuicon}/>
                                <Text style={styles.menutext}>产业动态</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.menuitem}>
                                <Image source={require("../../../res/img/news3.png")} style={styles.menuicon}/>
                                <Text style={styles.menutext}>龙虾文化</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.menuitem}>
                                <Image source={require("../../../res/img/news4.png")} style={styles.menuicon}/>
                                <Text style={styles.menutext}>企业风采</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.notice}>
                        <Image source={require("../../../res/img/notice.png")} style={styles.noticepic}/>
                        <Text style={styles.noticetext} numberOfLines={1}>第二届博览会、第二届龙虾节将于2018年5月23日正式举行开幕式</Text>
                    </View>
                    <View style={styles.topic}>
                        <TouchableOpacity>
                            <Image source={require("../../../res/img/lesson1.jpg")} style={styles.topicpic}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../../../res/img/lesson2.jpg")} style={styles.topicpic}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../../../res/img/lesson3.jpg")} style={styles.topicpic}/>
                        </TouchableOpacity>
                    </View>
                    <Hotspot/>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    warp: {
    },
    barcenter: {
        width: '100%',
        paddingVertical: 10,
    },
    inputwarp: {
        height: 24,
        borderRadius: 12,
        backgroundColor: "rgba(255,255,255,0.5)",
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    input: {
        paddingVertical: 0,
        paddingHorizontal: 10,
        fontSize: 12,
        lineHeight: 24,
        color: "#ffffff",
        flex: 1,
        width: '100%',
    },
    remove: {
        width: 15,
        height: 24,
        // backgroundColor:'blue'
    },
    swiper: {
        height: 162,
    },
    menuwarp: {
        height: 101,
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    menuitem: {
        width: 50,
        flexDirection: 'column',
    },
    menuicon: {
        width: 50,
        height: 50,
        marginTop: 15,
        borderRadius: 50,
    },
    menutext: {
        height: 20,
        fontSize: 12,
        lineHeight: 20,
        color: "#333333",
        textAlign: 'center',
    },
    notice: {
        height: 26,
        backgroundColor: "#ffffff",
        marginVertical: 8,
        paddingHorizontal: 10,
        paddingVertical: 3,
        flexDirection: 'row',
    },
    noticepic: {
        height: 12,
        width: 60,
        marginVertical: 4,
    },
    noticetext: {
        flex: 1,
        fontSize: 12,
        lineHeight: 20,
        color: "#333333",
        paddingHorizontal: 10,
        textAlignVertical: 'center',
    },
    topic: {
        height: 80,
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 8
    },
    topicpic: {
        width: 110,
        height: 60,
        borderRadius: 5,
        marginVertical: 10,
    },


});