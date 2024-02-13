import { ReactState, SetValueType } from './useReactState';
import { ReactRef } from './useReactRef';
import { MutableRefObject } from 'react';

export function createStubReactState<T>(value: T, set: SetValueType<T> = () => {}): ReactState<T> {
    return {
        isInitialValue: () => true,
        reset: () => set(value),
        value,
        set,
        isEqual(other: T): boolean {
            return other === value;
        },
    };
}

export function createStubReactRef<T>(
    value: T,
    set: SetValueType<T> = () => {},
    ref: MutableRefObject<T> = {} as MutableRefObject<T>,
): ReactRef<T> {
    return {
        ref,
        isInitialValue: () => true,
        reset: () => set(value),
        get: () => value,
        set,
        isEqual(other: T): boolean {
            return other === value;
        },
    };
}
