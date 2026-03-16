package expo.modules.nativedemomodule

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class NativeDemoModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("NativeDemoModule")

    AsyncFunction("getNativeDemoInfo") {
      mapOf(
        "platform" to "android",
        "message" to "Hello from the Android Expo Module demo."
      )
    }
  }
}
