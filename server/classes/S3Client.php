<?php

// ini_set('display_errors', 'On');
// error_reporting(E_ALL);

require __DIR__ . '/lib/aws/aws-autoloader.php';

class S3Client {

	private $client;

	function __construct() {
		$sdk = new Aws\Sdk(array(
			'region'  => S3Settings::S3_REGION,
			'version' => S3Settings::S3_VERSION,
			'credentials' => array(
				'key' => S3Settings::S3_KEY,
				'secret' => S3Settings::S3_SECRET
			)
		));

		// create client
		$this->client = $sdk->createS3();
	}

	public function getFile() {
		$result = $this->client->getObject([
		    'Bucket' => S3Settings::S3_BUCKET,
		    'Key'    => 'dragDropUpload/53512628997973/8d76495signup.png',
		]);

		file_put_contents('test.jpg', $result['Body']);
	}

	/**
	 * List all the bucket objects
	 */
	public function listObjects($query = array()) {
		// query should not be empty
		if (empty($query)) {
			return array();
		}

		// lis the objects
		$result = $this->client->listObjects([
		    'Bucket' => S3Settings::S3_BUCKET,
		    'Delimiter' => '/',
		    'EncodingType' => 'url',
		    'Marker' => 'imagePreview/53372209524958/3dea419splash.png',
		    'Prefix' => 'imagePreview/53372209524958/',
		    'MaxKeys'  => 5
		]);

		return $result->toArray();
	}
}

// $aws = new AWSClient();
// $aws->getFile();
// $aws->listObjects();
?>