import s from "../../Orders/Orders.module.css";
import preloader from "../../../assets/images/loader.svg";

let Preloader = (props: any) => {
  return <img className={s.loader} src={preloader} />;
};

export default Preloader;
