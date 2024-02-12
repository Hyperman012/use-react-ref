import { useMemo, useState } from 'react';

export type SetValueType<T> = (value: ((prevState: T) => T) | T) => void;

export interface ReactState<T> {
    reset: () => void;
    value: T;
    setValue: SetValueType<T>;
    isInitialValue: () => boolean;
    isEqual: (other: T) => boolean;
}

export function useReactState<T>(initialState: T): ReactState<T> {
    const [value, setValue]: [T, SetValueType<T>] = useState<T>(initialState);
    return useMemo(
        () => ({
            isInitialValue(): boolean {
                return value === initialState;
            },
            reset: () => setValue(initialState),
            value,
            setValue,
            isEqual: (other: T) => {
                return value === other;
            },
        }),
        [value],
    );
}
