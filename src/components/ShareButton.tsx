import { Share2 } from "lucide-react";

const SHARE_URL = "https://baccarat-pi.vercel.app";
const SHARE_TITLE = "Baccarat";
const SHARE_TEXT = "Check out this Baccarat app!";

export function ShareButton() {
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: SHARE_TITLE,
        text: SHARE_TEXT,
        url: SHARE_URL,
      });
      return;
    }
    await navigator.clipboard.writeText(SHARE_URL);
    alert("Link copied to clipboard");
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      aria-label="Share Baccarat"
    >
      <Share2 className="h-4 w-4" />
      <span>Share</span>
    </button>
  );
}
