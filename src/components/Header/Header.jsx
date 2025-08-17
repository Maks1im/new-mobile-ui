import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className={"header-mobile"}>
               <div className={"header-navigator"}>
                   <button className={"burger__menu"}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor"
                            className="bi bi-list" viewBox="0 0 16 16">
                           <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                       </svg>
                   </button>
                   <Link className={"link__logo"} to="/">Okey</Link>
                   <button className={"other__menu"}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor"
                            className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                           <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                       </svg>
                   </button>
               </div>
                <form className={"form__search"}>
                    <div className={"group"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" fill="currentColor"
                             className="search__icon" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        <input className={"grop__input"} placeholder={"Поиск"} type={"search"}/>
                    </div>
                </form>
            </div>
        </header>
    )
}

export default Header