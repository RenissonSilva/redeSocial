import { http } from "./config";
const querystring = require('querystring');

export default{

    
    list: () => {
        return http.get('user/list',{useCredentails:true})
    },

    add: (user) => {
        
        return http.post('user/add', querystring.stringify(user), { useCredentails: true })
    }

}