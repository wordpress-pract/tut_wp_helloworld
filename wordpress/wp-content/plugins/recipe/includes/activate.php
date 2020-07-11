<?php

function r_activate_plugin()
{
    if (version_compare(get_bloginfo('version'), '5.0', '<')) {
        wp_die( __("You must update WordPress to use this plugin", 'recipe') );
    }

    global $wpdb;
    $prefix = $wpdb->prefix;
    $charset_collate = $wpdb->get_charset_collate();
    $createSQL = "
        CREATE TABLE `" . $prefix . "recipe_ratings` (
            `ID` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
            `recipe_id` BIGINT(20) UNSIGNED NOT NULL,
            `rating` FLOAT(3,2) UNSIGNED NOT NULL,
            `user_ip` VARCHAR(50) NOT NULL,
            PRIMARY KEY (`ID`)
        )
        ENGINE=InnoDB " . $charset_collate . " ;
    ";

    require( ABSPATH . "/wp-admin/includes/upgrade.php" );
    dbDelta( $createSQL);
}
