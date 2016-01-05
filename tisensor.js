var tisensortag = require('./lib/tisensortag')
var tisensortagble = require('./lib/tisensortag-ble')
var easyble = require('./lib/easyble')


var fn = function (def, parent)
{
  console.log('ti sensor tag initialized.................................')
  console.log(JSON.stringify(def))
  var sensortag = undefined

  var sensors = ['temperature', 'humidity', 'barometer', 'accelerometer', 'gyroscope', 'magnetometer', 'keypress']


  function initialiseSensorTag()
  {
    if(def.sensortype = "CC2541")
    {
      console.log('initializing sensor tag of type '+tisensortag.CC2541_BLUETOOTH_SMART)
      sensortag = tisensortag.createInstance(tisensortag.CC2541_BLUETOOTH_SMART)
    }
    else if(def.sensortype = "CC2650")
    {
      console.log('initializing sensor tag of type '+tisensortag.CC2650_BLUETOOTH_SMART)
      sensortag = tisensortag.createInstance(tisensortag.CC2650_BLUETOOTH_SMART)
    }

    // Set up callbacks and sensors.
    sensortag.statusCallback(statusHandler).errorCallback(errorHandler)

    sensors.forEach(function(sensor)
    {
      if(def[sensor])
      {
        sensortag[sensor+'Callback'](function(data)
        {
          var out = {}
          out.payload = {}
          out.payload[sensor] = data
          def.out(out)
        },def.pollinterval || 100)
      }
    })
  }


  function statusHandler(status)
  {
    console.log('ti sensor status: '+status)
    def.out({payload:{status: status}})
  }

  function errorHandler(error)
  {
    console.log('ti sensor error: '+error)
    if (easyble.error.DISCONNECTED == error)
    {
      //displayStatus('Disconnected')
      def.out({payload:{error: error}})
    }
    else
    {
      //displayStatus('Error: ' + error)
    }
  }

  function accelerometerHandler(data)
  {
    var values = sensortag.getAccelerometerValues(data)
    //console.log('ti sensor accelerometer data : '+data)
    var dx = values.x * 50
    var dy = values.y * 50 * -1
    //moveSprite(dx, dy)
    def.out({payload:{accelerometer: data}})
  }

  //--------------------------------------------------------------------------------

  def.in = function(msg)
  {
    var device = msg.payload
    if(device && evothings && evothings.ble)
    {
      if(!def.connected)
      {
        def.connected = true
        if (def.connectdirect)
        {
          sensortag.connectToNearestDevice()
        }
        else if (msg.payload && msg.payload.device)
        {
          sensortag.connectToDevice(msg.payload.device)
        }
        else
        {
          def.out({payload: {error: 'Not connecting to nearest, but no address defined'}})
        }
      }
      else
      {
        sensortag.disconnectDevice()
        console.log('ti sensor tag disconnected')
        def.connected = false
      }
    }
  };

  if(!def.initialized)
  {
    def.initialized = true
    initialiseSensorTag()
  }

};
module.exports = fn;