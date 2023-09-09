import React, { Component } from 'react'
import { GIAM_SO_LUONG, TANG_SO_LUONG } from './dataShoe'

export default class CartShoe extends Component {
  renderTableCart = () => { 
    let {cart } = this.props
    return cart.map((item,index) => { 
      let {id,name,price,image,soLuong} = item
        return (
          <tr key={index}>
            <td>{name}</td>
            <td>{price*soLuong}</td>
            <td>
              <img src={image} alt="" width={100} />
            </td>
            <td>
              <button
                onClick={() => { 
                  this.props.handleChangeQuantity(id,GIAM_SO_LUONG)
                 }}
              className="btn btn-danger">-</button>
              <strong className='mx-3'> {soLuong}</strong>
              <button 
                onClick={() => { 
                  this.props.handleChangeQuantity(id,TANG_SO_LUONG)
                 }}
              className="btn btn-info">+</button>
              </td>
            <td>
              <button 
                  onClick={() => { 
                    this.props.handleRemove(id)
                   }}
              className="btn btn-danger">Delete</button>
            </td>
          </tr>
        )
     })
   }
  render() {
    return (
      <div className='col-6'>
        <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Img</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {this.renderTableCart()}
            </tbody>
        </table>
      </div>
    )
  }
}
