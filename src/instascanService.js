class InstascanService {
    getInstascan() {
        return new Promise(resolve => {
            const interval = setInterval(() => {
                const { Instascan } = window;

                if (!Instascan) {
                    return;
                }

                clearInterval(interval);
                resolve(Instascan);
            }, 1);
        });
    }
}

export default new InstascanService();
