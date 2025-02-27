import { useEffect, useState } from "react"
import ListaFilmes from "./ListaFilmes"
import Container from "../template/Container"
import useMovieAPI from "@/hooks/useMovieAPI"

interface SugestaoFilmesProps {
  idAtor: string
}

export default function SugestaoFilmes({ idAtor }: SugestaoFilmesProps) {
  const [filmes, setFilmes] = useState<Filme[]>([])
  const { getFilmeSimilares } = useMovieAPI()

  useEffect(() => {
    getFilmeSimilares(idAtor).then(setFilmes)
  }, [])

  return (
    <Container className="my-16 bg-neutral-900 rounded-lg lg-pt-10">
      <ListaFilmes filmes={filmes} titulo="Recomendações" />
    </Container>
  )
}