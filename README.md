# use-react-ref

Thin wrapper around useState and useRef from React to better encapsulate state and simplify usage.

## Install

### yarn

```shell
yarn add use-react-ref
```

### npm

```shell
npm install use-react-ref
```

## Usage

```typescript jsx
import { useReactState } from 'use-react-ref';

function SayHelloOnThirdClick() {
    const counter = useReactState(0);

    if (counter.isEqual(3))
        return (
            <>
                <p>Hello!</p>
                <button onClick={counter.reset}>Reset Counter</button>
            </>
        );

    return (
        <>
            <p>{`Counter: ${counter.value}`}</p>
            <button onClick={() => counter.set(x => x + 1)}>Click me</button>
        </>
    );
}
```

## Documentation

### useReactRef

Thin wrapper around [useRef](https://react.dev/reference/react/useRef). Creates a `ReactRef` of the `initialValue`
passed in.

#### Parameters

- initialValue: Initial Value of `ReactRef`

#### Returns

`ReactRef` object that has the following properties

- `get()`: returns current value of the Ref.
- `set(newValue)`: updates the current value of the Ref to the newValue.
- `reset()`: resets the current value to the `initialValue` passed in.
- `isInitialValue()`: returns `true` if current value is the `initialValue` passed in. `false` otherwise.
- `isEqual(otherValue)`: returns `true` if current value is equal to `otherValue`. `false` otherwise.
- `ref`: underlying `useRef` return value `MutableRefObject`.

You should only use `.ref` if another library needs the `MutableRefObject`.

### useReactState

Thin wrapper around [useState](https://react.dev/reference/react/useState). Creates a `ReactState` of the `initialValue`
passed in.

#### Parameters

- initialValue: Initial Value of the `ReactState`

#### Returns

`ReactState` object that has the following properties

- `value`: currentValue of the `ReactState`.
- `set(newValue)`: updates the state to the `newValue` and triggers a rerender.
- `reset()`: resets the value to the `initialValue` passed in and triggers a rerender.
- `isInitialValue()`: returns `true` if value is the `initialValue` passed in. `false` otherwise.
- `isEqual(otherValue)`: returns `true` if value is equal to `otherValue`. `false` otherwise.
