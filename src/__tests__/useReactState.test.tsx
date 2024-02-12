import { beforeEach, describe, expect, it } from '@jest/globals';
import { act, renderHook } from '@testing-library/react';
import { ReactState, useReactState } from '../useReactState';

describe('use react state', () => {
    describe('with counter', () => {
        let state: ReactState<number>;
        let renderResult: { current: ReactState<number> };

        beforeEach(() => {
            renderResult = renderHook(() => useReactState(0)).result;
            state = renderResult.current;
        });

        it('has initial value', () => {
            expect(state.value).toEqual(0);
        });

        it('is initial value', () => {
            expect(state.isInitialValue()).toEqual(true);
        });

        it('is equal to initial value', () => {
            expect(state.isEqual(0)).toEqual(true);
            expect(state.isEqual(1)).toEqual(false);
        });

        describe('set counter to 1', () => {
            let stateBeforeChange: ReactState<number>;

            beforeEach(() => {
                stateBeforeChange = renderResult.current;
                act(() => renderResult.current.set(1));
                state = renderResult.current;
            });

            it('does not update previous result', () => {
                expect(stateBeforeChange.isInitialValue()).toEqual(true);
            });

            it('is not initial value', () => {
                expect(state.isInitialValue()).toEqual(false);
            });

            it('has value of 1', () => {
                expect(state.value).toEqual(1);
            });

            it('is equal to 1', () => {
                expect(state.isEqual(1)).toEqual(true);
                expect(state.isEqual(0)).toEqual(false);
            });

            it('resets value to initial value', () => {
                act(() => renderResult.current.reset());
                expect(renderResult.current.value).toEqual(0);
            });
        });
    });
});
