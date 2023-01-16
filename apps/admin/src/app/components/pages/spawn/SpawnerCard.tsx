import { Card } from '@mui/material';

import { SpawnSelector } from './Spawner';

export function SpawnerCard(props: SpawnSelector) {
    return <Card>{props.name}</Card>;
}
