const { application } = require('express')
const mysql=require('mysql');
const {db}=require('../config/dbconfig')


module.exports=function (app) {
    
    app.get('/',function (req,res) {
        db.query('Select user_id from tbl_transit_mobile_users',function (err,data) {
            (err)?res.send(err):res.json({users:data})
        });
    });
}