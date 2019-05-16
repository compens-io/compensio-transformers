import { IIssueEvent, IssueAction } from "compensio-common";
import { IEventTransformer } from "./eventTransformer";

export abstract class IssueTransformer implements IEventTransformer {
    public transform(event: any): IIssueEvent {
        const action = this.getActionType(event);
        switch (action) {
            case IssueAction.OPENED:
                return this.opened(event);
            case IssueAction.CLOSED:
                return this.closed(event);
            case IssueAction.EDITED:
                return this.edited(event);
            default:
                return null;
        }
    }
    public abstract getActionType(event: any): IssueAction;
    public abstract opened(event: any): IIssueEvent;
    public abstract closed(event: any): IIssueEvent;
    public abstract edited(event: any): IIssueEvent;
}