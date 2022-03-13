
import { StatusBar, SafeAreaView } from 'react-native';
import Avengers from './source/pages/avengers.page'
export default function App() {
  return (
    <SafeAreaView >
      <Avengers />
      <StatusBar />
    </SafeAreaView>
  );
}

