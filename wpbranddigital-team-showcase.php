<?php
/**
 * Plugin Name:       BrandDigital Team Showcase
 * Description:       A powerful, beautifully designed Team Member block with multiple layouts, hover animations, social links, and CTA buttons.
 * Version: 1.0.0
 * Requires at least: 6.3
 * Requires PHP: 7.2
 * Author: WPBrand Digital
 * Author URI: https://wpbranddigital.org
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:  wpbranddigital-team-showcase
 * @package BrandDigitalTeamShowcase
 */



if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'wpbranddigital_team_showcase_block_init' ) ) {

	function wpbranddigital_team_showcase_block_init() {
		register_block_type( __DIR__ . '/build/' );
	}

	add_action( 'init', 'wpbranddigital_team_showcase_block_init' );
}