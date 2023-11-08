export const objectIsEmptyCheck = (
  obj: Record<string, any>,
  targetValues: string[]
): boolean => {
  for (const key of targetValues) {
    if (!(key in obj) || obj[key] === '') {
      return false;
    }
  }
  return true;
};
