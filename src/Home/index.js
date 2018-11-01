import React from 'react';
import { View, Text,Image ,StyleSheet,Alert,TextInput } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selectedTab: 'home' };


    }
    render() {
        return (
            <View style={styles.warp}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={() => <Image source={require('../../images/11.png')} style={{width: 25, height: 25}}/>}
                        renderSelectedIcon={() => <Image source={require('../../images/11.png')} style={{width: 25, height: 25,tintColor:'red'}}/>}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        {<View><Text>11</Text></View>}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="Profile"
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={() => <Image source={require('../../images/11.png')} style={{width: 25, height: 25}}/>}
                        renderSelectedIcon={() =><Image source={require('../../images/11.png')} style={{width: 25, height: 25,tintColor:'red'}}/>}
                        onPress={() => this.setState({ selectedTab: 'profile' })}>
                        {<View><Text>12</Text></View>}
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



