<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'clothing_store2' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ',ps_ -3TIVyNP|e4et2c4=I2XO>L{fhOD>I@Wa ./0?<Kmih92NA9X?SS7.i0^Y ' );
define( 'SECURE_AUTH_KEY',  '2M>cTa_p(s=d`JeT15i!VLw&|6X#{e-d0*/%h]uq8X)L0h{muY=GNMHt8Z_GOu:v' );
define( 'LOGGED_IN_KEY',    'z.YXzL#o&.Z}e=Fz`$je.8?%D&;baW]b21az@c)6 ^0<*4BH|0A>o]t>dsH=Esar' );
define( 'NONCE_KEY',        ')r@R:&`96#^iKBBeuFX^e41fRv37h6W@7j~c 5g.tBcOd[bab98c[1-]+e}qNecg' );
define( 'AUTH_SALT',        'P4ur<=+3<H7E9,<*}c=Di@g<U(zu^m?oH=$P`@ab~,uTt%Om:jtR0G-@;~CG:j=g' );
define( 'SECURE_AUTH_SALT', 'Ae(,xo0+FC!Tm^#5GUQhHzJvBQT81J|$)B1|^qzkr4. >t_}(6/cuK9^VsnVC%j^' );
define( 'LOGGED_IN_SALT',   'nh_bN*+WYtsQoSZNqlvDW KY5UqjA:^`1t|r5/&M[@%z5#/+L(gnVjNaXti+{<_!' );
define( 'NONCE_SALT',       '7@8GZDN]WA_27.uFyjCJw( XL25&/^J;+-aR_hf>$Vd#G^lR@1cA41U8D[,UP$!p' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
