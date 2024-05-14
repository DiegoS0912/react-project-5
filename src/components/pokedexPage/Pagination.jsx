import React from 'react'
import './styles/pagination.css';

const Pagination = ({ page, setPage, total }) => {
  
    const handleLess12 = () => {
        if (page > 1) {
            setPage(page - 11);
        } else {
            setPage(total);
        }
        scroll(0, 0);
    }

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
    
    const handlePlus12 = () => {
        if (page < total) {
            setPage(page + 11);
        } else {
            setPage(1);
        }
        scroll(0, 0);
    }
  
  return (
    <div className='pagination'>
        <button onClick={handleLess12}>{'<<'}</button>
        <button onClick={handleLess}>{'<'}</button>
        <span>{page}/{total}</span>
        <button onClick={handlePlus}>{'>'}</button>
        <button onClick={handlePlus12}>{'>>'}</button>
    </div>
  )
}

export default Pagination;