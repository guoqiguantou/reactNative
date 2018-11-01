import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './js/page/Home'
import Login from './js/page/Login'




const MainStack = createStackNavigator(
    {
        Home: {
            screen: Home,
        },
        Login:{
            screen: Login
        }
    },
    {
        /* Same configuration as before */
        headerMode: 'none',
        initialRouteName: 'Login',
    }
);


export default class App extends React.Component {
    render() {
        return <MainStack />;
    }
}
