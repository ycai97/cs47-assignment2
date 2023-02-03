import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions, ImageBackground} from 'react-native';
import { Icons, Themes } from '../../assets/Themes';
import Profiles from "../../assets/Profiles";

import SwipeCards from 'react-native-swipe-cards';

const { height, width } = Dimensions.get('window');

class Card extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <View>
          <ImageBackground style={[styles.profileCard, styles.shadow]} source={this.props.image} imageStyle={{borderRadius: 8}}>
            <Text style={styles.profileName}>{this.props.name}</Text>
            <Text style={styles.caption}>{this.props.caption}</Text>
          </ImageBackground>
        </View>
      )
    }
}

const cards = [
    {name: Profiles.mtl.name, image: Profiles.mtl.image, caption: Profiles.mtl.caption},
    {name: Profiles.man.name, image: Profiles.man.image, caption: Profiles.man.caption},
    {name: Profiles.woman.name, image: Profiles.woman.image, caption: Profiles.woman.caption},
    {name: Profiles.drell.name, image: Profiles.drell.image, caption: Profiles.drell.caption},
    {name: Profiles.brubakercole.name, image: Profiles.brubakercole.image, caption: Profiles.brubakercole.caption},
]

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards: cards,
        outOfCards: false
      }
    }
  
    render() {
      return (
        <SwipeCards
          cards={this.state.cards}
          loop={true}
          renderCard={(cardData) => <Card {...cardData} />}
          showYup={false}
          showNope={false}
        />
      )
    }
}

const styles = StyleSheet.create({
  profileCard: {
    width: '100%',
    height: undefined,
    aspectRatio: 1 / 1.1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: width*0.04,
  },
  shadow: {
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset,
  },
  profileName: {
    margin: width*0.025,
    fontFamily: 'Sydney',
    fontSize: 32,
    color: 'white',
  },
  caption: {
    margin: width*0.025,
    fontFamily: 'Sydney',
    fontSize: 18,
    color: 'white',
  },
});