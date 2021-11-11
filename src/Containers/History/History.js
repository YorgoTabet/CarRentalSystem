import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import styles from './History.module.css'

export const History = (props) => {
    const recordsPerPage = 5

    const [loading, setLoading] = useState(false)
    const [history, setHistory] = useState([])
    const [numberOfPages, setNumberOfPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentHistory, setCurrentHistory] = useState([])

    //last index on page is the numberOf  records*currentPageNumber
    useEffect(() => {
        setLoading(true);
        let historyArray = Object.values(props.carHistory);
        setHistory(historyArray)
        setLoading(false)
    }, [props.carHistory])

    useEffect(() => {

        setNumberOfPages(Math.ceil(history.length / recordsPerPage))
        let lastIndex = currentPage * recordsPerPage
        let firstIndex = lastIndex - recordsPerPage
        if (lastIndex > history.length) { lastIndex = history.length }
        setCurrentHistory(history.slice(firstIndex, lastIndex))

    }, [history, currentPage, numberOfPages])

    const pageChangeHandler = (e, page) => {
        setCurrentPage(page)
    }

    return (
        <div className={styles.history}>
            <h1>History</h1>
            <div className={styles.record}><span><b>Name</b></span><b>Days</b></div>
            {loading ?
                <p>Loading...</p> :
                currentHistory.map((x) => {
                    return <div
                        className={styles.record}
                        key={Math.random + x.username + x.days} >
                        <span>{x.username}</span>
                        <span>{x.days}</span>
                    </div >
                })
            }
            {numberOfPages ? <Pagination className={styles.pagination} count={numberOfPages} page={currentPage} onChange={pageChangeHandler} /> : null}

        </div >
    )
}
export default History
