const database = 'Restaurant';
const collection = 'restaurants';

use(database);

// Inserting one document
db.getCollection(collection).insertOne({
  'restaurant-id': 1,
  'restaurant-name': 'Sample Restaurant',
  'restaurant-address': '123 Main Street',
  'restaurant-cuisine': 'Italian',
  'restaurant-list': ['Dish1', 'Dish2', 'Dish3']
});