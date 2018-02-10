<template>
    <div class="p-3">

        <div class="row">
            <div class="col-12 col-lg-4">

                <h1>Project</h1>
                <p class="lead">
                    <a href="/Identification Rumble.pdf" rel="noopener">Paper</a>
                    <br>
                    <nuxt-link to="/video">Video</nuxt-link>
                    <br>
                    <a href="/poster.pdf" rel="noopener">Poster</a>
                    <br>
                    <a href="/presentation.pdf" rel="noopener">Presentation</a>
                    <br>
                    <nuxt-link to="/system-architecture">System Architecture</nuxt-link>
                    <br>
                    <nuxt-link to="/persoonsbewijs">Persoonsbewijs</nuxt-link>
                </p>

            </div>
            <div class="col-12 col-lg-8">

                <h1>About</h1>
                <p class="lead">
                    The Dutch Resistance Museum in Amsterdam would like to increase interactivity between their visitors and several dilemmas that Dutch citizens faced during World War II.
                    Identification Rumble offers a solution in smart replicas of identity cards with RFID tags that visitors can scan at several exhibits.
                    At the exhibits, visitors are shown an animation that explains the dilemma and are then able to choose what they would do using the RFID technology.
                    Afterwards, visitors are shown an evaluation of how their choices relate to other visitors and citizens of that time.
                </p>

            </div>
        </div>

        <div class="row">
            <div class="col-12 col-lg-4">
                <h2>University of Amsterdam</h2>
                <p class="lead">
                    <template v-for="student in uvaStudents">
                        <a rel="noopener" :href="student.link">{{ student.name }}</a>
                        <br>
                    </template>
                </p>
            </div>
            <div class="col-12 col-lg-4">

                <h2>Mediacollege Amsterdam</h2>
                <p class="lead">
                    <template v-for="student in maStudents">
                        <a rel="noopener" :href="student.link">{{ student.name }}</a>
                        <br>
                    </template>
                </p>

            </div>
            <div class="col-12 col-lg-4">

                <h2>
                    Verzetsmuseum Amsterdam
                </h2>
                <p class="lead">
                    <a rel="noopener" href="https://www.verzetsmuseum.org/museum/en/museum">Homepage</a>
                </p>
                <img src="~/assets/quote.jpg" class="img-fluid rounded" />

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            uvaStudents: [
                {
                    name: 'Gokie Wiegers',
                    link: 'mailto:gokie.wiegers@gmail.com'
                },
                {
                    name: 'Jerom Fernig',
                    link: 'http://www.clearfieldssix.nl/profile/jerom-fernig/'
                },
                {
                    name: 'Maaike Koolbergen',
                    link: 'mailto:maaikekoolbergen@gmail.com'
                },
                { name: 'Marc Vornetran', link: 'https://marc.vornetran.de' }
            ],
            maStudents: [
                { name: 'Danilo Beumans', link: 'http://danilobeumans.com/' },
                {
                    name: 'Djanco Dewus',
                    link: 'http://20554.hosts.ma-cloud.nl/'
                },
                { name: 'Gideon Buijs', link: 'http://gideonbuijs.com/' },
                { name: 'Keelan Maclear', link: 'http://www.maclear.nl/' },
                { name: 'Stefan Vermeulen', link: 'http://stefanverm.nl/' }
            ]
        };
    }
};
</script>
