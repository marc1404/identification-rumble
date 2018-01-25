class HotkeysService {
    constructor() {
        if (process.server) {
            return;
        }

        this.listeners = {
            left: [],
            right: [],
            up: [],
            down: []
        };

        this.init().catch(error => console.error(error));
    }

    onLeft(listener) {
        this.listeners.left.push(listener);
    }

    onRight(listener) {
        this.listeners.right.push(listener);
    }

    onUp(listener) {
        this.listeners.up.push(listener);
    }

    onDown(listener) {
        this.listeners.down.push(listener);
    }

    async init() {
        const { Listener } = await import('keypress.js/keypress-2.1.4.min.js');
        const listener = new Listener();

        listener.register_many([
            {
                keys: 'shift left',
                prevent_repeat: true,
                on_keydown: () => {
                    this.listeners.left.forEach(listener => listener());
                }
            },
            {
                keys: 'shift right',
                prevent_repeat: true,
                on_keydown: () => {
                    this.listeners.right.forEach(listener => listener());
                }
            },
            {
                keys: 'shift up',
                prevent_repeat: true,
                on_keydown: () => {
                    this.listeners.up.forEach(listener => listener());
                }
            },
            {
                keys: 'shift down',
                prevent_repeat: true,
                on_keydown: () => {
                    this.listeners.down.forEach(listener => listener());
                }
            }
        ]);
    }
}

export default new HotkeysService();
