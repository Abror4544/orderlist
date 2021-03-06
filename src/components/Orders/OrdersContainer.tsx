import React from 'react';
import { connect } from 'react-redux';
import { getOrdersRequest } from '../../redux/orders-reducer';
import { getOrders } from '../../redux/order-selector';
import Orders from './Orders';
import { compose } from "redux";
import Preloader from '../common/Preloader/Preloader';
import { RouteComponentProps } from 'react-router-dom';


interface OrdersPageProps extends RouteComponentProps {
    getOrders: any;
    loading: any;
    orders: any
}



class OrdersContainer extends React.Component<OrdersPageProps> {
    componentDidMount() {
        this.props.getOrders();
    }

    render() {
        return <>
            {this.props.loading ? <Preloader /> : <Orders orders={this.props.orders} {...this} />}
        </>
    }
}

let mapStateToProps = (state: any) => {
    return {
        orders: getOrders(state),
        loading: state.ordersPage.loading
    }
}


export default compose(
    connect(mapStateToProps, { getOrders: getOrdersRequest })
)(OrdersContainer)