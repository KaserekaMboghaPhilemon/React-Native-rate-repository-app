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

   Set `EXPO_PUBLIC_APOLLO_URI` in `.env` to the API GraphQL endpoint. Use the address appropriate for where the app is running:

   ```dotenv
   # Web or iOS simulator
   EXPO_PUBLIC_APOLLO_URI=http://localhost:4000/graphql

   # Android emulator
   # EXPO_PUBLIC_APOLLO_URI=http://10.0.2.2:4000/graphql

   # Physical device: replace with your development computer's LAN IP
   # EXPO_PUBLIC_APOLLO_URI=http://192.168.1.100:4000/graphql
   ```

   Keep `.env` local and do not commit credentials or machine-specific settings.

4. Start Expo:

   ```sh
   npx expo start
   ```

   To start a specific target, use `npx expo start --android`, `npx expo start --ios`, or `npx expo start --web`.

## Checks

```sh
npm run lint
npm test -- --runInBand
```

## EAS Update

EAS Update publishes JavaScript and asset changes to an EAS Update branch. Configure the project and install a compatible development or preview build before publishing; Expo Go does not receive EAS Updates.

1. Sign in to Expo:

   ```sh
   npx eas-cli@latest login
   ```

2. Initialize the EAS project and configure Updates (these commands add EAS project/update settings to the app):

   ```sh
   npx eas-cli@latest init
   npx eas-cli@latest update:configure
   ```

3. Before publishing, configure `EXPO_PUBLIC_APOLLO_URI` for the EAS `production` environment with the URL of a deployed, publicly reachable GraphQL API. Do not publish an update that points to a local address such as `localhost` or a development computer's LAN IP.

4. Publish an update to the `main` branch:

   ```sh
   npx eas-cli@latest update --branch main --environment production --message "Exercise 10.28 submission"
   ```

   The CLI may prompt for project or branch setup the first time. Review the selected project and branch before confirming. After publishing, capture the update QR code shown by the CLI or available in the Expo dashboard and replace the placeholder below.

### EAS Update QR code

Replace this placeholder with a screenshot of the QR code for the published update:

![EAS Update QR code screenshot placeholder](./docs/eas-update-qr.png)
