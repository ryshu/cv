<?php

// web/index.php
require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();

$app->register(new Silex\Provider\TwigServiceProvider(), array(
	'twig.path' => __DIR__.'/views',
));

$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
	'db.options' => array(
		'driver'   => 'pdo_mysql',
		'user' => 'username',
		'password' => '****',
		'dbname'   => '****',
		'charset'  => 'utf8mb4',
		'port'     => '***',
		'host'	   => '****'
	),
));

$app->register(new \SilexMarkdown\MarkdownExtension());

$app->get('/', function () use ($app) {
	return $app['twig']->render('home.html.twig');
});

$app->get('/mobile', function () use ($app) {
	return $app['twig']->render('mobile.html.twig');
});

$app->get('/home', function () use ($app) {
	return $app['twig']->render('home.html.twig');
});

$app->get('/skills', function () use ($app) {
	return $app['twig']->render('resume.html.twig');
});

$app->get('/portfolio', function () use ($app) {
	$q = $app['db']->fetchAll('SELECT * FROM card ORDER BY order_int DESC;');
	return $app['twig']->render('portfolio.html.twig', ['cards' => $q ]);
});

$app->get('/about', function () use ($app) {
	return $app['twig']->render('about.html.twig');
});

$app->get('/portfolio{id}', function ($id) use ($app) {
	$query = 'SELECT * FROM card WHERE id="'. $id . '"';
	$q = $app['db']->fetchAll($query);
	return $app['twig']->render('projet.html.twig', ['card' => $q[0] ]);
});

$app->run();