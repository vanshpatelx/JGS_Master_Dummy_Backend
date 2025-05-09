
    const schema = {
  "asyncapi": "2.6.0",
  "info": {
    "title": "Stock WebSocket API",
    "version": "1.0.0",
    "description": "This WebSocket server allows clients to subscribe/unsubscribe to stock tickers and receive real-time stock price updates.\n\n**Connection URL:** `ws://localhost:8080`\n\n**Authentication:** JWT Token passed as `Sec-WebSocket-Protocol` during handshake.\n\n**Example:**\n```js\nconst ws = new WebSocket(\"ws://localhost:8080\", \"your-jwt-token\");\n```\n"
  },
  "servers": {
    "websocket": {
      "url": "ws://localhost:8080",
      "protocol": "ws",
      "description": "WebSocket stock price server"
    }
  },
  "defaultContentType": "application/json",
  "channels": {
    "stocks/subscribe": {
      "description": "Subscribe to a stock's real-time updates",
      "subscribe": {
        "summary": "Receive price updates",
        "message": {
          "name": "StockUpdate",
          "summary": "Stock price update message",
          "payload": {
            "type": "object",
            "properties": {
              "t": {
                "type": "string",
                "description": "Ticker symbol",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "b": {
                "type": "number",
                "description": "Bid price",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "s": {
                "type": "number",
                "description": "Sell price",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "l": {
                "type": "number",
                "description": "Low price",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "ltp": {
                "type": "number",
                "description": "Last traded price",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "h": {
                "type": "number",
                "description": "High price",
                "x-parser-schema-id": "<anonymous-schema-7>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          }
        }
      }
    },
    "stocks/control": {
      "description": "Send subscription/unsubscription messages",
      "publish": {
        "summary": "Send subscribe/unsubscribe actions",
        "message": {
          "oneOf": [
            {
              "name": "SubscribeMessage",
              "summary": "Subscribe to a stock ticker",
              "payload": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "subscribe"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "ticker": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  }
                },
                "required": [
                  "type",
                  "ticker"
                ],
                "x-parser-schema-id": "<anonymous-schema-8>"
              }
            },
            {
              "name": "UnsubscribeMessage",
              "summary": "Unsubscribe from a stock ticker",
              "payload": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "unsubscribe"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  },
                  "ticker": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  }
                },
                "required": [
                  "type",
                  "ticker"
                ],
                "x-parser-schema-id": "<anonymous-schema-11>"
              }
            }
          ]
        }
      }
    }
  },
  "components": {
    "messages": {
      "SubscribeMessage": "$ref:$.channels.stocks/control.publish.message.oneOf[0]",
      "UnsubscribeMessage": "$ref:$.channels.stocks/control.publish.message.oneOf[1]",
      "StockUpdate": "$ref:$.channels.stocks/subscribe.subscribe.message"
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":true},"sidebar":{"showOperations":"byDefault"}};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  