// Напишіть такі функції:

// createProduct(obj, callback) - приймає об'єкт товару без ID,
// а також колбек. Функція створює об'єкт товару,
// додаючи унікальний ідентифікатор у властивість id і викликає колбек передаючи йому створений об'єкт.
// logProduct(product) - коллбек, що приймає об'єкт продукту і логіює його в консоль
// logTotalPrice(product) - коллбек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
