//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {
    Image,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    Text,
    View,
    Alert,
    RefreshControl,
    SafeAreaView, TouchableOpacity,
} from 'react-native';
// import all basic components
import data from '../../../json/Jsontest';
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
            isLoading: true,
            refreshing: true,
            dataSource: [],
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: false,
            dataSource: data.data,
            refreshing: false,

        }
    )
    }
    //HomeScreen Component
    ListViewItemSeparator = () => {
        return (
            //returning the listview item saparator view
            <View
                style={{
                    height: 0.2,
                    width: '90%',
                    backgroundColor: '#808080',
                }}
            />
        );
    };

    onRefresh() {
        //Clear old data of the list
        this.setState({dataSource: []});
        //Call the Service to get the latest data
        this.componentDidMount();
    }

    render() {

        if (this.state.refreshing) {
            return (
                //loading view while data is loading
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>

            );
        }
        return (
            //Returning the ListView

            <SafeAreaView style={{flex: 1}}>
                <View style={styles.MainContainer}>
                    <FlatList
                        data={this.state.dataSource}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.ListViewItemSeparator}
                        enableEmptySections={true}
                        renderItem={({item}) => < TouchableOpacity style={styles.content}
                                                                   onPress={() => this.props.navigation.navigate('Test')}>
                            <View
                                style={styles.colViewContainer}
                            >
                                <Image style={styles.logoimage} source={{uri: item.image}}></Image>

                                <View style={styles.body}>
                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{
                                            backgroundColor: "#02885b",
                                            borderRadius: 5,
                                            width: '30%',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{paddingTop: 2, color: "white"}}>{item.price}</Text>
                                        </View>
                                        <Text style={{paddingTop: 2, marginLeft: 10,}}>{item.acreage}</Text>
                                    </View>
                                    <View style={styles.styleicon}>
                                        <View style={styles.styleicon}>
                                            <Image source={require('../../asset/images/location.png')}
                                                   style={styles.imageitem}/>

                                            <Text style={{marginLeft: 10,}}>{item.location}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </TouchableOpacity>}

                        refreshControl={
                            <RefreshControl
                                //refresh control used for the Pull to Refresh
                                refreshing={this.state.refreshing}
                                onRefresh={this.onRefresh.bind(this)}
                            />
                        }
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 10,
    },

    MainContainerslide: {
        flex: 1,
        alignItems: 'center',
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        backgroundColor: '#FFF8E1'

    },
    colViewContainer: {
        fontSize: 20,
        padding: 10,
        flex: 1,
        flexDirection: 'column',
        marginBottom: 3,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
    },
    logoimage: {
        width: 370, height: 274, alignItems: 'center',
    },
    body: {
        flex: 1, justifyContent: 'center', marginLeft: '8%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    styleicon: {
        marginTop: 6,
        flexDirection: 'row',
        flex: 1,

    },
    imageitem: {
        width: 16,
        height: 16,
        padding: 8,
    },
    textname: {
        width: '88%',
        writingDirection: 'auto',
        marginLeft: 4,
    },
    skill: {
        width: '22%',
        writingDirection: 'auto',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#3e79ff',
        textAlign: 'center',
        color: '#3e79ff',


    },
});

