const getPathname = () => {
    let breadcrumbs = window.location.pathname.split('/');
	breadcrumbs = breadcrumbs.filter((b) => b !== '');
	console.log(breadcrumbs);
    return breadcrumbs;
}

export {
    getPathname
}