import { useEffect, useState } from "react"
import ListaFilmes from "../filmes/ListaFilmes"
import Container from "../template/Container"
import useMovieAPI from "@/hooks/useMovieAPI"

interface OutrosFilmesProps {
  idAtor: string
}

export default function OutrosFilmes({ idAtor }: OutrosFilmesProps) {
  const [filmes, setFilmes] = useState<Filme[]>([])
  const { getFilmesAtor } = useMovieAPI()

  useEffect(() => {
    getFilmesAtor(idAtor).then(setFilmes)
  }, [])

  return (
    <Container>
      <ListaFilmes filmes={filmes} titulo="Participação em FIlmes" />
    </Container>
  )
}