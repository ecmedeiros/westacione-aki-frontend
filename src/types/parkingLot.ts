export type ParkingLot = {
  Id: number
  IdUsuario: number
  Nome: string
  CapacidadeTotal: number
  VagasDisponiveis: number
  DtCriacao: Date
  Localizacao?: Localization
}

export type Localization = {
  street: string
  number: string
  neighborhood: string
  city: string
  state: string
  observation?: string
}
