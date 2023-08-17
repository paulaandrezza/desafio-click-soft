import styled from 'styled-components';
import { theme } from './theme';

export const Title = styled.h1`
  color: ${theme.colors['text-primary']};
  font-size: ${theme.fontSizes.title};
  font-weight: ${theme.fontWeights.normal};
`;

interface TextProps {
  $textSmall?: boolean;
}

export const Text = styled.p<TextProps>`
  color: ${theme.colors['text-secondary']};
  font-size: ${({ $textSmall }) =>
    $textSmall ? theme.fontSizes.small : theme.fontSizes.normal};
  font-weight: ${theme.fontWeights.normal};
`;

export const Button = styled.a`
  background: ${theme.colors['button-color']};
  padding: 0.625rem 0.75rem;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.button};
  border: none;
  color: ${theme.colors['text-button']};
  font-weight: ${theme.fontWeights.subtitle};

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${theme.colors['button-hover']};
  }

  &:active {
    background-color: ${theme.colors['button-active']};
  }
`;

interface ChipProps {
  $language: string;
}

export const Chip = styled.div<ChipProps>`
  background: ${({ $language }) =>
    theme.languageColor[$language] || theme.colors['button-color']};
  padding: 0.625rem 0.75rem;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.button};
  border: none;
  color: ${theme.colors['text-button']};
  font-weight: ${theme.fontWeights.subtitle};
`;

export const AnchorContainer = styled.a`
  background-color: ${theme.colors['bg-primary']};
  border-radius: ${theme.borderRadius.card};
  width: 100%;
  height: 100%;
  padding: 16px 32px;

  display: flex;
  gap: 32px;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${theme.colors['button-hover']};
  }

  &:active {
    background-color: ${theme.colors['button-active']};
  }
`;

export const BoxContainer = styled.div`
  background-color: ${theme.colors['bg-primary']};
  border-radius: ${theme.borderRadius.card};
  width: 100%;
  height: 100%;
  padding: 16px 32px;

  display: flex;
  gap: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

interface WrapperRowProps {
  $biggerGap?: boolean;
}

export const WrapperRow = styled.div<WrapperRowProps>`
  display: flex;
  align-items: center;
  gap: ${({ $biggerGap }) => ($biggerGap ? '64px' : '4px')};
  color: ${theme.colors['text-secondary']};
`;
