## Registering provider

Make sure you register the provider inside `start/app.js` file before making use hashids.

```js
const providers = [
  'adonis-hashids/providers/HashidsProvider'
]
```

Once that done you can make use of Hashids anywhere by importing the Hashids provider.

## Usage

### Using default connection

```javascript
// Initialize
const Hashids = use('Hashids')

Hashids.encode(1)
// OY

Hashids.decode('OY')
// [ 1 ]
```

### Combination of ids

```javascript
// Initialize
const Hashids = use('Hashids')

Hashids.encode(1, 2, 3)
// or Array
Hashids.encode([1, 2, 3])
// will ouput wzs9cr

Hashids.decode('wzs9cr')
// [ 1, 2, 3 ]
```

### Encode hex

```javascript
// Initialize
const Hashids = use('Hashids')

Hashids.encodeHex('507f1f77bcf86cd799439011')
// Nrao6rxKbziryRrXR1zD

Hashids.decodeHex('Nrao6rxKbziryRrXR1zD')
// 507f1f77bcf86cd799439011
```

### Using other connection

```javascript
// Initialize
const Hashids = use('Hashids')

Hashids.connection('alternative').encode(1)
// OY

Hashids.connection('alternative').decode('OY')
// [ 1 ]
```

## Configuration

Adonis Hashids generate YouTube-like ids from numbers. Use Hashids when you do not want to expose your database ids to the user. The hashids configuration is located at `config/hashids.js`. In this file you may specify which hashids connection you would like used by default throughout your application.

The hashids configuration file also contains various other options, which are documented within the file so make sure to read over these options. By default Adonis Hashids is configured to use the `default` connection.

## Environment variables
The configuration file makes use of **Environment variables**, make sure to define them for development and in production too

```
HASHIDS_CONNECTION=default
```
