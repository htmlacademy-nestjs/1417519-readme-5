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
