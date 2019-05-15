import { EventType } from "common";
import { IEventTransformer } from "../contracts/eventTransformer";

export abstract class ProviderTransformerFactory {
    public getTransformer(event: any): IEventTransformer {
        const eventType = this.getEventType(event);
        return this.transformers().get(eventType);
    }
    public abstract getEventType(event: any): EventType;
    public abstract transformers(): Map<EventType, IEventTransformer>;
}