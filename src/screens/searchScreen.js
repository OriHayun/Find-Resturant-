import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/searchBar/searchBar';
import UseResults from '../hooks/useResults';
import ResultsList from '../components/resultsList/resultsList';

const searchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = UseResults();
    const filterResultByPrice = (price) => {
        // price === '$' || '$$' || '$$$' || '$$$$'
        return results.filter(result => {
            return result.price === price;
        })
    }
    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    title="Cost Effctive"
                    results={filterResultByPrice('$')}

                />
                <ResultsList
                    title="Bit Pricier"
                    results={filterResultByPrice('$$')}

                />
                <ResultsList
                    title="Big Spender"
                    results={filterResultByPrice('$$$')}

                />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({});

export default searchScreen;