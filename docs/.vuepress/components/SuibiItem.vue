<template>
    <div class="item">
        <slot />
    </div>
</template>

<script>
    export default {
        name: "SuibiItem"
    }
</script>

<style scoped>
    .item{
        font-size: 18px;
        text-align: center;
        margin-bottom: 5px;
    }
</style>
