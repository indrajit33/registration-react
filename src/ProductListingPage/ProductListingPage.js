import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions,productActions } from '../_actions';

class ProductListingPage extends React.Component {

    componentDidMount() {
        this.props.getAllProducts();
    }

    render() {
        const { products } = this.props;
        console.log(products.items);

    let list = "";
    if (products.items) {
         list = products.items.map((item, index) => {
            return (
                <li  key={item.id} >
                    {item.sku}
                </li>
            );
        })
    }
 
        return (
           <ul>{list}</ul>
        );
    }
}

function mapState(state) {
    const { products } = state;
    return { products };
}

const actionCreators = {
    getAllProducts: productActions.getAllProducts
}

const connectedProductListingPage = connect(mapState, actionCreators)(ProductListingPage);
export { connectedProductListingPage as ProductListingPage };