import { useContext } from "react";
import CrowContext from '../context/CrowProvider'


	const useCrow = () => {

    		return useContext(CrowContext)

	}

	export default useCrow