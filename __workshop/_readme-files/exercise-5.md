# Exercise 5 - Error clean-up

<!--
Let's imagine the following scenario:

1. The user enters a too-short password
2. The "password" field is given a red outline
3. The user fixes that error, and clicks "submit", except now their passwords don't match

We would expect that the error will "move" to the "confirm password" field, but by default, the original "password" field will keep the red border.

We need to clear all errors when the user submits the form. Write a new function, `clearErrors`, and call it when the form is submitted.

If there are new errors, they will be dealt with normally. This is to ensure "stale" errors get swept away. -->
