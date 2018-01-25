<template>
    <div id="youtube-video"></div>
</template>

<script>
const playerStates = {
    PAUSED: 2
};

export default {
    name: 'RegisterAnimation',
    props: {
        onPassport: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            player: null,
            intervalTask: null,
            lastPassportId: null,
            hasPaused: false
        };
    },
    methods: {
        onPlayerReady() {
            this.intervalTask = setInterval(
                () => this.checkVideoTime(this.player.getCurrentTime()),
                1000
            );
        },
        onYouTubeAPIReady() {
            const { YT } = window;
            this.player = new YT.Player('youtube-video', {
                videoId: 'N3FjLWUuDWU',
                playerVars: {
                    controls: 0,
                    autoplay: 0,
                    modestbranding: 1,
                    disablekb: 1,
                    enablejsapi: 1,
                    fs: 0,
                    rel: 0,
                    showinfo: 0
                },
                events: {
                    onReady: () => this.onPlayerReady()
                }
            });
        },
        checkVideoTime(time) {
            const shouldDoNothing = this.hasPaused || time < 91;

            if (shouldDoNothing) {
                return;
            }

            this.hasPaused = true;

            this.player.pauseVideo();
        },
        handlePassport(passport) {
            const hasPassportChanged = this.lastPassportId !== passport.id;
            this.lastPassportId = passport.id;

            if (hasPassportChanged) {
                this.hasPaused = false;

                this.player.seekTo(0);
                this.player.playVideo();
                return;
            }

            if (!this.player.getPlayerState) {
                return;
            }

            const playerState = this.player.getPlayerState();

            if (playerState === playerStates.PAUSED) {
                this.player.seekTo(98);
                this.player.playVideo();
            } else {
                const time = this.player.getCurrentTime();

                if (time >= 82 && time < 91) {
                    this.hasPaused = true;
                }
            }
        }
    },
    mounted() {
        this.onPassport.push(passport => this.handlePassport(passport));

        if (window.YT) {
            this.onYouTubeAPIReady();
            return;
        }

        window.onYouTubePlayerAPIReady = () => this.onYouTubeAPIReady();
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://www.youtube.com/player_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];

        firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
    },
    beforeDestroy() {
        if (this.intervalTask) {
            clearInterval(this.intervalTask);
        }
    }
};
</script>
