//% color=190 weight=100
namespace stringLed {
    /** 
     * Gets the current LED display as a 25-digit string. "1" means that the LED is on, "0" means that the LED is off. 
     */
    //% block
    export function getLedDisplayAsString(): string {
        let str = "";
        for (let j = 0; j <= 4; j++) {
            for (let i = 0; i <= 4; i++) {
                if (led.point(i, j)) {
                    str += "1";
                } else {
                    str += "0";
                }
            }
        }
        return str;
    }

    /**
     * Displays a series of LEDs based of a string. Each "1" means that the LED will be on, each "0" means that the LED will be off. If the string is less than 25 digits, the remaining LEDs will turn off. If there are more than 25 digits, then the extra digits will be ignored. If one of the digits of the first 25 characters of the string is different from "0" and "1" then a X will appear.
     */
    //% block
    export function displayLedsFromString(str: string): void {
        let counter = 0;
        str += "0000000000000000000000000"
        for (let j = 0; j <= 4; j++) {
            for (let i = 0; i <= 4; i++) {
                if (str.charAt(counter) == "1") {
                    led.plot(i, j);
                } else if (str.charAt(counter) == "0") {
                    led.unplot(i, j);
                } else {
                    basic.showIcon(IconNames.No)
                }
                counter++;
            }
        }
    }

    /**
     * Verifies if the given string is eligible to be a StringLED. A string is considered eligible if it only contains the characters "1" and "0".
     */
    //% block
    export function isStringLed(str: string): Boolean {
        for (let i = 0; i < str.length; i++) {
            if (str[i] != "1" && str[i] != "0") {
                return false;
            }
        }
        return true;
    }
}