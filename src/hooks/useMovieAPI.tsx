const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE
const BG_FILME_URL = process.env.NEXT_PUBLIC_BG_FILME_URL
const TOKEN_DE_LEITURA = process.env.NEXT_PUBLIC_TOKEN_DE_LEITURA

export default function useMovieAPI() {
  async function get(fragmentoURL: string, params?: string) {
    const fragmento = fragmentoURL.startsWith("/") ? fragmentoURL.substring(1) : fragmentoURL;

    try {

      const resposta = await fetch(`${URL_BASE}/${fragmento}?language=pt-BR&page=1${params ? `&${params}` : ""}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${TOKEN_DE_LEITURA}`,
        }
      })
      const json = await resposta.json()

      return {
        json,
        status: resposta.status
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  function formatarImagemURL(url: string) {
    if (!url) return ""

    return `${BG_FILME_URL}${url}`
  }

  async function getUltimosFilmes(): Promise<Filme[]> {
    const { json, status } = await get("movie/now_playing")
    const fatia = json.results.slice(0, 12)

    return fatia.map((item: any) => {
      return {
        id: item.id,
        titulo: item.title,
        descricao: item.overview,
        linkImagemFundo: formatarImagemURL(item.backdrop_path),
        linkImagemPoster: formatarImagemURL(item.poster_path),
        nota: item.vote_average,
        dataLancamento: new Date(item.release_date)
      }
    })
  }

  async function getGenerosFilme(filmeId: string) {
    const { json } = await get(`/movie/${filmeId}`)

    return json.genres.map((genero: any) => {
      return {
        id: genero.id,
        nome: genero.name
      }
    })
  }

  async function getFilmeDetalhado(idFilme: string): Promise<FilmeDetalhado> {
    const { json } = await get(`/movie/${idFilme}`, "append_to_response=credits")

    return {
      id: json.id,
      titulo: json.title,
      descricao: json.overview,
      linkImagemFundo: formatarImagemURL(json.backdrop_path),
      linkImagemPoster: formatarImagemURL(json.poster_path),
      nota: json.vote_average,
      dataLancamento: new Date(json.release_date),
      tituloOriginal: json.original_title,
      generos: json.genres.map((genero: any) => {
        return {
          id: genero.id,
          nome: genero.nome
        }
      }),
      atores: json.credits.cast.slice(0, 10).map((ator: any) => {
        return {
          id: ator.id,
          nome: ator.name,
          imagemPerfil: formatarImagemURL(ator.profile_path),
          personagem: ator.character
        }
      }),
      duracao: json.runtime
    }

  }

  async function getFilmeSimilares(idFilme: string): Promise<Filme[]> {
    const { json } = await get(`/movie/${idFilme}/similar`)
    const selecionados = json.results.slice(0, 9)

    return selecionados.map((item: any) => {
      return {
        id: item.id,
        titulo: item.title,
        descricao: item.overview,
        linkImagemFundo: formatarImagemURL(item.backdrop_path),
        linkImagemPoster: formatarImagemURL(item.poster_path),
        nota: item.vote_average,
        dataLancamento: new Date(item.release_date)
      }
    })
  }

  async function getAtorDetalhado(idAtor: string): Promise<AtorDetalhado> {
    const { json } = await get(`/person/${idAtor}`)

    return {
      id: json.id,
      nome: json.name,
      biografia: json.biography,
      imagemPerfil: formatarImagemURL(json.profile_path),
      dataNascimento: new Date(json.birthday),
      localNascimento: json.place_of_birth,
      genero: json.gender === 1 ? "Feminino" : "Masculino"
    }

  }

  async function getImagemAtor(idAtor: string) {
    const { json } = await get(`/person/${idAtor}/images`)
    return json.profiles.map((img: any) => formatarImagemURL(img.file_path))
  }

  return { getUltimosFilmes, getGenerosFilme, getFilmeDetalhado, getFilmeSimilares, getAtorDetalhado, getImagemAtor }
}