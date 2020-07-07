<?php
/**
 * Front to the WordPress application. This file doesn't do anything, but loads
 * wp-blog-header.php which does and tells WordPress to load the theme.
 *
 * @package WordPress
 */

/**
 * Tells WordPress to load the WordPress theme and output it.
 *
 * @var bool
 */
define( 'WP_USE_THEMES', true );

function db_connect(){
    $servername = "localhost";
    $username = "root";
    $password = "qwerty";
    
    try {
      $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
      // set the PDO error mode to exception
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      echo "Connected successfully";
    } catch(PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
    }
  }

db_connect();


/** Loads the WordPress Environment and Template */
require __DIR__ . '/wp-blog-header.php';
