<?php
/******************************************************************
WP_CUSTOM_ADMIN_COLOR_SCHEME.PHP

    > FUNCTIONS

    @DESCRIPTION
        functions to add an additional custom color scheme to
        the WordPress backend and set it to default for all
        current and new users.

    @USAGE
        copy these functions into the functions.php in the
        WordPress theme folder and create a 'backend-style.css'
        file to add custom CSS
******************************************************************/


/******************************************************************
    FUNCTIONS
******************************************************************/

// add additional color scheme to wordpress backend
function audiblog_additional_admin_color_schemes() {
  $theme_dir = get_template_directory_uri();

  wp_admin_css_color(
      'audi-backend-css',
      __('Audi Backend'),
      $theme_dir . '/backend-style.css',
      array('#000', '#bb0a30', '#990B29', '#b3b3b3'),
      array( 'base' => '#f2f2f2', 'focus' => '#fff', 'current' => '#fff' )
  );
}
add_action('admin_init', 'audiblog_additional_admin_color_schemes');

// set default color scheme for new users
function audiblog_set_default_admin_color($user_id) {
  $args = array(
    'ID' => $user_id,
    'admin_color' => 'audi-backend-css'
  );
  wp_update_user( $args );
}
add_action('user_register', 'audiblog_set_default_admin_color');

// change default color scheme for all users
function audiblog_update_user_option_admin_color( $color_scheme ) {
    $color_scheme = 'audi-backend-css';
    return $color_scheme;
}
add_filter( 'get_user_option_admin_color', 'audiblog_update_user_option_admin_color', 5 );

?>