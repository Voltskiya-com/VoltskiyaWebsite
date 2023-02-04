import { AppTypography } from '@app/ui';
import { Card, Chip, Stack } from '@mui/material';
import { MobSkill } from './Mobs.store';

function MobHeader({ mob }: MobCardProps) {
    return (
        <Stack spacing={2} direction="row">
            <AppTypography color="text.primary" variant="h5">
                {mob.name}
            </AppTypography>
            <Chip
                label={
                    <AppTypography color="text.secondary">
                        {mob.type}
                    </AppTypography>
                }
            />
        </Stack>
    );
}
export interface MobCardProps {
    mob: MobSkill;
}
export function MobCard({ mob }: MobCardProps) {
    return (
        <Card>
            <Stack padding={2} spacing={1}>
                <MobHeader mob={mob} />
                <AppTypography>{mob.description}</AppTypography>
            </Stack>
        </Card>
    );
}
