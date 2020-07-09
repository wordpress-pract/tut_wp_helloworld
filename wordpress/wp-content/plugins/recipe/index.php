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

// Hooks
register_activation_hook(__FILE__, 'r_activate_plugin');
add_action('init', 'recipe_init'); // Help to setup the plugin

// Shortcodes