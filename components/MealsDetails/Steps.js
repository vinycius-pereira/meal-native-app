import { StyleSheet, Text, View } from "react-native";
import {Fragment} from "react";

function Steps({ steps }) {
  return (
    <View style={styles.listContainer}>
      {steps.map((step, index) => (
        <Fragment key={index}>
          <View>
            <Text style={styles.title}>{`${index + 1}. ${step}`}</Text>
          </View>
          <View style={styles.separator} />
        </Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
  listContainer: {
    backgroundColor: "#9a7449",
    borderColor: "#9a7449",
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginVertical: 12,
  },
  separator: {
    margin: 2,
  },
});

export default Steps;
