import { ClipLoader } from "react-spinners"
// import { useQuery } from "@tanstack/react-query"
import "react-toastify/dist/ReactToastify.css"
import { useState } from "react"
import { getColorValue } from "@/utils"
import { ParkingLot } from "@/types"
import { Link } from "react-router-dom"
import axios from 'axios';


export function Home() {


  let mockdata: ParkingLot[] = [
    // {
    //   Id: 1,
    //   IdUsuario: 101,
    //   Nome: "Estacionamento Central",
    //   CapacidadeTotal: 50,
    //   VagasDisponiveis: 10,
    //   DtCriacao: new Date("2022-01-01"),
    // },
    // {
    //   Id: 2,
    //   IdUsuario: 102,
    //   Nome: "Estacionamento Sul",
    //   CapacidadeTotal: 100,
    //   VagasDisponiveis: 25,
    //   DtCriacao: new Date("2022-02-15"),
    // },
    // {
    //   Id: 3,
    //   IdUsuario: 103,
    //   Nome: "Estacionamento Norte",
    //   CapacidadeTotal: 70,
    //   VagasDisponiveis: 15,
    //   DtCriacao: new Date("2022-03-10"),
    // },
    // {
    //   Id: 4,
    //   IdUsuario: 104,
    //   Nome: "Estacionamento Oeste",
    //   CapacidadeTotal: 80,
    //   VagasDisponiveis: 5,
    //   DtCriacao: new Date("2022-04-20"),
    // },
    // {
    //   Id: 5,
    //   IdUsuario: 105,
    //   Nome: "Estacionamento Leste",
    //   CapacidadeTotal: 60,
    //   VagasDisponiveis: 30,
    //   DtCriacao: new Date("2022-05-05"),
    // },
    // {
    //   Id: 6,
    //   IdUsuario: 106,
    //   Nome: "Estacionamento Centro Histórico",
    //   CapacidadeTotal: 40,
    //   VagasDisponiveis: 20,
    //   DtCriacao: new Date("2022-06-11"),
    // },
    // {
    //   Id: 7,
    //   IdUsuario: 107,
    //   Nome: "Estacionamento Aeroporto",
    //   CapacidadeTotal: 120,
    //   VagasDisponiveis: 60,
    //   DtCriacao: new Date("2022-07-01"),
    // },
    // {
    //   Id: 8,
    //   IdUsuario: 108,
    //   Nome: "Estacionamento Shopping",
    //   CapacidadeTotal: 200,
    //   VagasDisponiveis: 50,
    //   DtCriacao: new Date("2022-08-08"),
    // },
    // {
    //   Id: 9,
    //   IdUsuario: 109,
    //   Nome: "Estacionamento Hospital",
    //   CapacidadeTotal: 150,
    //   VagasDisponiveis: 40,
    //   DtCriacao: new Date("2022-09-19"),
    // },
    // {
    //   Id: 10,
    //   IdUsuario: 110,
    //   Nome: "Estacionamento Praia",
    //   CapacidadeTotal: 90,
    //   VagasDisponiveis: 35,
    //   DtCriacao: new Date("2022-10-22"),
    // },
  ]

   
  const [searchText, setSearchText] = useState<string>("")


  // Fazendo uma requisição GET
  axios.get('http://localhost:5123/api/Estacionamento/ObterTodos', {
    params: {
      page: 1,
      pageSize: 10
    },
    headers: {
      'accept': '*/*'
    }
  })
  .then(response => {
    
    mockdata = response.data.objeto.itens;
    alert("teste")
    
    //console.log(response.data.objeto.itens); // Manipula a resposta de sucesso
  })
  .catch(error => {
    console.error('Erro na requisição:', error); // Manipula os erros da requisição
  });
  

  // const {
  //   data: parkingLotData,
  //   error: queryError,
  //   isLoading: loading,
  // } = useQuery<[]>({
  //   queryKey: ["parking-lot", searchText],
  //   queryFn: async () => {
  //     console.log("olokinho bixo")
  //     // const data = await getAppointmentInfo(appointmentId ?? "")
  //     // return data
  //   },
  //   staleTime: 1000 * 60 * 1,
  // })

  const filteredMockData: ParkingLot[] = mockdata
    .map((parkingLot) => {
      if (searchText === "") {
        return parkingLot
      } else if (
        parkingLot.Nome.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return parkingLot
      }
      return null
    })
    .filter((parkingLot) => parkingLot !== null)



  const loading = false
  const queryError = false

  return (
    <div className="container flex flex-col w-full mx-auto p-4 gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Encontre um estacionamento!</h1>
        <input
          className="w-[350px] py-2 pl-3 text-sm text-gray-text-input placeholder-gray-100 border border-gray-vertical-line rounded-lg focus:outline-none focus:ring-0"
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="Digite uma cidade, rua ou bairro"
        />
      </div>
      {loading ? (
        <div className="flex justify-center">
          <ClipLoader color={getColorValue("gray-vertical-line")} size={70} />
        </div>
      ) : queryError ? (
        <div className="flex flex-col w-full items-center justify center">
          <h3 className="font-bold text-lg">
            Nenhum estacionamento encontrado!
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMockData.map((parkingLot) => (
            <div
              key={parkingLot.Id}
              className="p-4 border rounded shadow hover:bg-gray-100 transition"
            >
              <h2 className="text-xl font-bold">{parkingLot.Nome}</h2>
              <p>Capacidade Total: {parkingLot.CapacidadeTotal}</p>
              <p>Vagas Disponíveis: {parkingLot.VagasDisponiveis}</p>
              <p>
                Criado em:{" "}
                {parkingLot.DtCriacao.toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
              <Link
                to={`/estacionamento/${parkingLot.Id}`}
                className="text-blue hover:underline"
              >
                Ver detalhes
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
