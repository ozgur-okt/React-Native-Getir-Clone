import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';


export default function Feed() {
    return (
      <View style={{ alignItems: "center", marginTop: 25 }}>
        
        <Image source={logo} style={styles.logo} />
        
        <View style={{ backgroundColor: "#ffd300", flexDirection: "row", width: "100%" }}>
          <TouchableOpacity style={styles.txtInput}>
            <Text style={{ color: "gray" }}> Teslimat Adresi Belirleyin</Text>
          </TouchableOpacity>
          <View style={{ paddingLeft: 25, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 11, fontWeight: "bold", color: "#7849f7" }}> TVS </Text>
            <Text style={{ fontWeight: 'bold', color: "#7849f7" }}> 10-30 dk </Text>
          </View>
        </View>
        
        <ScrollView style={{ marginTop: 0, paddingTop: 0, height: 180, width: "100%", marginBottom: 20 }}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <Image source={slide1} style={styles.slide} />
          <Image source={slide2} style={styles.slide} />
          <Image source={slide3} style={styles.slide} />
        </ScrollView>
        <View style={{ flexDirection: "row", marginBottom: 30 }}>

          <TouchableOpacity style={styles.icons}>
            <MaterialCommunityIcons name="silverware-fork-knife" color="#7849f7" size={27} />
            <Text style={{ fontSize: 12, color: "#454545" }}>  Ne yesem?  </Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.icons}>
            <MaterialCommunityIcons name="diamond-stone" color="#7849f7" size={27} />
            <Text style={{ fontSize: 12, color: "#454545" }}>  Müdavim  </Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.icons}>
            <MaterialCommunityIcons name="clock-time-nine" color="#7849f7" size={27} />
            <Text style={{ fontSize: 12, color: "#454545" }}>  Siparişlerim  </Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.icons}>
            <MaterialCommunityIcons name="heart" color="#7849f7" size={27} />
            <Text style={{ fontSize: 12, color: "#454545" }}>  Favorilerim  </Text>
          </TouchableOpacity>
  
        </View>
  
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 13, marginBottom: 18 }}>
          <TouchableOpacity style={styles.filterLeft} >
            <MaterialCommunityIcons name="filter" color="#7849f7" size={23} />
            <Text style={{ fontSize: 13, color: "#7849f7", fontWeight: "bold" }}>  Filtrele
            </Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.filterRight}>
            <MaterialCommunityIcons name="swap-vertical-bold" color="#7849f7" size={23} />
            <Text style={{ fontSize: 13, color: "#7849f7", fontWeight: "bold" }}>  Sırala
            </Text>
          </TouchableOpacity>
        </View>
  
        <View style={{ flexDirection: "row", width: "93%", justifyContent: "space-between", marginTop: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 12, }}>Müdavim Restoranları</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 12, color: "#7849f7" }}> Tümünü Gör (7) </Text>
          </TouchableOpacity>
        </View>
  
        <ScrollView style={{ height: 150, width: "100%", marginTop: 0 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Image source={scroll1} style={styles.scroll} />
          <Image source={scroll2} style={styles.scroll} />
          <Image source={scroll3} style={styles.scroll} />
  
        </ScrollView>
      </View>
  
    );
  }
  
  const styles = StyleSheet.create({
    logo: {
      width: "100%",
      height: 60
    },
    txtInput: {
      shadowColor: 'rgba(0,0,0, .4)',
      shadowOffset: { height: 0, width: 3 },
      shadowOpacity: 0.6,
      shadowRadius: 4,
      backgroundColor: "white",
      justifyContent: "center",
      paddingLeft: 20,
      height: 50,
      width: "70%",
      border: "white",
      borderBottomRightRadius: 20,
      borderTopRightRadius: 20
    },
    icons: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
  
      elevation: 6,
      backgroundColor: "white",
      justifyContent: "center",
      borderRadius: 8,
      margin: 8,
      alignItems: "center",
      // padding:20,
      height: 55,
      width: 72
    },
  
    filterLeft: {
  
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
  
      elevation: 6,
      backgroundColor: "white",
      height: 45,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginRight: 0,
      marginLeft: 10,
      width: 167,
  
    },
    filterRight: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
  
      elevation: 6,
      backgroundColor: "white",
      height: 45,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 0,
      flexDirection: "row",
      marginRight: 10,
      width: 167
    },
    scroll: {
      width: 300,
      height: 130,
      margin: 10,
      borderRadius: 8,
    },
    slide: {
      width: 360,
      height: 180,
      borderRadius: 4,
    }
  
  });
  
  const logo = {
    uri: "https://i.imgur.com/nvGdTvi.png"
  };
  const slide1 = {
    uri: "https://i.imgur.com/bJ3pUmL.png"
  };
  const slide2 = {
    uri: "https://i.imgur.com/uTdrnu1.png"
  };
  const slide3 = {
    uri: "https://i.imgur.com/Q1TGRw3.png",
  };
  const scroll1 = {
    uri: 'https://i.imgur.com/zf4Krid.png',
  };
  const scroll2 = {
    uri: 'https://i.imgur.com/4KR4P55.png',
  };
  const scroll3 = {
    uri: 'https://i.imgur.com/AtdFcei.png',
  };
  