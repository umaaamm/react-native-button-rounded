# react-native-button-rounded

Library for custom component button

## Installation

```sh
npm install react-native-button-rounded
```

## Usage


```js
import AppButton from "react-native-button-rounded";

// ...

<AppButton
    onPress={() => console.log("Pressed")}
    accessibilityLabel="Rounded Button"
    textStyles={{
        fontSize: 18,
          fontWeight: "bold",
          color: "white"
        }}
    height={60}
    width={200}>
    Press Me!!
</AppButton>

```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
