import React from 'react';
import { ReactRef, useReactRef } from '../useReactRef';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { renderHook } from '@testing-library/react';

describe('react state', () => {
    describe('useReactRef', () => {
        describe('with counter', () => {
            let renderResult: { current: ReactRef<number> };

            beforeEach(() => {
                renderResult = renderHook(() => useReactRef(0)).result;
            });

            it('has initial value', () => {
                expect(renderResult.current.getValue()).toEqual(0);
            });

            it('is initial value', () => {
                expect(renderResult.current.isInitialValue()).toEqual(true);
            });

            describe('set counter to 1', () => {
                beforeEach(() => {
                    renderResult.current.setValue(1);
                });

                it('is not initial value', () => {
                    expect(renderResult.current.isInitialValue()).toEqual(false);
                });

                it('has value of 1', () => {
                    expect(renderResult.current.getValue()).toEqual(1);
                });

                it('resets value to initial value', () => {
                    renderResult.current.reset();
                    expect(renderResult.current.getValue()).toEqual(0);
                });
            });
        });
    });
});
