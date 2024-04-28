
> Open this page at [https://westgamerplayz.github.io/pxt-stringled/](https://westgamerplayz.github.io/pxt-stringled/)

## Blocks

This extension comes with the following 3 blocks:

1) isStringLed(str: string): Boolean - Verifies if the given string is eligible to be a StringLED. A string is considered eligible if it only contains the characters "1" and "0". Returns *true* if is eligible, *false* if not.
2) displayLedsFromString(str: string): void - Displays a series of LEDs based of a string. Each "1" means that the LED will be on, each "0" or another digit means that the LED will be off. If the string is less than 25 digits, the remaining LEDs will turn off. If it is more than 25 digits, then the extra digits will be ignored.
3) getLedDisplayAsString(): string - Gets the current LED display as a 25-digit string. "1" means that the LED is on, "0" means that the LED is off. Returns the calculated string.

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/westgamerplayz/pxt-stringled** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/westgamerplayz/pxt-stringled** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
