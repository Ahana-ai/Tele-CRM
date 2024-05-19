import { info, error } from '../config/Logger';

export function logActivity(status, data, errMsg, errObj, operation) {
    const errLog = {
        status: status,
        data: data,
        statusMsg: errMsg,
        errorObj: errObj,
        operation: operation
    };

    if (status === 'info') {
        info(JSON.stringify(errLog));
    } else {
        error(JSON.stringify(errLog));
    }
}