
import { atom } from 'recoil';

export const tableDataState = atom({
  key: 'tableDataState',
  default: [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 40 },
    { id: 4, name: 'Eve', age: 35 },
  ],
});
