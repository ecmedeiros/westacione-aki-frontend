export type parkingSpace = {
  Id: number
  IdEstacionamento: number
  NumeroVaga: number
  Disponivel: boolean
  Tipo: parkingSpaceType
  PrecoHr: number
}
export type parkingSpaceType = "CARRO" | "MOTO"
