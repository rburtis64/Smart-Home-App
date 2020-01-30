import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Ellipse } from "react-native-svg";

export default class Homepage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.FloorPlanStackStack}>
          <View style={styles.FloorPlanStack}>
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
            <View style={styles.TopBar}>
              <View style={styles.SideBarStackRow}>
                <View style={styles.SideBarStack}>
                  <View style={styles.SideBar}>
                    <View style={styles.SensorsStack}>
                      <Text style={styles.Sensors}>Sensors</Text>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("SensorsPage")
                        }
                        style={styles.SensorButton}
                      />
                    </View>
                    <Text style={styles.History}>History</Text>
                  </View>
                  <View style={styles.MenuRect}>
                    <Text style={styles.Menu}>Menu</Text>
                  </View>
                </View>
                <View style={styles.Back}>
                  <View style={styles.BackiconStack}>
                    <MaterialCommunityIconsIcon
                      name="keyboard-backspace"
                      style={styles.Backicon}
                    />
                    <TouchableOpacity
                      onPress={() => this.props.navigation.goBack()}
                      style={styles.BackButton}
                    />
                  </View>
                </View>
                <View style={styles.Home}>
                  <View style={styles.HomeIconStack}>
                    <MaterialCommunityIconsIcon
                      name="home"
                      style={styles.HomeIcon}
                    />
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate("Homepage")}
                      style={styles.button}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
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
    flex: 1
  },
  FloorPlan: {
    top: 0,
    left: 280,
    width: 1167,
    height: 1080,
    position: "absolute",
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
  TopBar: {
    top: 0,
    width: 1920,
    height: 73,
    backgroundColor: "rgba(3,0,255,1)",
    position: "absolute",
    left: 0,
    flexDirection: "row"
  },
  SideBar: {
    top: 0,
    left: 0,
    width: 281,
    height: 1083,
    backgroundColor: "rgba(3,0,255,1)",
    position: "absolute",
    opacity: 1
  },
  Sensors: {
    top: 12,
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0
  },
  SensorButton: {
    top: 0,
    left: 1,
    width: 178,
    height: 39,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },
  SensorsStack: {
    width: 181,
    height: 39,
    marginTop: 88,
    marginLeft: 15
  },
  History: {
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 40,
    marginLeft: 15
  },
  MenuRect: {
    top: 0,
    left: 2,
    width: 280,
    height: 73,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    opacity: 0.3
  },
  Menu: {
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 30,
    marginLeft: 76
  },
  SideBarStack: {
    width: 282,
    height: 1083
  },
  Back: {
    width: 40,
    height: 40,
    marginLeft: 1508,
    marginTop: 17
  },
  Backicon: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "grey",
    fontSize: 40
  },
  BackButton: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  BackiconStack: {
    width: 40,
    height: 40
  },
  Home: {
    width: 40,
    height: 40,
    marginLeft: 12,
    marginTop: 17
  },
  HomeIcon: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "grey",
    fontSize: 40
  },
  button: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  HomeIconStack: {
    width: 40,
    height: 40
  },
  SideBarStackRow: {
    height: 1083,
    flexDirection: "row",
    flex: 1,
    marginRight: 40,
    marginLeft: -2
  },
  FloorPlanStack: {
    top: 0,
    left: 0,
    width: 1920,
    height: 1080,
    position: "absolute"
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
    top: 109,
    left: 1558,
    width: 289,
    height: 289,
    position: "absolute"
  },
  FloorPlanStackStack: {
    width: 1920,
    height: 1080
  }
});
