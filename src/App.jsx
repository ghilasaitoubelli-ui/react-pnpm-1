// import React from 'react'
// import Nav from './Nav'
// import background from "./images/background.png"
// import Shoose from './Shoose'
// import "./App.css"
// export default function App() {
//   return (
//     <>
//     <Nav/>
//     <div className="image">
//   <img src={background} alt="image de fond" />
//   <div className="text">
//     <h1>Discover our best sneakers</h1>
//   </div>
//   <div className='part2'>
//     <Shoose/>
//   </div>
// </div>

//     </>
//   )
// }

// import React, { useState } from 'react'
// import Nav from './Nav'
// import background from "./images/background.png"
// import Shoose from './Shoose'
// import "./App.css"

// export default function App() {
//   const [panier, setPanier] = useState([])

//   function ajouterAuPanier(article) {
//     setPanier([...panier, article])
//   }

//   return (
//     <>
//     <Nav panier={panier}/>
//     <div className="image">
//       <img src={background} alt="image de fond" />
//       <div className="text">
//         <h1>Discover our best sneakers</h1>
//       </div>
//     </div>
//     <div className='part2'>
//       <Shoose ajouterAuPanier={ajouterAuPanier}/>
//     </div>
//     </>
//   )
// }


import React, { useState } from 'react'
import Nav from './Nav'
import background from "./images/background.png"
import Shoose from './Shoose'
import "./App.css"

export default function App() {
  const [panier, setPanier] = useState([])

  function ajouterAuPanier(article) {
    // vérifie si l'article existe déjà
    const existant = panier.find(item => item.image === article.image)

    if (existant) {
      ajouterQuantite(panier.indexOf(existant), 1)
    } else {
      setPanier([...panier, { ...article, quantite: 1 }])
    }
  }

  function retirerDuPanier(index) {
    const nouveauPanier = panier.filter((item, i) => i !== index)
    setPanier(nouveauPanier)
  }

  function ajouterQuantite(index, valeur) {
    const nouveauPanier = [...panier]
    nouveauPanier[index].quantite += valeur

    // si la quantité tombe à 0, on retire l'article
    if (nouveauPanier[index].quantite <= 0) {
      retirerDuPanier(index)
    } else {
      setPanier(nouveauPanier)
    }
  }

  return (
    <>
    <Nav panier={panier} retirerDuPanier={retirerDuPanier} ajouterQuantite={ajouterQuantite}/>
    <div className="image">
      <img src={background} alt="image de fond" />
      <div className="text">
        <h1>Discover our best sneakers</h1>
      </div>
    </div>
    <div className='part2'>
      <Shoose ajouterAuPanier={ajouterAuPanier}/>
    </div>
    </>
  )
}




