export const checkEnvironment = (): {
  env_check: boolean;
  missing_envs: string[];
  node_version: string;
} => {
  let env_check = true;
  const missing_envs = [] as string[];
  const envs = ["PORT", "LOG_LEVEL", "NODE_VERSION", "FRONT_END_PRIVATE_KEY"];

  envs.forEach((env) => {
    const env_val = process.env[env];
    if (!env_val) {
      env_check = false;
      missing_envs.push(env);
    }
  });

  const node_version = process.version;
  if (
    !process.env.NODE_VERSION?.trim() ||
    !process.version.includes(process.env.NODE_VERSION?.trim())
  ) {
    env_check = false;
  }

  return { env_check, missing_envs, node_version };
};
