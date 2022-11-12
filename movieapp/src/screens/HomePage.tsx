import React, { useState } from 'react'
import { StyleSheet, ScrollView, FlatList, View, Text } from 'react-native';
import useTypedSelector from '../hooks/useTypedSelector';
import { MovieType } from '../stores/types';
import { COLORS } from '../utilities/enum';
import { MaterialIndicator } from 'react-native-indicators';
import { Movie } from '../components';

const HomePage = () => {
    const { movies, loader } = useTypedSelector(state => state.moviesReducer)
    const [movieSelected, setMovieSelected] = useState<MovieType>({})

    const renderMoviesList = (title: string) => (
        <View style={styles.flatlistCon}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={movies || []}
                horizontal={true}
                ListFooterComponent={() => ((loader) ? <MaterialIndicator color='gray' /> : <View />)}
                renderItem={(({ item }) => <Movie item={item} setMovieSelected={setMovieSelected} />)}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={() => <Text style={styles.noRes}>{loader ? <View /> : 'No-Results'}</Text>}
            />
        </View>
    )
    return (
        <ScrollView style={styles.container}>
            {renderMoviesList('Recomended Movies')}
            {movieSelected?.Title && <View>
                <Text style={styles.title}>Movie Description</Text>
                <Movie item={movieSelected} showDetails={true} />
            </View>}
            {renderMoviesList('New Movies')}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    flatlistCon: {
        marginTop: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        color: COLORS.WHITE,
        left: 6

    },
    noRes: {
        color: 'rgb(151,145,145)',
        fontSize: 28,
        alignSelf: 'center',
        marginTop: 30,
    },
})



export default HomePage;