<?php

class Ajax extends AjaxHandler
{
    public $httpresponse;

    public function setHeaders() {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST');
        header('Access-Control-Allow-Headers: Content-Type');
    }

    public function test() {
        $this->success('Hello word');
    }

    public function listS3Objects() {
        try {
            $client = new S3Client();
            $result = $client->listObjects(array(
                'marker' => $this->get('marker'),
                'prefix' => $this->get('prefix'),
                'maxkeys' => $this->get('maxkeys') | 100
            ));
            $this->success($result);
        } catch (S3Exception $e) {
            $this->error($e->getMessage());
        } catch (AwsException $e) {
            // This catches the more generic AwsException. You can grab information
            // from the exception using methods of the exception object.
            $this->error(array(
                $e->getAwsRequestId(),
                $e->getAwsErrorType(),
                $e->getAwsErrorCode()
            ));
        }
    }
}

?>