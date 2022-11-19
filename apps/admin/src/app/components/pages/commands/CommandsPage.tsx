import { Box, Divider, Input, Stack, TextField } from '@mui/material';
import { TreeItem, TreeView } from '@mui/lab';
import { AppTypography } from '../../base/AppTypography';
import { Page } from '../../common/Page';
import { Command, useCommandList } from './Commands.store';
import { ChevronRight, Search } from '@mui/icons-material';
import { ChangeEventHandler, EventHandler, useState } from 'react';
import App from '../../../App';

function CommandElement(props: Command) {
    console.log(props.subCommands);
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
    const filterUpdate: ChangeEventHandler<HTMLInputElement> = (event) =>
        setFilter(event.currentTarget.value);
    const commands: Command[] = useCommandList().filter((command) =>
        command.name.includes(filter)
    );
    const filterElement = (
        <Stack direction="row" alignItems="center">
            <TextField
                variant="filled"
                label={'Filter'}
                onChange={filterUpdate}
            />
            <Search
                sx={{
                    scale: '-1 1',
                    left: -50,
                    position: 'relative',
                }}
                fontSize="large"
            />
        </Stack>
    );
    return (
        <Page title="Commands" extra={filterElement}>
            <Stack spacing={1} divider={<Divider light />}>
                <TreeView
                    sx={{
                        flexGrow: 1,
                        overflowY: 'auto',
                    }}
                >
                    {commands.map((command: Command) => (
                        <TreeItem
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