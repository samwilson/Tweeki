const mix = require('laravel-mix');



/*
 |--------------------------------------------------------------------------
 | Default Tweeki skin styles and scripts
 |--------------------------------------------------------------------------
 |
 | Those mix functions are compiling the default scripts and styles for
 | the Tweeki skin. Files compiled from with this mix functions do
 | overwirte the default Tweeki assets. Those files will also be
 | overwritten with any git update from the skin repository.
 |
 */
mix.js('resources/scripts/tweeki.js', 'public/js')
   .sass('resources/styles/tweeki.scss', 'public/css');



/*
 |--------------------------------------------------------------------------
 | Custom Tweeki skin styles
 |--------------------------------------------------------------------------
 |
 | Those functions are meant to be used for custom assets. If you would like
 | to create your own skin assets create the listed files and use the npm
 | scripts to create custom assets. Custom assets have to be activated
 | from whitin the skin settings to be used by your skin installtion.
 |
 | You can rename the given files as follows to have a basic setup for your
 | own skin styles and scripts:
 |
 | - ./resources/scripts/example.custom.js     => ./resources/scripts/custom.js
 | - ./resources/styles/example.custom.scss    => ./resources/styles/custom.scss
 |
 * /
mix.js('resources/scripts/custom.js', 'public/js')
   .sass('resources/styles/custom.scss', 'public/css');

/**/