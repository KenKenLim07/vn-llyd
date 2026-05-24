import type { ComponentType } from "react";
import type { SocialPlatform } from "@/content/types";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/icons/SocialIcons";

type IconProps = { className?: string };

export const socialIconMap: Record<
  SocialPlatform,
  ComponentType<{ className?: string }>
> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  YouTube: YouTubeIcon,
};
