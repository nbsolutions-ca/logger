[@nbsolutions/logger - v0.0.0-alpha.0](../README.md) / [Exports](../modules.md) / [Logger](../modules/Logger.md) / Logger

# Class: Logger

[Logger](../modules/Logger.md).Logger

## Implements

- `ILogger`

## Table of contents

### Constructors

- [constructor](Logger.Logger-1.md#constructor)

### Methods

- [\_getColorForComponent](Logger.Logger-1.md#_getcolorforcomponent)
- [\_getColorForLevel](Logger.Logger-1.md#_getcolorforlevel)
- [\_print](Logger.Logger-1.md#_print)
- [debug](Logger.Logger-1.md#debug)
- [deprecate](Logger.Logger-1.md#deprecate)
- [deprecateParameterType](Logger.Logger-1.md#deprecateparametertype)
- [enableDebugLog](Logger.Logger-1.md#enabledebuglog)
- [enableVerboseLog](Logger.Logger-1.md#enableverboselog)
- [error](Logger.Logger-1.md#error)
- [getComponent](Logger.Logger-1.md#getcomponent)
- [info](Logger.Logger-1.md#info)
- [log](Logger.Logger-1.md#log)
- [verbose](Logger.Logger-1.md#verbose)
- [warn](Logger.Logger-1.md#warn)

## Constructors

### constructor

• **new Logger**(`component?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `component` | `string` | `'Generic'` |

#### Defined in

[Logger.ts:9](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/Logger.ts#L9)

## Methods

### \_getColorForComponent

▸ `Protected` **_getColorForComponent**(): `string`

#### Returns

`string`

#### Defined in

[Logger.ts:43](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/Logger.ts#L43)

___

### \_getColorForLevel

▸ `Protected` **_getColorForLevel**(`level`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `LogLevel` |

#### Returns

`string`

#### Defined in

[Logger.ts:31](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/Logger.ts#L31)

___

### \_print

▸ `Protected` **_print**(`message`, `componentStyle`, `levelStyle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `componentStyle` | `string` |
| `levelStyle` | `string` |

#### Returns

`void`

#### Defined in

[Logger.ts:27](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/Logger.ts#L27)

___

### debug

▸ **debug**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Implementation of

ILogger.debug

#### Defined in

[Logger.ts:47](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/Logger.ts#L47)

___

### deprecate

▸ **deprecate**(`alternative?`, `methodOverride?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alternative?` | `string` |
| `methodOverride?` | `string` |

#### Returns

`void`

#### Implementation of

ILogger.deprecate

#### Defined in

[Logger.ts:108](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/Logger.ts#L108)

___

### deprecateParameterType

▸ **deprecateParameterType**(`argumentLocation`, `deprecatedType`, `alternative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `argumentLocation` | `number` |
| `deprecatedType` | `string` |
| `alternative?` | `string` |

#### Returns

`void`

#### Implementation of

ILogger.deprecateParameterType

#### Defined in

[Logger.ts:128](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/Logger.ts#L128)

___

### enableDebugLog

▸ **enableDebugLog**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Implementation of

ILogger.enableDebugLog

#### Defined in

[Logger.ts:19](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/Logger.ts#L19)

___

### enableVerboseLog

▸ **enableVerboseLog**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Implementation of

ILogger.enableVerboseLog

#### Defined in

[Logger.ts:23](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/Logger.ts#L23)

___

### error

▸ **error**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Implementation of

ILogger.error

#### Defined in

[Logger.ts:55](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/Logger.ts#L55)

___

### getComponent

▸ **getComponent**(): `string`

#### Returns

`string`

#### Implementation of

ILogger.getComponent

#### Defined in

[Logger.ts:15](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/Logger.ts#L15)

___

### info

▸ **info**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Implementation of

ILogger.info

#### Defined in

[Logger.ts:59](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/Logger.ts#L59)

___

### log

▸ **log**(`level`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `LogLevel` |
| `message` | `string` |

#### Returns

`void`

#### Implementation of

ILogger.log

#### Defined in

[Logger.ts:67](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/Logger.ts#L67)

___

### verbose

▸ **verbose**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Implementation of

ILogger.verbose

#### Defined in

[Logger.ts:51](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/Logger.ts#L51)

___

### warn

▸ **warn**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Implementation of

ILogger.warn

#### Defined in

[Logger.ts:63](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/Logger.ts#L63)
