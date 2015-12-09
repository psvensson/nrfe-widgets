define("cdvibration",	function()
{
	return function (def, parent)
	{
		def.in = function(msg)
		{
			navigator.vibrate(parseInt(def.vibration));
		}
	}
});