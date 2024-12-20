import { Provider } from '@dashify/provider';
import { Admin, Customer } from './types';
import { ADMIN_MOCKS, CUSTOMER_MOCKS } from './users';

/* adminProvider */
export const adminProvider: Provider<Admin> = {
  resource: 'admins',
  edit: async ({ payload }) => {
    return Promise.resolve(
      ADMIN_MOCKS.find((admin) => payload.id === admin.id)!
    );
  },
  create: async ({ payload }) => {
    return Promise.resolve(
      ADMIN_MOCKS.find((admin) => payload.id === admin.id)!
    );
  },
  getList: async ({ pagination }) => {
    const { page = 1, pageSize = 2 } = pagination || {};
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return Promise.resolve(ADMIN_MOCKS.slice(startIndex, endIndex));
  },
  getById: async ({ id }) => {
    return Promise.resolve(ADMIN_MOCKS.find((admin) => id === admin.id)!);
  },
  deleteOne: async ({ payload }) => {
    return Promise.resolve(
      ADMIN_MOCKS.find((admin) => payload.id === admin.id)!
    );
  },
};

/* customerProvider */
export const customerProvider: Provider<Customer> = {
  resource: 'customers',
  edit: async ({ payload }) => {
    return Promise.resolve(
      CUSTOMER_MOCKS.find((customer) => payload.id === customer.id)!
    );
  },
  create: async ({ payload }) => {
    return Promise.resolve(
      CUSTOMER_MOCKS.find((customer) => payload.id === customer.id)!
    );
  },
  getList: async ({ pagination }) => {
    const { page = 1, pageSize = 2 } = pagination || {};
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return Promise.resolve(CUSTOMER_MOCKS.slice(startIndex, endIndex));
  },
  getById: async ({ id }) => {
    return Promise.resolve(
      CUSTOMER_MOCKS.find((customer) => customer.id === id)!
    );
  },
  deleteOne: async ({ payload }) => {
    return Promise.resolve(
      CUSTOMER_MOCKS.find((customer) => payload.id === customer.id)!
    );
  },
};
