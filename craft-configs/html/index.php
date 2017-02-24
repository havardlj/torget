<?php

// redefine template path
define('CRAFT_TEMPLATES_PATH', "assets/templates/");

// configure environment variable based on SERVER_NAME
switch (strtolower($_SERVER['SERVER_NAME']))
{

	case 'www.site.no' :
		define('CRAFT_ENVIRONMENT', 'prod');
		$craftPath = '../craft';
		break;

	case 'site.skogen.io' :
		define('CRAFT_ENVIRONMENT', 'stage');
		$craftPath = './craft';
		break;

	default :
		define('CRAFT_ENVIRONMENT', 'local');
		$craftPath = '../craft';
		break;
}


// Do not edit below this line
$path = rtrim($craftPath, '/').'/app/index.php';

if (!is_file($path))
{
	if (function_exists('http_response_code'))
	{
		http_response_code(503);
	}

	exit('Could not find your craft/ folder. Please ensure that <strong><code>$craftPath</code></strong> is set correctly in '.__FILE__);
}

require_once $path;
