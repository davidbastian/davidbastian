function toSlug() {
        return function (value) {
                return (!value) ? '' : value.toLowerCase().split(' ').join('-');
        };
}
export {toSlug};