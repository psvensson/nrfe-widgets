var fn = function (def, parent)
{
  def.in = function(msg)
  {
    var deviceHandle = msg.payload.device
    var serviceHandle = msg.payload.handle
    console.log('ble characteristics device = '+deviceHandle+', service = '+serviceHandle)
    if(deviceHandle && serviceHandle && evothings && evothings.ble)
    {
      evothings.ble.characteristics(
        deviceHandle,
        serviceHandle,
        function(characteristics)
        {
          characteristics.forEach(function(ch)
          {
            ch.device = deviceHandle
            ch.service = serviceHandle
          })
          def.out({payload: {caracteristics: characteristics}})
        })
    }
  };
};
module.exports = fn;