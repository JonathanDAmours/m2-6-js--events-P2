# Exercise 4 - Validation

## Basic Validation

<!--
When the user submits the form, the following validations should take place:

All fields are required. They should have at least 1 character. You can solve for this by adding the `required` attribute to the HTML inputs.

The email field needs to be a valid email. You can ensure that the browser validates this by using `type="email"` -->

## Terms validation

<!--
If the user tries to submit the form before agreeing to the terms of service, the browser should open a `window.alert` explaining to the user that they need to agree to the terms. -->

<!-- ## Password validation

There are two rules for passwords:

- The password should be at least 10 characters long.
- The "password" and "confirm password" fields should match.

If either of these fails, a number of things should happen:

1. A pink error box should be shown. It should have a message about what the problem is and how to fix it:

![A pink error box explains the problem, just above the submit button](../../__lecture/assets/error-box.png)

2. The field in question that needs to be fixed should be given a red outline with a thicker border:

![The “Confirm Password” field has a thick red outline](../../__lecture/assets/input-highlight.png)

3. The field in question will be _focused_, indicated by a blue outline:

![The “Confirm Password” field is auto-focused](../../__lecture/assets/focused.png)

When you start typing, it will update this field. -->

## Success

<!-- If there are any of the above errors, the form should not be submitted.

If none of these errors occur, an alert should show with the word "Success!". In a real application, this would submit to a server, but for now we'll use `window.alert`. -->

## Tips!

<!-- 1. You'll want to use the `submit` event on the form
2. `ev.preventDefault` is very useful to stop a form from submitting and erasing everything on the page!
3. You can tell what the user has entered in a text input by selecting that element (with `document.querySelector` or `document.getElementById`) and checking the `value` property. For checkboxes, you can tell if it's checked with the `checked` property.
4. When there is a password error, you need to show a pink box. You can add this box directly in your `index.html`, but set it to `display: none`. When there is a password error, you can use `classList.add` to add a new class, and `innerText` to change the message. -->
