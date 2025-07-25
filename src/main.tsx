import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

import AppRouter from './router'
import { ParallaxProvider} from 'react-scroll-parallax'

//Este es el global que podria importarse igualmente en index.html
//Aqui deberia de cargarse el import de google fonts o en el head de index.html. 
//Sería lo mismo?

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParallaxProvider>
      <AppRouter />
    </ParallaxProvider>
  </StrictMode>,

)
