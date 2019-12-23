var express = require("express");
var app = express();
var router = express.Router();
app.use(express.static(__dirname + '/public'));
const PORT = process.env.PORT || 3000;
path = __dirname + '/public/';

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
});


router.get("/",function(req,res){
    res.sendFile(path + "index.html");
    console.log('log: path' + path);
});
  

router.get("/portalLanding",function(req,res){
    console.log('log: path from ' + path);
    res.sendFile(path + "portalLanding.html");
  });

  router.get("/ticket",function(req,res){
    console.log('log: ticket path ::: ' + path);
    res.sendFile(path + "ticket.html");
  });

  router.get("/zfre",function(req,res){
    console.log('log: ticket path ::: ' + path);
    res.sendFile(path + "zfre.html");
  });

  router.get("/zpre",function(req,res){
    console.log('log: ticket path ::: ' + path);
    res.sendFile(path + "zpre.html");
  });

/*app.get('/', function (req, res) {
    res.sendFile('index.html');
});*/

app.post("/addname", (req, res) => {
    console.log('>>>>log: POST startss' + path);
    

    let subject = req.body.subject;

    console.log('>>>>>>>>>>log: subject::::::::::'+ subject);

    if(subject){
     

        var csrfToken;
        var request = require('request');
        var j = request.jar();
        
        var headerOption = {
            "url": "https://my306792.vlab.sapbydesign.com/sap/c4c/odata/v1/ticket/$metadata",
            "jar": j,
            "headers": {
                "Authorization": "Basic " + new Buffer("ADMINISTRATION01:Welcome1").toString("base64"),
                "Content-Type":"application/json",
                "x-csrf-token":"Fetch"
            }
        };

        //console.log('>>>>log: headerOption ::: ' + headerOption);

        request(headerOption, function (error, response, body)
        {
            csrfToken = response.headers["x-csrf-token"];
            console.log('>>>>log: CSRF ::: ' + csrfToken);

            let bodyStruct = {
                Name: subject,
                ProcessingTypeCode: "SRRE",
                ReportedForPartyID: "1638",
                ServicePriorityCode: "3",
                ServiceTermsServiceIssueID : "CA_4",
                
            };
            
            let bjson = JSON.stringify(bodyStruct);
            let obj = JSON.parse(bjson); 

            //var entity = '{"Name": "Kart API"}';
            //var obj = JSON.parse(entity);


            var postOption =  {
                "url": "https://my306792.vlab.sapbydesign.com/sap/c4c/odata/v1/ticket/ServiceRequestCollection",
                "method": "POST",
                "jar": j,
                "headers": {
                    "Authorization": "Basic " + new Buffer("ADMINISTRATION01:Welcome1").toString("base64"),
                    "Content-Type":"application/json",
                    "x-csrf-token": csrfToken   
                },
                json: obj
            };

            request(postOption, function (error, response, body)
            {
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Posted:" + response.statusCode);
            });
            
        });
    };  
    res.sendFile(path + "ticket.html");
});

app.post("/zfre", (req, res) => {
    console.log('>>>>log: POST startss' + path);
    

    let subject = req.body.subject;

    console.log('>>>>>>>>>>log: subject::::::::::'+ subject);

    if(subject){
        var csrfToken;
        var request = require('request');
        var j = request.jar();
        
        var headerOption = {
            "url": "https://my306792.vlab.sapbydesign.com/sap/c4c/odata/v1/ticket/$metadata",
            "jar": j,
            "headers": {
                "Authorization": "Basic " + new Buffer("ADMINISTRATION01:Welcome1").toString("base64"),
                "Content-Type":"application/json",
                "x-csrf-token":"Fetch"
            }
        };

        //console.log('>>>>log: headerOption ::: ' + headerOption);


        request(headerOption, function (error, response, body)
        {
            csrfToken = response.headers["x-csrf-token"];
            console.log('>>>>log: CSRF ::: ' + csrfToken);

            let bodyStruct = {
                Name: subject,
                ProcessingTypeCode: "ZFRE",
                ReportedForPartyID: "1638",
                ServicePriorityCode: "3",
                ServiceTermsServiceIssueID : "CA_1",
                
            };
            
            let bjson = JSON.stringify(bodyStruct);
            let obj = JSON.parse(bjson); 

            //var entity = '{"Name": "Kart API"}';
            //var obj = JSON.parse(entity);


            var postOption =  {
                "url": "https://my306792.vlab.sapbydesign.com/sap/c4c/odata/v1/ticket/ServiceRequestCollection",
                "method": "POST",
                "jar": j,
                "headers": {
                    "Authorization": "Basic " + new Buffer("ADMINISTRATION01:Welcome1").toString("base64"),
                    "Content-Type":"application/json",
                    "x-csrf-token": csrfToken   
                },
                json: obj
            };

            request(postOption, function (error, response, body)
            {
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Posted:" + response.statusCode);
            });


            //console.log("Body:", body);
        });

    };  
    res.sendFile(path + "zfre.html");
});


//Procurement Ticket............................................

app.post("/zpre", (req, res) => {
    console.log('>>>>log: POST startss' + path);
    

    let subject = req.body.subject;

    if(subject){
        console.log('>>>>>>>>>>log: subject::::::::::'+ subject);

        if(subject === undefined){
            console.log('*****************************************************'+ subject);
        }else{
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'+ subject);
        };

        var csrfToken;
        var request = require('request');
        var j = request.jar();
        
        var headerOption = {
            "url": "https://my306792.vlab.sapbydesign.com/sap/c4c/odata/v1/ticket/$metadata",
            "jar": j,
            "headers": {
                "Authorization": "Basic " + new Buffer("ADMINISTRATION01:Welcome1").toString("base64"),
                "Content-Type":"application/json",
                "x-csrf-token":"Fetch"
            }
        };

        //console.log('>>>>log: headerOption ::: ' + headerOption);
   
        request(headerOption, function (error, response, body)
        {
            csrfToken = response.headers["x-csrf-token"];
            console.log('>>>>log: CSRF ::: ' + csrfToken);

            let bodyStruct = {
                Name: subject,
                ProcessingTypeCode: "ZPRE",
                ReportedForPartyID: "1638",
                ServicePriorityCode: "3",
                ServiceTermsServiceIssueID : "CA_1",
                
            };
            
            let bjson = JSON.stringify(bodyStruct);
            let obj = JSON.parse(bjson); 

            //var entity = '{"Name": "Kart API"}';
            //var obj = JSON.parse(entity);


            var postOption =  {
                "url": "https://my306792.vlab.sapbydesign.com/sap/c4c/odata/v1/ticket/ServiceRequestCollection",
                "method": "POST",
                "jar": j,
                "headers": {
                    "Authorization": "Basic " + new Buffer("ADMINISTRATION01:Welcome1").toString("base64"),
                    "Content-Type":"application/json",
                    "x-csrf-token": csrfToken   
                },
                json: obj
            };

            request(postOption, function (error, response, body)
            {
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Posted:" + response.statusCode);
            });


            //console.log("Body:", body);
        });
    
    
    };
res.sendFile(path + "zpre.html");
});

app.use("/",router);

app.use("*",function(req,res){
    res.sendFile(path + "index.html");
});

app.listen(PORT, function()
{
    console.log('app is running on the port....' + PORT);
});


