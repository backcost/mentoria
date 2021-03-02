  const users = {
    0: {
      name: 'Marcle',
      age: 26
    },
    1: {
      name: 'Maria',
      age: 19
    },
    2: {
      name: 'Joao',
      age: 32,
    }
  };
  
  Object.fromEntries(
    Object
    .entries(users)
    .map(([key, user]) => [ user.name, user.age ])
  )
  
  
  // Object.keys
  console.log(Object.keys(users))
  // Object.values
  console.log(Object.values(users))
  // Object.getOwnPropertyNames
  console.log(Object.getOwnPropertyNames(users[0]))