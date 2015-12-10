requirejs.config(
{
	baseUrl: '.'
});

var modules = [ 'page', 'bleservices','bluetooth','button','cdbattery','cdgeolocation',
	'cdvibration','event','fefunction','image','input','picklist','section',
	'template','text'];
// Start the main app logic.
requirejs(modules, function(page, bleservices,bluetooth,button,cdbattery,cdgeolocation,
	cdvibration,event,fefunction,image,input,picklist,section,
	template,text)
	{
		console.log('loaded modules are');
		console.dir(arguments);

	});