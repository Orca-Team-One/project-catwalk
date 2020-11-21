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
      const reqArray = [];
      console.log('LOOK!!!', props.relatedProducts)
      for (var i = 0; i < props.relatedProducts.length; i++) {
        console.log('QUERY HERE' , props.relatedProducts[i])
        axios.get(`http://3.21.164.220/products/${props.relatedProducts[i]}`)
        .then(function (response) {
          console.log('RESPONSE!!!', response)
          reqArray.push(response);
        })
      } console.log('RESPONSE', reqArray);






    console.log('HERE ARE PROPS!', props.relatedProducts)
    return (
      <div >
      {
        props.relatedProducts.map((relatedEntry, index) => (
          //insert get product function here - with promises!
          axios.get(`http://3.21.164.220/products/${props.relatedProducts[index]}`)
          .then(function (response) {
            <RelatedItemsEntry key = {index} relatedEntries = {response.data}/>
          })

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