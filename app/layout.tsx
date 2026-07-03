import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Argosy — 暮らしの道具ログ',
  description:
    'Argosy is an in-house content publishing and analytics platform. 生活家電・便利グッズを実用目線で紹介するメディア運営基盤です。',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
