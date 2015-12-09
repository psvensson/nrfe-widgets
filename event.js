define("event",	function()
{
	return function (def, parent)
	{
		def.in = function (msg)
		{
			var e = msg.payload;
			if (e && e.type == def.event)
			{
				def.out(msg);
			}
		};

	}
});