const userNamesGroupedByLocation = {
  Tokio: [
    'Aiko',
    'Chizu',
    'Fushigi',
  ],
  'Buenos Aires': [
    'Santiago',
    'Valentina',
    'Lola',
  ],
  'Saint Petersburg': [
    'Sonja',
    'Dunja',
    'Iwan',
    'Tanja',
  ],
};

// not arrow fn because of outer scope
userNamesGroupedByLocation[Symbol.iterator] = function() {
  const cityKeys = Object.keys(this)
  let cityIndex = 0
  let userIndex = 0

  return {
    next: () => {
      if (cityIndex === cityKeys.length) {
        return {
          done: true,
          value: undefined,
        }
      }

      const currentCity = cityKeys[cityIndex]
      const currentUser = this[currentCity][userIndex]

      const isLastUser = userIndex === this[currentCity].length - 1

      if (isLastUser) {
        cityIndex++
        userIndex = 0
      } else {
        userIndex++
      }

      return {
        done: false,
        value: currentUser,
      }
    }
  }
}

for (let name of userNamesGroupedByLocation) {
  console.log('name', name);
}

console.log('=====  2nd loop  ======')

for (let name of userNamesGroupedByLocation) {
  console.log('name', name);
}
