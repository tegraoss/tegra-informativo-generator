# tegra-informativo-generator

Application responsible for creating the "Tegra - informativo" using [Javascript vanilla](http://vanilla-js.com/), [Cerberus](http://tedgoas.github.io/Cerberus/) and PHP with [Silex](http://silex.sensiolabs.org/) and [Composer](https://getcomposer.org)


Installation
------------------------
```
  cd tegra-informativo-generator/
  composer init
  composer install
  composer require silex/silex "~2.0"
  php -S localhost:8080
```
How to use it
------------------------
  - To add a new section:
    1. Select the *add section* button
    2. Then select the element you want to edit. e.g: *Select image*
    3. Enter the new data to the element. e.g: *Choose a file in the pop-up windows and, then press 'upload me!'*
    4. After editing the section press the *'save'* button
    5. To remove a section: Select the text of the section you want to remove and then press *Remove*
  - *When finished:* Just copy the content of the web page and paste in the e-mail body.
