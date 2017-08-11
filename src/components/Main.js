import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import getTemp from '../api/getTemp';
//import { StartFetchData, FetchSuccess, FetchErr, getData } from '../redux/actionCreater';
// cách import nhanh
import * as actionCreaters from '../redux/actionCreater';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
        };
    }
    getTempByCityName() {
        const { cityName } = this.state;
        this.props.getData(cityName);
        // this.props.StartFetchData();
        // getTemp(cityName)
        // .then(temp => this.props.FetchSuccess(cityName, temp))
        // .catch(() => this.props.FetchErr());
    }
    handleErr(){
        const { error, isLoading, temp, cityName } = this.props;
        if (isLoading) return '...Loading';
        if (error) return 'Vui lòng thử lại';
        if (!cityName) return 'Nhập tên thành phố của bạn';
        return `${cityName} hiện tài là ${temp}oC`;
    }
    render() {
        return (
            <View style={styles.contain}>
                <Text style={styles.txtMessage}>{this.handleErr()}</Text>
                <TextInput style={styles.txtInput}
                    value={this.state.cityName}
                    onChangeText={text => this.setState({ cityName: text })}
                 />
                <TouchableOpacity onPress={this.getTempByCityName.bind(this)}>
                    <Text style={styles.btn}>Get temp</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        alignSelf: 'stretch'
    },
    txtMessage: {
        color: 'white',
        fontSize: 25
    },
    txtInput: {
        backgroundColor:'white',
        height: 30,
        width: 100,
        paddingHorizontal: 10
    },
    btn: {
        backgroundColor: 'gray',
        padding: 10,
        margin: 10
    }
})
const mapStateToProps = (state) => ({
    cityName: state.cityName,
    temp: state.temp,
    error: state.error,
    isLoading: state.isLoading,
});
export default connect(mapStateToProps, actionCreaters)(Main);