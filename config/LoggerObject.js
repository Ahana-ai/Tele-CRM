export const loggerStatus = {
    INFO: 'info',
    ERROR: 'error'
};
export const OPERATIONS = {
    USERS: {
        CREATE: 'create an user',
        MODIFY: 'modify user info',
        REMOVE: 'remove user info',
        RETRIEVE: 'get all users',
        RETRIEVE_BY_ID: 'get user by id'
    },
    DATABASE: {
        CONNECT: 'db connection',
        INSERT: 'insert info into db',
        SELECT: 'select info from db',
        UPDATE: 'update info in db',
        DELETE: 'delete info in db'
    },
    AUTH: {
        LOGIN: 'user login',
        ACTIVATION: 'user activation',
        FORGOT_PASS: 'forgot password',
        OTP_VERIFY: 'otp verification',
        NEW_PASS: 'create new password',
        CHNAGE_PASS: 'change old pass'
    },
    
    PRODUCT_TYPE: {
        CREATE: 'create a new product type',
        REMOVE: 'remove a new product type',
        RETRIEVE: 'get product type',
        RETRIEVE_BY_ID: 'get product type by id'
    },
};