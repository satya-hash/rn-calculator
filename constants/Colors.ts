export const Colors = {
    primary: {
        100: '#1F3A5F',  // Dark Blue - Primary color for dark mode
        200: '#4d648d',  // Medium Blue - Lighter shade of primary
        300: '#acc2ef',  // Light Blue - Lightest shade of primary
    },
    accent: {
        100: '#ED0E98',  // Deep Blue - Accent color for dark mode
        200: '#FE5A2D',  // Soft Blue - Accent color for light mode
    },
    text: {
        100: '#FFFFFF',  // White - Text color for dark mode
        200: '#e0e0e0',  // Light Gray - Secondary text color for dark mode
        300: '#1F3A5F',  // Dark Blue - Text color for light mode
        400: '#4d648d',  // Medium Blue - Secondary text color for light mode
    },
    background: {
        100: '#0F1C2E',  // Dark Blue Black - Background color for dark mode
        200: '#1f2b3e',  // Darker Blue - Secondary background for dark mode
        300: '#374357',  // Grayish Blue - Tertiary background for dark mode
        400: '#F5F5F5',  // Light - Background color for light mode
        500: '#FFFFFF',  // White - Secondary background for light mode
    },
};

export const DarkTheme = {
    background: Colors.background[100],   // Main background for dark mode
    text: Colors.text[100],               // White text for dark mode
    buttonBackground: Colors.background[200], // Darker button background
    buttonText: Colors.text[100],         // Button text in white
    accent: Colors.accent[100],           // Deep Blue accent for dark mode
    primary: Colors.primary[100],         // Dark Blue primary color for dark mode
    resultText: Colors.text[200],         // Light gray result text
    secondaryBackground: Colors.background[200], // Secondary background for dark mode
    secondaryText: Colors.text[200],      // Secondary text color for dark mode
    secondaryAccent: Colors.accent[200],  // Secondary accent color for dark mode
    secondaryPrimary: Colors.primary[200], // Secondary primary color for dark mode
};

export const LightTheme = {
    background: Colors.background[400],   // Main background for light mode
    text: Colors.text[300],               // Dark Blue text for light mode
    buttonBackground: Colors.background[300], // Grayish Blue button background
    buttonText: Colors.text[100],         // White button text
    accent: Colors.accent[200],           // Soft Blue accent for light mode
    primary: Colors.primary[300],         // Light Blue primary color for light mode
    resultText: Colors.text[400],         // Medium Blue result text
    secondaryBackground: Colors.background[500], // Secondary background for light mode
    secondaryText: Colors.text[400],      // Secondary text color for light mode
    secondaryAccent: Colors.accent[100],  // Secondary accent color for light mode
    secondaryPrimary: Colors.primary[200], // Secondary primary color for light mode
};
