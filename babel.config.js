module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"],
    /*plugins: ["@nativevewind/babel", "react-native-reanimated/plugin"],*/
  };
};
