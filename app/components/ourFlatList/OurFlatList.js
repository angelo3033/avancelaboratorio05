import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

const DATA = [
    /*{
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id:'3',
        title: 'Third Item',
    },*/
];

function Item({ title, showAlert}){
    return (
        <TouchableOpacity onPress={showAlert}>
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const ListEmpty = () => {
    return (
        <View style={styles.MainContainer}>
            <Text style={{textAlign: 'center'}}>No Data Found</Text>
        </View>
    );
};

const OurFlatList = props => (
    <View style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={({ item }) => (
                <Item title={item.title} showAlert={props.showAlert} />
            )}
            keyExtractor={item => item.id}
            ListEmptyComponent={ListEmpty}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        backgroundColor: 'orange',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default OurFlatList