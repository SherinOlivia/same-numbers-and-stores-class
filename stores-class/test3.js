// post test
class Store {
    constructor(name, area) {
        this.name = name;
        this.area = area;
    }
}
class StoreCollection {
    constructor(stores) {
        this.stores = stores;
    }
    generateCollection() {
        const collection = {
            total_stores: this.stores.length,
            areas: {}
        };
        this.stores.forEach(store => {
            if (!collection.areas.hasOwnProperty(store.area)) {
                collection.areas[store.area] = {
                    total_stores: 0,
                    stores: []
                };
            }
            collection.areas[store.area].stores.push(store.name);
            collection.areas[store.area].total_stores++;
        });
        for (const area in collection.areas) {
            if (collection.areas.hasOwnProperty(area)) {
                collection.areas[area].stores = JSON.stringify(collection.areas[area].stores);
            }
        }
        return collection;
    }
}
const stores = [
    new Store("store 1", "jakarta"),
    new Store("store 2", "jakarta"),
    new Store("store 3", "bandung")
];
const storeCollection = new StoreCollection(stores);
const collection = storeCollection.generateCollection();
console.log(collection);
