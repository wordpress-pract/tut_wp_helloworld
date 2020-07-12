// console.log(wp);

import block_icons from '../icons/index';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, TextControl, SelectControl } = wp.components;

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
    attributes: {
        ingredients: {
            source: 'text',
        },
        cooking_time: {
            source: 'text',
        },
        utensils: {
            source: 'text',
        },
        cooking_experience: {
            source: 'text',
            default: 'Beginner',
        },
        meal_type: {
            source: 'text',
            default: 'Breakfast',
        }
    },
    edit: (props) => {
        const updateIngredients = (new_val)=>{
            props.setAttributes({ ingredients: new_val })
        };

        const updateCookTime = (new_val)=>{
            props.setAttributes({ cooking_time: new_val })
        };

        const updateUtensils = (new_val)=>{
            props.setAttributes({ utensils: new_val })
        };

        const updateCookingExperience = (new_val)=>{
            props.setAttributes({ cooking_experience: new_val })
        };

        const updateMealType = (new_val)=>{
            props.setAttributes({ meal_type: new_val })
        };

        return (
            [
                <InspectorControls>
                    <PanelBody title={__( 'Basics', 'recipe')}>
                        <PanelRow>
                            <p>{__('Configure the contents of your block here.', 'recipe')}</p>
                        </PanelRow>

                        <TextControl 
                            label={__('Ingredients', 'recipe')}
                            help={__('Ex: tomatoes, lettuce, olive oil, etc.', 'recipe')}
                            value={props.attributes.ingredients}
                            onChange = {updateIngredients}
                        />

                        <TextControl 
                            label={__('Cooking Time', 'recipe')}
                            help={__('How long will this take to cook?', 'recipe')}
                            value={props.attributes.cooking_time}
                            onChange = {updateCookTime}
                        />

                        <TextControl 
                            label={__('Utensils', 'recipe')}
                            help={__('Ex: spoon, knife, pots, pans', 'recipe')}
                            value={props.attributes.utensils}
                            onChange = {updateUtensils}
                        />

                        <SelectControl
                            label={__('Cooking Experience', 'recipe')}
                            help={__('How skilled should the reader be?', 'recipe')}
                            value={props.attributes.cooking_experience}
                            options={[
                                { value: 'Beginner', label: 'Beginner' },
                                { value: 'Intermediate', label: 'Intermediate' },
                                { value: 'Expert', label: 'Expert' }
                            ]}
                            onChange = {updateCookingExperience}
                        />

                        <SelectControl
                            label={__('Meal Type', 'recipe')}
                            help={__('When is this best eaten?', 'recipe')}
                            value={props.attributes.meal_type}
                            options={[
                                { value: 'Breakfast', label: 'Breakfast' },
                                { value: 'Lunch', label: 'Lunch' },
                                { value: 'Dinner', label: 'Dinner' }
                            ]}
                            onChange = {updateMealType}
                        />
                    </PanelBody>
                </InspectorControls>,
                <div className={props.className}>
                    <ul class="list-unstyled">
                        <li>
                            <strong>{__('Ingredients', 'recipe')}: </strong>
                            { props.attributes.ingredients }
                        </li>
                        <li>
                            <strong>{__('Cooking Time', 'recipe')}: </strong> 
                            { props.attributes.cooking_time }
                        </li>
                        <li>
                            <strong>{__('Utensils', 'recipe')}: </strong>
                            { props.attributes.utensils }
                        </li>
                        <li>
                            <strong>{__('Cooking Experience', 'recipe')}: </strong>
                            { props.attributes.cooking_experience }
                        </li>
                        <li>
                            <strong>{__('Meal Type', 'recipe')}: </strong>
                            { props.attributes.meal_type }
                        </li>
                    </ul>
                </div>
            ]
        );
    },
    save: (props) => {
        return <p>Hello World!</p>
    }
});