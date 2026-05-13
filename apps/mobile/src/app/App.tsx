import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0B1220' }}>
      <View style={{ padding: 16, gap: 12 }}>
        <Text style={{ color: 'white', fontSize: 28, fontWeight: '700' }}>RideAI</Text>
        <Text style={{ color: '#cbd5e1' }}>Solicita viaje, negocia precio y activa Modo Ángel Guardián.</Text>
        <Button title="Solicitar viaje" onPress={() => {}} />
        <Button title="Hablar con IA" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}
