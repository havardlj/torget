<?php

return array(
  '*' => array(
    'isSystemOn' => true,
    'useCompressedJs' => true,
    'allowAutoUpdates' => false,
    'generateTransformsBeforePageLoad' => true,
    'omitScriptNameInUrls' => true,
    'defaultImageQuality' => 75,
    'maxUploadFileSize' => 16000000,
    'limitAutoSlugsToAscii' => true,
    'convertFilenamesToAscii' => true,
    'enableTemplateCaching' => true,
    'jsLoggerEnabled' => true,
    'jsBasePath' => '/assets/build/js/',
		'postCpLoginRedirect' => ''

  ),

  'local' => array(
    'devMode' => true,
    'useCompressedJs' => false,
    'allowAutoUpdates' => true,
    'enableTemplateCaching' => false,

    'environment' => 'local',
    'siteUrl' => array(
            'no' => 'http://site.craft.dev/'
          ),

    'environmentVariables' => array(
      'fileSystemPath' => $_SERVER['DOCUMENT_ROOT'] . '/',
      'publicRootPath' => ''
    ),
    'jsBasePath' => '/assets/src/js/',
  ),

  'stage' => array(
    'environment' => 'stage',
    'siteUrl' => 'http://site.skogen.io/',

                // on forge servers
    // 'cacheMethod' => 'redis',

    'environmentVariables' => array(
      'fileSystemPath' => '',
      'publicRootPath' => ''
    ),
  ),

  'prod' => array(
    'environment' => 'prod',
    'siteUrl' => 'http://www.site.no/',

    'environmentVariables' => array(
      'fileSystemPath' => '',
      'publicRootPath' => ''
    ),
    'jsLoggerEnabled' => false
  )
);
