export type User = {
  Id: number
  Login: string
  Nome: string
  Senha: string
  Telefone: string
  TipoUsuario: UserType
  DtCriacao: string
}

export type UserType = "CLIENTE" | "GERENTE"
