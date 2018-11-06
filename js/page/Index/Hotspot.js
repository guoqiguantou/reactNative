import React from "react";
import {View, Text,FlatList,StyleSheet,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import CXIcon from "react-native-vector-icons/CXIcon";
export default class Hotspot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotspotlist:null
        };
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData=()=>{
        fetch('https://www.easy-mock.com/mock/5b964044e3f68a2002edff94/example/ab')
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                hotspotlist: responseData.data.hotspotlist,
            });
        });
    }
    _renderItem=({item})=>{
        return (
            <View style={styles.hotspotlistitem}>
                <View style={styles.hotspotlistleft}>
                    <Text style={styles.hotspotlisttext}>{item.title}</Text>
                    <Text style={styles.hotspotlistcategory}>{item.category}</Text>
                    <View style={styles.hotspotlistfooter}>
                        <View style={styles.hotspotlistbtn}>
                            <Text style={styles.footertext}><CXIcon name="like" size={12} color='#b2b2b2'></CXIcon>({item.like})</Text>
                            <Text style={styles.footertext}><CXIcon name="message" size={12} color='#b2b2b2'></CXIcon>({item.comment})</Text>
                        </View>
                        <Text style={styles.footertext}>{item.time}</Text>
                    </View>
                </View>
                {item.img&&
                <TouchableOpacity>
                    <View style={styles.hotspotlistright}>
                        <Image source={require("../../../res/img/listimg1.jpg")} style={{width:'100%',height:'100%'}}/>
                    </View>
                </TouchableOpacity>
                }
            </View>
        )
    }
    _renderHeader=()=>{
        return(
            <View style={styles.hotspottitle}>
                <Text style={styles.hotspottext}>今日热点</Text>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.hotspot}>
                {
                    !this.state.hotspotlist &&
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color="#ccc" />
                    </View>
                }
                {
                    this.state.hotspotlist&&
                    <FlatList
                        ListHeaderComponent={this._renderHeader}
                        data={this.state.hotspotlist}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                    />
                }

            </View>

        )
    }
}
const styles = StyleSheet.create({
    hotspot:{
        backgroundColor: "#ffffff",
        paddingHorizontal:10,
    },
    loading:{
        width:'100%',
        height:100,
        justifyContent:'center',
        alignItems:'center'
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
        marginRight:5,
    },
    hotspotlistbtn:{
        flexDirection:'row',
    }


});