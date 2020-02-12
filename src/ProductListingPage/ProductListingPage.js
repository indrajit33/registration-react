import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions,productActions } from '../_actions';

class ProductListingPage extends React.Component {
    componentDidMount() {
        this.props.getAllProducts();
    }

    handleDeleteUser(id) {
        //return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        //console.log(users);
        return (
            <div> I Am In</div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getAllProducts: productActions.getAllProducts,
    deleteUser: userActions.delete
}

const connectedProductListingPage = connect(mapState, actionCreators)(ProductListingPage);
export { connectedProductListingPage as ProductListingPage };