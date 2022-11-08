import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native';
import useTypedSelector from '../hooks/useTypedSelector';
import { COLORS } from '../utilities/enum';
import { Movie } from '../components';

const Favorite = () => {
    const { favoriteMovies } = useTypedSelector(state => state.userReducer)

    const renderMoviesList = (title: string) => (
        <View style={styles.flatlistCon}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={favoriteMovies || []}
                renderItem={(({ item }) => <Movie item={item} showDetails />)}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={() => <Text style={styles.noRes}>{favoriteMovies.length ? <View /> : 'No-Results'}</Text>}
            />
        </View>
    )
    return (
        <View style={styles.container}>
            {renderMoviesList('Favorite Movies')}
        </View>
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
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: COLORS.WHITE,
        left: 6
    },
    noRes: {
        color: COLORS.WHITE,
        fontSize: 28,
        alignSelf: 'center',
        marginTop: 30,
    },
})



export default Favorite;