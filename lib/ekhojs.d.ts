declare type legacyMicroserviceInput = {
    body: object;
    params: object;
    query: object;
};
declare type legacyFacade = <Input, Output>(callback: Function, experimentName: string, context: object, Ekhomicroservice: string, legacyInput: Input, legacyMicroserviceInput: legacyMicroserviceInput) => Output;
declare type module = {
    wrap: legacyFacade;
};
declare const ekhojs: module;
export default ekhojs;
