import NativeDemoModule, { type NativeDemoInfo } from '@/modules/native-demo-module';

const unavailableMessage =
  'Native demo module is unavailable in this runtime. Build a development client to test local Expo Modules.';

export { type NativeDemoInfo };

export function isNativeDemoModuleAvailable() {
  return Boolean(NativeDemoModule);
}

export async function getNativeDemoInfo(): Promise<NativeDemoInfo> {
  if (!NativeDemoModule) {
    throw new Error(unavailableMessage);
  }

  try {
    return await NativeDemoModule.getNativeDemoInfo();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown native module error';
    throw new Error(`Native demo module failed: ${message}`);
  }
}
