
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
        console.log('ble connect ' + r.deviceHandle + ' state ' + r.state);
        if (r.state == 2) // connected
        {
          def.out({payload:{device: deviceHandle}})
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