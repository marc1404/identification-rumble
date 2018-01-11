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
                <a rel="noopener" href="https://github.com/marc1404/identification-rumble" class="nav-item nav-link text-left text-md-center">GitHub</a>
                <a rel="noopener" href="http://uva-hcm.com/index.php?title=ID2017-team5" class="nav-item nav-link text-left text-md-center">Wiki</a>
                <a rel="noopener" href="http://uva-aux.nl/" class="nav-item nav-link text-left text-md-center">AUX'18</a>
                <a rel="noopener" href="http://www.uva.nl/en/home" class="nav-item nav-link text-left text-md-center">University of Amsterdam</a>
                <a rel="noopener" href="https://www.verzetsmuseum.org/museum/en/museum" class="nav-item nav-link text-left text-md-center">Verzetsmuseum Amsterdam</a>
                <a rel="noopener" href="https://www.ma-web.nl/" class="nav-item nav-link text-left text-md-center">Mediacollege Amsterdam</a>
            </nav>
        </footer>

    </div>
</template>
