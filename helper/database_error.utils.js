export const dbError = errorCode => {
    switch (errorCode) {
        case 11000:
            return new Error('Already exist');
        case 17000:
            return new Error('Timeout error');
        case 121:
            return new Error('Invalid syntax');

        default:
            return new Error('Database error');
    }
};
