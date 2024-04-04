enum SocialShare {
  facebook = "facebook",
  instagram = "instagram",
  telegram = "telegram",
  copy = "copy",
}

export function handleSocialShare(
  shareType: `${SocialShare}`,
  permalink?: string
) {
  switch (shareType) {
    case "facebook": {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
        "_blank"
      );
      return;
    }
    case "telegram": {
      window.open(
        ` https://telegram.me/share/url?url=${window.location.href}`,
        "_blank"
      );
      return;
    }
    case "instagram":
    case "copy": {
      navigator.clipboard.writeText(window.location.href);
      return;
    }
  }
}
