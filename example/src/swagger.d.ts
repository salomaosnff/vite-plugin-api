declare module 'virtual:swagger/core' {
  export interface ApiRequest {
    url: URL;
    method: string;
    body?: any;
  }
  export interface ApiResponse<T> {
    status: number;
    data: T;
    headers: Headers;
  }
}
declare module 'swagger:petshop' {
  import { ApiRequest, ApiResponse } from 'virtual:swagger/core';
  export namespace Models {
    export type Order = {
      id?: number;
      petId?: number;
      quantity?: number;
      shipDate?: string;
      status?: 'placed' | 'approved' | 'delivered';
      complete?: undefined;
    };
    export type Customer = { id?: number; username?: string; address?: Models.Address[] };
    export type Address = { street?: string; city?: string; state?: string; zip?: string };
    export type Category = { id?: number; name?: string };
    export type User = {
      id?: number;
      username?: string;
      firstName?: string;
      lastName?: string;
      email?: string;
      password?: string;
      phone?: string;
      userStatus?: number;
    };
    export type Tag = { id?: number; name?: string };
    export type Pet = {
      id?: number;
      name?: string;
      category?: Models.Category;
      photoUrls?: string[];
      tags?: Models.Tag[];
      status?: 'available' | 'pending' | 'sold';
    };
    export type ApiResponse = { code?: number; type?: string; message?: string };
  }

  export namespace Services {
    export class Pet {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * Update an existing pet by Id
       *
       * @endpoint /pet
       * @method PUT
       *
       * @see https://petstore3.swagger.io/#/pet/updatePet
       * @returns {Models.Pet} 200 Successful operation
       */
      updatePet(body: Models.Pet): Promise<ApiResponse<Models.Pet>>;
      /**
       * Update an existing pet by Id
       *
       * @endpoint /pet
       * @method PUT
       *
       * @see https://petstore3.swagger.io/#/pet/updatePet
       * @returns {Models.Pet} 200 Successful operation
       */
      updatePet(body: URLSearchParams): Promise<ApiResponse<Models.Pet>>;

      /**
       * Add a new pet to the store
       *
       * @endpoint /pet
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/pet/addPet
       * @returns {Models.Pet} 200 Successful operation
       */
      addPet(body: Models.Pet): Promise<ApiResponse<Models.Pet>>;
      /**
       * Add a new pet to the store
       *
       * @endpoint /pet
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/pet/addPet
       * @returns {Models.Pet} 200 Successful operation
       */
      addPet(body: URLSearchParams): Promise<ApiResponse<Models.Pet>>;

      /**
       * Multiple status values can be provided with comma separated strings
       *
       * @endpoint /pet/findByStatus
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/pet/findPetsByStatus
       * @returns {Models.Pet[]} 200 successful operation
       */
      findPetsByStatus(query: { status?: 'available' | 'pending' | 'sold' }): Promise<ApiResponse<Models.Pet[]>>;

      /**
       * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
       *
       * @endpoint /pet/findByTags
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/pet/findPetsByTags
       * @returns {Models.Pet[]} 200 successful operation
       */
      findPetsByTags(query: { tags?: string[] }): Promise<ApiResponse<Models.Pet[]>>;

      /**
       * Returns a single pet
       *
       * @endpoint /pet/{petId}
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/pet/getPetById
       * @returns {Models.Pet} 200 successful operation
       */
      getPetById(params: { petId: number }): Promise<ApiResponse<Models.Pet>>;

      /**
       * @endpoint /pet/{petId}
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/pet/updatePetWithForm
       */
      updatePetWithForm(
        params: {
          petId: number;
        },
        query: {
          name?: string;
          status?: string;
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /pet/{petId}
       * @method DELETE
       *
       * @see https://petstore3.swagger.io/#/pet/deletePet
       */
      deletePet(params: { api_key?: string; petId: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /pet/{petId}/uploadImage
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/pet/uploadFile
       * @returns {Models.ApiResponse} 200 successful operation
       */
      uploadFile(
        params: {
          petId: number;
        },
        query: {
          additionalMetadata?: string;
        },
      ): Promise<ApiResponse<Models.ApiResponse>>;
    }
    export class Store {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * Returns a map of status codes to quantities
       *
       * @endpoint /store/inventory
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/store/getInventory
       * @returns {{}} 200 successful operation
       */
      getInventory(): Promise<ApiResponse<{}>>;

      /**
       * Place a new order in the store
       *
       * @endpoint /store/order
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/store/placeOrder
       * @returns {Models.Order} 200 successful operation
       */
      placeOrder(body: Models.Order): Promise<ApiResponse<Models.Order>>;
      /**
       * Place a new order in the store
       *
       * @endpoint /store/order
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/store/placeOrder
       * @returns {Models.Order} 200 successful operation
       */
      placeOrder(body: URLSearchParams): Promise<ApiResponse<Models.Order>>;

      /**
       * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
       *
       * @endpoint /store/order/{orderId}
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/store/getOrderById
       * @returns {Models.Order} 200 successful operation
       */
      getOrderById(params: { orderId: number }): Promise<ApiResponse<Models.Order>>;

      /**
       * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
       *
       * @endpoint /store/order/{orderId}
       * @method DELETE
       *
       * @see https://petstore3.swagger.io/#/store/deleteOrder
       */
      deleteOrder(params: { orderId: number }): Promise<ApiResponse<void>>;
    }
    export class User {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * This can only be done by the logged in user.
       *
       * @endpoint /user
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/user/createUser
       * @returns {Models.User} NaN successful operation
       */
      createUser(body: Models.User): Promise<ApiResponse<Models.User>>;
      /**
       * This can only be done by the logged in user.
       *
       * @endpoint /user
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/user/createUser
       * @returns {Models.User} NaN successful operation
       */
      createUser(body: URLSearchParams): Promise<ApiResponse<Models.User>>;

      /**
       * Creates list of users with given input array
       *
       * @endpoint /user/createWithList
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/user/createUsersWithListInput
       * @returns {Models.User} 200 Successful operation
       */
      createUsersWithListInput(body: Models.User[]): Promise<ApiResponse<Models.User>>;

      /**
       * @endpoint /user/login
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/user/loginUser
       * @returns {string} 200 successful operation
       */
      loginUser(query: { username?: string; password?: string }): Promise<ApiResponse<string>>;

      /**
       * @endpoint /user/logout
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/user/logoutUser
       */
      logoutUser(): Promise<ApiResponse<void>>;

      /**
       * @endpoint /user/{username}
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/user/getUserByName
       * @returns {Models.User} 200 successful operation
       */
      getUserByName(params: { username: string }): Promise<ApiResponse<Models.User>>;

      /**
       * This can only be done by the logged in user.
       *
       * @endpoint /user/{username}
       * @method PUT
       *
       * @see https://petstore3.swagger.io/#/user/updateUser
       */
      updateUser(
        params: {
          username: string;
        },
        body: Models.User,
      ): Promise<ApiResponse<void>>;
      /**
       * This can only be done by the logged in user.
       *
       * @endpoint /user/{username}
       * @method PUT
       *
       * @see https://petstore3.swagger.io/#/user/updateUser
       */
      updateUser(
        params: {
          username: string;
        },
        body: URLSearchParams,
      ): Promise<ApiResponse<void>>;

      /**
       * This can only be done by the logged in user.
       *
       * @endpoint /user/{username}
       * @method DELETE
       *
       * @see https://petstore3.swagger.io/#/user/deleteUser
       */
      deleteUser(params: { username: string }): Promise<ApiResponse<void>>;
    }
  }
}
