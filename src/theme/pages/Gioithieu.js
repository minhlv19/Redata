//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import YouTube from 'react-native-youtube';
import {h4, h4_bold, h5, medium, medium_bold, small, small_bold} from '../../asset/styles/styleText';
import Video from 'react-native-video';
// import all basic components
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';

export default class Gioithieu extends Component {
    //Gioithieu Component

    render() {
        return (
            <View style={styles.MainContainer}>
                <ScrollView>

                    <View >
                        <View>
                            <Text style={styles.Title}>Chào mưng bạn đến với Redata.vn</Text>
                            <Text style={styles.Conten}>Công ty TNHH Đầu tư dịch vụ và Quản lý Bất động sản Tây Bắc là
                                một trong những doanh
                                nghiệp
                                tiên phong trong lĩnh vực đầu tư dịch vụ thuê và cho thuê nhà. Các sản phẩm Công ty đầu
                                tư là
                                Tòa nhà mặt phố, Tầng 1 tòa nhà chung cư, mặt sàn trung tâm thương mại có khả năng sinh
                                lời và
                                tỷ lệ lấp đầy cao.</Text>

                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Image
                                style={styles.Image}
                                source={{uri: 'https://redata.vn/public/home/img/a1.jpg'}}
                            />
                            <Text style={styles.Title}>Vê Dịch Vụ BDS Tây Bắc</Text>
                            <Text style={styles.Conten}>Công ty được thành lập vào năm 2017 hoạt động chính trong lĩnh
                                vực Đầu tư Bất động sản
                                cho
                                thuê tại Hà Nội, Hồ Chí Minh. Công ty Tây Bắc mong muốn tìm kiếm được nhiều bạn trẻ khao
                                khát
                                thành công để cùng Tây Bắc gây dựng và phát triển</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Image
                                style={styles.Image}
                                source={{uri: 'https://redata.vn/public/home/img/a2.jpg'}}
                            />
                            <Text style={styles.Title}>Tầm Nhìn</Text>
                            <Text style={styles.Conten}>Công ty được thành lập vào năm 2017 hoạt động chính trong lĩnh
                                vực Đầu tư Bất động sản
                                cho
                                thuê tại Hà Nội, Hồ Chí Minh. Công ty Tây Bắc mong muốn tìm kiếm được nhiều bạn trẻ khao
                                khát
                                thành công để cùng Tây Bắc gây dựng và phát triển</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Image
                                style={styles.Image}
                                source={{uri: 'https://redata.vn/public/home/img/a3.jpg'}}
                            />
                            <Text style={styles.Title}>Sứ Mệnh</Text>
                            <Text style={styles.Conten}>Chuyên nghiệp thị trường Môi giới Bất động sản Việt Nam. Tạo
                                công ăn việc làm cho hàng
                                nghìn
                                lao động đang tìm kiếm việc làm tại Việt Nam.</Text>

                        </View>
                    </View>
                    <View style={{ backgroundColor: '#c2fad4',alignItems: 'center'}}>
                        <View
                            style={{justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 10}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.TextType}>Tại sao</Text>
                                <Text style={{...medium, marginLeft: 3, marginRight: 3}}>chọn dịch vụ</Text>
                                <Text style={styles.TextType}>REDATA</Text>
                            </View>
                            <View>
                                <Text style={{color: '#1f956e'}}>Tự tin đem giá trị cốt lõi cho khách hàng.</Text>
                            </View>
                        </View>
                        <View style={styles.Tin}>
                            <Text style={styles.Title1}>REDATA ứng dụng CÔNG NGHỆ 4.0</Text>
                            <Text style={styles.Conten}>Cùng với sự phát triển của công nghệ đặc biệt là cuộc cách mạng
                                công nghệ 4.0 , REDATA có
                                được nguồn thông tin khổng lồ về khách hàng có nhu cầu trong mảng thuê bất động sản.
                                Nguồn
                                thông tin này là hoàn toàn hợp pháp - được sự đồng ý của chủ sở hữu, chính xác - được
                                xác
                                nhận của chủ sở hữu, liên tục cập nhật thêm mới và loại bỏ những khách hàng đã thuê được
                                BĐS, được phân loại theo từng nhóm nhu cầu cụ thể.</Text>
                        </View>
                        <View style={styles.Tin}>
                            <Text style={styles.Title1}>REDATA trong nền kinh tế chia sẻ</Text>
                            <Text style={styles.Conten}>Cùng với phát triển của thị trường với xu hướng kinh tế chia sẻ
                                , REDATA cùng chia sẻ với
                                bạn nguồn khách hàng khổng lồ mà REDATA có với đầy đủ các thông tin xác thực về nhu cầu
                                của
                                khách hàng như: địa điểm cần thuê, khả năng tài chính, thời gian cần thuê… REDATA cùng
                                bạn,
                                hỗ trợ bạn chăm sóc khách hàng để có được giao dịch Chất lượng - Nhanh chóng – Hiệu
                                quả…</Text>
                        </View>
                        <View style={styles.Tin}>
                            <Text style={styles.Title1}>REDATA trong nền kinh tế chia sẻ</Text>
                            <Text style={styles.Conten}>Trở thành chuyên gia dùng REDATA - Không ngừng học tập, REDATA
                                sẽ đào tạo cho bạn những kỹ
                                năng cần thiết để trở thành một chuyên gia trong lĩnh vực bất động sản , khẳng định được
                                năng lực của bản thân và có thu nhập không giới hạn.</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,


    },
    Title: {

        ...h5,
        marginBottom: 6,
    },
    Conten: {

        ...medium,
    },
    Image: {
        width: '90%',
        height: 200,
        alignItems: 'center',
        marginTop: 6,
        marginBottom: 6,

    },
    toolbar: {
        marginTop: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    mediaPlayer: {
        height: 300,

        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
    },
    TextType: {
        color: '#92c801',
        ...medium_bold,
    },
    Tin: {
        backgroundColor: '#ffffff',
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        alignItems: 'center',
        padding: 4
    },
    Title1:{
        ...medium_bold,
    }
});
