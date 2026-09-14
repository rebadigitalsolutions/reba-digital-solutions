export function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.2 4.3c-2.34 0-3.94 1.43-3.94 4.05v2.09H7.7v2.96h2.56V21h3.24Z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.02 2.5c-5.26 0-9.52 4.26-9.52 9.52 0 1.68.44 3.3 1.28 4.74L2.5 21.5l4.85-1.27a9.5 9.5 0 0 0 4.67 1.22h.01c5.26 0 9.52-4.26 9.52-9.52 0-2.54-.99-4.93-2.79-6.72a9.45 9.45 0 0 0-6.74-2.71Zm0 17.42h-.01a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-2.88.75.77-2.81-.19-.29a7.9 7.9 0 0 1-1.21-4.2c0-4.37 3.56-7.93 7.94-7.93 2.12 0 4.11.83 5.61 2.33a7.87 7.87 0 0 1 2.32 5.61c0 4.37-3.56 7.92-7.93 7.92Zm4.34-5.94c-.24-.12-1.4-.69-1.62-.77-.22-.08-.37-.12-.53.12-.16.24-.6.77-.74.93-.14.16-.27.18-.5.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.18-1.39-1.31-1.63-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.75-.19-.46-.39-.4-.53-.4-.14-.01-.3-.01-.46-.01a.9.9 0 0 0-.65.3c-.22.24-.85.83-.85 2.03 0 1.2.87 2.35.99 2.51.12.16 1.72 2.63 4.17 3.69.58.25 1.04.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.94c0-1.42-.03-3.24-1.97-3.24-1.98 0-2.28 1.55-2.28 3.14V20H9.45V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.25 4.04 5.17V20Z" />
    </svg>
  );
}

export function YouTubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.6a2.7 2.7 0 0 0-1.9-1.9C18 5.2 12 5.2 12 5.2s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 9.3 2 12 2 12s0 2.7.4 4.4a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.4.4-4.4s0-2.7-.4-4.4ZM10 15.3V8.7l5.7 3.3-5.7 3.3Z" />
    </svg>
  );
}

export const socialIconMap: Record<
  string,
  (props: { size?: number }) => React.ReactElement
> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  whatsapp: WhatsAppIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
};
