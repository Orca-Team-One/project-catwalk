import React, { Component } from 'react'
import RelatedItemsEntry from './RelatedItemsEntry.jsx'

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
    console.log('Ok now there is...', props.relatedProducts)
    return (
      <div >
      {
        props.relatedItems.map((relatedEntry, index) => (
          <RelatedItemsEntry key = {index} relatedEntries = {props.relatedItems[index]}/>
        ))
      }
    </div>
    )
  } else {
    console.log('THERES NO DATA YET! ', props.relatedProducts)
    return (
      <div>
        Loading...
      </div>
    )
  }
}

export default RelatedItemsList;