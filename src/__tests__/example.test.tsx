import { beforeEach, describe, it } from '@jest/globals';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { useReactState } from '../useReactState';

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

describe('example', () => {
    it('counter starts at 0', () => {
        const screen = render(<SayHelloOnThirdClick />);
        screen.getByText('Counter: 0');
    });

    it('adds to counter', () => {
        const screen = render(<SayHelloOnThirdClick />);
        fireEvent.click(screen.getByText('Click me'));
        screen.getByText('Counter: 1');
    });

    describe('clicks three times', () => {
        let screen: RenderResult;

        beforeEach(() => {
            screen = render(<SayHelloOnThirdClick />);
            fireEvent.click(screen.getByText('Click me'));
            fireEvent.click(screen.getByText('Click me'));
            fireEvent.click(screen.getByText('Click me'));
        });

        it('says hello', () => {
            screen.getByText('Hello!');
        });

        it('resets counter', () => {
            fireEvent.click(screen.getByText('Reset Counter'));
            screen.getByText('Click me');
        });
    });
});
