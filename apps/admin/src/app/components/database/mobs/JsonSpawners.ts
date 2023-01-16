import { SpawnSelector } from '../../pages/spawn/Spawner';
import data from './Spawners.json';

export function getJsonSpawners(): SpawnSelector[] {
    return data;
}
