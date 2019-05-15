import { IEvent } from "../events/event";
import { IssueAction } from "../events/issue";
import { PullRequestAction } from "../events/pullRequest";

export interface IEventTransformer {
    transform: (event: any) => IEvent;
    getActionType: (event: any) => IssueAction|PullRequestAction;
}