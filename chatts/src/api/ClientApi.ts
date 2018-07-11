export class ClientApi {
    static baseUrl = 'http://localhost:4000';

    static getData() {
        return this.get('/getData')
    }

    static get(url:string) {
        return fetch(this.baseUrl + url)
            .then(res=>res.json())
    }

    static post(url:string, body:any) {
        return fetch(this.baseUrl + url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    }

    static put(url:string, body:any) {
        return fetch(this.baseUrl + url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }

    static delete(url:string, body:string) {
        return fetch(this.baseUrl + url+"/"+body, {
            method: 'DELETE'
        }).then(res => res.json());
    }
}