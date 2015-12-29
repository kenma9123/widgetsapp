<?php
    error_reporting(E_ALL);

    /**
     * Auto load function which loads all classes automatically no need to write includes for each class
     * @param object $class_name
     * @return bool
     */
    // we only need to load php
    spl_autoload_extensions('.php');
    function __autoload($className) {
        // list comma separated directory name
        $directory = array('/classes/');

        // list of comma separated file format
        $fileFormat = array('%s.php');

        foreach ($directory as $current_dir) {
            foreach ($fileFormat as $current_format) {
                $path = __DIR__ . $current_dir . sprintf($current_format, $className);
                //if a file matched load it
                if ( file_exists( $path ) ) {
                    // echo $path . "\n";
                    require_once($path);
                    break;
                }
            }
        }
    }

    spl_autoload_register('__autoload');
?>