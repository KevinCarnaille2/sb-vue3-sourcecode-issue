import ButtonIcon from './ButtonIcon.vue';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
};

/**
 * Whenever we use a property containing the string "icon" it renders this kind of code snippet
 */
export const Default = {
    args: {
        icon: 'I am the icon property',
        iconSize: 'small',
        color: 'blue'
    }
}
