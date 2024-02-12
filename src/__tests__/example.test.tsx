import { describe, it } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import { useReactState } from '../useReactState';

function SayHelloOnThirdClick() {
    const counter = useReactState(0);

    if (counter.isEqual(3)) return <p>Hello!</p>;

    return <button onClick={() => counter.set(x => x + 1)}>Click me</button>;
}

describe('example', () => {
    it('says hello', () => {
        const sayHello = render(<SayHelloOnThirdClick />);
        fireEvent.click(sayHello.getByText('Click me'));
        fireEvent.click(sayHello.getByText('Click me'));
        fireEvent.click(sayHello.getByText('Click me'));
        sayHello.getByText('Hello!');
    });
});
