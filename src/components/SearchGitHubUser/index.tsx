'use client';

import { SearchBar } from '@/components/SearchBar';
import { getUserProfile } from '@/services/users/getUserProfile';
import { useState } from 'react';

export const SearchGitHubUser = () => {
  const [currentProfile, setCurrentProfile] = useState('');

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      const response = await getUserProfile(currentProfile);
      console.log(response);
    }
  };

  return (
    <SearchBar
      value={currentProfile}
      placeholder="Pesquisar usuário"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setCurrentProfile(e.target.value)
      }
      onKeyDown={handleKeyDown}
    />
  );
};