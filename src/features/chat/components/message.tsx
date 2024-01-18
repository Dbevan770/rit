import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type MessageProps = {
  message: string;
  username: string;
  timestamp: string;
  self: boolean;
};

export const Message = ({
  message,
  username,
  timestamp,
  self,
}: MessageProps) => {
  return (
    <Card
      className={cn(
        "bg-zinc-900",
        self ? "col-start-2 bg-emerald-600" : "col-start-1"
      )}
    >
      <CardHeader>
        <CardTitle>{username}</CardTitle>
      </CardHeader>
      <CardContent>{message}</CardContent>
    </Card>
  );
};
