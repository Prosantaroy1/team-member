<?php
/**
 * Plugin Name:       WBD Team Member
 * Description:       A powerful, beautifully designed Team Member block with multiple layouts, hover animations, social links, and CTA buttons.
 * Version: 1.0.0
 * Requires at least: 6.3
 * Requires PHP: 7.2
 * Author: WPBrand Digital
 * Author URI: https://wpbranddigital.org
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:  wbd-team-member
 * @package wbdTeamMember
 */



if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'wbd_team_member_wbd_team_member_block_init' ) ) {

	function wbd_team_member_wbd_team_member_block_init() {
		register_block_type( __DIR__ . '/build/' );
	}

	add_action( 'init', 'wbd_team_member_wbd_team_member_block_init' );
}