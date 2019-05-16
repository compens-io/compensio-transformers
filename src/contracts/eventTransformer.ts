import { IEvent, IssueAction, PullRequestAction } from "compensio-common";

export interface IEventTransformer {
    transform: (event: any) => IEvent;
    getActionType: (event: any) => IssueAction|PullRequestAction;
}