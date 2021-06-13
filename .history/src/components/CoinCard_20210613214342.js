import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { images } from "../utils/CoinCard";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20,
  },
  upperRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold",
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20,
  },
  seperator: {
    marginTop: 10,
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 10,
    fontWeight: "bold",
  },
  image: {
    height: 35,
    width: 35,
  },
  moneySymbol: {
    fontWeight: "bold",
  },
  statisticscontainer: {
    display: "flex",
    borderTopColor: "#fafafa",
    borderTopWidth: 2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  percentChangePlus: {
    color: "#00bfa5",
    fontWeight: "bold",
    margin: 5,
  },
  percentChangeMinus: {
    color: "#dd2c00",
    fontWeight: "bold",
    margin: 5,
  },
});
const {
  container,
  upperRow,
  coinSymbol,
  coinName,
  seperator,
  coinPrice,
  image,
  moneySymbol,
  statisticscontainer,
  percentChangePlus,
  percentChangeMinus,
} = styles;

const CoinCard = ({
  symbol,
  coin_name,
  price_usd,
  percent_change_24hr,
  percent_change_7d,
}) => {
  return (
    <View style={container}>
      <View style={upperRow}>
        <Image style={styles.image} source={{ uri: images[symbol] }} />
        <Text style={coinSymbol}>{symbol}</Text>
        <Text style={seperator}>|</Text>
        <Text style={coinName}>{coin_name}</Text>
        <Text style={coinPrice}>
          {price_usd} <Text style={moneySymbol}>$</Text>
        </Text>
      </View>
      //{" "}
      <View style={statisticscontainer}>
        //{" "}
        <Text>
          24Hr: //{" "}
          <Text
            style={
              percent_change_24hr < 0 ? percentChangeMinus : percentChangePlus
            }
          >
            // {percent_change_24hr} % //{" "}
          </Text>
          //{" "}
        </Text>
        //{" "}
        <Text>
          7D: //{" "}
          <Text
            style={
              percent_change_7d < 0 ? percentChangeMinus : percentChangePlus
            }
          >
            // {percent_change_7d} % //{" "}
          </Text>
          //{" "}
        </Text>
        //{" "}
      </View>
    </View>
  );
};

export default CoinCard;
