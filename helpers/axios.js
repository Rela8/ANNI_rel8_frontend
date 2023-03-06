import * as axiosOriginal from 'axios';


//this app is only for anni so just hard code the short name here
export const tenantName = 'anni'
export const sitename = 'rel8backend-production.up.railway.app'
// export const baseURL= `https://rel8-backend-production.up.railway.app/tenant/${tenantName}`
export const baseURL= `https://rel8backend-production.up.railway.app/tenant/${tenantName}`
const axios = axiosOriginal.create({
    baseURL,
})

export default axios;