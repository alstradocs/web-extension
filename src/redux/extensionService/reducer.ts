import { ExtensionServiceState } from '../../model'
import * as ACTION_TYPES from './types'

const initialState: ExtensionServiceState = {
	config: { id: '', initServices: [], destroyServices: [] }
}

/**
 * 
 * @param state 
 * @param action 
 */
export const extensionServiceReducer = (state: ExtensionServiceState = initialState, action: ACTION_TYPES.ExtensionServicesActions): ExtensionServiceState => {
	switch (action.type) {
		case ACTION_TYPES.EXTENSION_SERVICE_INIT_REQUEST:
			return {
				...state, config: action.payload
			}
		case ACTION_TYPES.EXTENSION_SERVICE_INIT_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.EXTENSION_SERVICE_INIT_FAILURE: return {
			...state,
		}
		case ACTION_TYPES.EXTENSION_SERVICE_DESTROY_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.EXTENSION_SERVICE_DESTROY_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.EXTENSION_SERVICE_DESTROY_FAILURE: return {
			...state,
		}
		case ACTION_TYPES.EXECUTE_SERVICE_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.EXECUTE_SERVICE_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.EXECUTE_SERVICE_FAILURE: return {
			...state,
		}
		default: return state;
	}
}
