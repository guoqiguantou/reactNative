import React from "react";
import {View, Text, ScrollView, StyleSheet, Image, FlatList} from 'react-native';
import CXIcon from "react-native-vector-icons/CXIcon";
import Swiperwarp from './Swiper'
import NavigationBarSearch from './NavigationBarSearch'

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotspotlist:[{
                id:98,
                title:'小龙虾养殖专题气象服务第8期',
                category:'政策信息',
                time:'2018-9-12',
                img:'1',
                like:22,
                comment:33,
            },{
                id:99,
                title:'履职尽责敢担当 乐于奉献助发展——市农业局助力“一会一节”纪略',
                category:'龙虾文化',
                time:'2018-9-12',
                img:'1',
                like:22,
                comment:33,
            },{
                id:100,
                title:'湖北潜江“虾王争霸”引客来',
                category:'企业风采',
                time:'2018-9-12',
                img:'11',
                like:22,
                comment:33,
            }]
        };
    }

    render() {
        return (
            <View style={styles.warp}>
                <ScrollView>
                    <NavigationBarSearch/>
                    <View style={styles.swiper}>
                        <Swiperwarp/>
                    </View>
                    <View style={styles.menuwarp}>
                        <View style={styles.menuitem}>
                            <Image source={require("../../../res/img/news1.png")} style={styles.menuicon}/>
                            <Text style={styles.menutext}>政策信息</Text>
                        </View>
                        <View style={styles.menuitem}>
                            <Image source={require("../../../res/img/news2.png")} style={styles.menuicon}/>
                            <Text style={styles.menutext}>产业动态</Text>
                        </View>
                        <View style={styles.menuitem}>
                            <Image source={require("../../../res/img/news3.png")} style={styles.menuicon}/>
                            <Text style={styles.menutext}>龙虾文化</Text>
                        </View>
                        <View style={styles.menuitem}>
                            <Image source={require("../../../res/img/news4.png")} style={styles.menuicon}/>
                            <Text style={styles.menutext}>企业风采</Text>
                        </View>
                    </View>
                    <View style={styles.notice}>
                        <Image source={require("../../../res/img/notice.png")} style={styles.noticepic}/>
                        <Text style={styles.noticetext} numberOfLines={1} >第二届博览会、第二届龙虾节将于2018年5月23日正式举行开幕式</Text>
                    </View>
                    <View style={styles.topic}>
                        <Image source={require("../../../res/img/lesson1.jpg")} style={styles.topicpic}/>
                        <Image source={require("../../../res/img/lesson2.jpg")} style={styles.topicpic}/>
                        <Image source={require("../../../res/img/lesson3.jpg")} style={styles.topicpic}/>
                    </View>
                    <View style={styles.hotspot}>
                        <View style={styles.hotspottitle}>
                            <Text style={styles.hotspottext}>今日热点</Text>
                        </View>
                        <View style={styles.hotspotlist}>
                            <FlatList
                                data={this.state.hotspotlist}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({item}) =>{
                                    return (
                                        <View style={styles.hotspotlistitem}>
                                            <View style={styles.hotspotlistleft}>
                                                <Text style={styles.hotspotlisttext}>{item.title}</Text>
                                                <Text style={styles.hotspotlistcategory}>{item.category}</Text>
                                                <View style={styles.hotspotlistfooter}>
                                                    <View style={styles.hotspotlistbtn}>
                                                        <Text style={styles.footertext}><CXIcon name="dianzan" size={12} color='#b2b2b2'></CXIcon>({item.like})</Text>
                                                        <Text style={styles.footertext}><CXIcon name="xiaoxi" size={12} color='#b2b2b2'></CXIcon>({item.comment})</Text>
                                                    </View>
                                                    <Text style={styles.footertext}>{item.time}</Text>
                                                </View>
                                            </View>
                                            {item.img&&
                                            <View style={styles.hotspotlistright}>
                                                <Image source={require("../../../res/img/listimg1.jpg")} style={{width:'100%',height:'100%'}}/>
                                            </View>
                                            }
                                        </View>
                                    )
                                }}
                            />

                        </View>

                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    warp: {
        // backgroundColor: 'red',
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
    menuicon:{
        width: 50,
        height:50,
        marginTop:15,
        borderRadius:50,
    },
    menutext:{
        height: 20,
        fontSize: 12,
        lineHeight: 20,
        color: "#333333"
    },
    notice:{
        height: 26,
        backgroundColor: "#ffffff",
        marginVertical:8,
        paddingHorizontal:10,
        paddingVertical:3,
        flexDirection:'row',
    },
    noticepic:{
        height: 12,
        width: 60,
        marginVertical:4,
    },
    noticetext:{
        flex:1,
        fontSize: 12,
        lineHeight: 20,
        color: "#333333",
        paddingHorizontal:10,
    },
    topic:{
        height: 80,
        backgroundColor: "#ffffff",
        flexDirection:'row',
        justifyContent: 'space-around',
        marginBottom:8
    },
    topicpic:{
        width: 110,
        height: 60,
        borderRadius: 5,
        marginVertical:10,
    },
    hotspot:{
        backgroundColor: "#ffffff",
        paddingHorizontal:10,
    },
    hotspottitle:{
        height:40,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,

    },
    hotspottext:{
        fontSize: 16,
        lineHeight: 20,
        color: "#333333",
        borderLeftColor:"#f10000",
        borderLeftWidth:3,
        marginVertical:10,
        paddingLeft:10,
    },
    hotspotlist:{
        height:300
    },
    hotspotlistitem:{
        height:95,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:10,
        borderBottomColor:'#eee',
        borderBottomWidth:1,
    },
    hotspotlistleft:{
        fontSize: 14,
        lineHeight: 20,
        color: "#333333",
        flex:1,
        paddingRight:15,
    },
    hotspotlistright:{
        width: 120,
        height: 75,
        borderRadius: 5,
        backgroundColor: "#dbdbdb",
    },
    hotspotlisttext:{
        fontSize: 14,
        height:40,
        lineHeight: 20,
        color: "#333333"
    },
    hotspotlistcategory:{
        fontSize: 12,
        lineHeight: 20,
        color: "#b3b3b3"
    },
    hotspotlistfooter:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    footertext:{
        fontSize: 12,
        lineHeight: 20,
        color: "#b3b3b3",
        marginHorizontal:5,
    },
    hotspotlistbtn:{
        flexDirection:'row',

    }

});