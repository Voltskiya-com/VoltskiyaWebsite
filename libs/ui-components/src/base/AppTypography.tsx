import { Typography, TypographyProps } from '@mui/material';

export type AppTypographyProps = TypographyProps;
export function AppTypography(props: AppTypographyProps) {
    return (
        <Typography
            fontWeight={500}
            fontFamily="Roboto"
            color="info.main"
            {...props}
        />
    );
}
