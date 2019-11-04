//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
// import all basic components

export default class Dangtin extends Component {
    //Chothue Component
    render() {
        return (
            <View style={styles.MainContainer}>
                <View>
                    <TouchableOpacity>
                        <Text>Đăng Cho Thuê</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Đăng Cần Thuê</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View>
                        <Text>
                            THÔNG TIN CHUNG
                        </Text>
                        <View>
                            <View>
                                <Text>Tiêu đề</Text>
                                <Text>*</Text>
                            </View>
                            <TextInput
                                placeholder="Tiêu đề"
                                placeholderTextColor='#6c757d'
                                underlineColorAndroid="transparent"
                                style={styles.Input}
                            />
                        </View>
                        <View>
                            <View>
                                <Text>Trạng thái</Text>
                                <Text>*</Text>
                            </View>
                            <TextInput
                                placeholder="Bình thường"
                                placeholderTextColor='#6c757d'
                                underlineColorAndroid="transparent"
                                style={styles.Input}
                            />
                        </View>
                        <View>
                            <View>
                                <Text>Loại bất động sản</Text>
                                <Text>*</Text>
                            </View>
                            <TextInput
                                placeholder="Danh mục tin đăng"
                                placeholderTextColor='#6c757d'
                                underlineColorAndroid="transparent"
                                style={styles.Input}
                            />
                        </View>
                        <View>
                            <View>
                                <Text>Tỉnh/ thành phố</Text>
                                <Text>*</Text>
                            </View>
                            <TextInput
                                placeholder="Tỉnh/thành phố"
                                placeholderTextColor='#6c757d'
                                underlineColorAndroid="transparent"
                                style={styles.Input}
                            />
                        </View>
                        <View>
                            <View>
                                <Text>Quận/Huyện</Text>
                                <Text>*</Text>
                            </View>
                            <TextInput
                                placeholder="Quận/Huyện"
                                placeholderTextColor='#6c757d'
                                underlineColorAndroid="transparent"
                                style={styles.Input}
                            />
                        </View>
                        <View>
                            <View>
                                <Text>Phường/xã</Text>
                                <Text>*</Text>
                            </View>
                            <TextInput
                                placeholder="Phường xã"
                                placeholderTextColor='#6c757d'
                                underlineColorAndroid="transparent"
                                style={styles.Input}
                            />
                        </View>
                        <View>
                            <View>
                                <Text>Địa chỉ</Text>
                                <Text>*</Text>
                            </View>
                            <TextInput
                                placeholder="Địa chỉ BDS"
                                placeholderTextColor='#6c757d'
                                underlineColorAndroid="transparent"
                                style={styles.Input}
                            />
                        </View>
                        <View>
                            <View>
                                <Text>Diện tích</Text>
                                <Text>*</Text>
                            </View>
                            <TextInput
                                placeholder="Diện tích m2"
                                placeholderTextColor='#6c757d'
                                underlineColorAndroid="transparent"
                                style={styles.Input}
                            />
                        </View>
                        <View>
                            <View>
                                <Text>Giá</Text>
                                <Text>*</Text>
                            </View>
                            <TextInput
                                placeholder="Giá giao dịch"
                                placeholderTextColor='#6c757d'
                                underlineColorAndroid="transparent"
                                style={styles.Input}
                            />
                        </View>
                        <View>
                            <View>
                                <Text>Đơn vị</Text>
                                <Text>*</Text>
                            </View>
                            <TextInput
                                placeholder="Thỏa thuận"
                                placeholderTextColor='#6c757d'
                                underlineColorAndroid="transparent"
                                style={styles.Input}
                            />
                        </View>
                        <View>
                            <View>
                                <Text>Tổng tiền</Text>
                                <Text>*</Text>
                            </View>
                            <Text>Thỏa thuận</Text>
                        </View>

                    </View>
                    <View>
                        <Text>THÔNG TIN MÔ TẢ</Text>
                        <View>
                            <Text>Nội dung tin đăng</Text>
                            <Text>* 2000</Text>

                        </View>
                        <TextInput
                            placeholder="Nhập nội dung chi tiết tin đăng"
                            placeholderTextColor='#6c757d'
                            maxLength={2000}
                            multiline={true}
                            underlineColorAndroid="transparent"
                            numberOfLines={4}
                            style={styles.Input}

                        />
                    </View>
                    <View>
                        <Text>THÔNG TIN KHÁC</Text>
                        <Text>Hướng nhà</Text>
                        <TextInput
                        placehoder="Chọn hướng BDS"
                        placehoderTextColor='#6c757d'
                        />
                        <Text>Pháp lý</Text>
                        <TextInput
                            placehoder="Giấy tờ pháp lý"
                            placehoderTextColor='#6c757d'
                        />
                        <Text>Mặt tiền (m)</Text>
                        <TextInput
                            placeholder="Nhập nội dung chi tiết tin đăng"
                            placeholderTextColor='#6c757d'
                            multiline={true}
                            underlineColorAndroid="transparent"
                            style={styles.Input}

                        />
                        <Text>Số tầng</Text>
                        <TextInput
                            placeholder="Số tầng"
                            placeholderTextColor='#6c757d'
                            multiline={true}
                            underlineColorAndroid="transparent"
                            style={styles.Input}

                        />
                        <Text>Số phòng ngủ</Text>
                        <TextInput
                            placeholder="Số phòng ngủ"
                            placeholderTextColor='#6c757d'
                            multiline={true}
                            underlineColorAndroid="transparent"
                            style={styles.Input}

                        />
                        <Text>Số phòng WC</Text>
                        <TextInput
                            placeholder="Số phòng tắm/Wc"
                            placeholderTextColor='#6c757d'
                            multiline={true}
                            underlineColorAndroid="transparent"
                            style={styles.Input}

                        />
                    </View>
                    <View>
                        <Text>HÌNH ẢNH + VIDEO</Text>
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
});
