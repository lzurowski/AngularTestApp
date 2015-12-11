<?php

return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;dbname=products',
    'dsn' => 'sqlite:'.__DIR__.DIRECTORY_SEPARATOR.'../db/productsT.s3db', // SQLite
    'username' => 'root',
    'password' => '',
    'charset' => 'utf8',
];
