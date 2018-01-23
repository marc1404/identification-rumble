class CastService {
    constructor() {
        this.isActive = false;
    }

    toggle() {
        this.isActive = !this.isActive;
    }
}

export default new CastService();
