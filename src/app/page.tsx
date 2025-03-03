'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import Header from '@/components/ui/header';
import HeroSection from '@/components/ui/hero-section';
import SplashCursor from '@/components/blocks/Animations/SplashCursor/SplashCursor';
import Dock from '@/components/blocks/Components/Dock/Dock';
import { VscHome, VscFileCode, VscSettingsGear } from 'react-icons/vsc';
import { SettingsPopover } from '@/components/setting-popover/SettingsPopover';
import { MacFinderDemo } from '@/components/mac-dialog-demo/MacDialogDemo';
import InfoComponent from '@/components/info-component';

export default function Home() {
  const { animationsEnabled } = useTheme();

  const items = [
    { icon: <VscHome size={18} />, label: 'Home' },
    { icon: <MacFinderDemo />, label: 'Projects' },
    { icon: <InfoComponent />, label: 'Profile' },
    { icon: <SettingsPopover />, label: 'Settings' },
  ];

  return (
    <main className={'rounded-lg overflow-hidden w-full h-full relative'}>
      {animationsEnabled && <SplashCursor />}
      <Header />
      <HeroSection />
      <Dock
        items={items}
        panelHeight={30}
        baseItemSize={50}
        magnification={70}
      />

    </main>
  );
}
