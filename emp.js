var http=require('http');   
var employee ={
    title:"employee",
    description:"Employee Details",
    
};
var branch ={
	title:"branch",
	description:"Branch details",

};
var count=10;
count++;
var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(employee));
};
var server=http.createServer(controller);
server.listen(3000);
console.log("listening on port 3000");
