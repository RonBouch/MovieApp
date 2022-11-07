import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Movie: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Movie</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
})

export default Movie;