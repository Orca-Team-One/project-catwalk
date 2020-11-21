import React, { Component } from 'react'
import RelatedItemsEntry from './RelatedItemsEntry.jsx'
import axios from 'axios'

// export default class RelatedItemsList extends Component {


//   render() {
//     console.log('HERE!!!!!', this.props.relatedProducts)

//     return (
//       <div >
//         {
//           this.props.relatedItems.map((relatedEntry, index) => (
//             <RelatedItemsEntry key = {index} relatedEntries = {this.props.relatedItems[index]}/>
//           ))
//         }
//       </div>
//     )
//   }
// }


function RelatedItemsList(props) {

  if (props.relatedProducts.length > 0) {
    // do axios request here
    const requestArray = [];
    const responseArray = [];
    for (var i = 0; i < props.relatedProducts.length; i++) {
      requestArray.push(axios.get(`http://3.21.164.220/products/${props.relatedProducts[i]}`));
    } Promise.all(requestArray).then((responses) =>{
      for (var k = 0; k < responses.length; k++) {
        responseArray.push(responses[k])
      }
      console.log('responseArray', responseArray)
      console.log(responseArray[1].data)
    })

    return (
      <div >
      {
        // responseArray.map((response, index) => (
        <div>{responseArray}</div>
          // <RelatedItemsEntry key = {index} reponseData = {responseArray[index].data} />
        // ))
        }
    </div>
    )
  } else {
    return(
      <div>
        Now loading....
      </div>
    )
  }
}

export default RelatedItemsList;