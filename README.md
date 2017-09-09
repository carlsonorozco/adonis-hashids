# Adonis Hashids :hash:

Adonis Hashids is a [Hashids](https://github.com/ivanakimov/hashids.js) Provider for AdonisJs framework.

[![Greenkeeper badge](https://badges.greenkeeper.io/carlsonorozco/adonis-hashids.svg)](https://greenkeeper.io/)
[![Quality Gate](https://sonarqube.com/api/badges/gate?key=adonis-hashids)](https://sonarqube.com/dashboard/index/adonis-hashids)
[![Coverage Status](https://coveralls.io/repos/github/carlsonorozco/adonis-hashids/badge.svg?branch=master)](https://coveralls.io/github/carlsonorozco/adonis-hashids?branch=master)
[![npm version](https://badge.fury.io/js/adonis-hashids.svg)](https://badge.fury.io/js/adonis-hashids)
[![npm](https://img.shields.io/npm/dt/adonis-hashids.svg)](https://www.npmjs.com/package/adonis-hashids)
[![Build Status](https://travis-ci.org/carlsonorozco/adonis-hashids.svg?branch=master)](https://travis-ci.org/carlsonorozco/adonis-hashids)
[![dependencies Status](https://david-dm.org/carlsonorozco/adonis-hashids/status.svg)](https://david-dm.org/carlsonorozco/adonis-hashids)
[![devDependencies Status](https://david-dm.org/carlsonorozco/adonis-hashids/dev-status.svg)](https://david-dm.org/carlsonorozco/adonis-hashids?type=dev)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

<img src="http://res.cloudinary.com/adonisjs/image/upload/q_100/v1497112678/adonis-purple_pzkmzt.svg" width="200px" align="right" hspace="30px" vspace="100px">

## Node/OS Target

This repo/branch is supposed to run fine on all major OS platforms and targets `Node.js >=7.0`

## Installation

In order to use adonis-hashids

```
adonis install adonis-hashids
```

## Registering provider

Make sure you register the provider inside `start/app.js` file before making use hashids.

```js
const providers = [
  'adonis-hashids/providers/HashidsProvider'
]
```

That's all! Now you can use the hashids provider as follows.

## Configuration

Adonis Hashids generate YouTube-like ids from numbers. Use Hashids when you do not want to expose your database ids to the user. The hashids configuration is located at `config/hashids.js`. In this file you may specify which hashids connection you would like used by default throughout your application.

The hashids configuration file also contains various other options, which are documented within the file so make sure to read over these options. By default Adonis Hashids is configured to use the `default` connection.

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

## Changelog

[CHANGELOG](CHANGELOG.md)

## Credits

Thanks to the community of [AdonisJs](http://www.adonisjs.com/).

## Copyright and License

Copyright (c) 2016 [Carlson Orozco](http://carlsonorozco.com/), [MIT](LICENSE.md) License