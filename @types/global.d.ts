import type { ComponentPropsWithoutRef, ElementType } from 'react';

declare global {
    type ValueOf<T> = T[keyof T];

    /** Merge props without conflicts of the key (global)*/
    type ExtendableProps<Extended, Overrides> = Overrides & Omit<Extended, keyof Overrides>;

    /** Omit certain keys from the ComponentPropsWithoutRef */
    type ComponentPropsWithoutRefAndKeys<
        E extends ElementType,
        K extends keyof ComponentPropsWithoutRef<E>,
    > = Omit<ComponentPropsWithoutRef<E>, K>;
}
export {};
