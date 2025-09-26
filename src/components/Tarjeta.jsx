import Esfera from "../assets/esfera.png"

export const Tarjeta = ({personaje}) => {


    return(
        <div className="bg-gradient-to-b from-blue-600 via-red-900 to-blue-600 px-6 py-6  flex flex-col items-center rounded-2xl h-full hover:scale-105 hover:drop-shadow-2xl/60     hover:drop-shadow-white">
            
            <div className="py-3 mb-4 ">
                <h5 className="bg-gradient-to-br from-amber-100 via-amber-400 to-amber-400 border-b-2 border-r-2 w-96 xs:50 md:w-65 lg:w-65 xl:w-65 text-center font-semibold italic mx-auto uppercase rounded-lg">{personaje.name}</h5>
            </div>

            <div className={`border-5 border-gray-400 w-full  h-80  flex justify-center items-center mb-4 bg-gradient-to-br ${personaje.affiliation==="Z Fighter" ? "from-emerald-600 via-emerald-100 to-emerald-600 " : "from-red-600 via-red-100 to-red-600 "} p-3`}>
                <img src={personaje.image} alt={personaje.name} className="w-50 h-full"/>
            </div>

            <div className=" w-96 xs:50 md:w-65 lg:w-65 xl:w-65 flex justify-between items-center text-gray-400 font-bold text-xs  text-shadow-lg/25 mb-1 ">
                <p>Ki: {personaje.ki}</p>
                <p>Max Ki:{personaje.maxKi}</p>
            </div>
            
            <section className="mt-0">
                <div className="w-8 h-8 p-1 rounded-t-lg relative mx-auto top-3">
                    <img src={Esfera} alt="Esfera del dragon" className="w-full h-full"/>
                </div>
                <div className="bg-gradient-to-br from-amber-100 via-amber-400 to-amber-400 border-b-2 border-r-2 w-96 xs:50 md:w-65 lg:w-65 xl:w-70 text-center rounded-md font-mono">
                    
                    <p className="text-xs font-bold mx-auto pt-5 mb-1">{personaje.affiliation}</p>

                    <p className="text-xs text-right mr-2 mb-2">{personaje.id}</p>
                </div>
            </section>

        </div>
    )
}