import s from "./Orders.module.css"
import filterIcon from "../../assets/images/filter.svg";
import Order from "./Order";
import React from "react";
import Preloader from "../common/Preloader/Preloader"
import * as axios from 'axios';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        axios
            .get("https://u38027.netangels.ru/api/orders.php")
            .then((response) => {
                this.props.state.ordersPage.orders = [];
                for (let i = 0; i < response.data.length; i++) {
                    this.props.state.ordersPage.orders.push(response.data[i]);
                    this.setState({ loading: true })
                }
            });
    }

    render() {
        const { loading } = this.state;
        
        return this.state.loading ? (
            <div className={s.ordersWrapper}>
                <div className={s.titleBlock}>
                    <h1>Список заказов</h1>
                    <img src={filterIcon} alt="" />
                </div>
                <div className={s.ordersBlock}>
                    {loading &&
                        this.props.state.ordersPage.orders.map((o) =>
                            <Order key={o.id} order={o} sale={o.sale} />
                        )
                    }
                </div>
            </div>
        ) : <Preloader />
    }
}
export default Orders;