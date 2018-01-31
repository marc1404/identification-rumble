<template>
    <div id="youtube-video"></div>
</template>

<script>
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
            lastPassportId: null
        };
    },
    methods: {
        onYouTubeAPIReady() {
            const { YT } = window;
            const width = Math.max(window.innerWidth / 2, 300);
            this.player = new YT.Player('youtube-video', {
                videoId: 'I5H5mv76yY8',
                width: width,
                height: width / 2,
                playerVars: {
                    controls: 0,
                    autoplay: 0,
                    modestbranding: 1,
                    disablekb: 0,
                    enablejsapi: 1,
                    fs: 0,
                    rel: 0,
                    showinfo: 0
                }
            });
        },
        handlePassport(passport) {
            const hasPassportChanged = this.lastPassportId !== passport.id;
            this.lastPassportId = passport.id;

            if (hasPassportChanged) {
                this.player.seekTo(0);
                this.player.playVideo();
                return;
            }

            if (!this.player.getPlayerState) {
                return;
            }

            const time = this.player.getCurrentTime();

            if (time >= 95 && time < 135) {
                this.player.seekTo(135);
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
    }
};
</script>
