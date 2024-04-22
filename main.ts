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
     * Displays a series of LEDs based of a string. Each "1" means that the LED will be on, each "0" means that the LED will be off. If the string is less than 25 digits, the remaining LEDs will remain unchanged. If it is more than 25 digits, then the extra digits will be ignored.
     */
    //% block
    export function displayLedsFromString(str: string): void {
        let counter = 0;
        for (let j = 0; j <= 4; j++) {
            for (let i = 0; i <= 4; i++) {
                if (str.charAt(counter) == "1") {
                    led.plot(i, j);
                } else {
                    led.unplot(i, j);
                }
            }
        }
    }
}