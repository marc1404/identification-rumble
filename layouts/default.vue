<template>
    <div class="container-fluid py-3">
        <h1>
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
</template>