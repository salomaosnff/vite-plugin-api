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
    export type ApplicationError = { error?: string; message?: string; status?: number; info?: {} };
    export type User = { id?: string; name?: string; email?: string; role?: 0 | 1; createdAt?: string };
    export type Topic = {
      id?: string;
      title?: string;
      slug?: string;
      rate?: number;
      body?: string;
      author?: Models.User;
      createdAt?: string;
    };
    export type Comment = { id?: string; body?: string; rate?: number; replyTo?: string };
    export type PagedTopics = { items?: Models.Topic[]; totalItems?: number; totalPages?: number };
    export type PagedComments = { items?: Models.Comment[]; totalItems?: number; totalPages?: number };
    export type PagedTags = { items?: string[]; totalItems?: number; totalPages?: number };
  }

  export namespace Services {
    export class Auth {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint POST http://localhost:3000/docs/login
       * @contentType application/json
       *
       * @see http://localhost:3000/docs#/Auth/login
       * @returns 200 Usuário autenticado com sucesso
       * @returns 401 Falha na autenticação
       * @returns 422 Falha na validação dos dados
       */
      login(
        body: { login?: string; password?: string },
        req?: any,
      ): Promise<ApiResponse<Models.User | Models.ApplicationError | Models.ApplicationError>>;
    }
    export class Users {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint POST http://localhost:3000/docs/users
       * @contentType application/json
       *
       * @see http://localhost:3000/docs#/Users/createUser
       * @returns 201 Usuário criado com sucesso
       * @returns 409 Não foi possível cadastrar o usuário pois houve conflito com outro usuário
       * @returns 422 Falha na validação dos dados
       */
      createUser(
        body: { name?: string; email?: string; password?: string },
        req?: any,
      ): Promise<ApiResponse<Models.User | Models.ApplicationError | Models.ApplicationError>>;
    }
    export class Topics {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint POST http://localhost:3000/docs/topics
       * @contentType application/json
       *
       * @see http://localhost:3000/docs#/Topics/createTopic
       * @returns 201 Tópico criado com sucesso
       * @returns 401 Usuário não autenticado
       * @returns 409 Não foi possível cadastrar o tópico pois houve conflito com outro tópico
       * @returns 422 Falha na validação dos dados
       */
      createTopic(
        body: { title?: string; body?: string; tags?: string[] },
        req?: any,
      ): Promise<
        ApiResponse<Models.Topic | Models.ApplicationError | Models.ApplicationError | Models.ApplicationError>
      >;

      /**
       * @endpoint GET http://localhost:3000/docs/topics/{slug}
       *
       * @see http://localhost:3000/docs#/Topics/getTopicBySlug
       * @returns 200 Tópico obtido com sucesso
       * @returns 404 Tópico não encontrado
       */
      getTopicBySlug(
        params: {
          slug: string;
        },
        req?: any,
      ): Promise<ApiResponse<Models.Topic | Models.ApplicationError>>;

      /**
       * @endpoint PATCH http://localhost:3000/docs/topics/{slug}
       * @contentType application/json
       *
       * @see http://localhost:3000/docs#/Topics/updateTopicBySlug
       * @returns 200 Tópico atualizado com sucesso
       * @returns 401 Usuário não autenticado
       * @returns 404 Tópico não encontrado
       */
      updateTopicBySlug(
        params: {
          slug: string;
        },
        body: { title?: string; body?: string; tags?: string[] },
        req?: any,
      ): Promise<ApiResponse<Models.Topic | Models.ApplicationError | Models.ApplicationError>>;

      /**
       * @endpoint DELETE http://localhost:3000/docs/topics/{slug}
       *
       * @see http://localhost:3000/docs#/Topics/deleteTopicBySlug
       * @returns 204 Tópico deletado com sucesso
       * @returns 401 Usuário não autenticado
       * @returns 404 Tópico não encontrado
       */
      deleteTopicBySlug(
        params: {
          slug: string;
        },
        req?: any,
      ): Promise<ApiResponse<void | Models.ApplicationError | Models.ApplicationError>>;

      /**
       * @endpoint POST http://localhost:3000/docs/topics/{slug}/rate
       * @contentType application/json
       *
       * @see http://localhost:3000/docs#/Topics/rateTopic
       * @returns 200 Tópico avaliado com sucesso
       * @returns 401 Usuário não autenticado
       * @returns 404 Tópico não encontrado
       */
      rateTopic(
        params: {
          slug: string;
        },
        body: { rate?: '1' | '-1' },
        req?: any,
      ): Promise<ApiResponse<Models.Topic | Models.ApplicationError | Models.ApplicationError>>;
    }
    export class Comments {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET http://localhost:3000/docs/topics/{slug}/comments
       *
       * @see http://localhost:3000/docs#/Comments/getComments
       * @returns 200 Comentários obtidos com sucesso
       * @returns 404 Tópico não encontrado
       */
      getComments(
        params: {
          slug: string;
        },
        query: {
          page?: number;
          size?: number;
        },
        req?: any,
      ): Promise<ApiResponse<Models.PagedComments | Models.ApplicationError>>;

      /**
       * @endpoint POST http://localhost:3000/docs/topics/{slug}/comments
       * @contentType application/json
       *
       * @see http://localhost:3000/docs#/Comments/createComment
       * @returns 201 Comentário criado com sucesso
       * @returns 401 Usuário não autenticado
       * @returns 404 Tópico não encontrado
       * @returns 422 Falha na validação dos dados
       */
      createComment(
        params: {
          slug: string;
        },
        body: { body?: string; replyTo?: string },
        req?: any,
      ): Promise<
        ApiResponse<Models.Comment | Models.ApplicationError | Models.ApplicationError | Models.ApplicationError>
      >;

      /**
       * @endpoint PATCH http://localhost:3000/docs/topics/{slug}/comments/{id}
       * @contentType application/json
       *
       * @see http://localhost:3000/docs#/Comments/updateComment
       * @returns 200 Comentário atualizado com sucesso
       * @returns 401 Usuário não autenticado
       * @returns 404 Comentário ou tópico não encontrado
       */
      updateComment(
        params: {
          slug: string;
          id: string;
        },
        body: { body?: string },
        req?: any,
      ): Promise<ApiResponse<Models.Comment | Models.ApplicationError | Models.ApplicationError>>;

      /**
       * @endpoint DELETE http://localhost:3000/docs/topics/{slug}/comments/{id}
       *
       * @see http://localhost:3000/docs#/Comments/deleteComment
       * @returns 204 Comentário deletado com sucesso
       * @returns 401 Usuário não autenticado
       * @returns 404 Comentário ou tópico não encontrado
       */
      deleteComment(
        params: {
          slug: string;
          id: string;
        },
        req?: any,
      ): Promise<ApiResponse<void | Models.ApplicationError | Models.ApplicationError>>;

      /**
       * @endpoint POST http://localhost:3000/docs/topics/{slug}/comments/{id}/rate
       * @contentType application/json
       *
       * @see http://localhost:3000/docs#/Comments/rateComment
       * @returns 200 Comentário avaliado com sucesso
       * @returns 401 Usuário não autenticado
       * @returns 404 Comentário ou tópico não encontrado
       */
      rateComment(
        params: {
          slug: string;
          id: string;
        },
        body: { rate?: '1' | '-1' },
        req?: any,
      ): Promise<ApiResponse<Models.Comment | Models.ApplicationError | Models.ApplicationError>>;
    }
    export class Tags {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET http://localhost:3000/docs/tags/following
       *
       * @see http://localhost:3000/docs#/Tags/getFollowingTags
       * @returns 200 Tags obtidas com sucesso
       * @returns 401 Usuário não autenticado
       */
      getFollowingTags(req?: any): Promise<ApiResponse<Models.PagedTags | Models.ApplicationError>>;

      /**
       * @endpoint POST http://localhost:3000/docs/tags/following
       * @contentType application/json
       *
       * @see http://localhost:3000/docs#/Tags/followTag
       * @returns 200 Tag seguida com sucesso
       * @returns 401 Usuário não autenticado
       * @returns 422 Falha na validação dos dados
       */
      followTag(
        body: { tag?: string },
        req?: any,
      ): Promise<ApiResponse<{ tag?: string } | Models.ApplicationError | Models.ApplicationError>>;

      /**
       * @endpoint DELETE http://localhost:3000/docs/tags/following
       *
       * @see http://localhost:3000/docs#/Tags/unfollowTag
       * @returns 204 Tag deixada de seguir com sucesso
       * @returns 422 Falha na validação dos dados
       */
      unfollowTag(
        query: {
          tag: string;
        },
        req?: any,
      ): Promise<ApiResponse<void | Models.ApplicationError>>;
    }
  }
}
