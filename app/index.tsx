import Button from "@/components/Button";
import Row from "@/components/Row";
import { LightTheme, DarkTheme } from "@/constants/Colors";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Switch,
} from "react-native";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? DarkTheme : LightTheme;
  const [input, setInput] = useState({
    currentValue: "0",
    previousValue: "0",
    operator: "",
  });
  const [result, setResult] = useState("0");

  function handlePress(value: string) {
    setInput({
      ...input,
      currentValue:
        input.currentValue === "0" ? value : input.currentValue + value,
    });
  }

  function handleBackSpace() {
    setInput({
      ...input,
      currentValue: input.currentValue.slice(0, -1),
    });
  }

  function handleResult() {
    let result = eval(input.currentValue);
    setResult(result);
  }

  function handleClear() {
    setInput({
      currentValue: "0",
      previousValue: "0",
      operator: "",
    });
    setResult("0");
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.secondaryBackground }]}
    >
      <StatusBar barStyle="dark-content" />
      <Switch
        value={isDarkMode}
        onValueChange={() => setIsDarkMode((prev) => !prev)}
        thumbColor={theme.accent}
      />
      <View style={styles.displayContainer}>
        <Text style={[styles.displayText, { color: theme.text }]}>
          {input.currentValue}
        </Text>
        <Text style={[styles.displayResult, { color: theme.resultText }]}>
          {result}
        </Text>
      </View>
      <View style={[styles.numpad, { backgroundColor: theme.background }]}>
        <Row>
          <Button
            theme={theme}
            text='AC'
            type='accent'
            onPress={() => {
              handleClear();
            }}
          />
          <Button
            theme={theme}
            text='%'
            type='secondary'
            onPress={() => handlePress("%")}
          />
          <Button
            theme={theme}
            text='/'
            type='secondary'
            onPress={() => handlePress("/")}
          />
          <Button
            theme={theme}
            text='*'
            type='secondary'
            onPress={() => handlePress("*")}
          />
        </Row>
        <Row>
          <Button
            theme={theme}
            text='7'
            type='primary'
            onPress={() => handlePress("7")}
          />
          <Button
            theme={theme}
            text='8'
            type='primary'
            onPress={() => handlePress("8")}
          />
          <Button
            theme={theme}
            text='9'
            type='primary'
            onPress={() => handlePress("9")}
          />
          <Button
            theme={theme}
            text='-'
            type='secondary'
            onPress={() => handlePress("-")}
          />
        </Row>
        <Row>
          <Button
            theme={theme}
            text='4'
            type='primary'
            onPress={() => handlePress("4")}
          />
          <Button
            theme={theme}
            text='5'
            type='primary'
            onPress={() => handlePress("5")}
          />
          <Button
            theme={theme}
            text='6'
            type='primary'
            onPress={() => handlePress("6")}
          />
          <Button
            theme={theme}
            text='+'
            type='secondary'
            onPress={() => handlePress("+")}
          />
        </Row>
        <Row>
          <Button
            theme={theme}
            text='1'
            type='primary'
            onPress={() => handlePress("1")}
          />
          <Button
            theme={theme}
            text='2'
            type='primary'
            onPress={() => handlePress("2")}
          />
          <Button
            theme={theme}
            text='3'
            type='primary'
            onPress={() => handlePress("3")}
          />
          <Button
            theme={theme}
            text='<'
            type='secondary'
            onPress={() => handleBackSpace()}
          />
        </Row>
        <Row>
          <Button
            theme={theme}
            text='.'
            type='primary'
            onPress={() => handlePress(".")}
          />
          <Button
            theme={theme}
            text='0'
            type='primary'
            onPress={() => handlePress("0")}
          />
          <Button
            theme={theme}
            text='='
            type='accent'
            onPress={() => handleResult()}
            size='double'
          />
        </Row>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  displayContainer: {
    width: "100%",
    padding: 20,
    alignItems: "flex-end",
  },
  displayResult: {
    fontSize: 60,
  },
  displayText: {
    fontSize: 30,
  },
  numpad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    paddingTop: 50,
    paddingBottom: 20,
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
  },
});

export default Home;
