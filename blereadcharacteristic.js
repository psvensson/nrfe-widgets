var fn = function (def, parent)
{
  def.in = function(msg)
  {
    var deviceHandle = msg.payload.device
    var characteristicHandle = msg.payload.handle
    var rv = undefined
    if(deviceHandle && characteristicHandle && evothings && evothings.ble)
    {
      evothings.ble.readCharacteristic(
        deviceHandle,
        characteristicHandle,
        function(data)
        {
          rv = escape(String.fromCharCode.apply(null, new Uint8Array(data)));
          def.out({payload:{result: rv}})
        },
        function(errorCode)
        {
          rv = errorCode
          def.out({payload:{error: errorCode}})
        }
      )
    }
  };
};
module.exports = fn;