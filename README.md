# Rate Repository App

A React Native application for browsing GitHub repositories and sharing reviews. Built with Expo, React Native, and Apollo Client as part of Full Stack Open Part 10.

## Features

- Browse repositories with sorting and debounced search.
- View repository details and load reviews as you scroll.
- Create an account, sign in, and sign out.
- Write reviews for repositories.
- View and delete your own reviews.
- Navigate from a review to its repository.

## Requirements

- Node.js 22 or later.
- npm.
- Expo Go for local development, or an EAS development/preview build for testing EAS Updates.
- The Rate Repository GraphQL API. See the [API setup guide](../rate-repository-api/README.md).

## Setup

1. Install the dependencies:

   ```sh
   npm install
   ```

2. Start the GraphQL API by following its [setup guide](../rate-repository-api/README.md).

3. Create the app's environment file from the example:

   ```sh
   cp .env.example .env
   ```

   Start the API in its own terminal with `npm start` from `rate-repository-api`. For local development, Android emulators use `http://10.0.2.2:4000/graphql`. A physical phone must use your computer's LAN IPv4 address (both devices must be on the same network, and the computer firewall must allow port 4000):

   ```dotenv
   EXPO_PUBLIC_APOLLO_URI=http://192.168.1.100:4000/graphql
   ```

   Replace `192.168.1.100` with your computer's current LAN IPv4 address. Keep `.env` local and do not commit credentials or machine-specific settings.

4. Start Expo:

   ```sh
   npx expo start
   ```

   Scan the QR code using Expo Go while the phone and computer are on the same network. If the QR code does not open over LAN, use `npm run start:tunnel` instead; this tunnels Metro, but the phone must still be able to reach the API URL in `.env`. If it cannot reach your computer's LAN IP, set the development URI to the deployed API URL. To start a specific target, use `npx expo start --android`, `npx expo start --ios`, or `npx expo start --web`.

## Checks

```sh
npm run lint
npm test -- --runInBand
```

## EAS Update

EAS Update publishes JavaScript and asset changes to an EAS Update branch. Expo Go does not receive EAS Updates: install a compatible EAS build first. The update QR code opens an update, not an installable app; use the EAS Build installation link/QR to install the app.

1. Sign in to Expo:

   ```sh
   npx eas-cli@latest login
   ```

2. Initialize the EAS project if needed:

   ```sh
   npx eas-cli@latest init
   ```

3. Before publishing, configure `EXPO_PUBLIC_APOLLO_URI` for the EAS `production` environment with the URL of a deployed, publicly reachable GraphQL API. Production builds and updates use that value (or the app's production API fallback), regardless of the local development URI. Do not publish an update that points to a local address such as `localhost` or a development computer's LAN IP.

4. Build and install the Android app once. The production profile creates an internal-install APK and uses the `main` update channel:

   ```sh
   npx eas-cli@latest build --platform android --profile production
   ```

   Scan the installation QR code from the completed build. This installed app can then receive updates from the `main` branch.

5. Publish an update to the `main` branch:

   ```sh
   npx eas-cli@latest update --branch main --environment production --message "Exercise 10.28 submission"
   ```

   After publishing, the installed app receives the update on its next check. The update QR is not an Expo Go launch QR or an installation QR.
![EAS Update QR Code](docs/eas-update-qr.png)