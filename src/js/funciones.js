function getAbsolutePath(){
    let loc = window.location;
    let pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}

function getContentPath(){
    let loc = window.location;
    let pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    return '/'+pathName.split("/")[1];
}

function goTo(page){
    document.location.href = getAbsolutePath()+page
}

function goContent(page){
    document.location.pathname = getContentPath()+page
}