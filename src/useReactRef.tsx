import { useMemo, useRef } from 'react';

export interface ReactRef<T> {
    get: () => T;
    set: (value: T) => void;
    reset: () => void;
    isInitialValue: () => boolean;
    isEqual: (other: T) => boolean;
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
