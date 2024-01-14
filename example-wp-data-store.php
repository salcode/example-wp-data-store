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

function register_assets() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_register_script(
		'example-wp-data-store',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
}

function enqueue_editor_assets() {
	wp_enqueue_script( 'example-wp-data-store' );
}

add_action('plugins_loaded', function() {
	load_plugin_textdomain( 'example-wp-data-store', false, __DIR__ );
});

add_action( 'init', __NAMESPACE__ . '\register_assets' );
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_editor_assets' );
