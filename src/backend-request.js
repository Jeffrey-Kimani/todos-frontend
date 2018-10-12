var axios = require('axios')

// function callServer(data){
//     return new Promise((resolve, reject) => {
//         axios.post('http://185.244.130.22:3030/api/web/v1',data)
//             .then(response => {
//                 resolve(response)
//             }).catch(error=> {
//                 reject(error)
//             });
//     })
// }

// export default callServer;
export default class Requests {
   constructor() {

   }
   
   callServer(data) {
        return new Promise((resolve, reject) => {
            axios.post('http://185.244.130.22:3030/api/web/v1',data)
                .then(response => {
                    resolve(response)
                }).catch(error=> {
                    reject(error)
                });
        })
   }
}