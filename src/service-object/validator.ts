import { IExecutionContext, IServiceContext } from "@alstradocs/service-objects";
import { AbstractExtensionServiceObject } from "./service";

/**
 * 
 */
export interface ValidationMessage {
    type: string
    message: string
}

/**
 * 
 */
export interface ValidationResult {
    hasError: boolean
    messages?: ValidationMessage[]
}

/**
 * 
 */
export interface Validator<T> {

    /**
     * 
     * @param context 
     */
    validate(context: IServiceContext<T>): ValidationResult;
}

/**
 * 
 */
export interface ValidatorServiceConfig {
    
    /**
     * 
     */
    onSuccessContexts?: IExecutionContext<any>[];

    /**
     * 
     */
    onFailureContexts?: IExecutionContext<any>[];
}


/**
 * 
 */
export abstract class AbstractValidator<T>  extends AbstractExtensionServiceObject<T, ValidationResult> implements Validator<T> {
    
    /**
     * 
     * @param context 
     */
    doExecute(context: IServiceContext<T>): ValidationResult {
        return this.validate(context);
    }

    /**
     * 
     * @param context 
     */
    validate(context: IServiceContext<T>): ValidationResult {
        let validationResult = this.doValidate(context);

        if(!validationResult.hasError) 
            this.executeSuccessService(context);
        else {
            this.executeFailureService(context);
        };
        return validationResult;
    }

    /**
     * 
     * @param context 
     */
    executeSuccessService(context: IServiceContext<any>) {
        let config = context.data as ValidatorServiceConfig;

        if(!config.onSuccessContexts) return;
        if(!Array.isArray(config.onSuccessContexts)) return;

        config.onSuccessContexts.forEach((executorContexts) => {
            context.serviceExecutor.executeService(executorContexts);
        });
    }

    /**
     * 
     * @param context 
     */
    executeFailureService(context: IServiceContext<any>) {
        let config = context.data as ValidatorServiceConfig;
        console.log('AbstractValidator::executeFailureService context =', context);
        if(!config.onFailureContexts) return;
        if(!Array.isArray(config.onFailureContexts)) return;

        console.log('AbstractValidator::executing failure services', config.onFailureContexts);
        config.onFailureContexts.forEach((executorContexts) => {
            console.log('AbstractValidator::executing failure context', executorContexts);
            context.serviceExecutor.executeService(executorContexts);
        });
    }

    /**
     * 
     * @param context 
     */
    protected abstract doValidate(context: IServiceContext<any>): ValidationResult;
}