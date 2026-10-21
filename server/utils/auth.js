
const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

// JWT configuration
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = "2h";
const JWT_ALGORITHM = "HS256";

// Ensure a secure JWT secret is configured
if (!JWT_SECRET || JWT_SECRET.length < 32) {
  throw new Error(
    "JWT_SECRET must be configured and contain at least 32 characters."
  );
}

// Reusable authentication error
const AuthenticationError = new GraphQLError(
  "Could not authenticate user.",
  {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }
);

// Extract a Bearer token from the Authorization header
const getToken = (req) => {
  const authorization = req?.headers?.authorization;

  if (
    typeof authorization !== "string" ||
    !authorization.startsWith("Bearer ")
  ) {
    return null;
  }

  const token = authorization.slice(7).trim();

  return token || null;
};

// Authenticate incoming GraphQL requests
const authMiddleware = async ({ req }) => {
  const token = getToken(req);

  // Unauthenticated users can still access public queries
  if (!token) {
    return { user: null };
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET, {
      algorithms: [JWT_ALGORITHM],
    });

    // Preserve the existing JWT payload structure
    const user = decoded?.data;

    if (!user || !user._id) {
      return { user: null };
    }

    return { user };
  } catch (error) {
    // Invalid or expired tokens are treated as unauthenticated
    return { user: null };
  }
};

// Generate a signed JWT after successful login or registration
const signToken = ({ username, _id }) => {
  if (!username || !_id) {
    throw new Error(
      "A username and user ID are required to generate a token."
    );
  }

  const payload = {
    username,
    _id,
  };

  return jwt.sign(
    { data: payload },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRATION,
      algorithm: JWT_ALGORITHM,
    }
  );
};

module.exports = {
  AuthenticationError,
  authMiddleware,
  signToken,
};
