export type UfAndInfo = {
  [uf: string]: {
    name: string;
    latitude: number;
    longitude: number
  }
}

export const states: UfAndInfo = {
  SP: {
    name: 'São Paulo',
    latitude: -23.55,
    longitude: -46.64
  },
  RJ: {
    name: 'Rio de Janeiro',
    latitude: -22.84,
    longitude: -43.15
  },
  ES: {
    name: 'Espírito Santo',
    latitude: -19.19,
    longitude: -40.34
  },
  BA: {
    name: 'Bahia',
    latitude: -12.96,
    longitude: -38.51
  },
  DF: {
    name: 'Distrito Federal',
    latitude: -15.83,
    longitude: -47.86
  },
  AL: {
    name: 'Alagoas',
    latitude: -9.71,
    longitude: -35.73
  },
  MG: {
    name: 'Minas Gerais',
    latitude: -18.10,
    longitude: -44.38
  },
  RS: {
    name: 'Rio Grande do Sul',
    latitude: -30.01,
    longitude: -51.22
  },
  PE: {
    name: 'Pernambuco',
    latitude: -8.28,
    longitude: -35.07
  },
  PR: {
    name: 'Paraná',
    latitude: -24.89,
    longitude: -51.55
  },
  SC: {
    name: 'Santa Catarina',
    latitude: -27.33,
    longitude: -49.44
  },
  GO: {
    name: 'Goiás',
    latitude: -16.64,
    longitude: -49.31
  },
  RN: {
    name: 'Rio Grande do Norte',
    latitude: -5.22,
    longitude: -36.52
  },
  AM: {
    name: 'Amazonas',
    latitude: -3.07,
    longitude: -61.66
  },
  MS: {
    name: 'Mato Grosso do Sul',
    latitude: -20.51,
    longitude: -54.54
  },
  SE: {
    name: 'Sergipe',
    latitude: -10.90,
    longitude: -37.07
  },
  CE: {
    name: 'Ceará',
    latitude: -3.71,
    longitude: -38.54
  },
  AC: {
    name: 'Acre',
    latitude: -8.77,
    longitude: -70.55
  },
  MT: {
    name: 'Mato Grosso',
    latitude: -12.64,
    longitude: -55.42
  },
  TO: {
    name: 'Tocantins',
    latitude: -10.25,
    longitude: -48.25
  },
  PA: {
    name: 'Pará',
    latitude: -5.53,
    longitude: -52.29
  },
  PB: {
    name: 'Paraíba',
    latitude: -7.06,
    longitude: -35.55
  },
  PI: {
    name: 'Piauí',
    latitude: -8.28,
    longitude: -43.68
  },
  RO: {
    name: 'Roraima',
    latitude: -11.22,
    longitude: -62.80
  },
  AP: {
    name: 'Amapá',
    latitude: 1.41,
    longitude: -51.77
  },
  MA: {
    name: 'Maranhão',
    latitude: -2.55,
    longitude: -44.30
  },
  RR: {
    name: 'Roraima',
    latitude: 1.89,
    longitude: -61.22
  }
}
