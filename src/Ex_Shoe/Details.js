import React, { Component } from 'react'

export default class Details extends Component {
  renderDetail = () => {
    let { detail } = this.props
    let { name, alias, price, description, shortDescription, image } = detail
    return (
      <div className="">
        <h2 className='text-center text-info'>Details Shoe</h2>
        <div className="card text-left flex-row">
          <img className="card-img-top" src={image} alt style={{ width: "15%", border: "transparent" }} />
          <div className="card-body">
            <h4 className="">{name}</h4>
            <p className="card-text">{price}</p>
            <p className="card-text">{description}</p>
            <p className="card-text">{shortDescription}</p>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.renderDetail()}
      </div>
    )
  }
}
