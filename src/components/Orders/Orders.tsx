import s from "./Orders.module.css"
import filterIcon from "../../assets/images/filter.svg";
import Order from "./Order";
import React from "react";


class Orders extends React.Component<{ orders: any }, { loading: any }> {
    render() {
        return (
            <div className={s.ordersWrapper}>
                <div className={s.titleBlock}>
                    <h1>Список заказов</h1>
                    <img src={filterIcon} alt="" />
                </div>
                <div className={s.ordersBlock}>
                    {this.props.orders.map((o: any) =>
                        <Order key={o.id} order={o} sale={o.sale} />
                    )
                    }
                </div>
            </div>
        )
    }
}
export default Orders;