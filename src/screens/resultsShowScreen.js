import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Yelp from '../api/yelp';
const resultShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id')
    const getResult = async (id) => {
        const response = await Yelp.get(`/${id}`);
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={styles.image}
                            source={{ uri: item }}
                        />
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    image: {
        width: 250,
        height: 180,
        marginVertical:10
        
    },
    name:{
        //textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
        //marginBottom:10
    }
});

export default resultShowScreen;