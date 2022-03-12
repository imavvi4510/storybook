import React from 'react'
import { Dimensions, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Bell from 'react-native-vector-icons/FontAwesome'
import Stars from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from '../constant/Color';

const CustomHeader = () => {
  return (
    <SafeAreaView
      style={styles.container}>
      <View style={{
        backgroundColor: 'white', top: 0, bottom: 0, left: -5, right: -5, position: 'absolute', borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderWidth: 2,
        borderColor: COLORS.BLUE,
      }}>

      </View>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => {
          alert('Left');
        }}>
        <Image source={{ uri: 'https://www.seekpng.com/png/detail/376-3766322_film-forum-menu-icon-dark-blue.png' }} style={{ height: 50, width: 50 }} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => {
          alert('Left');
        }}>
        <Text style={styles.heading}>FAQ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => {
          alert('Right');
        }}>
        <View style={styles.rightContainer}>
          <Bell name='bell' size={20} color={COLORS.BLACK} />
          <View style={styles.statsContainer}>
            <Stars name='stars' size={20} color={COLORS.Yellow} />
            <Text style={styles.text}>100</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>

  )
}

export default CustomHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    color: COLORS.SECONDARY_BLUE, fontSize: 30, fontWeight: 'bold', letterSpacing: 2
  },
  rightContainer: {
    flexDirection: 'row', justifyContent: 'space-evenly'
  },
  text: {
    color: COLORS.BLACK, fontSize: 16, lineHeight: 20, fontWeight: 'bold',
  },
  statsContainer: {
    marginStart: 10,
    flexDirection: 'row'
  }
})
