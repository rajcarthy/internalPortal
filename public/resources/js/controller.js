//var app = angular.module('app', []);  //not using angular due to auth header support. 
var http = require('http');
var express = require('express')
var request = require('request')
var app = express()
var url = "https://my306768.vlab.sapbydesign.com/sap/c4c/odata/v1/ticket/$metadata";


app.get('/ticket', function (req, res)
{
    var csrfToken;
    
    var headerOption = {
        "url": url, 
        "headers": {
            "Authorization": "Basic " + new Buffer("ADMINISTRATION01:Welcome1").toString("base64"), 
            "Content-Type":"application/json",
            "x-csrf-token":"Fetch"
        }
    };
    request(headerOption, function (error, response, body)
    {
        console.log("Body:", body);
        csrfToken = response.headers['x-csrf-token'];
        console.log(csrfToken);
    });
    res.sendFile('results.html', { root: __dirname + '/public'});
});