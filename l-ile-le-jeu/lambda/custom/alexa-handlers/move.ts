import * as Alexa from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'
import { Game } from '../game'

export const MoveHandler = {
  canHandle (handlerInput: Alexa.HandlerInput): Promise<boolean> | boolean {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest' && request.intent.name === 'Move'
  },
  handle (handlerInput: Alexa.HandlerInput): Promise<Response> | Response {
    const GAME = new Game(handlerInput, 'Move')

    const speak = GAME.getSpeech() + ' --- ' + GAME.controls.getAction()

    return handlerInput.responseBuilder
      .speak(speak)
      .withSimpleCard(GAME.skillName(), speak)
      .withShouldEndSession(false)
      .reprompt('Qué ?')
      .getResponse()
  }
}
