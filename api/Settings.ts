import defaultTagMapping from './defaultTagMapping';

export default class Settings {
    private readOnlyMode: boolean;
    private tagMapping: Object;

    constructor(
        private readOnlyMode: boolean = false,
        private tagMapping: Object = defaultTagMapping
    ) {}

    setReadOnlyMode(enabled: boolean) {
        this.readOnlyMode = enabled;
    }

    getReadOnlyMode(): boolean {
        return this.readOnlyMode;
    }

    getTagMapping(): Object {
        return this.tagMapping;
    }

    setTagMapping(tag: string, value: string): boolean {
        const mapping = this.tagMapping[tag];

        if (!mapping) {
            return false;
        }

        mapping.value = value;

        return true;
    }
}
