const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHIT_CHAT_TOKEN = "chit-chat-token";

export { corsOptions, CHIT_CHAT_TOKEN };
