import * as jsonfile from 'jsonfile';
import Stats from './Stats';

class StatsService {
    private stats: Stats = new Stats();

    constructor() {
        this.init();
    }

    init() {
        const rawStats = jsonfile.readFileSync('./stats.json', {
            throws: false
        });

        if (!rawStats) {
            return;
        }

        const { dilemmas, languages } = rawStats;
        this.stats = new Stats(dilemmas, languages);
    }

    increaseDilemmaAnswer(dilemmaId: number, answerId: number) {
        this.stats.increaseDilemmasAnswer(dilemmaId, answerId);
        this.saveStats();
    }

    increaseLanguage(languageCode: string) {
        this.stats.increaseLanguage(languageCode);
        this.saveStats();
    }

    saveStats() {
        jsonfile.writeFile('./stats.json', this.stats, error => {
            if (error) {
                console.error(error);
            }
        });
    }
}

export default new StatsService();
