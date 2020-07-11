// console.log(wp);

import block_icons from '../icons/index';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType('udemy/recipe', {
    title: __('Recipe', 'recipe'),
    description: __(
        'Provides a short summary of a recipe.',
        'recipe'
    ),
    // common, formatting, layouts, widgets, embed
    category: 'common',
    // icon: 'welcome-learn-more' // dashicons
    icon: block_icons.wapuu,
    keywords: [
        __('Food', 'recipe'),
        __('Ingredients', 'recipe'),
        __('Meal Type', 'recipe'),
        __('Food', 'recipe'),
    ],
    supports: {
        html: false,
    },
    save: () => {
        return <p>Hello World!</p>
    }
});