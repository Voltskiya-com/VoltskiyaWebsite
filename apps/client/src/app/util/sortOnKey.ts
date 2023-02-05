import { Optional } from '@appleptr16/utilities';
import fuzzysort from 'fuzzysort';

type KeyOfStringValues<T> = keyof {
    [K in keyof T as T[K] extends string ? K : never]: string;
} &
    keyof T;

// idk what i'm doing
export function sortOnKey<T>(
    mobs: T[],
    key: KeyOfStringValues<T>,
    filter?: string
) {
    if (!key) return [];
    if (!filter)
        return mobs.sort((e1: T, e2: T) =>
            (e1[key] as unknown as string).localeCompare(
                e2[key] as unknown as string
            )
        );

    return fuzzysort
        .go(filter, mobs, { all: true, key: key as unknown as string })
        .map((result) => result.obj);
}
