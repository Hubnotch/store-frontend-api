"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../product");
const store = new product_1.ProductStore();
describe('Product model methods testing', () => {
    it('index method should be defined', () => {
        expect(store.index()).toBeDefined();
    });
    it('index method should return all the data in the database', async () => {
        const product1 = { id: 1, name: 'laptop', category: 'computer', price: 1000, number_sells: 9 };
        const product3 = { id: 2, name: 'microphone', category: 'electronic', price: 35, number_sells: 213 };
        const product2 = { id: 3, name: 'Book', category: 'Book', price: 20, number_sells: 1000 };
        // const expectedResult:Product = {id: 2, name: 'smartphone', category: 'phone', price: 500, number_sells: 10}
        const result = await store.index();
        expect(result.length).toEqual(3);
        expect(result).toEqual([product1, product3, product2]);
        // expect(result.indexOf(product1)!==-1).toBe(true)
    });
    it('create method add new row in the database and return it', async () => {
        const productToBeCreated = { name: 'smartphone', category: 'phone', price: 500, number_sells: 10 };
        const expectedResult = { id: 4, name: 'smartphone', category: 'phone', price: 500, number_sells: 10 };
        const result = await store.create(productToBeCreated);
        expect(result).toEqual(expectedResult);
    });
    it('show method should return one element with the specified id', async () => {
        const product1 = { id: 1, name: 'laptop', category: 'computer', price: 1000, number_sells: 9 };
        const result = await store.show(1);
        expect(result).toEqual(product1);
    });
    it('topFivePopular method should return the five most popular products', async () => {
        const product1 = { id: 1, name: 'laptop', category: 'computer', price: 1000, number_sells: 9 };
        const product3 = { id: 2, name: 'microphone', category: 'electronic', price: 35, number_sells: 213 };
        const product2 = { id: 4, name: 'smartphone', category: 'phone', price: 500, number_sells: 10 };
        const product4 = { id: 3, name: 'Book', category: 'Book', price: 20, number_sells: 1000 };
        const result = await store.topFivePopular();
        expect(result).toEqual([product4, product3, product2, product1]);
    });
    it('filterByCategory method should return all products belonging to a specific category', async () => {
        const product1 = { id: 1, name: 'laptop', category: 'computer', price: 1000, number_sells: 9 };
        const result = await store.filterByCategory('computer');
        expect(result).toEqual([product1]);
    });
});
