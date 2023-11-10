export const authStatus = (): {
  getStatus: () => boolean;
  setStatus: (status: boolean) => void;
} => {
  const getStatus = (): boolean => {
    return localStorage.getItem('auth') === 'true';
  };

  const setStatus = (status: boolean): void => {
    localStorage.setItem('auth', status ? 'true' : 'false');
  };

  return { getStatus, setStatus };
};
