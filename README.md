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

    if (counter.isEqual(3)) return <p>Hello!</p>;

    return <button onClick={() => counter.set(x => x + 1)}>Click me</button>;
}
```

## Documentation

### useReactRef

### useReactState
