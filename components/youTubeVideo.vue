<template>
    <div id="youtube-video"></div>
</template>

<script>
export default {
    name: 'YouTubeVideo',
    data() {
        return {
            player: null,
            intervalTask: null
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
                videoId: 'XfZyBC-Wxfg',
                playerVars: {
                    controls: 1,
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
            if (time < 83) {
                return;
            }

            this.player.pauseVideo();
            this.clearTask();
        },
        clearTask() {
            const { intervalTask } = this;

            if (intervalTask) {
                clearInterval(intervalTask);

                this.intervalTask = null;
            }
        }
    },
    mounted() {
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
        this.clearTask();
    }
};
</script>
