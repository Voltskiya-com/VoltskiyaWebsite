import { AppTypography } from '@app/ui';
import { Card, Chip, Stack } from '@mui/material';
import { MajorFeature as MajorFeature } from './Features.store';

function MajorFeatureHeader({ feature }: MajorFeatureCardProps) {
    return (
        <Stack alignItems="center" spacing={2} direction="row">
            <AppTypography noWrap color="text.primary" variant="h5">
                {feature.name}
            </AppTypography>
            <Chip
                label={
                    <AppTypography color="text.secondary">
                        {feature.status}
                    </AppTypography>
                }
            />
        </Stack>
    );
}
export interface MajorFeatureCardProps {
    feature: MajorFeature;
}
export function MajorFeatureCard({ feature }: MajorFeatureCardProps) {
    return (
        <Card>
            <Stack padding={2} spacing={1}>
                <AppTypography>(Major Feature)</AppTypography>
                <MajorFeatureHeader feature={feature} />
                <AppTypography>Completion: {feature.completion}%</AppTypography>
                <AppTypography>{feature.description}</AppTypography>
            </Stack>
        </Card>
    );
}
