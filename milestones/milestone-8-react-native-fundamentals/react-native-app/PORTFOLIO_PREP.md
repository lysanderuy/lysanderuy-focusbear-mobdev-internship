# Portfolio App Prep Notes

This app is now structured to scale as a standalone portfolio app.

## Added Future Sections

- `app/(tabs)/projects.tsx`
- `app/(tabs)/robotics.tsx`
- `app/(tabs)/competitions.tsx`

These routes are intentionally hidden from the tab bar for now via:

- `app/(tabs)/_layout.tsx` with `options={{ href: null }}`

When you want to show them as real tabs, replace those hidden entries with normal tab options.

## Centralized Portfolio Data

Shared content lives in:

- `constants/portfolio-data.ts`

Current consumers:

- `app/(tabs)/profile.tsx`
- `app/(tabs)/experience.tsx`

This makes updates easier and prepares for adding CMS/JSON/API data later.

## Extraction To Dedicated Folder

You can move `react-native-app` as-is to another location.

1. Copy folder: `milestones/milestone-8-react-native-fundamentals/react-native-app`
2. In the new location run:
   - `npm install`
   - `npm run start`
3. Optional:
   - update package/app name in `app.json` and `package.json`
   - initialize new git repo

The app currently has no runtime dependency on parent milestone files.
