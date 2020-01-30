import React, { Component } from "react";
import reactn from 'reactn';
import { setGlobal } from 'reactn';
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { TouchableHighlight } from "react-native-gesture-handler";
import { NavigationActions } from 'react-navigation';
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
import SensorsPage from './SensorsPage'
import GLOBAL from '../components/global.js'
import { ReactNComponent } from "reactn/build/components";




class Homepage extends React.Component {
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
    this.state = {
      count: 72,
    };
    this.togglegImage = this.togglegImage.bind(this);
    this.togglewImage = this.togglewImage.bind(this);
    this.togglelivImage = this.togglelivImage.bind(this);
    this.toggleb1Image = this.toggleb1Image.bind(this);
    this.toggleb2Image = this.toggleb2Image.bind(this);
    this.togglebathImage = this.togglebathImage.bind(this);
    this.togglemasterImage = this.togglemasterImage.bind(this);
    this.togglekImage = this.togglekImage.bind(this);
    this.toggleMbathImage = this.toggleMbathImage.bind(this);
    this.toggleDImage = this.toggleDImage.bind(this);
    this.toggleFDoorImage = this.toggleFDoorImage.bind(this);
    this.toggleODoorImage = this.toggleODoorImage.bind(this);
    this.toggleGDoorImage = this.toggleGDoorImage.bind(this);
    this.toggleBed1LampImage = this.toggleBed1LampImage.bind(this);
    this.toggleBed1Lamp1Image = this.toggleBed1Lamp1Image.bind(this);
    this.toggleBed2LampImage = this.toggleBed2LampImage.bind(this);
    this.toggleBed2Lamp1Image = this.toggleBed2Lamp1Image.bind(this);
    this.toggleMasterBedLampImage = this.toggleMasterBedLampImage.bind(this);
    this.toggleMasterBedLamp1Image = this.toggleMasterBedLamp1Image.bind(this);
    this.toggleLivingLampImage = this.toggleLivingLampImage.bind(this);
    this.toggleLivingLamp1Image = this.toggleLivingLamp1Image.bind(this);
    this.toggleMasterTVImage = this.toggleMasterTVImage.bind(this);
    this.toggleLivingTVImage = this.toggleLivingTVImage.bind(this);
    this.toggleMBathVImage = this.toggleMBathVImage.bind(this);
    this.toggleBathVImage = this.toggleBathVImage.bind(this);
    this.toggledryerImage = this.toggledryerImage.bind(this);
    this.toggleWMImage = this.toggleWMImage.bind(this);
    this.togglestoveImage = this.togglestoveImage.bind(this);
    this.toggleovenImage = this.toggleovenImage.bind(this);
    this.toggleMicroImage = this.toggleMicroImage.bind(this);
    this.toggleDWImage = this.toggleDWImage.bind(this);
    this.toggleheatImage = this.toggleheatImage.bind(this);
    this.toggleACImage = this.toggleACImage.bind(this);
    this.togglefanImage = this.togglefanImage.bind(this);
    this.toggleKitchenWImage = this.toggleKitchenWImage.bind(this);
    this.toggleMasterW1Image = this.toggleMasterW1Image.bind(this);
    this.toggleLivingW1Image = this.toggleLivingW1Image.bind(this);
    this.toggleMasterW2Image = this.toggleMasterW2Image.bind(this);
    this.toggleBed1WImage = this.toggleBed1WImage.bind(this);
    this.toggleLivingW2Image = this.toggleLivingW2Image.bind(this);
    this.toggleBed2WImage = this.toggleBed2WImage.bind(this);
    this.incrementCountup = this.incrementCountup.bind(this);
  }
  togglegImage(){ this.setGlobal(global => ({ glight: !global.glight })); }
  togglewImage(){ this.setGlobal(global => ({ wlight: !global.wlight })); }
  toggleb1Image(){ this.setGlobal(global => ({ b1light: !global.b1light })); }
  toggleb2Image(){ this.setGlobal(global => ({ b2light: !global.b2light })); }
  togglelivImage(){this.setGlobal(global => ({ livlight: !global.livlight })); }
  togglebathImage(){ this.setGlobal(global => ({  bath1light: !global.bath1light })); }
  togglemasterImage(){ this.setGlobal(global => ({ masterbedlight: !global.masterbedlight })); }
  togglekImage(){ this.setGlobal(global => ({ klight: !global.klight })); }
  toggleMbathImage(){ this.setGlobal(global => ({ Mbathlight: !global.Mbathlight })); }
  toggleDImage(){ this.setGlobal(global => ({ Dlight: !global.Dlight })); }
  toggleFDoorImage(){ this.setGlobal(global => ({ FDoor: !global.FDoor })); }
  toggleODoorImage(){ this.setGlobal(global => ({ ODoor: !global.ODoor })); }
  toggleGDoorImage(){ this.setGlobal(global => ({ GDoor: !global.GDoor })); }
  toggleBed1LampImage(){ this.setGlobal(global => ({ Bed1Lamp: !global.Bed1Lamp })); }
  toggleBed1Lamp1Image(){ this.setGlobal(global => ({ Bed1Lamp1: !global.Bed1Lamp1 })); }
  toggleBed2LampImage(){ this.setGlobal(global => ({ Bed2Lamp: !global.Bed2Lamp })); }
  toggleBed2Lamp1Image(){ this.setGlobal(global => ({ Bed2Lamp1: !global.Bed2Lamp1 })); }
  toggleMasterBedLampImage(){ this.setGlobal(global => ({ MasterBedLamp: !global.MasterBedLamp })); }
  toggleMasterBedLamp1Image(){ this.setGlobal(global => ({ MasterBedLamp1: !global.MasterBedLamp1 })); }
  toggleLivingLampImage(){ this.setGlobal(global => ({ LivingLamp: !global.LivingLamp })); }
  toggleLivingLamp1Image(){ this.setGlobal(global => ({ LivingLamp1: !global.LivingLamp1 })); }
  toggleMasterTVImage(){ this.setGlobal(global => ({ MasterTV: !global.MasterTV })); }
  toggleLivingTVImage(){ this.setGlobal(global => ({ LivingTV: !global.LivingTV })); }
  toggleMBathVImage(){ this.setGlobal(global => ({ MBathV: !global.MBathV })); }
  toggleBathVImage(){ this.setGlobal(global => ({ BathV: !global.BathV })); }
  toggledryerImage(){ this.setGlobal(global => ({ dryer: !global.dryer })); }
  toggleWMImage(){ this.setGlobal(global => ({ WM: !global.WM }));}
  togglestoveImage(){ this.setGlobal(global => ({ stove: !global.stove }));}
  toggleovenImage(){ this.setGlobal(global => ({ oven: !global.oven }));}
  toggleDWImage(){ this.setGlobal(global => ({ DW: !global.DW }));}
  toggleMicroImage(){ this.setGlobal(global => ({ Micro: !global.Micro }));}
  toggleACImage(){ this.setGlobal(global => ({ AC: !global.AC }));}
  toggleheatImage(){ this.setGlobal(global => ({ heat: !global.heat }));}
  togglefanImage(){ this.setGlobal(global => ({ fan: !global.fan }));}
  toggleKitchenWImage(){ this.setGlobal(global => ({ KitchenW: !global.KitchenW }));}
  toggleMasterW1Image(){ this.setGlobal(global => ({ MasterW1: !global.MasterW1 }));}
  toggleLivingW1Image(){ this.setGlobal(global => ({ LivingW1: !global.LivingW1 }));}
  toggleMasterW2Image(){ this.setGlobal(global => ({ MasterW2: !global.MasterW2 }));}
  toggleBed1WImage(){ this.setGlobal(global => ({ Bed1W: !global.Bed1W }));}
  toggleLivingW2Image(){ this.setGlobal(global => ({ LivingW2: !global.LivingW2 }));}
  toggleBed2WImage(){ this.setGlobal(global => ({ Bed2W: !global.Bed2W }));}
  incrementCountup = () =>{ this.setState(({count: this.state.count + 1}));}
  incrementCountdown = () =>{ this.setState(({count: this.state.count - 1}));}

  render(){
    return (
      <div>
      <View style={styles.container}>
        <View style={styles.FloorPlanStackRow}>
          <View style={styles.FloorPlanStack}>
            <ImageBackground
              source={require("../assets/images/Floorplan2.svg")}
              resizeMode="contain"
              style={styles.FloorPlan}
              imageStyle={styles.FloorPlan_imageStyle}
            >
              <View style={styles.GarageDoorRow}>
                <Image
                  source={this.global.GDoor ? open : closed}
                  onClick={this.toggleGDoorImage}
                  resizeMode="contain"
                  style={styles.GarageDoor}
                  imageStyle={styles.GarageDoor_imageStyle}
                />
                <View style={styles.Lights}>
                  <Image
                    source={this.global.glight ? on : off}
                    onClick={this.togglegImage}
                    resizeMode="contain"
                    style={styles.GarageLight}
                    imageStyle={styles.GarageLight_imageStyle}
                  />
                  <View style={styles.WashroomLightRow}>
                    <Image
                      source={this.global.wlight ? on : off}
                      onClick={this.togglewImage}
                      resizeMode="contain"
                      style={styles.WashroomLight}
                      imageStyle={styles.WashroomLight_imageStyle}
                    />
                    <Image
                      source={this.global.klight ? on : off}
                      onClick={this.togglekImage}
                      resizeMode="contain"
                      style={styles.KitchenLight}
                      imageStyle={styles.KitchenLight_imageStyle}
                    />
                  </View>
                  <Image
                    source={this.global.Mbathlight ? on : off}
                    onClick={this.toggleMbathImage}
                    resizeMode="contain"
                    style={styles.MasterBathLight}
                    imageStyle={styles.MasterBathLight_imageStyle}
                  />
                  <Image
                    source={this.global.Dlight ? on : off}
                    onClick={this.toggleDImage}
                    resizeMode="contain"
                    style={styles.DiningLight}
                    imageStyle={styles.DiningLight_imageStyle}
                  />
                  <Image
                    source={this.global.masterbedlight ? on : off}
                    onClick={this.togglemasterImage}
                    resizeMode="contain"
                    style={styles.MasterLight}
                    imageStyle={styles.MasterLight_imageStyle}
                  />
                  <Image
                    source={this.global.livlight ? on : off}
                    onClick={this.togglelivImage}
                    resizeMode="contain"
                    style={styles.LivingLight}
                    imageStyle={styles.LivingLight_imageStyle}
                  />
                  <Image
                    source={this.global.b1light ? on : off}
                    onClick={this.toggleb1Image}
                    resizeMode="contain"
                    style={styles.Bedroom1Light}
                    imageStyle={styles.Bedroom1Light_imageStyle}
                  />
                  <Image
                    source={this.global.bath1light ? on : off}
                    onClick={this.togglebathImage}
                    resizeMode="contain"
                    style={styles.BathLight}
                    imageStyle={styles.BathLight_imageStyle}
                  />
                  <Image
                    source={this.global.b2light ? on : off}
                    onClick={this.toggleb2Image}
                    resizeMode="contain"
                    style={styles.Bedroom2Light}
                    imageStyle={styles.Bedroom2Light_imageStyle}
                  />
                </View>
                </View>
              <View style={styles.OutsideDoorRow}>
                <Image
                  source={this.global.ODoor ? open : closed}
                  onClick={this.toggleODoorImage}
                  resizeMode="contain"
                  style={styles.OutsideDoor}
                  imageStyle={styles.OutsideDoor_imageStyle}
                />
                <Image
                  source={this.global.dryer ? dryer_on : dryer_off}
                  onClick={this.toggledryerImage}
                  resizeMode="contain"
                  style={styles.dryer}
                  imageStyle={styles.dryer_imageStyle}
                />
                <Image
                  source={this.global.WM ? WM_on : WM_off}
                  onClick={this.toggleWMImage}
                  resizeMode="contain"
                  style={styles.WM}
                  imageStyle={styles.WM_imageStyle}
                />
                <Image
                  source={this.global.oven ? oven_on : oven_off}
                  onClick={this.toggleovenImage}
                  resizeMode="contain"
                  style={styles.oven}
                  imageStyle={styles.oven_imageStyle}
                />
                <Image
                  source={this.global.stove ? stove_on : stove_off}
                  onClick={this.togglestoveImage}
                  resizeMode="contain"
                  style={styles.stove}
                  imageStyle={styles.stove_imageStyle}
                />
                <Image
                  source={this.global.Micro ? Micro_on : Micro_off}
                  onClick={this.toggleMicroImage}
                  resizeMode="contain"
                  style={styles.microwave}
                  imageStyle={styles.microwave_imageStyle}
                />
                <Image
                  source={this.global.DW? DW_on : DW_off}
                  onClick={this.toggleDWImage}
                  resizeMode="contain"
                  style={styles.dishwasher}
                  imageStyle={styles.dishwasher_imageStyle}
                />
              </View>
              <Image
                source={this.global.MBathV ? Vent_on : Vent_off}
                onClick={this.toggleMBathVImage}
                resizeMode="contain"
                style={styles.MBathVent}
                imageStyle={styles.MBathVent_imageStyle}
              />
              <View style={styles.MasterBedLampRow}>
                <Image
                  source={this.global.MasterBedLamp ? lamp_on : lamp_off}
                  onClick={this.toggleMasterBedLampImage}
                  resizeMode="contain"
                  style={styles.MasterBedLamp}
                  imageStyle={styles.MasterBedLamp_imageStyle}
                />
                <Image
                  source={this.global.MasterTV ? TV_on : TV_off}
                  onClick={this.toggleMasterTVImage}
                  resizeMode="contain"
                  style={styles.MasterTV}
                  imageStyle={styles.MasterTV_imageStyle}
                />
                <Image
                  source={this.global.MasterBedLamp1 ? lamp_on : lamp_off}
                  onClick={this.toggleMasterBedLamp1Image}
                  resizeMode="contain"
                  style={styles.MasterBedLamp1}
                  imageStyle={styles.MasterBedLamp1_imageStyle}
                />
                <Image
                  source={this.global.FDoor ? open : closed}
                  onClick={this.toggleFDoorImage}
                  resizeMode="contain"
                  style={styles.FrontDoor}
                  imageStyle={styles.FrontDoor_imageStyle}
                />
              </View>
              <View style={styles.Bed1LampRow}>
                <Image
                  source={this.global.Bed1Lamp ? lamp_on : lamp_off}
                  onClick={this.toggleBed1LampImage}
                  style={styles.Bed1Lamp}
                  imageStyle={styles.Bed1Lamp_imageStyle}
                />
                <Image
                  source={this.global.Bed1Lamp1 ? lamp_on : lamp_off}
                  onClick={this.toggleBed1Lamp1Image}
                  resizeMode="contain"
                  style={styles.Bed1Lamp1}
                  imageStyle={styles.Bed1Lamp1_imageStyle}
                />
                <Image
                  source={this.global.LivingLamp ? lamp_on : lamp_off}
                  onClick={this.toggleLivingLampImage}
                  resizeMode="contain"
                  style={styles.LivingLamp}
                  imageStyle={styles.LivingLamp_imageStyle}
                />
                <Image
                  source={this.global.LivingTV ? TV_on : TV_off}
                  onClick={this.toggleLivingTVImage}
                  resizeMode="contain"
                  style={styles.LivingTV}
                  imageStyle={styles.LivingTV_imageStyle}
                />
              </View>
              <Image
                source={this.global.BathV ? Vent_on : Vent_off}
                onClick={this.toggleBathVImage}
                resizeMode="contain"
                style={styles.BathVent}
                imageStyle={styles.BathVent_imageStyle}
              />
              <View style={styles.Bed2LampRow}>
                <Image
                  source={this.global.Bed2Lamp ? lamp_on : lamp_off}
                  onClick={this.toggleBed2LampImage}
                  resizeMode="contain"
                  style={styles.Bed2Lamp}
                  imageStyle={styles.Bed2Lamp_imageStyle}
                />
                <Image
                  source={this.global.Bed2Lamp1 ? lamp_on : lamp_off}
                  onClick={this.toggleBed2Lamp1Image}
                  resizeMode="contain"
                  style={styles.Bed2Lamp1}
                  imageStyle={styles.Bed2Lamp1_imageStyle}
                />
              </View>
              <Image
                source={this.global.LivingLamp1 ? lamp_on : lamp_off}
                onClick={this.toggleLivingLamp1Image}
                resizeMode="contain"
                style={styles.LivingLamp1}
                imageStyle={styles.LivingLamp1_imageStyle}
              />
            </ImageBackground>
            <Image
              source={require("../assets/images/up-arrow.svg")}
              onClick={this.incrementCountup}
              resizeMode="contain"
              style={styles.image3}
              imageStyle={styles.image3_imageStyle}
            />
            <Image
              source={require("../assets/images/down-arrow.svg")}
              onClick={this.incrementCountdown}
              resizeMode="contain"
              style={styles.image4}
              imageStyle={styles.image4_imageStyle}
            />
            <Image
              source={this.global.KitchenW ? window_c : window_o}
              onClick={this.toggleKitchenWImage}
              resizeMode="contain"
              style={styles.KitchenW}
            ></Image>
            <Image
              source={this.global.MasterW1 ? window_c : window_o}
              onClick={this.toggleMasterW1Image}
              resizeMode="contain"
              style={styles.MasterW1}
            ></Image>
            <Image
              source={this.global.LivingW1 ? window_c : window_o}
              onClick={this.toggleLivingW1Image}
              resizeMode="contain"
              style={styles.LivingW1}
            ></Image>
            <Image
              source={this.global.MasterW2 ? window_c : window_o}
              onClick={this.toggleMasterW2Image}
              resizeMode="contain"
              style={styles.MasterW2}
            ></Image>
            <View style={styles.Bed1WRow}>
              <Image
                source={this.global.Bed1W ? window_c : window_o}
                onClick={this.toggleBed1WImage}
                resizeMode="contain"
                style={styles.Bed1W}
              ></Image>
              <Image
                source={this.global.LivingW2 ? window_c : window_o}
                onClick={this.toggleLivingW2Image}
                resizeMode="contain"
                style={styles.LivingW2}
              ></Image>
            </View>
            <Image
              source={this.global.Bed2W ? window_c : window_o}
              onClick={this.toggleBed2WImage}
              resizeMode="contain"
              style={styles.Bed2W}
            ></Image>
          </View>
          <View style={styles.ellipse2Stack}>
            <Svg viewBox="0 0 300.33 300.00" style={styles.ellipse2}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(3,0,255,1)"
                stroke="rgba(230, 230, 230,1)"
                fillOpacity={1}
                cx={150}
                cy={150}
                rx={150}
                ry={150}
              />
            </Svg>
            <Svg viewBox="0 0 286.33 286.33" style={styles.ellipse}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(230, 230, 230,1)"
                stroke="rgba(230, 230, 230,1)"
                fillOpacity={1}
                cx={143}
                cy={143}
                rx={143}
                ry={143}
              />
            </Svg>
            <Text style={styles.text}>{this.state.count}</Text>
            <Text style={styles.text2}>°F</Text>
            <Image
              source={this.global.AC ? AC_on : AC_off}
              onClick={this.toggleACImage}
              resizeMode="contain"
              style={styles.AC}
              imageStyle={styles.AC_imageStyle}
            />
            <Image
              source={this.global.heat ? heat_on : heat_off}
              onClick={this.toggleheatImage}
              resizeMode="contain"
              style={styles.heat}
              imageStyle={styles.heat_imageStyle}
            />
            <Image
              source={this.global.fan ? fan_on : fan_off}
              onClick={this.togglefanImage}
              resizeMode="contain"
              style={styles.fan}
              imageStyle={styles.fan_imageStyle}
            />
          </View>
        </View>
      </View>
      </div>
    );
  }
}
export default reactn(Homepage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  FloorPlan: {
    top: 0,
    left: 0,
    width: 1167,
    height: 1080,
  },
  FloorPlan_imageStyle: {},
  GarageDoor: {
    width: 33,
    height: 33,
  },
  Lights: {
    marginLeft: 75,
    marginTop: 10,
  },
  GarageLight: {
    width: 35,
    height: 35,
    marginTop: -130,
    marginLeft: -66
  },
  WashroomLight: {
    width: 35,
    height: 35,
    top: -60,
    marginLeft: -40
  },
  KitchenLight: {
    width: 35,
    height: 35,
    top: 50,
    marginLeft: 160
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
    marginTop: -50,
    marginLeft: -150
  },
  LivingLight: {
    width: 35,
    height: 35,
    marginTop: 230,
    marginLeft: 120,
  },
  Bedroom1Light: {
    width: 35,
    height: 35,
    marginTop: -50,
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
  GarageDoorRow: {
    height: 45,
    flexDirection: "row",
    marginTop: 324,
    marginLeft: 465,
    marginRight: 559
  },
  OutsideDoor: {
    width: 33,
    height: 33,
    top: 33
  },
  dryer: {
    width: 31,
    height: 31,
    marginLeft: 98,
    marginTop: 33
  },
  KitchenW: {
    width: 33,
    height: 33,
    marginLeft: 775,
    top: -720
  },
  MasterW1: {
    width: 33,
    height: 33,
    marginTop: 57,
    marginLeft: 325,
    top: -595
  },
  LivingW1: {
    width: 33,
    height: 33,
    marginTop: -400,
    marginLeft: 810,
  },
  MasterW2: {
    width: 33,
    height: 33,
    marginLeft: 325,
    top: -165
  },
  Bed1W: {
    width: 33,
    height: 33,
    left: 325,
    top: -160
  },
  LivingW2: {
    width: 33,
    height: 33,
    marginLeft: 650,
    marginTop: -5
  },
  Bed1WRow: {
    height: 49,
    flexDirection: "row",
    marginTop: 108
  },
  Bed2W: {
    width: 33,
    height: 33,
    marginTop: -100,
    left: 325
  },
  WM: {
    width: 32,
    height: 32,
    marginLeft: 9,
    marginTop: 33
  },
  oven: {
    width: 34,
    height: 34,
    marginLeft: 80,
    marginTop: 30
  },
  stove: {
    width: 33,
    height: 33,
    marginLeft: 5,
    marginTop: 30
  },
  microwave: {
    width: 40,
    height: 40,
    marginLeft: 12,
    marginTop: 28
  },
  dishwasher: {
    width: 26,
    height: 26,
    transform: [
      {
        rotate: "90.00deg"
      }
    ],
    marginLeft: 30,
    marginTop: 64
  },
  OutsideDoorRow: {
    height: 90,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 325,
    marginRight: 379
  },
  MBathVent: {
    width: 29,
    height: 29,
    marginTop: 44,
    marginLeft: 487
  },
  MasterBedLamp: {
    width: 27,
    height: 27,
    marginTop: 42
  },
  MasterTV: {
    width: 31,
    height: 31,
    top: -20,
    marginLeft: 120
  },
  MasterBedLamp1: {
    width: 27,
    height: 27,
    marginLeft: -40,
    marginTop: 42
  },
  FrontDoor: {
    width: 33,
    height: 33,
    marginLeft: 290,
    marginTop: 14
  },
  MasterBedLampRow: {
    height: 69,
    flexDirection: "row",
    marginTop: 95,
    marginLeft: 353,
    marginRight: 325
  },
  Bed1Lamp: {
    width: 27,
    height: 27,
    marginTop: 18
  },
  Bed1Lamp1: {
    width: 27,
    height: 27,
    marginLeft: 49,
    marginTop: 27
  },
  LivingLamp: {
    width: 27,
    height: 27,
    marginLeft: 152
  },
  LivingTV: {
    width: 36,
    height: 36,
    marginLeft: 61,
    marginTop: 9
  },
  Bed1LampRow: {
    height: 54,
    flexDirection: "row",
    marginTop: 44,
    marginLeft: 353,
    marginRight: 435
  },
  BathVent: {
    width: 29,
    height: 29,
    marginTop: 8,
    marginLeft: 481
  },
  Bed2Lamp: {
    width: 27,
    height: 27,
    top: 0 
  },
  Bed2Lamp1: {
    width: 27,
    height: 27,
    marginLeft: 42
  },
  Bed2LampRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 353,
    marginRight: 718
  },
  LivingLamp1: {
    width: 27,
    height: 27,
    marginLeft: 611
  },
  image3: {
    top: 140,
    left: 1156,
    width: 104,
    height: 104,
    position: "absolute"
  },
  image4: {
    top: 264,
    left: 1156,
    width: 104,
    height: 104,
    position: "absolute"
  },
  window: {
    top: 264,
    left: 1156,
    width: 104,
    height: 104,
    position: "absolute"
  },
  FloorPlanStack: {
    width: 1260,
    height: 1080
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 300,
    height: 300,
    position: "absolute"
  },
  ellipse: {
    top: 7,
    left: 7,
    width: 286,
    height: 286,
    position: "absolute"
  },
  text: {
    top: 95,
    left: 97,
    color: "#121212",
    position: "absolute",
    fontSize: 100,
    fontFamily: "abel-regular"
  },
  text2: {
    top: 95,
    left: 196,
    color: "#121212",
    position: "absolute",
    fontSize: 65,
    fontFamily: "abel-regular"
  },
  AC: {
    top: 195,
    left: 109,
    width: 73,
    height: 73,
    position: "absolute"
  },
  heat: {
    top: 25,
    left: 110,
    width: 73,
    height: 73,
    position: "absolute"
  },
  fan: {
    top: 108,
    left: 18,
    width: 73,
    height: 73,
    position: "absolute"
  },
  ellipse2Stack: {
    width: 300,
    height: 300,
    marginLeft: 17,
    marginTop: 109
  },
  FloorPlanStackRow: {
    height: 1080,
    flexDirection: "row",
    flex: 1,
    marginRight: 63,
    marginLeft: 280
  },
  test: {
  }
});

