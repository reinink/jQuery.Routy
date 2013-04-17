/**
 * A simple jQuery based router.
 *
 * @version  1.0
 * @author   Jonathan Reinink <jonathan@reininks.com>
 * @link     https://github.com/reinink/jQuery.Routy
 */

;(function($, window, document, undefined)
{
    $.router = function(uri, callback)
    {
        var regex = new RegExp(uri + '$');
        var match = regex.exec(location.pathname);

        if (match)
        {
            $(function()
            {
                callback.apply(callback, match.splice(1));
            });
        }
    };

})(jQuery, window, document);