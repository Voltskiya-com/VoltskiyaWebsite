import { Box, Stack } from '@mui/material';
import { ReactNode } from 'react';
import { FormatQuote } from '@mui/icons-material';
import { AppPaper, AppTypography, Page } from '@app/ui';

interface OverviewSectionProps {
    title: string;
    summary: ReactNode;
}
function OverviewSection(props: OverviewSectionProps) {
    return (
        <AppPaper>
            <Stack
                direction="column"
                maxWidth="20rem"
                padding={3}
                paddingTop={1}
                spacing={1}
                color="secondary.main"
            >
                {props.summary}
            </Stack>
        </AppPaper>
    );
}
export function OverviewPage() {
    return (
        <Page title="Overview">
            <Stack direction="row" spacing={3}>
                <OverviewSection
                    title="Goal"
                    summary={
                        <AppTypography fontWeight={500}>Hello</AppTypography>
                    }
                />
            </Stack>
        </Page>
    );
}
