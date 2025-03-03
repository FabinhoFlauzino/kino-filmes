"use client"

import Link from "next/link"
import Container from "../template/Container"
import Grid from "../template/Grid"
import Titulo from "../template/Titulo"
import CardFilme from "./CardFilme"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface ListaFilmesProps {
  filmes: Filme[]
  className?: string
  titulo: string
  tituloPequeno?: boolean
}

export default function ListaFilmes({ filmes, titulo, className, tituloPequeno }: ListaFilmesProps) {
  const [indiceSelecionado, setIndiceSelecionado] = useState<number | null>(null)

  return (
    <Container className={className}>
      <Titulo className="pl-2" alinhar="center" texto={titulo} pequeno={tituloPequeno} />

      <Grid className="md:grid-cols-2 lg:grid-cols-3 py-5">
        {
          filmes.map((filme, idx) => (
            <Link
              key={filme.id}
              href={`/filmes/${filme.id}`}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setIndiceSelecionado(idx)}
              onMouseLeave={() => setIndiceSelecionado(null)}
            >
              <AnimatePresence>
                {indiceSelecionado === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-red-kino block  rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <CardFilme filme={filme} />
            </Link>
          ))
        }
      </Grid>
    </Container>
  )
}