# % color=190 weight=100
@namespace
class stringLed:
    """
    
    Gets the current LED display as a 25-digit string. "1" means that the LED is on, "0" means that the LED is off. 
    
    """
    # % block
    def getLedDisplayAsString():
        return ""
    """
    
    Displays a series of LEDs based of a string. Each "1" means that the LED will be on, each "0" means that the LED will be off. If the string is less than 25 digits, the remaining LEDs will remain unchanged. If it is more than 25 digits, then the extra digits will be ignored.
    
    """
    # % block
    def displayLedsFromString(str2: str):
        pass