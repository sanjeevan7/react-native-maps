import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Text, StyleSheet } from 'react-native'

const MapListScreen = ({ navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 50 }}>Oensys Capital</Text>
    </SafeAreaView>
  )
}

export default MapListScreen