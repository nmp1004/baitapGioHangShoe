import React, { Component } from 'react'
import ItemShoe from './ItemShoe'

export default class ListShoe extends Component {
  renderListShoe = () => { 
    return this.props.list.map((item,index) => { 
      return <ItemShoe item={item} key={index} 
      handleAddCart = {this.props.handleAddCart}
      handleAddDetail = {this.props.handleAddDetail}
      />
     })
   }
  render() {
    return (
      <div className='col-6 row'>
        {this.renderListShoe()}
      </div>
    )
  }
}
