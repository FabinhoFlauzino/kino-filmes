import CardFilmeEmDestque from "@/components/filmes/CardFilmeEmDestque"
import ListaFilmes from "@/components/filmes/ListaFilmes"
import Carrossel from "@/components/template/Carrossel"
import Wrap from "@/components/template/Wrap"
import useMovieAPI from "@/hooks/useMovieAPI"

export default async function Filmes() {
  const { getUltimosFilmes } = useMovieAPI()
  const filmes: Filme[] = await getUltimosFilmes()

  return (
    <Wrap>
      <Carrossel slideAutomatico>
        {filmes.map((filme) => (
          <CardFilmeEmDestque 
            key={filme.id}
            filme={filme}
          />
        ))}
      </Carrossel>
      <ListaFilmes filmes={filmes} titulo="Últimos Filmes"/>
    </Wrap>
  )
}