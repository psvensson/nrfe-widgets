define(function()
{
	var fn = function (def, parent)
	{
		window.addEventListener("batterystatus", function(info)
		{
			def.out({payload: info});
		}, false);
		window.addEventListener("batterycritical", function(info)
		{
			def.out({payload: info});
		}, false);
		window.addEventListener("batterylow", function(info)
		{
			def.out({payload: info});
		}, false);
	};
	fn._name = "cdbattery";
	return fn;
});