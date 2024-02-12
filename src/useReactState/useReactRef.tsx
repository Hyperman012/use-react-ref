import { useMemo, useRef } from 'react';

export interface ReactRef<T> {
    isInitialValue: () => boolean;
    reset: () => void;
    getValue: () => T;
    setValue: (value: T) => void;
    ref: React.MutableRefObject<T>;
}

export function useReactRef<T>(initialValue: T): ReactRef<T> {
    const ref = useRef<T>(initialValue);
    return useMemo(
        () => ({
            ref,
            isInitialValue(): boolean {
                return ref.current === initialValue;
            },
            reset: () => {
                ref.current = initialValue;
            },
            getValue: () => ref.current,
            setValue: (value: T) => {
                ref.current = value;
            },
        }),
        [],
    );
}
