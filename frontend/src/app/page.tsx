"use client";

import { ACards, ACardsRounded } from "@/components/card";
import { ChevronLeft, ChevronRight, House, Package, Search, Wifi } from "lucide-react";



export default function Home() {


  return (
    <div className="flex gap-2">

      {/*Div da parte esquerda da página */}
      <div className="flex flex-col">

        {/* Modal superior da parte esquerda  */}
        <div className="w-[420px] h-40 bg-zinc-900 m-2 mr-0 p-6 flex flex-col justify-between rounded-lg">
          <div className="flex">
            <Wifi />
            <a href="#">Spotify</a>
          </div>

          <div className="flex gap-5">
            <House />
            <a className="text-zinc-400 font-semibold" href="#">Início</a>
          </div>

          <div className="flex gap-5">
            <Search />
            <a className="text-zinc-400 font-semibold" href="#">Buscar</a>
          </div>
        </div>

        {/* Modal inferior da parte esquerda */}
        <div className="w-[420px] h-[680px] bg-zinc-900 m-2 mr-0 mt-0 flex flex-col  rounded-lg">

          <div className="flex gap-3 m-6">
            <Package />
            <a className="text-zinc-400 text-base font-semibold hover:text-zinc-100 transition-all" href="#">Sua Biblioteca</a>
          </div>

          <div className="w-[400px] h-32 bg-zinc-800 rounded-lg mx-auto">
            <h1 className="font-semibold text-sm mx-5 mt-4 mb-2">Crie sua primeira playlist</h1>
            <p className="mx-5 text-sm font-normal">É fácil, vamos te ajudar.</p>
            <button className="rounded-3xl px-4 py-1.5 m-5 font-bold flex bg-zinc-100 text-zinc-950 text-sm hover:scale-105">Criar playlist</button>
          </div>

          <div className="w-[400px] h-32 bg-zinc-800 rounded-lg mx-auto m-5">
            <h1 className="font-semibold text-sm mx-5 mt-4 mb-2">Que tal seguir um podcast novo?</h1>
            <p className="mx-5 text-sm font-normal">Avisaremos você sobre novos episódios.</p>
            <button className="rounded-3xl px-4 py-1.5 m-5 font-bold flex bg-zinc-100 text-zinc-950 text-sm hover:scale-105 border-white">Explore podcasts</button>
          </div>

          <div className="flex flex-wrap gap-5 font-extralight">
            <a href="#">Legal</a>
            <a href="#">Segurança e Centro de privacidade</a>
            <a href="#">Políticas de privacidade</a>
            <a href="#">Cookies</a>
            <a href="#">Sobre anúncios</a>
            <a href="#">Acessibilidade</a>
            <button className="block shadow-shape rounded-3xl px-5 py-1 font-semibold hover:scale-105">Português do Brasil</button>
          </div>
        </div>
      </div>



      {/* Parte direita da pagina */}
      <div className="flex-1 rounded-lg bg-zinc-800 m-2 ml-0">
        {/* div das setinhas */}
        <div className="flex items-center space-x-3 h-16 bg-zinc-900 rounded-t-lg ">
          <button className="ml-5 rounded-full bg-black/40 p-1">
            <ChevronLeft className="text-zinc-400" />
          </button>
          <button className=" rounded-full bg-black/40 p-1">
            <ChevronRight className="text-zinc-400" />
          </button>
        </div>

        <div>
          <div className="flex justify-between">
            <h1 className="font-extrabold text-xl ml-5 mt-5">Artistas populares</h1>
            <a className="text-zinc-400 text-sm font-semibold mr-5 mt-5" href="#">Mostrar tudo</a>
          </div>

          <div className="flex mb-3 p-4">
            <ACardsRounded />
            <ACardsRounded />
            <ACardsRounded />
            <ACardsRounded />
            <ACardsRounded />
            <ACardsRounded />
          </div>

          <div className="flex justify-between">
            <h1 className="font-extrabold text-xl ml-5 mt-5">Álbuns populares</h1>
            <a className="text-zinc-400 text-sm font-semibold mr-5 mt-5" href="#">Mostrar tudo</a>
          </div>
          <div className="flex mb-5 p-4">
            <ACards />
            <ACards />
            <ACards />
            <ACards />
            <ACards />
            <ACards />
          </div>

        </div>
      </div>
    </div >
  );
}