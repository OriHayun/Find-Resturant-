import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const searchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.Continer}>
            <Feather name="search" style={styles.Icon} />
            <TextInput
                style={styles.InputStyle}
                placeholder="Search"
                value={term}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    Continer: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 15,
        marginTop: 15,
        flexDirection: 'row-reverse',
        marginBottom:10
    },
    InputStyle: {
        flex: 1,
        fontSize: 18
    },
    Icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default searchBar;