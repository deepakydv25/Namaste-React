# Theory:

● Explore all the ways of writing css.

-> Inline css
SCSS file
CSS file
Library (Material UI, Tailwindcss, Style components)

● How do we configure tailwind ?

-> Go to parcel framework in tailwindcss installation page

command - npm install -D tailwindcss postcss - npx tailwindcss init

● In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins) ?

-> content : The content section of your tailwind.config.js file is where you configure the paths to all of your HTML templates, JavaScript components, and any other source files that contain Tailwind class names.

theme : The theme section of your tailwind.config.js file is where you define your project’s color palette, type scale, fonts, breakpoints, border radius values, and more.

extend : If you’d like to preserve the default values for a theme option but also add new values, add your extensions under the extend key in the theme section of your configuration file.

plugins : The plugins section allows you to register plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.

● Why do we have .postcssrc file ?

-> While bundling or building our app, to inform the bundler that we are using tailwindcss. so bundle it also.

# Coding:

● Configure Tailwind an try to build your whole app using tailwind.

# References:

● https://styled-components.com/
● https://tailwindcss.com/
● https://getbootstrap.com/
● Material UI - https://mui.com/
