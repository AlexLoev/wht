const brain = require("brain.js");
const assert = require('assert');
// provide optional config object (or undefined). Defaults shown.
const config = {
    binaryThresh: 0.5, // ¯\_(ツ)_/¯
    hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
  };
  
  // create a simple feed forward neural network with backpropagation
  const net = new brain.NeuralNetwork(config);

  const a = character(
    '.#####.' +
    '#.....#' +
    '#.....#' +
    '#######' +
    '#.....#' +
    '#.....#' +
    '#.....#'
  );
  const b = character(
    '######.' +
    '#.....#' +
    '#.....#' +
    '######.' +
    '#.....#' +
    '#.....#' +
    '######.'
  );
  const c = character(
    '#######' +
    '#......' +
    '#......' +
    '#......' +
    '#......' +
    '#......' +
    '#######'
  );
  
  /**
   * Learn the letters A through C.
   */
  net.train([
    { input: a, output: { a: 1 } },
    { input: b, output: { b: 1 } },
    { input: c, output: { c: 1 } }
  ], {
    log: detail => console.log(detail)
  });
  
  /**
   * Predict the letter A, even with a pixel off.
   */
  const result = brain.likely(character(
    '.#####.' +
    '#.....#' +
    '#.....#' +
    '###.###' +
    '#.....#' +
    '#.....#' +
    '#.....#'
  ), net);
  
  console.log(result); // 'a'
  assert(result === 'a');
  
  
  
  
  /**
   * Turn the # into 1s and . into 0s. for whole string
   * @param string
   * @returns {Array}
   */
  function character(string) {
    return string
      .trim()
      .split('')
      .map(integer);
  }
  
  /**
   * Return 0 or 1 for '#'
   * @param character
   * @returns {number}
   */
  function integer(character) {
    if ('#' === character) return 1;
    return 0;
  }