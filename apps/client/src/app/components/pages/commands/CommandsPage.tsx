import { AppTypography, Page, Search } from '@app/ui';
import { ChevronRight } from '@mui/icons-material';
import { TreeItem, TreeView } from '@mui/lab';
import { Divider, Stack } from '@mui/material';
import { useState } from 'react';

import { Command, useCommandList } from './Commands.store';

function CommandElement(props: Command) {
    return (
        <Stack>
            <Stack direction="row">
                <ChevronRight />
                <AppTypography variant="h5">/{props.name}</AppTypography>
            </Stack>
            <Stack direction="row">
                <ChevronRight visibility="hidden" />
                <AppTypography>{props.description}</AppTypography>
            </Stack>
        </Stack>
    );
}

export function CommandsPage() {
    const [filter, setFilter] = useState<string>('');
    const commands: Command[] = useCommandList(filter);

    return (
        <Page title="Commands" extra={<Search onChange={setFilter} />}>
            <Stack spacing={1} divider={<Divider light />}>
                <TreeView
                    sx={{
                        flexGrow: 1,
                        overflowY: 'auto',
                    }}
                >
                    {commands.map((command: Command) => (
                        <TreeItem
                            key={command.name}
                            nodeId={command.name}
                            label={
                                <CommandElement
                                    key={command.name}
                                    {...command}
                                />
                            }
                            sx={{ marginBottom: 1 }}
                        />
                    ))}
                </TreeView>
            </Stack>
        </Page>
    );
}
