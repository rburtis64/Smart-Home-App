import React, { Component } from "reactn";
import reactn, {useGlobal} from "react";
import { setGlobal } from 'reactn';
import { StyleSheet, View, Text, Image } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import on from "../assets/images/light_on2.svg"
import off from "../assets/images/light_off.svg"
import open from "../assets/images/closed-filled-rectangular-door.svg"
import closed from "../assets/images/opened-filled-door.svg"
import lamp_on from "../assets/images/lamp_on.svg"
import lamp_off from "../assets/images/lamp.svg"
import TV_on from "../assets/images/television_on.svg"
import TV_off from "../assets/images/television.svg"
import Vent_on from "../assets/images/Ventilation_on.svg"
import Vent_off from "../assets/images/Ventilation.svg"
import dryer_on from "../assets/images/dryer_on.svg"
import dryer_off from "../assets/images/dryer.svg"
import WM_on from "../assets/images/washing-machine_on.svg"
import WM_off from "../assets/images/washing-machine.svg"
import stove_on from "../assets/images/stove_on.svg"
import stove_off from "../assets/images/stove.svg"
import oven_on from "../assets/images/oven_on.svg"
import oven_off from "../assets/images/oven.svg"
import Micro_on from "../assets/images/microwave_on.svg"
import Micro_off from "../assets/images/microwave.svg"
import DW_on from "../assets/images/dishwasher_on.svg"
import DW_off from "../assets/images/dishwasher.svg"
import AC_on from "../assets/images/snowflake_on.svg"
import AC_off from "../assets/images/snowflake.svg"
import heat_on from "../assets/images/fire_on.svg"
import heat_off from "../assets/images/fire.svg"
import fan_on from "../assets/images/fan_on.svg"
import fan_off from "../assets/images/fan.svg"
import window_o from "../assets/images/windows_open.svg"
import window_c from "../assets/images/window.svg"
import GLOBAL from '../components/global.js'
import { ReactNComponent } from "reactn/build/components";


