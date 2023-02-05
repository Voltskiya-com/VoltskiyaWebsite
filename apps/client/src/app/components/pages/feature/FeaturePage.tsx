import { AppTypography, Page } from '@app/ui';
import { Masonry } from '@mui/lab';
import { MajorFeatureCard } from './MajorFeatureCard';
import {
    MajorFeature,
    useMajorFeatureList,
    useMinorFeatureList,
} from './Features.store';
import { MinorFeatureCard } from './MinorFeatureCard';
import { MinorFeature } from './Features.store';
import { Divider } from '@mui/material';

export function FeaturePage() {
    const majorFeatures = useMajorFeatureList();
    const minorFeatures = useMinorFeatureList();
    return (
        <Page
            title="Features"
            description="Minor features found below major features"
        >
            <Masonry defaultColumns={3} spacing={5}>
                {majorFeatures.map((feature: MajorFeature) => (
                    <MajorFeatureCard key={feature.name} feature={feature} />
                ))}
            </Masonry>
            <Divider>
                <AppTypography color="secondary">Minor Features</AppTypography>
            </Divider>
            <br />
            <Masonry defaultColumns={3} spacing={5}>
                {minorFeatures.map((feature: MinorFeature) => (
                    <MinorFeatureCard key={feature.name} feature={feature} />
                ))}
            </Masonry>
        </Page>
    );
}
