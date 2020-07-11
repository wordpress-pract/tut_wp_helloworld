<?php
/*
Plugin Name: Recipe
Plugin URI: http://wordpress.org/plugins/hello-dolly/
Description: A simple Wordpress plugin tha allows user to create recipes and rate those recipes
Author: Hugo
Version: 1.0
Author URI: https://udemy.com
Text Domain: recipe
*/

if (!function_exists('add_action')) {
    echo "Hi there! I'm just a plugin";
    exit;
}

// Setup



// Includes
include('includes/activate.php');
include('includes/init.php');
include('process/save-post.php');
include('process/filter-content.php');


// Hooks
register_activation_hook(__FILE__, 'r_activate_plugin');
add_action('init', 'recipe_init'); // Help to setup the plugin
add_action('save_post_recipe', 'r_save_post_admin', 10, 3); // This is new fn from 3.7, called, dynamic hook, trigger on action save_post of a post-recipe-type
add_filter('the_content', 'r_filter_recipe_content');

// Shortcodes