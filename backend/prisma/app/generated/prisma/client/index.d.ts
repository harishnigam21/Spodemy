
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model usercart
 * 
 */
export type usercart = $Result.DefaultSelection<Prisma.$usercartPayload>
/**
 * Model beforebuying
 * 
 */
export type beforebuying = $Result.DefaultSelection<Prisma.$beforebuyingPayload>
/**
 * Model whishlist
 * 
 */
export type whishlist = $Result.DefaultSelection<Prisma.$whishlistPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.products.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.products.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usercart`: Exposes CRUD operations for the **usercart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usercarts
    * const usercarts = await prisma.usercart.findMany()
    * ```
    */
  get usercart(): Prisma.usercartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.beforebuying`: Exposes CRUD operations for the **beforebuying** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beforebuyings
    * const beforebuyings = await prisma.beforebuying.findMany()
    * ```
    */
  get beforebuying(): Prisma.beforebuyingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whishlist`: Exposes CRUD operations for the **whishlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Whishlists
    * const whishlists = await prisma.whishlist.findMany()
    * ```
    */
  get whishlist(): Prisma.whishlistDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    products: 'products',
    users: 'users',
    usercart: 'usercart',
    beforebuying: 'beforebuying',
    whishlist: 'whishlist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "products" | "users" | "usercart" | "beforebuying" | "whishlist"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      usercart: {
        payload: Prisma.$usercartPayload<ExtArgs>
        fields: Prisma.usercartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usercartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usercartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usercartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usercartPayload>
          }
          findFirst: {
            args: Prisma.usercartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usercartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usercartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usercartPayload>
          }
          findMany: {
            args: Prisma.usercartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usercartPayload>[]
          }
          create: {
            args: Prisma.usercartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usercartPayload>
          }
          createMany: {
            args: Prisma.usercartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usercartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usercartPayload>
          }
          update: {
            args: Prisma.usercartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usercartPayload>
          }
          deleteMany: {
            args: Prisma.usercartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usercartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usercartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usercartPayload>
          }
          aggregate: {
            args: Prisma.UsercartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsercart>
          }
          groupBy: {
            args: Prisma.usercartGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsercartGroupByOutputType>[]
          }
          count: {
            args: Prisma.usercartCountArgs<ExtArgs>
            result: $Utils.Optional<UsercartCountAggregateOutputType> | number
          }
        }
      }
      beforebuying: {
        payload: Prisma.$beforebuyingPayload<ExtArgs>
        fields: Prisma.beforebuyingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.beforebuyingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beforebuyingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.beforebuyingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beforebuyingPayload>
          }
          findFirst: {
            args: Prisma.beforebuyingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beforebuyingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.beforebuyingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beforebuyingPayload>
          }
          findMany: {
            args: Prisma.beforebuyingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beforebuyingPayload>[]
          }
          create: {
            args: Prisma.beforebuyingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beforebuyingPayload>
          }
          createMany: {
            args: Prisma.beforebuyingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.beforebuyingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beforebuyingPayload>
          }
          update: {
            args: Prisma.beforebuyingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beforebuyingPayload>
          }
          deleteMany: {
            args: Prisma.beforebuyingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.beforebuyingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.beforebuyingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beforebuyingPayload>
          }
          aggregate: {
            args: Prisma.BeforebuyingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBeforebuying>
          }
          groupBy: {
            args: Prisma.beforebuyingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeforebuyingGroupByOutputType>[]
          }
          count: {
            args: Prisma.beforebuyingCountArgs<ExtArgs>
            result: $Utils.Optional<BeforebuyingCountAggregateOutputType> | number
          }
        }
      }
      whishlist: {
        payload: Prisma.$whishlistPayload<ExtArgs>
        fields: Prisma.whishlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.whishlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whishlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.whishlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whishlistPayload>
          }
          findFirst: {
            args: Prisma.whishlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whishlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.whishlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whishlistPayload>
          }
          findMany: {
            args: Prisma.whishlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whishlistPayload>[]
          }
          create: {
            args: Prisma.whishlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whishlistPayload>
          }
          createMany: {
            args: Prisma.whishlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.whishlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whishlistPayload>
          }
          update: {
            args: Prisma.whishlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whishlistPayload>
          }
          deleteMany: {
            args: Prisma.whishlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.whishlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.whishlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whishlistPayload>
          }
          aggregate: {
            args: Prisma.WhishlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhishlist>
          }
          groupBy: {
            args: Prisma.whishlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhishlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.whishlistCountArgs<ExtArgs>
            result: $Utils.Optional<WhishlistCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    products?: productsOmit
    users?: usersOmit
    usercart?: usercartOmit
    beforebuying?: beforebuyingOmit
    whishlist?: whishlistOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    ProductId: number | null
    ProductQuantity: number | null
    ProductPrice: number | null
  }

  export type ProductsSumAggregateOutputType = {
    ProductId: number | null
    ProductQuantity: number | null
    ProductPrice: number | null
  }

  export type ProductsMinAggregateOutputType = {
    ProductId: number | null
    ProductName: string | null
    ProductBrand: string | null
    ProductQuantity: number | null
    ProductPrice: number | null
    ProductExpirydate: string | null
    ProductImg: string | null
    ShopName: string | null
    UserEmail: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    ProductId: number | null
    ProductName: string | null
    ProductBrand: string | null
    ProductQuantity: number | null
    ProductPrice: number | null
    ProductExpirydate: string | null
    ProductImg: string | null
    ShopName: string | null
    UserEmail: string | null
  }

  export type ProductsCountAggregateOutputType = {
    ProductId: number
    ProductName: number
    ProductBrand: number
    ProductQuantity: number
    ProductPrice: number
    ProductExpirydate: number
    ProductImg: number
    ShopName: number
    UserEmail: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    ProductId?: true
    ProductQuantity?: true
    ProductPrice?: true
  }

  export type ProductsSumAggregateInputType = {
    ProductId?: true
    ProductQuantity?: true
    ProductPrice?: true
  }

  export type ProductsMinAggregateInputType = {
    ProductId?: true
    ProductName?: true
    ProductBrand?: true
    ProductQuantity?: true
    ProductPrice?: true
    ProductExpirydate?: true
    ProductImg?: true
    ShopName?: true
    UserEmail?: true
  }

  export type ProductsMaxAggregateInputType = {
    ProductId?: true
    ProductName?: true
    ProductBrand?: true
    ProductQuantity?: true
    ProductPrice?: true
    ProductExpirydate?: true
    ProductImg?: true
    ShopName?: true
    UserEmail?: true
  }

  export type ProductsCountAggregateInputType = {
    ProductId?: true
    ProductName?: true
    ProductBrand?: true
    ProductQuantity?: true
    ProductPrice?: true
    ProductExpirydate?: true
    ProductImg?: true
    ShopName?: true
    UserEmail?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    ProductId: number
    ProductName: string | null
    ProductBrand: string | null
    ProductQuantity: number | null
    ProductPrice: number | null
    ProductExpirydate: string | null
    ProductImg: string | null
    ShopName: string | null
    UserEmail: string | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProductId?: boolean
    ProductName?: boolean
    ProductBrand?: boolean
    ProductQuantity?: boolean
    ProductPrice?: boolean
    ProductExpirydate?: boolean
    ProductImg?: boolean
    ShopName?: boolean
    UserEmail?: boolean
  }, ExtArgs["result"]["products"]>



  export type productsSelectScalar = {
    ProductId?: boolean
    ProductName?: boolean
    ProductBrand?: boolean
    ProductQuantity?: boolean
    ProductPrice?: boolean
    ProductExpirydate?: boolean
    ProductImg?: boolean
    ShopName?: boolean
    UserEmail?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ProductId" | "ProductName" | "ProductBrand" | "ProductQuantity" | "ProductPrice" | "ProductExpirydate" | "ProductImg" | "ShopName" | "UserEmail", ExtArgs["result"]["products"]>

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ProductId: number
      ProductName: string | null
      ProductBrand: string | null
      ProductQuantity: number | null
      ProductPrice: number | null
      ProductExpirydate: string | null
      ProductImg: string | null
      ShopName: string | null
      UserEmail: string | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `ProductId`
     * const productsWithProductIdOnly = await prisma.products.findMany({ select: { ProductId: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly ProductId: FieldRef<"products", 'Int'>
    readonly ProductName: FieldRef<"products", 'String'>
    readonly ProductBrand: FieldRef<"products", 'String'>
    readonly ProductQuantity: FieldRef<"products", 'Int'>
    readonly ProductPrice: FieldRef<"products", 'Int'>
    readonly ProductExpirydate: FieldRef<"products", 'String'>
    readonly ProductImg: FieldRef<"products", 'String'>
    readonly ShopName: FieldRef<"products", 'String'>
    readonly UserEmail: FieldRef<"products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data?: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    dob: string | null
    gender: string | null
    email: string | null
    mobileno: string | null
    password: string | null
    createdUser: string | null
    referenceToken: string | null
    userType: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    dob: string | null
    gender: string | null
    email: string | null
    mobileno: string | null
    password: string | null
    createdUser: string | null
    referenceToken: string | null
    userType: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    firstname: number
    middlename: number
    lastname: number
    dob: number
    gender: number
    email: number
    mobileno: number
    password: number
    createdUser: number
    referenceToken: number
    userType: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    firstname?: true
    middlename?: true
    lastname?: true
    dob?: true
    gender?: true
    email?: true
    mobileno?: true
    password?: true
    createdUser?: true
    referenceToken?: true
    userType?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    firstname?: true
    middlename?: true
    lastname?: true
    dob?: true
    gender?: true
    email?: true
    mobileno?: true
    password?: true
    createdUser?: true
    referenceToken?: true
    userType?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    firstname?: true
    middlename?: true
    lastname?: true
    dob?: true
    gender?: true
    email?: true
    mobileno?: true
    password?: true
    createdUser?: true
    referenceToken?: true
    userType?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    firstname: string
    middlename: string | null
    lastname: string
    dob: string
    gender: string
    email: string
    mobileno: string
    password: string
    createdUser: string
    referenceToken: string
    userType: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    dob?: boolean
    gender?: boolean
    email?: boolean
    mobileno?: boolean
    password?: boolean
    createdUser?: boolean
    referenceToken?: boolean
    userType?: boolean
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    dob?: boolean
    gender?: boolean
    email?: boolean
    mobileno?: boolean
    password?: boolean
    createdUser?: boolean
    referenceToken?: boolean
    userType?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "middlename" | "lastname" | "dob" | "gender" | "email" | "mobileno" | "password" | "createdUser" | "referenceToken" | "userType", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      middlename: string | null
      lastname: string
      dob: string
      gender: string
      email: string
      mobileno: string
      password: string
      createdUser: string
      referenceToken: string
      userType: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly firstname: FieldRef<"users", 'String'>
    readonly middlename: FieldRef<"users", 'String'>
    readonly lastname: FieldRef<"users", 'String'>
    readonly dob: FieldRef<"users", 'String'>
    readonly gender: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly mobileno: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly createdUser: FieldRef<"users", 'String'>
    readonly referenceToken: FieldRef<"users", 'String'>
    readonly userType: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model usercart
   */

  export type AggregateUsercart = {
    _count: UsercartCountAggregateOutputType | null
    _avg: UsercartAvgAggregateOutputType | null
    _sum: UsercartSumAggregateOutputType | null
    _min: UsercartMinAggregateOutputType | null
    _max: UsercartMaxAggregateOutputType | null
  }

  export type UsercartAvgAggregateOutputType = {
    totalItem: number | null
  }

  export type UsercartSumAggregateOutputType = {
    totalItem: number | null
  }

  export type UsercartMinAggregateOutputType = {
    email: string | null
    totalItem: number | null
    itemsid: string | null
  }

  export type UsercartMaxAggregateOutputType = {
    email: string | null
    totalItem: number | null
    itemsid: string | null
  }

  export type UsercartCountAggregateOutputType = {
    email: number
    totalItem: number
    itemsid: number
    _all: number
  }


  export type UsercartAvgAggregateInputType = {
    totalItem?: true
  }

  export type UsercartSumAggregateInputType = {
    totalItem?: true
  }

  export type UsercartMinAggregateInputType = {
    email?: true
    totalItem?: true
    itemsid?: true
  }

  export type UsercartMaxAggregateInputType = {
    email?: true
    totalItem?: true
    itemsid?: true
  }

  export type UsercartCountAggregateInputType = {
    email?: true
    totalItem?: true
    itemsid?: true
    _all?: true
  }

  export type UsercartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usercart to aggregate.
     */
    where?: usercartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usercarts to fetch.
     */
    orderBy?: usercartOrderByWithRelationInput | usercartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usercartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usercarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usercarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usercarts
    **/
    _count?: true | UsercartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsercartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsercartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsercartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsercartMaxAggregateInputType
  }

  export type GetUsercartAggregateType<T extends UsercartAggregateArgs> = {
        [P in keyof T & keyof AggregateUsercart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsercart[P]>
      : GetScalarType<T[P], AggregateUsercart[P]>
  }




  export type usercartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usercartWhereInput
    orderBy?: usercartOrderByWithAggregationInput | usercartOrderByWithAggregationInput[]
    by: UsercartScalarFieldEnum[] | UsercartScalarFieldEnum
    having?: usercartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsercartCountAggregateInputType | true
    _avg?: UsercartAvgAggregateInputType
    _sum?: UsercartSumAggregateInputType
    _min?: UsercartMinAggregateInputType
    _max?: UsercartMaxAggregateInputType
  }

  export type UsercartGroupByOutputType = {
    email: string
    totalItem: number | null
    itemsid: string | null
    _count: UsercartCountAggregateOutputType | null
    _avg: UsercartAvgAggregateOutputType | null
    _sum: UsercartSumAggregateOutputType | null
    _min: UsercartMinAggregateOutputType | null
    _max: UsercartMaxAggregateOutputType | null
  }

  type GetUsercartGroupByPayload<T extends usercartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsercartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsercartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsercartGroupByOutputType[P]>
            : GetScalarType<T[P], UsercartGroupByOutputType[P]>
        }
      >
    >


  export type usercartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    totalItem?: boolean
    itemsid?: boolean
  }, ExtArgs["result"]["usercart"]>



  export type usercartSelectScalar = {
    email?: boolean
    totalItem?: boolean
    itemsid?: boolean
  }

  export type usercartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "totalItem" | "itemsid", ExtArgs["result"]["usercart"]>

  export type $usercartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usercart"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      email: string
      totalItem: number | null
      itemsid: string | null
    }, ExtArgs["result"]["usercart"]>
    composites: {}
  }

  type usercartGetPayload<S extends boolean | null | undefined | usercartDefaultArgs> = $Result.GetResult<Prisma.$usercartPayload, S>

  type usercartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usercartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsercartCountAggregateInputType | true
    }

  export interface usercartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usercart'], meta: { name: 'usercart' } }
    /**
     * Find zero or one Usercart that matches the filter.
     * @param {usercartFindUniqueArgs} args - Arguments to find a Usercart
     * @example
     * // Get one Usercart
     * const usercart = await prisma.usercart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usercartFindUniqueArgs>(args: SelectSubset<T, usercartFindUniqueArgs<ExtArgs>>): Prisma__usercartClient<$Result.GetResult<Prisma.$usercartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usercart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usercartFindUniqueOrThrowArgs} args - Arguments to find a Usercart
     * @example
     * // Get one Usercart
     * const usercart = await prisma.usercart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usercartFindUniqueOrThrowArgs>(args: SelectSubset<T, usercartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usercartClient<$Result.GetResult<Prisma.$usercartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usercart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usercartFindFirstArgs} args - Arguments to find a Usercart
     * @example
     * // Get one Usercart
     * const usercart = await prisma.usercart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usercartFindFirstArgs>(args?: SelectSubset<T, usercartFindFirstArgs<ExtArgs>>): Prisma__usercartClient<$Result.GetResult<Prisma.$usercartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usercart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usercartFindFirstOrThrowArgs} args - Arguments to find a Usercart
     * @example
     * // Get one Usercart
     * const usercart = await prisma.usercart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usercartFindFirstOrThrowArgs>(args?: SelectSubset<T, usercartFindFirstOrThrowArgs<ExtArgs>>): Prisma__usercartClient<$Result.GetResult<Prisma.$usercartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usercarts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usercartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usercarts
     * const usercarts = await prisma.usercart.findMany()
     * 
     * // Get first 10 Usercarts
     * const usercarts = await prisma.usercart.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const usercartWithEmailOnly = await prisma.usercart.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends usercartFindManyArgs>(args?: SelectSubset<T, usercartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usercartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usercart.
     * @param {usercartCreateArgs} args - Arguments to create a Usercart.
     * @example
     * // Create one Usercart
     * const Usercart = await prisma.usercart.create({
     *   data: {
     *     // ... data to create a Usercart
     *   }
     * })
     * 
     */
    create<T extends usercartCreateArgs>(args: SelectSubset<T, usercartCreateArgs<ExtArgs>>): Prisma__usercartClient<$Result.GetResult<Prisma.$usercartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usercarts.
     * @param {usercartCreateManyArgs} args - Arguments to create many Usercarts.
     * @example
     * // Create many Usercarts
     * const usercart = await prisma.usercart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usercartCreateManyArgs>(args?: SelectSubset<T, usercartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usercart.
     * @param {usercartDeleteArgs} args - Arguments to delete one Usercart.
     * @example
     * // Delete one Usercart
     * const Usercart = await prisma.usercart.delete({
     *   where: {
     *     // ... filter to delete one Usercart
     *   }
     * })
     * 
     */
    delete<T extends usercartDeleteArgs>(args: SelectSubset<T, usercartDeleteArgs<ExtArgs>>): Prisma__usercartClient<$Result.GetResult<Prisma.$usercartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usercart.
     * @param {usercartUpdateArgs} args - Arguments to update one Usercart.
     * @example
     * // Update one Usercart
     * const usercart = await prisma.usercart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usercartUpdateArgs>(args: SelectSubset<T, usercartUpdateArgs<ExtArgs>>): Prisma__usercartClient<$Result.GetResult<Prisma.$usercartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usercarts.
     * @param {usercartDeleteManyArgs} args - Arguments to filter Usercarts to delete.
     * @example
     * // Delete a few Usercarts
     * const { count } = await prisma.usercart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usercartDeleteManyArgs>(args?: SelectSubset<T, usercartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usercarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usercartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usercarts
     * const usercart = await prisma.usercart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usercartUpdateManyArgs>(args: SelectSubset<T, usercartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usercart.
     * @param {usercartUpsertArgs} args - Arguments to update or create a Usercart.
     * @example
     * // Update or create a Usercart
     * const usercart = await prisma.usercart.upsert({
     *   create: {
     *     // ... data to create a Usercart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usercart we want to update
     *   }
     * })
     */
    upsert<T extends usercartUpsertArgs>(args: SelectSubset<T, usercartUpsertArgs<ExtArgs>>): Prisma__usercartClient<$Result.GetResult<Prisma.$usercartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usercarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usercartCountArgs} args - Arguments to filter Usercarts to count.
     * @example
     * // Count the number of Usercarts
     * const count = await prisma.usercart.count({
     *   where: {
     *     // ... the filter for the Usercarts we want to count
     *   }
     * })
    **/
    count<T extends usercartCountArgs>(
      args?: Subset<T, usercartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsercartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usercart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsercartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsercartAggregateArgs>(args: Subset<T, UsercartAggregateArgs>): Prisma.PrismaPromise<GetUsercartAggregateType<T>>

    /**
     * Group by Usercart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usercartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usercartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usercartGroupByArgs['orderBy'] }
        : { orderBy?: usercartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usercartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsercartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usercart model
   */
  readonly fields: usercartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usercart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usercartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usercart model
   */
  interface usercartFieldRefs {
    readonly email: FieldRef<"usercart", 'String'>
    readonly totalItem: FieldRef<"usercart", 'Int'>
    readonly itemsid: FieldRef<"usercart", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usercart findUnique
   */
  export type usercartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usercart
     */
    select?: usercartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usercart
     */
    omit?: usercartOmit<ExtArgs> | null
    /**
     * Filter, which usercart to fetch.
     */
    where: usercartWhereUniqueInput
  }

  /**
   * usercart findUniqueOrThrow
   */
  export type usercartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usercart
     */
    select?: usercartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usercart
     */
    omit?: usercartOmit<ExtArgs> | null
    /**
     * Filter, which usercart to fetch.
     */
    where: usercartWhereUniqueInput
  }

  /**
   * usercart findFirst
   */
  export type usercartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usercart
     */
    select?: usercartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usercart
     */
    omit?: usercartOmit<ExtArgs> | null
    /**
     * Filter, which usercart to fetch.
     */
    where?: usercartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usercarts to fetch.
     */
    orderBy?: usercartOrderByWithRelationInput | usercartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usercarts.
     */
    cursor?: usercartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usercarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usercarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usercarts.
     */
    distinct?: UsercartScalarFieldEnum | UsercartScalarFieldEnum[]
  }

  /**
   * usercart findFirstOrThrow
   */
  export type usercartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usercart
     */
    select?: usercartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usercart
     */
    omit?: usercartOmit<ExtArgs> | null
    /**
     * Filter, which usercart to fetch.
     */
    where?: usercartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usercarts to fetch.
     */
    orderBy?: usercartOrderByWithRelationInput | usercartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usercarts.
     */
    cursor?: usercartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usercarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usercarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usercarts.
     */
    distinct?: UsercartScalarFieldEnum | UsercartScalarFieldEnum[]
  }

  /**
   * usercart findMany
   */
  export type usercartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usercart
     */
    select?: usercartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usercart
     */
    omit?: usercartOmit<ExtArgs> | null
    /**
     * Filter, which usercarts to fetch.
     */
    where?: usercartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usercarts to fetch.
     */
    orderBy?: usercartOrderByWithRelationInput | usercartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usercarts.
     */
    cursor?: usercartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usercarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usercarts.
     */
    skip?: number
    distinct?: UsercartScalarFieldEnum | UsercartScalarFieldEnum[]
  }

  /**
   * usercart create
   */
  export type usercartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usercart
     */
    select?: usercartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usercart
     */
    omit?: usercartOmit<ExtArgs> | null
    /**
     * The data needed to create a usercart.
     */
    data: XOR<usercartCreateInput, usercartUncheckedCreateInput>
  }

  /**
   * usercart createMany
   */
  export type usercartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usercarts.
     */
    data: usercartCreateManyInput | usercartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usercart update
   */
  export type usercartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usercart
     */
    select?: usercartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usercart
     */
    omit?: usercartOmit<ExtArgs> | null
    /**
     * The data needed to update a usercart.
     */
    data: XOR<usercartUpdateInput, usercartUncheckedUpdateInput>
    /**
     * Choose, which usercart to update.
     */
    where: usercartWhereUniqueInput
  }

  /**
   * usercart updateMany
   */
  export type usercartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usercarts.
     */
    data: XOR<usercartUpdateManyMutationInput, usercartUncheckedUpdateManyInput>
    /**
     * Filter which usercarts to update
     */
    where?: usercartWhereInput
    /**
     * Limit how many usercarts to update.
     */
    limit?: number
  }

  /**
   * usercart upsert
   */
  export type usercartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usercart
     */
    select?: usercartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usercart
     */
    omit?: usercartOmit<ExtArgs> | null
    /**
     * The filter to search for the usercart to update in case it exists.
     */
    where: usercartWhereUniqueInput
    /**
     * In case the usercart found by the `where` argument doesn't exist, create a new usercart with this data.
     */
    create: XOR<usercartCreateInput, usercartUncheckedCreateInput>
    /**
     * In case the usercart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usercartUpdateInput, usercartUncheckedUpdateInput>
  }

  /**
   * usercart delete
   */
  export type usercartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usercart
     */
    select?: usercartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usercart
     */
    omit?: usercartOmit<ExtArgs> | null
    /**
     * Filter which usercart to delete.
     */
    where: usercartWhereUniqueInput
  }

  /**
   * usercart deleteMany
   */
  export type usercartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usercarts to delete
     */
    where?: usercartWhereInput
    /**
     * Limit how many usercarts to delete.
     */
    limit?: number
  }

  /**
   * usercart without action
   */
  export type usercartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usercart
     */
    select?: usercartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usercart
     */
    omit?: usercartOmit<ExtArgs> | null
  }


  /**
   * Model beforebuying
   */

  export type AggregateBeforebuying = {
    _count: BeforebuyingCountAggregateOutputType | null
    _avg: BeforebuyingAvgAggregateOutputType | null
    _sum: BeforebuyingSumAggregateOutputType | null
    _min: BeforebuyingMinAggregateOutputType | null
    _max: BeforebuyingMaxAggregateOutputType | null
  }

  export type BeforebuyingAvgAggregateOutputType = {
    id: number | null
  }

  export type BeforebuyingSumAggregateOutputType = {
    id: number | null
  }

  export type BeforebuyingMinAggregateOutputType = {
    id: number | null
    email: string | null
    usrcartobj: string | null
    transactionid: string | null
    transactionstatus: string | null
    createdAt: string | null
  }

  export type BeforebuyingMaxAggregateOutputType = {
    id: number | null
    email: string | null
    usrcartobj: string | null
    transactionid: string | null
    transactionstatus: string | null
    createdAt: string | null
  }

  export type BeforebuyingCountAggregateOutputType = {
    id: number
    email: number
    usrcartobj: number
    transactionid: number
    transactionstatus: number
    createdAt: number
    _all: number
  }


  export type BeforebuyingAvgAggregateInputType = {
    id?: true
  }

  export type BeforebuyingSumAggregateInputType = {
    id?: true
  }

  export type BeforebuyingMinAggregateInputType = {
    id?: true
    email?: true
    usrcartobj?: true
    transactionid?: true
    transactionstatus?: true
    createdAt?: true
  }

  export type BeforebuyingMaxAggregateInputType = {
    id?: true
    email?: true
    usrcartobj?: true
    transactionid?: true
    transactionstatus?: true
    createdAt?: true
  }

  export type BeforebuyingCountAggregateInputType = {
    id?: true
    email?: true
    usrcartobj?: true
    transactionid?: true
    transactionstatus?: true
    createdAt?: true
    _all?: true
  }

  export type BeforebuyingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which beforebuying to aggregate.
     */
    where?: beforebuyingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beforebuyings to fetch.
     */
    orderBy?: beforebuyingOrderByWithRelationInput | beforebuyingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: beforebuyingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beforebuyings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beforebuyings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned beforebuyings
    **/
    _count?: true | BeforebuyingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BeforebuyingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BeforebuyingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeforebuyingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeforebuyingMaxAggregateInputType
  }

  export type GetBeforebuyingAggregateType<T extends BeforebuyingAggregateArgs> = {
        [P in keyof T & keyof AggregateBeforebuying]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeforebuying[P]>
      : GetScalarType<T[P], AggregateBeforebuying[P]>
  }




  export type beforebuyingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: beforebuyingWhereInput
    orderBy?: beforebuyingOrderByWithAggregationInput | beforebuyingOrderByWithAggregationInput[]
    by: BeforebuyingScalarFieldEnum[] | BeforebuyingScalarFieldEnum
    having?: beforebuyingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeforebuyingCountAggregateInputType | true
    _avg?: BeforebuyingAvgAggregateInputType
    _sum?: BeforebuyingSumAggregateInputType
    _min?: BeforebuyingMinAggregateInputType
    _max?: BeforebuyingMaxAggregateInputType
  }

  export type BeforebuyingGroupByOutputType = {
    id: number
    email: string
    usrcartobj: string | null
    transactionid: string | null
    transactionstatus: string | null
    createdAt: string
    _count: BeforebuyingCountAggregateOutputType | null
    _avg: BeforebuyingAvgAggregateOutputType | null
    _sum: BeforebuyingSumAggregateOutputType | null
    _min: BeforebuyingMinAggregateOutputType | null
    _max: BeforebuyingMaxAggregateOutputType | null
  }

  type GetBeforebuyingGroupByPayload<T extends beforebuyingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeforebuyingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeforebuyingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeforebuyingGroupByOutputType[P]>
            : GetScalarType<T[P], BeforebuyingGroupByOutputType[P]>
        }
      >
    >


  export type beforebuyingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    usrcartobj?: boolean
    transactionid?: boolean
    transactionstatus?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["beforebuying"]>



  export type beforebuyingSelectScalar = {
    id?: boolean
    email?: boolean
    usrcartobj?: boolean
    transactionid?: boolean
    transactionstatus?: boolean
    createdAt?: boolean
  }

  export type beforebuyingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "usrcartobj" | "transactionid" | "transactionstatus" | "createdAt", ExtArgs["result"]["beforebuying"]>

  export type $beforebuyingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "beforebuying"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      usrcartobj: string | null
      transactionid: string | null
      transactionstatus: string | null
      createdAt: string
    }, ExtArgs["result"]["beforebuying"]>
    composites: {}
  }

  type beforebuyingGetPayload<S extends boolean | null | undefined | beforebuyingDefaultArgs> = $Result.GetResult<Prisma.$beforebuyingPayload, S>

  type beforebuyingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<beforebuyingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BeforebuyingCountAggregateInputType | true
    }

  export interface beforebuyingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['beforebuying'], meta: { name: 'beforebuying' } }
    /**
     * Find zero or one Beforebuying that matches the filter.
     * @param {beforebuyingFindUniqueArgs} args - Arguments to find a Beforebuying
     * @example
     * // Get one Beforebuying
     * const beforebuying = await prisma.beforebuying.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends beforebuyingFindUniqueArgs>(args: SelectSubset<T, beforebuyingFindUniqueArgs<ExtArgs>>): Prisma__beforebuyingClient<$Result.GetResult<Prisma.$beforebuyingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Beforebuying that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {beforebuyingFindUniqueOrThrowArgs} args - Arguments to find a Beforebuying
     * @example
     * // Get one Beforebuying
     * const beforebuying = await prisma.beforebuying.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends beforebuyingFindUniqueOrThrowArgs>(args: SelectSubset<T, beforebuyingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__beforebuyingClient<$Result.GetResult<Prisma.$beforebuyingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beforebuying that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beforebuyingFindFirstArgs} args - Arguments to find a Beforebuying
     * @example
     * // Get one Beforebuying
     * const beforebuying = await prisma.beforebuying.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends beforebuyingFindFirstArgs>(args?: SelectSubset<T, beforebuyingFindFirstArgs<ExtArgs>>): Prisma__beforebuyingClient<$Result.GetResult<Prisma.$beforebuyingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beforebuying that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beforebuyingFindFirstOrThrowArgs} args - Arguments to find a Beforebuying
     * @example
     * // Get one Beforebuying
     * const beforebuying = await prisma.beforebuying.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends beforebuyingFindFirstOrThrowArgs>(args?: SelectSubset<T, beforebuyingFindFirstOrThrowArgs<ExtArgs>>): Prisma__beforebuyingClient<$Result.GetResult<Prisma.$beforebuyingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Beforebuyings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beforebuyingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beforebuyings
     * const beforebuyings = await prisma.beforebuying.findMany()
     * 
     * // Get first 10 Beforebuyings
     * const beforebuyings = await prisma.beforebuying.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const beforebuyingWithIdOnly = await prisma.beforebuying.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends beforebuyingFindManyArgs>(args?: SelectSubset<T, beforebuyingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$beforebuyingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Beforebuying.
     * @param {beforebuyingCreateArgs} args - Arguments to create a Beforebuying.
     * @example
     * // Create one Beforebuying
     * const Beforebuying = await prisma.beforebuying.create({
     *   data: {
     *     // ... data to create a Beforebuying
     *   }
     * })
     * 
     */
    create<T extends beforebuyingCreateArgs>(args: SelectSubset<T, beforebuyingCreateArgs<ExtArgs>>): Prisma__beforebuyingClient<$Result.GetResult<Prisma.$beforebuyingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Beforebuyings.
     * @param {beforebuyingCreateManyArgs} args - Arguments to create many Beforebuyings.
     * @example
     * // Create many Beforebuyings
     * const beforebuying = await prisma.beforebuying.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends beforebuyingCreateManyArgs>(args?: SelectSubset<T, beforebuyingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Beforebuying.
     * @param {beforebuyingDeleteArgs} args - Arguments to delete one Beforebuying.
     * @example
     * // Delete one Beforebuying
     * const Beforebuying = await prisma.beforebuying.delete({
     *   where: {
     *     // ... filter to delete one Beforebuying
     *   }
     * })
     * 
     */
    delete<T extends beforebuyingDeleteArgs>(args: SelectSubset<T, beforebuyingDeleteArgs<ExtArgs>>): Prisma__beforebuyingClient<$Result.GetResult<Prisma.$beforebuyingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Beforebuying.
     * @param {beforebuyingUpdateArgs} args - Arguments to update one Beforebuying.
     * @example
     * // Update one Beforebuying
     * const beforebuying = await prisma.beforebuying.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends beforebuyingUpdateArgs>(args: SelectSubset<T, beforebuyingUpdateArgs<ExtArgs>>): Prisma__beforebuyingClient<$Result.GetResult<Prisma.$beforebuyingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Beforebuyings.
     * @param {beforebuyingDeleteManyArgs} args - Arguments to filter Beforebuyings to delete.
     * @example
     * // Delete a few Beforebuyings
     * const { count } = await prisma.beforebuying.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends beforebuyingDeleteManyArgs>(args?: SelectSubset<T, beforebuyingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beforebuyings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beforebuyingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beforebuyings
     * const beforebuying = await prisma.beforebuying.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends beforebuyingUpdateManyArgs>(args: SelectSubset<T, beforebuyingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Beforebuying.
     * @param {beforebuyingUpsertArgs} args - Arguments to update or create a Beforebuying.
     * @example
     * // Update or create a Beforebuying
     * const beforebuying = await prisma.beforebuying.upsert({
     *   create: {
     *     // ... data to create a Beforebuying
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Beforebuying we want to update
     *   }
     * })
     */
    upsert<T extends beforebuyingUpsertArgs>(args: SelectSubset<T, beforebuyingUpsertArgs<ExtArgs>>): Prisma__beforebuyingClient<$Result.GetResult<Prisma.$beforebuyingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Beforebuyings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beforebuyingCountArgs} args - Arguments to filter Beforebuyings to count.
     * @example
     * // Count the number of Beforebuyings
     * const count = await prisma.beforebuying.count({
     *   where: {
     *     // ... the filter for the Beforebuyings we want to count
     *   }
     * })
    **/
    count<T extends beforebuyingCountArgs>(
      args?: Subset<T, beforebuyingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeforebuyingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Beforebuying.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeforebuyingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BeforebuyingAggregateArgs>(args: Subset<T, BeforebuyingAggregateArgs>): Prisma.PrismaPromise<GetBeforebuyingAggregateType<T>>

    /**
     * Group by Beforebuying.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beforebuyingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends beforebuyingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: beforebuyingGroupByArgs['orderBy'] }
        : { orderBy?: beforebuyingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, beforebuyingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeforebuyingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the beforebuying model
   */
  readonly fields: beforebuyingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for beforebuying.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__beforebuyingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the beforebuying model
   */
  interface beforebuyingFieldRefs {
    readonly id: FieldRef<"beforebuying", 'Int'>
    readonly email: FieldRef<"beforebuying", 'String'>
    readonly usrcartobj: FieldRef<"beforebuying", 'String'>
    readonly transactionid: FieldRef<"beforebuying", 'String'>
    readonly transactionstatus: FieldRef<"beforebuying", 'String'>
    readonly createdAt: FieldRef<"beforebuying", 'String'>
  }
    

  // Custom InputTypes
  /**
   * beforebuying findUnique
   */
  export type beforebuyingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beforebuying
     */
    select?: beforebuyingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beforebuying
     */
    omit?: beforebuyingOmit<ExtArgs> | null
    /**
     * Filter, which beforebuying to fetch.
     */
    where: beforebuyingWhereUniqueInput
  }

  /**
   * beforebuying findUniqueOrThrow
   */
  export type beforebuyingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beforebuying
     */
    select?: beforebuyingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beforebuying
     */
    omit?: beforebuyingOmit<ExtArgs> | null
    /**
     * Filter, which beforebuying to fetch.
     */
    where: beforebuyingWhereUniqueInput
  }

  /**
   * beforebuying findFirst
   */
  export type beforebuyingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beforebuying
     */
    select?: beforebuyingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beforebuying
     */
    omit?: beforebuyingOmit<ExtArgs> | null
    /**
     * Filter, which beforebuying to fetch.
     */
    where?: beforebuyingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beforebuyings to fetch.
     */
    orderBy?: beforebuyingOrderByWithRelationInput | beforebuyingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for beforebuyings.
     */
    cursor?: beforebuyingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beforebuyings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beforebuyings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of beforebuyings.
     */
    distinct?: BeforebuyingScalarFieldEnum | BeforebuyingScalarFieldEnum[]
  }

  /**
   * beforebuying findFirstOrThrow
   */
  export type beforebuyingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beforebuying
     */
    select?: beforebuyingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beforebuying
     */
    omit?: beforebuyingOmit<ExtArgs> | null
    /**
     * Filter, which beforebuying to fetch.
     */
    where?: beforebuyingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beforebuyings to fetch.
     */
    orderBy?: beforebuyingOrderByWithRelationInput | beforebuyingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for beforebuyings.
     */
    cursor?: beforebuyingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beforebuyings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beforebuyings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of beforebuyings.
     */
    distinct?: BeforebuyingScalarFieldEnum | BeforebuyingScalarFieldEnum[]
  }

  /**
   * beforebuying findMany
   */
  export type beforebuyingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beforebuying
     */
    select?: beforebuyingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beforebuying
     */
    omit?: beforebuyingOmit<ExtArgs> | null
    /**
     * Filter, which beforebuyings to fetch.
     */
    where?: beforebuyingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beforebuyings to fetch.
     */
    orderBy?: beforebuyingOrderByWithRelationInput | beforebuyingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing beforebuyings.
     */
    cursor?: beforebuyingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beforebuyings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beforebuyings.
     */
    skip?: number
    distinct?: BeforebuyingScalarFieldEnum | BeforebuyingScalarFieldEnum[]
  }

  /**
   * beforebuying create
   */
  export type beforebuyingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beforebuying
     */
    select?: beforebuyingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beforebuying
     */
    omit?: beforebuyingOmit<ExtArgs> | null
    /**
     * The data needed to create a beforebuying.
     */
    data: XOR<beforebuyingCreateInput, beforebuyingUncheckedCreateInput>
  }

  /**
   * beforebuying createMany
   */
  export type beforebuyingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many beforebuyings.
     */
    data: beforebuyingCreateManyInput | beforebuyingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * beforebuying update
   */
  export type beforebuyingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beforebuying
     */
    select?: beforebuyingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beforebuying
     */
    omit?: beforebuyingOmit<ExtArgs> | null
    /**
     * The data needed to update a beforebuying.
     */
    data: XOR<beforebuyingUpdateInput, beforebuyingUncheckedUpdateInput>
    /**
     * Choose, which beforebuying to update.
     */
    where: beforebuyingWhereUniqueInput
  }

  /**
   * beforebuying updateMany
   */
  export type beforebuyingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update beforebuyings.
     */
    data: XOR<beforebuyingUpdateManyMutationInput, beforebuyingUncheckedUpdateManyInput>
    /**
     * Filter which beforebuyings to update
     */
    where?: beforebuyingWhereInput
    /**
     * Limit how many beforebuyings to update.
     */
    limit?: number
  }

  /**
   * beforebuying upsert
   */
  export type beforebuyingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beforebuying
     */
    select?: beforebuyingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beforebuying
     */
    omit?: beforebuyingOmit<ExtArgs> | null
    /**
     * The filter to search for the beforebuying to update in case it exists.
     */
    where: beforebuyingWhereUniqueInput
    /**
     * In case the beforebuying found by the `where` argument doesn't exist, create a new beforebuying with this data.
     */
    create: XOR<beforebuyingCreateInput, beforebuyingUncheckedCreateInput>
    /**
     * In case the beforebuying was found with the provided `where` argument, update it with this data.
     */
    update: XOR<beforebuyingUpdateInput, beforebuyingUncheckedUpdateInput>
  }

  /**
   * beforebuying delete
   */
  export type beforebuyingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beforebuying
     */
    select?: beforebuyingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beforebuying
     */
    omit?: beforebuyingOmit<ExtArgs> | null
    /**
     * Filter which beforebuying to delete.
     */
    where: beforebuyingWhereUniqueInput
  }

  /**
   * beforebuying deleteMany
   */
  export type beforebuyingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which beforebuyings to delete
     */
    where?: beforebuyingWhereInput
    /**
     * Limit how many beforebuyings to delete.
     */
    limit?: number
  }

  /**
   * beforebuying without action
   */
  export type beforebuyingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beforebuying
     */
    select?: beforebuyingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beforebuying
     */
    omit?: beforebuyingOmit<ExtArgs> | null
  }


  /**
   * Model whishlist
   */

  export type AggregateWhishlist = {
    _count: WhishlistCountAggregateOutputType | null
    _min: WhishlistMinAggregateOutputType | null
    _max: WhishlistMaxAggregateOutputType | null
  }

  export type WhishlistMinAggregateOutputType = {
    email: string | null
    listObj: string | null
    category: string | null
  }

  export type WhishlistMaxAggregateOutputType = {
    email: string | null
    listObj: string | null
    category: string | null
  }

  export type WhishlistCountAggregateOutputType = {
    email: number
    listObj: number
    category: number
    _all: number
  }


  export type WhishlistMinAggregateInputType = {
    email?: true
    listObj?: true
    category?: true
  }

  export type WhishlistMaxAggregateInputType = {
    email?: true
    listObj?: true
    category?: true
  }

  export type WhishlistCountAggregateInputType = {
    email?: true
    listObj?: true
    category?: true
    _all?: true
  }

  export type WhishlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which whishlist to aggregate.
     */
    where?: whishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whishlists to fetch.
     */
    orderBy?: whishlistOrderByWithRelationInput | whishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: whishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned whishlists
    **/
    _count?: true | WhishlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhishlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhishlistMaxAggregateInputType
  }

  export type GetWhishlistAggregateType<T extends WhishlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWhishlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhishlist[P]>
      : GetScalarType<T[P], AggregateWhishlist[P]>
  }




  export type whishlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: whishlistWhereInput
    orderBy?: whishlistOrderByWithAggregationInput | whishlistOrderByWithAggregationInput[]
    by: WhishlistScalarFieldEnum[] | WhishlistScalarFieldEnum
    having?: whishlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhishlistCountAggregateInputType | true
    _min?: WhishlistMinAggregateInputType
    _max?: WhishlistMaxAggregateInputType
  }

  export type WhishlistGroupByOutputType = {
    email: string
    listObj: string | null
    category: string | null
    _count: WhishlistCountAggregateOutputType | null
    _min: WhishlistMinAggregateOutputType | null
    _max: WhishlistMaxAggregateOutputType | null
  }

  type GetWhishlistGroupByPayload<T extends whishlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhishlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhishlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhishlistGroupByOutputType[P]>
            : GetScalarType<T[P], WhishlistGroupByOutputType[P]>
        }
      >
    >


  export type whishlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    listObj?: boolean
    category?: boolean
  }, ExtArgs["result"]["whishlist"]>



  export type whishlistSelectScalar = {
    email?: boolean
    listObj?: boolean
    category?: boolean
  }

  export type whishlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "listObj" | "category", ExtArgs["result"]["whishlist"]>

  export type $whishlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "whishlist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      email: string
      listObj: string | null
      category: string | null
    }, ExtArgs["result"]["whishlist"]>
    composites: {}
  }

  type whishlistGetPayload<S extends boolean | null | undefined | whishlistDefaultArgs> = $Result.GetResult<Prisma.$whishlistPayload, S>

  type whishlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<whishlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhishlistCountAggregateInputType | true
    }

  export interface whishlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['whishlist'], meta: { name: 'whishlist' } }
    /**
     * Find zero or one Whishlist that matches the filter.
     * @param {whishlistFindUniqueArgs} args - Arguments to find a Whishlist
     * @example
     * // Get one Whishlist
     * const whishlist = await prisma.whishlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends whishlistFindUniqueArgs>(args: SelectSubset<T, whishlistFindUniqueArgs<ExtArgs>>): Prisma__whishlistClient<$Result.GetResult<Prisma.$whishlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Whishlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {whishlistFindUniqueOrThrowArgs} args - Arguments to find a Whishlist
     * @example
     * // Get one Whishlist
     * const whishlist = await prisma.whishlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends whishlistFindUniqueOrThrowArgs>(args: SelectSubset<T, whishlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__whishlistClient<$Result.GetResult<Prisma.$whishlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whishlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whishlistFindFirstArgs} args - Arguments to find a Whishlist
     * @example
     * // Get one Whishlist
     * const whishlist = await prisma.whishlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends whishlistFindFirstArgs>(args?: SelectSubset<T, whishlistFindFirstArgs<ExtArgs>>): Prisma__whishlistClient<$Result.GetResult<Prisma.$whishlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whishlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whishlistFindFirstOrThrowArgs} args - Arguments to find a Whishlist
     * @example
     * // Get one Whishlist
     * const whishlist = await prisma.whishlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends whishlistFindFirstOrThrowArgs>(args?: SelectSubset<T, whishlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__whishlistClient<$Result.GetResult<Prisma.$whishlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Whishlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whishlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Whishlists
     * const whishlists = await prisma.whishlist.findMany()
     * 
     * // Get first 10 Whishlists
     * const whishlists = await prisma.whishlist.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const whishlistWithEmailOnly = await prisma.whishlist.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends whishlistFindManyArgs>(args?: SelectSubset<T, whishlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Whishlist.
     * @param {whishlistCreateArgs} args - Arguments to create a Whishlist.
     * @example
     * // Create one Whishlist
     * const Whishlist = await prisma.whishlist.create({
     *   data: {
     *     // ... data to create a Whishlist
     *   }
     * })
     * 
     */
    create<T extends whishlistCreateArgs>(args: SelectSubset<T, whishlistCreateArgs<ExtArgs>>): Prisma__whishlistClient<$Result.GetResult<Prisma.$whishlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Whishlists.
     * @param {whishlistCreateManyArgs} args - Arguments to create many Whishlists.
     * @example
     * // Create many Whishlists
     * const whishlist = await prisma.whishlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends whishlistCreateManyArgs>(args?: SelectSubset<T, whishlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Whishlist.
     * @param {whishlistDeleteArgs} args - Arguments to delete one Whishlist.
     * @example
     * // Delete one Whishlist
     * const Whishlist = await prisma.whishlist.delete({
     *   where: {
     *     // ... filter to delete one Whishlist
     *   }
     * })
     * 
     */
    delete<T extends whishlistDeleteArgs>(args: SelectSubset<T, whishlistDeleteArgs<ExtArgs>>): Prisma__whishlistClient<$Result.GetResult<Prisma.$whishlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Whishlist.
     * @param {whishlistUpdateArgs} args - Arguments to update one Whishlist.
     * @example
     * // Update one Whishlist
     * const whishlist = await prisma.whishlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends whishlistUpdateArgs>(args: SelectSubset<T, whishlistUpdateArgs<ExtArgs>>): Prisma__whishlistClient<$Result.GetResult<Prisma.$whishlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Whishlists.
     * @param {whishlistDeleteManyArgs} args - Arguments to filter Whishlists to delete.
     * @example
     * // Delete a few Whishlists
     * const { count } = await prisma.whishlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends whishlistDeleteManyArgs>(args?: SelectSubset<T, whishlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Whishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whishlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Whishlists
     * const whishlist = await prisma.whishlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends whishlistUpdateManyArgs>(args: SelectSubset<T, whishlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Whishlist.
     * @param {whishlistUpsertArgs} args - Arguments to update or create a Whishlist.
     * @example
     * // Update or create a Whishlist
     * const whishlist = await prisma.whishlist.upsert({
     *   create: {
     *     // ... data to create a Whishlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Whishlist we want to update
     *   }
     * })
     */
    upsert<T extends whishlistUpsertArgs>(args: SelectSubset<T, whishlistUpsertArgs<ExtArgs>>): Prisma__whishlistClient<$Result.GetResult<Prisma.$whishlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Whishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whishlistCountArgs} args - Arguments to filter Whishlists to count.
     * @example
     * // Count the number of Whishlists
     * const count = await prisma.whishlist.count({
     *   where: {
     *     // ... the filter for the Whishlists we want to count
     *   }
     * })
    **/
    count<T extends whishlistCountArgs>(
      args?: Subset<T, whishlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhishlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Whishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhishlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhishlistAggregateArgs>(args: Subset<T, WhishlistAggregateArgs>): Prisma.PrismaPromise<GetWhishlistAggregateType<T>>

    /**
     * Group by Whishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whishlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends whishlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: whishlistGroupByArgs['orderBy'] }
        : { orderBy?: whishlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, whishlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhishlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the whishlist model
   */
  readonly fields: whishlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for whishlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__whishlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the whishlist model
   */
  interface whishlistFieldRefs {
    readonly email: FieldRef<"whishlist", 'String'>
    readonly listObj: FieldRef<"whishlist", 'String'>
    readonly category: FieldRef<"whishlist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * whishlist findUnique
   */
  export type whishlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whishlist
     */
    select?: whishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whishlist
     */
    omit?: whishlistOmit<ExtArgs> | null
    /**
     * Filter, which whishlist to fetch.
     */
    where: whishlistWhereUniqueInput
  }

  /**
   * whishlist findUniqueOrThrow
   */
  export type whishlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whishlist
     */
    select?: whishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whishlist
     */
    omit?: whishlistOmit<ExtArgs> | null
    /**
     * Filter, which whishlist to fetch.
     */
    where: whishlistWhereUniqueInput
  }

  /**
   * whishlist findFirst
   */
  export type whishlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whishlist
     */
    select?: whishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whishlist
     */
    omit?: whishlistOmit<ExtArgs> | null
    /**
     * Filter, which whishlist to fetch.
     */
    where?: whishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whishlists to fetch.
     */
    orderBy?: whishlistOrderByWithRelationInput | whishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for whishlists.
     */
    cursor?: whishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of whishlists.
     */
    distinct?: WhishlistScalarFieldEnum | WhishlistScalarFieldEnum[]
  }

  /**
   * whishlist findFirstOrThrow
   */
  export type whishlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whishlist
     */
    select?: whishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whishlist
     */
    omit?: whishlistOmit<ExtArgs> | null
    /**
     * Filter, which whishlist to fetch.
     */
    where?: whishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whishlists to fetch.
     */
    orderBy?: whishlistOrderByWithRelationInput | whishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for whishlists.
     */
    cursor?: whishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of whishlists.
     */
    distinct?: WhishlistScalarFieldEnum | WhishlistScalarFieldEnum[]
  }

  /**
   * whishlist findMany
   */
  export type whishlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whishlist
     */
    select?: whishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whishlist
     */
    omit?: whishlistOmit<ExtArgs> | null
    /**
     * Filter, which whishlists to fetch.
     */
    where?: whishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whishlists to fetch.
     */
    orderBy?: whishlistOrderByWithRelationInput | whishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing whishlists.
     */
    cursor?: whishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whishlists.
     */
    skip?: number
    distinct?: WhishlistScalarFieldEnum | WhishlistScalarFieldEnum[]
  }

  /**
   * whishlist create
   */
  export type whishlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whishlist
     */
    select?: whishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whishlist
     */
    omit?: whishlistOmit<ExtArgs> | null
    /**
     * The data needed to create a whishlist.
     */
    data: XOR<whishlistCreateInput, whishlistUncheckedCreateInput>
  }

  /**
   * whishlist createMany
   */
  export type whishlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many whishlists.
     */
    data: whishlistCreateManyInput | whishlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * whishlist update
   */
  export type whishlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whishlist
     */
    select?: whishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whishlist
     */
    omit?: whishlistOmit<ExtArgs> | null
    /**
     * The data needed to update a whishlist.
     */
    data: XOR<whishlistUpdateInput, whishlistUncheckedUpdateInput>
    /**
     * Choose, which whishlist to update.
     */
    where: whishlistWhereUniqueInput
  }

  /**
   * whishlist updateMany
   */
  export type whishlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update whishlists.
     */
    data: XOR<whishlistUpdateManyMutationInput, whishlistUncheckedUpdateManyInput>
    /**
     * Filter which whishlists to update
     */
    where?: whishlistWhereInput
    /**
     * Limit how many whishlists to update.
     */
    limit?: number
  }

  /**
   * whishlist upsert
   */
  export type whishlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whishlist
     */
    select?: whishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whishlist
     */
    omit?: whishlistOmit<ExtArgs> | null
    /**
     * The filter to search for the whishlist to update in case it exists.
     */
    where: whishlistWhereUniqueInput
    /**
     * In case the whishlist found by the `where` argument doesn't exist, create a new whishlist with this data.
     */
    create: XOR<whishlistCreateInput, whishlistUncheckedCreateInput>
    /**
     * In case the whishlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<whishlistUpdateInput, whishlistUncheckedUpdateInput>
  }

  /**
   * whishlist delete
   */
  export type whishlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whishlist
     */
    select?: whishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whishlist
     */
    omit?: whishlistOmit<ExtArgs> | null
    /**
     * Filter which whishlist to delete.
     */
    where: whishlistWhereUniqueInput
  }

  /**
   * whishlist deleteMany
   */
  export type whishlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which whishlists to delete
     */
    where?: whishlistWhereInput
    /**
     * Limit how many whishlists to delete.
     */
    limit?: number
  }

  /**
   * whishlist without action
   */
  export type whishlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whishlist
     */
    select?: whishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whishlist
     */
    omit?: whishlistOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductsScalarFieldEnum: {
    ProductId: 'ProductId',
    ProductName: 'ProductName',
    ProductBrand: 'ProductBrand',
    ProductQuantity: 'ProductQuantity',
    ProductPrice: 'ProductPrice',
    ProductExpirydate: 'ProductExpirydate',
    ProductImg: 'ProductImg',
    ShopName: 'ShopName',
    UserEmail: 'UserEmail'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    middlename: 'middlename',
    lastname: 'lastname',
    dob: 'dob',
    gender: 'gender',
    email: 'email',
    mobileno: 'mobileno',
    password: 'password',
    createdUser: 'createdUser',
    referenceToken: 'referenceToken',
    userType: 'userType'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const UsercartScalarFieldEnum: {
    email: 'email',
    totalItem: 'totalItem',
    itemsid: 'itemsid'
  };

  export type UsercartScalarFieldEnum = (typeof UsercartScalarFieldEnum)[keyof typeof UsercartScalarFieldEnum]


  export const BeforebuyingScalarFieldEnum: {
    id: 'id',
    email: 'email',
    usrcartobj: 'usrcartobj',
    transactionid: 'transactionid',
    transactionstatus: 'transactionstatus',
    createdAt: 'createdAt'
  };

  export type BeforebuyingScalarFieldEnum = (typeof BeforebuyingScalarFieldEnum)[keyof typeof BeforebuyingScalarFieldEnum]


  export const WhishlistScalarFieldEnum: {
    email: 'email',
    listObj: 'listObj',
    category: 'category'
  };

  export type WhishlistScalarFieldEnum = (typeof WhishlistScalarFieldEnum)[keyof typeof WhishlistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const productsOrderByRelevanceFieldEnum: {
    ProductName: 'ProductName',
    ProductBrand: 'ProductBrand',
    ProductExpirydate: 'ProductExpirydate',
    ProductImg: 'ProductImg',
    ShopName: 'ShopName',
    UserEmail: 'UserEmail'
  };

  export type productsOrderByRelevanceFieldEnum = (typeof productsOrderByRelevanceFieldEnum)[keyof typeof productsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    firstname: 'firstname',
    middlename: 'middlename',
    lastname: 'lastname',
    dob: 'dob',
    gender: 'gender',
    email: 'email',
    mobileno: 'mobileno',
    password: 'password',
    createdUser: 'createdUser',
    referenceToken: 'referenceToken',
    userType: 'userType'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const usercartOrderByRelevanceFieldEnum: {
    email: 'email',
    itemsid: 'itemsid'
  };

  export type usercartOrderByRelevanceFieldEnum = (typeof usercartOrderByRelevanceFieldEnum)[keyof typeof usercartOrderByRelevanceFieldEnum]


  export const beforebuyingOrderByRelevanceFieldEnum: {
    email: 'email',
    usrcartobj: 'usrcartobj',
    transactionid: 'transactionid',
    transactionstatus: 'transactionstatus',
    createdAt: 'createdAt'
  };

  export type beforebuyingOrderByRelevanceFieldEnum = (typeof beforebuyingOrderByRelevanceFieldEnum)[keyof typeof beforebuyingOrderByRelevanceFieldEnum]


  export const whishlistOrderByRelevanceFieldEnum: {
    email: 'email',
    listObj: 'listObj',
    category: 'category'
  };

  export type whishlistOrderByRelevanceFieldEnum = (typeof whishlistOrderByRelevanceFieldEnum)[keyof typeof whishlistOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    ProductId?: IntFilter<"products"> | number
    ProductName?: StringNullableFilter<"products"> | string | null
    ProductBrand?: StringNullableFilter<"products"> | string | null
    ProductQuantity?: IntNullableFilter<"products"> | number | null
    ProductPrice?: IntNullableFilter<"products"> | number | null
    ProductExpirydate?: StringNullableFilter<"products"> | string | null
    ProductImg?: StringNullableFilter<"products"> | string | null
    ShopName?: StringNullableFilter<"products"> | string | null
    UserEmail?: StringNullableFilter<"products"> | string | null
  }

  export type productsOrderByWithRelationInput = {
    ProductId?: SortOrder
    ProductName?: SortOrderInput | SortOrder
    ProductBrand?: SortOrderInput | SortOrder
    ProductQuantity?: SortOrderInput | SortOrder
    ProductPrice?: SortOrderInput | SortOrder
    ProductExpirydate?: SortOrderInput | SortOrder
    ProductImg?: SortOrderInput | SortOrder
    ShopName?: SortOrderInput | SortOrder
    UserEmail?: SortOrderInput | SortOrder
    _relevance?: productsOrderByRelevanceInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    ProductId?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    ProductName?: StringNullableFilter<"products"> | string | null
    ProductBrand?: StringNullableFilter<"products"> | string | null
    ProductQuantity?: IntNullableFilter<"products"> | number | null
    ProductPrice?: IntNullableFilter<"products"> | number | null
    ProductExpirydate?: StringNullableFilter<"products"> | string | null
    ProductImg?: StringNullableFilter<"products"> | string | null
    ShopName?: StringNullableFilter<"products"> | string | null
    UserEmail?: StringNullableFilter<"products"> | string | null
  }, "ProductId" | "ProductId">

  export type productsOrderByWithAggregationInput = {
    ProductId?: SortOrder
    ProductName?: SortOrderInput | SortOrder
    ProductBrand?: SortOrderInput | SortOrder
    ProductQuantity?: SortOrderInput | SortOrder
    ProductPrice?: SortOrderInput | SortOrder
    ProductExpirydate?: SortOrderInput | SortOrder
    ProductImg?: SortOrderInput | SortOrder
    ShopName?: SortOrderInput | SortOrder
    UserEmail?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    ProductId?: IntWithAggregatesFilter<"products"> | number
    ProductName?: StringNullableWithAggregatesFilter<"products"> | string | null
    ProductBrand?: StringNullableWithAggregatesFilter<"products"> | string | null
    ProductQuantity?: IntNullableWithAggregatesFilter<"products"> | number | null
    ProductPrice?: IntNullableWithAggregatesFilter<"products"> | number | null
    ProductExpirydate?: StringNullableWithAggregatesFilter<"products"> | string | null
    ProductImg?: StringNullableWithAggregatesFilter<"products"> | string | null
    ShopName?: StringNullableWithAggregatesFilter<"products"> | string | null
    UserEmail?: StringNullableWithAggregatesFilter<"products"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    firstname?: StringFilter<"users"> | string
    middlename?: StringNullableFilter<"users"> | string | null
    lastname?: StringFilter<"users"> | string
    dob?: StringFilter<"users"> | string
    gender?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    mobileno?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    createdUser?: StringFilter<"users"> | string
    referenceToken?: StringFilter<"users"> | string
    userType?: StringFilter<"users"> | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
    lastname?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    mobileno?: SortOrder
    password?: SortOrder
    createdUser?: SortOrder
    referenceToken?: SortOrder
    userType?: SortOrder
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    referenceToken?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    firstname?: StringFilter<"users"> | string
    middlename?: StringNullableFilter<"users"> | string | null
    lastname?: StringFilter<"users"> | string
    dob?: StringFilter<"users"> | string
    gender?: StringFilter<"users"> | string
    mobileno?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    createdUser?: StringFilter<"users"> | string
    userType?: StringFilter<"users"> | string
  }, "id" | "id" | "email" | "referenceToken">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
    lastname?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    mobileno?: SortOrder
    password?: SortOrder
    createdUser?: SortOrder
    referenceToken?: SortOrder
    userType?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    firstname?: StringWithAggregatesFilter<"users"> | string
    middlename?: StringNullableWithAggregatesFilter<"users"> | string | null
    lastname?: StringWithAggregatesFilter<"users"> | string
    dob?: StringWithAggregatesFilter<"users"> | string
    gender?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    mobileno?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    createdUser?: StringWithAggregatesFilter<"users"> | string
    referenceToken?: StringWithAggregatesFilter<"users"> | string
    userType?: StringWithAggregatesFilter<"users"> | string
  }

  export type usercartWhereInput = {
    AND?: usercartWhereInput | usercartWhereInput[]
    OR?: usercartWhereInput[]
    NOT?: usercartWhereInput | usercartWhereInput[]
    email?: StringFilter<"usercart"> | string
    totalItem?: IntNullableFilter<"usercart"> | number | null
    itemsid?: StringNullableFilter<"usercart"> | string | null
  }

  export type usercartOrderByWithRelationInput = {
    email?: SortOrder
    totalItem?: SortOrderInput | SortOrder
    itemsid?: SortOrderInput | SortOrder
    _relevance?: usercartOrderByRelevanceInput
  }

  export type usercartWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: usercartWhereInput | usercartWhereInput[]
    OR?: usercartWhereInput[]
    NOT?: usercartWhereInput | usercartWhereInput[]
    totalItem?: IntNullableFilter<"usercart"> | number | null
    itemsid?: StringNullableFilter<"usercart"> | string | null
  }, "email" | "email">

  export type usercartOrderByWithAggregationInput = {
    email?: SortOrder
    totalItem?: SortOrderInput | SortOrder
    itemsid?: SortOrderInput | SortOrder
    _count?: usercartCountOrderByAggregateInput
    _avg?: usercartAvgOrderByAggregateInput
    _max?: usercartMaxOrderByAggregateInput
    _min?: usercartMinOrderByAggregateInput
    _sum?: usercartSumOrderByAggregateInput
  }

  export type usercartScalarWhereWithAggregatesInput = {
    AND?: usercartScalarWhereWithAggregatesInput | usercartScalarWhereWithAggregatesInput[]
    OR?: usercartScalarWhereWithAggregatesInput[]
    NOT?: usercartScalarWhereWithAggregatesInput | usercartScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"usercart"> | string
    totalItem?: IntNullableWithAggregatesFilter<"usercart"> | number | null
    itemsid?: StringNullableWithAggregatesFilter<"usercart"> | string | null
  }

  export type beforebuyingWhereInput = {
    AND?: beforebuyingWhereInput | beforebuyingWhereInput[]
    OR?: beforebuyingWhereInput[]
    NOT?: beforebuyingWhereInput | beforebuyingWhereInput[]
    id?: IntFilter<"beforebuying"> | number
    email?: StringFilter<"beforebuying"> | string
    usrcartobj?: StringNullableFilter<"beforebuying"> | string | null
    transactionid?: StringNullableFilter<"beforebuying"> | string | null
    transactionstatus?: StringNullableFilter<"beforebuying"> | string | null
    createdAt?: StringFilter<"beforebuying"> | string
  }

  export type beforebuyingOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    usrcartobj?: SortOrderInput | SortOrder
    transactionid?: SortOrderInput | SortOrder
    transactionstatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _relevance?: beforebuyingOrderByRelevanceInput
  }

  export type beforebuyingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    transactionid?: string
    AND?: beforebuyingWhereInput | beforebuyingWhereInput[]
    OR?: beforebuyingWhereInput[]
    NOT?: beforebuyingWhereInput | beforebuyingWhereInput[]
    email?: StringFilter<"beforebuying"> | string
    usrcartobj?: StringNullableFilter<"beforebuying"> | string | null
    transactionstatus?: StringNullableFilter<"beforebuying"> | string | null
    createdAt?: StringFilter<"beforebuying"> | string
  }, "id" | "transactionid">

  export type beforebuyingOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    usrcartobj?: SortOrderInput | SortOrder
    transactionid?: SortOrderInput | SortOrder
    transactionstatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: beforebuyingCountOrderByAggregateInput
    _avg?: beforebuyingAvgOrderByAggregateInput
    _max?: beforebuyingMaxOrderByAggregateInput
    _min?: beforebuyingMinOrderByAggregateInput
    _sum?: beforebuyingSumOrderByAggregateInput
  }

  export type beforebuyingScalarWhereWithAggregatesInput = {
    AND?: beforebuyingScalarWhereWithAggregatesInput | beforebuyingScalarWhereWithAggregatesInput[]
    OR?: beforebuyingScalarWhereWithAggregatesInput[]
    NOT?: beforebuyingScalarWhereWithAggregatesInput | beforebuyingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"beforebuying"> | number
    email?: StringWithAggregatesFilter<"beforebuying"> | string
    usrcartobj?: StringNullableWithAggregatesFilter<"beforebuying"> | string | null
    transactionid?: StringNullableWithAggregatesFilter<"beforebuying"> | string | null
    transactionstatus?: StringNullableWithAggregatesFilter<"beforebuying"> | string | null
    createdAt?: StringWithAggregatesFilter<"beforebuying"> | string
  }

  export type whishlistWhereInput = {
    AND?: whishlistWhereInput | whishlistWhereInput[]
    OR?: whishlistWhereInput[]
    NOT?: whishlistWhereInput | whishlistWhereInput[]
    email?: StringFilter<"whishlist"> | string
    listObj?: StringNullableFilter<"whishlist"> | string | null
    category?: StringNullableFilter<"whishlist"> | string | null
  }

  export type whishlistOrderByWithRelationInput = {
    email?: SortOrder
    listObj?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    _relevance?: whishlistOrderByRelevanceInput
  }

  export type whishlistWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: whishlistWhereInput | whishlistWhereInput[]
    OR?: whishlistWhereInput[]
    NOT?: whishlistWhereInput | whishlistWhereInput[]
    listObj?: StringNullableFilter<"whishlist"> | string | null
    category?: StringNullableFilter<"whishlist"> | string | null
  }, "email" | "email">

  export type whishlistOrderByWithAggregationInput = {
    email?: SortOrder
    listObj?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    _count?: whishlistCountOrderByAggregateInput
    _max?: whishlistMaxOrderByAggregateInput
    _min?: whishlistMinOrderByAggregateInput
  }

  export type whishlistScalarWhereWithAggregatesInput = {
    AND?: whishlistScalarWhereWithAggregatesInput | whishlistScalarWhereWithAggregatesInput[]
    OR?: whishlistScalarWhereWithAggregatesInput[]
    NOT?: whishlistScalarWhereWithAggregatesInput | whishlistScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"whishlist"> | string
    listObj?: StringNullableWithAggregatesFilter<"whishlist"> | string | null
    category?: StringNullableWithAggregatesFilter<"whishlist"> | string | null
  }

  export type productsCreateInput = {
    ProductName?: string | null
    ProductBrand?: string | null
    ProductQuantity?: number | null
    ProductPrice?: number | null
    ProductExpirydate?: string | null
    ProductImg?: string | null
    ShopName?: string | null
    UserEmail?: string | null
  }

  export type productsUncheckedCreateInput = {
    ProductId?: number
    ProductName?: string | null
    ProductBrand?: string | null
    ProductQuantity?: number | null
    ProductPrice?: number | null
    ProductExpirydate?: string | null
    ProductImg?: string | null
    ShopName?: string | null
    UserEmail?: string | null
  }

  export type productsUpdateInput = {
    ProductName?: NullableStringFieldUpdateOperationsInput | string | null
    ProductBrand?: NullableStringFieldUpdateOperationsInput | string | null
    ProductQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    ProductPrice?: NullableIntFieldUpdateOperationsInput | number | null
    ProductExpirydate?: NullableStringFieldUpdateOperationsInput | string | null
    ProductImg?: NullableStringFieldUpdateOperationsInput | string | null
    ShopName?: NullableStringFieldUpdateOperationsInput | string | null
    UserEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsUncheckedUpdateInput = {
    ProductId?: IntFieldUpdateOperationsInput | number
    ProductName?: NullableStringFieldUpdateOperationsInput | string | null
    ProductBrand?: NullableStringFieldUpdateOperationsInput | string | null
    ProductQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    ProductPrice?: NullableIntFieldUpdateOperationsInput | number | null
    ProductExpirydate?: NullableStringFieldUpdateOperationsInput | string | null
    ProductImg?: NullableStringFieldUpdateOperationsInput | string | null
    ShopName?: NullableStringFieldUpdateOperationsInput | string | null
    UserEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsCreateManyInput = {
    ProductId?: number
    ProductName?: string | null
    ProductBrand?: string | null
    ProductQuantity?: number | null
    ProductPrice?: number | null
    ProductExpirydate?: string | null
    ProductImg?: string | null
    ShopName?: string | null
    UserEmail?: string | null
  }

  export type productsUpdateManyMutationInput = {
    ProductName?: NullableStringFieldUpdateOperationsInput | string | null
    ProductBrand?: NullableStringFieldUpdateOperationsInput | string | null
    ProductQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    ProductPrice?: NullableIntFieldUpdateOperationsInput | number | null
    ProductExpirydate?: NullableStringFieldUpdateOperationsInput | string | null
    ProductImg?: NullableStringFieldUpdateOperationsInput | string | null
    ShopName?: NullableStringFieldUpdateOperationsInput | string | null
    UserEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    ProductId?: IntFieldUpdateOperationsInput | number
    ProductName?: NullableStringFieldUpdateOperationsInput | string | null
    ProductBrand?: NullableStringFieldUpdateOperationsInput | string | null
    ProductQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    ProductPrice?: NullableIntFieldUpdateOperationsInput | number | null
    ProductExpirydate?: NullableStringFieldUpdateOperationsInput | string | null
    ProductImg?: NullableStringFieldUpdateOperationsInput | string | null
    ShopName?: NullableStringFieldUpdateOperationsInput | string | null
    UserEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    firstname: string
    middlename?: string | null
    lastname: string
    dob: string
    gender: string
    email: string
    mobileno: string
    password: string
    createdUser: string
    referenceToken: string
    userType: string
  }

  export type usersUncheckedCreateInput = {
    id?: number
    firstname: string
    middlename?: string | null
    lastname: string
    dob: string
    gender: string
    email: string
    mobileno: string
    password: string
    createdUser: string
    referenceToken: string
    userType: string
  }

  export type usersUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdUser?: StringFieldUpdateOperationsInput | string
    referenceToken?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdUser?: StringFieldUpdateOperationsInput | string
    referenceToken?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyInput = {
    id?: number
    firstname: string
    middlename?: string | null
    lastname: string
    dob: string
    gender: string
    email: string
    mobileno: string
    password: string
    createdUser: string
    referenceToken: string
    userType: string
  }

  export type usersUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdUser?: StringFieldUpdateOperationsInput | string
    referenceToken?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdUser?: StringFieldUpdateOperationsInput | string
    referenceToken?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
  }

  export type usercartCreateInput = {
    email: string
    totalItem?: number | null
    itemsid?: string | null
  }

  export type usercartUncheckedCreateInput = {
    email: string
    totalItem?: number | null
    itemsid?: string | null
  }

  export type usercartUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    totalItem?: NullableIntFieldUpdateOperationsInput | number | null
    itemsid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usercartUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    totalItem?: NullableIntFieldUpdateOperationsInput | number | null
    itemsid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usercartCreateManyInput = {
    email: string
    totalItem?: number | null
    itemsid?: string | null
  }

  export type usercartUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    totalItem?: NullableIntFieldUpdateOperationsInput | number | null
    itemsid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usercartUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    totalItem?: NullableIntFieldUpdateOperationsInput | number | null
    itemsid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type beforebuyingCreateInput = {
    email: string
    usrcartobj?: string | null
    transactionid?: string | null
    transactionstatus?: string | null
    createdAt: string
  }

  export type beforebuyingUncheckedCreateInput = {
    id?: number
    email: string
    usrcartobj?: string | null
    transactionid?: string | null
    transactionstatus?: string | null
    createdAt: string
  }

  export type beforebuyingUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    usrcartobj?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionstatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type beforebuyingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    usrcartobj?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionstatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type beforebuyingCreateManyInput = {
    id?: number
    email: string
    usrcartobj?: string | null
    transactionid?: string | null
    transactionstatus?: string | null
    createdAt: string
  }

  export type beforebuyingUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    usrcartobj?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionstatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type beforebuyingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    usrcartobj?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionstatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type whishlistCreateInput = {
    email: string
    listObj?: string | null
    category?: string | null
  }

  export type whishlistUncheckedCreateInput = {
    email: string
    listObj?: string | null
    category?: string | null
  }

  export type whishlistUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    listObj?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type whishlistUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    listObj?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type whishlistCreateManyInput = {
    email: string
    listObj?: string | null
    category?: string | null
  }

  export type whishlistUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    listObj?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type whishlistUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    listObj?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type productsOrderByRelevanceInput = {
    fields: productsOrderByRelevanceFieldEnum | productsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productsCountOrderByAggregateInput = {
    ProductId?: SortOrder
    ProductName?: SortOrder
    ProductBrand?: SortOrder
    ProductQuantity?: SortOrder
    ProductPrice?: SortOrder
    ProductExpirydate?: SortOrder
    ProductImg?: SortOrder
    ShopName?: SortOrder
    UserEmail?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    ProductId?: SortOrder
    ProductQuantity?: SortOrder
    ProductPrice?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    ProductId?: SortOrder
    ProductName?: SortOrder
    ProductBrand?: SortOrder
    ProductQuantity?: SortOrder
    ProductPrice?: SortOrder
    ProductExpirydate?: SortOrder
    ProductImg?: SortOrder
    ShopName?: SortOrder
    UserEmail?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    ProductId?: SortOrder
    ProductName?: SortOrder
    ProductBrand?: SortOrder
    ProductQuantity?: SortOrder
    ProductPrice?: SortOrder
    ProductExpirydate?: SortOrder
    ProductImg?: SortOrder
    ShopName?: SortOrder
    UserEmail?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    ProductId?: SortOrder
    ProductQuantity?: SortOrder
    ProductPrice?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    mobileno?: SortOrder
    password?: SortOrder
    createdUser?: SortOrder
    referenceToken?: SortOrder
    userType?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    mobileno?: SortOrder
    password?: SortOrder
    createdUser?: SortOrder
    referenceToken?: SortOrder
    userType?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    mobileno?: SortOrder
    password?: SortOrder
    createdUser?: SortOrder
    referenceToken?: SortOrder
    userType?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type usercartOrderByRelevanceInput = {
    fields: usercartOrderByRelevanceFieldEnum | usercartOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usercartCountOrderByAggregateInput = {
    email?: SortOrder
    totalItem?: SortOrder
    itemsid?: SortOrder
  }

  export type usercartAvgOrderByAggregateInput = {
    totalItem?: SortOrder
  }

  export type usercartMaxOrderByAggregateInput = {
    email?: SortOrder
    totalItem?: SortOrder
    itemsid?: SortOrder
  }

  export type usercartMinOrderByAggregateInput = {
    email?: SortOrder
    totalItem?: SortOrder
    itemsid?: SortOrder
  }

  export type usercartSumOrderByAggregateInput = {
    totalItem?: SortOrder
  }

  export type beforebuyingOrderByRelevanceInput = {
    fields: beforebuyingOrderByRelevanceFieldEnum | beforebuyingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type beforebuyingCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    usrcartobj?: SortOrder
    transactionid?: SortOrder
    transactionstatus?: SortOrder
    createdAt?: SortOrder
  }

  export type beforebuyingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type beforebuyingMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    usrcartobj?: SortOrder
    transactionid?: SortOrder
    transactionstatus?: SortOrder
    createdAt?: SortOrder
  }

  export type beforebuyingMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    usrcartobj?: SortOrder
    transactionid?: SortOrder
    transactionstatus?: SortOrder
    createdAt?: SortOrder
  }

  export type beforebuyingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type whishlistOrderByRelevanceInput = {
    fields: whishlistOrderByRelevanceFieldEnum | whishlistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type whishlistCountOrderByAggregateInput = {
    email?: SortOrder
    listObj?: SortOrder
    category?: SortOrder
  }

  export type whishlistMaxOrderByAggregateInput = {
    email?: SortOrder
    listObj?: SortOrder
    category?: SortOrder
  }

  export type whishlistMinOrderByAggregateInput = {
    email?: SortOrder
    listObj?: SortOrder
    category?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}