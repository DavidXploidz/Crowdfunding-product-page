import {CrowProvider} from './context/CrowProvider'
import AppCrow from './components/AppCrow'

  function App() {


  	return (
    	<CrowProvider>
      		<AppCrow />  
    	</CrowProvider>
    
 	 )
	}

	export default App