jQuery.Routy
============

## Simple example

```js
$.router('/calendar', function()
{
    console.log('This is the calendar page.');
});
```

## Example using variables

```js
$.router('/calendar/event/([0-9]+)', function(event_id)
{
    console.log('This is an event page with the id: ' + event_id);
});
```