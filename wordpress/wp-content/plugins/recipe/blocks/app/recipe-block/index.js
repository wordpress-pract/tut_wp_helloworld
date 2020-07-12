// console.log(wp);

import block_icons from '../icons/index';
import './editor.scss';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InspectorControls, BlockControls, AlignmentToolbar, BlockAlignmentToolbar } = wp.editor;
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
            type: 'string',
            source: 'text',
            selector: '.ingredients-ph'
        },
        cooking_time: {
            type: 'string',
            source: 'text',
            selector: '.cooking-time-ph'
        },
        utensils: {
            type: 'string',
            source: 'text',
            selector: '.utensils-ph'
        },
        cooking_experience: {
            type: 'string',
            source: 'text',
            default: 'Beginner',
            selector: '.cooking-experience-ph'
        },
        meal_type: {
            type: 'string',
            source: 'text',
            default: 'Breakfast',
            selector: '.meal-type-ph'
        },
        text_alignment: {
            type: 'string',
        },
        block_alignment: {
            type: 'string',
            default: 'wide',
        }
    },
    getEditWrapperProps: ({block_alignment}) => {
        if( 'left' == block_alignment || 'right' == block_alignment || 'full' == block_alignment) {
            return {
                'data-align': block_alignment
            }
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

        const updateTextAlignment = (new_val)=>{
            props.setAttributes({ text_alignment: new_val })
        };

        const updateBlockAlignment = (new_val)=>{
            props.setAttributes({ block_alignment: new_val })
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
                    <BlockControls>
                        <BlockAlignmentToolbar 
                            value={props.attributes.block_alignment}
                            onChange={updateBlockAlignment}
                        />
                        <AlignmentToolbar
                            value={props.attributes.text_alignment}
                            onChange={updateTextAlignment}
                        />
                    </BlockControls>
                    <ul class="list-unstyled" style={{ textAlign: props.attributes.text_alignment }}>
                        <li>
                            <strong>{__('Ingredients', 'recipe')}: </strong>
                            <span className='ingredients-ph'>{ props.attributes.ingredients }</span>
                        </li>
                        <li>
                            <strong>{__('Cooking Time', 'recipe')}: </strong> 
                            <span className='cooking-time-ph'>{ props.attributes.cooking_time }</span>
                        </li>
                        <li>
                            <strong>{__('Utensils', 'recipe')}: </strong>
                            <span className='utensils-ph'>{ props.attributes.utensils }</span>
                        </li>
                        <li>
                            <strong>{__('Cooking Experience', 'recipe')}: </strong>
                            <span className='cooking-experience-ph'>{ props.attributes.cooking_experience }</span>
                        </li>
                        <li>
                            <strong>{__('Meal Type', 'recipe')}: </strong>
                            <span className='meal-type-ph'>{ props.attributes.meal_type }</span>
                        </li>
                    </ul>
                </div>
            ]
        );
    },
    save: (props) => {
        return (
            <div className={ `align${props.attributes.block_alignment}` }>
                <ul class="list-unstyled" style={{ textAlign: props.attributes.text_alignment }}>
                    <li>
                        <strong>{__('Ingredients', 'recipe')}: </strong>
                        <span className='ingredients-ph'>{ props.attributes.ingredients }</span>
                    </li>
                    <li>
                        <strong>{__('Cooking Time', 'recipe')}: </strong> 
                        <span className='cooking-time-ph'>{ props.attributes.cooking_time }</span>
                    </li>
                    <li>
                        <strong>{__('Utensils', 'recipe')}: </strong>
                        <span className='utensils-ph'>{ props.attributes.utensils }</span>
                    </li>
                    <li>
                        <strong>{__('Cooking Experience', 'recipe')}: </strong>
                        <span className='cooking-experience-ph'>{ props.attributes.cooking_experience }</span>
                    </li>
                    <li>
                        <strong>{__('Meal Type', 'recipe')}: </strong>
                        <span className='meal-type-ph'>{ props.attributes.meal_type }</span>
                    </li>
                </ul>
            </div>
        )
    }
});