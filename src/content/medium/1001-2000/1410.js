// 1410 - HTML Entity Parser

function entityParser(text) {
    return text
        .replaceAll('&quot;', '"')
        .replaceAll('&apos;', '\'')
        .replaceAll('&gt;', '>')
        .replaceAll('&lt;', '<')
        .replaceAll('&frasl;', '/')
        .replaceAll('&amp;', '&');
}
