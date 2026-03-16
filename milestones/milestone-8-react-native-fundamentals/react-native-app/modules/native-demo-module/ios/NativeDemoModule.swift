import ExpoModulesCore

public final class NativeDemoModule: Module {
  public func definition() -> ModuleDefinition {
    Name("NativeDemoModule")

    AsyncFunction("getNativeDemoInfo") {
      [
        "platform": "ios",
        "message": "Hello from the iOS Expo Module demo."
      ]
    }
  }
}
