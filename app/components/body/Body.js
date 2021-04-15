import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Body = props => (
    <View>
        <Text>{props.textBody}</Text>
        <TouchableOpacity style={styles.button} onPress={props.onBodyPress}>
            <Text> Touch here </Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    button: {
        top: 10,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});

export default Body;