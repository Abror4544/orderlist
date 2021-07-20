import s from "./Orders.module.css";
import { NavLink } from "react-router-dom";


const Order = (props) => {
    let prices = [];
    let sale = props.sale;
    for (let i = 0; i < props.order.goods.length; i++) {
        prices.push(props.order.goods[i].price * props.order.goods[i].count - sale)
    }
    let sumPrice = prices.reduce((a, b) => a + b, 0);
    return (
        <NavLink to={'/Info/' + props.order.id}>
            <div className={s.orderItem}>
                <div className={s.orderTitle}>
                    <h4>Заказ №{props.order.number}</h4>
                    <svg>
                        <text className={s.price} x="1" y="16" fill="none"
                            stroke="#6e9143" strokeWidth="1" strokeDasharray="2000 2">
                            {Math.ceil((sumPrice) * 100) / 100}
                        </text>
                    </svg>
                </div>
                <div className={s.date}>{props.order.date ? props.order.date : "Empty info"}</div>
                <ul>
                    <li>∙ товаров {props.order.goods.length} шт.</li>
                    <li>∙ наименований {props.order.goods.length} шт.</li>
                </ul>
            </div>
        </NavLink>)
};

export default Order;
