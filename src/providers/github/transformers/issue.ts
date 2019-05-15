import { IIssueEvent, IssueAction } from "../../../contracts/events/issue";
import { IssueTransformer } from "../../../contracts/transformers/issueTransformer";


export class GithubIssueTransformer extends IssueTransformer {
    public getActionType(event: any): IssueAction {
        return event.action as IssueAction;
    }    
    public opened(event: any): IIssueEvent {
        return {
            id: event.issue.id,
            action: IssueAction.OPENED,
        }
    }
    public closed(event: any): IIssueEvent {
        return {
            id: event.issue.id,
            action: IssueAction.CLOSED,
        }
    }
    public edited(event: any): IIssueEvent {
        return {
            id: event.issue.id,
            action: IssueAction.EDITED,
        }
    }
}