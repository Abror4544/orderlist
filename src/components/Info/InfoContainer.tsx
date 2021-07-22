import React from 'react';
import { connect } from 'react-redux';
import { getOrdersRequest } from '../../redux/orders-reducer';
import { getOrders } from '../../redux/order-selector';
import Info from './Info';
import { compose } from "redux";
import Preloader from '../common/Preloader/Preloader';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';


interface OrdersPageProps extends RouteComponentProps {
    getOrders: any;
    loading: any;
    orders: any;
    state: any;
}



class InfoContainer extends React.Component<OrdersPageProps> {
    componentDidMount() {
        axios
            .get("https://u38027.netangels.ru/api/orders.php")
            .then((response: any) => {
                for (let i = 0; i < response.data.length; i++) {
                    this.props.orders.push(response.data[i]);
                }
            });
        this.props.getOrders();
    }

    render() {
        return <>
            {this.props.loading ? <Preloader /> : <Info orders={this.props.orders} history={this.props.history} {...this} />}
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
)(InfoContainer)