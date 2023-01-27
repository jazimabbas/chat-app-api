type EnvVars = {
  mongoURI: string;
};

export const envVars: EnvVars = {
  mongoURI: process.env.MONGO_URI ?? "mongodb://localhost:27017/whatsapp-web",
};
