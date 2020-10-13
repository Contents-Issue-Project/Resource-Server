class LocalCache{
    constructor(){
        this.cache = {};
        return this;
    }
    async getValue(key){
        return new Promise(((resolve, reject) => {
            if (this.cache.hasOwnProperty(key)){
                console.log('has key in get')
                resolve(this.cache[key]);
            }
            else{
                console.log('doesnt have key in get')
                resolve({});
            }
        }));
    }
    async setValue(key, value){
        return new Promise(((resolve, reject) => {
            this.cache[key] = value;
            resolve("OK");
        }));
    }
    async deleteValue(key){
        return new Promise(((resolve, reject) => {
            delete this.cache[key];
            resolve("OK");
        }));
    }
}

export default LocalCache;