import React, { Component } from 'react'
import CartShoe from './CartShoe'
import ListShoe from './ListShoe'
import Details from './Details'
import { GIAM_SO_LUONG, TANG_SO_LUONG, shoeArr } from './dataShoe'

export default class Ex_Shoe extends Component {
    state = {
        shoeArr: shoeArr,
        cart: [],
        detail: {},
    }
    handleAddtoCart = (shoe) => {
        console.log(shoe);
        let cloneCart = this.state.cart
        let index = cloneCart.findIndex((item) => {
            return shoe.id == item.id
        })
        if (index == -1) {
            let newShoe = { ...shoe, soLuong: 1 }
            cloneCart.push(newShoe)
        } else {
            cloneCart[index].soLuong++;
        }
        this.setState({
            cart: cloneCart
        })
    }
    handleRemove = (idshoe) => {
        let cloneCart = this.state.cart
        cloneCart.forEach((item, index) => {
            if (item.id == idshoe) {
                cloneCart.splice(index, 1)
            }
        })
        this.setState({
            cart: cloneCart,
        })
    }
    // handleIncrease = (idshoe) => { 
    //     let cloneCart = this.state.cart
    //     cloneCart.forEach((item,index) => { 
    //         if (item.id == idshoe) {
    //             item.soLuong++
    //         }
    //      })
    //     this.setState({
    //         cart: cloneCart
    //     })
    //  }
    //  handleDiscrease = (idshoe) => { 
    //     let cloneCart = this.state.cart
    //     cloneCart.forEach((item,index) => { 
    //         if (item.id == idshoe) {
    //             item.soLuong--
    //         }
    //      })
    //     this.setState({
    //         cart: cloneCart
    //     })
    //  }
    handleChangeQuantity = (idshoe, option) => {
        let cloneCart = this.state.cart
        cloneCart.forEach((item, index) => {
            if (item.id == idshoe) {
                option == TANG_SO_LUONG && item.soLuong++;
                option == GIAM_SO_LUONG && item.soLuong-- && item.soLuong == 0 && this.handleRemove(idshoe);
            }
        })
        this.setState({
            cart: cloneCart
        })
    }
    handleAddDetail = (item) => { 
        let cloneDetail = this.state.detail
        cloneDetail = {
            id : item.id,
            name :item.name,
            alias : item.alias,
            price : item.price,
            description : item.description,
            shortDescription : item.shortDescription,
            quantity : item.quantity,
            image : item.image
        }
        this.setState ({
            detail : cloneDetail
        })
     }
    render() {
        return (
            <div>
                <div className="row m-0">
                    <CartShoe
                        cart={this.state.cart}
                        handleRemove={this.handleRemove}
                        handleChangeQuantity={this.handleChangeQuantity}
                    />
                    <ListShoe list={this.state.shoeArr}
                        handleAddCart={this.handleAddtoCart}
                        handleAddDetail = {this.handleAddDetail}
                    />
                </div>
                <Details detail={this.state.detail} />
            </div>
        )
    }
}
