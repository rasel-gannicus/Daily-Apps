"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from './useAuthState';
import { LoadingSpinner } from '../Loading Spinner/LoadingSpinner';

export function withAuthProtection(WrappedComponent: React.ComponentType, redirectPath = '/login') {
  return function WithAuthProtection(props: any) {
    const router = useRouter();
    const { user, loading } = useAuthState();

    useEffect(() => {
      if (!loading && !user) {
        router.replace(redirectPath);
      }
    }, [user, loading, router]);

    if (loading) {
      return <LoadingSpinner />;
    }

    if (user) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };
}

export function withAuthRedirect(WrappedComponent: React.ComponentType, redirectPath = '/') {
  return function WithAuthRedirect(props: any) {
    const router = useRouter();
    const { user, loading } = useAuthState();

    useEffect(() => {
      if (!loading && user) {
        router.replace(redirectPath);
      }
    }, [user, loading, router]);

    if (loading) {
      return <LoadingSpinner />;
    }

    if (!user) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };
}