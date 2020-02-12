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
        //console.log(products);
        return (
            <div> I Am In</div>
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