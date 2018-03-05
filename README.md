# Website CV Oscar Marie--Taillefer

## Requirements

A working mysql setup
A working php setup
Composer 

## Installation

### Database

Sqilte is not support. To create a mysql database, use:

```
CREATE DATABASE my_database CHARACTER SET utf8;
CREATE TABLE `test`.`card` (
  `id` int(11) NOT NULL,
  `img_path` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `subtitle` varchar(255) NOT NULL,
  `meta_description` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `date` varchar(255) NOT NULL,
  `order_int` int(11) NOT NULL
)
```

### Silex

To install silex, run in the folder:
```
composer update
```
### Config

You need to change file web\index.php to setup your own database config

You should now be able to connect the website.
