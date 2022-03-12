import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, LayoutAnimation } from "react-native";
import { COLORS } from '../constant/Color';
import AntIcon from 'react-native-vector-icons/AntDesign'
import fonts from "../constant/fonts";

const Item = ({ content, index }) => {
  const [isExpanded, setExpanded] = useState(false)

  const handleTap = React.useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!isExpanded);
  }, [isExpanded])

  return <>
    <View style={[styles.item, isExpanded ? styles.itemExpanded : null]}>
      <View style={styles.itemChildContainer}>
        <Text style={styles.title}>{`${index + 1}.`}&nbsp;{`${content.title}`}</Text>
        {isExpanded ? <AntIcon name="minuscircle" size={22} color={COLORS.BLUE} onPress={() => handleTap()} /> : <AntIcon name="pluscircle" size={22} color={COLORS.BLUE} onPress={() => handleTap()} />}
      </View>

    </View>
    {isExpanded ? <View style={styles.itemHiddenContainer}>
      <Text style={styles.content}>{`${content.description}`}</Text>

    </View> : null}
  </>
};



const FaqCards = (props) => {

  return <SafeAreaView style={styles.container}>
    <SectionList
      sections={props.data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => <Item content={item} index={index} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      showsVerticalScrollIndicator={false}
    />
  </SafeAreaView>

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 36,
    marginBottom: 36
  },
  item: {
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: COLORS.BLUE,
    marginTop: 10,
    borderRadius: 16,
  },
  itemExpanded: {
    borderBottomLeftRadius: 0, borderBottomRightRadius: 0

  },
  header: {
    fontSize: 24,
    color: COLORS.GREY,
    fontFamily: fonts.PRIMARY_BOLD,
    marginTop: 30
  },
  title: {
    color: COLORS.SECONDARY_BLUE,
    textTransform: 'capitalize',
    flex: 1,
    fontFamily: fonts.PRIMARY_BOLD,
    paddingEnd: 8
  },
  itemChildContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  itemHiddenContainer: { borderWidth: 1, borderBottomRightRadius: 16, borderBottomLeftRadius: 16, borderColor: COLORS.BLUE, paddingHorizontal: 30, paddingVertical: 18, backgroundColor: 'white' },
  content: {
    color: COLORS.BLACK,
    textAlign: 'justify',
    fontSize: 12,
    fontFamily: fonts.PRIMARY
  }
});

export default FaqCards;