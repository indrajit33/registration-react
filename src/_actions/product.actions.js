import { productConstants } from '../_constants';
import { productService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const productActions = {
    getAllProducts
};

function getAllProducts() {
    return dispatch => {
        dispatch(request());

        productService.getAllProducts()
            .then(
                (products) => { dispatch(success(products))},
                (error) => { dispatch(failure(error))}
            );
    };

    function request() { return { type: productConstants.GETALL_REQUEST } }
    function success(products) { return { type: productConstants.GETALL_SUCCESS, products } }
    function failure(error) { return { type: productConstants.GETALL_FAILURE, error } }
}