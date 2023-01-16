import { AppButton, Page } from '@app/ui';
import { Masonry } from '@mui/lab';
import { useState } from 'react';
import { urls } from '../../../util/routes';
import { useSpawnerList } from './Spawn.store';
import { Spawner, SpawnSelector } from './Spawner';
import { SpawnerCard } from './SpawnerCard';

export function SpawnerListPage() {
    const [filter, setFilter] = useState({ name: '' });
    const spawners = useSpawnerList(filter);
    const createButton = (
        <AppButton href={urls.spawn.create} variant="contained" size="large">
            New
        </AppButton>
    );

    return (
        <Page title="Spawner Tags" extra={createButton}>
            <Masonry spacing={5}>
                {spawners.map((spawner: SpawnSelector) => (
                    <SpawnerCard key={spawner.name} {...spawner} />
                ))}
            </Masonry>
        </Page>
    );
}
