<template>
    <div class="title">
        <slot />
    </div>
</template>

<script>
    export default {
        name: "Title"
    }
</script>

<style scoped>
.title{
    font-size: 25px;
    text-align: center;
}
</style>
