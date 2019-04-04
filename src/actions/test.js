export const RECEIVE_TEST = "RECEIVE_TEST";

export function test(id) {
  return {
    type: RECEIVE_TEST,
    id
  };
}
