export const initialUsers = [
  { id: 1, username: 'abcd', email: 'abcd@gmail.com', role: 'admin' },
  { id: 2, username: 'pqrs', email: 'pqrs@gmail.com', role: 'user' },
  { id: 3, username: 'xyz', email: 'xyz@gmail.com', role: 'admin' },
];

export const initialRoles = [
  { id: 1, name: 'abcd', permissions: ['read', 'write', 'delete'] },
  { id: 2, name: 'pqrs', permissions: ['read'] },
  { id: 3, name: 'xyz', permissions: ['read', 'write', 'delete'] }
];
