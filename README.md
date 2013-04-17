jQuery.Routy
============

## Introduction

Routy is a simple jQuery plugin that allows you to tie application code to a specific page url (route) using regular expression matching.
This helps organize JavaScript code in larger projects and removes the need for any in-line page identification, such an id on the body tag. Just minify all your JavaScript code into one file, and you're ready to go.

## Examples

### Basic usage

```js
$.router('/calendar', function()
{
    console.log('This is the calendar page.');
});
```

### Example using variables

```js
$.router('/calendar/event/([0-9]+)', function(event_id)
{
    console.log('This is an event page with the id: ' + event_id);
});
```

### Catch all example

```js
$.router('.*', function()
{
    console.log('This is run on every page.');
});
```

## Questions or comments?

Send me a message on Twitter at [@reinink](https://twitter.com/reinink).