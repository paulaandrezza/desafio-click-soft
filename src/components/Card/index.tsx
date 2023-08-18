'use client';

import {
  AnchorContainer,
  Text,
  Title,
  Wrapper,
  WrapperRow,
} from '@/app/theme/sharedStyles';
import { IUser } from '@/services/interfaces/User';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CiLocationOn } from 'react-icons/ci';

interface CardProps {
  userInfo: IUser | null | undefined;
}

export const Card = ({ userInfo }: CardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    const username = userInfo?.login;
    router.push(`/user/${username}`);
  };

  if (!userInfo) {
    return null;
  }

  return (
    <AnchorContainer onClick={handleCardClick}>
      <Image
        src={userInfo.avatar_url}
        width={100}
        height={100}
        alt="Picture of the author"
        style={{ borderRadius: '100%' }}
      />
      <Wrapper>
        <WrapperRow $biggerGap>
          <Title>{userInfo.name}</Title>
          <Text>{userInfo.login}</Text>
        </WrapperRow>
        <Text>{userInfo.bio}</Text>
        <WrapperRow>
          <CiLocationOn />
          <Text $textSmall>{userInfo.location}</Text>
        </WrapperRow>
      </Wrapper>
    </AnchorContainer>
  );
};
