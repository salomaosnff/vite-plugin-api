declare module 'virtual:swagger/core' {
  export interface ApiRequest {
    url: URL;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
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
       * @endpoint PUT https://petstore3.swagger.io/pet
       * @contentType application/json
       *
       * @see https://petstore3.swagger.io/#/pet/updatePet
       * @returns 200 Successful operation
       * @returns 400 Invalid ID supplied
       * @returns 404 Pet not found
       * @returns 405 Validation exception
       */
      updatePet(body: Models.Pet): Promise<ApiResponse<Models.Pet | void | void | void>>;
      /**
       * Update an existing pet by Id
       *
       * @endpoint PUT https://petstore3.swagger.io/pet
       * @contentType application/x-www-form-urlencoded
       *
       * @see https://petstore3.swagger.io/#/pet/updatePet
       * @returns 200 Successful operation
       * @returns 400 Invalid ID supplied
       * @returns 404 Pet not found
       * @returns 405 Validation exception
       */
      updatePet(body: URLSearchParams): Promise<ApiResponse<Models.Pet | void | void | void>>;

      /**
       * Add a new pet to the store
       *
       * @endpoint POST https://petstore3.swagger.io/pet
       * @contentType application/json
       *
       * @see https://petstore3.swagger.io/#/pet/addPet
       * @returns 200 Successful operation
       * @returns 405 Invalid input
       */
      addPet(body: Models.Pet): Promise<ApiResponse<Models.Pet | void>>;
      /**
       * Add a new pet to the store
       *
       * @endpoint POST https://petstore3.swagger.io/pet
       * @contentType application/x-www-form-urlencoded
       *
       * @see https://petstore3.swagger.io/#/pet/addPet
       * @returns 200 Successful operation
       * @returns 405 Invalid input
       */
      addPet(body: URLSearchParams): Promise<ApiResponse<Models.Pet | void>>;

      /**
       * Multiple status values can be provided with comma separated strings
       *
       * @endpoint GET https://petstore3.swagger.io/pet/findByStatus
       *
       * @see https://petstore3.swagger.io/#/pet/findPetsByStatus
       * @returns 200 successful operation
       * @returns 400 Invalid status value
       */
      findPetsByStatus(query: { status?: 'available' | 'pending' | 'sold' }): Promise<ApiResponse<Models.Pet[] | void>>;

      /**
       * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
       *
       * @endpoint GET https://petstore3.swagger.io/pet/findByTags
       *
       * @see https://petstore3.swagger.io/#/pet/findPetsByTags
       * @returns 200 successful operation
       * @returns 400 Invalid tag value
       */
      findPetsByTags(query: { tags?: string[] }): Promise<ApiResponse<Models.Pet[] | void>>;

      /**
       * Returns a single pet
       *
       * @endpoint GET https://petstore3.swagger.io/pet/{petId}
       *
       * @see https://petstore3.swagger.io/#/pet/getPetById
       * @returns 200 successful operation
       * @returns 400 Invalid ID supplied
       * @returns 404 Pet not found
       */
      getPetById(params: { petId: number }): Promise<ApiResponse<Models.Pet | void | void>>;

      /**
       * @endpoint POST https://petstore3.swagger.io/pet/{petId}
       *
       * @see https://petstore3.swagger.io/#/pet/updatePetWithForm
       * @returns 405 Invalid input
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
       * @endpoint DELETE https://petstore3.swagger.io/pet/{petId}
       *
       * @see https://petstore3.swagger.io/#/pet/deletePet
       * @returns 400 Invalid pet value
       */
      deletePet(params: { api_key?: string; petId: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://petstore3.swagger.io/pet/{petId}/uploadImage
       *
       * @see https://petstore3.swagger.io/#/pet/uploadFile
       * @returns 200 successful operation
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
       * @endpoint GET https://petstore3.swagger.io/store/inventory
       *
       * @see https://petstore3.swagger.io/#/store/getInventory
       * @returns 200 successful operation
       */
      getInventory(): Promise<ApiResponse<{}>>;

      /**
       * Place a new order in the store
       *
       * @endpoint POST https://petstore3.swagger.io/store/order
       * @contentType application/json
       *
       * @see https://petstore3.swagger.io/#/store/placeOrder
       * @returns 200 successful operation
       * @returns 405 Invalid input
       */
      placeOrder(body: Models.Order): Promise<ApiResponse<Models.Order | void>>;
      /**
       * Place a new order in the store
       *
       * @endpoint POST https://petstore3.swagger.io/store/order
       * @contentType application/x-www-form-urlencoded
       *
       * @see https://petstore3.swagger.io/#/store/placeOrder
       * @returns 200 successful operation
       * @returns 405 Invalid input
       */
      placeOrder(body: URLSearchParams): Promise<ApiResponse<Models.Order | void>>;

      /**
       * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
       *
       * @endpoint GET https://petstore3.swagger.io/store/order/{orderId}
       *
       * @see https://petstore3.swagger.io/#/store/getOrderById
       * @returns 200 successful operation
       * @returns 400 Invalid ID supplied
       * @returns 404 Order not found
       */
      getOrderById(params: { orderId: number }): Promise<ApiResponse<Models.Order | void | void>>;

      /**
       * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
       *
       * @endpoint DELETE https://petstore3.swagger.io/store/order/{orderId}
       *
       * @see https://petstore3.swagger.io/#/store/deleteOrder
       * @returns 400 Invalid ID supplied
       * @returns 404 Order not found
       */
      deleteOrder(params: { orderId: number }): Promise<ApiResponse<void | void>>;
    }
    export class User {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * This can only be done by the logged in user.
       *
       * @endpoint POST https://petstore3.swagger.io/user
       * @contentType application/json
       *
       * @see https://petstore3.swagger.io/#/user/createUser
       * @returns NaN successful operation
       */
      createUser(body: Models.User): Promise<ApiResponse<Models.User>>;
      /**
       * This can only be done by the logged in user.
       *
       * @endpoint POST https://petstore3.swagger.io/user
       * @contentType application/x-www-form-urlencoded
       *
       * @see https://petstore3.swagger.io/#/user/createUser
       * @returns NaN successful operation
       */
      createUser(body: URLSearchParams): Promise<ApiResponse<Models.User>>;

      /**
       * Creates list of users with given input array
       *
       * @endpoint POST https://petstore3.swagger.io/user/createWithList
       * @contentType application/json
       *
       * @see https://petstore3.swagger.io/#/user/createUsersWithListInput
       * @returns 200 Successful operation
       * @returns NaN successful operation
       */
      createUsersWithListInput(body: Models.User[]): Promise<ApiResponse<Models.User | void>>;

      /**
       * @endpoint GET https://petstore3.swagger.io/user/login
       *
       * @see https://petstore3.swagger.io/#/user/loginUser
       * @returns 200 successful operation
       * @returns 400 Invalid username/password supplied
       */
      loginUser(query: { username?: string; password?: string }): Promise<ApiResponse<string | void>>;

      /**
       * @endpoint GET https://petstore3.swagger.io/user/logout
       *
       * @see https://petstore3.swagger.io/#/user/logoutUser
       * @returns NaN successful operation
       */
      logoutUser(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://petstore3.swagger.io/user/{username}
       *
       * @see https://petstore3.swagger.io/#/user/getUserByName
       * @returns 200 successful operation
       * @returns 400 Invalid username supplied
       * @returns 404 User not found
       */
      getUserByName(params: { username: string }): Promise<ApiResponse<Models.User | void | void>>;

      /**
       * This can only be done by the logged in user.
       *
       * @endpoint PUT https://petstore3.swagger.io/user/{username}
       * @contentType application/json
       *
       * @see https://petstore3.swagger.io/#/user/updateUser
       * @returns NaN successful operation
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
       * @endpoint PUT https://petstore3.swagger.io/user/{username}
       * @contentType application/x-www-form-urlencoded
       *
       * @see https://petstore3.swagger.io/#/user/updateUser
       * @returns NaN successful operation
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
       * @endpoint DELETE https://petstore3.swagger.io/user/{username}
       *
       * @see https://petstore3.swagger.io/#/user/deleteUser
       * @returns 400 Invalid username supplied
       * @returns 404 User not found
       */
      deleteUser(params: { username: string }): Promise<ApiResponse<void | void>>;
    }
  }
}
