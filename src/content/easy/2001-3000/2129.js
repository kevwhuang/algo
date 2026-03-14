// 2129 - Capitalize the Title

function capitalizeTitle(title) {
    title = title.split(' ');
    for (let i = 0; i < title.length; i++) {
        title[i] = title[i].toLowerCase();
        if (title[i].length <= 2) continue;
        title[i] = title[i][0].toUpperCase() + title[i].slice(1);
    }
    return title.join(' ');
}
