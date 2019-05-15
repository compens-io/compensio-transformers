import { IEvent, IssueAction, PullRequestAction } from "common";

export interface IEventTransformer {
    transform: (event: any) => IEvent;
    getActionType: (event: any) => IssueAction|PullRequestAction;
}