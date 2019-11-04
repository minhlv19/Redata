//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Text, TextInput, TouchableOpacity,Button,ScrollView} from 'react-native';
// import all basic components

export default class Dangky extends Component {
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
                <ScrollView>
                <View>
                    <Text>ĐĂNG KÝ TÀI KHOẢN</Text>
                    <View>
                        <Text>Nếu bạn đã đăng ký tài khoản, vui lòng đăng nhập </Text>
                        <TouchableOpacity>
                            <Text> Tại Đây.</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>Lưu ý:</Text>
                        <Text>Các mục dấu sao</Text>
                        <Text> (*) </Text>
                        <Text>không được bỏ trống & phải điền đầy đủ, chính xác</Text>
                    </View>
                </View>
                <View>
                    <Text>MÃ GIỚI THIỆU</Text>
                    <Text>Nhập mã nếu bạn có:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập mã giới thiệu"
                    />
                </View>
                <View>
                    <View>
                        <Text>*</Text>
                        <Text>Email:</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({name: text})}
                        placeholder="E-mail đăng nhập"
                    />
                    <View>
                        <Text>*</Text>
                        <Text>Mật khẩu:</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({password: text})}
                        secureTextEntry={true}
                        placeholder="Mật khẩu đăng nhập"
                    />
                    <View>
                        <Text>*</Text>
                        <Text>Xác nhận mật khẩu:</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({password: text})}
                        secureTextEntry={true}
                        placeholder="Xác nhận mật khẩu"
                    />
                </View>
                <View>
                    <Text>THÔNG TIN LIÊN HỆ</Text>
                    <View>
                        <Text>*</Text>
                        <Text>Họ và TÊN:</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({name: text})}
                        placeholder="Họ và tên"
                    />
                    <View>
                        <Text>*</Text>
                        <Text>Giới tính:</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({name: text})}
                        placeholder="Giới tính"
                    />
                    <View>
                        <Text>*</Text>
                        <Text>Điện thoại:</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({name: text})}
                        placeholder="Số điện thoại"
                    />
                    <View>
                        <Text>*</Text>
                        <Text>Địa chỉ:</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({name: text})}
                        placeholder="Địa chỉ liên hệ"
                    />
                    <View>
                        <Text>*</Text>
                        <Text>Nhập mã bảo mật:</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({name: text})}
                        placeholder="Nhập mã bảo mật"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({name: text})}
                        placeholder="Nhập mã bảo mật"
                    />


                </View>
                <TouchableOpacity>
                <Button
                    onPress={this.submit}
                    title="Đăng ký thành viên"
                    color="#007bff"
                />
                </TouchableOpacity>
                </ScrollView>
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
