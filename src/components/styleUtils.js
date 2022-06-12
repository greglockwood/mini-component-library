export function bySize(small, medium, large) {
    return ({size}) => {
        switch (size) {
            case 'large': return large;
            case 'small': return small;
            default: return medium;
        }
    };
}
