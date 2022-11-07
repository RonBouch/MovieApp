import React from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../utilities/enum';

const HomePage = (props: any) => {
    React.useEffect(() => {
    }, [])

    return (
        <ScrollView style={styles.container}>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
})



export default HomePage;