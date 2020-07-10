import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {addCounter} from "./store/actions/counter";

const CounterButton = (props) => {
  const data = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>{data}</Text>
      <Button onPress={() => dispatch(addCounter())} title="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CounterButton;
