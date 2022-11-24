import { useObservableMemo } from '@appleptr16/elemental';
import { createStore } from '@ngneat/elf';
import { selectAllEntities, withEntities } from '@ngneat/elf-entities';
import { map } from 'rxjs';
import { sortOnKey } from '../../../util/sortOnKey';
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
export function useCommandList(filter: string): Command[] {
    return useObservableMemo(
        () =>
            commandsStore.pipe(
                selectAllEntities(),
                map((commands) => sortOnKey(commands, 'name', filter))
            ),
        [commandsStore, filter],
        []
    );
}
