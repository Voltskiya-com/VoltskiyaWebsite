import { MinorFeature, MajorFeature } from '../../pages/feature/Features.store';
import minorFeatures from './MinorFeatures.json';
import majorFeatures from './MajorFeatures.json';
export function getMappedMajorFeature(): MajorFeature[] {
    return Object.entries(majorFeatures).map(([name, value]) => ({
        name,
        ...value,
    }));
}

export function getMappedMinorFeature(): MinorFeature[] {
    return Object.entries(minorFeatures).map(([name, value]) => ({
        name,
        ...value,
    }));
}
