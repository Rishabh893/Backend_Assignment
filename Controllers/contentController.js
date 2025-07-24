// @desc    Get onboarding content
// @route   GET /api/onboarding
// @access  Public
const getOnboardingContent = (req, res) => {
  const onboardingSteps = [
    {
      title: 'Welcome to the App!',
      description: 'We are excited to have you here. Lets get you started.',
      imageUrl: 'https://welcome.png',
    },
    {
      title: 'Set Up Your Profile',
      description: 'A complete profile helps you get the most out of our features.',
      imageUrl: 'https://profile_setup.png',
    },
    {
      title: 'Explore and Connect',
      description: 'Discover amazing content and connect with the community.',
      imageUrl: 'https://explore.png',
    },
  ];

  res.status(200).json(onboardingSteps);
};

module.exports = { getOnboardingContent };