import { XCircle } from "@phosphor-icons/react"
import Descricao from "../template/Descricao"
import Flex from "../template/Flex"
import Titulo from "../template/Titulo"

interface DetalhesAtorProps {
  ator: AtorDetalhado
}

function SemBiografia() {
  return (
    <Flex className="text-zinc-600 py-5">
      <XCircle size={70} />
      <Titulo texto="Biografia não informada" pequeno className="w-fit text-center m-0" p-0 />
      <XCircle size={70} />
    </Flex>
  )
}

export default function DetalhesAtor({ ator }: DetalhesAtorProps) {
  return (
    <Flex col className="bg-zinc-800 rounded-lg w-full justify-between items-center pt-16 md:pt-20 lg:pt-26">
      <Titulo pequeno texto={ator.nome} alinhar="center" />
      <Flex className="gap-5 flex-wrap font-semibold">
        {ator.genero && (<span>Gênero: {ator.genero}</span>)}
        {ator.dataNascimento && (<span>Data Nascimento: {new Intl.DateTimeFormat("pt-BR").format(ator.dataNascimento)}</span>)}
        {ator.localNascimento && (<span>Local de Nascimento: {ator.localNascimento}</span>)}
      </Flex>

      <Flex col className="p-3 flex-1">
        {ator.biografia && (
          <>
            <Titulo texto="Biografia" pequeno alinhar="center" className="mb-0" />
            <Descricao texto={ator.biografia} className="text-justify mx-10 mb-5" />
          </>
        )}

        {!ator.biografia && (
          <SemBiografia />
        )}
      </Flex>
    </Flex>
  )
}