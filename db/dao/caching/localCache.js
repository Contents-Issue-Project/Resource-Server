class LocalCache{
    constructor(){
        this.cache = {};
        return this;
    }
    async getValue(key){
        return new Promise(((resolve, reject) => {
            if (this.cache.hasOwnProperty(key)){
                resolve(this.cache[key]);
            }
            else{
                resolve({});
            }
        }));
    }
    async setValue(key, value){
        return new Promise(((resolve, reject) => {
            this.cache.key = value;
            resolve("OK");
        }));
    }
}

export default LocalCache;