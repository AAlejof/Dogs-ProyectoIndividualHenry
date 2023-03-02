// import React from "react";
// import style from './Pagination.module.css';

// const Pagination = ({postPerPage, totalPosts, paginate}) => {
//     const pageNumbers = [];
//     for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
//         pageNumbers.push(i);
//     }
//     return(
//         <nav className={style.paginationNav}>
//             <ul className={style.paginationContainer}>{pageNumbers.map(number =>(
//                 <li key={number}>
//                     <button className={style.paginationButton} onClick={() => paginate(number)}>
//                         {number}
//                     </button>
//                 </li>
//             ))}
//             </ul>
//         </nav>
//     )
// }

// export default Pagination;
import React, { useState } from "react";
import style from './Pagination.module.css';

const Pagination = ({postPerPage, totalPosts, paginate}) => {
    const [activePage, setActivePage] = useState(1); // initialize activePage to 1
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }
    return(
        <nav className={style.paginationNav}>
            <ul className={style.paginationContainer}>{pageNumbers.map(number =>(
                <li key={number}>
                    <button 
                        className={`${style.paginationButton} ${activePage === number ? style.paginationButtonActive : ''}`} 
                        onClick={() => {paginate(number); setActivePage(number);}}
                    >
                        {number}
                    </button>
                </li>
            ))}
            </ul>
        </nav>
    )
}

export default Pagination;