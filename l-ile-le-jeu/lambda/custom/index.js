"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alexa = require("ask-sdk-core");
var error_1 = require("./alexa-handlers/error");
var exit_1 = require("./alexa-handlers/exit");
var handlerFactory_1 = require("./alexa-handlers/handlerFactory");
var help_1 = require("./alexa-handlers/help");
var move_1 = require("./alexa-handlers/move");
var repeat_1 = require("./alexa-handlers/repeat");
var session_end_1 = require("./alexa-handlers/session-end");
var unhandle_1 = require("./alexa-handlers/unhandle");
var welcome_1 = require("./alexa-handlers/welcome");
var skillBuilder = Alexa.SkillBuilders.custom();
exports.handler = skillBuilder
    .addRequestHandlers.apply(skillBuilder, [welcome_1.WelcomeHandler,
    repeat_1.RepeatHandler].concat(handlerFactory_1.HandlerFactory.createFromJson(), [help_1.HelpHandler,
    move_1.MoveHandler,
    exit_1.ExitHandler,
    session_end_1.SessionEndedRequestHandler,
    unhandle_1.UnhandleHandler])).addErrorHandlers(error_1.ErrorHandler)
    .lambda();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9DQUFxQztBQUNyQyxnREFBcUQ7QUFDckQsOENBQW1EO0FBQ25ELGtFQUFnRTtBQUNoRSw4Q0FBbUQ7QUFDbkQsOENBQW1EO0FBQ25ELGtEQUF1RDtBQUN2RCw0REFBeUU7QUFDekUsc0RBQTJEO0FBQzNELG9EQUF5RDtBQUV6RCxJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBRWpELE9BQU8sQ0FBQyxPQUFPLEdBQUcsWUFBWTtLQUMzQixrQkFBa0IsT0FESCxZQUFZLEdBRTFCLHdCQUFjO0lBQ2Qsc0JBQWEsU0FDViwrQkFBYyxDQUFDLGNBQWMsRUFBRSxHQUNsQyxrQkFBVztJQUNYLGtCQUFXO0lBQ1gsa0JBQVc7SUFDWCx3Q0FBMEI7SUFDMUIsMEJBQWUsSUFFaEIsZ0JBQWdCLENBQUMsb0JBQVksQ0FBQztLQUM5QixNQUFNLEVBQUUsQ0FBQSJ9