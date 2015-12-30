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
        // default query
        $dquery = array_merge(array(
            'marker' => '',
            'prefix' => '',
            'maxkeys' => 100
        ), $query);

        // lis the objects
        $result = $this->client->listObjects([
            'Bucket' => S3Settings::S3_BUCKET,
            'Delimiter' => '/',
            'EncodingType' => 'url',
            'KeyMarker' => $dquery['marker'],
            'Prefix' => $dquery['prefix'],
            'MaxKeys'  => $dquery['maxkeys']
        ]);

        return $result->toArray();
    }
}

// $aws = new AWSClient();
// $aws->getFile();
// $aws->listObjects();
?>