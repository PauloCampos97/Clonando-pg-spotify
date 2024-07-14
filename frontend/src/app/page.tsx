"use client";

import { Button } from "@/components/button";
import { House, Package, Search, Wifi } from "lucide-react";



export default function Home() {


  return (
    <div className="flex gap-2">
      <div>
        <div className="w-[420px] h-40 bg-zinc-900 m-2 p-6 flex flex-col justify-between rounded-lg">
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


        <div className="w-[420px] h-[680px] bg-zinc-900 m-2 flex flex-col  rounded-lg">

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
            <button className="rounded-3xl px-4 py-1.5 m-5 font-bold flex bg-zinc-100 text-zinc-950 text-sm hover:scale-105">Explore podcasts</button>
          </div>
        </div>
      </div>




      <div>

      </div>
    </div>
  );
}