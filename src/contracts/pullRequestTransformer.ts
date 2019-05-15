import { IPullRequestEvent, PullRequestAction } from "common";
import { IEventTransformer } from "./eventTransformer";

export abstract class PullRequestTransformer implements IEventTransformer {
    public transform(event: any): IPullRequestEvent {
        const action = this.getActionType(event);
        switch (action) {
            case PullRequestAction.OPENED:
                return this.opened(event);
            case PullRequestAction.CLOSED:
                return this.closed(event);
            case PullRequestAction.MERGED:
                return this.merged(event);
            default:
                return null;
        }
    }
    public abstract getActionType(event: any): PullRequestAction;
    public abstract opened(event: any): IPullRequestEvent;
    public abstract closed(event: any): IPullRequestEvent;
    public abstract merged(event: any): IPullRequestEvent;
}