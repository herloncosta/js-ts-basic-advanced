function sum(x = 0, y = 0) {
  if (!x || !y) throw Error("x e y devem ser passados")
  return x + y
};

module.exports = sum
