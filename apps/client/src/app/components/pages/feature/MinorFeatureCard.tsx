import { AppTypography } from '@app/ui';
import { Card, Chip, Stack } from '@mui/material';
import { MinorFeature } from './Features.store';

export interface MinorFeatureCardProps {
    feature: MinorFeature;
}
export function MinorFeatureCard({ feature }: MinorFeatureCardProps) {
    return (
        <Card>
            <Stack padding={2} spacing={1}>
                <AppTypography>(Minor Feature)</AppTypography>
                <AppTypography color="text.primary" variant="h5">
                    {feature.name}
                </AppTypography>
                <AppTypography>{feature.description}</AppTypography>
            </Stack>
        </Card>
    );
}
