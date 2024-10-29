# react-native-account-management
Account Management App using React Native Version 0.76.0

## Pre-requisite:
1. Node version: v20.15.1
2. Xcode version:15.2
3. Make sure to run account-service(spring-boot app) on local-host first, before using React-Native app
   
## Steps to run app:
1. cd *AccountManagement* folder
2. Install dependencies using following command from mac terminal:
   npm install
3. Install iOS specific dependencies, execute following command:
   cd ios; pod install; cd ..
4. From root project directory, run following command to run app packager:
   npx react-native start
5. On packager start press *i* to install app on simulator

## Steps to use app:
1. Create account from first screen
2. On successful account creation on server, user will be navigated to next screen
3. Use Get Account button from bottom of screen, to get the account details from server
4. Use Delete Account button, to delete account from server
   
