import Dexie from 'dexie'

const db = new Dexie('Cart');
  
db.version(1).stores(
    { items: "id, name" }
)

export default db;