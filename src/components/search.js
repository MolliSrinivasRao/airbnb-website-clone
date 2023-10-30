import {HiSearch} from "react-icons/hi";
import "../styles/search.scss";

export default function Search({filters}){

    return(
        <div className="search-filter-container">
            {
                filters ? <div className="search-filter-div">
                    <p className="search-filter">Anywhere</p>
                    <div className="search-pipe"/>
                    <p className="search-filter">Any Week</p>
                    <div className="search-pipe"/>
                    <p className="search-filter">Add Guests</p>
                    <div className="search-icon">
                        <HiSearch/>
                    </div>
                </div> : <div>Search</div>
            }
        </div>
    )
}