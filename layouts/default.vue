<template>
    <div>

        <div class="d-flex flex-column" style="min-height: 100vh">
            <header class="bg-light p-2">
                <img class="img-fluid" style="max-height: 50px" src="~/assets/logo-hq.png" alt="Identification Rumble">
            </header>

            <div class="row m-0 flex-column flex-sm-row" style="flex: 1">
                <div class="col-12 col-md-4 col-lg-2 d-flex p-0">

                    <aside class="bg-light w-100">
                        <nav class="nav nav-pills flex-column">
                            <nuxt-link :key="link.to" :to="link.to" class="nav-item nav-link" :exact="link.exact" v-for="link in aside">
                                <i class="material-icons md-18 text-dark pr-1">{{ link.icon }}</i>
                                <span class="text-danger">{{ link.label }}</span>
                            </nuxt-link>
                        </nav>
                    </aside>

                </div>
                <div class="col-12 col-md-8 col-lg-10 p-0">

                    <article>
                        <nuxt />
                    </article>

                </div>
            </div>
        </div>

        <footer class="bg-light py-1">
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
export default {
    name: 'Layout',
    data() {
        return {
            aside: [
                { to: '/', label: 'Home', icon: 'home', exact: true },
                { to: '/dilemmas', label: 'Dilemmas', icon: 'report_problem' },
                {
                    to: '/passports',
                    label: 'Passports',
                    icon: 'perm_contact_calendar'
                },
                {
                    to: '/evaluation',
                    label: 'Evaluation',
                    icon: 'insert_chart'
                },
                { to: '/language', label: 'Language', icon: 'translate' }
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

@media (max-width: 575px) {
    .h1-responsive {
        font-size: 2rem;
    }
}
</style>
