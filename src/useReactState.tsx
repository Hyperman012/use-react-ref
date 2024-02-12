import { useMemo, useState } from 'react';

export type SetValueType<T> = (value: ((prevState: T) => T) | T) => void;

export interface ReactState<T> {
    isEqual: (other: T) => boolean;
    isInitialValue: () => boolean;
    reset: () => void;
    set: SetValueType<T>;
    value: T;
}

export function useReactState<T>(initialState: T): ReactState<T> {
    const [value, set]: [T, SetValueType<T>] = useState<T>(initialState);
    return useMemo(
        () => ({
            isInitialValue(): boolean {
                return value === initialState;
            },
            reset: () => set(initialState),
            value,
            set,
            isEqual: (other: T) => {
                return value === other;
            },
        }),
        [value],
    );
}
