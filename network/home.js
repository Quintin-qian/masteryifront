import {request} from "./request";

export function getHomeAllData() {
    return request({
        url:'/goods/allGoods',
    })
}