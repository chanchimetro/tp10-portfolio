const getPathname = () => {
    let breadcrumbs = window.location.pathname.split('/');
	breadcrumbs = breadcrumbs.filter((b) => b !== '');
    return breadcrumbs;
}

export {
    getPathname
}