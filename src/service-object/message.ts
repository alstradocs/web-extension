import { IExecutionContext } from "@alstradocs/service-objects";

export  interface RemoteObjectMessage<T> {
    type: string;
    context: IExecutionContext<T>
}