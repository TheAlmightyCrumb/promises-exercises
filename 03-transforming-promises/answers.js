/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */
    promise.then((result) => {
      const value = transformer(result);
      if (value) {
        resolve(value);
      } else {
        reject(value);
      }
    }).catch((e) => reject(e));
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  const onFulfilled = (value) => { 
    if (typeof value === 'string') {
      let numeric = parseInt(value);
      if (isNaN(numeric)) {
          throw `Cannot convert '${value}' to a number!`;
      }
      return numeric * numeric;
    }
    if (typeof value === 'number') {
      return value * value;
    }
  }
  return numberPromise.then(onFulfilled);
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise)
    .catch(() => 0);
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then((res) => {throw res}, (res) => {return res});
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};

// function squarePromise(numberPromise){
//   return numberPromise
//     .then(function (res){
//       return new Promise((resolve,reject)=>{
//         if (!isNaN(res)) {
//           resolve(res*res)
//         } else {
//           reject (`Cannot convert '${res}' to a number!`)
//         }
// }
