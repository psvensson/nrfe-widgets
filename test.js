requirejs.config(
{
	baseUrl: '.'
});

// Start the main app logic.
requirejs(['page'],
	function(page)
	{
		console.log('page is');
		console.dir(page);
	});