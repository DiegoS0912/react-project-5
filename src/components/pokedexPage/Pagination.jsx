import React from 'react'
import './styles/pagination.css';

const Pagination = ({ page, setPage, total }) => {
  
    const handleLess = () => {
        if (page > 1) {
            setPage(page - 1);
        } else {
            setPage(total);
        }
        scroll(0, 0);
    }

    const handlePlus = () => {
        if (page < total) {
            setPage(page + 1);
        } else {
            setPage(1);
        }
        scroll(0, 0);
    }
  
  return (
    <div className='pagination'>
        <button onClick={handleLess}>{'<'}</button>
        <span>{page}/{total}</span>
        <button onClick={handlePlus}>{'>'}</button>
    </div>
  )
}

export default Pagination;