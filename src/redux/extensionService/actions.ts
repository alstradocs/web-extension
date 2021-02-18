import { ExtensionServiceConfig } from '../../model';

import * as ACTION_TYPES from './types'

export const extensionServiceInitRequestAction = (payload: ExtensionServiceConfig): ACTION_TYPES.ExtensionServiceInitRequestAction => {
	return {
		type: ACTION_TYPES.EXTENSION_SERVICE_INIT_REQUEST as typeof ACTION_TYPES.EXTENSION_SERVICE_INIT_REQUEST,
		payload
	}
}

export const extensionServiceInitSuccessAction = (payload: any): ACTION_TYPES.ExtensionServiceInitSuccessAction => {
	return {
		type: ACTION_TYPES.EXTENSION_SERVICE_INIT_SUCCESS as typeof ACTION_TYPES.EXTENSION_SERVICE_INIT_SUCCESS,
		payload
	};
}

export const extensionServiceInitFailureAction = (payload: any): ACTION_TYPES.ExtensionServiceInitFailureAction => {
	return {
		type: ACTION_TYPES.EXTENSION_SERVICE_INIT_FAILURE as typeof ACTION_TYPES.EXTENSION_SERVICE_INIT_FAILURE,
		payload
	};
}

export const extensionServiceDestroyRequestAction = (payload: any): ACTION_TYPES.ExtensionServiceDestroyRequestAction => {
	return {
		type: ACTION_TYPES.EXTENSION_SERVICE_DESTROY_REQUEST as typeof ACTION_TYPES.EXTENSION_SERVICE_DESTROY_REQUEST,
		payload
	};
}

export const extensionServiceDestroySuccessAction = (payload: any): ACTION_TYPES.ExtensionServiceDestroySuccessAction => {
	return {
		type: ACTION_TYPES.EXTENSION_SERVICE_DESTROY_SUCCESS as typeof ACTION_TYPES.EXTENSION_SERVICE_DESTROY_SUCCESS,
		payload
	};
}

export const extensionServiceDestroyFailureAction = (payload: any): ACTION_TYPES.ExtensionServiceDestroyFailureAction => {
	return {
		type: ACTION_TYPES.EXTENSION_SERVICE_DESTROY_FAILURE as typeof ACTION_TYPES.EXTENSION_SERVICE_DESTROY_FAILURE,
		payload
	};
}

export const executeServiceRequestAction = (payload: any): ACTION_TYPES.ExecuteServiceRequestAction => {
	return {
		type: ACTION_TYPES.EXECUTE_SERVICE_REQUEST as typeof ACTION_TYPES.EXECUTE_SERVICE_REQUEST,
		payload
	};
}

export const executeServiceSuccessAction = (payload: any): ACTION_TYPES.ExecuteServiceSuccessAction => {
	return {
		type: ACTION_TYPES.EXECUTE_SERVICE_SUCCESS as typeof ACTION_TYPES.EXECUTE_SERVICE_SUCCESS,
		payload
	};
}

export const executeServiceFailureAction = (payload: any): ACTION_TYPES.ExecuteServiceFailureAction => {
	return {
		type: ACTION_TYPES.EXECUTE_SERVICE_FAILURE as typeof ACTION_TYPES.EXECUTE_SERVICE_FAILURE,
		payload
	};
}
