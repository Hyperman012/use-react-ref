import { useMemo, useRef } from 'react';

export interface ReactRef<T> {
    get: () => T;
    isEqual: (other: T) => boolean;
    isInitialValue: () => boolean;
    ref: React.MutableRefObject<T>;
    reset: () => void;
    set: (value: T) => void;
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
            get: () => ref.current,
            set: (value: T) => {
                ref.current = value;
            },
            isEqual: (other: T) => {
                return ref.current == other;
            },
        }),
        [],
    );
}
