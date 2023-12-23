import { useObservableMemo } from '@app/util';
import { Optional } from '@app/util';
import { createStore } from '@ngneat/elf';
import {
    getEntity,
    selectAllEntities,
    selectEntity,
    withEntities,
} from '@ngneat/elf-entities';
import { useParams } from 'react-router-dom';
import { map } from 'rxjs';

import { sortOnKey } from '../../../util/sortOnKey';
import { getJsonSpawners } from '../../database/mobs/JsonSpawners';
import { SpawnSelector } from './Spawner';

const spawnStore = createStore(
    { name: 'Spawners' },
    withEntities<SpawnSelector, 'uuid'>({
        idKey: 'uuid',
        initialValue: getJsonSpawners(),
    })
);
export interface SpawnerFilter {
    name: string;
}

export function useSpawnerList(filter: SpawnerFilter): SpawnSelector[] {
    return useObservableMemo(
        () =>
            spawnStore.pipe(
                selectAllEntities(),
                map((mobs) => sortOnKey(mobs, 'name', filter.name))
            ),
        [spawnStore, filter],
        []
    );
}
export function useSpawner(name: string): Optional<SpawnSelector> {
    return useObservableMemo(
        () => spawnStore.pipe(selectEntity(name)),
        [spawnStore, name],
        spawnStore.query(getEntity(name))
    );
}

export function useUrlSpawner(): Optional<SpawnSelector> {
    const mobName: Optional<string> = useParams()['spawner'];
    if (!mobName) return undefined;
    return useSpawner(mobName);
}
