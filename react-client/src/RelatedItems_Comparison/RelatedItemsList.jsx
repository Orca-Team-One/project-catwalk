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
    console.log('HERE ARE PROPS!', props)
    return (
      <div >
      {
        props.relatedItems.map((relatedEntry, index) => (
          //insert get product function here - with promises!
          <RelatedItemsEntry key = {index} relatedEntries = {props.relatedItems[index]}/>
        ))
      }
    </div>
    )
  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }
}

export default RelatedItemsList;