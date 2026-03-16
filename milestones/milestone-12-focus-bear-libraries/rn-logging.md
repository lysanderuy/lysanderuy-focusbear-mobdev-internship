# Onboarding Task - Logging and Error Reporting in React Native

## Sentry Setup in the Milestone-8 Sample App

I added `@sentry/react-native` to the sample Expo app in
`milestone-8-react-native-fundamentals/react-native-app` and initialized it from `EXPO_PUBLIC_SENTRY_DSN`. The app
boots Sentry from a dedicated helper module so the setup stays separate from screen code, and the sandbox tab now has
a "Send Sentry Test Error" button. When that button is pressed, the app records a breadcrumb and captures a handled
exception so it can be checked in the Sentry dashboard.

To verify the flow, I would create a Sentry project, place the DSN in `.env`, restart Expo, open the sandbox screen,
tap the test button, and then confirm the new event appears in Sentry with the breadcrumb and stack trace attached.

<p align=center>
<img width="250" alt="Image" src="https://github.com/user-attachments/assets/b29a59e5-8561-4a6f-afdd-72719fcdfdba" />
</p>

<p align=center>
<img width="600" alt="Image" src="https://github.com/user-attachments/assets/639806cd-9267-4827-a590-920d4cb54d48" />
</p>

## Reflection

### Why is logging important in a production React Native app

Logging is important because production issues rarely happen under ideal local development conditions. Mobile apps run
on many device types, OS versions, network conditions, and background states, so logs provide the runtime evidence
needed to understand what actually happened when a feature fails. Good logging also helps teams detect patterns early,
measure impact, and reduce the time between a bug being reported and a fix being shipped.

### How does Sentry improve debugging and issue tracking

Sentry improves debugging by automatically collecting exceptions, stack traces, device context, release information,
and breadcrumbs around the moment a failure occurs. Instead of depending on a user to describe a crash accurately, the
team gets a structured issue with enough technical detail to reproduce and prioritize it. It also groups similar
errors together, which helps teams focus on the most widespread or severe issues rather than reviewing every event one
by one.

### What are best practices for handling and logging errors

Best practice starts with handling expected failures gracefully in the UI while still logging enough detail for
engineers to investigate. Errors should include useful context such as the feature area, relevant identifiers, and the
user action that triggered the problem, but they should avoid sensitive personal data. It is also important to
separate signal from noise by logging actionable failures, adding breadcrumbs around important flows, and using
release tags or environments so issues can be traced back to the exact build. Finally, teams should review logs
regularly and treat them as part of the product feedback loop rather than as something only checked after a crash.
