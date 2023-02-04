import { AppBar, Divider, Stack } from '@mui/material';

import { HeaderProps } from '../Header';
import { TopHeaderLink } from './TopHeaderLink';

export function TopHeaderBar(props: HeaderProps) {
    return (
        <AppBar
            position="static"
            sx={{
                height: '4rem',
                bgcolor: props.bgcolor,
                zIndex: (theme) => theme.zIndex.appBar,
            }}
        >
            <Stack
                marginLeft="7.5rem"
                justifyContent="flex-start"
                spacing={2}
                alignItems="center"
                direction="row"
                divider={
                    <Divider
                        flexItem
                        orientation="vertical"
                        variant="fullWidth"
                    />
                }
            >
                {props.links.map((link) => (
                    <TopHeaderLink key={link.fullRoute} {...link} depth={1} />
                ))}
            </Stack>
        </AppBar>
    );
}
