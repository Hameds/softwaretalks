export function intersperse<T>(x: T, ys: T[]): T[] {
  const xs = Array.from<T>({ length: ys.length * 2 - 1 }).fill(x)

  return ys.reduce((zs, y, index) => ((zs[index * 2] = y), zs), xs)
}

export function castArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}

export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

export function isNil(value: unknown): value is null | undefined {
  return value === undefined || value === null
}

export function isEmpty(value: unknown[] | string) {
  return value.length === 0
}