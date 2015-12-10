define("event",	function()
{
	var fn = function (def, parent)
	{
		def.in = function (msg)
		{
			var e = msg.payload;
			if (e && e.type == def.event)
			{
				def.out(msg);
			}
		};

	};
	fn._name = "event";
	return fn;
});