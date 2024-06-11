export const generateId = (): number => {
  return Date.now() + Math.floor(Math.random())
}
