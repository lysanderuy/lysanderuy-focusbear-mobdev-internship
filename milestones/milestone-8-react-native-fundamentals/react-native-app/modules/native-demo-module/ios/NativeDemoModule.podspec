require 'json'

absolute_react_native_path = ''
if !ENV['REACT_NATIVE_PATH'].nil?
  absolute_react_native_path = File.expand_path(ENV['REACT_NATIVE_PATH'], Pod::Config.instance.project_root)
else
  absolute_react_native_path = File.dirname(`node --print "require.resolve('react-native/package.json')"`).strip
end

unless defined?(install_modules_dependencies)
  require File.join(absolute_react_native_path, 'scripts/react_native_pods')
end

package = JSON.parse(File.read(File.join(__dir__, '..', 'package.json')))

Pod::Spec.new do |s|
  s.name = 'NativeDemoModule'
  s.version = package['version']
  s.summary = 'Local Expo Module demo for milestone-8'
  s.description = 'A small Expo Module used to demonstrate custom native integration.'
  s.license = 'MIT'
  s.author = 'OpenAI Codex'
  s.homepage = 'https://expo.dev'
  s.platforms = {
    :ios => '15.1',
    :tvos => '15.1'
  }
  s.swift_version = '5.9'
  s.source = { git: 'https://example.com/native-demo-module.git', tag: s.version.to_s }
  s.static_framework = true

  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
    'SWIFT_COMPILATION_MODE' => 'wholemodule'
  }

  s.source_files = 'ios/**/*.{h,m,mm,swift}'

  install_modules_dependencies(s)
end
