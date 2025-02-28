import Album from "@/components/ator/Album"
import DetalhesAtor from "@/components/ator/DetalhesAtor"
import ImagemPerfil from "@/components/ator/ImagemPerfil"
import OutrosFilmes from "@/components/ator/OutrosFilmes"
import Container from "@/components/template/Container"
import Wrap from "@/components/template/Wrap"
import useMovieAPI from "@/hooks/useMovieAPI"

export default async function Ator(props: any) {
  const { id } = props.params
  const { getAtorDetalhado } = useMovieAPI()
  const ator: AtorDetalhado = await getAtorDetalhado(id)

  return (
    <Wrap>

      <Container className="mt-32 md:mt-44 min-h-96 w-full" bigPadding>
        <ImagemPerfil url={ator?.imagemPerfil} imgAlt={`Imagem de ${ator?.nome}`} />
        <DetalhesAtor ator={ator} />
      </Container>
      <Album idAtor={String(id)} />
      <OutrosFilmes idAtor={String(id)} />
    </Wrap>
  )
}