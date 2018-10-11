import axios from 'axios'

export default class Axios{
    static instance = axios.create({
        baseURL: 'https://www.easy-mock.com/mock/5bbb8bf854d6771eb592838d',
        timeout: 120000
    })

    static get (url, data, config) {
        return new Promise((resolve, reject) => {
            this.instance.get(url, {params: data}, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static post (url, data, config) {
        return new Promise((resolve, reject) => {
            this.instance.get(url, data, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}