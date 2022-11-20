---
id: intro
title: Introduction
slug: /
---

export const Highlight = ({children, bgcolor, color}) => (
  <span
    style={{
      backgroundColor: bgcolor,
      borderRadius: '4px',
      color: color,
      padding: '0.2rem',
    }}
    onClick={() => alert('Highlight pressed!')}>
    {children}
  </span>
);

## What's a Chronomate?

Chronomate was developed for a small guild I admin. For seasonal events I would switch the icon for a themed one to match the occasion. Chronomate allows you to automate this task by setting up tasks for any calendar date.

## Features

Chronomate is focused on doing this small task well before building an excssive amount of features.

The core set of features right now include:

- 📦 Store icon images in a Discord channel for easy access.
- 🦾 Change the guild icon at any time manually using slash commands.
- 📆 Setup automatic icon changes.
- 🗺️ Set the timezone for your server so icon changes will happen 2AM local time.
- 💿 Log icon task events in a channel of your choosing.

## Development

This bot is is a hobby project developed in my spare time. In the future there are some features which I would like to include:

- ✨ Banner changing
- 🌕 Tasks based on events which change date each year
    - Such as Easter or Chinese New Year
- 📣 Ability to choose recurring or one time tasks
- 🚀 UX Improvements
    - Setting default icon
    - Change icon between two dates, returning to default icon when finished
    - Allow storage of icons externally using imgur or similar hosting
    - Random icon change
        - Change the icon to a randomly selected one from all available
        - Do this monthly, daily or hourly


## Support
Chronomate is a side project I enjoy working on in my spare time.
If you find my bot useful and wish to support me to make it even better please [consider buying my a coffee](https://www.buymeacoffee.com/jloaus) ☕.
