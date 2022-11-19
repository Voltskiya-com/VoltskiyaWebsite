import { Page } from '../../common/Page';
import { AppPaper } from '../../base/AppPaper';
import { AppTypography } from '../../base/AppTypography';
import { Box, Stack } from '@mui/material';
import { ReactNode } from 'react';
import { FormatQuote } from '@mui/icons-material';

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
                {/* <SectionHeader>{props.title}</SectionHeader> */}
                {props.summary}
            </Stack>
        </AppPaper>
    );
}
interface QuoteProps {
    children: ReactNode;
    color: string;
    quoteSize: 'inherit' | 'large' | 'medium' | 'small';
}
function Quote(props: QuoteProps) {
    return (
        <Stack
            color={props.color}
            direction="row"
            justifyContent="space-evenly"
        >
            <Box alignSelf="start">
                <FormatQuote fontSize={props.quoteSize} />
            </Box>
            {props.children}
            <Box alignSelf="end">
                <FormatQuote fontSize={props.quoteSize} />
            </Box>
        </Stack>
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
