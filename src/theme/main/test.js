import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

import ImageSlider from 'react-native-image-slider';

class Test extends Component {
    render() {
        const images = [
            'https://redata.vn/public/upload/banner/hero1.jpg',
            'https://placeimg.com/640/640/people',
            'https://placeimg.com/640/640/animals',
            'https://placeimg.com/640/640/beer',
        ];

        return (
            <View style={styles.container}>
                <ImageSlider
                    loop
                    autoPlayWithInterval={3000}
                    images={images}
                    onPress={({ index }) => alert(index)}
                    customSlide={({ index, item, style, width }) => (
                        // It's important to put style here because it's got offset inside
                        <View>
                            <Image source={{ uri: item }}  />
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        height:50
    },
    slider: { backgroundColor: '#ffffff', height: 350 },

    contentText: { color: '#fff' },
    buttons: {
        zIndex: 1,
        height: 15,
        marginTop: -25,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        margin: 3,
        width: 15,
        height: 15,
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSelected: {
        opacity: 1,
    },
    customSlide: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    customImage: {
        width: 400,
        height: 400,
    },
});

export default Test;
