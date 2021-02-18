import { Action } from "../../model/action"

export const EXTENSION_SERVICE_INIT_REQUEST = "extensionService/extension_service_init_request"
export const EXTENSION_SERVICE_INIT_SUCCESS = "extensionService/extension_service_init_success"
export const EXTENSION_SERVICE_INIT_FAILURE = "extensionService/extension_service_init_failure"
export const EXTENSION_SERVICE_DESTROY_REQUEST = "extensionService/extension_service_destroy_request"
export const EXTENSION_SERVICE_DESTROY_SUCCESS = "extensionService/extension_service_destroy_success"
export const EXTENSION_SERVICE_DESTROY_FAILURE = "extensionService/extension_service_destroy_failure"
export const EXECUTE_SERVICE_REQUEST = "extensionService/execute_service_request"
export const EXECUTE_SERVICE_SUCCESS = "extensionService/execute_service_success"
export const EXECUTE_SERVICE_FAILURE = "extensionService/execute_service_failure";

export interface ExtensionServiceInitRequestAction extends Action {
    type: "extensionService/extension_service_init_request"
}

export interface ExtensionServiceInitSuccessAction extends Action {
    type: "extensionService/extension_service_init_success"
}

export interface ExtensionServiceInitFailureAction extends Action {
    type: "extensionService/extension_service_init_failure"
}

export interface ExtensionServiceDestroyRequestAction extends Action {
    type: "extensionService/extension_service_destroy_request"
}

export interface ExtensionServiceDestroySuccessAction extends Action {
    type: "extensionService/extension_service_destroy_success"
}

export interface ExtensionServiceDestroyFailureAction extends Action {
    type: "extensionService/extension_service_destroy_failure"
}

export interface ExecuteServiceRequestAction extends Action {
    type: "extensionService/execute_service_request"
}

export interface ExecuteServiceSuccessAction extends Action {
    type: "extensionService/execute_service_success"
}

export interface ExecuteServiceFailureAction extends Action {
    type: "extensionService/execute_service_failure"
}

export type ExtensionServicesActions =  ExtensionServiceInitRequestAction 
    | ExtensionServiceInitSuccessAction
    | ExtensionServiceInitFailureAction 
    | ExtensionServiceDestroyRequestAction
    | ExtensionServiceDestroyRequestAction 
    | ExtensionServiceDestroySuccessAction
    | ExtensionServiceDestroyFailureAction
    | ExecuteServiceRequestAction
    | ExecuteServiceSuccessAction
    | ExecuteServiceFailureAction;