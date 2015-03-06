#angular-shopping-cart

A simple shopping cart using angular, grunt and sass.

Demo: http://angular-shopping-cart.rafaelbirkmann.de/

![Preview](https://raw.githubusercontent.com/birkmann/angular-shopping-cart/master/preview.png)


.htaccess

```
RewriteEngine On 
Options FollowSymLinks

RewriteBase /

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /#/$1 [L]
```