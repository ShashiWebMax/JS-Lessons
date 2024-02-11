# Working with dates and time

In this lesson, we will learn how to work with dates and time in JavaScript. We will cover the following topics:

- Date object
- Date methods
- Date formatting
- Time zones
- Date arithmetic
- Date comparison
- Date parsing
- Date validation
- Date libraries


## Date object

In JavaScript, the `Date` object is used to work with dates and times. You can create a new `Date` object using the `new` keyword followed by the `Date()` constructor. The `Date` object takes the following arguments:

- `Date()` - returns the current date and time
- `Date(milliseconds)` - returns the date and time based on the number of milliseconds since January 1, 1970
- `Date(dateString)` - returns the date and time based on the date string
- `Date(year, month, day, hours, minutes, seconds, milliseconds)` - returns the date and time based on the specified arguments
  - `year` - the year (4 digits)
  - `month` - the month (0-11)
  - `day` - the day of the month (1-31)
  - `hours` - the hour (0-23)
  - `minutes` - the minutes (0-59)
  - `seconds` - the seconds (0-59)
  - `milliseconds` - the milliseconds (0-999)
  - Note: The month is zero-based, which means that January is 0 and December is 11.
  - Note: If any of the arguments are missing or out of range, the date is adjusted accordingly.

## Frequently used Date methods

### Finding the current date and time

The `Date` object has several methods that allow you to get the current date and time. The most commonly used methods are:

- `getDate()` - returns the day of the month (1-31)
- `getDay()` - returns the day of the week (0-6)
- `getFullYear()` - returns the year (4 digits)
- `getHours()` - returns the hour (0-23)
- `getMilliseconds()` - returns the milliseconds (0-999)
- `getMinutes()` - returns the minutes (0-59)
- `getMonth()` - returns the month (0-11)
- `getSeconds()` - returns the seconds (0-59)
- `getTime()` - returns the number of milliseconds since January 1, 1970
- `getTimezoneOffset()` - returns the difference in minutes between the local time and UTC

### Setting the date and time

The `Date` object also has several methods that allow you to set the date and time. The most commonly used methods are:

- `setDate(day)` - sets the day of the month (1-31)
- `setFullYear(year)` - sets the year (4 digits)
- `setHours(hours)` - sets the hour (0-23)
- `setMilliseconds(milliseconds)` - sets the milliseconds (0-999)
- `setMinutes(minutes)` - sets the minutes (0-59)
- `setMonth(month)` - sets the month (0-11)
- `setSeconds(seconds)` - sets the seconds (0-59)
- `setTime(milliseconds)` - sets the number of milliseconds since January 1, 1970 
- Note: If any of the arguments are missing or out of range, the date is adjusted accordingly.

## Example use cases

### Find the first day of a month

#### Find the first day of the current month
```javascript
let date = new Date();
date.setDate(1);
console.log(date);
```

#### Find the first day of a specific month
```javascript
//first day of January 2021
let date = new Date(2021, 0, 1);
console.log(date);
```

### Find the last day of a month

#### Find the last day of the current month
```javascript
let date = new Date();
date.setMonth(date.getMonth() + 1);
date.setDate(0);
console.log(date);
```

#### Find the last day of a specific month
```javascript
//last day of January 2021
let date = new Date(2021, 0, 1);
date.setMonth(date.getMonth() + 1);
date.setDate(0);
console.log(date);
```

### Find the day of the week

#### Find the day of the week for the current date
```javascript
let date = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days[date.getDay()]);
```




*(45 mins)*