# Onboarding Task - Localisation with react-i18next

## Trying out react-i18next

Inside the `milestone-8-react-native-fundamentals/react-native-app`, I added a simple language switching feature to
the sample home screen. The app can switch between English, Spanish, and French using a compact dropdown picker.

I also added user preference handling for the selected language. The choice is stored through the language context so
the app can reuse the selected language, and the UI updates immediately when a new option is selected. I also added a
safe fallback so the app does not crash if native storage is unavailable in the current runtime.

<p align= center>
<img width="250" alt="Image" src="https://github.com/user-attachments/assets/db91b4f0-fb06-4f88-b414-076340b72bf4" />
<img width="250" alt="Image" src="https://github.com/user-attachments/assets/9bb6def4-ec6c-4e84-8d4d-d1a2dda8dad3" />
<img width="250" alt="Image" src="https://github.com/user-attachments/assets/fc5cacdd-611f-4cfa-a970-e3fc5062680d" />
</p>

## Reflection

### How does react-i18next handle translations

`react-i18next` connects React components to the `i18next` translation engine so text can be rendered from
translation keys instead of hardcoded strings. In practice, components usually call `useTranslation()` and then use
the `t()` function to look up the right string for the active language. Translation content is stored in resource
files or objects, which makes it easier to update wording without changing component logic. It also supports
interpolation, plural handling, fallbacks, and runtime language switching, which is helpful when building UI for more
than one locale.

### What challenges arise when localising a React Native app

One challenge is that localisation affects more than just replacing words. Text length changes across languages, so
layouts that look fine in English can break or wrap badly in other languages, especially on smaller mobile screens.
Another challenge is supporting device locale detection, fallback languages, and user-selected language preferences in
a consistent way across iOS and Android. There are also content-specific issues like plural rules, date and number
formatting, right-to-left layouts, and making sure images or icons do not rely on English text. From a maintenance
perspective, it can become hard to manage if developers scatter strings through components instead of keeping
translations organized and reusable.

### How would you test localisation support in an app

I would test localisation at both the functional and UI levels. First, I would verify that the app detects the
device language correctly, falls back safely when a translation is missing, and updates immediately when the user
changes language in settings. Then I would manually review key screens in multiple languages to check text overflow,
truncation, alignment, and whether important actions remain clear on small screens. I would also test formatted
content such as dates, times, numbers, and plurals because those often break even when simple labels look correct.
For stronger coverage, I would add automated tests around translation keys and language switching so regressions are
caught before release.
