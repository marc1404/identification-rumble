<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-light rounded-0">
                <li class="breadcrumb-item">
                    <nuxt-link to="/dilemmas" class="text-danger">Dilemmas</nuxt-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    Dilemma
                </li>
            </ol>
        </nav>

    </div>
</template>

<script>
export default {
    name: 'Dilemma',
    head() {
        return {
            title: 'Dilemma'
        };
    }
};
</script>
