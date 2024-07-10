import { useState, useEffect } from 'react';
import localforage from 'localforage';

interface User {
  username: string;
  password: string;
  favorites: string[]; 
  addFavorite?: (movieId: string) => Promise<void>;
  removeFavorite?: (movieId: string) => Promise<void>;
}

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  const attachMethods = (user: User): User => {
    return {
      ...user,
      addFavorite: async (movieId: string) => {
        const updatedUser = { ...user, favorites: [...user.favorites, movieId] };
        setUser(attachMethods(updatedUser));
        await localforage.setItem('user', updatedUser);
      },
      removeFavorite: async (movieId: string) => {
        const updatedUser = { ...user, favorites: user.favorites.filter(id => id !== movieId) };
        setUser(attachMethods(updatedUser));
        await localforage.setItem('user', updatedUser);
      }
    };
  };

  useEffect(() => {
    const fetchUser = async () => {
      const savedUser = await localforage.getItem<User>('user');
      if (savedUser) {
        setUser(attachMethods(savedUser));
      }
    };
    fetchUser();
  }, []);

  const register = async (username: string, password: string) => {
    const newUser: User = { username, password, favorites: [] };
    await localforage.setItem('user', newUser);
    setUser(attachMethods(newUser));
  };

  const login = async (username: string, password: string): Promise<boolean> => {
    const savedUser = await localforage.getItem<User>('user');
    if (savedUser && savedUser.username === username && savedUser.password === password) {
      setUser(attachMethods(savedUser));
      return true;
    }
    return false;
  };

  const logout = async () => {
    console.log('Logging out user:', user);
    setUser(null);
    await localforage.removeItem('user');
  };

  return { user, register, login, logout};
};

export default useAuth;
