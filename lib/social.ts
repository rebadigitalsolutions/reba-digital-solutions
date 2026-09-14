export type SocialLink = {
  id: string;
  label: string;
  handle: string;
  url: string;
  enabled: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@rebadigitalsolutions",
    url: "https://www.instagram.com/rebadigitalsolutions/",
    enabled: true,
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "@rebadigitalsolutions",
    url: "https://www.facebook.com/profile.php?id=61579534472049",
    enabled: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    handle: "+91 82828 59551",
    url: "https://wa.me/918282859551",
    enabled: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "",
    url: "", // TODO: add LinkedIn company page URL
    enabled: false,
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "",
    url: "", // TODO: add YouTube channel URL
    enabled: false,
  },
];

export const enabledSocialLinks = socialLinks.filter(
  (link) => link.enabled && link.url
);
