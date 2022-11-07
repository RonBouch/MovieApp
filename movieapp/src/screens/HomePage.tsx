import React from 'react'
import { StyleSheet, ScrollView } from 'react-native';

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
        backgroundColor: 'black',
    },
})



export default HomePage;