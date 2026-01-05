import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "694b250103e2575c7385d5d7", 
  requiresAuth: true // Ensure authentication is required for all operations
});
