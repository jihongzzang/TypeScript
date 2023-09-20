const isRejected = (
  input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => {
  return input.status === 'rejected';
};

const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => {
  return input.status === 'fulfilled';
};

//Promise => Pending => Settled(Resolved, Rejected)

const promises = await Promise.allSettled([
  Promise.resolve('a'),
  Promise.resolve('b'),
]);

const errors = promises.filter(isRejected);
// const errors = promises.filter(promise => promise.status === 'rejected');

export {};
