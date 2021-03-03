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
  
  console.log(Object.fromEntries(
    Object
    .entries(users)
    .map(([key, user]) => [ user.name, user.age ])
  ))
  
 