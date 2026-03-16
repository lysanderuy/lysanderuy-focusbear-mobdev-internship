import { requireOptionalNativeModule } from 'expo-modules-core';

export type NativeDemoInfo = {
  platform: string;
  message: string;
};

type NativeDemoModuleType = {
  getNativeDemoInfo(): Promise<NativeDemoInfo>;
};

export default requireOptionalNativeModule<NativeDemoModuleType>('NativeDemoModule');
