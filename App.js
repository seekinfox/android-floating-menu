import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Draggable from 'react-native-draggable';
import Button from './Component/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.draggable}>
        <Draggable x={50} y={50}>
            <Button size={40}/>
        </Draggable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  draggable: {
    borderWidth: 1,
  }
});
