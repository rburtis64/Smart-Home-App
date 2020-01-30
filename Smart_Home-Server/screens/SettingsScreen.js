import React from 'react'
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
 
class AxesExample extends React.PureComponent {

  render() {

      const data = [ 150, 110, 140, 195, 150, 124, 185, 191, 135, 153, 153, 124, 150, ]
      const data1 = [ 55, 67, 39, 60, 50, 63, 44, 52, 35, 53, 53, 59, 50, ] 
      const data2 = [ 90, 85, 89, 65, 35, 40, 25, 20, 30, 45, 56, 63, 87, ]

      const axesSvg = { fontSize: 20, fill: 'grey' };
      const verticalContentInset = { top: 10, bottom: 10 }
      const xAxisHeight = 30

      // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
      // All react-native-svg-charts components support full flexbox and therefore all
      // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
      // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
      // and then displace the other axis with just as many pixels. Simple but manual.

      return (
        <View style={styles.bar}>
          <Text style={styles.text2}>Electricity (in dollars) </Text>
          <View style={{ height: 400, width: 600, padding: 20, flexDirection: 'row', }}>
              <YAxis
                  data={data}
                  style={{ marginBottom: xAxisHeight }}
                  contentInset={verticalContentInset}
                  svg={axesSvg}
              />
              <View style={{ flex: 1, marginLeft: 10 }}>
                  <LineChart
                      style={{ flex: 1 }}
                      data={data}
                      contentInset={verticalContentInset}
                      svg={{ stroke: 'rgb(134, 65, 244)' }}
                  >
                      <Grid/>
                  </LineChart>
                  <XAxis
                      style={{ marginHorizontal: -10, height: xAxisHeight }}
                      data={data}
                      formatLabel={(value, index) => index}
                      contentInset={{ left: 10, right: 10 }}
                      svg={axesSvg}
                  />
              </View>
          </View>
          <View style={styles.bar1}>
            <Text style={styles.text3}>Water (in dollars) </Text>
                <View style={{ height: 400, width: 600, padding: 20, flexDirection: 'row', }}>
                    <YAxis
                        data={data1}
                        style={{ marginBottom: xAxisHeight }}
                        contentInset={verticalContentInset}
                        svg={axesSvg}
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <LineChart
                            style={{ flex: 1 }}
                            data={data1}
                            contentInset={verticalContentInset}
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                        >
                            <Grid/>
                        </LineChart>
                        <XAxis
                            style={{ marginHorizontal: -10, height: xAxisHeight }}
                            data={data1}
                            formatLabel={(value, index) => index}
                            contentInset={{ left: 10, right: 10 }}
                            svg={axesSvg}
                        />
                    </View>
                </View>
          </View>
          <View style={styles.bar2}>
            <Text style={styles.text4}>Gas (in dollars) </Text>
                <View style={{ height: 400, width: 600, padding: 20, flexDirection: 'row', }}>
                    <YAxis
                        data={data2}
                        style={{ marginBottom: xAxisHeight }}
                        contentInset={verticalContentInset}
                        svg={axesSvg}
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <LineChart
                            style={{ flex: 1 }}
                            data={data2}
                            contentInset={verticalContentInset}
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                        >
                            <Grid/>
                        </LineChart>
                        <XAxis
                            style={{ marginHorizontal: -10, height: xAxisHeight }}
                            data={data2}
                            formatLabel={(value, index) => index}
                            contentInset={{ left: 10, right: 10 }}
                            svg={axesSvg}
                        />
                    </View>
                </View>
          </View>
        </View>
      )
  }

}

export default AxesExample
const styles = StyleSheet.create({
  bar: {
    marginLeft: 200,
    marginTop: 100,
  },
  bar1: {
    marginLeft: -10,
    marginTop: 100,
  },
  bar2: {
    marginLeft: 700,
    marginTop: -650,
  },
  text2: {
    top: -50,
    left: 20,
    color: "#121212",
    position: "absolute",
    fontSize: 65,
    fontFamily: "abel-regular"
  },
  text3: {
    top: -50,
    left: 20,
    color: "#121212",
    position: "absolute",
    fontSize: 65,
    fontFamily: "abel-regular"
  },
  text4: {
    top: -50,
    left: 20,
    color: "#121212",
    position: "absolute",
    fontSize: 65,
    fontFamily: "abel-regular"
  }
});