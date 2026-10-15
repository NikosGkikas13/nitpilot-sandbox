import assert from 'node:assert/strict';
import { test } from 'node:test';
import { averageTotal, describeOrder, paginate } from '../src/orders.js';

test('paginate returns a slice of the items', () => {
  assert.deepEqual(paginate(['a', 'b', 'c', 'd', 'e'], 1, 2), ['a', 'b']);
});

test('averageTotal averages the totals', () => {
  assert.equal(averageTotal([100, 300]), 200);
});

test('averageTotal returns 0 for no orders', () => {
  assert.equal(averageTotal([]), 0);
});

test('describeOrder describes an order', () => {
  assert.equal(describeOrder([{ id: 7, customer: 'Maya', total: 1250 }], 7), 'Order #7 for Maya: 1250 cents');
});

test('describeOrder reports an unknown id instead of throwing', () => {
  assert.equal(describeOrder([], 7), 'Order #7 was not found');
});
