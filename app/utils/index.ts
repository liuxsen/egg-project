export const firstUpperCase = (str) => {
  return str.replace(/^\S/, (s) => {
    return s.toUpperCase();
  });
};
