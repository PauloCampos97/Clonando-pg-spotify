
export function ACards() {
    return (
        <div className="flex flex-wrap max-w-60 min-h-52 p-4  rounded-lg hover:bg-white/5 transition-colors">
            <a className=" rounded-lg " href="#">
                <img className=" rounded-lg" src="album-soad.avif" alt="" />
                <h3 className="font-semibold m-1">
                    Sistem of a Down
                </h3>
                <p className="text-zinc-400 text-sm m-1">
                    Artista
                </p>
            </a>
        </div>

    )
}

export function ACardsRounded() {
    return (
        <div className=" max-w-60 min-h-52 p-4  rounded-lg hover:bg-white/5 transition-colors">
            <a className=" max-h-72 rounded-lg " href="#">
                <img className=" rounded-full" src="album-soad.avif" alt="" />
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