import { StyleSheet, View, Text, ScrollView } from 'react-native';
import data from '../mocks/avengers.mock'
import Avenger from '../components/avenger.component'

export default function Avengers() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Avengers</Text>
            <ScrollView>
                <View style={styles.avenger}>
                    {data.map((avenger) => <Avenger {...avenger} />)}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',

    },
    avenger: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
});