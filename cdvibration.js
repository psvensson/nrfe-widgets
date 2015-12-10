define("cdvibration",	function()
{
	var fn = function (def, parent)
	{
		def.in = function(msg)
		{
			navigator.vibrate(parseInt(def.vibration));
		}
	};
	fn._name = "cdvibration";
	return fn;
});