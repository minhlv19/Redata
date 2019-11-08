//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
// import all basic components

export default class Dangnhap extends Component {
    //Chothue Component
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }

    submit() {
//Do Something
    }

    render() {
        return (
            <View>
                <View>
                    <Text>Thành Viên</Text>
                    <Text>Đăng nhập hệ thống</Text>
                    <View>
                        <View>
                            <Text>Địa chỉ E-Mail:</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({email: text})}
                                placeholder="Địa chỉ E-Mail"
                            />
                        </View>
                        <View>
                            <Text>Mật khẩu:</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({password: text})}
                                secureTextEntry={true}
                                placeholder="Mật khẩu:"
                            />
                        </View>
                        <TouchableOpacity>
                            <Text>Quên mật khẩu</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Button
                            onPress={this.submit}
                            title="Đăng nhập"
                            color="#007bff"
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Chưa là Thành Viên</Text>
                    <Text>Đăng ký tài khoản</Text>
                    <Text>Bằng cách tạo tài khoản bạn có thể đăng tin cho thuê bất động sản, cập nhật nhanh dữ liệu cho
                        thuê và cần thuê, giúp công việc kinh doanh giao dịch của bạn hiệu quả hơn !</Text>
                </View>
                <TouchableOpacity>
                    <Button
                        onPress={this.submit}
                        title="Đăng ký thành viên"
                        color="#007bff"
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: 250,
        margin: 5,
    },
});
