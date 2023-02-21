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


/**
 * CASE 1 : explicit variant call + no v-bind args
 * - the variant property is correctly rendered in the sourcecode
 * - the UI rendering is OK
 * - but the default slot is not rendered in the sourcecode
 * 
 * Story Template : 
 * 
 * ```
 *  <Button variant="primary">{{args.default}}</Button>
    <Button variant="secondary">{{args.default}}</Button>  
 * ```
 */
export const Case1 = {
    render: (args) => ({
        components: {Button},
        setup() {
            return {
                args,
            };
        },
        template: `
            <Button variant="primary">{{args.default}}</Button>
            <Button variant="secondary">{{args.default}}</Button>  
        `,
    }),
    args: {
        default: 'Button',
    }
};


/**
 * CASE 2 : explicit variant call + v-bind args
 * - the variant property is not correctly rendered in the sourcecode
 * - the UI rendering is OK
 * - the default slot is rendered in the sourcecode but with non-required double-quotes around it
 * - size property is correctly rendered
 * 
 * Story Template : 
 * 
 * ```
 * <Button v-bind="args" variant="primary">{{args.default}}</Button>
   <Button v-bind="args" variant="secondary">{{args.default}}</Button> 
   
   // args.size = 'small' is set
 * ```
 */
 export const Case2 = {
    render: (args) => ({
        components: {Button},
        setup() {
            return {
                args,
            };
        },
        template: `
            <Button v-bind="args" variant="primary">{{args.default}}</Button>
            <Button v-bind="args" variant="secondary">{{args.default}}</Button>  
        `,
    }),
    args: {
        default: 'Button',
        size: 'small',
    }
};

/**
 * CASE 3 : explicit variant call + direct slot usage without args
 * - the variant property is not correctly rendered in the sourcecode
 * - the UI rendering is OK
 * - the default slot is not rendered in the sourcecode
 * 
 *  There is as well a Vue warning : 
 * "Extraneous non-props attributes (default) were passed to component but could not be automatically inherited because component renders fragment or text root nodes." 
 * 
 * Story Template : 
 * 
 * ```
<Button variant="primary">Button</Button>  
 <Button variant="secondary">Button</Button>  
 * ```
 *  */
export const Case3 = {
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