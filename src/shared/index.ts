export type Quote = {
  author: string | null;
  text: string;
};

export type PluginAction = 'generateRandomQuote';

export type PluginMessagePayload = {
  type: PluginAction;
  randomQuote: Quote;
};

export type PluginCallbackFunction<T = void> = (
  payload: PluginMessagePayload,
) => T;
