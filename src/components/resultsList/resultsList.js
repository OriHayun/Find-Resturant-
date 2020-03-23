import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetails from '../resultsDetails/resultsDetails';
import {withNavigation} from 'react-navigation';

const resultsList = ({ title, results, navigation }) => {

    if(!results.length){
        return null;
    }
    return (
        <View style={styles.container} >
            <Text style={styles.title}>{title}</Text>
            <FlatList style={styles.flatList}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('result',{id:item.id})}>
                            <ResultsDetails result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 5
    }
});

export default withNavigation(resultsList);