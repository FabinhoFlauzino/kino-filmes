"use client"
import ImagemComFallback from "@/components/template/ImagemComFallback";
import { Hourglass } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="relative w-96 h-96 border-2 border-green-600">

      <ImagemComFallback url="" imgAlt="Imagem de fundo">
        <Hourglass size={150} />
      </ImagemComFallback>
    </div>
  );
}
