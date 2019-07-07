import { http } from './config';

export default {

    list: () => {
        return http.get('/post/list', { useCredentials: true });
    },

    add: (post) => {
        return http.post('/post/add', post,{ useCredentials: true });
    }

}
