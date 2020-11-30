import React from 'react'


const ReviewsSorting = ({sortingPreference, handleSortingChange}) => {

    return (
    <>
        <label>248 reviews, sorted by:</label>
        {/*set default to relevance by creating state for form */}
            <select value = {sortingPreference || 'Relevance'} onChange = {handleSortingChange} >
                <option>Helpfulness</option>
                <option>Rating</option>
                <option>Relevance</option>
                <option>Newest</option>
            </select>
        </>
    )
}
export default ReviewsSorting