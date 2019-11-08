//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {View, Image,Text, TouchableOpacity, StatusBar} from 'react-native';

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
import {color} from "react-native-reanimated";


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
         <View style={{alignItems:'center'}} >
          <Image
            source={require('../../asset/images/drawer.png')}
            style={{width: 25, height: 25,marginTop:10, marginLeft: 10,alignItems:'center'}}
          />
         </View>
        </TouchableOpacity>
          <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image
                  source={require('../../asset/images/logo.png')}
                  style={{width: 45, height: 45, marginLeft: 35,alignItems:'center'}}
              />
              <Text style={{color:'yellow',alignItems:'center',marginLeft:40,}}>HOTLINE :</Text>
              <Text style={{color:'white',alignItems:'center',marginLeft:12,}}>0989 625 304</Text>
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
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#172d44',
opacity:10,
      },
      headerTintColor: '#fff',
    }),
  },
});


const Gioithieu_Stack = createStackNavigator({

  Intro: {
    screen: Gioithieu,
    navigationOptions: ({navigation}) => ({
      title: null,
     headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#172d44',
      },
      headerTintColor: '#fff',
    }),
  },
});


const Chothue_Stack = createStackNavigator({

  Chothue: {
    screen: Chothue,
    navigationOptions: ({navigation}) => ({
      title: null,
     headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#172d44',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Canthue_Stack = createStackNavigator({
    Canthue:{
        screen:Canthue,
        navigationOptions:  ({navigation}) =>({
            title:null,
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#172d44',
            },
            headerTintColor: '#fff',
        }),
    }
});
const GuiChoThue_Stack = createStackNavigator( {
    GuiChoThue:{
        screen:GuiChothue,
        navigationOptions: ({navigation}) =>({
            title:null,
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle:{
                backgroundColor: '#172d44',
            },
            headerTintColor: '#fff',
        }),
    },
});

const DaiLy_Stack = createStackNavigator({
    DaiLy:{
        screen:Daily,
        navigationOptions: ({navigation}) =>({
            title:null,
         headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle:{
                backgroundColor: '#172d44',
            },
            headerTintColor: '#fff',
        }),
    },
});

const  DangKy_Stack = createStackNavigator({
    DangKy:{
        screen:Dangky,
        navigationOptions: ({navigation}) =>({
            title:null,
          headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle:{
                backgroundColor: '#172d44',
            },
            headerTintColor:'#fff',
        }),
    },
});

const DangTin_Stack = createStackNavigator({
    DangTin:{
        screen:Dangtin ,
        navigationOptions:  ({navigation}) =>({
            title:null,
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerTintColor:'#fff',
            headerStyle:{
                backgroundColor:'#172d44',
            },
        }),
    },
});

const LienHe_Stack = createStackNavigator({
    LienHe:{
        screen:Lienhe,
        navigationOptions: ({navigation}) =>({
            title:null,
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle:{
                backgroundColor:'#172d44',
            },
            headerTintColor:'#fff',

        }),
    },
});
const Naptien_Stack= createStackNavigator({
    Naptiep:{
        screen:Naptien,
        navigationOptions: ({navigation}) =>({
            title:null,
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerTintColor:'#fff',
            headerStyle:{
                backgroundColor:'#172d44',
            },
        }),
    },
});

const Login_Stack = createStackNavigator({
    Login:{
        screen: Login,
        navigationOptions:  ({navigation}) =>({
            title:'Login',
            headerStyle:{
                backgroundColor:'#172d44',
            },
          headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerTintColor:'#fff',
        }),
    },
});




const menu = createDrawerNavigator({

  Screen1: {
    //Title
    screen: Home_Stack,
    navigationOptions: {
      drawerLabel: 'TRANG CHU',

    },
  },

  Screen2: {
    //Title
    screen: Gioithieu_Stack,
    navigationOptions: {
      drawerLabel: 'GIOI THIEU',
    },
  },

  Screen3: {
    //Title
    screen:Chothue_Stack ,
    navigationOptions: {
      drawerLabel: 'CHO THUE',
    },
  },
    Screen4: {
        //Title
        screen:Canthue_Stack ,
        navigationOptions: {
            drawerLabel: 'CAN THUE',
        },
    },
    Screen5: {
        //Title
        screen:GuiChoThue_Stack ,
        navigationOptions: {
            drawerLabel: 'GUI THUE VA CHO THUE',
        },
    },
    Screen6: {
        //Title
        screen:DaiLy_Stack ,
        navigationOptions: {
            drawerLabel: 'DAI LY',
        },
    },
    Screen7: {
        //Title
        screen:LienHe_Stack ,
        navigationOptions: {
            drawerLabel: 'LIEN HE',
        },
    },
    Screen8: {
        //Title
        screen:Login_Stack ,
        navigationOptions: {
            drawerLabel: 'DANG NHAP',
        },
    },
    Screen9: {
        //Title
        screen:Naptien_Stack ,
        navigationOptions: {
            drawerLabel: 'NAP TIEN',
        },
    },
    Screen10: {
        //Title
        screen:DangTin_Stack ,
        navigationOptions: {
            drawerLabel: 'DANG TIN',
        },
    },
    Screen11: {
        //Title
        screen:DangKy_Stack ,
        navigationOptions: {
            drawerLabel: 'DANG KY',
        },

    },


},
{
    // headerMode: 'float',
    // initialRouteName: 'Screen3',
    // drawerBackgroundColor:'#172d44',
    // drawerPosition:'left',
    contentOptions: {
        activeTintColor: 'yellow',
        activeBackgroundColor: '#3E7EBC',
        inactiveTintColor: 'white',
        inactiveBackgroundColor: 'transparent',
        labelStyle: {
            fontSize: 15,
            marginLeft: 10,
        },
    },
    drawerBackgroundColor:'#172d44',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',



});


export default createAppContainer(menu);
