import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: 6.8859883,
        longitude: 79.8663565,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      }}
    >

      <MapView.Marker
        coordinate={{
          latitude: 6.8859883,
          longitude: 79.8663565,
        }}
        title={"Oensys Capital (Pvt) Ltd"}
        description={"Corporate Office"}
        />

    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height
  }
})

export default Map