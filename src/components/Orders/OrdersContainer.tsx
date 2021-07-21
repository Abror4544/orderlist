import React from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../../redux/orders-reducer';
import Orders from './Orders';
import { compose } from "redux";
import Preloader from '../common/Preloader/Preloader';
import { RouteComponentProps } from 'react-router-dom';


interface OrdersPageProps extends RouteComponentProps {
    getOrders: any;
    loading: any;
    orders: any;
}



class OrdersContainer extends React.Component<OrdersPageProps> {
    componentDidMount() {
        this.props.getOrders();
    }

    render() {
        debugger
        return <>
            {this.props.loading ? <Preloader /> : <Orders orders={this.props.orders} {...this} />}
        </>
    }
}

let mapStateToProps = (state: any) => {
    return {
        orders: state.ordersPage.orders,
        loading: state.ordersPage.loading
    }
}


export default compose(
    connect(mapStateToProps, { getOrders })
)(OrdersContainer)