<template>
    <button type="button" 
    :class="[
        'storybook-button',
        [`storybook-button--${variant}`],
        [`storybook-button--${size || 'medium'}`]
    ]" 
    @click="onClick" :style="style">
      <slot />
    </button>
  </template>
  
  <script lang="ts" setup>
  import './button.css';
  import { computed } from 'vue';

  const emit = defineEmits(['click']);

  const props = defineProps({
      variant: {
        // primary or secondary
        type: String,
        default: 'primary',
      },
      size: {
        type: String,
        validator: function (value: string) {
          return ['small', 'medium', 'large'].indexOf(value) !== -1;
        },
      },
      backgroundColor: {
        type: String,
      },
});

const style = computed(() => {
    return {
        backgroundColor: props.backgroundColor
    };
});

function onClick() {
    emit('click');
};

</script>