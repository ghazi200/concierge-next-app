import analytics from '@react-native-firebase/analytics';

const logScreenView = async (screenName) => {
  await analytics().logScreenView({
    screen_name: screenName,
    screen_class: screenName,
  });
};
