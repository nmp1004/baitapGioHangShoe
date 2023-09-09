import React, { Component } from 'react'

export default class ItemShoe extends Component {
  render() {
    let {image,name} = this.props.item
    return (
       <div className="card text-left col-3">
        <img className="card-img-top" src={image} alt />
        <div className="card-body p-0">
          <small className="" style={{display : "block"}}>{name}</small>
          <button
            onClick={() => { 
                this.props.handleAddCart(this.props.item)   
             }}
          className="btn btn-success mr-2">Add</button> 
          <button
            onClick={() => { 
              this.props.handleAddDetail(this.props.item)
             }}
          className="btn btn-info">View</button> 
        </div>
      </div>
    )
  }
}

