function getConfiguration(config) {
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.

  // En este caso, no se necesita configurar nada a nivel general.
}

function getEndpoints(deviceAddress, endpoints) {
  // Esta función permite indicar la configuración inicial de los endpoints
  // cuando se crea un dispositivo de este modelo.
  var e = endpoints.addEndpoint("1", "Batería", endpointType.genericSensor);
  e.variableTypeId = 1401; 

  var e = endpoints.addEndpoint("2", "Consumo de energía", endpointType.genericSensor);
  e.variableTypeId = 1389; 

  endpoints.addEndpoint("3", "Voltaje", endpointType.voltageSensor);

  endpoints.addEndpoint("4", "Corriente", endpointType.currentSensor);

  var e = endpoints.addEndpoint("5", "Factor de potencia", endpointType.genericSensor);
  e.variableTypeId = 1390; 
}

function validateDeviceAddress(address, result)
{
  // This function allows you to validate the address of a device, when
  // the user is creating it. If your device has special validation rules
  // for the address, you can check them here, and return an error message
  // in case the address format is incorrect.

  // In the code below, a validation is made to ensure that the address 
  // is exactly 10 characters long.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // This function allows you to specify UI rules at the device level.
  // For instance, you can make it possible to enable or disable adding
  // endpoints manually to the device after it was created.
  
  // In the code below, adding endpoints manually is disabled in the
  // user interface. This means that the device will be limited to the 
  // endpoints defined by function getEndpoints() above.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // This function allows you to specify UI rules at the endpoint level.
  // For instance, you can make it possible to delete certain endpoints, 
  // or edit their endpoint subtype, if applicable.

  // In the code below, the following rules are defined:
  // - Endpoints cannot be deleted.
  // - The endpoint subtype can be changed, but only for the second 
  //   endpoint.
  
  // rules.canDelete = false;
  // rules.canEditSubType = (endpoint.address == "2");
}
