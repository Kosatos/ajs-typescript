import Cart from '../service/Cart';
import Movie from '../domain/Movie'
import Book from '../domain/Book'
import Smartphone from '../domain/Smartphone'

const cart = new Cart();
const book = new Book(11, 'Harry Potter', 'Joan Rowling', 150, 666);
const movie = new Movie(22, 'Avengers', 350, new Date('2012-12-12'), 'USA', 'Avengers assemble!', ["fantastic", "adventure", "comics"], 200000);
const phone = new Smartphone(33, 50000, 'Oneplus', '9pro', true);

describe(`Class Cart: `, () => {
  test('new card should be empty', () => {
    expect(cart.items.length).toBe(0);
  });

  test(`'add' should corectly add products`, () => {
    cart.add(book);
    cart.add(movie);
    cart.add(phone);
    expect(cart.items.length).toBe(3);
  })

  test(`'add' should corectly change count`, () => {
    cart.add(phone);
    cart.add(phone);
    cart.add(phone);

    expect(cart.items[2].count).toBe(4);
  })

  test(`'calculateAmount' should return correct amount`, () => {
    expect(cart.calculateAmount()).toEqual(200500);
  })

  test(`'calculateAmountWithDiscount' should return correct amount`, () => {
    expect(cart.calculateAmountWithDiscount(20)).toEqual(160400);
  })

  test(`'add' should corectly delete products`, () => {
    cart.deleteItem(33);
    expect(cart.items[2].count).toBe(3);

    cart.deleteItem(22);
    expect(cart.items.length).toBe(2);
  })

})


