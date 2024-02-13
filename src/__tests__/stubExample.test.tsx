import { describe, it } from '@jest/globals';
import { ReactState } from '../useReactState';
import { render } from '@testing-library/react';
import { createStubReactRef, createStubReactState } from '../createStubs';
import { ReactRef } from '../useReactRef';

describe('stub examples', () => {
    describe('stub react ref', () => {
        function Hello(props: { name: ReactState<string> }) {
            return <p>{`Hello ${props.name.value}`}</p>;
        }

        it('shows name on screen', () => {
            const screen = render(<Hello name={createStubReactState('John')} />);
            screen.getByText('Hello John');
        });
    });

    describe('stub react state', () => {
        function Hello(props: { name: ReactRef<string> }) {
            return <p>{`Hello ${props.name.get()}`}</p>;
        }

        it('shows name on screen', () => {
            const screen = render(<Hello name={createStubReactRef('John')} />);
            screen.getByText('Hello John');
        });
    });
});
