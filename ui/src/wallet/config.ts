import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { base } from 'viem/chains';
export const wagmiConfig = getDefaultConfig({
  appName: 'Afro Invest',
  projectId: 'e1ad6b29966668e05afe4808a0a30832',
  chains: [base],
});
