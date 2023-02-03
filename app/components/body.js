import  { StyleSheet, Text, SafeAreaView, View, Image, Dimensions, ImageBackground } from "react-native";
import { Icons, Themes } from '../../assets/Themes';
import SwipeCards from './SwipeCards.js'

const { height, width } = Dimensions.get('window');
var pad;
var padT;
var h;
var audio_h;
var soundWaveIcon_h;
var soundWaveIcon_w;
var playerIcon_h;
var audioText_size;
// phone
if (width/height <= 0.6) {
    h = height*0.71;
    pad = width*0.05;
    audio_h = width*0.35;
    soundWaveIcon_h = width*0.12;
    soundWaveIcon_w = width*0.7;
    playerIcon_h = width*0.14;
    audioText_size = 25;
    padT = 20;
} else { // tablet
    h = height*0.8;
    pad = width*0.2;
    audio_h = width*0.2;
    soundWaveIcon_h = width*0.07;
    soundWaveIcon_w = width*0.5;
    playerIcon_h = width*0.1;
    audioText_size = 30;
    padT = 30;
}

const Body = () => {
    return (
        <View style={styles.bodyContainer}>
            <SwipeCards />
            <View style={[styles.audioContainer, styles.shadow]}>
                <Text style={styles.audioText}>My hottest take</Text>
                <View style={styles.audioIconContainer}>
                    <Image source={Icons.player.light} style={styles.playerIcon}></Image>
                    <Image source={Icons.audioWave.light} style={styles.soundWaveIcon}></Image>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bodyContainer: {
        width: width,
        height: h,
        padding: pad,
        paddingTop: padT,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    // acquire shadow properties from Themes
    shadow: {
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
    },
    audioContainer: {
        width: '100%',
        height: audio_h,
        backgroundColor: 'white',
        borderRadius: 18,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '5%',
    },
    audioText: {
        fontFamily: 'Sydney',
        fontSize: audioText_size,
    },
    audioIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    playerIcon: {
        width: playerIcon_h,
        height: playerIcon_h,
    },
    soundWaveIcon: {
        width: soundWaveIcon_w,
        height: soundWaveIcon_h,
        resizeMode: 'contain',
    },
});

export default Body;