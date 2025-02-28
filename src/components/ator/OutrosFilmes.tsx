import ListaFilmes from "../filmes/ListaFilmes"
import Container from "../template/Container"
import useMovieAPI from "@/hooks/useMovieAPI"

interface OutrosFilmesProps {
  idAtor: string
}

export default async function OutrosFilmes({ idAtor }: OutrosFilmesProps) {
  const { getFilmesAtor } = useMovieAPI()
  const filmes: Filme[] = await getFilmesAtor(idAtor) 
 
  return (
    <Container>
      <ListaFilmes filmes={filmes} titulo="Participação em FIlmes" />
    </Container>
  )
}