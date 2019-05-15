import { IEvent } from "common";
import { TransformerProvider } from "./providers/providers";
import { TransformerFactory } from "./transformerFactory";

export class Transformer {
    
    public static transform(provider: TransformerProvider, event: any): IEvent {
        const transformer = TransformerFactory.getTransformer(provider, event);
        return transformer.transform(event);
    }
}