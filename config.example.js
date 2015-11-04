{
    "bridge": {
        "name": "Homebridge",
        "username": "CC:22:3D:E3:CE:31",
        "port": 51826,
        "pin": "111-22-333"
    },

    "description": "This is an example configuration file with all supported devices. You can use this as a template for creating your own configuration file containing devices you actually own.",

    "accessories": [
        {
            "accessory": "PiThermostat",
            "name": "House Thermostat",
            "ip_address": "192.168.1.30",
            "username": "boss",
            "password": "boss",
            "http_method": "POST"
        },
    ]
}
