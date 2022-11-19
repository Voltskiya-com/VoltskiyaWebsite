import { useObservableMemo } from '@appleptr16/elemental';
import { createStore } from '@ngneat/elf';
import { selectAllEntities, withEntities } from '@ngneat/elf-entities';
import { map } from 'rxjs';
import commandsRaw from '../../database/commands/AppleMisc.commands.json';

export interface Command {
    name: string;
    description: string;
    subCommands?: Command[];
}
export const commandsStore = createStore(
    { name: 'Commands' },
    withEntities<Command, 'name'>({
        idKey: 'name',
        initialValue: commandsRaw as Command[],
    })
);
export function useCommandList(): Command[] {
    return useObservableMemo(
        () =>
            commandsStore.pipe(
                selectAllEntities(),
                map((entities) =>
                    entities.sort((e1, e2) => e1.name.localeCompare(e2.name))
                )
            ),
        [commandsStore],
        []
    );
}
