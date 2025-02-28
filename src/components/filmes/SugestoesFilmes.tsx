import ListaFilmes from "./ListaFilmes"
import Container from "../template/Container"
import useMovieAPI from "@/hooks/useMovieAPI"

interface SugestoesFilmesProps {
  idFilme: string
}

export default async function SugestoesFilmes({ idFilme }: SugestoesFilmesProps) {
  const { getFilmeSimilares } = useMovieAPI()
  const filmes: Filme[] = await getFilmeSimilares(String(idFilme))

  return (
    <Container className="my-16 bg-neutral-900 rounded-lg lg:pt-10">
      <ListaFilmes filmes={filmes} titulo="Recomendações" />
    </Container>
  )
}