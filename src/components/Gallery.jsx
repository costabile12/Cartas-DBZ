import { useEffect, useState } from "react";
import { Tarjeta } from "./Tarjeta";
import Esfera from "../assets/esfera.png"

export const Gallery = () => {

    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [paginacion, setPaginacion] = useState(1);

    useEffect(()=> {

        const fetchData = async () => {
            try {
                const res = await fetch(`https://dragonball-api.com/api/characters/?page=${paginacion}`)
                

                if(res.status ===  200){
                    const data = await res.json();
                    setPersonajes(data.items || data);
                }

                else if(res.status === 404){
                    console.log("Lo buscado no esta disponible");
                }
            
            } catch (error) {
                console.error("No se pudo cargar personajes:" ,error);

            } finally {
                setCargando(false);
            }


        }

        fetchData(paginacion);
 
    }, [paginacion])

    const disminuirPage = () => {
        if (paginacion > 1) {
        setPaginacion((prev) => prev - 1);
        }
        else if (paginacion === 1){
            setPaginacion(6);
        }
    };

    const aumentarPage = () => {
        if (paginacion < 6) {
        setPaginacion((prev) => prev + 1);
        }
        else if(paginacion === 6){
            setPaginacion(1);
        }
    };

    if(cargando) return(<p>Cargando...</p>)

    return(
        <>
        
            <section className="container mx-auto py-20">
                <h1 className="text-3xl mb-12 font-black text-amber-400 flex items-center justify-center">
                    DRAG<span><img width={25} height={25} src={Esfera} alt="esfera" /></span>N <span className="text-red-800">BALL Z</span> 
                </h1>

                <div className="grid grid-cols-1 gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                    {personajes.map((p)=>(
                        <div key={p.id}>
                            <Tarjeta personaje={p} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full bg-amber-200 flex gap-12 justify-center items-center fixed z-50 bottom-0 h-16" >
                <button className="border px-6 py-2 bg-red-800 text-white rounded-3xl cursor-pointer font-semibold hover:bg-red-500" onClick={disminuirPage}>Anterior</button>
                <button className="border px-6 py-2 bg-red-800 text-white rounded-3xl cursor-pointer font-semibold hover:bg-red-500" onClick={aumentarPage} >Siguiente</button>
            </section>

        </>
    );
}