//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {View, Image, TouchableOpacity, StatusBar, Text} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../pages/HomeScreen';
import Gioithieu from '../pages/Gioithieu';
import Chothue from '../pages/Chothue';
import Canthue from '../pages/Canthue';
import Daily from '../pages/Daily';
import Dangky from '../pages/Dangky';
import Dangtin from '../pages/Dangtin';
import Lienhe from '../pages/Lienhe';
import GuiChothue from '../pages/GuiChothue';
import Naptien from '../pages/Naptien';
import Login from '../pages/Login';
import Test from "./test";


class NavigationDrawerStructure extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <StatusBar
                    barStyle="light-content"
                    // dark-content, light-content and default
                    hidden={false}
                    //To hide statusBar
                    backgroundColor="#000"
                    //Background color of statusBar
                    translucent={false}
                    //allowing light, but not detailed shapes
                    networkActivityIndicatorVisible={true}
                />

                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    {/*Donute Button Image */}
                    <Image
                        source={require('../../asset/images/drawer.png')}
                        style={{width: 25, height: 25, marginLeft: 5}}
                    />
                </TouchableOpacity>
                <View style={{marginLeft: 60, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../asset/images/logo.png')}
                           style={{width: 30, height: 30}}
                    />
                    <Text style={{color: 'red', marginLeft: 20}}>HOLINE :</Text>
                    <Text style={{color: 'white', marginLeft: 5}}>0989 625 304</Text>
                </View>
            </View>
        );
    }
}


const Home_Stack = createStackNavigator({

    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            title: null,
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#172d44',
                opacity: 10,
            },
            headerTintColor: '#fff',
        }),
    },
    Test:{
        screen:Test,
        navigationOptions:{
            header:null,
        }
    }
});


const Gioithieu_Stack = createStackNavigator({

    Intro: {
        screen: Gioithieu,
        navigationOptions: ({navigation}) => ({
            title: 'Gioi thieu',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,

            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});


const Chothue_Stack = createStackNavigator({

    Chothue: {
        screen: Chothue,
        navigationOptions: ({navigation}) => ({
            title: 'Cho thue',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const Canthue_Stack = createStackNavigator({
    Canthue: {
        screen: Canthue,
        navigationOptions: ({navigation}) => ({
            title: 'Can thue',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    }
});
const GuiChoThue_Stack = createStackNavigator({
    GuiChoThue: {
        screen: GuiChothue,
        navigationOptions: ({navigation}) => ({
            title: 'Gui Cho thue',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const DaiLy_Stack = createStackNavigator({
    DaiLy: {
        screen: Daily,
        navigationOptions: ({navigation}) => ({
            title: 'Dai Ly',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const DangKy_Stack = createStackNavigator({
    DangKy: {
        screen: Dangky,
        navigationOptions: ({navigation}) => ({
            title: 'DangKy',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const DangTin_Stack = createStackNavigator({
    DangTin: {
        screen: Dangtin,
        navigationOptions: ({navigation}) => ({
            title: 'Dangtin',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#FF9800',
            },
        }),
    },
});

const LienHe_Stack = createStackNavigator({
    LienHe: {
        screen: Lienhe,
        navigationOptions: ({navigation}) => ({
            title: 'Lien He',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#ff9800',
            },
            headerTintColor: '#fff',

        }),
    },
});
const Naptien_Stack = createStackNavigator({
    Naptiep: {
        screen: Naptien,
        navigationOptions: ({navigation}) => ({
            title: 'Nap tien',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#ff9800',
            },
        }),
    },
});

const Login_Stack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
            title: 'Login',
            headerStyle: {
                backgroundColor: '#ff9800',
            },
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerTintColor: '#fff',
        }),
    },
});
const DrawerNavigatorExample = createDrawerNavigator({

    Screen1: {
        //Title
        screen: Home_Stack,
        navigationOptions: {
            drawerLabel: 'Trang chu',
        },
    },

    Screen2: {
        //Title
        screen: Gioithieu_Stack,
        navigationOptions: {
            drawerLabel: 'Gioi thieu',
        },
    },

    Screen3: {
        //Title
        screen: Chothue_Stack,
        navigationOptions: {
            drawerLabel: 'Cho thue',
        },
    },
    Screen4: {
        //Title
        screen: Canthue_Stack,
        navigationOptions: {
            drawerLabel: 'Can thue',
        },
    },
    Screen5: {
        //Title
        screen: GuiChoThue_Stack,
        navigationOptions: {
            drawerLabel: 'Gui thue va cho thue',
        },
    },
    Screen6: {
        //Title
        screen: DaiLy_Stack,
        navigationOptions: {
            drawerLabel: 'Dai ly',
        },
    },
    Screen7: {
        //Title
        screen: LienHe_Stack,
        navigationOptions: {
            drawerLabel: 'Lien he',
        },
    },
    Screen8: {
        //Title
        screen: Login_Stack,
        navigationOptions: {
            drawerLabel: 'Dang nhap',
        },
    },
    Screen9: {
        //Title
        screen: Naptien_Stack,
        navigationOptions: {
            drawerLabel: 'Nap tien',
        },
    },
    Screen10: {
        //Title
        screen: DangTin_Stack,
        navigationOptions: {
            drawerLabel: 'Dang tin',
        },
    },
    Screen11: {
        //Title
        screen: DangKy_Stack,
        navigationOptions: {
            drawerLabel: 'Dang ky',
        },
    },


});


export default createAppContainer(DrawerNavigatorExample);
