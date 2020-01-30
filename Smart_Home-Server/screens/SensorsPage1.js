import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default class SensorsPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rectRow}>
          <View style={styles.rect}>
            <View style={styles.Text_Lights}>
              <Text style={styles.text2}>Lights</Text>
              <Text style={styles.text3}>Bedroom 1</Text>
              <Text style={styles.text4}>Bedroom 2</Text>
              <Text style={styles.text5}>Bathroom</Text>
              <Text style={styles.text6}>Dining Room</Text>
              <Text style={styles.text7}>Garage</Text>
              <Text style={styles.text8}>Kitchen</Text>
              <Text style={styles.text9}>Living Room</Text>
              <Text style={styles.text10}>Master Bath</Text>
              <Text style={styles.text11}>Master Bedroom</Text>
              <Text style={styles.text12}>Washroom</Text>
            </View>
            <View style={styles.Sensor_Lights}>
              <Image
                source={require("../assets/images/light_on3.svg")}
                resizeMode="contain"
                style={styles.Bed1Light}
              />
              <Image
                source={require("../assets/images/light_on3.svg")}
                resizeMode="contain"
                style={styles.Bed2Light}
              />
              <Image
                source={require("../assets/images/light_on3.svg")}
                resizeMode="contain"
                style={styles.BathLight}
              />
              <Image
                source={require("../assets/images/light_on3.svg")}
                resizeMode="contain"
                style={styles.DineLight}
              />
              <Image
                source={require("../assets/images/light_on3.svg")}
                resizeMode="contain"
                style={styles.GarageLight}
              />
              <Image
                source={require("../assets/images/light_on3.svg")}
                resizeMode="contain"
                style={styles.KitchenLight}
              />
              <Image
                source={require("../assets/images/light_on3.svg")}
                resizeMode="contain"
                style={styles.LivLight}
              />
              <Image
                source={require("../assets/images/light_on3.svg")}
                resizeMode="contain"
                style={styles.MBathLight}
              />
              <Image
                source={require("../assets/images/light_on3.svg")}
                resizeMode="contain"
                style={styles.MBedLight}
              />
              <Image
                source={require("../assets/images/light_on3.svg")}
                resizeMode="contain"
                style={styles.WashLight}
              />
            </View>
          </View>
          <Text style={styles.Heading}>Sensors</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  rect: {
    width: 661,
    height: 1080,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0
  },
  Text_Lights: {
    width: 255,
    height: 14,
    marginTop: 146,
    marginLeft: 100
  },
  text2: {
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: -86,
    marginLeft: -79
  },
  text3: {
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 72
  },
  text4: {
    width: 255,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 69
  },
  text5: {
    width: 231,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 67
  },
  text6: {
    width: 295,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 68
  },
  text7: {
    width: 162,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 67
  },
  text8: {
    width: 179,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 68
  },
  text9: {
    width: 277,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 68,
    marginLeft: -8
  },
  text10: {
    width: 277,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 67,
    marginLeft: -8
  },
  text11: {
    width: 375,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 68,
    marginLeft: -8
  },
  text12: {
    width: 263,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 67,
    marginLeft: -8
  },
  Sensor_Lights: {
    width: 71,
    height: 70,
    marginTop: 448
  },
  Bed1Light: {
    width: 71,
    height: 70,
    marginTop: -491
  },
  Bed2Light: {
    width: 71,
    height: 70,
    marginTop: 13
  },
  BathLight: {
    width: 71,
    height: 70,
    marginTop: 12
  },
  DineLight: {
    width: 71,
    height: 70,
    marginTop: 11
  },
  GarageLight: {
    width: 71,
    height: 70,
    marginTop: 12
  },
  KitchenLight: {
    width: 71,
    height: 70,
    marginTop: 11
  },
  LivLight: {
    width: 71,
    height: 70,
    marginTop: 12
  },
  MBathLight: {
    width: 71,
    height: 70,
    marginTop: 12
  },
  MBedLight: {
    width: 71,
    height: 70,
    marginTop: 11
  },
  WashLight: {
    width: 71,
    height: 70,
    marginTop: 12
  },
  Heading: {
    color: "rgba(0,0,0,1)",
    fontSize: 80,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginLeft: 209,
    marginTop: 24
  },
  rectRow: {
    height: 1080,
    flexDirection: "row",
    flex: 1,
    marginRight: 761
  }
});
