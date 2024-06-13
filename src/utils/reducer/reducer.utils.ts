import { AnyAction } from 'redux';

// Matchable
// function is not object ? it extend the ability to add more method
// action type gard
// Discriminated Unions
// type predicate functions help to narrow down the type of a variable
// intersection types = joining other types together by using &= ampersand
// return type =
//  type MyFunc = () => string
// type MyReturn = ReturnType<MyFunc>

type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['type'];
  match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC,
): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string }>(
  actionCreator: AC,
): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

////
export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};
export function CreateAction<T extends string, P>(
  type: T,
  payload: P,
): ActionWithPayload<T, P>;

export function CreateAction<T extends string>(type: T, payload: void): Action<T>;
export function CreateAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
