import Container from "../template/Container"
import Grid from "../template/Grid"
import Titulo from "../template/Titulo"
import CardFilme from "./CardFilme"

interface ListaFilmesProps {
  filmes: Filme[]
  className?: string
  titulo: string
  tituloPequeno?: boolean
}

export default function ListaFilmes({ filmes, titulo, className, tituloPequeno }: ListaFilmesProps) {
  return (
    <Container className={className}>
      <Titulo className="pl-2" alinhar="center" texto={titulo} pequeno={tituloPequeno} />

      <Grid className="md:grid-cols-2 lg:grid-cols-3 py-5">
        {
          filmes.map((filme) => (
            <CardFilme filme={filme} key={filme.id}/>
          ))
        }
      </Grid>
    </Container>
  )
}