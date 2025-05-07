import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Button from './src/components/button/button';

export default function App() {
  return (
    <View style={styles.container}>
      <Button />
      <StatusBar style="auto" />
    </View>
  );
};
