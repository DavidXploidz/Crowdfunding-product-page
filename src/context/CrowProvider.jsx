import { createContext } from "react";
import { useState } from "react";

	const CrowContext = createContext()

	const CrowProvider = ({children}) => {

		const [mostrarModal, setMostrarModal] = useState(false)
		const [mostrarGracias, setMostrarGracias] = useState(false)
	

    	return(
       	 <CrowContext.Provider 
            	value={{
					mostrarModal,
					setMostrarModal,
					mostrarGracias,
					setMostrarGracias

           	 }} 
       	 >
           	 {children}
        	</CrowContext.Provider>
   	 )
	}



	export {
    	CrowProvider
	}

	export default CrowContext