import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {h5_bold, small, small_bold} from '../../asset/styles/styleText';

class GuiChothue extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.Title}>Gửi Thuê và Cho Thuê</Text>
                    <Text style={styles.content}>
                        Bạn bè, gia đình của bạn khi phát sinh nhu cầu muốn thuê và cho thuê một căn hộ, mặt bằng sẽ trở
                        nên
                        vô cùng đơn giản. Hãy cho chúng tôi biết các thông tin về thông tin nhu cầu thuê và cho thuê của
                        bạn, ngay lập tức, đội ngũ quản trị viên của Redata sẽ liên hệ để tư vấn cụ thể và cập nhật lên
                        website redata.vn. Hàng ngàn thành viên của Redata sẽ sẵn lòng hỗ trợ chỉ cần bạn điền đầy đủ
                        các
                        thông tin sau hoặc gọi điện về hotline: 0989.625.304 hoặc 0243.9919.866
                    </Text>
                    <Text style={styles.Title1}>Hãy điền đầy đủ thông tin trước khi gửi yêu cầu cho chúng tôi nhé</Text>
                    <Text style={styles.nameInput}>Họ và Tên:</Text>
                    <TextInput
                        placeholder="Họ và tên"
                        placeholderTextColor='#6c757d'
                        underlineColorAndroid="transparent"
                        style={styles.Input}
                    />
                    <Text style={styles.nameInput}>Mobile:</Text>
                    <TextInput
                        placeholder="Mobile"
                        placeholderTextColor='#6c757d'
                        underlineColorAndroid="transparent"
                        style={styles.Input}
                    />
                    <Text style={styles.nameInput}>Email:</Text>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="black"
                        underlineColorAndroid="transparent"
                        style={styles.Input}
                    />
                    <Text style={styles.nameInput}>Tỉnh/thành phố:</Text>
                    <TextInput
                        placeholder="Tỉnh/Thành phố"
                        placeholderTextColor='#6c757d'
                        underlineColorAndroid="transparent"
                        style={styles.Input}
                    />
                    <Text style={styles.nameInput}>Quận/huyện:</Text>
                    <TextInput
                        placeholder="Chọn Quận/Huyện"
                        placeholderTextColor='#6c757d'
                        underlineColorAndroid="transparent"
                        style={styles.Input}
                    />
                    <Text style={styles.nameInput}>Phường/Xã:</Text>
                    <TextInput
                        placeholder="Chọn phường/Xã"
                        placeholderTextColor='#6c757d'
                        underlineColorAndroid="transparent"
                        style={styles.Input}

                    />
                    <Text style={styles.nameInput}>Yêu cầu khi gửi * 2000:</Text>
                    <TextInput
                        placeholder="Nhập nội dung yêu cầu gửi và cho thuê"
                        placeholderTextColor='#6c757d'
                        maxLength={2000}
                        multiline={true}
                        underlineColorAndroid="transparent"
                        numberOfLines={4}
                        style={styles.Input}

                    />
                    <Text style={styles.nameInput}>Nhập mã bảo mật:</Text>
                    <TextInput
                        placeholder="Nhập mã bảo mật"
                        placeholderTextColor='#6c757d'
                        underlineColorAndroid="transparent"
                        style={styles.Input}

                    />
                    <TextInput
                        placeholder="Chọn mã bảo mật"
                        placeholderTextColor="black"
                        underlineColorAndroid="transparent"
                        style={styles.Input}

                    />
                    <TouchableOpacity style={styles.button}>
                        <Text>Kết nối với Redata</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 4,
        marginRight: 4,
    },
    Input: {
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 2,
        justifyContent: 'flex-start',
    },
        Title: {
            ...h5_bold,
            textAlign: 'center',
        },
    Title1: {
        ...small,
        color: 'red',
    },
    nameInput: {
        ...small_bold,
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
});

export default GuiChothue;
