import { ClassConstructor, plainToInstance } from 'class-transformer';

type PlainObject = Record<string, unknown>;

export function fillDto<T, V extends PlainObject>(
  DtoClass: ClassConstructor<T>,
  plainObject: V,
): T;

export function fillDto<T, V extends PlainObject[]>(
  DtoClass: ClassConstructor<T>,
  plainObject: V,

): T[];

export function fillDto<T, V extends PlainObject>(
  DtoClass: ClassConstructor<T>,
  plainObject: V,
): T | T[] {
  return plainToInstance(DtoClass, plainObject, {
      excludeExtraneousValues: true,
  });
}


export function getMongoConnectionString({username, password, host, port, databaseName, authDatabase}): string {
  return `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`;
}