export default class SensorsPage extends Component {
  constructor(props){
    super(props)
    
    setGlobal({
      glight: true,
      b1light : true,
      b2light : true,
      livlight : true,
      bath1light : true,
      masterbedlight : true,
      wlight : true,
      klight : true,
      Mbathlight : true,
      Dlight : true,
      FDoor : true,
      ODoor : true,
      GDoor : true,
      Bed1Lamp : true,
      Bed1Lamp1 : true,
      Bed2Lamp : true,
      Bed2Lamp1 : true,
      MasterBedLamp : true,
      MasterBedLamp1 : true,
      LivingLamp : true,
      LivingLamp1 : true,
      MasterTV: true,
      LivingTV: true,
      MBathV: true,
      BathV: true,
      dryer: true,
      WM: true,
      stove: true,
      oven: true,
      Micro: true,
      DW: true,
      AC: true,
      heat: true,
      fan: true,
      KitchenW: true,
      MasterW1: true,
      LivingW1: true,
      MasterW2: true,
      Bed1W: true,
      Bed2W: true,
      LivingW2: true,
    })
  }
  render(){
  return (
    <div> 
    <View style={styles.container}>
      <View style={styles.text13Row}>
        <Text style={styles.text13}>Kitchen</Text>
        <Text style={styles.text26}>Bedroom2</Text>
      </View>
      <View style={styles.imageRow}>
        <Image
          source={require("../assets/images/television.svg")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        />
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
        <View style={styles.image2Column}>
          <Image
            source={this.global.DW ? DW_on : DW_off}
            resizeMode="contain"
            style={styles.DishWasher}
            imageStyle={styles.DishWasher_imageStyle}
          />
          <View style={styles.ovenStack}>
            <Image
              source={this.global.oven ? oven_on : oven_off}
              resizeMode="contain"
              style={styles.oven}
              imageStyle={styles.oven_imageStyle}
            />
            <Image
              source={this.global.Micro ? Micro_on : Micro_off}
              resizeMode="contain"
              style={styles.Micro}
              imageStyle={styles.Micro_imageStyle}
            />
            <Image
              source={this.global.stove ? stove_on : stove_off}
              resizeMode="contain"
              style={styles.stove}
              imageStyle={styles.stove_imageStyle}
            />
          </View>
          <Image
            source={this.global.dryer ? dryer_on : dryer_off}
            resizeMode="contain"
            style={styles.dryer}
            imageStyle={styles.dryer_imageStyle}
          />
        </View>
        <View style={styles.text14Column}>
          <Text style={styles.text14}>Dishwasher</Text>
          <Text style={styles.text15}>Oven</Text>
          <Text style={styles.text16}>Microwave</Text>
          <Text style={styles.text17}>Stove</Text>
          <Text style={styles.text18}>Washroom</Text>
          <Text style={styles.text19}>Dryer</Text>
        </View>
        <View style={styles.Bed2Lamp1StackColumn}>
          <View style={styles.Bed2Lamp1Stack}>
            <Image
              source={this.global.Bed2Lamp1 ? lamp_on : lamp_off}
              resizeMode="contain"
              style={styles.Bed2Lamp1}
              imageStyle={styles.Bed2Lamp1_imageStyle}
            />
            <Image
              source={this.global.Bed2Lamp ? lamp_on : lamp_off}
              resizeMode="contain"
              style={styles.Bed2Lamp2}
              imageStyle={styles.Bed2Lamp2_imageStyle}
            />
          </View>
          <View style={styles.MBLamp1Stack}>
            <Image
              source={this.global.MasterBedLamp ? lamp_on : lamp_off}
              resizeMode="contain"
              style={styles.MBLamp1}
              imageStyle={styles.MBLamp1_imageStyle}
            />
            <Image
              source={this.global.MasterBedLamp1 ? lamp_on : lamp_off}
              resizeMode="contain"
              style={styles.MBLamp2}
              imageStyle={styles.MBLamp2_imageStyle}
            />
            <Image
              source={this.global.MasterTV ? TV_on : TV_off}
              resizeMode="contain"
              style={styles.MB_TV}
              imageStyle={styles.MB_TV_imageStyle}
            />
          </View>
        </View>
        <View style={styles.text27Column}>
          <Text style={styles.text27}>Lamp 1</Text>
          <Text style={styles.text28}>Lamp 2</Text>
          <Text style={styles.text29}>Master Bedroom</Text>
          <Text style={styles.text30}>Lamp 1</Text>
          <Text style={styles.text31}>Lamp 2</Text>
          <Text style={styles.text32}>TV</Text>
        </View>
        <View style={styles.WindowText}>
          <Text style={styles.text38}>Windows</Text>
          <Text style={styles.text42}>Bedroom 1</Text>
          <Text style={styles.text40}>Bedroom 2</Text>
          <Text style={styles.MasterBed1}>Master Bedroom 1</Text>
          <Text style={styles.LivingWindow1}>Living Room 1</Text>
          <Text style={styles.text45}>Kitchen</Text>
          <Text style={styles.LivingWindow2}>Living Room 2</Text>
          <Text style={styles.MasterBed2}>Master Bedroom 2</Text>
        </View>
      </View>
      <View style={styles.Sensor_LightsRow}>
        <View style={styles.Sensor_Lights}>
          <Image
            source={this.global.b1light ? on : off}
            resizeMode="contain"
            style={styles.Bed1Light}
            imageStyle={styles.Bed1Light_imageStyle}
          />
          <Image
            source={this.global.b2light ? on : off}
            resizeMode="contain"
            style={styles.Bed2Light}
            imageStyle={styles.Bed2Light_imageStyle}
          />
          <Image
            source={this.global.bath1light ? on : off}
            resizeMode="contain"
            style={styles.BathLight}
            imageStyle={styles.BathLight_imageStyle}
          />
          <Image
            source={this.global.Dlight ? on : off}
            resizeMode="contain"
            style={styles.DineLight}
            imageStyle={styles.DineLight_imageStyle}
          />
          <Image
            source={this.global.glight ? on : off}
            resizeMode="contain"
            style={styles.GarageLight}
            imageStyle={styles.GarageLight_imageStyle}
          />
          <Image
            source={this.global.klight ? on : off}
            resizeMode="contain"
            style={styles.KitchenLight}
            imageStyle={styles.KitchenLight_imageStyle}
          />
          <Image
            source={this.global.livlight ? on : off}
            resizeMode="contain"
            style={styles.LivLight}
            imageStyle={styles.LivLight_imageStyle}
          />
          <Image
            source={this.global.Mbathlight ? on : off}
            resizeMode="contain"
            style={styles.MBathLight}
            imageStyle={styles.MBathLight_imageStyle}
          />
          <Image
            source={this.global.masterbedlight ? on : off}
            resizeMode="contain"
            style={styles.MBedLight}
            imageStyle={styles.MBedLight_imageStyle}
          />
          <Image
            source={this.global.wlight ? on : off}
            resizeMode="contain"
            style={styles.WashLight}
            imageStyle={styles.WashLight_imageStyle}
          />
        </View>
        <View style={styles.image7Column}>
          <Image
            source={this.global.WM ? WM_on : WM_off}
            resizeMode="contain"
            style={styles.image7}
            imageStyle={styles.image7_imageStyle}
          />
          <Image
            source={this.global.ODoor ? open : closed}
            resizeMode="contain"
            style={styles.Backdoor}
            imageStyle={styles.Backdoor_imageStyle}
          />
          <Image
            source={this.global.GDoor ? open : closed}
            resizeMode="contain"
            style={styles.Garagedoor}
            imageStyle={styles.Garagedoor_imageStyle}
          />
          <View style={styles.image10Stack}>
            <Image
              source={this.global.Bed1Lamp ? lamp_on : lamp_off}
              resizeMode="contain"
              style={styles.Bed1Lamp}
              imageStyle={styles.Bed1Lamp_imageStyle}
            />
            <Image
              source={this.global.Bed1Lamp1 ? lamp_on : lamp_off}
              resizeMode="contain"
              style={styles.Bed1Lamp1}
              imageStyle={styles.Bed1Lamp1_imageStyle}
            />
          </View>
        </View>
        <View style={styles.text20Column}>
          <Text style={styles.text20}>Washer</Text>
          <View style={styles.text21Stack}>
            <Text style={styles.text21}>Backdoor</Text>
            <View style={styles.text22Stack}>
              <Text style={styles.text22}>Door to Garage</Text>
              <Image
                source={this.global.LivingLamp1 ? lamp_on : lamp_off}
                resizeMode="contain"
                style={styles.LivingLamp1}
                imageStyle={styles.LivingLamp1_imageStyle}
              />
              <Image
                source={this.global.LivingTV ? TV_on : TV_off}
                resizeMode="contain"
                style={styles.LivingTV}
                imageStyle={styles.LivingTV_imageStyle}
              />
              <Image
                source={this.global.FDoor ? open : closed}
                resizeMode="contain"
                style={styles.FrontDoor}
                imageStyle={styles.FrontDoor_imageStyle}
              />
            </View>
            <Text style={styles.text23}>Bedroom 1</Text>
            <Text style={styles.text24}>Lamp 1</Text>
            <Text style={styles.text25}>Lamp 2</Text>
            <Image
              source={this.global.LivingLamp ? lamp_on : lamp_off}
              resizeMode="contain"
              style={styles.LivingLamp}
              imageStyle={styles.LivingLamp_imageStyle}
            />
          </View>
        </View>
        <View style={styles.text33Column}>
          <Text style={styles.text33}>Living Room</Text>
          <Text style={styles.text34}>Lamp 1</Text>
          <Text style={styles.text35}>Lamp 2</Text>
          <Text style={styles.text36}>TV</Text>
          <Text style={styles.text37}>Front Door</Text>
        </View>
        <View style={styles.Windows}>
          <Image
            source={this.global.Bed1W ? window_c : window_o}
            resizeMode="contain"
            style={styles.Bed1W}
            imageStyle={styles.Bed1W_imageStyle}
          />
          <Image
            source={this.global.Bed1W ? window_c : window_o}
            resizeMode="contain"
            style={styles.Bed2W}
            imageStyle={styles.Bed2W_imageStyle}
          />
          <Image
            source={this.global.MasterW1 ? window_c : window_o}
            resizeMode="contain"
            style={styles.MasterWindow1}
            imageStyle={styles.MasterWindow1_imageStyle}
          />
          <Image
            source={this.global.LivingW1 ? window_c : window_o}
            resizeMode="contain"
            style={styles.LivingWin1}
            imageStyle={styles.LivingWin1_imageStyle}
          />
          <Image
            source={this.global.KitchenW ? window_c : window_o}
            resizeMode="contain"
            style={styles.image22}
            imageStyle={styles.image22_imageStyle}
          />
          <Image
            source={this.global.LivingW2 ? window_c : window_o}
            resizeMode="contain"
            style={styles.image21}
            imageStyle={styles.image21_imageStyle}
          />
          <Image
            source={this.global.MasterW2 ? window_c : window_o}
            resizeMode="contain"
            style={styles.image28}
            imageStyle={styles.image28_imageStyle}
          />
        </View>
      </View>
    </View>
    <View style={styles.Ventcontainer}>
      <Text style={styles.ventialtionText}>Ventilation</Text>
      <View style={styles.masterVentRow}>
        <Image
          source={this.global.MBathV ? Vent_on : Vent_off}
          resizeMode="contain"
          style={styles.masterVent}
        ></Image>
        <Text style={styles.masterVentText}>Master Bath</Text>
      </View>
      <View style={styles.bathVentRow}>
        <Image
          source={this.global.BathV ? Vent_on : Vent_off}
          resizeMode="contain"
          style={styles.bathVent}
        ></Image>
        <Text style={styles.bathVentText}>BathRoom</Text>
      </View>
    </View>
    </div>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  text13: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    textDecoration: "underline"
  },
  text26: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    textDecoration: "underline",
    marginLeft: 268
  },
  text13Row: {
    height: 50,
    flexDirection: "row",
    marginTop: 38,
    marginLeft: 587,
    marginRight: 666
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 280
  },
  Text_Lights: {
    width: 255,
    height: 14,
    marginLeft: 694,
    marginTop: 42
  },
  text2: {
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    textDecoration: "underline",
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
  DishWasher: {
    width: 83,
    height: 83,
    marginLeft: 4
  },
  oven: {
    top: 0,
    left: 0,
    width: 83,
    height: 83,
    position: "absolute"
  },
  Micro: {
    top: 77,
    left: 0,
    width: 83,
    height: 83,
    position: "absolute"
  },
  stove: {
    top: 150,
    left: 0,
    width: 83,
    height: 83,
    position: "absolute"
  },
  ovenStack: {
    width: 83,
    height: 233,
    marginTop: 3,
    marginLeft: 4
  },
  dryer: {
    width: 83,
    height: 83,
    marginTop: 71
  },
  image2Column: {
    width: 87,
    marginLeft: 111,
    marginTop: 1,
    marginBottom: 6
  },
  text14: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    marginLeft: 12
  },
  text15: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    marginTop: 36,
    marginLeft: 12
  },
  text16: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    marginTop: 27,
    marginLeft: 12
  },
  text17: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    marginTop: 22,
    marginLeft: 12
  },
  text18: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    textDecoration: "underline",
    marginTop: 27
  },
  text19: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    marginTop: -5
  },
  text14Column: {
    width: 272,
    marginLeft: 22,
    marginTop: 18,
    marginBottom: 16
  },
  Bed2Lamp1: {
    top: 0,
    left: 0,
    width: 83,
    height: 83,
    position: "absolute"
  },
  Bed2Lamp2: {
    top: 79,
    left: 0,
    width: 83,
    height: 83,
    position: "absolute"
  },
  Bed2Lamp1Stack: {
    width: 83,
    height: 162
  },
  MBLamp1: {
    top: 0,
    left: 0,
    width: 83,
    height: 83,
    position: "absolute"
  },
  MBLamp2: {
    top: 83,
    left: 0,
    width: 83,
    height: 83,
    position: "absolute"
  },
  MB_TV: {
    top: 166,
    left: 0,
    width: 83,
    height: 83,
    position: "absolute"
  },
  MBLamp1Stack: {
    width: 83,
    height: 249,
    marginTop: 67
  },
  Bed2Lamp1StackColumn: {
    width: 83,
    marginLeft: 71,
    marginBottom: 2
  },
  text27: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
  },
  text28: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    marginTop: 29
  },
  text29: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    textDecoration: "underline",
    marginTop: 0
  },
  text30: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    marginTop: 15
  },
  text31: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    marginTop: 33
  },
  text32: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    marginTop: 30
  },
  text27Column: {
    width: 372,
    marginLeft: 22,
    marginTop: 12,
    marginBottom: 22
  },
  WindowText: {
    width: 255,
    height: 14,
    marginLeft: 149,
    marginTop: 21
  },
  text38: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    textDecoration: "underline",
    marginTop: -87,
    marginLeft: -49
  },
  text42: {
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 37
  },
  text40: {
    width: 255,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 69
  },
  text39: {
    width: 231,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 67
  },
  MasterBed1: {
    width: 375,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 68
  },
  LivingWindow1: {
    width: 306,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 67
  },
  text45: {
    width: 179,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 68
  },
  LivingWindow2: {
    width: 306,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginTop: 68,
    marginLeft: -8
  },
  text47: {
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
  MasterBed2: {
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
  text49: {
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
  imageRow: {
    height: 480,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: -794,
    marginRight: 121
  },
  Sensor_Lights: {
    width: 71,
    height: 70,
    marginTop: 24
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
  image7: {
    width: 83,
    height: 83
  },
  Backdoor: {
    width: 83,
    height: 83,
    marginTop: 6
  },
  Garagedoor: {
    width: 83,
    height: 83,
    marginTop: 6
  },
  Bed1Lamp: {
    top: 74,
    left: 0,
    width: 83,
    height: 83,
    position: "absolute"
  },
  Bed1Lamp1: {
    top: 0,
    left: 0,
    width: 83,
    height: 83,
    position: "absolute"
  },
  image10Stack: {
    width: 83,
    height: 157,
    marginTop: 45
  },
  image7Column: {
    width: 83,
    marginLeft: 395
  },
  text20: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    marginLeft: 12
  },
  text21: {
    top: 33,
    left: 12,
    color: "#121212",
    position: "absolute",
    fontSize: 50,
    fontFamily: "roboto-regular"
  },
  text22: {
    top: 39,
    left: 0,
    color: "#121212",
    position: "absolute",
    fontSize: 50,
    fontFamily: "roboto-regular"
  },
  LivingLamp1: {
    top: 0,
    left: 335,
    width: 83,
    height: 83,
    position: "absolute"
  },
  LivingTV: {
    top: 83,
    left: 335,
    width: 83,
    height: 83,
    position: "absolute"
  },
  FrontDoor: {
    top: 166,
    left: 335,
    width: 83,
    height: 83,
    position: "absolute"
  },
  text22Stack: {
    top: 83,
    left: 12,
    width: 418,
    height: 249,
    position: "absolute"
  },
  text23: {
    top: 188,
    left: 1,
    color: "#121212",
    position: "absolute",
    fontSize: 50,
    fontFamily: "roboto-regular",
    textDecoration: "underline"
  },
  text24: {
    top: 249,
    left: 0,
    color: "#121212",
    position: "absolute",
    fontSize: 50,
    fontFamily: "roboto-regular"
  },
  text25: {
    top: 324,
    left: 0,
    color: "#121212",
    position: "absolute",
    fontSize: 50,
    fontFamily: "roboto-regular"
  },
  LivingLamp: {
    top: 0,
    left: 347,
    width: 83,
    height: 83,
    position: "absolute"
  },
  text21Stack: {
    width: 430,
    height: 374,
    marginTop: 6
  },
  text20Column: {
    width: 430,
    marginLeft: 22,
    marginTop: 17,
    marginBottom: 16
  },
  text33: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    textDecoration: "underline"
  },
  text34: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    marginTop: 28
  },
  text35: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    marginTop: 33
  },
  text36: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    marginTop: 15
  },
  text37: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    marginTop: 25
  },
  text33Column: {
    width: 275,
    marginLeft: 22,
    marginTop: 7,
    marginBottom: 74
  },
  Windows: {
    width: 71,
    height: 70,
    marginLeft: 146,
    marginTop: 4
  },
  Bed1W: {
    width: 71,
    height: 70,
    marginTop: -491
  },
  Bed2W: {
    width: 71,
    height: 70,
    marginTop: 13
  },
  image25: {
    width: 71,
    height: 70,
    marginTop: 12
  },
  MasterWindow1: {
    width: 71,
    height: 70,
    marginTop: 11
  },
  LivingWin1: {
    width: 71,
    height: 70,
    marginTop: 12
  },
  image22: {
    width: 71,
    height: 70,
    marginTop: 11
  },
  image21: {
    width: 71,
    height: 70,
    marginTop: 12
  },
  image28: {
    width: 71,
    height: 70,
    marginTop: 12
  },
  image29: {
    width: 71,
    height: 70,
    marginTop: 11
  },
  oven0: {
    width: 71,
    height: 70,
    marginTop: 12
  },
  Sensor_LightsRow: {
    height: 463,
    flexDirection: "row",
    marginRight: 405
  },
  Ventcontainer: {
    width: 377,
    height: 220,
    left: 1450,
    top: -350
  },
  ventialtionText: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "roboto-regular",
    textDecoration: "underline",
    marginLeft: 35
  },
  masterVent: {
    width: 71,
    height: 71
  },
  masterVentText: {
    width: 277,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginLeft: 29,
    marginTop: 30
  },
  masterVentRow: {
    height: 71,
    flexDirection: "row",
    marginTop: 14
  },
  bathVent: {
    width: 71,
    height: 71
  },
  bathVentText: {
    width: 277,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0,
    marginLeft: 29,
    marginTop: 28
  },
  bathVentRow: {
    height: 71,
    flexDirection: "row",
    marginTop: 14
  }
});

