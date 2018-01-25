<template>
    <div class="p-3">

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
