// import logo from "./images/logo.png";
// import React, { useState } from 'react'
// import "./Nav.css"
// import { ShoppingCart } from "lucide-react"

// export default function Nav({ panier }) {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <>
//     <nav>
//       <div className="container">
//         <div className="logo">
//           <img src={logo} alt="shoos logo" />
//         </div>
//         <div className="navIcon" onClick={() => setIsOpen(!isOpen)}>
//           <ShoppingCart />
//           {panier.length > 0 && <span className="badge">{panier.length}</span>}
//         </div>
//       </div>
//     </nav>

//     {isOpen && (
//       <div className="cart-menu">
//         <div className="cart-header">
//           <h2>Mon Panier</h2>
//           <button onClick={() => setIsOpen(false)} className="close-icon">✕</button>
//         </div>
//         <div className="cart-content">
//           {panier.length === 0 ? (
//             <p>Votre panier est vide</p>
//           ) : (
//             panier.map((article, index) => (
//               <div key={index} className="cart-item">
//                 <img src={article.image} alt="article" className="panier-img" />
//                 <p>{article.prix} €</p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     )}
//     </>
//   )
// }






import logo from "./images/logo.png";
import React, { useState } from 'react'
import "./Nav.css"
import { ShoppingCart } from "lucide-react"

export default function Nav({ panier, retirerDuPanier, ajouterQuantite }) {
  const [isOpen, setIsOpen] = useState(false)

  const total = panier.reduce((somme, article) => somme + (article.prix * article.quantite), 0)

  return (
    <>
    <nav>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="shoos logo" />
        </div>
        <div className="navIcon" onClick={() => setIsOpen(!isOpen)}>
          <ShoppingCart />
        </div>
      </div>
    </nav>

    {isOpen && (
      <div className="cart-menu">
        <div className="cart-header">
          <h2>Mon Panier</h2>
          <button onClick={() => setIsOpen(false)} className="close-icon">✕</button>
        </div>

        <div className="cart-content">
          {panier.length === 0 ? (
            <p>Votre panier est vide</p>
          ) : (
            panier.map((article, index) => (
              <div key={index} className="cart-item">
                <img src={article.image} alt="article" className="panier-img" />
                <p>{article.prix} €</p>

                <div className="quantite-control">
                  <button onClick={() => ajouterQuantite(index, -1)}>-</button>
                  <span>{article.quantite}</span>
                  <button onClick={() => ajouterQuantite(index, 1)}>+</button>
                </div>

                <button className="remove-btn" onClick={() => retirerDuPanier(index)}>✕</button>
              </div>
            ))
          )}
        </div>

        {panier.length > 0 && (
          <div className="cart-total">
            <p>Total : {total} €</p>
          </div>
        )}
      </div>
    )}
    </>
  )
}