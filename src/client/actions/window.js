export const RESIZE = 'RESIZE';

export function resize(size) {
  return {
    type: RESIZE,
    size,
  };
}
