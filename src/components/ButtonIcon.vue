<template>
    <div>Icon prop based component <span :style="{color}">{{ icon }}</span></div>
</template>

<script lang="ts" setup>
const props = defineProps({
    icon: String,
    iconSize: String,
    color: String,
});

</script>