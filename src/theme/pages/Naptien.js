//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Text} from 'react-native';
// import all basic components

export default class Naptien extends Component {
    //Chothue Component
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text>Hướng dẫn nạp tiền</Text>
                <Text>Quý khách có thể chuyển khoản cho chúng tôi theo các tài khoản bên dưới, sau khi chuyển các bạn
                    vui lòng liên hệ 0989.625.304 - 02438.9919.866 để xác nhận, chúng tôi sẽ tiến hành nạp tiền cho bạn
                    ngay khi nhận được tiền và thông báo tới quý khách:</Text>
                <Text>THÔNG TIN TÀI KHOẢN :</Text>
                <View>
                <Text>Số tài khoản : </Text>
                    <Text>21510001866237</Text>
                </View>
                <View>
                    <Text>Chủ tài khoản : </Text>
                    <Text>ĐẶNG THỊ LAN ANH</Text>
                </View>

                    <Text>Ngân hàng TMCP Đầu tư và phát triển (BIDV) Chi nhánh Thăng Long </Text>
                    <Text>Nội dung: Nạp tiền cho (Email hoặc Phone) </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,

    },
});
