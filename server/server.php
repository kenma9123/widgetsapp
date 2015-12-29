<?php
    //global file that will automatically call the required class
    require_once( __DIR__ . '/init.php' );
    $request = $_POST ? $_POST : $_GET;
    $ajax = new Ajax($request);
    $ajax->setHeaders();
    $ajax->execute();
?>
