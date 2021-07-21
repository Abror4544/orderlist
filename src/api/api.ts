import axios from "axios";


export const API = {
    getOrders() {
        return axios
            .get("https://u38027.netangels.ru/api/orders.php")
            .then((response: any) => {
                return response.data;
            });
    }
}