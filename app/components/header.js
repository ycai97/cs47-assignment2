import  { StyleSheet, Text, SafeAreaView, View, Image, Dimensions } from "react-native";
import { Icons, Themes } from '../../assets/Themes';

const { height, width } = Dimensions.get('window');

const Header = () => {
    return (
        <SafeAreaView style={styles.headerContainer}>
            <Image source={Icons.menu.light} style={styles.icon}></Image>
            <Text style={styles.title}>ensom</Text>
            <Image source={Icons.sun} style={styles.icon}></Image>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: width*0.9,
        height: height*0.08,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        width: width*0.1,
        height: width*0.1,
    },
    title: {
        fontFamily: 'Sydney-Bold',
        fontSize: 32,
    },
});

export default Header;