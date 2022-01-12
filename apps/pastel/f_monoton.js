exports.add = function(graphics) {
    graphics.prototype.setFontMonoton = function(scale) {
        // Actual height 44 (43 - 0)
        this.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAABmwAAAAAAzYAAAAAAZsAAAAAAM2AAAAAAGbAAAAAADNgAAAAABmwAAAAAAzYAAAAAAZsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAD+AAAAAAf8AAAAAD/ggAAAAf8HwAAAD/g/4AAAf8H/AAAD/g/4OAAf8H/B/AD/g/4P+Af8H/B/wAfg/4P+AAMH/B/wAAA/4H+AAAD/A/4AAAB4H/AAAAAA/4AAAAAH/AAAAAAP4AAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAAAH//gAAAAf//8AAAA/AAPgAAA8f/x8AAB4//+PAAB5+APxwABzwfwecAAzj//jnAA7n+P85gA7ngAPO4AbnH/xzsAdnP/+c3AN3PAHndgGzOAA5m4DbuAAO7MD9mAADN2Bs3AAB2bA2bAAAbNgbNgAANmwNmwAAGzYGzYAADZsDdmAADN2B+7AABuzAbMwABmbgNneAD3NgHZ3+/3MwBuc//nO4A7nB8HGYAM58AfOcAHeP/+OcABzx/8ecAAc+AA+cAAHH//8cAAB4//48AAAPg+B8AAAD+AP4AAAAP//wAAAAA/+AAAAAAAAAAAAAAAAAAABsAAAAAAA2AAAAAAAbAAAAAAANgAAAAAAGwAAAAAADf////8ABv////+AA3/////AAbAAAAAAAN/////wAG/////4ADYAAAAAABv////+AA3/////AAb/////gANgAAAAAAG/////4ADf////8AAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAADcAAAA2wBs2AADbYA2bAADtsAbZgADm2AftwAHjbAN24AHNtgGzYAPO2wDZsAPebYBs2AOeNsA2bAec22AbNge87bANmwc55tgG7c8542wD9355zbYA2Z5zztsAbODzjm2ANz/nnjbADc/nnhtgBnCPHA2wA74fPAbYAOf+OANsADj8eAG2AA8A+ADbAAP/8AAAAAB/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAABgG6AAAAuwDdsAAG3YBs2AADZuA27AABu3A/ZgAA7dgbtwAAduwN2w2zG3YGzYbZjZsDZsNsxs2Bs2G2Y2bA2bDbMbNgbNhtmNmwNmw2zGzYG7MbdnbsD939m/d2A2Z/7PM3AbuBtwO7AOz73eeZgDc/9n+dwB3H2Y8cwAZ4HnA84AGf/5/84ADz/OP44AAeALwB4AAH/+//4AAA/+H/wAAADwAfAAAAAAAAAAAAAAAAAAAAAAAZsAAAAAB82AAAAAD+bAAAAAHzNgAAAAPjmwAAAAfHzYAAAB+P5sAAAD8fM2AAAHw+ObAAAPj8fNgAAfH4/mwAA+Ph8zYAAcfH4ZsAAA+Px82AAB8fD+bAAD4+HzNgABh8PhmwAAH4/AzYAAPx+AZsAAPD4AM2AAGHwP+bfgAfgH/NvwA/AABmwAA8AAAzYAAYAA/5t+AAAAf82/AAAAAGbAAAAAADNgAAAAAAAAAAAAAAAAAAAAAAAGAAE///ADAAGf//gBwADP//wCcABmAAADmAAz//8C7gAZ//+DMwAMwAAA3YAGf//hZsADP//xu3ABn//4zdgAzDNsNuwAZhu2GzYAMw2bDZsAGYbNhs2ADMNmw2bABmGzYbNgAzDZsdmwAZhs2M3YAMw3d+zcAGYZm+ZsADMOzgd2ABmDM883AAzB3P87AAZgZx47gAMwOcB5gAGYDn/5gADMA4/zwAAAAPADwAAAAD8fgAAAAAf/gAAAAAB+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///4AAAD////AAAHwAADwAAHH//8eAAHP///ngAHfgAB8wAHeH/8PcADcf//x3ADsf//+ZgBu8AADu4B2c//8zMA3d///M2AbNwAB2bgduxs2bswP2Z2/O3YGzYzbDZsDZsbths2Bs2Nmw2bA2bGzYbNgbNjZsNmwNmxs2GzYH7c2bHbsDtmbtzdmA2bM3fs3AbMHZnO7AM3BuYOZgHZAzP+dgBmAMx+cwA7gHeAcwAMgB3584AHAAc/84ABgAHHx4AAAAB4D4AAAAAf/wAAAAAD/gAAAAAAAAAAAAAAAAAAZsAAAAAAM2AAAAAAGbAAAAAADNgAAAAABmwAAAAAAzYAAAAAAZsAAAAAAM2AAAAPAGbAAAB/gDNgAAP+ABmwAD/wYAzYAf+D8AZsD/wf8AM2f8D/gAGT/gf8HgAf8D/g/wB/g/8H/AA8H/g/4MAA/8H/B+AH/g/4P+AH4H/B/wADA/4P+AAAH/B/wAAA/4P+AAAAfB/wAAAAAP+AAAAAB/wAAAAAD+AAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAGAAwAAAA/8H/gAAB//v/8AAB4B/APgADz+PP54ABn/x//OABng8eDzAB3HHOcdwA3P9z/nYA7P/d/5mAbOBmYO7ANmebvzNwP3fs392YGzc3ZmbsDZsZsxs2Bs2M2Y2bA2bGbMbNgbNjNmNmwNmxmzGzYGzYzZjZsDZsZsxs2Bs2M2Y2bA2bGbMbNgbNzNmNmwP2Zm7s3YDbv7M+7MBszt3OZuA3MGZwd2ANn/uf8zAGY+zn47gDvAc4A7gA78/Pj5gAOf/z/zwADj8cPjwAA+A/gHgAAH/9//gAAA/4P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AAAAAAD/4AAAAAHw/AAAAAHADwADAAHP8cABgAHf/nAA4AHeB5gDuAHcfOYAzADc/7uBdwBs8ezBmYBu4DdgbsA2Z924s3AbN+bM3bgfsxt2duwNm4zbG3YGzYZtjZsDZsM2xs2Bs2GbY2bA2bDNsbNgbNhv2NmwP242zO3YHbszbm7sBs3AAHZuA2Z///M2Abuf//O7AGzh/8ObgDc8AA+dgB3P//+dwAdx//8cwAGeAAA8wADn///44AA8///54AAPgAAB4AAB+AAPwAAAP///gAAAA//+AAAAAAAAAAAAAAAAAAAAAAAAAAAADbBmwAAABtgzYAAAA2wZsAAAAbYM2AAAANsGbAAAAG2DNgAAADbBmwAAABtgzYAAAA2wZsAAAAAAAAAAAAAAAAAAA="), 46, atob("DRYpFR0eHiImHygmDQ=="), 49 + (scale << 8) + (1 << 16));
    }
};