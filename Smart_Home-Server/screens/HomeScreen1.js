import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

export default class Homepage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.FloorPlanRow}>
          <ImageBackground
            source={require("../assets/images/Floorplan2.svg")}
            resizeMode="contain"
            style={styles.FloorPlan}
          >
            <View style={styles.Lights}>
              <Image
                source={require("../assets/images/light_on2.svg")}
                resizeMode="contain"
                style={styles.GarageLight}
              />
              <View style={styles.WashroomLightRow}>
                <Image
                  source={require("../assets/images/light_on2.svg")}
                  resizeMode="contain"
                  style={styles.WashroomLight}
                />
                <Image
                  source={require("../assets/images/light_on2.svg")}
                  resizeMode="contain"
                  style={styles.KitchenLight}
                />
              </View>
              <Image
                source={require("../assets/images/light_on2.svg")}
                resizeMode="contain"
                style={styles.MasterBathLight}
              />
              <Image
                source={require("../assets/images/light_on2.svg")}
                resizeMode="contain"
                style={styles.DiningLight}
              />
              <Image
                source={require("../assets/images/light_on2.svg")}
                resizeMode="contain"
                style={styles.MasterLight}
              />
              <Image
                source={require("../assets/images/light_on2.svg")}
                resizeMode="contain"
                style={styles.LivingLight}
              />
              <Image
                source={require("../assets/images/light_on2.svg")}
                resizeMode="contain"
                style={styles.Bedroom1Light}
              />
              <Image
                source={require("../assets/images/light_on2.svg")}
                resizeMode="contain"
                style={styles.BathLight}
              />
              <Image
                source={require("../assets/images/light_on2.svg")}
                resizeMode="contain"
                style={styles.Bedroom2Light}
              />
            </View>
          </ImageBackground>
          <View style={styles.ellipse2Stack}>
            <Svg viewBox="0 0 289.33 289.33" style={styles.ellipse2}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(3,0,255,1)"
                stroke="rgba(230, 230, 230,1)"
                fillOpacity={1}
                cx={145}
                cy={145}
                rx={144}
                ry={144}
              />
            </Svg>
            <Svg viewBox="0 0 275.33 275.33" style={styles.ellipse}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(230, 230, 230,1)"
                stroke="rgba(230, 230, 230,1)"
                fillOpacity={1}
                cx={138}
                cy={138}
                rx={137}
                ry={137}
              />
            </Svg>
            <Text style={styles.text}>60</Text>
            <Text style={styles.text2}>°C</Text>
            <Image
              source={require("../assets/images/snowflakeon.svg")}
              resizeMode="contain"
              style={styles.image}
            />
            <Image
              source={require("../assets/images/fireon.svg")}
              resizeMode="contain"
              style={styles.image2}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  FloorPlan: {
    width: 1167,
    height: 1080,
    overflow: "visible"
  },
  Lights: {
    width: 35,
    height: 35,
    marginTop: 334,
    marginLeft: 573
  },
  GarageLight: {
    width: 35,
    height: 35,
    marginTop: -130,
    marginLeft: -66
  },
  WashroomLight: {
    width: 35,
    height: 35
  },
  KitchenLight: {
    width: 35,
    height: 35,
    marginLeft: 138
  },
  WashroomLightRow: {
    height: 35,
    flexDirection: "row",
    marginTop: 166,
    marginLeft: -173
  },
  MasterBathLight: {
    width: 35,
    height: 35,
    marginTop: 74,
    marginLeft: -130
  },
  DiningLight: {
    width: 35,
    height: 35,
    marginTop: 29,
    marginLeft: 72
  },
  MasterLight: {
    width: 35,
    height: 35,
    marginTop: 18,
    marginLeft: -173
  },
  LivingLight: {
    width: 35,
    height: 35,
    marginTop: 88,
    marginLeft: 89
  },
  Bedroom1Light: {
    width: 35,
    height: 35,
    marginTop: 29,
    marginLeft: -215
  },
  BathLight: {
    width: 35,
    height: 35,
    marginTop: 16,
    marginLeft: -95
  },
  Bedroom2Light: {
    width: 35,
    height: 35,
    marginTop: 39,
    marginLeft: -216
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 289,
    height: 289,
    position: "absolute"
  },
  ellipse: {
    top: 7,
    left: 7,
    width: 275,
    height: 275,
    position: "absolute"
  },
  text: {
    top: 95,
    left: 61,
    color: "#121212",
    position: "absolute",
    fontSize: 100,
    fontFamily: "abel-regular"
  },
  text2: {
    top: 95,
    left: 164,
    color: "#121212",
    position: "absolute",
    fontSize: 70,
    fontFamily: "abel-regular"
  },
  image: {
    top: 195,
    left: 108,
    width: 73,
    height: 73,
    position: "absolute"
  },
  image2: {
    top: 25,
    left: 109,
    width: 73,
    height: 73,
    position: "absolute"
  },
  ellipse2Stack: {
    width: 289,
    height: 289,
    marginLeft: 111,
    marginTop: 109
  },
  FloorPlanRow: {
    height: 1080,
    flexDirection: "row",
    flex: 1,
    marginRight: 73,
    marginLeft: 280
  }
});
