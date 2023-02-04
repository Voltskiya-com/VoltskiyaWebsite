import { AppTypography } from '@app/ui';
import { Card, Chip, Stack } from '@mui/material';
import { FeatureSkill } from './Features.store';

function FeatureHeader({ feature }: FeatureCardProps) {
    return (
        <Stack spacing={2} direction="row">
            <AppTypography color="text.primary" variant="h5">
                {feature.name}
            </AppTypography>
            <Chip
                label={
                    <AppTypography color="text.secondary">
                        {feature.type}
                    </AppTypography>
                }
            />
        </Stack>
    );
}
export interface FeatureCardProps {
    feature: FeatureSkill;
}
export function FeatureCard({ feature }: FeatureCardProps) {
    return (
        <Card>
            <Stack padding={2} spacing={1}>
                <FeatureHeader feature={feature} />
                <AppTypography>{feature.description}</AppTypography>
            </Stack>
        </Card>
    );
}
