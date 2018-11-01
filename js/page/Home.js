import React from 'react';
import { View, Text,Image ,StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import CXIcon from "react-native-vector-icons/CXIcon";
import Index from './Index/index'
export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selectedTab: 'index1' };


    }
    render() {
        return (
            <View style={styles.warp}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'index1'}
                        title="资讯"
                        selectedTitleStyle={{color:'#F10000'}}
                        renderIcon={() => <CXIcon name="information" size={25} color='#666666'></CXIcon>}
                        renderSelectedIcon={() => <CXIcon name="information" size={25} color='#F10000'></CXIcon>}
                        onPress={() => this.setState({ selectedTab: 'index1' })}>
                        <Index/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'index2'}
                        title="行情"
                        selectedTitleStyle={{color:'#F10000'}}
                        renderIcon={() => <CXIcon name="quotation" size={25} color='#666666'></CXIcon>}
                        renderSelectedIcon={() =><CXIcon name="quotation" size={25} color='#F10000'></CXIcon>}
                        onPress={() => this.setState({ selectedTab: 'index2' })}>
                        {<View><Text>行情</Text></View>}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'index3'}
                        title="溯源"
                        tabStyle={{zIndex:999}}
                        selectedTitleStyle={{color:'#F10000'}}
                        renderIcon={() => <Image source={require('../../res/img/menu.png')} style={{width: 45, height: 45,borderWidth:5,borderColor:'#F8F8F8',borderRadius:45}}/>}
                        renderSelectedIcon={() =><Image source={require('../../res/img/menu.png')} style={{width: 45, height: 45,borderWidth:5,borderColor:'#F8F8F8',borderRadius:45}}/>}
                        onPress={() => this.setState({ selectedTab: 'index3' })}>
                        {<View><Text>溯源</Text></View>}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'index4'}
                        title="资源"
                        selectedTitleStyle={{color:'#F10000'}}
                        renderIcon={() => <CXIcon name="resource" size={25} color='#666666'></CXIcon>}
                        renderSelectedIcon={() =><CXIcon name="resource" size={25} color='#F10000'></CXIcon>}
                        onPress={() => this.setState({ selectedTab: 'index4' })}>
                        {<View><Text>资源</Text></View>}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'index5'}
                        title="我的"
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={() => <CXIcon name="mea" size={25} color='#666666'></CXIcon>}
                        renderSelectedIcon={() =><CXIcon name="mea" size={25} color='#F10000'></CXIcon>}
                        onPress={() => this.setState({ selectedTab: 'index5' })}>
                        {<View><Text>我的</Text></View>}
                    </TabNavigator.Item>
                </TabNavigator>

            </View>
        );
    }

    /* render function, etc */
}


const styles = StyleSheet.create({
    warp:{
        flex:1
    }
});



