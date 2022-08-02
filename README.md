# Slugdown
## Introduction
In most of the developed countries nowadays,
[life expectancy is really generous](https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy).
The increase in life expectancy has been a trend for some time now.
Technological advancements in medicine and better food production
are just some of the reasons for it.
As scientific development is not showing any signs of slowing down,
our lives are most likely getting even longer in the next few years.
If life is so long,
we certainly have time to wait for some slow code!
Take it slow and enjoy your stay!
This is the purpose of **Slugdown**,
a library that **slugs down** your code.

## Usage
This library offers three functions in total:
one for slugging down your code and two for configuring the slugdown time.
The first thing you should do is configuring this value.
```js
// Returns the slugdown time (in milliseconds).
slugdown.get_slugdown_time();

// Sets the slugdown time. (It works with milliseconds.)
slugdown.set_slugdown_time(200);
```

After the configuration,
you can use the other function to actually slug things down.
Note that this function should be used **asynchronously**.
```js
/* This function receives a lambda as a parameter.
 * This should be set to a lambda or function with no parameters
 * that executes the desired code.
 * It must be run asynchronously in order to function properly. */
await slugdown.slugdown(() => {
	console.log("Hello world!);
});
```

The file `test.js` serves as an example of the usage of this library.

## Contributing
If you want to contribute to Slugdown, follow these steps.

1. **Checking if you are awesome.**
Go to [iamawesome.com](https://iamawesome.com/).
If it says `it's true`,
you are perfectly apt for contributing to this project.
Otherwise, go to your bedroom and cry.

1. **Understanding the consequences.**
By contributing to this project,
you are contributing to the decay of the modern web.
If you don't mind being responsible for that ~~in case~~ when it happens,
you can proceed.

1. **Forking the repository.**
Fork the repository.

1. **Making the changes.**
Change whatever you feel like in your fork.

1. **Sending a pull request.**
After you're happy with your changes, send us a pull request.
We might approve it and merge it, if you're lucky.

## Related projects
* [is-odd](https://github.com/i-voted-for-trump/is-odd):
library which detects if a number is odd;
* [is-even](https://github.com/i-voted-for-trump/is-even):
library which detects if a number is even;
* [is-thirteen](https://github.com/jezen/is-thirteen):
check if a number is equal to 13.
