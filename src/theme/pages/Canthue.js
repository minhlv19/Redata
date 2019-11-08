//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Text, Image,TouchableOpacity} from 'react-native';
// import all basic components

export default class Canthue extends Component {
    //Chothue Component
    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.Item1}>
                    <View style={{marginLeft:6}}>
                        <View >
                            <Text numberOfLines={1} style={styles.Title}>CẦN THUÊ NHÀ PHỐ THỤY KHUÊ LÀM NHÀ TRẺ</Text>
                        </View>
                        <View style={styles.content}>
                            <Image
                                style={{width: 14, height: 14,marginTop: 4}}
                                source={require('../../asset/images/icon_location.png')}/>
                            <View  style={styles.TextType}>
                                <Text>Vị trí:</Text>
                                <Text>Bưởi, Tây Hồ, Hà Nội</Text>
                            </View>
                        </View>
                        <View style={styles.content}>
                            <Image
                                style={{width: 14, height: 14,marginTop: 4}}
                                source={require('../../asset/images/icon_vuong.png')}/>
                            <View  style={styles.TextType}>
                                <Text>Diện tích:</Text>
                                <Text>80 - 100 m2</Text>
                            </View>
                        </View>
                        <View  style={styles.content}>
                            <View
                                style={styles.TextType}>
                                <Text>Tài chính:</Text>
                                <Text>20 - 30 triệu / tháng</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Text>Nhận tư vấn</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,

    },
    Image: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        marginTop: 6,
        marginBottom: 6,

    },
    Item1:{
        margin:6,
        borderWidth:1,
        borderColor: '#ff0000',


    },
    Title:{
        color:'#ff0000',

    },
    content:{
        flexDirection:'row',

    },
    TextType:{flexDirection: 'row'}
});





