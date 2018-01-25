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

    getTagMapping(): Object {
        return this.tagMapping;
    }

    setTagMapping(tag: string, value: string) {
        this.tagMapping[tag] = value;
    }
}
