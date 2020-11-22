import React from 'react'

const ReviewsSorting = ({sortingPreference, handleSortingChange}) => {

    return (
    <div class = "col-4" style={{
        backgroundColor: "#ABBAEA",
        fontSize:"10px",
        }}>
    
        <label>248 reviews, sorted by:</label>
        {/*set default to relevance by creating state for form */}
            <select value = {sortingPreference} onChange = {handleSortingChange} >
                <option>Helpfulness</option>
                <option>Rating</option>
                <option>Relevance</option>
            </select>
        </div>
    )
}
export default ReviewsSorting