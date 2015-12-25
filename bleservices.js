
	var fn = function (def, parent)
	{
		def.in = function(msg)
		{
			if(evothings && evothings.ble)
			{
				console.log('ble-services called for address ' + msg.payload.address);
				evothings.ble.connect(msg.payload.address, function (r)
				{
					var deviceHandle = r.deviceHandle;
					console.log('connect ' + r.deviceHandle + ' state ' + r.state);
					if (r.state == 2) // connected
					{
						console.log('connected, requesting services...');
						evothings.ble.services(
							deviceHandle,
							function(services)
							{
								console.log('got services')
								services.forEach(function(service)
								{
									service.device = deviceHandle
								})
								def.out({payload:{services: services}})
							})
					}
				}, function (errorCode)
				{
					console.log('connect error: ' + errorCode);
					def.out({payload: {error: 'connect error: ' + errorCode}});
				});
			}
		};
	};
	module.exports = fn;