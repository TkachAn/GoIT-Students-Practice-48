//Нехай функція sortByModel повертає новий масив автомобілів відсортований
//за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
//значення параметра order.

const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

const sortByModel = (cars, order) =>
  // cars.sort((a, b) => (order === 'asc' ? ascCompare(a, b) : descCompare(a, b)));
  cars.sort((a, b) =>
    order === 'asc'
      ? a.model.localeCompare(b.model)
      : b.model.localeCompare(a.model),
  );

const ascCompare = (a, b) => {
  if (a.model < b.model) {
    return -1;
  }
  if (a.model > b.model) {
    return 1;
  }

  return 0;
};

const descCompare = (a, b) => {
  if (b.model < a.model) {
    return -1;
  }
  if (b.model > a.model) {
    return 1;
  }
  return 0;
};

console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));
