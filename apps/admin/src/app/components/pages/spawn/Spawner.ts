import { SpawningRule } from './SpawningRule';

export type SpawningTemporalRule = {
    typeId: string;
};
export type SpawningModifier = {
    typeId: string;
};
export type SpawningPreModifier = {
    typeId: string;
};

export type SpawnerCreate = Spawner & {
    name: string;
    extendsClause: string[];
};

export interface Spawner {
    rules: SpawningRule[];
    temporalRules: SpawningTemporalRule[];
    modifiers: SpawningModifier[];
    preModifiers: SpawningPreModifier[];
}
export interface SpawnSelector {
    uuid: string;
    name: string;
    implementation: Spawner;
    extendsClause: {
        extendsSpawnSelector: string[];
    };
}
