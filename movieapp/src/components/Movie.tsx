import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import useActions from '../hooks/useActions'
import { MovieProps } from '../stores/types'
import { COLORS } from '../utilities/enum'


const Movie: React.FC<MovieProps> = ({ item, setMovieSelected, showDetails }) => {
    const actions = useActions()

    return (
        <View style={[styles.container, showDetails ? styles.fRow : styles.fColumn]} key={item?.imdbID}>
            <TouchableOpacity onPress={() => setMovieSelected && setMovieSelected(item)}>
                <Image source={{ uri: item?.Poster }} style={[showDetails ? styles.imgDetails : styles.img]} />
            </TouchableOpacity>
            {showDetails ?
                <View style={[styles.imgDetails, styles.detailsCon]}>
                    <Text style={styles.title}>{item?.Title}</Text>
                    <Text style={styles.txt}>Year: {item?.Year}</Text>
                    <Text style={styles.txt}>imdbID: {item?.imdbID}</Text>
                    <Text style={styles.txt}>Type: {item?.Type}</Text>
                </View>
                :
                <TouchableOpacity style={styles.favCon} onPress={() => actions.setFavorite(item)}>
                    <Image source={require('../../assets/icons8-star-64.png')} style={styles.favImg} />
                </TouchableOpacity>}

        </View>
    )
}

const styles = StyleSheet.create({
    fRow: { flexDirection: 'row' },
    fColumn: { flexDirection: 'column' },
    container: {
        flex: 1,
        padding: 6,
    },
    img: {
        width: 120, height: 170
    },
    imgDetails: {
        width: 180,
        height: 230,
        backgroundColor: COLORS.GRAY,
    },
    detailsCon: { marginLeft: 20 },
    favCon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.GRAY,
        padding: 4,
    },
    title: {
        color: COLORS.WHITE,
        fontSize: 16,
        textAlign: 'center',
        padding: 10
    },
    txt: {
        color: COLORS.WHITE,
        fontSize: 14,
        marginTop: 12,
        padding: 6,
    },
    favImg: { width: 22, height: 22, },
})

export default Movie;