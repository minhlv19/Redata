import React, { Component } from 'react';
import {StyleSheet, TextInput, View, Text, Keyboard, ScrollView, TouchableOpacity} from 'react-native';
import {h5_bold, medium_bold} from '../../asset/styles/styleText';

// import App from './App';
export default class Lienhe extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                <Text style={styles.Title}>
                    PHÒNG KINH DOANH BDS TÂY BẮC
                </Text>
                <View style={styles.View1}>
                    <Text>
                        Monday - Friday
                    </Text>
                    <Text style={{color:'red',flex:2}}>7:30 AM - 17:30 PM</Text>

                </View>
                <View style={styles.View1}>
                    <Text>Saturday</Text>
                    <Text>8:30 AM - 16:30 PM</Text>
                </View>
                <View style={styles.View1}>
                    <Text>Sunday</Text>
                    <Text>Đóng cửa</Text>
                </View>
                <View style={styles.View1}>
                    <Text>
                        0989 625 304 – 0243 9919 866
                    </Text>
                </View>
                <View style={styles.View1}>
                    <Text>cskh@redata.vn</Text>
                </View>
                <View style={styles.View1}>
                    <Text>Tầng 4 - Số 88 Kim Giang, phường Đại Kim, quận Hoàng Mai, TP Hà Nội</Text>
                </View>
                <View>
                    <TextInput
                        placeholder="Họ và tên"
                        placeholderTextColor='#6c757d'
                        underlineColorAndroid="transparent"
                        style={styles.Input}
                    />
                    <TextInput
                        placeholder="Điện thoại"
                        placeholderTextColor='#6c757d'
                        underlineColorAndroid="transparent"
                        style={styles.Input}
                    />
                    <TextInput
                        placeholder="Email của bạn"
                        placeholderTextColor='#6c757d'
                        underlineColorAndroid="transparent"
                        style={styles.Input}
                    />
                    <TextInput
                        placeholder="Tiêu đề liên hệ"
                        placeholderTextColor='#6c757d'
                        underlineColorAndroid="transparent"
                        style={styles.Input}
                    />
                    <TextInput
                        placeholder="Nội dung liên hệ"
                        placeholderTextColor='#6c757d'
                        numberOfLines={6}
                        multiline={true}
                        underlineColorAndroid="transparent"
                        style={styles.Input}
                    />
                    <TextInput
                        placeholder="Nhập mã bảo mật bên dưới"
                        placeholderTextColor='#6c757d'
                        underlineColorAndroid="transparent"
                        style={styles.Input}
                    />
                    <TextInput
                        placeholder="Nhập mã bảo mật bên dưới"
                        placeholderTextColor='#6c757d'
                        underlineColorAndroid="transparent"
                        style={{width:'50%',borderWidth:1}}
                    />
                </View>
                    <TouchableOpacity style={styles.button}>
                        <Text>Gửi cho chúng tôi</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        margin:8
    },
    Input:{
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 2,
        justifyContent: 'flex-start',
        marginBottom:4
    },
    button: {
        backgroundColor: '#28a745',
        width: '50%',
        height: 25,
        borderRadius: 2,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Title: {
        ...medium_bold,
        textAlign: 'center',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,

    },
    View1:{
        flexDirection:'row',
        flex: 1
    }

});
