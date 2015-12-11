<?php
namespace app\models;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Product
 *
 * @author lukasz
 */
class Product extends \yii\db\ActiveRecord{

    
    public static function tableName() {
        return '{{%products}}';
    }
    
}
