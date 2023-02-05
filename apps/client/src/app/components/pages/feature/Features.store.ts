import { createStore } from '@ngneat/elf';
import { withEntities, selectAllEntities } from '@ngneat/elf-entities';
import {
    getMappedMajorFeature,
    getMappedMinorFeature,
} from '../../database/features/getMappedFeature';
import { useObservableMemo } from '../../../../../../../libs/elemental/src/lib/observeable/useObservableMemo';
import { map } from 'rxjs';
import { sortOnKey } from '../../../../../../admin/src/app/util/sortOnKey';
export interface MajorFeature {
    name: string;
    completion: number;
    status: string;
    description: string;
}
export interface MinorFeature {
    name: string;
    description: string;
}
const majorFeatureStore = createStore(
    { name: 'MajorFeature' },
    withEntities<MajorFeature, 'name'>({
        idKey: 'name',
        initialValue: getMappedMajorFeature(),
    })
);
export function useMajorFeatureList(): MajorFeature[] {
    return useObservableMemo(
        () =>
            majorFeatureStore.pipe(
                selectAllEntities(),
                map((entities) => sortOnKey(entities, 'name', ''))
            ),
        [majorFeatureStore],
        []
    );
}
const minorFeatureStore = createStore(
    { name: 'MinorFeature' },
    withEntities<MinorFeature, 'name'>({
        idKey: 'name',
        initialValue: getMappedMinorFeature(),
    })
);
export function useMinorFeatureList(): MinorFeature[] {
    return useObservableMemo(
        () =>
            minorFeatureStore.pipe(
                selectAllEntities(),
                map((entities) => sortOnKey(entities, 'name', ''))
            ),
        [majorFeatureStore],
        []
    );
}
