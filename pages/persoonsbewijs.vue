<template>
    <div class="p-3">
        <h1>&bdquo;Persoonsbewijs&rdquo;</h1>

        <div class="row">
            <div class="col-12 col-lg-6 mb-3">

                <h2>Outside</h2>
                <div ref="outside">
                    <img src="~/assets/persoonsbewijs-outside.png" class="img-fluid">
                </div>

            </div>
            <div class="col-12 col-lg-6">

                <h2>Inside</h2>
                <div ref="inside">
                    <img src="~/assets/persoonsbewijs-inside.png" class="img-fluid">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Persoonsbewijs',
    head() {
        return {
            title: 'Persoonsbewijs'
        };
    },
    async mounted() {
        const OriDomi = await import('oridomi');
        const { outside, inside } = this.$refs;

        accordify(outside);
        accordify(inside);

        function accordify(element) {
            new OriDomi(element, {
                vPanels: 3,
                maxAngle: 80,
                ripple: 1,
                speed: 2000
            }).accordion(45);
        }
    }
};
</script>
