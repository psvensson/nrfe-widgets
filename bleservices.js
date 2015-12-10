define(function()
{
	var fn = function (def, parent)
	{
		def.in = function(msg)
		{
			console.log('ble-services called for address '+msg.payload.address);
			evothings.ble.connect(msg.payload.address, function(r)
			{
				var deviceHandle = r.deviceHandle;
				console.log('connect '+r.deviceHandle+' state '+r.state);
				if (r.state == 2) // connected
				{
					console.log('connected, requesting services...');
					evothings.ble.readAllServiceData(deviceHandle, function(services)
					{
						def.out({payload: services});
					});
				}
			}, function(errorCode)
			{
				console.log('connect error: ' + errorCode);
				def.out({payload: {error:'connect error: ' + errorCode}});
			});
		};
	};
	fn._name = "bleservices";
	return fn;
});