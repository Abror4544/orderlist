import s from "./Info.module.css";
import React from 'react';
import Good from "./Good";
import { NavLink, RouteComponentProps } from "react-router-dom";
import close from "../../assets/images/close.svg";

interface GoodsInfoPageProps extends RouteComponentProps {
    history: any;
    state: any;
}

class Info extends React.Component<GoodsInfoPageProps> {
    render() {
        let id = this.props.history.match.params.orderId;
        let item = this.props.state.ordersPage.orders;
        let goods = item[0].goods;
        item = item.filter(function (o: any) {
            return o.id === id
        })
        let prices = [];
        let sales = [];
        let sale = item[0].sale;
        for (let i = 0; i < goods.length; i++) {
            prices.push(goods[i].price * goods[i].count)
        }
        for (let i = 0; i < goods.length; i++) {
            sales.push(sale * goods[i].count)
        }
        let amountPrice = prices.reduce((a, b) => a + b, 0);
        let amountSale = sales.reduce((a, b) => a + b, 0);
        let procent = amountSale / (amountPrice / 100)
        return (
            <div className={s.infoWrapper}>
                <div className={s.head}>
                    <h2>Заказ №{item[0].number}</h2>
                    <span>{item[0].date}</span>
                </div>
                <NavLink to={'/Main/'}>
                    <div className={s.close}>
                        <img src={close} alt="" />
                    </div>
                </NavLink>
                <div className={s.title}>
                    <h3>Товар</h3>
                    <p>Название наименование товара</p>
                </div>
                <div className={s.goods}>
                    {goods.map((o: any) =>
                        <Good key={o.id} good={o} sale={item[0].sale} />
                    )}
                </div>
                <p className={s.saleInfo}>Скидка по заказу составила {Math.ceil((procent) * 100) / 100} % </p>
                <div className={s.total}>Итого: {Math.ceil((amountPrice - amountSale) * 100) / 100}</div>
                <p className={s.notice}>Дата выдачи заказа 10 дней с момента оплаты</p>
            </div>
        )
    }
}

export default Info;