import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, FlatList, View, Text } from 'react-native';
import useTypedSelector from '../hooks/useTypedSelector';
import { MovieType } from '../stores/types';
import { COLORS } from '../utilities/enum';
import { MaterialIndicator } from 'react-native-indicators';
import { Movie } from '../components';
import useActions from '../hooks/useActions';

const HomePage = () => {
    const { movies, newMovies, loader } = useTypedSelector(state => state.moviesReducer)
    const [movieSelected, setMovieSelected] = useState<MovieType>({})
    const actions = useActions()

    useEffect(() => {
        actions.getMoviesApi();
    }, [])

    const renderMoviesList = (title: string, moviesList: MovieType[]) => (
        <View style={styles.flatlistCon}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={moviesList || []}
                horizontal={true}
                ListFooterComponent={() => ((loader) ? <MaterialIndicator color={COLORS.GRAY} /> : <View />)}
                renderItem={(({ item }) => <Movie item={item} setMovieSelected={setMovieSelected} />)}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={() => <Text style={styles.noRes}>{loader ? <View /> : 'No-Results'}</Text>}
            />
        </View>
    )
    return (
        <ScrollView style={styles.container}>
            {!!movies?.length && renderMoviesList('Recomended Movies', movies)}
            {movieSelected?.Title && <View>
                <Text style={styles.title}>Movie Description</Text>
                <Movie item={movieSelected} showDetails={true} />
            </View>}
            {!!newMovies?.length && renderMoviesList('New Movies', newMovies)}
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