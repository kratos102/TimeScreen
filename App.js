import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import PropTypes from "prop-types";
import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "pink" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 50,
              backgroundColor: "lavender",
              borderWidth: 5,
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            Thời gian:{" "}
          </Text>
          <Text
            style={{
              fontSize: 20,
              backgroundColor: "blue",
              borderWidth: 3,
              borderColor: "white",
              color: "white",
            }}
          >
            {this.state.date}
          </Text>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
