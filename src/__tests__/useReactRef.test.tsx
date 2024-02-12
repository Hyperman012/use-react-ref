import { ReactRef, useReactRef } from '../useReactRef';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { renderHook } from '@testing-library/react';

describe('useReactRef', () => {
    describe('with counter', () => {
        let reactRef: ReactRef<number>;

        beforeEach(() => {
            reactRef = renderHook(() => useReactRef(0)).result.current;
        });

        it('has initial value', () => {
            expect(reactRef.get()).toEqual(0);
        });

        it('is initial value', () => {
            expect(reactRef.isInitialValue()).toEqual(true);
        });

        it('is equal to initial value', () => {
            expect(reactRef.isEqual(0)).toEqual(true);
            expect(reactRef.isEqual(1)).toEqual(false);
        });

        describe('set counter to 1', () => {
            beforeEach(() => {
                reactRef.set(1);
            });

            it('is not initial value', () => {
                expect(reactRef.isInitialValue()).toEqual(false);
            });

            it('has value of 1', () => {
                expect(reactRef.get()).toEqual(1);
            });

            it('is equal to 1', () => {
                expect(reactRef.isEqual(1)).toEqual(true);
                expect(reactRef.isEqual(0)).toEqual(false);
            });

            it('resets value to initial value', () => {
                reactRef.reset();
                expect(reactRef.get()).toEqual(0);
            });
        });
    });
});
