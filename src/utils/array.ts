export function intersperse<T>(x: T, ys: T[]): T[] {
  const xs = Array.from<T>({ length: ys.length * 2 - 1 }).fill(x)

  return ys.reduce((zs, y, index) => ((zs[index * 2] = y), zs), xs)
}
