import { http } from "./config";


export default{

    
    list: () => {
        return http.get('user/list',{useCredentails:true})
    },

    add: (user) => {
        
        return http.post('api/user/add', user, { useCredentails: true })
    }

}