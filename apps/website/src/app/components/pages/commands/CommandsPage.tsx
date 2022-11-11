import { Divider, Stack } from '@mui/material';
import { TreeItem, TreeView } from '@mui/lab';
import { AppTypography } from '../../base/AppTypography';
import { Page } from '../../common/Page';
import { Command, useCommandList } from './Commands.store';
import { ChevronRight } from '@mui/icons-material';

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
    const commands: Command[] = useCommandList();
    return (
        <Page title="Commands">
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
