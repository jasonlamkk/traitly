// create your object
import { traitly } from '../../src/core/index.mjs';
import { ConsoleDebuggable, LogLevels, Taggable } from '../../src/devTools/index.mjs';
import { Requestable, WithAutoParameters, WithQuery } from '../../src/http/index.mjs';

const TeamInfoRequest = ({teamId,tagId,newOnly}) =>
    traitly(
        Taggable('TeamInfoRequest'),    // tag the object in console log
        ConsoleDebuggable(LogLevels.LOG),// remove this line disable logging
        Requestable({base: 'http://localhost:3000/',method:'GET',endPoint:'team/{teamId}/tag/{tagId:1}?new={newOnly:true}'}),
        WithAutoParameters,
        WithQuery({hello:'world', sortDir: 'asc'}),// allow adding extra query
    )({teamId,tagId,newOnly});
// export default RecordSearchObject;  // do this if you are making a module

// usage
// `node --experimental-modules examples/httpRequest.mjs`
const obj = TeamInfoRequest({teamId: 4, tagId: 23, newOnly: true})

obj.log("before modify", obj.buildUrl());
obj.log("after modify", obj.setTeamId(8).setTagId(51).setNewOnly(false).buildUrl())
// obj.log("Shall print, ", "later method override earlier method", obj);

