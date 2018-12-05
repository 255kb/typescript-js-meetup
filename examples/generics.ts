/** Generics **/

function filterArray<T>(array: (T|undefined)[]): T[] {
  return array.filter(value => value !== undefined) as T[]; // we need to cast, typescript doesn't infer the filter...
}

/** Generics: extends usage */

type Animal = {
  age: number;
};

type Human = Animal & {
  name: string
};

function getAnimalAge<T extends Animal>(animal: T) {
  return animal.age;
}

const human: Human = {
  name: 'john',
  age: 25
};

getAnimalAge(human);


/** Generics: structures **/

type Either<L, R> = {
  left: L,
  right: R
};

// extracted from typescript/lib/lib.es2015.collection.d.ts
interface Map<K, V> {
  clear(): void;
  delete(key: K): boolean;
  forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
  readonly size: number;
}


