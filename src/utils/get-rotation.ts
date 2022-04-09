const getRotation = (range = 1, min = 0) => {
  // Calculate location in one direction
  const rotation = Math.random() * range + min;

  // Randomize direction (left or right)
  return Math.random() >= 0.5 ? rotation : -rotation;
};

export default getRotation;
