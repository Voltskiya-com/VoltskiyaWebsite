import {
    AppBar,
    Box,
    Button,
    Color,
    Divider,
    Link,
    Stack,
    useTheme,
} from '@mui/material';

import { AppTypography } from '../base/AppTypography';
import { TopHeaderBar } from './header/TopHeaderBar';
import { Logo } from './Logo';
import { TopHeaderLinkProps } from './header/TopHeaderLink';
import { SubHeaderBar } from './header/SubHeaderBar';

export type HeaderLinkProps = Omit<TopHeaderLinkProps, 'depth'>;
export interface HeaderProps {
    home: HeaderLinkProps;
    links: HeaderLinkProps[];
    bgcolor: string;
    logo: string;
}

export function Header(props: HeaderProps) {
    const bgcolorlight = useTheme().palette.augmentColor({
        color: { main: props.bgcolor },
    }).light;
    return (
        <Stack marginBottom={3}>
            <Box
                position="absolute"
                bgcolor={({ palette }) => palette.background.default}
                zIndex={({ zIndex }) => zIndex.appBar + 1}
                borderRadius="0 100% 100% 0"
            >
                <Logo
                    size="8rem"
                    href={props.home.fullRoute}
                    img={props.logo}
                />
            </Box>
            <TopHeaderBar {...props} />
            <SubHeaderBar {...props} bgcolor={bgcolorlight} />
            <Box
                alignSelf="end"
                bgcolor={bgcolorlight}
                zIndex={(theme) => theme.zIndex.appBar - 1000}
                paddingLeft="2.5rem"
                paddingRight="2.5rem"
                paddingBottom={1}
                marginRight="25%"
                sx={{ transform: 'perspective(10px) rotateX(-1deg)' }}
            >
                <Link href={props.home.fullRoute} color="secondary">
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
