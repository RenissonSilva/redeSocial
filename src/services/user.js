import { http } from "./config";

export default{

    
    list: () => {
        return http.get('user/list',{useCredentails:true})
    }

}