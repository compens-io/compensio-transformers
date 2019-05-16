import { IPullRequestEvent, PullRequestAction } from "compensio-common";
import { PullRequestTransformer } from "../../../contracts/pullRequestTransformer";


export class GithubPullRequestTransformer extends PullRequestTransformer {
    public getActionType(event: any): PullRequestAction {
        const action = event.action as PullRequestAction;
        if (action === PullRequestAction.CLOSED && event.pull_request.merged) {
            return PullRequestAction.MERGED;
        }
        return action;
    }    
    public opened(event: any): IPullRequestEvent {
        return {
            id: event.pull_request.id,
            action: PullRequestAction.OPENED,
        }
    }
    public closed(event: any): IPullRequestEvent {
        return {
            id: event.pull_request.id,
            action: PullRequestAction.CLOSED,
        }
    }
    public merged(event: any): IPullRequestEvent {
        return {
            id: event.pull_request.id,
            action: PullRequestAction.MERGED,
        }
    }
}