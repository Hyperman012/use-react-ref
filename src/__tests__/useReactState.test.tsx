import { beforeEach, describe, expect, it } from '@jest/globals';
import { act, renderHook } from '@testing-library/react';
import { ReactState, useReactState } from '../useReactState';

describe('use react state', () => {
    describe('with counter', () => {
        let renderResult: { current: ReactState<number> };

        beforeEach(() => {
            renderResult = renderHook(() => useReactState(0)).result;
        });

        it('has initial value', () => {
            expect(renderResult.current.value).toEqual(0);
        });

        it('is initial value', () => {
            expect(renderResult.current.isInitialValue()).toEqual(true);
        });

        it('is equal to initial value', () => {
            expect(renderResult.current.isEqual(0)).toEqual(true);
            expect(renderResult.current.isEqual(1)).toEqual(false);
        });

        describe('set counter to 1', () => {
            let previousResult: ReactState<number>;

            beforeEach(() => {
                previousResult = renderResult.current;
                act(() => renderResult.current.set(1));
            });

            it('does not update previous result', () => {
                expect(previousResult.isInitialValue()).toEqual(true);
            });

            it('is not initial value', () => {
                expect(renderResult.current.isInitialValue()).toEqual(false);
            });

            it('has value of 1', () => {
                expect(renderResult.current.value).toEqual(1);
            });

            it('is equal to 1', () => {
                expect(renderResult.current.isEqual(1)).toEqual(true);
                expect(renderResult.current.isEqual(0)).toEqual(false);
            });

            it('resets value to initial value', () => {
                act(() => renderResult.current.reset());
                expect(renderResult.current.value).toEqual(0);
            });
        });
    });
});
