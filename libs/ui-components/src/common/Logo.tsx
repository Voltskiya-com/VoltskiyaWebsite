import { Box, useTheme } from '@mui/material';

export interface LogoProps {
    href: string;
    size: string;
    img: string;
}
export function Logo(props: LogoProps) {
    return (
        <Box width={props.size} height={props.size}>
            <a href={props.href}>
                <img
                    src={props.img}
                    alt="Logo"
                    style={{
                        width: '100%',
                        height: '100%',
                        border: '3px',
                        borderStyle: 'solid',
                        borderRadius: '50%',
                        borderColor: 'primary',
                    }}
                />
            </a>
        </Box>
    );
}
