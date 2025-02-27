import Container from "../template/Container"
import Descricao from "../template/Descricao"
import Flex from "../template/Flex"
import Titulo from "../template/Titulo"
import Generos from "./Generos"
import Nota from "./Nota"
import PosterFilme from "./PosterFilme"

interface CardFilmeDetalahdoProps {
  filme: FilmeDetalhado
}

export default function CardFilmeDetalhado({ filme }: CardFilmeDetalahdoProps) {
  return (
    <Container>
      <Flex col className="bg-neutral-900 rounded-lg mt-8 p-4 md:p-8 lg:flex-row">
        <PosterFilme url={filme.linkImagemPoster} titulo={filme.titulo} />
        <Flex col className="m-3 ml-8 gap-8 text-xl items-start">
          <Titulo texto={filme.titulo} alinhar="center" className="lg:text-start" />
          <Descricao texto={filme.descricao} className="text-base" />
          <p>Lançamento: {new Intl.DateTimeFormat("pt-br").format(new Date(`${filme.dataLancamento}`))}</p>
          <p>Duraçao: {filme.duracao} min</p>
          <p>Título Original: {filme.tituloOriginal}</p>
          <Flex col className="justify-start items-start w-full">
            <Generos idFilme={filme.id} grande/>
            <Nota nota={filme.nota} grande/>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}