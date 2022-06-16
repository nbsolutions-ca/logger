[@nbsolutions/logger - v0.0.0](../README.md) / [Exports](../modules.md) / LoggerManager

# Class: LoggerManager

## Implements

- `ILoggerManager`

## Table of contents

### Methods

- [\_createLogger](LoggerManager.md#_createlogger)
- [getLogger](LoggerManager.md#getlogger)
- [getInstance](LoggerManager.md#getinstance)

## Methods

### \_createLogger

▸ `Protected` **_createLogger**(`tag`): `ILogger`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |

#### Returns

`ILogger`

#### Defined in

[LoggerManager.ts:12](https://github.com/nbsolutions-ca/logger-js/blob/0d7a120/src/LoggerManager.ts#L12)

___

### getLogger

▸ **getLogger**(`obj`): `ILogger`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `IConstructor` |

#### Returns

`ILogger`

#### Implementation of

ILoggerManager.getLogger

#### Defined in

[LoggerManager.ts:16](https://github.com/nbsolutions-ca/logger-js/blob/0d7a120/src/LoggerManager.ts#L16)

___

### getInstance

▸ `Static` **getInstance**(): `ILoggerManager`

#### Returns

`ILoggerManager`

#### Defined in

[LoggerManager.ts:24](https://github.com/nbsolutions-ca/logger-js/blob/0d7a120/src/LoggerManager.ts#L24)
