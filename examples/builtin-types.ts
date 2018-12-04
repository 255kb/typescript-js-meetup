/** Partial **/


interface IState {
  foo: string;
  bar: string;
}

let state: IState = {
  foo: 'foo',
  bar: 'bar'
};

function updateState(partialState: Partial<IState>) {
  state = {
    ...state,
    ...partialState
  }
}

updateState({});
updateState({foo: 'updated-foo'});
updateState({bar: 'updated-bar'});
updateState({test: 'test'});


/** Readonly **/

const readonlyState: Readonly<IState> = {
  foo: 'foo',
  bar: 'bar'
};

readonlyState.bar = 'updated-bar';

/** Pick **/

const pickedState: Pick<IState, 'foo'> = {
  foo: 'foo',
  bar: 'bar'
};

/** Record **/

const recordState: Record<'foo'|'bar', string> = {
  foo: 'foo',
  bar: 'bar',
  test: 'test'
};
