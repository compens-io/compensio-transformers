import { IEvent, TransformerProviderType } from "compensio-common";
import { TransformerFactory } from "./transformerFactory";

export class Transformer {
    
    public static transform(provider: TransformerProviderType, event: any): IEvent {
        const transformer = TransformerFactory.getTransformer(provider, event);
        return transformer.transform(event);
    }
}