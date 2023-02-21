import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary'],
    }
  },
};

export const Variants = {
    render: (args) => ({
        components: {Button},
        setup() {
            return {
                args,
            };
        },
        template: `
            <Button variant="primary">Button</Button>  
            <Button variant="secondary">Button</Button>  
        `,
    }),
};