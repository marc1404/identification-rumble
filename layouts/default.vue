<template>
    <div>

        <div class="container-fluid py-3" style="min-height: 100vh">
            <h1>
                <img src="/favicon.png" style="width: 40px; height: 40px">
                Identification Rumble
                <small class="text-muted">Verzetsmuseum Amsterdam</small>
            </h1>

            <hr />

            <div class="row">
                <div class="col-12 col-md-4 col-lg-2">
                    <nav class="nav nav-pills flex-column">
                        <nuxt-link to="/" class="nav-item nav-link" exact>Home</nuxt-link>
                        <nuxt-link to="/dilemmas" class="nav-item nav-link">Dilemmas</nuxt-link>
                        <nuxt-link to="/passports" class="nav-item nav-link">Passports</nuxt-link>
                        <nuxt-link to="/evaluation" class="nav-item nav-link">Evaluation</nuxt-link>
                    </nav>
                </div>
                <div class="col-12 col-md-8 col-lg-10">
                    <nuxt />
                </div>
            </div>
        </div>

        <footer class="bg-light py-3">
            <nav class="nav nav-fill flex-column flex-md-row">
                <a rel="noopener" :href="link.href" class="nav-item nav-link text-left text-md-center text-danger" v-for="link in footer">
                    <i class="material-icons md-18 text-dark">{{ link.icon }}</i>
                    {{ link.label }}
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
</style>
