/** Index types */

type ServerResponse<T> = {
  [K in 'message' | 'error']: T;
};

const response: ServerResponse<string> = {
  message: '',
  error: '',
  payload: ''
};

/** Mapped types */

enum List { ONE = 1, TWO = 2 };

type myType = keyof typeof List;

const myObject1: { [K in keyof typeof List]: string } = {
  ONE: '',
  TWO: ''
  THREE: '' // <-- error
};


// create read only type 

interface Data {
  type: string;
  length: number;
}

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

const readonlyData: ReadOnly<Data> = {
  type: '',
  length: 0
}
readonlyData.length = 10;
