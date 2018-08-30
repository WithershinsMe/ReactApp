
//https://facebook.github.io/react-native/docs/performance
//预加载Module
//export BUNDLE_COMMAND="unbundle"
//export BUNDLE_CONFIG="packager/config.js"
//export NODE_BINARY=node
//../node_modules/react-native/packager/react-native-xcode.sh
const config = {
  getTransformOptions: () => {
    return {
      transform: { inlineRequires: true },
    };
  },
};

module.exports = config;