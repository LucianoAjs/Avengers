import { Image, Text, View, Dimensions } from 'react-native';

const widthDimension = Dimensions.get('screen').width;
const height = 300 / 550 * widthDimension;

export default function Avenger({ avatar, name, width }) {
    return (
        <View >
            <Image source={avatar} style={{ width, height }} />
            <Text style={{ color: '#888' }}>
                {name}
            </Text>
        </View>
    );
}

