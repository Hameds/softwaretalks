declare module '*.svg' {
  enum Size {
    S10 = '10',
    S14 = '14',
    S17 = '17',
    S24 = '24',
    S32 = '32',
    S40 = '40',
    S48 = '48',
    S56 = '56',
  }

  export const ReactComponent: (
    props: React.SVGProps<SVGSVGElement> & { size?: Size }
  ) => React.ReactElement
  const url: string
  export default url
}
