import style from "./nav.module.css";
import { useContext} from "react";
import { Shop } from "../../contextpi";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import cartImg from "./emptyCart.jpg";
import { MdOutlineLightMode } from "react-icons/md";

import Cart from "../cart/cart";

export function NavBar() {
    
    const {  search, setSearch, count, cart,totals,mode,setMode,isCartOpen,setIsCartOpen } = useContext(Shop);
    const { subTotal, tax, shipping, grandTotal } = totals;

    return (
        <>
            <header className={style.header} style={{backgroundColor:mode?"#1e293b":"#fff"}}>
                <div className={style.navContainer}>
                    <div className={style.NavLogo}>
                        <NavLink to="/" style={{color:mode?"#fff":"black"}}>Shopping</NavLink>
                    </div>
                    <div className={style.searchCon}>
                        <input
                            type="search"
                            className={style.search}
                            placeholder="Search for a product..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{backgroundColor:mode?"#1e293b":"#fff",caretColor: mode?"#fff":"black",color:mode?"#fff":"black"}}
                        />
                        <div className={style.searchIcon}>
                            <CiSearch size={33} style={{ fill: "#fff" }} />
                        </div>
                    </div>
                    <div className={style.navList}>
                        <NavLink to="/products" className={style.navSec} style={{color:mode?"#fff":"black"}}>Products</NavLink>
                        <NavLink to="/categories" className={style.navSec} style={{color:mode?"#fff":"black"}}>Categories</NavLink>
                        <div className={style.navLogin}>
                            <FaUser style={{ fill: mode? "white":"grey" }} size={25} />
                            <a href="#" style={{color:mode?"#fff":"#6b7280"}}>Login</a>
                        </div>
                        <div className={style.cart} onClick={() => setIsCartOpen(!isCartOpen)}>
                            <AiOutlineShoppingCart size={33} style={{ fill: mode? "white":"grey", cursor: "pointer" }} />
                            <span className={style.count}>{count}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                          {mode?<MdOutlineLightMode style={{ fill:"white",cursor: "pointer" }} size={32} onClick={()=>setMode(!mode)} />:<FiMoon size={28} style={{ cursor: "pointer" }} onClick={()=>setMode(!mode)} />}
                        </div>
                    </div>
                </div>
            </header>

            {/* Cart Slider */}
            <div className={`${style.cartSlider} ${isCartOpen ? style.open : ""}`} style={{backgroundColor:mode?"#475569":"#fff"}}>
                <div className={style.cartCon}>
                    <div className={style.cartHeading}>
                        <p className={style.cartSliderTitle} style={{color:mode?"#fff":"black"}}>Your Cart</p>
      
                            <RiCloseLine onClick={() => setIsCartOpen(!isCartOpen)} size={28} style={{ fill:mode?"#fff":"black",cursor: "pointer" }} />
                        
                    </div>

                    {cart.length > 0 ? (
                        <>
                            <div className={style.cartInfoCon}>
                                {cart.map((item) => <Cart key={item.id} cart={item} />)}
                            </div>

                            <div className={style.totalCon} >
                                <div className={style.Total} ><p style={{color:mode?"#fff":"black"}}>Sub Total :</p><p style={{color:mode?"#fff":"black"}}>${subTotal.toFixed(2)}</p></div>
                                <div className={style.Total}><p style={{color:mode?"#fff":"black"}}>Tax :</p><p style={{color:mode?"#fff":"black"}}>${tax.toFixed(2)}</p></div>
                                <div className={style.Total}><p style={{color:mode?"#fff":"black"}}>Shipping :</p><p style={{color:mode?"#fff":"black"}}>${shipping.toFixed(2)}</p></div>
                                <div className={style.Total}><p style={{color:mode?"#fff":"black"}}>Grand Total :</p><p style={{color:mode?"#fff":"black"}}>${grandTotal.toFixed(2)}</p></div>
                            </div>

                            <button className={style.checkOut}>CHECKOUT</button>
                        </>
                    ) : (
                        <div className={style.emptycartCon}>
                          <img src={cartImg} alt="empty cart img" className={style.emptyCartImg} />
                          <p style={{color:mode?"#fff":"black"}}>Your Cart is empty</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}