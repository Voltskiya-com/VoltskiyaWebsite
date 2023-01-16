import {
    AppBar,
    Box,
    Button,
    Color,
    Divider,
    Link,
    Stack,
} from '@mui/material';

import { AppTypography } from '../base/AppTypography';
import { Logo } from './Logo';

function AppLink(props: LinkProps) {
    const color =
        location.pathname === props.route ? 'primary.main' : 'info.main';
    return (
        <Button variant="text" href={props.route}>
            <AppTypography color={color} variant="h4">
                {props.title}
            </AppTypography>
        </Button>
    );
}
export interface LinkProps {
    route: string;
    title: string;
}
export interface HeaderProps {
    home: LinkProps;
    links: LinkProps[];
    bgcolor: string;
    logo: string;
}
export function Header(props: HeaderProps) {
    console.log(props.bgcolor);
    return (
        <Stack marginBottom={3}>
            <AppBar
                position="static"
                sx={{
                    height: '4rem',
                    bgcolor: props.bgcolor,
                    zIndex: (theme) => theme.zIndex.appBar,
                }}
            >
                <Stack direction="row">
                    <Box height="4rem" width="7.5rem">
                        <Logo
                            size="7.5rem"
                            href={props.home.route}
                            img={props.logo}
                        />
                    </Box>
                    <Stack
                        justifyContent="flex-start"
                        spacing={4}
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
                            <AppLink key={link.route} {...link} />
                        ))}
                    </Stack>
                </Stack>
            </AppBar>
            <Box
                alignSelf="start"
                height="auto"
                width="auto"
                bgcolor={props.bgcolor}
                zIndex={(theme) => theme.zIndex.appBar - 1000}
                sx={{ transform: 'perspective(10px) rotateX(-1deg)' }}
                paddingLeft="2.5rem"
                paddingRight="2.5rem"
                paddingBottom={1}
                marginLeft="7.5rem"
            >
                <Link href={props.home.route} color="secondary">
                    <AppTypography
                        fontWeight={500}
                        sx={{
                            transform: 'perspective(10px) rotateX(1deg)',
                        }}
                        color="text.primary"
                        variant="h3"
                        noWrap
                    >
                        {props.home.title}
                    </AppTypography>
                </Link>
            </Box>
        </Stack>
    );
}
