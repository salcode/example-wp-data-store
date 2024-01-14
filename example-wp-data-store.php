<?php
/**
 * Plugin Name:       Example WP Data Store
 * Plugin URI:        https://github.com/salcode/example-wp-data-store
 * Description:       Example WordPress data store.
 * Version:           0.1.0
 * Requires at least: 6.4
 * Requires PHP:      8.0
 * Author:            Sal Ferrarello
 * Author URI:        https://salferrarello.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       example-wp-data-store
 * Domain Path:       /languages
 */

namespace salcode\ExampleWpDataStore;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
