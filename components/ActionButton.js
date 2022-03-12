import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../constant/Color'

const ActionButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DC</Text>
  </View>
  )
}

export default ActionButton

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.WHITE, borderRadius: 100, height: 60, width: 60, top: '-50%', alignItems: 'center', justifyContent: 'center', shadowColor: "#fff",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
},
text:{ color: COLORS.SECONDARY_BLUE, fontSize: 24, fontWeight: 'bold', }
})
