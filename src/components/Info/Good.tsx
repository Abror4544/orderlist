import s from "./Info.module.css";


const Good = (props : any) => {
    let price = props.good.price * props.good.count - props.sale * props.good.count
    return (
        <div className={s.goodItem}>
            <div className={s.goodInfo}>
                <p className={s.goodName}>{props.good.name}</p>
                <p className={s.quantity}>Количество {props.good.count}</p>
            </div>
            <div className={s.price}>{Math.ceil((price) * 100) / 100}</div>
        </div>
    )
};

export default Good;
