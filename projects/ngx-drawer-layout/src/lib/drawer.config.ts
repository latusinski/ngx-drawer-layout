import { InjectionToken } from '@angular/core';

export interface DrawerConfig {
  initialDisabled?: boolean;
  initialOpen?: boolean;
}

export interface DrawerLayoutConfig {
  start: DrawerConfig;
  end: DrawerConfig;
}

const defaultStartDrawerConfig: DrawerConfig = {
  initialDisabled: false,
  initialOpen: true,
};

const defaultEndDrawerConfig: DrawerConfig = {
  initialDisabled: true,
  initialOpen: false,
};

export const defaultDrawerLayoutConfig: DrawerLayoutConfig = {
  start: defaultStartDrawerConfig,
  end: defaultEndDrawerConfig,
};

export const DRAWER_CONFIG = new InjectionToken<DrawerLayoutConfig>('DRAWER_CONFIG');
export const PASSED_DRAWER_CONFIG = new InjectionToken<DrawerConfig>('PASSED_DRAWER_CONFIG');
