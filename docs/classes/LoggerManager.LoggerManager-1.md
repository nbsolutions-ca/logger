[@nbsolutions/logger - v0.0.0-alpha.0](../README.md) / [Exports](../modules.md) / [LoggerManager](../modules/LoggerManager.md) / LoggerManager

# Class: LoggerManager

[LoggerManager](../modules/LoggerManager.md).LoggerManager

## Implements

- `ILoggerManager`

## Table of contents

### Methods

- [\_createLogger](LoggerManager.LoggerManager-1.md#_createlogger)
- [getLogger](LoggerManager.LoggerManager-1.md#getlogger)
- [getInstance](LoggerManager.LoggerManager-1.md#getinstance)

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

[LoggerManager.ts:12](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/LoggerManager.ts#L12)

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

[LoggerManager.ts:16](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/LoggerManager.ts#L16)

___

### getInstance

▸ `Static` **getInstance**(): `ILoggerManager`

#### Returns

`ILoggerManager`

#### Defined in

[LoggerManager.ts:24](https://github.com/nbsolutions-ca/logger/blob/6fa87ee/src/LoggerManager.ts#L24)
