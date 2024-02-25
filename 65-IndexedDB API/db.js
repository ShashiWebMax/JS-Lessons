class DB {
    constructor(dbName, version, stores) {
        this.dbName = dbName;
        this.version = version;
        this.connection = indexedDB.open(this.dbName, this.version);

        this.connection.onerror = function (event) {
            console.log("Database error: ");
            console.error(event);
        };

        this.connection.onsuccess = function (event) {
            this.database = event.target.result;
            console.log("Database opened successfully");
        };

        this.connection.onupgradeneeded = function (event) {
            this.database = event.target.result;
            stores.forEach((store) => {
                var objectStore = this.database.createObjectStore(store.name, {
                    keyPath: store.keyPath,
                });
                store.indexes.forEach((index) => {
                    objectStore.createIndex(index.name, index.key, {
                        unique: index.unique,
                    });
                });
            });
            console.log("Database created successfully");
        };
    }

    /*
     * Add data to the database
     * @param {string} store - The store to add the data to
     * @param {object} data - The data to add to the store
     * @returns {Promise} - The result of the add operation
     */
    async addData(store, data) {
        return new Promise((resolve, reject) => {
            let transaction = this.connection.database.transaction(
                [store],
                "readwrite"
            );
            let objectStore = transaction.objectStore(store);
            let request = objectStore.add(data);
            request.onsuccess = function (event) {
                resolve(event);
            };
            request.onerror = function (event) {
                reject(event);
            };
        });
    }

    /*
     * Read data from the database async
     * @param {string} store - The store to read the data from
     * @param {string} key - The key of the data to read
     * @returns {Promise} - The data read from the database
     */
    async readData(store, key) {
        let transaction = this.connection.database.transaction(
            [store],
            "readonly"
        );
        let objectStore = transaction.objectStore(store);
        let request = objectStore.get(key);
        return new Promise((resolve, reject) => {
            request.onsuccess = function (event) {
                resolve(event.target.result);
            };
            request.onerror = function (event) {
                reject(event);
            };
        });
    }

    /*
     * Update data in the database
     * @param {string} store - The store to update the data in
     * @param {object} data - The data to update in the store
     * @returns {Promise} - The result of the update operation
     */
    async updateData(store, data) {
        return new Promise((resolve, reject) => {
            let transaction = this.connection.database.transaction(
                [store],
                "readwrite"
            );
            let objectStore = transaction.objectStore(store);
            let request = objectStore.put(data);
            request.onsuccess = function (event) {
                resolve(event);
            };
            request.onerror = function (event) {
                reject(event);
            };
        });
    }

    /*
     * Delete data from the database
     * @param {string} store - The store to delete the data from
     * @param {string} key - The key of the data to delete
     * @returns {Promise} - The result of the delete operation
     */
    async deleteData(store, key) {
        return new Promise((resolve, reject) => {
            let transaction = this.connection.database.transaction(
                [store],
                "readwrite"
            );
            let objectStore = transaction.objectStore(store);
            let request = objectStore.delete(key);
            request.onsuccess = function (event) {
                resolve(event);
            };
            request.onerror = function (event) {
                reject(event);
            };
        });
    }

    /*
    * Search for data in the database
    * @param {string} store - The store to search for the data in
    * @param {string} column - The column to search in
    * @param {string} value - The value to search for
    * @returns {Promise} - The data found in the search
    */
    async searchData(store, column, value) {
        return new Promise((resolve, reject) => {
            let transaction = this.connection.database.transaction(
                [store],
                "readonly"
            );
            let objectStore = transaction.objectStore(store);
            //search for partial matches
            let request = objectStore.index(column).openCursor();
            let results = [];
            request.onsuccess = function (event) {
                let cursor = event.target.result;
                if (cursor) {
                    if (cursor.value[column].includes(value)) {
                        results.push(cursor.value);
                    }
                    cursor.continue();
                } else {
                    resolve(results);
                }
            };
            request.onerror = function (event) {
                reject(event);
            };
        });
    }

    /*
    * Get all data from the database
    * @param {string} store - The store to get the data from
    * @returns {Promise} - The data from the store
    */
    async getAllData(store) {
        return new Promise((resolve, reject) => {
            let transaction = this.connection.database.transaction(
                [store],
                "readonly"
            );
            let objectStore = transaction.objectStore(store);
            let request = objectStore.getAll();
            request.onsuccess = function (event) {
                resolve(event.target.result);
            };
            request.onerror = function (event) {
                reject(event);
            };
        });
    }
                        
}