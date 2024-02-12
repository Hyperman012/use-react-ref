import React from 'react';
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

        describe('set counter to 1', () => {
            let previousResult: ReactState<number>;

            beforeEach(() => {
                previousResult = renderResult.current;
                act(() => renderResult.current.setValue(1));
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

            it('resets value to initial value', () => {
                act(() => renderResult.current.reset());
                expect(renderResult.current.value).toEqual(0);
            });
        });
    });
});