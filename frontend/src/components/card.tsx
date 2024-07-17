import { Play } from "lucide-react"


export function ACards() {
    return (
        <div className=" max-w-60 min-h-52 p-4  rounded-lg hover:bg-white/5 transition-colors">
            <a className="relative min-w-36 rounded-lg " href="#">
                <img className=" rounded-lg" src="album-soad.avif" alt="" />
                <div className="absolute inset-0 flex -mb-24  items-center justify-end  rounded-full opacity-0 hover:opacity-100 transition-opacity">
                    <button className=" p-3 rounded-full bg-green-400 text-black hover:scale-105">
                        <Play />
                    </button>
                </div>
                <h3 className="font-semibold m-1">
                    Sistem of a Down
                </h3>
                <p className="text-zinc-400 text-sm m-1">
                    Artista
                </p>
            </a>
        </div >

    )
}

export function ACardsRounded() {
    return (
        <div className=" max-w-60 min-h-52 p-4  rounded-lg hover:bg-white/5 transition-colors">
            <a className="relative min-w-36 rounded-lg " href="#">
                <img className=" rounded-full" src="album-soad.avif" alt="" />
                <div className="absolute inset-0 flex -mb-24 items-center justify-end  rounded-full opacity-0 hover:opacity-100 transition-opacity">
                    <button className=" p-3 rounded-full bg-green-400 text-black hover:scale-105">
                        <Play />
                    </button>
                </div>
                <h3 className="font-semibold m-1">
                    Sistem of a Down
                </h3>
                <p className="text-zinc-400 text-sm m-1">
                    Artista
                </p>
            </a>
        </div >

    )
}