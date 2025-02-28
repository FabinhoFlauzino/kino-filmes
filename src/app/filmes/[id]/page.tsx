import CardFilmeDetalhado from "@/components/filmes/CardFilmeDetalhado"
import Elenco from "@/components/filmes/Elenco"
import SugestoesFilmes from "@/components/filmes/SugestoesFilmes"
import Wrap from "@/components/template/Wrap"
import useMovieAPI from "@/hooks/useMovieAPI"

export default async function Filme(props: any) {
  const { id } = props.params
  const { getFilmeDetalhado } = useMovieAPI()
  const detalheFilme: FilmeDetalhado = await getFilmeDetalhado(String(id))

  return (
    <Wrap>
      <CardFilmeDetalhado filme={detalheFilme} />
      <Elenco elenco={detalheFilme.atores} />
      <SugestoesFilmes idFilme={String(id)} />
    </Wrap>
  )
}