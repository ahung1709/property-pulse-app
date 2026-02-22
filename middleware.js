import nextAuthMiddleware from 'next-auth/middleware';

export default function middleware(req) {
  return nextAuthMiddleware(req);
}

export const config = {
  matcher: ['/properties/add', '/profile', '/properties/saved', '/messages'],
};
