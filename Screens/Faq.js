import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'

import { getFaq } from '../utils/Api'
import FaqCards from '../components/FaqCards';
import ActionButtonRightSide from '../components/ActionButtonRightSide';
const image = { uri: "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-green-literary-concise-comfortable-image_31777.jpg" };

const Faq = () => {

  const [faqs, setFaqs] = useState([])
  useEffect(() => {

    getFaq().then(function filterData(res) {
      setFaqs(res.data.data.faqSections.map(e => ({
        title: e.name,
        data: e.faqs
      })))
    })
  }, [])

  return (

    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>


        {faqs ? <FaqCards data={faqs} /> : null}
        <ActionButtonRightSide/>

      </ImageBackground>
    </View>
  )
}

export default Faq


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },

});

