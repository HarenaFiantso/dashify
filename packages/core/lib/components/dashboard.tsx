import React, { FC, ReactNode } from 'react';
import { AuthApp, AuthAppProps } from '@dashify/auth';
import { ProviderContext, ProviderContextProps } from '@dashify/provider';

export type DashboardProps = AuthAppProps &
  ProviderContextProps & {
    children: ReactNode;
  };

/**
 * Main Dashboard component, entry point to the app.
 *
 * @Responsibilities:
 * - Initializes the authentication system via `AuthApp`.
 * - Provides data through the `ProviderContext`.
 * - Renders child components with context access.
 */
export const Dashboard: FC<DashboardProps> = ({
  providers,
  authProvider,
  children,
  requireAuth,
  authLoadingComponent,
}) => {
  return (
    <AuthApp
      authLoadingComponent={authLoadingComponent}
      requireAuth={requireAuth}
      authProvider={authProvider}
    >
      <ProviderContext providers={providers}>{children}</ProviderContext>
    </AuthApp>
  );
};
