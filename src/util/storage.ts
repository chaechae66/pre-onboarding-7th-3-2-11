export class Storage{
    key
    constructor(key :string){
        this.key = key
    }

    set(token:string){
        localStorage.setItem(this.key, token)
    }
    get(){
        return localStorage.getItem(this.key)
    }
    remove(){
        localStorage.removeItem(this.key)
    }
}

export const storage = new Storage("token");