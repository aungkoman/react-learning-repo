// Sample array of objects
let data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];
  
  // Create: Add a new object to the array
  const create = (array, newItem) => [...array, newItem];
  
  // Read (Retrieve): Find an object by ID
  const read = (array, id) => array.find(item => item.id === id);
  
  // Update: Update an existing object by ID
  const update = (array, id, updatedItem) => {
    return array.map(item => {
      if (item.id === id) {
        return { ...item, ...updatedItem };
      }
      return item;
    });
  };
  
  // Delete: Remove an object by ID
  const del = (array, id) => array.filter(item => item.id !== id);
  
  // Usage examples
  console.log('Original Data:', data);
  
  // Create
  data = create(data, { id: 4, name: 'Alice' });
  console.log('After Create:', data);
  
  // Read
  const itemToRead = read(data, 2);
  console.log('Read Item:', itemToRead);
  
  // Update
  data = update(data, 3, { name: 'Charlie' });
  console.log('After Update:', data);
  
  // Delete
  data = del(data, 1);
  console.log('After Delete:', data);
  