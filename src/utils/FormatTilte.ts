const formatTitle = (title: string) => {
    return title
        .split(/(?=[A-Z])/)
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export default formatTitle;