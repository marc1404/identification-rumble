<template>
    <div>

        <button type="button" class="btn btn-light btn-sm btn-cast" :class="{ active: cast.isActive }" @click="cast.toggle()">
            <i class="material-icons">{{ castIcon }}</i>
        </button>

        <header class="bg-light p-2" style="padding-right: 50px !important" v-show="!cast.isActive">
            <img class="img-fluid" style="max-height: 50px" src="~/assets/logo-hq.png" alt="Identification Rumble">
        </header>

        <div class="content-container">
            <aside class="sidebar bg-light" v-if="!cast.isActive">
                <nav class="nav nav-pills flex-column">
                    <nuxt-link :key="link.to" :to="link.to" class="nav-item nav-link text-nowrap" :exact="link.exact" v-for="link in aside">
                        <i class="material-icons md-18 text-dark pr-1">{{ link.icon }}</i>
                        <span class="text-danger">{{ link.label }}</span>
                    </nuxt-link>
                </nav>
            </aside>
            <article>
                <nuxt />
            </article>
        </div>

        <footer class="bg-light py-1" v-show="!cast.isActive">
            <nav class="nav nav-fill flex-column flex-md-row">
                <a rel="noopener" :href="link.href" class="nav-item nav-link text-left text-md-center" v-for="link in footer">
                    <i class="material-icons md-18 text-dark pr-1">{{ link.icon }}</i>
                    <span class="text-danger">{{ link.label }}</span>
                </a>
            </nav>
        </footer>

    </div>
</template>

<script>
import castService from '~/src/castService';
import hotkeysService from '~/src/hotkeysService';

export default {
    name: 'Layout',
    data() {
        return {
            cast: castService,
            aside: [
                { to: '/', label: 'Home', icon: 'home', exact: true },
                {
                    to: '/passports',
                    label: 'Passports',
                    icon: 'perm_contact_calendar'
                },
                { to: '/language', label: 'Language', icon: 'translate' },
                { to: '/dilemmas', label: 'Dilemmas', icon: 'report_problem' },
                {
                    to: '/evaluation',
                    label: 'Evaluation',
                    icon: 'insert_chart'
                }
            ],
            footer: [
                {
                    href: 'https://github.com/marc1404/identification-rumble',
                    label: 'GitHub',
                    icon: 'code'
                },
                {
                    href: 'http://uva-hcm.com/index.php?title=ID2017-team5',
                    label: 'Wiki',
                    icon: 'info_outline'
                },
                {
                    href: 'http://uva-aux.nl/',
                    label: "AUX'18",
                    icon: 'local_play'
                },
                {
                    href: 'http://www.uva.nl/en/home',
                    label: 'University of Amsterdam',
                    icon: 'school'
                },
                {
                    href: 'https://www.verzetsmuseum.org/museum/en/museum',
                    label: 'Verzetsmuseum Amsterdam',
                    icon: 'account_balance'
                },
                {
                    href: 'https://www.ma-web.nl/',
                    label: 'Mediacollege Amsterdam',
                    icon: 'school'
                }
            ]
        };
    },
    computed: {
        castIcon() {
            return this.cast.isActive ? 'cast_connected' : 'cast';
        }
    },
    mounted() {
        const pages = [
            '/language',
            '/dilemmas/register',
            '/dilemmas/sign',
            '/evaluation'
        ];

        hotkeysService.onLeft(() => {
            const page = this.$route.path;
            const currentIndex = pages.indexOf(page);
            let nextIndex = currentIndex - 1;

            if (nextIndex < 0) {
                nextIndex = pages.length - 1;
            }

            this.$router.push(pages[nextIndex]);
        });

        hotkeysService.onRight(() => {
            const page = this.$route.path;
            const currentIndex = pages.indexOf(page);
            let nextIndex = currentIndex + 1;

            if (nextIndex >= pages.length) {
                nextIndex = 0;
            }

            this.$router.push(pages[nextIndex]);
        });
    }
};
</script>

<style>
body {
    overflow-x: hidden;
    overflow-y: scroll;
}

.material-icons {
    display: inline-flex;
    vertical-align: middle;
}

.material-icons.md-18 {
    font-size: 18px;
}
.material-icons.md-24 {
    font-size: 24px;
}
.material-icons.md-36 {
    font-size: 36px;
}
.material-icons.md-48 {
    font-size: 48px;
}

.nav-item.nav-link.active {
    background-color: #343a40;
    border-radius: 0;
}

.nav-item.nav-link.active .material-icons {
    color: white !important;
}

.btn-cast {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 42000;
}

.content-container {
    display: flex;
    align-items: stretch;
    flex-direction: column;
}

@media (min-width: 768px) {
    .content-container {
        flex-direction: row;
    }

    .sidebar {
        min-height: 100vh;
    }
}
</style>
