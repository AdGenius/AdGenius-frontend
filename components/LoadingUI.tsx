// components/ui/Loading.tsx
import { Loader2 } from "lucide-react";

interface LoadingProps {
  size?: number;
  text?: string;
  fullScreen?: boolean;
}

export default function Loading({
  size = 32,
  text = "Loading...",
  fullScreen = false,
}: LoadingProps) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-2">
      <Loader2 className="animate-spin text-gray-600" size={size} />
      {text && <p className="text-gray-500 text-sm">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="flex h-screen items-center justify-center">{content}</div>
    );
  }

  return content;
}
